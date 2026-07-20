import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Layout from "./Layout";
import Container from "./styles/Container";
import FaqSection from "./FaqSection";
import OfferPrice from "./OfferPrice";
import Footer from "./Footer";

const Hero = styled.section`
  padding: 10rem 0 6rem;
  background: linear-gradient(135deg, #f4f5f7 0%, #edf6f1 100%);
`;

const HeroContent = styled(Container)`
  max-width: 1050px;
`;

const Breadcrumbs = styled.nav`
  margin-bottom: 2rem;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 0.875rem;

  a {
    color: #005650;
    text-decoration: none;
  }

  span {
    margin: 0 0.5rem;
    color: #87a5a0;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 1rem;
  color: #18724d;
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  max-width: 17ch;
  margin: 0;
  color: #1f1f1f;
  font-family: "Red Hat Display", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
`;

const HeroLead = styled.p`
  max-width: 65ch;
  margin: 1.5rem 0 0;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.25rem;
  line-height: 1.65;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 2rem;
  margin-top: 2rem;
`;

const PrimaryAction = styled(Link)`
  display: inline-flex;
  min-height: 3.75rem;
  padding: 0 1.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.9375rem;
  background: #005650;
  color: #ffffff;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #18724d;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }
`;

const SecondaryAction = styled(Link)`
  color: #005650;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 600;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.35rem;
`;

const Facts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.65rem 1rem;
    border: 1px solid rgba(0, 86, 80, 0.14);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.75);
    color: #315f5b;
    font-family: Manrope, sans-serif;
    font-size: 0.9375rem;
  }
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const SoftSection = styled(Section)`
  background: #f4f5f7;
`;

const Split = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const SectionTitle = styled.h2`
  max-width: 22ch;
  margin: 0 0 1.5rem;
  color: #1f1f1f;
  font-family: "Red Hat Display", sans-serif;
  font-size: 2.625rem;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 578px) {
    font-size: 2rem;
  }
`;

const Body = styled.div`
  max-width: 68ch;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.75;

  p {
    margin: 0 0 1.25rem;
  }
`;

const TrustCard = styled.aside`
  padding: 2rem;
  border-radius: 1rem;
  background: #005650;
  color: #ffffff;

  h2 {
    margin: 0 0 1rem;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.3;
  }

  p {
    margin: 0 0 1.5rem;
    color: rgba(255, 255, 255, 0.82);
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

const GridContainer = styled(Container)``;

const AreaGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 578px) {
    grid-template-columns: 1fr;
  }
`;

const AreaCard = styled.li`
  min-height: 8rem;
  padding: 1.5rem;
  border: 1px solid #dfe8e5;
  border-radius: 0.9375rem;
  background: #ffffff;

  h3 {
    margin: 0 0 0.75rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: #3e7672;
    font-family: Manrope, sans-serif;
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;
  counter-reset: service-step;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.li`
  counter-increment: service-step;

  &::before {
    content: counter(service-step, decimal-leading-zero);
    display: block;
    margin-bottom: 1rem;
    color: #4abd7f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1rem;
    font-weight: 700;
  }

  h3 {
    margin: 0 0 0.75rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    margin: 0;
    color: #3e7672;
    font-family: Manrope, sans-serif;
    line-height: 1.65;
  }
`;

const Closing = styled.section`
  padding: 5rem 0;
  background: #005650;
  color: #ffffff;
`;

const ClosingContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }

  h2 {
    max-width: 23ch;
    margin: 0 0 0.75rem;
    font-family: "Red Hat Display", sans-serif;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    max-width: 60ch;
    margin: 0;
    color: rgba(255, 255, 255, 0.78);
    font-family: Manrope, sans-serif;
    line-height: 1.65;
  }
`;

const LightAction = styled(PrimaryAction)`
  flex: 0 0 auto;
  background: #ffffff;
  color: #005650;

  &:hover {
    background: #edf6f1;
  }
`;

const ServiceLanding = ({
  seo,
  eyebrow,
  title,
  lead,
  facts,
  introTitle,
  introParagraphs,
  trustTitle,
  trustText,
  areasTitle,
  areas,
  processTitle,
  processLead,
  steps,
  distinctionTitle,
  distinctionParagraphs,
  faq,
  closingTitle,
  closingText,
}) => (
  <Layout visableHeader {...seo}>
    <main>
      <Hero>
        <HeroContent>
          <Breadcrumbs aria-label="Okruszki nawigacyjne">
            <Link to="/">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <Link to="/oferta-terapeutyczna/">Oferta terapeutyczna</Link>
            <span aria-hidden="true">/</span>
            {eyebrow}
          </Breadcrumbs>
          <Eyebrow>{eyebrow}</Eyebrow>
          <HeroTitle>{title}</HeroTitle>
          <HeroLead>{lead}</HeroLead>
          <Actions>
            <PrimaryAction to="/skontaktuj-sie/">Umów pierwszą rozmowę</PrimaryAction>
            <SecondaryAction to="/o-mnie/">Poznaj moje kwalifikacje</SecondaryAction>
          </Actions>
          <Facts>
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </Facts>
        </HeroContent>
      </Hero>

      <Section>
        <Split>
          <div>
            <SectionTitle>{introTitle}</SectionTitle>
            <Body>
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Body>
          </div>
          <TrustCard>
            <h2>{trustTitle}</h2>
            <p>{trustText}</p>
            <Link to="/o-mnie/">Kwalifikacje Renaty Zuby</Link>
          </TrustCard>
        </Split>
      </Section>

      <SoftSection>
        <GridContainer>
          <Eyebrow>Zakres wsparcia</Eyebrow>
          <SectionTitle>{areasTitle}</SectionTitle>
          <AreaGrid>
            {areas.map((area) => (
              <AreaCard key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </AreaCard>
            ))}
          </AreaGrid>
        </GridContainer>
      </SoftSection>

      <Section>
        <GridContainer>
          <Eyebrow>Przebieg współpracy</Eyebrow>
          <SectionTitle>{processTitle}</SectionTitle>
          <Body>
            <p>{processLead}</p>
          </Body>
          <Steps>
            {steps.map((step) => (
              <Step key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Step>
            ))}
          </Steps>
        </GridContainer>
      </Section>

      <SoftSection>
        <Split>
          <div>
            <Eyebrow>Dobór formy pomocy</Eyebrow>
            <SectionTitle>{distinctionTitle}</SectionTitle>
          </div>
          <Body>
            {distinctionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Body>
        </Split>
      </SoftSection>

      <OfferPrice />
      <FaqSection items={faq} />

      <Closing>
        <ClosingContent>
          <div>
            <h2>{closingTitle}</h2>
            <p>{closingText}</p>
          </div>
          <LightAction to="/skontaktuj-sie/">Skontaktuj się</LightAction>
        </ClosingContent>
      </Closing>
    </main>
    <Footer />
  </Layout>
);

export default ServiceLanding;
