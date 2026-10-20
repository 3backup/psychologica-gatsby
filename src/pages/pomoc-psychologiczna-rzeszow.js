import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ServiceLanding from "../components/ServiceLanding";
import TextLink from "../components/styles/TextLink";

const PomocPsychologicznaPage = () => {
  const data = useStaticQuery(graphql`
    query PsychologicalSupportFactsQuery {
      site {
        siteMetadata {
          businessAddress {
            streetAddress
            postalCode
            addressLocality
          }
        }
      }
      datoCmsOfferprice {
        offerpricePrice
      }
      datoCmsHowitlookslike {
        processTime
      }
    }
  `);
  const price = data.datoCmsOfferprice?.offerpricePrice?.trim();
  const duration = data.datoCmsHowitlookslike?.processTime
    ?.replace(/^Czas sesji:\s*/i, "")
    .trim();
  const address = data.site?.siteMetadata?.businessAddress;

  if (![price, duration, address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim())) {
    throw new Error("Brak ceny, czasu sesji lub adresu dla strony pomocy psychologicznej");
  }

  const faq = [
    {
      question: "W czym psycholog pomaga?",
      answer:
        "Psycholog pomaga lepiej zrozumieć aktualną sytuację, emocje i trudności oraz znaleźć sposoby radzenia sobie z nimi. W Psychologica pracuję z osobami dorosłymi doświadczającymi między innymi kryzysu, lęku, stresu, obniżonego nastroju, niskiej samooceny i trudności w relacjach. Cele i formę pomocy ustalamy podczas konsultacji.",
    },
    {
      question: "Ile kosztuje pomoc psychologiczna?",
      answer:
        `Spotkanie kosztuje ${price} i trwa ${duration}. Aby ustalić termin konsultacji w Rzeszowie lub online, skontaktuj się z gabinetem.`,
    },
    {
      question: "Czy pierwsze spotkanie zobowiązuje do rozpoczęcia psychoterapii?",
      answer:
        "Nie. Pierwsze spotkanie służy poznaniu aktualnej sytuacji, potrzeb i oczekiwań. Po konsultacji wspólnie ustalamy, jaka forma wsparcia będzie odpowiednia.",
    },
    {
      question: "Czym pomoc psychologiczna różni się od psychoterapii?",
      answer:
        "Pomoc psychologiczna może koncentrować się na aktualnym kryzysie lub konkretnym problemie i trwać krócej. Psychoterapia jest zazwyczaj dłuższym, regularnym procesem prowadzącym do głębszego rozumienia siebie i trwałej zmiany.",
    },
    {
      question: "Czy spotkania mogą odbywać się online?",
      answer:
        "Tak. Konsultacje i sesje mogą odbywać się w gabinecie w Rzeszowie albo zdalnie. Zasady i poufność spotkania online są takie same jak podczas spotkania osobistego.",
    },
    {
      question: "Jak długo trwa konsultacja psychologiczna?",
      answer:
        `Jedno spotkanie trwa ${duration}. Liczbę i częstotliwość kolejnych spotkań ustalamy indywidualnie po rozpoznaniu potrzeb i celu pomocy.`,
    },
  ];

  return (
    <ServiceLanding
      seo={{
        pageTitle: "Pomoc psychologiczna Rzeszów | Renata Zuba",
        pageDescription:
          "Pomoc psychologiczna dla dorosłych w Rzeszowie i online. Wsparcie w kryzysie, lęku, stresie i trudnych zmianach. Psycholog kliniczny Renata Zuba.",
        pageImageAlt: "Renata Zuba – psycholog kliniczny w Rzeszowie",
        pageType: "WebPage",
        service: {
          name: "Pomoc psychologiczna w Rzeszowie",
          serviceType: "Pomoc psychologiczna dla dorosłych",
          description:
            "Konsultacje i pomoc psychologiczna dla dorosłych w Rzeszowie oraz online.",
          audience: "osoby dorosłe",
        },
        breadcrumbs: [
          { name: "Strona główna", path: "/" },
          { name: "Oferta terapeutyczna", path: "/oferta-terapeutyczna/" },
          { name: "Pomoc psychologiczna", path: "/pomoc-psychologiczna-rzeszow/" },
        ],
        faq,
      }}
      eyebrow="Pomoc psychologiczna"
      title="Pomoc psychologiczna dla dorosłych w Rzeszowie"
      lead="Gdy trudno samodzielnie uporządkować emocje, podjąć decyzję albo przejść przez kryzys, rozmowa z psychologiem pomaga zobaczyć sytuację z szerszej perspektywy i znaleźć możliwe kroki."
      facts={["Gabinet w Rzeszowie", "Spotkania online", `Sesja ${duration}`]}
      introTitle="Wsparcie dopasowane do aktualnej sytuacji"
      introParagraphs={[
        "Pomoc psychologiczna koncentruje się na tym, z czym mierzysz się teraz. Jej celem jest lepsze rozumienie sytuacji, rozpoznanie własnych zasobów i wypracowanie sposobów radzenia sobie z trudnościami.",
        "Pierwsze konsultacje pozwalają określić potrzeby i ustalić, czy odpowiednia będzie krótkoterminowa pomoc psychologiczna, czy regularna psychoterapia. Każdy plan współpracy ustalam indywidualnie.",
        {
          id: "location",
          content: <>
            {`Spotkania osobiste prowadzę przy ul. ${address.streetAddress}, ${address.postalCode} ${address.addressLocality}. Dostępne są również sesje zdalne. `}
            <TextLink to="/lokalizacja/">Sprawdź dojazd do gabinetu</TextLink>.
          </>,
        },
      ]}
      trustTitle="Psycholog kliniczny z wieloletnim doświadczeniem"
      trustText="Jestem psychologiem klinicznym i absolwentką psychologii Uniwersytetu Jagiellońskiego. Pracuję z osobami dorosłymi, dopasowując formę pomocy do ich sytuacji i potrzeb."
      areasTitle="W jakich sytuacjach warto zgłosić się po pomoc?"
      areas={[
        {
          title: "Kryzys i trudna zmiana",
          description: "Rozstanie, zmiana pracy, choroba lub wydarzenie, które naruszyło dotychczasową równowagę.",
        },
        {
          title: "Lęk i napięcie",
          description: "Nawracający niepokój, obawy, fobie albo napięcie utrudniające codzienne funkcjonowanie.",
        },
        {
          title: "Przewlekły stres",
          description: "Przeciążenie obowiązkami, stres zawodowy lub poczucie, że trudno odzyskać spokój.",
        },
        {
          title: "Trudne emocje",
          description: "Problemy z rozpoznawaniem, wyrażaniem lub kontrolowaniem złości i innych intensywnych emocji.",
        },
        {
          title: "Niska samoocena",
          description: "Brak wiary w siebie, nadmierny samokrytycyzm i trudności w dostrzeganiu własnych zasobów.",
        },
        {
          title: "Strata i żałoba",
          description: "Potrzeba wsparcia po bolesnej stracie albo podczas długiego procesu przystosowania do zmiany.",
        },
        {
          title: "Obniżony nastrój",
          description: "Smutek i przygnębienie oraz potrzeba wsparcia w lepszym rozumieniu własnych emocji i sytuacji.",
        },
        {
          title: "Trudności w relacjach",
          description: "Problemy w relacjach z innymi, kryzys w związku lub poczucie osamotnienia.",
        },
        {
          title: "Problemy ze snem",
          description: "Wsparcie psychologiczne dla osób doświadczających problemów ze snem.",
        },
      ]}
      processTitle="Jak wygląda pierwsza konsultacja?"
      processLead="Pierwsze spotkania dają przestrzeń do spokojnego przedstawienia sytuacji i określenia, jakiej pomocy potrzebujesz."
      steps={[
        {
          title: "Rozmowa o trudnościach",
          description: "Omawiamy aktualną sytuację, jej wpływ na codzienne życie oraz to, czego oczekujesz od spotkań.",
        },
        {
          title: "Rozpoznanie potrzeb",
          description: "Przyglądamy się zasobom, możliwościom i obszarom, które wymagają szczególnej uwagi.",
        },
        {
          title: "Ustalenie dalszych kroków",
          description: "Wspólnie wybieramy cel, formę i częstotliwość dalszej pomocy albo psychoterapii.",
        },
      ]}
      distinctionTitle="Pomoc psychologiczna czy psychoterapia?"
      distinctionParagraphs={[
        "Krótkoterminowa pomoc psychologiczna sprawdza się, gdy potrzebujesz wsparcia w określonym kryzysie, decyzji lub zmianie. Skupia się na aktualnej sytuacji i możliwościach poradzenia sobie z nią.",
        {
          id: "adult-psychotherapy",
          content: <>
            <TextLink to="/oferta-terapeutyczna/">Psychoterapia dorosłych</TextLink> jest regularnym i zwykle dłuższym procesem. Pozwala głębiej poznawać powtarzające się schematy, emocje i relacje. Odpowiednią formę pomocy ustalamy po konsultacji, bez zobowiązania do kontynuowania spotkań.
          </>,
        },
        {
          id: "addiction-psychotherapy",
          content: <>
            Jeśli problem dotyczy uzależnienia Twojego lub bliskiej osoby, poznaj zakres <TextLink to="/psychoterapia-uzaleznien-rzeszow/">psychoterapii uzależnień</TextLink>.
          </>,
        },
      ]}
      faq={faq}
      closingTitle="Pierwszym krokiem może być krótka rozmowa"
      closingText="Skontaktuj się, aby opisać swoją sytuację i ustalić możliwy termin konsultacji w Rzeszowie lub online."
    />
  );
};

export default PomocPsychologicznaPage;
