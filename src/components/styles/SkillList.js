import React from "react";
import { styled } from "linaria/react";
import BulletPoint from "../../images/bullet-point.svg";
import { StaticQuery, graphql } from "gatsby";

const AboutSkillList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
const AboutSkillListTitle = styled.h4`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  margin: 0 0 2rem 0;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    color: #4abd7f;
    font-weight: bold;
  }
`;

const AboutSkillListUL = styled.ul`
  padding: 0;
  margin: 0;
`;
const AboutSkillListLi = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 1.5rem;
  padding: 0;
  color: #3e7672;
  list-style: none;
`;
const Dot = styled(BulletPoint)`
  width: 18px;
  height: 18px;
  padding-right: 1rem;
`;

const SkillList = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query SkillListQuery {
          datoCmsSkillList {
            listaKompetencji {
              skillsElement
            }
          }
        }
      `}
      render={(data) => (
        <AboutSkillList>
          <AboutSkillListTitle
            style={{ fontSize: `${props.bigFont ? "42px" : "26px"}` }}>
            {props.header} <span>{props.subheader}</span>
          </AboutSkillListTitle>
          <AboutSkillListUL>
            {data.datoCmsSkillList.listaKompetencji.map((singleSkill) => (
              <AboutSkillListLi>
                <Dot />
                {singleSkill.skillsElement}
              </AboutSkillListLi>
            ))}
          </AboutSkillListUL>
        </AboutSkillList>
      )}
    />
  );
};
export default SkillList;
