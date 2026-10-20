import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import AboutContactLink from "./styles/AboutContactLink";
import SkillList from "./styles/SkillList";

const SkillSection = styled.section`
  width: 100%;
  background: #f4f5f7;
`;
const SkillsContainer = styled(Container)`
  margin: 0 auto;
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  gap: 3rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SkillsPhoto = styled.div`
  width: 37.5%;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 1;
  }
`;
const SkillsText = styled.div`
  min-width: 0;
  flex: 1;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const Skills = () => {
  return (
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          datoCmsAboout {
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
                alt="Renata Zuba z otwartą książką w gabinecie"
                layout="constrained"
                width={460}
                sizes="(max-width: 768px) calc(100vw - 48px), 38vw"
                quality={80}
                formats={["auto", "avif", "webp"]}
                loading="lazy"
                placeholder="blurred"
              />
            </SkillsPhoto>
            <SkillsText>
              <SkillList
                header="Kwalifikacje"
                headingAs="h2"
                bigFont
              />
              <AboutContactLink to="/skontaktuj-sie/">
                {data.datoCmsAboout.skillsCta}
              </AboutContactLink>
            </SkillsText>
          </SkillsContainer>
        </SkillSection>
      )}
    />
  );
};
export default Skills;
