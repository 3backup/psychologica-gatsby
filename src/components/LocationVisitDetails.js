import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import TextLink from "./styles/TextLink";

const Section = styled.section`
  padding: 4rem 0;
  background: #f4f5f7;
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 4rem;
  padding: 3rem 0;

  & + & {
    border-top: 1px solid #dfe8e5;
  }

  h2 {
    margin: 0;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    font-weight: 400;
    line-height: 1.25;
  }

  p {
    max-width: 68ch;
    margin: 0 0 1.25rem;
    color: #3e7672;
    font-family: Manrope, sans-serif;
    font-size: 1.0625rem;
    line-height: 1.75;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
  }
`;

const ContactLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 3.75rem;
  padding: 0 1.75rem;
  border-radius: 0.9375rem;
  background: #005650;
  color: #ffffff;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 600;
  text-decoration: none;

  &:hover { background: #18724d; }
  &:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }
`;

const LocationVisitDetails = ({ address }) => (
  <Section aria-label="Spotkania w gabinecie i online">
    <Container>
      <Detail>
        <h2>Jak wyglądają spotkania w gabinecie i online?</h2>
        <div>
          <p>Spotkania mogą odbywać się osobiście w gabinecie przy ul. {address.streetAddress} w Rzeszowie albo zdalnie. Oferuję sesje online za pomocą Zoom, Skype, Microsoft Teams, a także sesje telefoniczne.</p>
          <p>Sesje zdalne odbywają się na takich samych zasadach jak sesje osobiste, dlatego możesz wybrać formę kontaktu wygodną dla siebie.</p>
        </div>
      </Detail>
      <Detail>
        <h2>Dla kogo jest ta forma spotkań?</h2>
        <div>
          <p>Ta strona jest dla osób, które chcą sprawdzić, gdzie znajduje się gabinet, jak dojechać na miejsce i czy mogą skorzystać ze spotkania bez przyjazdu do gabinetu.</p>
          <p>Jeśli zależy Ci na spokojnym dotarciu na wizytę, znajdziesz tu najważniejsze informacje o adresie, dojeździe komunikacją miejską i samochodem oraz o dostępnych formach spotkań.</p>
        </div>
      </Detail>
      <Detail>
        <h2>Co warto sprawdzić przed kontaktem?</h2>
        <div>
          <p>Przed umówieniem spotkania możesz zdecydować, czy wolisz wizytę osobistą, czy sesję zdalną. Jeśli chcesz najpierw poznać zakres pomocy, przejdź do <TextLink to="/oferta-terapeutyczna/">opisu usług</TextLink>.</p>
          <p>Na tej podstawie łatwiej wybrać sposób spotkania i skontaktować się w sprawie dalszych informacji.</p>
          <ContactLink to="/skontaktuj-sie/">Umów konsultację</ContactLink>
        </div>
      </Detail>
    </Container>
  </Section>
);

export default LocationVisitDetails;
