import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";

const Section = styled.section`
  padding: 6rem 0;
  background: #ffffff;
`;

const Content = styled(Container)`
  max-width: 900px;
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
  margin: 0 0 2rem;
  color: #1f1f1f;
  font-family: "Red Hat Display", sans-serif;
  font-size: 2.625rem;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 578px) {
    font-size: 2rem;
  }
`;

const Item = styled.details`
  border-top: 1px solid #dfe8e5;
  color: #1f1f1f;

  &:last-of-type {
    border-bottom: 1px solid #dfe8e5;
  }

  &[open] summary::after {
    content: "−";
  }
`;

const Question = styled.summary`
  position: relative;
  padding: 1.5rem 3rem 1.5rem 0;
  cursor: pointer;
  list-style: none;
  font-family: "Red Hat Display", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.4;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "+";
    position: absolute;
    top: 1.35rem;
    right: 0;
    color: #18724d;
    font-size: 1.75rem;
    font-weight: 400;
  }

  &:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }
`;

const Answer = styled.p`
  max-width: 70ch;
  margin: 0;
  padding: 0 3rem 1.5rem 0;
  color: #3e7672;
  font-family: Manrope, sans-serif;
  font-size: 1rem;
  line-height: 1.7;
`;

const FaqSection = ({ items, title = "Najczęstsze pytania" }) => (
  <Section id="faq">
    <Content>
      <Eyebrow>Praktyczne informacje</Eyebrow>
      <Title>{title}</Title>
      {items.map((item) => (
        <Item key={item.question}>
          <Question>{item.question}</Question>
          <Answer>{item.answer}</Answer>
        </Item>
      ))}
    </Content>
  </Section>
);

export default FaqSection;
