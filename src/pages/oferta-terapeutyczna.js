import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AboutOffer from "../components/AboutOffer";
import SeeOfferTerap from "../components/SeeOfferTerap";
import OfferPrice from "../components/OfferPrice";
import Testimonial from "../components/Testimonial";
import { graphql } from "gatsby";
import { OfferPsychoterapia } from "../components/OfferPsychoterapia";
import { OfferPomoc } from "../components/OfferPomoc";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";
import TherapyDetails from "../components/TherapyDetails";
import FaqSection from "../components/FaqSection";

const createTherapyFaq = (duration) => [
  {
    question: "Jak wygląda pierwsze spotkanie z psychoterapeutą?",
    answer:
      "Pierwsze spotkanie służy omówieniu aktualnych trudności, potrzeb i oczekiwań. Wspólnie ustalamy, czy psychoterapia jest odpowiednią formą pomocy oraz jaki może być jej cel.",
  },
  {
    question: "Jak często odbywają się sesje psychoterapii?",
    answer:
      "Częstotliwość spotkań ustalamy indywidualnie. Regularność jest ważną częścią procesu, dlatego najczęściej spotkania odbywają się w stałym rytmie i o uzgodnionej porze.",
  },
  {
    question: "Czy prowadzona jest psychoterapia online?",
    answer:
      `Tak. Sesje mogą odbywać się w gabinecie w Rzeszowie albo online. Spotkania zdalne trwają ${duration} i obowiązują podczas nich takie same zasady poufności jak w gabinecie.`,
  },
  {
    question: "W jakim nurcie prowadzona jest psychoterapia?",
    answer:
      "Pracuję integracyjnie, dopasowując sposób pracy do osoby i problemu. Korzystam między innymi z podejścia psychodynamicznego, poznawczego, systemowego oraz psychodramy.",
  },
  {
    question: "Czego nie mówić na psychoterapii?",
    answer:
      "Nie musisz przygotowywać listy właściwych tematów ani gotowych odpowiedzi. Możesz mówić o swoich trudnościach, emocjach i relacjach we własnym tempie. Jeśli jakiś temat budzi dyskomfort lub nie wiesz, jak o nim opowiedzieć, możesz zacząć właśnie od powiedzenia o tej trudności.",
  },
  {
    question: "Czy terapia raz na 2 tygodnie ma sens?",
    answer:
      "To, czy spotkania co dwa tygodnie będą odpowiednie, zależy od Twojej sytuacji, potrzeb i celu pracy. Częstotliwość ustalamy indywidualnie podczas konsultacji, uwzględniając znaczenie regularności spotkań. Możesz wtedy omówić swoje możliwości i oczekiwania dotyczące rytmu terapii.",
  },
  {
    question: "Co jest lepsze psychoterapia czy psycholog?",
    answer:
      "Psycholog to osoba z wykształceniem psychologicznym, a psychoterapia jest formą pomocy i procesem pracy nad trudnościami. W Psychologica oferuję zarówno pomoc psychologiczną dotyczącą aktualnej sytuacji, jak i psychoterapię dorosłych. Podczas konsultacji wspólnie ustalamy, która forma odpowiada Twoim potrzebom i celom.",
  },
];

const therapySteps = [
  {
    title: "1. Pierwszy kontakt",
    description: "Każdy kontakt rozpoczyna się od omówienia trudności, potrzeb i oczekiwań. To moment na wstępną diagnozę problemów, zasobów, potrzeb i możliwości oraz ustalenie, czy psychoterapia będzie odpowiednią formą pomocy.",
  },
  {
    title: "2. Ustalenie celu i zasad pracy",
    description: "Następnym krokiem jest ustalenie celów i zasad pomocy psychologicznej lub psychoterapii. Wspólnie określamy kierunek pracy i formę spotkań najlepiej dopasowaną do Twojej sytuacji.",
  },
  {
    title: "3. Regularne spotkania",
    description: "Regularność jest ważną częścią procesu. Zarówno w krótkoterminowej pomocy psychologicznej, jak i w psychoterapii, dążę do wzmacniania mocnych stron i uruchamiania wewnętrznego potencjału osoby, z którą pracuję.",
  },
];

// markup
const oferta = ({ data }) => {
  const price = data.datoCmsOfferprice.offerpricePrice.trim();
  const priceLabel = data.datoCmsOfferprice.offerprice.trim();
  const duration = data.datoCmsHowitlookslike.processTime.replace(/^Czas sesji:\s*/i, "").trim();
  const address = data.site.siteMetadata.businessAddress;
  const therapyFaq = createTherapyFaq(duration);
  return (
    <>
      <Layout
        pageTitle="Psychoterapia dorosłych Rzeszów | Psychologica"
        pageDescription={`Psychoterapia dorosłych w Rzeszowie i online. Pomoc psychologiczna i psychoterapia dla osób w kryzysie, z lękiem, depresją, stresem i trudnościami w relacjach. Sesja ${duration}, koszt ${price}.`}
        pageImageAlt="Psychoterapia dorosłych – Renata Zuba, Rzeszów"
        pageType="WebPage"
        service={{
          name: "Psychoterapia dorosłych w Rzeszowie",
          serviceType: "Psychoterapia indywidualna dorosłych",
          description:
            "Psychoterapia dorosłych prowadzona w gabinecie w Rzeszowie oraz online.",
          audience: "osoby dorosłe",
        }}
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Oferta terapeutyczna", path: "/oferta-terapeutyczna/" },
        ]}
        faq={therapyFaq}>
        <TopOffer
          headerElement="Psychoterapia dorosłych w Rzeszowie"
          subheaderText={
            data.datoCmsOfertaTerapeutyczna
              .ofertaTerapeutycznaSekcjaGRnaTytuCopy1
          }
        />
        <OfferPsychoterapia />
        <Testimonial
          quote={data.datoCmsOfertaTerapeutyczna.quoteMaincontent}
          author={data.datoCmsOfertaTerapeutyczna.quoteAutor}
        />
        <OfferPomoc />
        <TherapyDetails />
        <Process
          title="Jak wygląda współpraca"
          introduction="Sposób pracy dostosowuję do problematyki i potrzeb konkretnej osoby. Korzystając z możliwości podejścia integracyjnego stosuję dialog terapeutyczny oraz techniki psychodramy, terapii poznawczo-behawioralnej, modelu systemowego i innych."
          steps={therapySteps}
          sessionFacts={{ price, priceLabel, duration, address }}
        />
        <OfferPrice />
        <FaqSection items={therapyFaq} title="Psychoterapia – najczęstsze pytania" />
        <AboutOffer description="Jestem psychologiem klinicznym i absolwentką psychologii Uniwersytetu Jagiellońskiego. Pracuję z osobami dorosłymi, dopasowując formę pomocy do ich sytuacji i potrzeb." />
        <SeeOfferTerap />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query TerapeutycznaQuery {
    datoCmsOfferprice {
      offerprice
      offerpricePrice
    }
    datoCmsHowitlookslike { processTime }
    site {
      siteMetadata {
        businessAddress { streetAddress postalCode addressLocality }
      }
    }
    datoCmsOfertaTerapeutyczna {
      ofertaTerapeutycznaSekcjaGRnaTytu
      ofertaTerapeutycznaSekcjaGRnaTytuCopy1
      quoteAutor
      quoteMaincontent
      sprawdMojOfertParagraf
      sprawdMojOfertPrzyciskdrugi
      sprawdMojOfertPrzyciskglowny
      sprawdMojOfertTytu
    }
  }
`;
export default oferta;
