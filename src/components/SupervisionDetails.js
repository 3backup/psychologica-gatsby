import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import TextLink from "./styles/TextLink";
import FaqSection from "./FaqSection";

const Section = styled.section`
  padding: 5rem 0;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.75;

  h2 {
    max-width: 24ch;
    margin: 0 0 1.5rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2.625rem;
    font-weight: 400;
    line-height: 1.2;
  }

  h3 {
    margin: 0 0 1rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  p { max-width: 68ch; margin: 0 0 1.25rem; }

  @media (max-width: 578px) {
    padding: 3.5rem 0;
    h2 { font-size: 2rem; }
  }
`;

const SoftSection = styled(Section)`background: #f4f5f7;`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) { grid-template-columns: minmax(0, 1fr); }
`;

const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  padding: 0;
  list-style: none;
  counter-reset: supervision-step;

  li {
    counter-increment: supervision-step;
    border-top: 2px solid #4abd7f;
    padding-top: 1.5rem;
  }

  li::before {
    content: counter(supervision-step, decimal-leading-zero);
    display: block;
    margin-bottom: 1rem;
    color: #18724d;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
  }

  @media (max-width: 768px) { grid-template-columns: minmax(0, 1fr); }
`;

const Portrait = styled.div`
  width: 100%;
  max-width: 26.25rem;
  overflow: hidden;
  border-radius: 1rem;
`;

const SupervisionDetails = ({ faq, address }) => (
  <>
    <Section>
      <Container>
        <h2>Dla kogo jest superwizja?</h2>
        <p>
          Zapraszam specjalistów psychoterapii uzależnień oraz innych
          profesjonalistów zajmujących się pomocą i wsparciem dla osób
          uzależnionych lub członków ich rodzin. Punktem wyjścia jest Twoja praca
          zawodowa i pytania, które pojawiają się w kontakcie z osobami korzystającymi z pomocy.
        </p>
        <p>
          Superwizja daje przestrzeń do refleksji nad sposobem rozumienia trudności,
          podejmowanymi działaniami i kierunkiem dalszej pracy. Szczegółowy zakres
          procesu omawiam podczas kontaktu, uwzględniając obszar Twojej praktyki i potrzeby.
        </p>
      </Container>
    </Section>
    <SoftSection>
      <Container>
        <h2>Superwizja indywidualna i grupowa</h2>
        <Columns>
          <div>
            <h3>Superwizja indywidualna</h3>
            <p>
              Spotkanie koncentruje się na Twojej pracy i zagadnieniach, które
              chcesz omówić z superwizorem. Pozwala przyjrzeć się własnemu sposobowi
              rozumienia sytuacji oraz pytaniom związanym z udzielaniem pomocy.
            </p>
          </div>
          <div>
            <h3>Superwizja grupowa</h3>
            <p>
              To forma wspólnej refleksji w gronie profesjonalistów, prowadzona
              przez superwizora. W sprawie szczegółów organizacyjnych i możliwości
              udziału w superwizji grupowej zapraszam do kontaktu.
            </p>
          </div>
        </Columns>
      </Container>
    </SoftSection>
    <Section>
      <Container>
        <h2>Jak rozpocząć współpracę?</h2>
        <Steps>
          <li>
            <h3>Kontakt</h3>
            <p>Napisz lub zadzwoń i opisz obszar swojej pracy oraz to, czego potrzebujesz od superwizji.</p>
            <TextLink to="/skontaktuj-sie/">Skontaktuj się w sprawie superwizji</TextLink>
          </li>
          <li>
            <h3>Omówienie potrzeb i formy</h3>
            <p>Rozmawiamy o zakresie zagadnień i o superwizji indywidualnej lub grupowej. To również moment na pytania o organizację spotkań.</p>
          </li>
          <li>
            <h3>Ustalenie zasad współpracy</h3>
            <p>Przed rozpoczęciem procesu omawiamy jego szczegóły i warunki. Ustalenia odnoszą się do wybranej formy superwizji i Twojej sytuacji zawodowej.</p>
          </li>
        </Steps>
      </Container>
    </Section>
    <SoftSection>
      <Container>
        <Columns>
          <div>
            <h2>Czas i koszt superwizji</h2>
            <p>Zapraszam do kontaktu w celu szczegółowego omówienia procesu superwizji. Napisz lub zadzwoń, aby omówić formę spotkań, ich czas, częstotliwość i koszt.</p>
            <TextLink to="/skontaktuj-sie/">Omów warunki superwizji</TextLink>
          </div>
          <div>
            <h2>Superwizja w Rzeszowie i online</h2>
            <p>
              Spotkania mogą odbywać się w Rzeszowie lub online. Gabinet znajduje się przy ul.{" "}
              {address.streetAddress}, {address.postalCode} {address.addressLocality}.{" "}
              <TextLink to="/lokalizacja/">Sprawdź lokalizację gabinetu</TextLink>.
            </p>
          </div>
        </Columns>
      </Container>
    </SoftSection>
    <Section>
      <Container>
        <Columns>
          <Portrait>
            <StaticImage
              src="../images/about-renata-zuba.jpg"
              alt="Renata Zuba – certyfikowany superwizor psychoterapii uzależnień"
              layout="constrained"
              width={420}
              height={480}
              quality={80}
              formats={["auto", "avif", "webp"]}
              placeholder="blurred"
              loading="lazy"
            />
          </Portrait>
          <div>
            <h2>Kto prowadzi superwizję?</h2>
            <p>
              Nazywam się Renata Zuba. Jestem psychologiem klinicznym,
              certyfikowanym specjalistą psychoterapii uzależnień oraz superwizorem w tym obszarze.
            </p>
            <p>
              Posiadam certyfikat superwizora psychoterapii uzależnień nr 34
              oraz certyfikat specjalisty psychoterapii uzależnień nr 123.
              Pracuję terapeutycznie z osobami uzależnionymi i członkami ich rodzin.
            </p>
            <TextLink to="/o-mnie/">Poznaj moje kwalifikacje i doświadczenie</TextLink>
          </div>
        </Columns>
      </Container>
    </Section>
    <FaqSection items={faq} title="Superwizja – najczęstsze pytania" />
    <SoftSection>
      <Container>
        <h2>Szukasz terapii dla siebie lub bliskiej osoby?</h2>
        <p>
          Jeśli potrzebujesz pomocy związanej z uzależnieniem, poznaj ofertę
          dla osób dorosłych i ich bliskich. Informacje o konsultacjach,
          przebiegu pracy oraz czasie sesji znajdziesz na stronie{" "}
          <TextLink to="/psychoterapia-uzaleznien-rzeszow/">psychoterapii uzależnień w Rzeszowie</TextLink>.
        </p>
      </Container>
    </SoftSection>
  </>
);

export default SupervisionDetails;
