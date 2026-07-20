import * as React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Container from "../components/styles/Container";
import Footer from "../components/Footer";
import { trackEvent } from "../utils/analytics";

const Section = styled.main`
  min-height: 70vh;
  padding: 12rem 0 6rem;
  background: #f4f5f7;
`;

const Content = styled(Container)`
  max-width: 760px;

  h1 {
    margin: 0 0 1.5rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    max-width: 60ch;
    margin: 0 0 2rem;
    color: #3e7672;
    font-family: Manrope, sans-serif;
    font-size: 1.125rem;
    line-height: 1.7;
  }

  a {
    color: #005650;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 600;
    text-underline-offset: 0.35rem;
  }
`;

const DziekujemyPage = () => {
  React.useEffect(() => {
    try {
      const submittedAt = Number(
        window.sessionStorage.getItem("psychologica_contact_submitted"),
      );
      const wasRecentlySubmitted =
        submittedAt > 0 && Date.now() - submittedAt < 30 * 60 * 1000;

      if (wasRecentlySubmitted) {
        trackEvent("generate_lead", {
          lead_source: "contact_form",
          form_name: "contact",
        });
      }

      window.sessionStorage.removeItem("psychologica_contact_submitted");
    } catch (error) {
      // Avoid duplicate conversion events if session storage is unavailable.
    }
  }, []);

  return (
    <Layout
      visableHeader
      pageTitle="Dziękuję za wiadomość | Psychologica"
      pageDescription="Potwierdzenie wysłania wiadomości do Psychologica."
      pageType="WebPage"
      noIndex>
      <Section>
        <Content>
          <h1>Dziękuję za wiadomość</h1>
          <p>
            Formularz został wysłany. Odpowiem na podany adres e-mail lub numer
            telefonu tak szybko, jak będzie to możliwe.
          </p>
          <Link to="/">Wróć do strony głównej</Link>
        </Content>
      </Section>
      <Footer />
    </Layout>
  );
};

export default DziekujemyPage;
