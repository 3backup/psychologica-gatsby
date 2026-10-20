import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import TextLink from "./styles/TextLink";
import AboutContactLink from "./styles/AboutContactLink";

const Section = styled.section`
  padding: 4rem 0;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.125rem;
  line-height: 1.75;

  h2 {
    margin: 0 0 1.5rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2.625rem;
    font-weight: 400;
    line-height: 1.2;
  }

  p { max-width: 68ch; margin: 0 0 1.25rem; }

  @media (max-width: 578px) {
    padding: 3rem 0;
    h2 { font-size: 2rem; }
  }
`;

const ContactSection = styled(Section)`background: #f4f5f7;`;

export const AboutCareer = () => (
  <Section>
    <Container>
      <h2>Szkolenia i publikacje</h2>
      <p>
        Pracuję jako wykładowca na studiach wyższych i podyplomowych.
        Prowadzę specjalistyczne szkolenia dla osób zajmujących się psychoterapią
        lub pomocą psychologiczną, a także warsztaty i treningi kompetencji
        dla różnych grup zawodowych i społecznych. Szkolenia prowadzę również
        w formie webinariów.
      </p>
      <p>
        Jestem autorką publikacji z zakresu psychoterapii i superwizji
        w pismach dla profesjonalistów. Formy współpracy przedstawiam
        w <TextLink to="/oferta-edukacyjna/">ofercie edukacyjnej</TextLink>.
      </p>
      <p>
        Jako certyfikowany superwizor psychoterapii uzależnień prowadzę
        również <TextLink to="/superwizja/">superwizję dla specjalistów</TextLink>.
      </p>
    </Container>
  </Section>
);

export const AboutContact = ({ address }) => (
  <ContactSection>
    <Container>
      <h2>Jak rozpocząć współpracę?</h2>
      <p>
        Pierwszym krokiem jest kontakt i omówienie Twojej sytuacji oraz potrzeb.
        Podczas konsultacji przyglądamy się trudnościom, zasobom i możliwościom
        pomocy, a następnie ustalamy cele oraz zasady współpracy.
      </p>
      <p>
        Spotkania mogą odbywać się osobiście lub online. Mój <TextLink to="/lokalizacja/">gabinet w Rzeszowie</TextLink>{" "}
        znajduje się przy ul. {address.streetAddress}, {address.postalCode} {address.addressLocality}.
      </p>
      <p>
        Przebieg spotkań, aktualną cenę i czas sesji opisuję w ofercie <TextLink to="/oferta-terapeutyczna/">psychoterapii dorosłych</TextLink>{" "}
        oraz <TextLink to="/pomoc-psychologiczna-rzeszow/">pomocy psychologicznej</TextLink>.
      </p>
      <AboutContactLink to="/skontaktuj-sie/">Skontaktuj się w sprawie współpracy</AboutContactLink>
    </Container>
  </ContactSection>
);
