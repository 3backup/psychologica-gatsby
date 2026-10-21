import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
        pageTitle: "Pomoc psychologiczna dla dorosłych w Rzeszowie | Renata Zuba",
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
      heroImage={
        <StaticImage
          src="../images/TopAbout.jpg"
          alt="Renata Zuba – psycholog kliniczny w Rzeszowie"
          layout="constrained"
          width={480}
          height={600}
          quality={85}
          placeholder="blurred"
          loading="eager"
          formats={["auto", "avif", "webp"]}
        />
      }
      facts={["Gabinet w Rzeszowie", "Spotkania online", `Sesja ${duration}`]}
      introTitle="Dla kogo jest pomoc psychologiczna?"
      introParagraphs={[
        "Z tej formy wsparcia możesz skorzystać wtedy, gdy przechodzisz przez kryzys, trudną zmianę albo czujesz, że bieżące napięcie zaczyna wpływać na codzienne funkcjonowanie. Pomoc psychologiczna jest przeznaczona dla osób dorosłych, które chcą lepiej zrozumieć swoją sytuację i spokojnie przyjrzeć się możliwym kolejnym krokom.",
        {
          id: "support-or-psychotherapy",
          content: <>
            Możesz zatrzymać się, uporządkować emocje, omówić konkretną trudność lub sprawdzić,
            czy na tym etapie bardziej pomocna będzie konsultacja, krótkoterminowe wsparcie
            czy <TextLink to="/oferta-terapeutyczna/">psychoterapia dorosłych</TextLink>.
          </>,
        },
      ]}
      trustTitle="Psycholog kliniczny z wieloletnim doświadczeniem"
      trustText="Jestem psychologiem klinicznym i absolwentką psychologii Uniwersytetu Jagiellońskiego. Pracuję z osobami dorosłymi, dopasowując formę pomocy do ich sytuacji i potrzeb."
      areasTitle="Co obejmuje pomoc psychologiczna?"
      areasParagraphs={[
        "Zakres wsparcia zależy od tego, z czym przychodzisz i czego potrzebujesz na danym etapie. Spotkania mogą koncentrować się na lepszym rozumieniu emocji, uporządkowaniu sytuacji kryzysowej, omówieniu trudności w relacjach, przewlekłego stresu, lęku, obniżonego nastroju albo problemów ze snem.",
        "Wspólnie przyglądamy się temu, co dzieje się teraz, jakie są Twoje zasoby i co może pomóc w najbliższym czasie. Jeśli w trakcie konsultacji okaże się, że bardziej odpowiednia będzie psychoterapia, omawiamy to spokojnie i bez presji.",
      ]}
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
      processTitle="Jak wygląda proces pomocy?"
      processAfterIntro
      processParagraphs={[
        "Pierwsza konsultacja służy rozpoznaniu Twojej sytuacji, trudności i potrzeb. Rozmawiamy o tym, co dzieje się teraz, co jest najbardziej obciążające i jakiego rodzaju wsparcia szukasz.",
        "Na tej podstawie wspólnie ustalamy dalsze kroki. Czasem wystarczają konsultacje skoncentrowane na aktualnym problemie, a czasem bardziej odpowiednia okazuje się regularna psychoterapia. Pierwsze spotkania służą spokojnemu rozpoznaniu sytuacji i dobraniu formy pomocy do Ciebie.",
      ]}
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
      additionalSections={[
        {
          id: "spotkania-gabinet-online",
          title: "Spotkania w gabinecie lub online",
          paragraphs: [
            "Pomoc psychologiczna jest dostępna w gabinecie w Rzeszowie oraz online. Możesz wybrać formę spotkania odpowiednią do swojej sytuacji i możliwości.",
            {
              id: "location",
              content: <>
                {`Spotkania osobiste prowadzę przy ul. ${address.streetAddress}, ${address.postalCode} ${address.addressLocality}. Dostępne są również sesje zdalne. `}
                <TextLink to="/lokalizacja/">Sprawdź dojazd do gabinetu</TextLink>.
              </>,
            },
          ],
        },
      ]}
      faq={faq}
      closingTitle="Pierwszym krokiem może być krótka rozmowa"
      closingText="Skontaktuj się, aby opisać swoją sytuację i ustalić możliwy termin konsultacji w Rzeszowie lub online."
    />
  );
};

export default PomocPsychologicznaPage;
