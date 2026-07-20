import * as React from "react";
import ServiceLanding from "../components/ServiceLanding";

const faq = [
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
      "Jedno spotkanie trwa 50 minut. Liczbę i częstotliwość kolejnych spotkań ustalamy indywidualnie po rozpoznaniu potrzeb i celu pomocy.",
  },
];

const PomocPsychologicznaPage = () => (
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
    facts={["Gabinet w Rzeszowie", "Spotkania online", "Sesja 50 minut"]}
    introTitle="Wsparcie dopasowane do aktualnej sytuacji"
    introParagraphs={[
      "Pomoc psychologiczna koncentruje się na tym, z czym mierzysz się teraz. Jej celem jest lepsze rozumienie sytuacji, rozpoznanie własnych zasobów i wypracowanie sposobów radzenia sobie z trudnościami.",
      "Pierwsze konsultacje pozwalają określić potrzeby i ustalić, czy odpowiednia będzie krótkoterminowa pomoc psychologiczna, czy regularna psychoterapia. Każdy plan współpracy ustalam indywidualnie.",
    ]}
    trustTitle="Psycholog kliniczny z wieloletnim doświadczeniem"
    trustText="Renata Zuba pracuje z osobami dorosłymi, wykorzystując doświadczenie kliniczne oraz podejście integracyjne dopasowane do problemu i potrzeb danej osoby."
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
      "Psychoterapia jest regularnym i zwykle dłuższym procesem. Pozwala głębiej poznawać powtarzające się schematy, emocje i relacje. Odpowiednią formę pomocy ustalamy po konsultacji, bez zobowiązania do kontynuowania spotkań.",
    ]}
    faq={faq}
    closingTitle="Pierwszym krokiem może być krótka rozmowa"
    closingText="Skontaktuj się, aby opisać swoją sytuację i ustalić możliwy termin konsultacji w Rzeszowie lub online."
  />
);

export default PomocPsychologicznaPage;
