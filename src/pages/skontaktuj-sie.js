import * as React from "react";
import { styled } from "linaria/react";
import Container from "../components/styles/Container";
import { graphql, Link } from "gatsby";
import Button from "../components/styles/Button";
import GoBackIcon from "../images/goback.svg";
import { Helmet } from "react-helmet";
import LogoHeader from "../images/logo-psychologica-black.svg";
import MailIcon from "../images/contact__mail.svg";
import PhoneIcon from "../images/contact__phone.svg";
import BgImage from "../images/contact-element.svg";
import PinIcon from "../images/contact__pin.svg";

import "normalize.css";

const HeaderContact = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const ContactContainer = styled(Container)`
  box-sizing: border-box;
  padding-top: 3.25rem;
  padding-bottom: 3.25rem;
  height: 95vh;
`;
const ContactContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
const BgHalf = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: -999;
  right: 0;
  background: #f4f5f7;
  @media (max-width: 768px) {
    display: none;
  }
`;
const TitleContact = styled.h1`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  width: 70%;
  font-size: 56px;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    color: rgba(74, 189, 127, 1);
    font-weight: 700;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
const InfoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 6.5rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2rem;
    height: max-content;
  }
`;
const LeftContact = styled.div`
  max-width: 28rem;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const DescParagraph = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  color: #005650;
`;
const RightContact = styled.div`
  width: 28rem;
  box-sizing: border-box;

  justify-content: space-between;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    background: #f4f5f7;
    padding: 2rem;
    width: 100%;
    position: relative;
  }
  @media (max-width: 578px) {
    padding: 1rem;
  }
`;
const ContactForm = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 578px) {
    padding: 0;
  }
`;
const InputForm = styled.input`
  font-family: Red Hat Display;
  margin-bottom: 1rem;
  padding: 1rem;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;

  max-width: 100%;
  border-bottom: 1px solid #dbdbdb;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  color: #3e7672;
  &::placeholder {
    color: rgba(62, 118, 114, 0.7);
    font-weight: normal;
  }
  &:focus {
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #005650;
  }
`;
const TextForm = styled.textarea`
  font-family: Red Hat Display;
  margin-bottom: 2rem;
  padding: 1rem;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  font-weight: bold;
  max-width: 100%;
  border-bottom: 1px solid #dbdbdb;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #3e7672;
  &::placeholder {
    color: rgba(62, 118, 114, 0.7);
    font-weight: normal;
  }
  &:focus {
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #005650;
  }
`;
const FormButton = styled(Button)`
  max-width: 90%;
  margin: 0 auto;
`;
const Footnotes = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  display: block;
  width: 80%;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */
  color: #3e7672;
  opacity: 0.7;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const GoBack = styled(Link)`
  display: flex;
  align-content: center;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  line-height: 21px;
  text-align: center;
  color: #3e7672;
  transition: 0.3s
  &:hover {
    color: #4abd7f;
    & svg {
    margin-right: 1.5rem;
  }
  }
  & svg {
    transition: 0.3s;
    margin-right: 1rem;
  }
`;

const AdditionalInformation = styled.div``;

const SingleContactInformation = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  margin: 1.625rem 0;
  color: #3e7672;
  & svg {
    margin-right: 1.6rem;
  }
`;
const FormHeader = styled.h5`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 125%;
  text-align: left;
  @media (min-width: 769px) {
    display: none;
  }
`;
const BgLeaves = styled(BgImage)`
  position: absolute;
  left: 0;
  height: 20.8125rem;
  bottom: 25%;
`;

const skontaktujSie = ({ data }) => {
  return (
    <>
      <Helmet
        title="Skontaktuj się - Uzyskaj pomoc psychologa w Rzeszowie"
        meta={[
          {
            name: "description",
            content:
              "Skontaktuj się z Renata Zuba aby uzyskać pomoc psychologa w Rzeszowie. Kontakt jest bezpłatny, a do kadego przypadku podchodzę indywidualnie",
          },
        ]}></Helmet>
      <ContactContainer>
        <HeaderContact>
          <Link to="/">
            <LogoHeader height="60" width="185" />
          </Link>
          <GoBack to="/">
            <GoBackIcon />
            {data.datoCmsContact.back}
          </GoBack>
        </HeaderContact>
        <ContactContent>
          <TitleContact>
            {data.datoCmsContact.title}
            <span>{data.datoCmsContact.titleGreen}</span>
          </TitleContact>
          <InfoContent>
            <LeftContact>
              <DescParagraph>
                {data.datoCmsContact.desc}
                <AdditionalInformation>
                  <SingleContactInformation>
                    <PhoneIcon /> {data.datoCmsGlobal.phonenumber}
                  </SingleContactInformation>
                  <SingleContactInformation>
                    <MailIcon /> {data.datoCmsGlobal.email}
                  </SingleContactInformation>
                  <SingleContactInformation>
                    <PinIcon /> {data.datoCmsGlobal.adress}
                  </SingleContactInformation>
                </AdditionalInformation>
              </DescParagraph>
              <Footnotes>{data.datoCmsContact.companyDetails}</Footnotes>
            </LeftContact>
            <RightContact>
              <FormHeader>Wyślij wiadomość</FormHeader>

              <ContactForm
                action="https://formkeep.com/f/c856eba7e66e"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
                method="POST">
                <input type="hidden" name="utf8" value="✓" />

                <InputForm name="email" type="email" placeholder="Email*" />
                <InputForm
                  name="name"
                  type="text"
                  placeholder="Imię i nazwisko"
                />
                <InputForm
                  name="phone"
                  type="phone"
                  placeholder="Nr Telefonu"
                />
                <TextForm placeholder="Treść Wiadomości"></TextForm>
                <div
                  class="g-recaptcha"
                  data-sitekey="6Leh48waAAAAANkkSLOSPLPC1Rfckkm9aw6DbcXp"></div>

                <FormButton type="submit" value="Submit">
                  Skontaktuj się
                </FormButton>
              </ContactForm>
              <Footnotes>
                * Pola są wymagane. Wysyłając formularz zgadzam się na
                przetwarzanie danych ujętych w{" "}
                <Link to="/polityka-prywatnosci/">Polityce Prywatności.</Link>
              </Footnotes>
            </RightContact>
          </InfoContent>
        </ContactContent>
      </ContactContainer>
      <BgLeaves />
      <BgHalf />
    </>
  );
};
export const query = graphql`
  query ContactQuery {
    datoCmsGlobal {
      adress
      email
      phonenumber
    }
    datoCmsContact {
      title
      titleGreen
      companyDetails
      desc
      back
    }
  }
`;

export default skontaktujSie;
