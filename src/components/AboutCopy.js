import React from "react";
import Container from "./styles/Container";
import { StaticQuery, graphql } from "gatsby";
import TextLink from "./styles/TextLink";
import { styled } from "linaria/react";

const Section = styled.section`
  background: #005650;
  color: #fff;
  padding: 4rem 0;

  h2 {
    margin: 0 0 1.5rem;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2.625rem;
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    margin: 0 0 1.25rem;
    font-family: Manrope, sans-serif;
    font-size: 1.125rem;
    line-height: 1.75;
  }

  a { color: #fff; }

  @media (max-width: 578px) {
    padding: 3rem 0;
    h2 { font-size: 2rem; }
  }
`;
const Columns = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.5rem;
  }
`;

const AboutCopy = () => (
  <StaticQuery
    query={graphql`
      query AboutGreenQuery {
        datoCmsAboout { greenParagraph }
        datoCmsHowitlookslike { wspPracaOpis }
      }
    `}
    render={(data) => (
      <Section>
        <Columns>
          <div>
            <h2>Czym się zajmuję</h2>
            <p>
              Jestem psychologiem klinicznym i psychoterapeutką. Pracuję z osobami
              dorosłymi, które przechodzą przez kryzys, mierzą się z lękiem,
              obniżonym nastrojem, trudnościami w relacjach, bolesną stratą
              lub przeciążeniem życiowym.
            </p>
            <p>
              Prowadzę <TextLink to="/oferta-terapeutyczna/">psychoterapię dorosłych</TextLink>{" "}
              i <TextLink to="/pomoc-psychologiczna-rzeszow/">pomoc psychologiczną</TextLink>,
              dostosowując sposób pracy do Twojej sytuacji i potrzeb.
              Pomagam także osobom, które chcą lepiej rozumieć swoje emocje,
              wzmocnić poczucie własnej wartości lub poradzić sobie z trudnymi doświadczeniami.
            </p>
            <p>
              W swojej pracy zajmuję się również uzależnieniami oraz wsparciem
              członków rodzin osób uzależnionych. Zakres tej pomocy
              opisuję na stronie <TextLink to="/psychoterapia-uzaleznien-rzeszow/">psychoterapii uzależnień</TextLink>.
            </p>
          </div>
          <div>
            <h2>Doświadczenie i sposób pracy</h2>
            {data.datoCmsAboout.greenParagraph.replace(/<[^>]*>/g, " ")
              .split(/(?=Ukończyłam )/).map((paragraph) => paragraph.trim())
              .filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>{data.datoCmsHowitlookslike.wspPracaOpis}</p>
            <p>
              Więcej o przebiegu spotkań znajdziesz w ofercie <TextLink to="/oferta-terapeutyczna/">psychoterapii dorosłych</TextLink>.
            </p>
          </div>
        </Columns>
      </Section>
    )}
  />
);

export default AboutCopy;
