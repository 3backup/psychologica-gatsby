import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ServiceLanding from "../components/ServiceLanding";
import TextLink from "../components/styles/TextLink";

const AlcoholSupportPage = () => {
  const data = useStaticQuery(graphql`
    query AlcoholSupportFactsQuery {
      site {
        siteMetadata {
          businessAddress { streetAddress postalCode addressLocality }
        }
      }
      datoCmsOfferprice { offerpricePrice }
      datoCmsHowitlookslike { processTime }
    }
  `);
  const price = data.datoCmsOfferprice?.offerpricePrice?.trim();
  const duration = data.datoCmsHowitlookslike?.processTime
    ?.replace(/^Czas sesji:\s*/i, "")
    .trim();
  const address = data.site?.siteMetadata?.businessAddress;

  if (![price, duration, address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim())) {
    throw new Error("Brak ceny, czasu sesji lub adresu dla strony pomocy przy problemie alkoholowym");
  }

  const faq = [
    {
      question: "Ile kosztuje terapia od uzależnień?",
      answer: `Indywidualna sesja psychoterapii uzależnień kosztuje ${price} i trwa ${duration}. Aby ustalić termin konsultacji w Rzeszowie lub online, skontaktuj się z gabinetem.`,
    },
    {
      question: "Na czym polega psychoterapia uzależnień?",
      answer: "Psychoterapia uzależnień obejmuje pracę nad rozumieniem mechanizmów problemu, emocji i sposobów reagowania oraz zmianą codziennego funkcjonowania. Podczas konsultacji omawiamy Twoją sytuację, potrzeby i zasoby. Cel oraz sposób pracy ustalamy indywidualnie.",
    },
    {
      question: "Ile może trwać terapia uzależnień?",
      answer: `Pojedyncza sesja trwa ${duration}. Długość całego procesu zależy od sytuacji, potrzeb i uzgodnionego celu pracy. Liczbę i częstotliwość spotkań omawiamy podczas konsultacji i przyglądamy się im w trakcie współpracy.`,
    },
    {
      question: "Kiedy iść do psychiatry, a kiedy do psychologa?",
      answer: "Psycholog prowadzi konsultacje i pomoc psychologiczną, a lekarz psychiatra ocenia potrzeby leczenia medycznego, w tym farmakoterapii. Te formy pomocy mogą się uzupełniać. Objawy odstawienne wymagają oceny lekarskiej, a drgawki, omamy lub silne splątanie — pilnej pomocy medycznej.",
    },
    {
      question: "W czym psycholog pomaga osobie uzależnionej od alkoholu?",
      answer: "Psycholog pomaga rozpoznać trudności związane z piciem i ich wpływ na emocje, relacje oraz codzienne obowiązki. Praca może obejmować lepsze rozumienie własnych reakcji, rozpoznawanie sytuacji ryzyka i rozwijanie innych sposobów radzenia sobie. Zakres pomocy dopasowuję do osoby i wspólnie ustalonego celu.",
    },
  ];

  return (
    <ServiceLanding
      seo={{
        pageTitle: "Psycholog od uzależnień alkoholowych Rzeszów | Psychologica",
        pageDescription: "Szukasz wsparcia u psychologa od uzależnień alkoholowych w Rzeszowie? Dowiedz się, na czym polega taka pomoc, ile trwa i jak wygląda pierwszy kontakt.",
        pageImageAlt: "Renata Zuba – psycholog kliniczny i specjalista psychoterapii uzależnień",
        pageType: "WebPage",
        service: {
          name: "Pomoc przy problemie alkoholowym w Rzeszowie",
          serviceType: "Psychoterapia uzależnień",
          description: "Indywidualna pomoc psychologiczna i psychoterapia dla osób dorosłych z problemem alkoholowym oraz wsparcie ich bliskich w Rzeszowie i online.",
          audience: "osoby dorosłe z problemem alkoholowym i ich bliscy",
        },
        breadcrumbs: [
          { name: "Strona główna", path: "/" },
          { name: "Psychoterapia uzależnień", path: "/psychoterapia-uzaleznien-rzeszow/" },
          { name: "Pomoc przy problemie alkoholowym", path: "/psycholog-od-uzaleznien-alkoholowych-rzeszow/" },
        ],
        faq,
      }}
      eyebrow="Pomoc przy problemie alkoholowym"
      title="Psycholog od uzależnień alkoholowych w Rzeszowie"
      lead="Psycholog od uzależnień alkoholowych w Rzeszowie pomaga osobom dorosłym, które niepokoi własne picie, oraz ich bliskim. W Psychologica możesz rozpocząć od konsultacji, podczas której omawiamy Twoją sytuację i możliwe formy pomocy."
      heroImage={
        <StaticImage
          src="../images/TopAbout.jpg"
          alt="Renata Zuba – psycholog kliniczny i specjalista psychoterapii uzależnień"
          layout="constrained"
          width={480}
          height={600}
          quality={85}
          placeholder="blurred"
          loading="eager"
          formats={["auto", "avif", "webp"]}
        />
      }
      facts={["Pomoc dla dorosłych i bliskich", "Rzeszów i online", `Sesja ${duration}`, `Koszt ${price}`]}
      introTitle="Co obejmuje pomoc przy problemie alkoholowym?"
      introParagraphs={[
        "Pracuję indywidualnie z osobami dorosłymi, które doświadczają trudności związanych z alkoholem. Konsultacja pozwala przyjrzeć się piciu, jego miejscu w codziennym życiu i temu, z czym chcesz sobie poradzić. Nie musisz mieć gotowej diagnozy ani pewności, jaki rodzaj pomocy będzie odpowiedni.",
        "Podczas psychoterapii przyglądamy się mechanizmom problemu, emocjom i sposobom reagowania. Rozmawiamy o sytuacjach poprzedzających picie, jego konsekwencjach oraz Twoich zasobach. Cel pracy dopasowujemy do aktualnej sytuacji i potrzeb.",
        {
          id: "broader-addiction-support",
          content: <>Szerszy zakres pracy z osobami uzależnionymi oraz ich rodzinami opisuję na stronie{" "}
            <TextLink to="/psychoterapia-uzaleznien-rzeszow/">psychoterapii uzależnień w Rzeszowie</TextLink>.</>,
        },
      ]}
      trustTitle="Kwalifikacje i doświadczenie"
      trustText="Jestem psychologiem klinicznym. Posiadam certyfikat specjalisty psychoterapii uzależnień nr 123 oraz certyfikat superwizora psychoterapii uzależnień nr 34. Prowadzę indywidualną pracę z osobami dorosłymi oraz pomoc bliskim osób uzależnionych."
      areasTitle="Kiedy warto zgłosić się na konsultację?"
      areas={[
        { title: "Niepokój dotyczący picia", description: "Zastanawiasz się, czy alkohol zajmuje zbyt dużo miejsca w Twoim życiu. Możesz o tym porozmawiać, nawet jeśli nie jesteś pewien skali problemu." },
        { title: "Trudności z kontrolowaniem ilości", description: "Zdarza Ci się wypić więcej, niż planujesz, albo trudno Ci ograniczyć picie mimo podejmowanych prób." },
        { title: "Konsekwencje w relacjach i obowiązkach", description: "Picie staje się źródłem konfliktów, wpływa na pracę lub inne zobowiązania. Niepokój mogą sygnalizować także bliscy." },
        { title: "Alkohol w odpowiedzi na napięcie", description: "Sięgasz po alkohol, gdy pojawia się stres lub trudne emocje. Chcesz lepiej zrozumieć ten sposób reagowania i poszukać innych możliwości." },
        { title: "Dalsza praca po wcześniejszym leczeniu", description: "Po zakończonym leczeniu potrzebujesz wsparcia w codziennym funkcjonowaniu, rozpoznawaniu trudności i utrzymywaniu zmiany." },
        { title: "Troska o bliską osobę", description: "Picie partnera lub członka rodziny wpływa na Twoje emocje i poczucie bezpieczeństwa. Możesz zgłosić się po pomoc dla siebie." },
      ]}
      processTitle="Jak wygląda współpraca?"
      processLead="Pierwsza rozmowa służy rozpoznaniu potrzeb i możliwości pomocy. Nie wymaga deklaracji rozpoczęcia całego procesu ani wcześniejszego przygotowania specjalistycznego opisu problemu."
      steps={[
        { title: "Konsultacja", description: "Opowiadasz o swojej sytuacji, historii picia i obecnych trudnościach. Omawiamy Twoje oczekiwania, zasoby i wpływ alkoholu na codzienne życie." },
        { title: "Cel i zasady", description: "Wspólnie ustalamy, nad czym chcesz pracować i jaka forma pomocy będzie odpowiednia. Uzgadniamy zasady oraz częstotliwość spotkań, uwzględniając Twoją sytuację." },
        { title: "Regularna praca", description: "Przyglądamy się emocjom, schematom i sytuacjom ryzyka. Pracujemy nad sposobami radzenia sobie oraz zmianami w codziennym funkcjonowaniu, odnosząc je do ustalonego celu." },
      ]}
      distinctionTitle="Pomoc dla osoby pijącej i dla bliskich"
      distinctionParagraphs={[
        "Jeśli zgłaszasz się z powodu własnego picia, punktem wyjścia jest Twoja sytuacja, trudności i potrzeby. Możemy rozmawiać również o wątpliwościach dotyczących zmiany. Nie musisz wcześniej wiedzieć, jak ma wyglądać dalsza współpraca.",
        "Jeśli jesteś bliską osobą kogoś, kto pije, konsultacje dotyczą Twoich własnych emocji, granic i sposobów radzenia sobie. Możesz rozpocząć je niezależnie od tego, czy ta osoba korzysta z terapii. Nie przejmujesz w ten sposób odpowiedzialności za jej decyzje.",
        {
          id: "psychological-support",
          content: <>Gdy potrzebujesz wsparcia także w kryzysie, napięciu lub trudnościach w relacjach, poznaj oferowaną{" "}
            <TextLink to="/pomoc-psychologiczna-rzeszow/">pomoc psychologiczną dla dorosłych</TextLink>. Formę pracy dobieramy podczas konsultacji.</>,
        },
      ]}
      additionalSections={[
        {
          id: "przykladowe-sytuacje",
          title: "Przykładowe sytuacje, z którymi można zgłosić się po pomoc",
          paragraphs: [
            "Poniższe sytuacje są modelowe: ilustrują powody zgłoszenia, a nie historie konkretnych klientów ani wyniki terapii.",
            "Osoba zauważa, że coraz częściej sięga po alkohol po trudnym dniu, a rozmowy z partnerem o piciu kończą się konfliktem. Nie wie, czy jest uzależniona. Konsultacja może służyć przyjrzeniu się temu, co się dzieje, i omówieniu możliwej dalszej pomocy.",
            "Bliska osoba czuje napięcie i bezradność wobec picia członka rodziny, który nie chce rozpocząć terapii. Może zgłosić się na własną konsultację, aby porozmawiać o swoich potrzebach, granicach i dostępnych sposobach wsparcia.",
          ],
        },
        {
          id: "pomoc-lekarska",
          title: "Psychoterapia a pomoc lekarska",
          paragraphs: [
            "Psychoterapia i leczenie medyczne mogą się uzupełniać. Konsultacja psychologiczna nie zastępuje oceny lekarskiej ani medycznego leczenia zespołu abstynencyjnego.",
            "Przy zależności fizycznej nagłe odstawienie alkoholu może być niebezpieczne. Jeśli przy ograniczaniu lub odstawianiu pojawiają się objawy odstawienne, potrzebna jest pomoc lekarska. Drgawki, omamy lub silne splątanie wymagają pilnej pomocy medycznej.",
            { id: "medical-source", content: <>Więcej o objawach odstawiennych i leczeniu: <a href="https://www.nhs.uk/conditions/alcohol-use-disorder/">informacje NHS o problemach związanych z alkoholem</a> (po angielsku).</> },
          ],
        },
        {
          id: "cena-czas-miejsce",
          title: "Cena, czas i miejsce spotkań",
          paragraphs: [
            `Indywidualna sesja kosztuje ${price} i trwa ${duration}. Długość całego procesu i częstotliwość spotkań ustalamy indywidualnie, w odniesieniu do potrzeb i celu pracy.`,
            { id: "office-location", content: <>Spotkania odbywają się w gabinecie przy ul. {address.streetAddress}, {address.postalCode} {address.addressLocality}.{" "}<TextLink to="/lokalizacja/">Sprawdź dojazd do gabinetu</TextLink>. Możliwe są również spotkania online, jeśli ta forma jest odpowiednia do Twojej sytuacji i zapewnia poufne warunki rozmowy.</> },
            { id: "appointment-contact", content: <>Aby zapytać o termin pierwszej konsultacji, przejdź na <TextLink to="/skontaktuj-sie/">stronę kontaktową gabinetu</TextLink>. Możesz krótko opisać, z czym chcesz się zgłosić, i wskazać preferowaną formę spotkania.</> },
          ],
        },
      ]}
      faq={faq}
      closingTitle="Zacznij od rozmowy o swojej sytuacji"
      closingText="Jeśli niepokoi Cię własne picie lub szukasz pomocy dla siebie jako bliskiej osoby, skontaktuj się z gabinetem. Pierwsza konsultacja służy omówieniu potrzeb i możliwości dalszej pomocy."
    />
  );
};

export default AlcoholSupportPage;
