import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import FaqSection from "./FaqSection";

const Section = styled.section`
  padding: 6rem 0;
  background: #f4f5f7;
`;

const Content = styled(Container)``;

const Intro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: #18724d;
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  max-width: 20ch;
  margin: 0;
  color: #1f1f1f;
  font-family: "Red Hat Display", sans-serif;
  font-size: 2.625rem;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 578px) {
    font-size: 2rem;
  }
`;

const Lead = styled.div`
  max-width: 67ch;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.75;

  p {
    margin: 0 0 1.25rem;
  }
`;

const Areas = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 3rem 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 578px) {
    grid-template-columns: 1fr;
  }
`;

const Area = styled.li`
  padding: 1.5rem;
  border: 1px solid #dfe8e5;
  border-radius: 0.9375rem;
  background: #ffffff;
  color: #315f5b;
  font-family: Manrope, sans-serif;
  line-height: 1.55;
`;

const Pathways = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Pathway = styled.article`
  padding: 2rem;
  border-radius: 0.9375rem;
  background: #005650;
  color: #ffffff;

  h3 {
    margin: 0 0 0.75rem;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.375rem;
    font-weight: 500;
  }

  p {
    margin: 0 0 1.25rem;
    color: rgba(255, 255, 255, 0.78);
    font-family: Manrope, sans-serif;
    line-height: 1.65;
  }

  a {
    color: #ffffff;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 600;
    text-underline-offset: 0.35rem;
  }
`;

const TherapyDetails = ({ faq }) => (
  <>
    <Section>
      <Content>
        <Intro>
          <div>
            <Eyebrow>Psychoterapia dorosłych</Eyebrow>
            <Title>Kiedy warto rozważyć psychoterapię?</Title>
          </div>
          <Lead>
            <p>
              Psychoterapia może pomóc, gdy trudności powracają, utrzymują się
              mimo podejmowanych prób albo zaczynają wpływać na relacje, pracę i
              codzienne funkcjonowanie.
            </p>
            <p>
              Pracuję w podejściu integracyjnym. Korzystam między innymi z
              dialogu terapeutycznego, psychodramy, podejścia poznawczego,
              psychodynamicznego i systemowego. Sposób pracy dobieram do osoby,
              problemu oraz wspólnie ustalonego celu.
            </p>
          </Lead>
        </Intro>
        <Areas>
          <Area>Lęk, fobie i utrzymujące się napięcie</Area>
          <Area>Obniżony nastrój i doświadczenie depresji</Area>
          <Area>Przewlekły stres i przeciążenie zawodowe</Area>
          <Area>Niska samoocena i nadmierny samokrytycyzm</Area>
          <Area>Trudności w relacjach i przeżywaniu emocji</Area>
          <Area>Strata, kryzys, choroba lub trudna zmiana życiowa</Area>
        </Areas>
        <Pathways>
          <Pathway>
            <h3>Potrzebujesz wsparcia w aktualnym kryzysie?</h3>
            <p>
              Krótkoterminowa pomoc psychologiczna może być właściwym pierwszym
              krokiem, gdy problem dotyczy konkretnej sytuacji lub decyzji.
            </p>
            <Link to="/pomoc-psychologiczna-rzeszow/">
              Pomoc psychologiczna w Rzeszowie
            </Link>
          </Pathway>
          <Pathway>
            <h3>Problem uzależnienia dotyczy Ciebie lub bliskiej osoby?</h3>
            <p>
              Pomoc obejmuje osoby dorosłe zmagające się z uzależnieniem oraz
              partnerów i członków ich rodzin.
            </p>
            <Link to="/psychoterapia-uzaleznien-rzeszow/">
              Psychoterapia uzależnień
            </Link>
          </Pathway>
        </Pathways>
      </Content>
    </Section>
    <FaqSection items={faq} title="Psychoterapia – najczęstsze pytania" />
  </>
);

export default TherapyDetails;
