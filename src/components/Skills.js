import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Container from "./styles/Container";
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
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          datoCmsAboout {
            skillsTitle
            skillsSubtitle
            skillsCta
          }
        }
      `}
      render={(data) => (
        <SkillSection>
          <SkillsContainer>
            <SkillsPhoto>
              <StaticImage
                src="../images/skills-image.jpg"
                alt="Zdjęcie Renata Zuba w sekcji kompetencje"
                layout="fullWidth"
                placeholder="blurred"
              />
            </SkillsPhoto>
            <SkillsText>
              <SkillList
                header={data.datoCmsAboout.skillsTitle}
                subheader={data.datoCmsAboout.skillsSubtitle}
                bigFont
              />
              <ButtonLightGreen>
                {data.datoCmsAboout.skillsCta}
              </ButtonLightGreen>
            </SkillsText>
          </SkillsContainer>
        </SkillSection>
      )}
    />
  );
};
export default Skills;
