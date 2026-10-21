import React from "react";
import { styled } from "linaria/react";
import TextLink from "./styles/TextLink";

const Section = styled.section`
  padding: 2.5rem 0;
  border-top: 1px solid #dbe4e2;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.75;

  h2 {
    max-width: 26ch;
    margin: 0 0 1.5rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2.25rem;
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

  ul { max-width: 68ch; margin: 0; padding-left: 1.25rem; }
  ul li { margin-bottom: 0.75rem; }
  ul strong { font-weight: inherit; color: #1f1f1f; }

  @media (max-width: 578px) {
    padding: 2rem 0;
    h2 { font-size: 2rem; }
  }
`;

const SoftSection = Section;

const Steps = styled.ol`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
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
      <div>
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
      </div>
    </Section>
    <SoftSection>
      <div>
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
      </div>
    </SoftSection>
    <Section>
      <div>
        <h2>Jak wygląda współpraca przy szkoleniu lub warsztacie?</h2>
        <p>
          Pierwszy kontakt pozwala omówić, dla kogo są zajęcia, jaki temat Cię
          interesuje i jakie potrzeby ma grupa. Możesz zapytać o szkolenie,
          warsztat, trening kompetencji lub webinarium.
        </p>
        <Steps>
          <li>
            <h3>Kontakt</h3>
            <p>Napisz lub zadzwoń, jeśli szukasz zajęć dla swojej grupy i chcesz omówić możliwości współpracy.</p>
            <TextLink to="/skontaktuj-sie/">Skontaktuj się w sprawie zajęć</TextLink>
          </li>
          <li>
            <h3>Przedstawienie odbiorców i potrzeb</h3>
            <p>Opowiedz, w jakim kontekście pracują uczestnicy i czego potrzebują. Pozwoli to skupić rozmowę na istotnych dla nich zagadnieniach.</p>
          </li>
          <li>
            <h3>Omówienie możliwości współpracy</h3>
            <p>Zapytaj o możliwą formę, zakres i organizację zajęć, a także o ich czas oraz koszt. Wstępny kontakt służy omówieniu tych kwestii przed podjęciem decyzji.</p>
          </li>
        </Steps>
      </div>
    </Section>
    <Section>
      <div>
        <h2>Jakie informacje warto podać w zapytaniu?</h2>
        <p>
          W pierwszej wiadomości opisz planowane zajęcia. Pomocne będą
          następujące informacje:
        </p>
        <ul>
          <li><strong>Odbiorcy:</strong> kim są uczestnicy i w jakim obszarze pracują.</li>
          <li><strong>Potrzeby lub temat:</strong> jakie zagadnienia chcecie omówić.</li>
          <li><strong>Forma zajęć:</strong> szkolenie, warsztat, trening kompetencji lub webinarium.</li>
          <li><strong>Proponowany termin:</strong> kiedy planujecie zajęcia.</li>
        </ul>
      </div>
    </Section>
    <SoftSection>
      <div>
        <h2>Czas, koszt i organizacja zajęć</h2>
        <p>
          Aby uzyskać informacje o czasie trwania, kosztach i organizacji zajęć,
          skontaktuj się ze mną. Podczas rozmowy można omówić te kwestie
          w odniesieniu do wybranej formy zajęć, tematu i potrzeb grupy.
        </p>
        <p>
          Zapytaj o dostępne terminy, przewidywany czas zajęć oraz koszt dla
          wybranej formy. Omówienie tych kwestii ułatwi Ci podjęcie decyzji
          o dalszej współpracy.
        </p>
        <ContactLink to="/skontaktuj-sie/">Zapytaj o współpracę edukacyjną</ContactLink>
      </div>
    </SoftSection>
  </>
);

export default EducationDetails;
