import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import TextLink from "./styles/TextLink";

const Section = styled.section`
  padding: 5rem 0;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.75;

  h2 {
    max-width: 26ch;
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

const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  padding: 0;
  list-style: none;
  counter-reset: education-step;

  li {
    counter-increment: education-step;
    border-top: 2px solid #4abd7f;
    padding-top: 1.5rem;
  }

  li::before {
    content: counter(education-step, decimal-leading-zero);
    display: block;
    margin-bottom: 1rem;
    color: #18724d;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
  }

  @media (max-width: 768px) { grid-template-columns: minmax(0, 1fr); }
`;

const ContactLink = styled(TextLink)`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 3.75rem;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  background: #005650;
  color: #fff;
  text-decoration: none;
  text-align: center;
  line-height: 1.4;

  &:hover { background: #18724d; }
`;

const EducationDetails = () => (
  <>
    <Section>
      <Container>
        <h2>Dla kogo jest oferta edukacyjna?</h2>
        <p>
          Specjalistyczne szkolenia kieruję do osób zajmujących się psychoterapią
          lub pomocą psychologiczną. To oferta dla profesjonalistów, którzy chcą
          rozwijać swoją wiedzę i kompetencje zawodowe.
        </p>
        <p>
          Warsztaty i treningi kompetencji prowadzę także dla różnych grup
          zawodowych i społecznych. Jeśli szukasz zajęć dla swojej grupy, opisz
          w zapytaniu, kim są uczestnicy i jakie potrzeby chcecie omówić.
        </p>
      </Container>
    </Section>
    <SoftSection>
      <Container>
        <h2>Doświadczenie prowadzącej</h2>
        <p>
          Nazywam się Renata Zuba. Jestem psychologiem klinicznym i absolwentką
          psychologii Uniwersytetu Jagiellońskiego. Prowadzę psychoterapię
          i pomoc psychologiczną, a doświadczeniem zawodowym dzielę się podczas zajęć edukacyjnych.
        </p>
        <p>
          Pracuję jako wykładowca na studiach wyższych i podyplomowych.
          Jestem również autorką publikacji z zakresu psychoterapii i superwizji
          w pismach dla profesjonalistów.
        </p>
        <TextLink to="/o-mnie/">Poznaj kwalifikacje Renaty Zuby</TextLink>
      </Container>
    </SoftSection>
    <Section>
      <Container>
        <h2>Jak zapytać o współpracę edukacyjną?</h2>
        <Steps>
          <li>
            <h3>Kontakt</h3>
            <p>Napisz lub zadzwoń w sprawie szkoleń, warsztatów, treningów kompetencji albo webinariów.</p>
            <TextLink to="/skontaktuj-sie/">Skontaktuj się w sprawie zajęć</TextLink>
          </li>
          <li>
            <h3>Przedstawienie odbiorców i potrzeb</h3>
            <p>Opisz grupę uczestników i jej potrzeby. W wiadomości warto podać interesującą Cię formę zajęć oraz proponowany termin.</p>
          </li>
          <li>
            <h3>Omówienie możliwości współpracy</h3>
            <p>Kontakt pozwoli omówić zakres zajęć i możliwości ich organizacji. To również moment na pytania o czas trwania oraz koszt.</p>
          </li>
        </Steps>
      </Container>
    </Section>
    <SoftSection>
      <Container>
        <h2>Czas, koszt i organizacja zajęć</h2>
        <p>
          Aby uzyskać informacje o czasie trwania, kosztach i organizacji zajęć,
          skontaktuj się ze mną. W wiadomości opisz potrzeby uczestników
          i interesującą Cię formę współpracy.
        </p>
        <ContactLink to="/skontaktuj-sie/">Zapytaj o współpracę edukacyjną</ContactLink>
      </Container>
    </SoftSection>
  </>
);

export default EducationDetails;
