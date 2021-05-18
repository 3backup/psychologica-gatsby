import React from "react";
import Container from "./styles/Container";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import Button from "./styles/Button";
import SkillList from "./styles/SkillList";

const SkillSection = styled.section`
  width: 100%;
  background: #f4f5f7;
`;
const SkillsContainer = styled(Container)`
  margin: 0 auto;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 7rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SkillsPhoto = styled.div`
  margin-top: -6rem;
  width: 37.5%;
  @media (max-width: 768px) {
    width: 80%;
    position: static;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 1;
  }
`;
const SkillsText = styled.div`
  width: 62.5%;
  padding: 0 6.25%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const ButtonLightGreen = styled(Button)`
  background-color: #4abd7f;
  transition: 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color: #005650;
  }
`;
const Skills = () => {
  return (
    <SkillSection>
      <SkillsContainer>
        <SkillsPhoto>
          <StaticImage
            src="../images/skills-image.jpg"
            alt="bg-testimonial"
            layout="fullWidth"
            placeholder="blurred"
          />
        </SkillsPhoto>
        <SkillsText>
          <SkillList
            header="Moje kompetencje potwierdzone"
            subheader="dyplomami i certyfikatami"
            bigFont
          />
          <ButtonLightGreen>Skontaktuj się</ButtonLightGreen>
        </SkillsText>
      </SkillsContainer>
    </SkillSection>
  );
};
export default Skills;
