import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";

const Section = styled.section`
  padding: 5rem 0;
`;

const Content = styled(Container)`
  max-width: 900px;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  line-height: 1.7;

  & h2 {
    margin: 2.5rem 0 1rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.3;
  }

  & h2:first-child {
    margin-top: 0;
  }

  & p {
    margin: 0 0 1.25rem;
  }

  & a {
    color: #005650;
    text-underline-offset: 0.2em;
  }

  & a:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    font-size: 16px;

    & h2 {
      font-size: 1.625rem;
    }
  }
`;

const HomeQuestions = () => {
  const { datoCmsHowitlookslike } = useStaticQuery(graphql`
    query HomeQuestionsQuery {
      datoCmsHowitlookslike {
        wspPracaCena
        processTime
      }
    }
  `);

  return (
    <Section aria-label="Pytania o pomoc psychologiczną i psychoterapię">
      <Content>
        <h2>Ile kosztują usługi psychologa w Rzeszowie?</h2>
        <p>
          {datoCmsHowitlookslike.wspPracaCena}.{" "}
          {datoCmsHowitlookslike.processTime}. Dotyczy to spotkań osobistych
          i sesji zdalnych. Aby umówić termin,{" "}
          <Link to="/skontaktuj-sie/">skontaktuj się z gabinetem</Link>.
        </p>
        <h2>Jak wygląda współpraca krok po kroku?</h2>
        <p>
          Pierwszy etap to kontakt i wstępna diagnoza problemów, zasobów,
          potrzeb oraz możliwości. Następnie ustalamy cele i zasady pomocy
          psychologicznej lub psychoterapii. Kolejny krok to regularna praca
          dopasowana do sytuacji i tempa danej osoby.
        </p>
        <h2>Dla kogo jest ta usługa?</h2>
        <p>
          Psychoterapia lub pomoc psychologiczna jest formą wsparcia dla osób
          dorosłych, które doświadczają cierpienia psychicznego, napięcia,
          trudności w relacjach, kryzysu, lęku, smutku, problemów ze snem albo
          chcą lepiej zrozumieć siebie i swoje reakcje. Pracuję także z osobami
          uzależnionymi i ich bliskimi.
        </p>
        <h2>Jak przygotować się do pierwszego spotkania?</h2>
        <p>
          Możesz zastanowić się, co skłoniło Cię do szukania pomocy, które
          trudności są teraz najbardziej obciążające i o co chcesz zapytać.
          Nie musisz mieć gotowej diagnozy ani wiedzieć, od czego zacząć.
          Pierwsza konsultacja służy wspólnemu rozpoznaniu sytuacji,
          potrzeb i możliwych dalszych kroków.
        </p>
        <h2>Ile spotkań będzie potrzebnych?</h2>
        <p>
          Liczbę i częstotliwość spotkań ustalamy indywidualnie podczas
          konsultacji, uwzględniając Twoją sytuację, potrzeby i cel pracy.
          Pomoc może obejmować konsultacje dotyczące bieżącej trudności
          albo regularną psychoterapię. Plan współpracy i dalsze kroki
          omawiamy po rozpoznaniu potrzeb.
        </p>
        <h2>Gdzie odbywają się spotkania?</h2>
        <p>
          Sesje osobiste odbywają się w Rzeszowie, a spotkania zdalne są
          dostępne w całej Polsce i za granicą.{" "}
          <Link to="/lokalizacja/">Sprawdź lokalizację gabinetu</Link>.
        </p>
      </Content>
    </Section>
  );
};

export default HomeQuestions;
