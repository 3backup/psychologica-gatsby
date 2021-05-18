import React from "react";
import { styled } from "linaria/react";
import { css } from "linaria";
import BulletPoint from "../../images/bullet-point.svg";

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
const BiggerFont = styled(AboutSkillListTitle)`
  font-size: 42px;
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
    <AboutSkillList>
      <AboutSkillListTitle
        style={{ fontSize: `${props.bigFont ? "42px" : "26px"}` }}>
        {props.header} <span>{props.subheader}</span>
      </AboutSkillListTitle>
      <AboutSkillListUL>
        <AboutSkillListLi>
          <Dot />
          Certyfikat Specjalisty psychoterapii uzależnień wydany przez Państwową
          Agencję Rozwiązywania Problemów Alkoholowych (Nr 123){" "}
        </AboutSkillListLi>
        <AboutSkillListLi>
          <Dot />
          Certyfikat Superwizora psychoterapii uzależnień wydany przez Radę
          Superwizorów Psychoterapii Uzależnień (Nr 34)
        </AboutSkillListLi>
        <AboutSkillListLi>
          <Dot />
          Certyfikat Asystenta Psychodramy wydany przez Europejski Instytut
          Psychodramy w Berlinie i Polski Instytut Psychodramy w Krakowie (No
          2015-PL-11){" "}
        </AboutSkillListLi>
        <AboutSkillListLi>
          <Dot />
          Stopień psychologa klinicznego
        </AboutSkillListLi>
        <AboutSkillListLi>
          <Dot />
          Dyplom magistra psychologii wydany przez Katedrę Psychologii
          Uniwersytetu Jagiellońskiego w Krakowie{" "}
        </AboutSkillListLi>
      </AboutSkillListUL>
    </AboutSkillList>
  );
};
export default SkillList;
