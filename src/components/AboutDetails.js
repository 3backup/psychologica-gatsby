import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import TextLink from "./styles/TextLink";
import AboutContactLink from "./styles/AboutContactLink";
import { StaticImage } from "gatsby-plugin-image";

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

const DetailGrid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  grid-template-areas: "copy photo";
  gap: 4rem;
  align-items: center;

  &[data-image-first="true"] {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    grid-template-areas: "photo copy";
  }

  @media (max-width: 900px) {
    gap: 2rem;
    &, &[data-image-first="true"] {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "copy" "photo";
    }
  }
`;

const Copy = styled.div`
  grid-area: copy;
  min-width: 0;
`;

const Photo = styled.div`
  grid-area: photo;
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 1.25rem;
  overflow: hidden;

  .gatsby-image-wrapper { display: block; }
`;

export const AboutCareer = () => (
  <Section>
    <DetailGrid>
      <Copy>
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
      </Copy>
      <Photo>
        <StaticImage
          src="../images/edukacja-zdjecie.jpg"
          alt="Renata Zuba podczas wystąpienia z prezentacją"
          layout="constrained"
          width={460}
          sizes="(max-width: 900px) min(calc(100vw - 48px), 416px), 34vw"
          quality={80}
          formats={["auto", "avif", "webp"]}
          loading="lazy"
          placeholder="blurred"
        />
      </Photo>
    </DetailGrid>
  </Section>
);

export const AboutContact = ({ address }) => (
  <ContactSection>
    <DetailGrid data-image-first="true">
      <Copy>
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
      </Copy>
      <Photo style={{ maxWidth: "32rem" }}>
        <StaticImage
          src="../images/Process-image.jpg"
          alt="Renata Zuba podczas spotkania online przy komputerze"
          layout="constrained"
          width={534}
          sizes="(max-width: 900px) min(calc(100vw - 48px), 512px), 42vw"
          quality={80}
          formats={["auto", "avif", "webp"]}
          loading="lazy"
          placeholder="blurred"
        />
      </Photo>
    </DetailGrid>
  </ContactSection>
);
