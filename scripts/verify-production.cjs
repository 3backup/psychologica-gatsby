const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const path = require("node:path");
const { verifyCms } = require("./cms-release-check.cjs");
const { sitemapUrls, verifyLocalBusiness, verifyLlms } = require("./verify-discovery.cjs");
const locationMap = require("../src/config/location-map.cjs");

const root = path.join(__dirname, "..");
const repository = "3backup/psychologica-gatsby";
const remote = `https://github.com/${repository}.git`;
const ref = "refs/heads/main";
const domain = "https://www.psychologica.pl";
const supportPath = "/pomoc-psychologiczna-rzeszow/";

const internalLinks = [
  { source: "/oferta-terapeutyczna/", section: "Pomoc psychologiczna", destination: supportPath,
    anchor: "pomocy psychologicznej dla dorosłych w Rzeszowie",
    paragraph: "Poznaj zakres pomocy psychologicznej dla dorosłych w Rzeszowie i przebieg konsultacji." },
  { source: "/o-mnie/", section: "Psycholog kliniczny Rzeszów", destination: supportPath,
    anchor: "pomoc psychologiczna dla dorosłych",
    paragraph: "Sprawdź, jak wygląda oferowana przeze mnie pomoc psychologiczna dla dorosłych." },
  { source: "/lokalizacja/", section: "Gabinet psychologiczny przy ul. Mikołaja Reja", destination: supportPath,
    anchor: "pomoc psychologiczną dla dorosłych",
    paragraph: "W tym gabinecie prowadzę pomoc psychologiczną dla dorosłych." },
  { source: "/psychoterapia-uzaleznien-rzeszow/", section: "Pomoc dla osoby uzależnionej i dla bliskich", destination: supportPath,
    anchor: "pomocy psychologicznej dla dorosłych",
    paragraph: "Wsparcie w innych trudnościach opisuję na stronie pomocy psychologicznej dla dorosłych." },
  { source: supportPath, section: "Wsparcie dopasowane do aktualnej sytuacji", destination: "/lokalizacja/",
    anchor: "Sprawdź dojazd do gabinetu", paragraph: "Dostępne są również sesje zdalne. Sprawdź dojazd do gabinetu." },
  { source: supportPath, section: "Pomoc psychologiczna czy psychoterapia?", destination: "/oferta-terapeutyczna/",
    anchor: "Psychoterapia dorosłych", paragraph: "Psychoterapia dorosłych jest regularnym i zwykle dłuższym procesem." },
  { source: supportPath, section: "Pomoc psychologiczna czy psychoterapia?", destination: "/psychoterapia-uzaleznien-rzeszow/",
    anchor: "psychoterapii uzależnień",
    paragraph: "Jeśli problem dotyczy uzależnienia Twojego lub bliskiej osoby, poznaj zakres psychoterapii uzależnień." },
];

async function read(url, format) {
  const response = await fetch(url, {
    headers: { Accept: format === "json" ? "application/json" : "text/html", "Cache-Control": "no-cache" },
    signal: AbortSignal.timeout(30000),
  });
  assert(response.ok, `Odczyt produkcji nie powiódł się: ${response.status}`);
  return format === "json" ? response.json() : response.text();
}

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

function htmlText(value) {
  const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  return normalizeText(value
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (match, entity) => {
      if (entity[0] !== "#") return entities[entity.toLowerCase()];
      const hex = entity[1].toLowerCase() === "x";
      return String.fromCodePoint(parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10));
    }));
}

function verifyInternalLinks(pages) {
  for (const link of internalLinks) {
    const html = pages[link.source];
    assert.equal(typeof html, "string", `Brak strony źródłowej ${link.source}`);
    const body = html.replace(/<(script|header|footer|nav)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
    const section = [...body.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/gi)]
      .map((match) => match[1])
      .find((content) => [...content.matchAll(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/gi)]
        .some((heading) => htmlText(heading[1]).includes(link.section)));
    assert(section, `Brak sekcji „${link.section}” na ${link.source}`);
    const paragraph = [...section.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((match) => match[1])
      .find((content) => htmlText(content).replace(/\s+([.,;:!?])/g, "$1").includes(link.paragraph));
    assert(paragraph, `Brak kontekstu odnośnika na ${link.source}: ${link.paragraph}`);
    const anchor = [...paragraph.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
      .find((match) => htmlText(match[2]) === link.anchor);
    assert(anchor, `Brak kotwicy „${link.anchor}” na ${link.source}`);
    assert.equal(anchor[1].match(/\bhref=["']([^"']+)["']/i)?.[1], link.destination,
      `Nieprawidłowy cel linku na ${link.source}`);
    assert(!/\btarget\s*=|\brel=["'][^"']*\bnofollow\b/i.test(anchor[1]),
      `Link musi działać w tej samej karcie i bez nofollow: ${link.source}`);
    assert.equal(typeof pages[link.destination], "string", `Niepotwierdzona strona docelowa ${link.destination}`);
  }
}

async function readSupportFacts() {
  const config = require(path.join(root, "gatsby-config.js"));
  const source = config.plugins.find((plugin) => plugin.resolve === "gatsby-source-datocms");
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${source.options.apiToken}`,
      "X-Environment": "main",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query SupportReleaseVerification { offerprice { offerprice offerpricePrice } howitlookslike { processTime } global { email phonenumber adress } }",
    }),
    signal: AbortSignal.timeout(30000),
  });
  assert(response.ok, `Nie można odczytać opublikowanego cennika CMS (${response.status})`);
  const result = await response.json();
  assert(!result.errors, "CMS nie potwierdził opublikowanego cennika i czasu sesji");
  const price = result.data?.offerprice?.offerpricePrice;
  const priceLabel = result.data?.offerprice?.offerprice;
  const processTime = result.data?.howitlookslike?.processTime;
  const address = config.siteMetadata?.businessAddress;
  const email = result.data?.global?.email;
  const telephone = result.data?.global?.phonenumber;
  assert([price, priceLabel, processTime, address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim()), "Niepełne dane cennika, czasu sesji lub adresu");
  assert(email && telephone, "Brak danych kontaktowych firmy w CMS");
  assert.equal(normalizeText(result.data?.global?.adress || ""),
    `ul. ${address.streetAddress}, ${address.postalCode} ${address.addressLocality}`,
    "Adres w konfiguracji różni się od opublikowanego adresu CMS");
  return {
    price: normalizeText(price),
    priceLabel: normalizeText(priceLabel),
    duration: normalizeText(processTime.replace(/^Czas sesji:\s*/i, "")),
    address,
    email,
    telephone,
  };
}

function verifyLocationPage(html, facts) {
  const street = facts.address.streetAddress;
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  assert.equal(htmlText(title || ""), `Gabinet psychologiczny ${street.split("/")[0]}, ${facts.address.addressLocality} | Psychologica`);
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => htmlText(match[1]));
  assert.deepEqual(headings, [`Gabinet psychologiczny przy ul. ${street} w Rzeszowie`]);
  const description = html.match(/<meta\b(?=[^>]*\bname="description")[^>]*>/i)?.[0]
    .match(/\bcontent="([^"]*)"/i)?.[1];
  assert.equal(htmlText(description || ""), `Gabinet psychologiczny przy ul. ${street} w Rzeszowie. Sprawdź adres, dojazd komunikacją miejską i samochodem oraz możliwości spotkań online.`);
  const hero = html.match(/<section\b(?=[^>]*\bid="hero")[^>]*>([\s\S]*?)<\/section>/i)?.[1];
  assert(hero, "Brak sekcji wprowadzającej lokalizacji");
  const introduction = hero.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1];
  assert(htmlText(introduction || "").startsWith(`Gabinet psychologiczny znajduje się przy ul. ${street} w Rzeszowie.`));
  const sectionHeadings = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map((match) => htmlText(match[1]));
  for (const heading of ["Jak wyglądają spotkania w gabinecie i online?", "Dla kogo jest ta forma spotkań?", "Co warto sprawdzić przed kontaktem?"]) {
    assert.equal(sectionHeadings.filter((value) => value === heading).length, 1, `Brak lub powtórzony śródtytuł: ${heading}`);
  }
  const text = htmlText(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""));
  for (const content of [
    `Spotkania mogą odbywać się osobiście w gabinecie przy ul. ${street} w Rzeszowie albo zdalnie.`,
    "Oferuję sesje online za pomocą Zoom, Skype, Microsoft Teams, a także sesje telefoniczne.",
    "Sesje zdalne odbywają się na takich samych zasadach jak sesje osobiste",
    "Ta strona jest dla osób, które chcą sprawdzić, gdzie znajduje się gabinet",
    "Przed umówieniem spotkania możesz zdecydować, czy wolisz wizytę osobistą, czy sesję zdalną.",
    "Dojazd komunikacją miejską", "Dojazd samochodem",
  ]) assert(text.includes(content), `Brak informacji o lokalizacji: ${content}`);
  assert(!/\[czas odpowiedzi\]|czas realizacji|Wycena w/.test(text), "Nieuzupełniony lub niedopasowany szablon lokalizacji");
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  for (const image of images) assert(/\balt="[^"]*"/i.test(image), "Obraz bez alt na stronie lokalizacji");
  const photoAlt = `Wnętrze gabinetu psychologicznego Psychologica przy ul. ${street} w Rzeszowie`;
  assert(images.some((image) => image.includes(`alt="${photoAlt}"`)), "Brak opisu zdjęcia gabinetu");
  for (const image of images.filter((image) => /\balt=""/i.test(image))) {
    assert(/\bdata-placeholder-image|testimonial-bg/.test(image), "Pusty alt jest przeznaczony wyłącznie dla dekoracji i placeholderów");
  }
  const svgs = [...html.matchAll(/<svg\b[^>]*>/gi)].map((match) => match[0]);
  for (const svg of svgs) assert(/\baria-hidden="true"|\baria-label="[^"]+"/.test(svg), "Nieopisany SVG na stronie lokalizacji");
  assert(/<a\b[^>]*\bhref="\/oferta-terapeutyczna\/"[^>]*>opisu usług<\/a>/.test(html));
  assert(/<a\b[^>]*\bhref="\/skontaktuj-sie\/"[^>]*>Umów konsultację<\/a>/.test(html));
  verifyOpenStreetMap(html, facts);
}

function verifyOpenStreetMap(html, facts) {
  const frames = [...html.matchAll(/<iframe\b[^>]*>/gi)].map((match) => match[0]);
  assert.equal(frames.length, 1, "Wymagana jest jedna osadzona mapa");
  const frame = frames[0];
  const source = htmlText(frame.match(/\bsrc="([^"]+)"/)?.[1] || "");
  assert.equal(source, locationMap.embedUrl, "Mapa nie odpowiada zatwierdzonej lokalizacji");
  assert.equal(htmlText(frame.match(/\btitle="([^"]+)"/)?.[1] || ""),
    `Mapa OpenStreetMap: gabinet Psychologica, ${facts.address.streetAddress}, ${facts.address.addressLocality}`);
  assert(/\bloading="lazy"/.test(frame), "Mapa powinna ładować się dopiero w pobliżu widoku");
  assert(/\breferrerPolicy="strict-origin-when-cross-origin"/i.test(frame), "Nieprawidłowa polityka referera mapy");
  const url = new URL(source);
  assert.equal(url.origin, "https://www.openstreetmap.org");
  assert.equal(url.searchParams.get("marker"), "50.0477919,21.9924575", "Zmiana potwierdzonej pinezki gabinetu");
  const [west, south, east, north] = url.searchParams.get("bbox").split(",").map(Number);
  assert(west < locationMap.longitude && east > locationMap.longitude && south < locationMap.latitude && north > locationMap.latitude);
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
    .filter((match) => htmlText(match[1].match(/\bhref="([^"]+)"/)?.[1] || "") === locationMap.mapUrl);
  assert(links.length >= 2, "Adres i link większej mapy muszą prowadzić do tej samej pinezki");
  assert(links.some((match) => htmlText(match[2]) === "Otwórz większą mapę w OpenStreetMap"), "Brak linku do większej mapy");
  assert(!/maps\.googleapis\.com|google-maps-react|google\.com\/maps|GoogleApiWrapper/.test(html), "Pozostała stara integracja map Google");
  assert(!require("../package.json").dependencies["google-maps-react"], "Nieusunięta biblioteka map Google");
}

function verifySupportPage(html, facts) {
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  assert.equal(title, "Pomoc psychologiczna Rzeszów | Renata Zuba", "Pomoc psychologiczna: nieprawidłowy title");
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => htmlText(match[1]));
  assert.deepEqual(headings, ["Pomoc psychologiczna dla dorosłych w Rzeszowie"], "Pomoc psychologiczna: nieprawidłowy H1");

  const areaStart = html.indexOf("W jakich sytuacjach warto zgłosić się po pomoc?");
  assert(areaStart >= 0, "Brak zakresu pomocy");
  const areaSection = html.slice(areaStart, html.indexOf("</section>", areaStart));
  const areas = [...areaSection.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map((match) => htmlText(match[1]));
  assert.deepEqual(areas, [
    "Kryzys i trudna zmiana", "Lęk i napięcie", "Przewlekły stres", "Trudne emocje",
    "Niska samoocena", "Strata i żałoba", "Obniżony nastrój", "Trudności w relacjach", "Problemy ze snem",
  ], "Zakres pomocy musi zawierać dziewięć zatwierdzonych obszarów");

  const visibleFaq = [...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/gi)].map((match) => {
    const question = match[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i);
    const answer = match[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
    assert(question && answer, "Niepełne pytanie lub odpowiedź FAQ");
    return { question: htmlText(question[1]), answer: htmlText(answer[1]) };
  });
  assert.deepEqual(visibleFaq.map((item) => item.question), [
    "W czym psycholog pomaga?", "Ile kosztuje pomoc psychologiczna?",
    "Czy pierwsze spotkanie zobowiązuje do rozpoczęcia psychoterapii?",
    "Czym pomoc psychologiczna różni się od psychoterapii?", "Czy spotkania mogą odbywać się online?",
    "Jak długo trwa konsultacja psychologiczna?",
  ], "FAQ musi zawierać sześć pytań w zatwierdzonej kolejności");
  assert.equal(visibleFaq[0].answer, "Psycholog pomaga lepiej zrozumieć aktualną sytuację, emocje i trudności oraz znaleźć sposoby radzenia sobie z nimi. W Psychologica pracuję z osobami dorosłymi doświadczającymi między innymi kryzysu, lęku, stresu, obniżonego nastroju, niskiej samooceny i trudności w relacjach. Cele i formę pomocy ustalamy podczas konsultacji.");
  assert.equal(visibleFaq[1].answer, `Spotkanie kosztuje ${facts.price} i trwa ${facts.duration}. Aby ustalić termin konsultacji w Rzeszowie lub online, skontaktuj się z gabinetem.`, "Cena lub czas w FAQ nie odpowiadają opublikowanym danym CMS");
  assert.equal(visibleFaq[5].answer, `Jedno spotkanie trwa ${facts.duration}. Liczbę i częstotliwość kolejnych spotkań ustalamy indywidualnie po rozpoznaniu potrzeb i celu pomocy.`, "Czas konsultacji nie odpowiada CMS");

  const nodes = [...html.matchAll(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((match) => {
      const document = JSON.parse(match[1]);
      return document["@graph"] || [document];
    });
  const faqNodes = nodes.filter((node) => node["@type"] === "FAQPage");
  assert.equal(faqNodes.length, 1, "Wymagany jest jeden obiekt FAQPage");
  assert(Array.isArray(faqNodes[0].mainEntity), "Brak pytań w FAQPage");
  const structuredFaq = faqNodes[0].mainEntity.map((item) => {
    assert.equal(item["@type"], "Question");
    assert.equal(item.acceptedAnswer?.["@type"], "Answer");
    return { question: normalizeText(item.name), answer: normalizeText(item.acceptedAnswer.text) };
  });
  assert.deepEqual(structuredFaq, visibleFaq, "Widoczne FAQ różni się od danych strukturalnych");

  const body = htmlText(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""));
  for (const text of [
    `Sesja ${facts.duration}`, `${facts.priceLabel} ${facts.price}`,
    `przy ul. ${facts.address.streetAddress}, ${facts.address.postalCode} ${facts.address.addressLocality}`,
    "Jestem psychologiem klinicznym i absolwentką psychologii Uniwersytetu Jagiellońskiego.",
    "Pracuję z osobami dorosłymi, dopasowując formę pomocy do ich sytuacji i potrzeb.",
    "Smutek i przygnębienie oraz potrzeba wsparcia w lepszym rozumieniu własnych emocji i sytuacji.",
    "Problemy w relacjach z innymi, kryzys w związku lub poczucie osamotnienia.",
    "Wsparcie psychologiczne dla osób doświadczających problemów ze snem.",
  ]) assert(body.includes(text), `Brak lub niezgodna informacja na podstronie: ${text}`);
  assert(/<a\b[^>]*\bhref=["']\/o-mnie\/["']/i.test(html), "Brak odnośnika do kwalifikacji");
}

function verifyTherapyPage(html, facts) {
  assert.equal(htmlText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ""),
    "Psychoterapia dorosłych Rzeszów | Psychologica");
  assert.deepEqual([...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => htmlText(m[1])),
    ["Psychoterapia dorosłych w Rzeszowie"]);
  const description = html.match(/<meta\b(?=[^>]*\bname="description")[^>]*>/i)?.[0]
    .match(/\bcontent="([^"]*)"/i)?.[1] || "";
  assert(htmlText(description).includes(`Sesja ${facts.duration}, koszt ${facts.price}.`),
    "Oferta: opis Google nie odpowiada cennikowi CMS");
  const body = htmlText(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""));
  for (const content of [
    "Psychoterapia dorosłych jest formą pomocy dla osób, które chcą lepiej zrozumieć swoje trudności",
    "Dla kogo jest psychoterapia", "Lęk, fobie i utrzymujące się napięcie",
    "Obniżony nastrój i doświadczenie depresji", "Przewlekły stres i przeciążenie zawodowe",
    "Niska samoocena i nadmierny samokrytycyzm", "Trudności w relacjach i przeżywaniu emocji",
    "Strata, kryzys, choroba lub trudna zmiana życiowa", "Jak wygląda współpraca",
    "Jak wygląda proces", "1. Pierwszy kontakt", "2. Ustalenie celu i zasad pracy",
    "3. Regularne spotkania", "Czas i koszt spotkań", `Czas sesji: ${facts.duration}`,
    `${facts.priceLabel}: ${facts.price}`,
    `przy ul. ${facts.address.streetAddress}, ${facts.address.postalCode} ${facts.address.addressLocality}`,
    "Jestem psychologiem klinicznym i absolwentką psychologii Uniwersytetu Jagiellońskiego.",
  ]) assert(body.includes(content), `Oferta: brak informacji: ${content}`);
  const visibleFaq = [...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/gi)].map((m) => ({
    question: htmlText(m[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i)?.[1] || ""),
    answer: htmlText(m[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] || ""),
  }));
  assert.deepEqual(visibleFaq.map((item) => item.question), [
    "Jak wygląda pierwsze spotkanie z psychoterapeutą?", "Jak często odbywają się sesje psychoterapii?",
    "Czy prowadzona jest psychoterapia online?", "W jakim nurcie prowadzona jest psychoterapia?",
    "Czego nie mówić na psychoterapii?", "Czy terapia raz na 2 tygodnie ma sens?",
    "Co jest lepsze psychoterapia czy psycholog?",
  ], "Oferta: wymagane cztery dotychczasowe i trzy nowe pytania FAQ");
  assert(visibleFaq[2].answer.includes(`Spotkania zdalne trwają ${facts.duration}`), "Oferta: czas w FAQ niezgodny z CMS");
  for (const item of visibleFaq.slice(4)) {
    const sentences = item.answer.match(/[^.!?]+[.!?]/g) || [];
    assert(sentences.length >= 2 && sentences.length <= 4, `Oferta: FAQ musi mieć 2–4 zdania: ${item.question}`);
  }
  assert(visibleFaq[5].answer.includes("Częstotliwość ustalamy indywidualnie podczas konsultacji"),
    "Oferta: brak indywidualnego ustalania rytmu terapii");
  const faqNodes = [...html.matchAll(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((m) => { const document = JSON.parse(m[1]); return document["@graph"] || [document]; })
    .filter((node) => node["@type"] === "FAQPage");
  assert.equal(faqNodes.length, 1, "Oferta: wymagany jeden FAQPage");
  assert.deepEqual(faqNodes[0].mainEntity.map((item) => ({
    question: normalizeText(item.name), answer: normalizeText(item.acceptedAnswer.text),
  })), visibleFaq, "Oferta: FAQ w HTML i JSON-LD różni się");
  assert(!/<img\b(?![^>]*\balt=)[^>]*>/i.test(html), "Oferta: obraz bez alt");
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const alt = match[0].match(/\balt="([^"]*)"/i)?.[1];
    assert(alt === "" || !/Zdjęcie z realizacji|bg-testimonial|Tło dla sekcji|2Q==/i.test(alt),
      "Oferta: szablonowy lub techniczny tekst alternatywny");
  }
  for (const match of html.matchAll(/<svg\b[^>]*>/gi)) {
    assert(/aria-hidden="true"|aria-label="[^"]+"/.test(match[0]), "Oferta: SVG bez określonej roli dostępności");
  }
  for (const route of ["/lokalizacja/", "/o-mnie/", "/pomoc-psychologiczna-rzeszow/", "/skontaktuj-sie/"]) {
    assert(html.includes(`href="${route}"`), `Oferta: brak odnośnika ${route}`);
  }
}

function verifyAddictionPage(html, facts) {
  assert.equal(htmlText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ""),
    "Psychoterapia uzależnień Rzeszów | Renata Zuba");
  assert.deepEqual([...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => htmlText(m[1])),
    ["Psychoterapia uzależnień w Rzeszowie"]);
  const body = html.replace(/<(script|header|footer|nav)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  const text = htmlText(body);
  for (const content of [
    `Sesja ${facts.duration}`, `Koszt ${facts.price}`, `${facts.priceLabel} ${facts.price}`,
    `przy ul. ${facts.address.streetAddress}, ${facts.address.postalCode} ${facts.address.addressLocality}`,
    "Psychoterapia uzależnień obejmuje pracę nad rozumieniem mechanizmów problemu, emocji i sposobów reagowania.",
    "Renata Zuba jest psychologiem klinicznym.", "certyfikat specjalisty psychoterapii uzależnień nr 123",
    "certyfikat superwizora psychoterapii uzależnień nr 34", "Konsultacja", "Cel i plan pracy", "Regularna praca",
    "Formę i częstotliwość spotkań ustalamy indywidualnie podczas konsultacji",
    "Omawiamy również Twoje oczekiwania i trudności, z którymi chcesz pracować.",
    "Uzgadniamy formę i częstotliwość spotkań, tak aby plan pracy odpowiadał Twojej sytuacji.",
    "Przyglądamy się bieżącym trudnościom i temu, jak podejmowana praca odnosi się do wspólnie ustalonego celu.",
    "Można rozpocząć ją niezależnie od tego, czy osoba uzależniona korzysta z terapii.",
  ]) assert(text.includes(content), `Uzależnienia: brak lub niezgodna informacja: ${content}`);
  const visibleFaq = [...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/gi)].map((m) => ({
    question: htmlText(m[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i)?.[1] || ""),
    answer: htmlText(m[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] || ""),
  }));
  assert.deepEqual(visibleFaq.map((item) => item.question), [
    "Ile kosztuje terapia od uzależnień?", "Na czym polega psychoterapia uzależnień?",
    "Czy na konsultację może zgłosić się bliska osoba osoby uzależnionej?",
    "Czy przed pierwszą wizytą trzeba mieć postawione rozpoznanie?",
    "Czy psychoterapia uzależnień może odbywać się online?", "Jak długo trwa sesja?",
  ], "Uzależnienia: wymagane dwa nowe i cztery istniejące FAQ");
  assert.equal(visibleFaq[0].answer, `Indywidualna sesja psychoterapii uzależnień kosztuje ${facts.price} i trwa ${facts.duration}. Aby ustalić termin spotkania w Rzeszowie lub online, skontaktuj się z gabinetem.`);
  assert.equal(visibleFaq[1].answer, "Psychoterapia uzależnień polega na lepszym rozumieniu mechanizmów problemu, własnych emocji i sposobów reagowania oraz pracy nad zmianą codziennego funkcjonowania. Pierwsze konsultacje służą omówieniu sytuacji, potrzeb i celu spotkań. Sposób pracy dopasowuję indywidualnie do osoby i jej sytuacji.");
  assert.equal(visibleFaq[5].answer, `Sesja trwa ${facts.duration}. Częstotliwość i przewidywany sposób pracy ustalamy indywidualnie po pierwszych konsultacjach.`);
  const faqNodes = [...html.matchAll(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((m) => { const document = JSON.parse(m[1]); return document["@graph"] || [document]; })
    .filter((node) => node["@type"] === "FAQPage");
  assert.equal(faqNodes.length, 1, "Uzależnienia: wymagany jeden FAQPage");
  assert.deepEqual(faqNodes[0].mainEntity.map((item) => ({
    question: normalizeText(item.name), answer: normalizeText(item.acceptedAnswer.text),
  })), visibleFaq, "Uzależnienia: FAQ w HTML i JSON-LD różni się");
  const sections = [...body.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/gi)].map((m) => m[1]);
  for (const link of [
    { heading: "Zmiana zaczyna się od bezpiecznego rozpoznania sytuacji", anchor: "Sprawdź dojazd do gabinetu", route: "/lokalizacja/", context: "Spotkania mogą odbywać się w gabinecie przy ul." },
    { heading: "Pomoc dla osoby uzależnionej i dla bliskich", anchor: "psychoterapia dorosłych", route: "/oferta-terapeutyczna/", context: "Jeśli chcesz poznać szerszy opis pracy nad emocjami, relacjami i powtarzającymi się trudnościami" },
  ]) {
    const section = sections.find((value) => htmlText(value).includes(link.heading));
    assert(section, `Uzależnienia: brak sekcji ${link.heading}`);
    const paragraph = [...section.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => m[1]).find((value) => htmlText(value).includes(link.context));
    assert(paragraph, `Uzależnienia: brak kontekstu linku ${link.route}`);
    const anchor = [...paragraph.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
      .find((m) => htmlText(m[2]) === link.anchor);
    assert.equal(anchor?.[1].match(/\bhref="([^"]+)"/i)?.[1], link.route, `Uzależnienia: nieprawidłowy link ${link.anchor}`);
    assert(!/\btarget\s*=|\brel=["'][^"']*\bnofollow\b/i.test(anchor[1]));
  }
  for (const route of ["/lokalizacja/", "/oferta-terapeutyczna/", "/o-mnie/", supportPath, "/skontaktuj-sie/"]) {
    assert(body.includes(`href="${route}"`), `Uzależnienia: brak linku w treści do ${route}`);
  }
}

async function main() {
  const commit = process.argv[2];
  assert(/^[a-f0-9]{40}$/.test(commit || ""), "Podaj pełny SHA zatwierdzonego wydania");
  const githubSha = execFileSync("git", ["ls-remote", remote, ref], { cwd: root, encoding: "utf8" }).split(/\s+/)[0];
  assert.equal(githubSha, commit, "GITHUB: docelowy ref nie wskazuje wydania");
  console.log(`GITHUB: OK ${repository} ${ref} ${commit}`);

  const cms = await verifyCms();
  const release = await read(`${domain}/release.json?verify=${commit}`, "json");
  assert.equal(release.commit, commit, "APLIKACJA: domena produkcyjna nie używa wydania");
  assert.deepEqual(release.cms, cms, "BAZA: konfiguracja/schemat buildu różnią się od obecnego CMS");
  assert.equal(release.databaseChangesRequired, false, "Wydanie wymaga osobnej weryfikacji zmian bazy");

  const deployments = JSON.parse(execFileSync("gh", ["api", `repos/${repository}/deployments?sha=${commit}`], { encoding: "utf8" }));
  const deployment = deployments.find((item) => item.sha === commit && item.environment.toLowerCase() === "production");
  assert(deployment, "APLIKACJA: brak produkcyjnego wdrożenia SHA w GitHub");
  const statuses = JSON.parse(execFileSync("gh", ["api", `repos/${repository}/deployments/${deployment.id}/statuses`], { encoding: "utf8" }));
  assert.equal(statuses[0]?.state, "success", "APLIKACJA: brak udanego wdrożenia");

  const html = await read(`${domain}/?verify=${commit}`);
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  assert.equal(title, "Psycholog i psychoterapeuta w Rzeszowie – Renata Zuba | Psychologica", "Nieprawidłowy title");
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "Strona musi zawierać jeden H1");
  for (const text of ["W czym mogę pomóc", "Dla kogo jest ta pomoc", "Jak zacząć współpracę", "Ile kosztują usługi psychologa w Rzeszowie?", "Jak wygląda współpraca krok po kroku?", "Dla kogo jest ta usługa?", "Gdzie odbywają się spotkania?"]) {
    assert(html.includes(text), `Brak treści: ${text}`);
  }
  assert(!/<img\b(?![^>]*\balt=)[^>]*>/i.test(html), "Obraz bez atrybutu alt");
  const facts = await readSupportFacts();
  const supportHtml = await read(`${domain}/pomoc-psychologiczna-rzeszow/?verify=${commit}`);
  verifySupportPage(supportHtml, facts);
  const pages = { [supportPath]: supportHtml };
  for (const route of [...new Set(internalLinks.flatMap((link) => [link.source, link.destination]))]) {
    if (!pages[route]) pages[route] = await read(`${domain}${route}?verify=${commit}`);
  }
  verifyInternalLinks(pages);
  verifyTherapyPage(pages["/oferta-terapeutyczna/"], facts);
  verifyAddictionPage(pages["/psychoterapia-uzaleznien-rzeszow/"], facts);
  verifyLocationPage(pages["/lokalizacja/"], facts);
  if (!pages["/skontaktuj-sie/"]) pages["/skontaktuj-sie/"] = await read(`${domain}/skontaktuj-sie/?verify=${commit}`);
  assert(pages["/skontaktuj-sie/"].includes(locationMap.mapUrl.replace(/&/g, "&amp;")), "Kontakt: brak zgodnego odnośnika OpenStreetMap");
  const pageUrls = [];
  for (const sitemap of sitemapUrls(await read(`${domain}/sitemap-index.xml?verify=${commit}`))) {
    pageUrls.push(...sitemapUrls(await read(`${sitemap}?verify=${commit}`)));
  }
  assert(pageUrls.length >= 9, "Brak oczekiwanych podstron w mapie witryny");
  for (const url of pageUrls) {
    const route = new URL(url).pathname;
    if (!pages[route]) pages[route] = route === "/" ? html : await read(`${url}?verify=${commit}`);
    verifyLocalBusiness(pages[route], facts);
  }
  const llmsResponse = await fetch(`${domain}/llms.txt?verify=${commit}`, { signal: AbortSignal.timeout(30000) });
  assert.equal(llmsResponse.status, 200, "llms.txt musi być dostępny bez przekierowania i błędu");
  assert.equal(new URL(llmsResponse.url).pathname, "/llms.txt");
  assert(/text\/plain.*charset=utf-8/i.test(llmsResponse.headers.get("content-type") || ""), "llms.txt musi być tekstem UTF-8");
  const llmsLinks = verifyLlms(await llmsResponse.text(), pageUrls);
  for (const url of llmsLinks.filter((url) => !pageUrls.includes(url))) await read(url);
  console.log(`APLIKACJA: OK ${domain} — SHA, title, H1, treści i alt potwierdzone`);
  console.log("POMOC PSYCHOLOGICZNA: OK — 9 obszarów, 6 zgodnych FAQ/JSON-LD, kwalifikacje, adres i cennik CMS");
  console.log("OFERTA TERAPEUTYCZNA: OK — opis Google, zakres, proces, cennik CMS, 7 zgodnych FAQ/JSON-LD, obrazy i linki");
  console.log("PSYCHOTERAPIA UZALEŻNIEŃ: OK — treści, kwalifikacje, adres, cennik CMS, 6 zgodnych FAQ/JSON-LD i 5 celów linkowania w treści");
  console.log("LINKOWANIE: OK — 4 nowe linki do pomocy i 3 z pomocy, we właściwym kontekście; strony dostępne");
  console.log(`LOCALBUSINESS: OK — ${pageUrls.length} podstron, jeden wpis firmy z miastem i danymi zgodnymi z CMS`);
  console.log(`LLMS.TXT: OK — tekst UTF-8, opis firmy, ${llmsLinks.length} opisanych i dostępnych linków`);
  console.log("LOKALIZACJA: OK — title, H1, adres we wstępie, opis Google, 3 sekcje, linki i dostępność obrazów");
  console.log("MAPA: OK — OpenStreetMap z właściwą pinezką, dostępny opis, większy widok i zgodny link kontaktowy; integracja Google usunięta");
  console.log(`BAZA: zweryfikowana; brak wymaganych zmian. DatoCMS ${cms.siteId}/${cms.environment}; schemat ${cms.schemaSha256}`);
}

module.exports = { readSupportFacts, verifySupportPage, verifyInternalLinks, verifyLocationPage, verifyOpenStreetMap, verifyTherapyPage, verifyAddictionPage };

if (require.main === module) {
  main().catch((error) => {
    console.error(`NIEKOMPLETNE/ZABLOKOWANE: ${error.message}`);
    process.exitCode = 1;
  });
}
