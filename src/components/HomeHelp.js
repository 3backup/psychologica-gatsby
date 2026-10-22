import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";

const Section = styled.section`
  padding: 5rem 0;
  background: #fff;
`;

const Content = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  line-height: 1.7;

  & h2 {
    margin: 0 0 1.5rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.3;
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
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
    font-size: 16px;
  }
`;

const HomeHelp = () => (
  <Section aria-label="Pomoc psychologiczna i psychoterapia">
    <Content>
      <div>
        <h2>W czym mogę pomóc</h2>
        <p>
          Pracuję z osobami dorosłymi, które mierzą się z trudnościami
          emocjonalnymi, kryzysami życiowymi, problemami w relacjach, stresem,
          lękiem, obniżonym nastrojem, problemami ze snem, stratą,
          doświadczeniami traumatycznymi oraz skutkami uzależnień w życiu
          własnym lub rodzinnym.
        </p>
        <p>
          Pomoc może mieć formę psychoterapii albo wsparcia psychologicznego,
          zależnie od problemu, potrzeb i celu spotkań. Jeśli chcesz poznać
          pełniejszy zakres pracy, przejdź do zakładek{" "}
          <Link to="/oferta-terapeutyczna/">Psychoterapia dorosłych</Link>,{" "}
          <Link to="/pomoc-psychologiczna-rzeszow/">Pomoc psychologiczna</Link>{" "}
          lub{" "}
          <Link to="/psychoterapia-uzaleznien-rzeszow/">
            Psychoterapia uzależnień
          </Link>.
        </p>
      </div>
      <div>
        <h2>Dla kogo jest ta pomoc</h2>
        <p>
          Z pomocy mogą skorzystać osoby, które czują, że obecna sytuacja je
          przerasta, chcą lepiej zrozumieć swoje emocje i sposób
          funkcjonowania albo potrzebują bezpiecznej, profesjonalnej
          przestrzeni do pracy nad zmianą.
        </p>
        <p>
          Pracuję także z osobami uzależnionymi oraz z tymi, u których
          w rodzinie lub związku występuje albo występował problem uzależnienia.
        </p>
        <h2>Jak zacząć współpracę</h2>
        <p>
          Pierwszy kontakt służy wstępnemu rozpoznaniu problemów, potrzeb
          i możliwości pomocy. Kolejnym krokiem jest ustalenie celów oraz zasad
          współpracy, a następnie cykliczna praca dostosowana do Twojej sytuacji.
        </p>
        <p>
          Spotkania mogą odbywać się osobiście w Rzeszowie lub zdalnie.{" "}
          <Link to="/skontaktuj-sie/">Skontaktuj się, aby umówić spotkanie</Link>.
        </p>
      </div>
    </Content>
  </Section>
);

export default HomeHelp;
