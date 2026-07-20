import * as React from "react";
import ServiceLanding from "../components/ServiceLanding";

const faq = [
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
      "Sesja trwa 50 minut. Częstotliwość i przewidywany sposób pracy ustalamy indywidualnie po pierwszych konsultacjach.",
  },
];

const PsychoterapiaUzaleznienPage = () => (
  <ServiceLanding
    seo={{
      pageTitle: "Psychoterapia uzależnień Rzeszów | Renata Zuba",
      pageDescription:
        "Psychoterapia uzależnień w Rzeszowie i online dla osób dorosłych oraz ich bliskich. Certyfikowany specjalista i superwizor Renata Zuba. Umów konsultację.",
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
    facts={["Certyfikat specjalisty nr 123", "Gabinet w Rzeszowie", "Spotkania online"]}
    introTitle="Zmiana zaczyna się od bezpiecznego rozpoznania sytuacji"
    introParagraphs={[
      "Uzależnienie wpływa nie tylko na osobę, która używa substancji, lecz także na relacje, poczucie bezpieczeństwa i codzienne funkcjonowanie całej rodziny. Zgłoszenie się po pomoc nie wymaga gotowej diagnozy ani pewności, jak powinien wyglądać dalszy proces.",
      "Pierwsze konsultacje służą nazwaniu problemu, rozpoznaniu potrzeb i ustaleniu realnego celu pracy. Tempo oraz metody dobieram do sytuacji konkretnej osoby.",
    ]}
    trustTitle="Certyfikowany specjalista i superwizor"
    trustText="Renata Zuba posiada certyfikat specjalisty psychoterapii uzależnień nr 123 oraz certyfikat superwizora psychoterapii uzależnień nr 34."
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
    processLead="Nie trzeba wcześniej wiedzieć, jaki rodzaj terapii będzie odpowiedni. Ustalamy to wspólnie podczas konsultacji."
    steps={[
      {
        title: "Konsultacja",
        description: "Rozmawiamy o obecnej sytuacji, historii problemu i jego wpływie na codzienne funkcjonowanie.",
      },
      {
        title: "Cel i plan pracy",
        description: "Określamy najważniejsze potrzeby, możliwe cele oraz zasady bezpiecznej i odpowiedzialnej współpracy.",
      },
      {
        title: "Regularna praca",
        description: "Podczas kolejnych spotkań wzmacniamy zasoby, rozpoznajemy schematy i ćwiczymy nowe sposoby reagowania.",
      },
    ]}
    distinctionTitle="Pomoc dla osoby uzależnionej i dla bliskich"
    distinctionParagraphs={[
      "Osoba zmagająca się z uzależnieniem pracuje nad rozumieniem mechanizmów problemu, motywacją, odpowiedzialnością i sposobami radzenia sobie w sytuacjach ryzyka.",
      "Praca z bliskimi koncentruje się na ich własnych potrzebach, emocjach i granicach. Można rozpocząć ją niezależnie od tego, czy osoba uzależniona korzysta z terapii.",
    ]}
    faq={faq}
    closingTitle="Możesz zacząć od konsultacji"
    closingText="Skontaktuj się, aby omówić swoją sytuację i sprawdzić, jaka forma pomocy będzie właściwa dla Ciebie lub Twojej rodziny."
  />
);

export default PsychoterapiaUzaleznienPage;
