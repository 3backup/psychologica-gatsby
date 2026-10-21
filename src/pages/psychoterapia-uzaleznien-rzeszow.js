import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ServiceLanding from "../components/ServiceLanding";
import TextLink from "../components/styles/TextLink";

const PsychoterapiaUzaleznienPage = () => {
  const data = useStaticQuery(graphql`
    query AddictionSupportFactsQuery {
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
    throw new Error("Brak ceny, czasu sesji lub adresu dla strony psychoterapii uzależnień");
  }

  const faq = [
    {
      question: "Ile kosztuje terapia od uzależnień?",
      answer:
        `Indywidualna sesja psychoterapii uzależnień kosztuje ${price} i trwa ${duration}. Aby ustalić termin spotkania w Rzeszowie lub online, skontaktuj się z gabinetem.`,
    },
    {
      question: "Na czym polega psychoterapia uzależnień?",
      answer:
        "Psychoterapia uzależnień polega na lepszym rozumieniu mechanizmów problemu, własnych emocji i sposobów reagowania oraz pracy nad zmianą codziennego funkcjonowania. Pierwsze konsultacje służą omówieniu sytuacji, potrzeb i celu spotkań. Sposób pracy dopasowuję indywidualnie do osoby i jej sytuacji.",
    },
    {
      question: "Czy na konsultację może zgłosić się bliska osoba osoby uzależnionej?",
      answer:
        "Tak. Pomoc jest skierowana także do partnerów i członków rodzin, którzy doświadczają skutków uzależnienia bliskiej osoby, niezależnie od tego, czy ta osoba podjęła terapię.",
    },
    {
      question: "Czy przed pierwszą wizytą trzeba mieć postawione rozpoznanie?",
      answer:
        "Nie. Pierwsze konsultacje służą omówieniu sytuacji, używania substancji lub skutków uzależnienia w rodzinie oraz ustaleniu właściwych dalszych kroków.",
    },
    {
      question: "Czy psychoterapia uzależnień może odbywać się online?",
      answer:
        "Tak, jeżeli ta forma jest odpowiednia do sytuacji i zapewnia bezpieczne, poufne warunki rozmowy. Możliwe są również spotkania w gabinecie w Rzeszowie.",
    },
    {
      question: "Jak długo trwa sesja?",
      answer:
        `Sesja trwa ${duration}. Częstotliwość i przewidywany sposób pracy ustalamy indywidualnie po pierwszych konsultacjach.`,
    },
  ];
  return (
    <ServiceLanding
      seo={{
        pageTitle: "Psychoterapia uzależnień i terapia alkoholowa w Rzeszowie | Renata Zuba",
        pageDescription:
          `Psychoterapia uzależnień w Rzeszowie i online dla osób dorosłych oraz ich bliskich. Pomoc przy problemie alkoholowym i innych uzależnieniach, konsultacja, sesja ${duration}, koszt ${price}.`,
        pageImageAlt: "Renata Zuba – specjalista psychoterapii uzależnień",
        pageType: "WebPage",
        service: {
          name: "Psychoterapia uzależnień w Rzeszowie",
          serviceType: "Psychoterapia uzależnień",
          description:
            "Psychoterapia dla osób dorosłych z problemem uzależnienia oraz członków ich rodzin w Rzeszowie i online.",
          audience: "osoby dorosłe i członkowie rodzin",
        },
        breadcrumbs: [
          { name: "Strona główna", path: "/" },
          { name: "Oferta terapeutyczna", path: "/oferta-terapeutyczna/" },
          { name: "Psychoterapia uzależnień", path: "/psychoterapia-uzaleznien-rzeszow/" },
        ],
        faq,
      }}
      eyebrow="Psychoterapia uzależnień"
      title="Psychoterapia uzależnień w Rzeszowie"
      lead="Profesjonalna pomoc dla osób dorosłych zmagających się z uzależnieniem oraz dla bliskich, którzy doświadczają jego konsekwencji w rodzinie lub związku."
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
      facts={["Certyfikat specjalisty nr 123", "Gabinet w Rzeszowie", "Spotkania online", `Sesja ${duration}`, `Koszt ${price}`]}
      introTitle="Zakres wsparcia"
      introParagraphs={[
        {
          id: "alcohol-support",
          content: <>
            Psychoterapia uzależnień obejmuje{" "}
            <TextLink to="/psycholog-od-uzaleznien-alkoholowych-rzeszow/">pomoc przy problemie alkoholowym w Rzeszowie</TextLink>{" "}
            oraz wsparcie związane z używaniem innych substancji.
            Jest przeznaczona dla osób dorosłych, które chcą lepiej zrozumieć
            swoje używanie alkoholu lub innych substancji, odzyskać wpływ na codzienne
            funkcjonowanie i przyjrzeć się sytuacjom, w których najtrudniej o zmianę.
          </>,
        },
        "Psychoterapia uzależnień obejmuje pracę nad rozumieniem mechanizmów problemu, emocji i sposobów reagowania. Przyglądamy się także czynnikom, które podtrzymują trudność. Jeśli zgłaszasz się z powodu picia alkoholu, konsultacja może być pierwszym krokiem do uporządkowania sytuacji i ustalenia odpowiedniej formy pomocy.",
        "Pomoc obejmuje także partnerów i członków rodzin. Jeśli żyjesz blisko osoby uzależnionej, możesz skorzystać z konsultacji, by lepiej zrozumieć własne reakcje, zadbać o granice i sprawdzić, jakie działania są możliwe w Twojej sytuacji.",
        {
          id: "office-location",
          content: <>
            Spotkania mogą odbywać się w gabinecie przy ul. {address.streetAddress}, {address.postalCode} {address.addressLocality} albo online.{" "}
            <TextLink to="/lokalizacja/">Sprawdź dojazd do gabinetu</TextLink>.
          </>,
        },
      ]}
      trustTitle="Certyfikowany specjalista i superwizor"
      trustText="Renata Zuba jest psychologiem klinicznym. Posiada certyfikat specjalisty psychoterapii uzależnień nr 123 oraz certyfikat superwizora psychoterapii uzależnień nr 34."
      areasTitle="Dla kogo przeznaczona jest pomoc?"
      areas={[
        {
          title: "Osoby zauważające utratę kontroli",
          description: "Gdy używanie alkoholu lub innych substancji zaczyna wpływać na zdrowie, pracę albo relacje.",
        },
        {
          title: "Osoby po wcześniejszym leczeniu",
          description: "Wsparcie w utrzymywaniu zmiany, rozpoznawaniu ryzykownych sytuacji i radzeniu sobie z nawrotem trudności.",
        },
        {
          title: "Partnerzy i członkowie rodzin",
          description: "Pomoc w rozumieniu własnych reakcji, stawianiu granic i odzyskiwaniu wpływu na własne życie.",
        },
        {
          title: "Osoby wychowane w rodzinie z uzależnieniem",
          description: "Praca nad skutkami dawnych doświadczeń, które nadal wpływają na emocje, relacje i samoocenę.",
        },
        {
          title: "Osoby w kryzysie motywacji",
          description: "Gdy pojawia się ambiwalencja, zwątpienie albo trudność w podjęciu decyzji o zmianie.",
        },
        {
          title: "Bliscy szukający konsultacji",
          description: "Spotkanie pomaga uporządkować sytuację i sprawdzić, jakie działania są możliwe bez przejmowania odpowiedzialności za drugą osobę.",
        },
      ]}
      processTitle="Jak rozpoczyna się współpraca?"
      processLead="Nie trzeba wcześniej wiedzieć, jaki rodzaj terapii będzie odpowiedni. Formę i częstotliwość spotkań ustalamy indywidualnie podczas konsultacji, uwzględniając Twoją sytuację, potrzeby i cel pracy."
      steps={[
        {
          title: "Konsultacja",
          description: "Rozmawiamy o obecnej sytuacji, historii problemu i jego wpływie na codzienne funkcjonowanie. Omawiamy również Twoje oczekiwania i trudności, z którymi chcesz pracować. Konsultacja pomaga rozpoznać potrzeby i możliwości dalszej pomocy.",
        },
        {
          title: "Cel i plan pracy",
          description: "Określamy najważniejsze potrzeby, możliwe cele oraz zasady bezpiecznej i odpowiedzialnej współpracy. Uzgadniamy formę i częstotliwość spotkań, tak aby plan pracy odpowiadał Twojej sytuacji.",
        },
        {
          title: "Regularna praca",
          description: "Podczas kolejnych spotkań wzmacniamy zasoby, rozpoznajemy schematy i ćwiczymy nowe sposoby reagowania. Przyglądamy się bieżącym trudnościom i temu, jak podejmowana praca odnosi się do wspólnie ustalonego celu.",
        },
      ]}
      distinctionTitle="Pomoc dla osoby uzależnionej i dla bliskich"
      distinctionParagraphs={[
        "Osoba zmagająca się z uzależnieniem pracuje nad rozumieniem mechanizmów problemu, motywacją, odpowiedzialnością i sposobami radzenia sobie w sytuacjach ryzyka.",
        "Praca z bliskimi koncentruje się na ich własnych potrzebach, emocjach i granicach. Można rozpocząć ją niezależnie od tego, czy osoba uzależniona korzysta z terapii.",
        {
          id: "adult-psychotherapy",
          content: <>
            Jeśli chcesz poznać szerszy opis pracy nad emocjami, relacjami i powtarzającymi się trudnościami, sprawdź, na czym polega{" "}
            <TextLink to="/oferta-terapeutyczna/">psychoterapia dorosłych</TextLink>. Odpowiednią formę pomocy ustalamy podczas konsultacji.
          </>,
        },
        {
          id: "psychological-support",
          content: <>
            Wsparcie w innych trudnościach opisuję na stronie <TextLink to="/pomoc-psychologiczna-rzeszow/">pomocy psychologicznej dla dorosłych</TextLink>.
          </>,
        },
      ]}
      faq={faq}
      closingTitle="Możesz zacząć od konsultacji"
      closingText="Skontaktuj się, aby omówić swoją sytuację i sprawdzić, jaka forma pomocy będzie właściwa dla Ciebie lub Twojej rodziny."
    />
  );
};

export default PsychoterapiaUzaleznienPage;
