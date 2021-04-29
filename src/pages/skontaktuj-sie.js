import * as React from "react";
import { styled } from "linaria/react";
import Container from "../components/styles/Container";
import Button from "../components/styles/Button";
import { Helmet } from "react-helmet";
import LogoHeader from "../images/logo-top-dwa.svg";

const HeaderContact = styled.header`
  box-sizing: border-box;

  margin-bottom: 3.25rem;
`;
const ContactContainer = styled(Container)`
  box-sizing: border-box;
  padding-top: 3.25rem;
  padding-bottom: 3.25rem;
  height: 100vh;
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const BgHalf = styled.div`
  position: absolute;
  top: 0;
  width: 50%;

  z-index: -999;
  right: 0;
  background: #f4f5f7;
`;
const TitleContact = styled.h1`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    color: rgba(74, 189, 127, 1);
    font-weight: 700;
  }
`;
const InfoContent = styled.div`
  width: 100%;

  display: flex;
  padding-bottom: 6.5rem;
  justify-content: space-between;
`;
const LeftContact = styled.div`
  max-width: 28rem;
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

  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
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
  border-right: none
  font-weight: bold;;
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
  font-size: 14px;
  line-height: 150%;
  /* or 21px */

  color: #3e7672;

  opacity: 0.7;
`;

const skontaktujSie = ({ data }) => {
  return (
    <>
      <Helmet
        title="Psychologica - Skontaktuj się"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}></Helmet>
      <ContactContainer>
        <HeaderContact>
          <LogoHeader height="60" width="185" />
        </HeaderContact>
        <ContactContent>
          <TitleContact>
            Zostaw wiadomość w formularzu bądź korzystaj z
            <span> danych obok</span>
          </TitleContact>
          <InfoContent>
            <LeftContact>
              <DescParagraph>
                Zostawienie wiadomości jest darmowe. Na podstawie wstępnej
                diagnozy zaproponuję Ci sesję początkową na której określimy
                wspólne cele. Koszt wizyty to 100zł
              </DescParagraph>
              <Footnotes>
                PSYCHOLOGICA Renata Zuba
                <br />
                NIP 8131239390 REGON 365481005
              </Footnotes>
            </LeftContact>
            <RightContact>
              <ContactForm>
                <InputForm name="mail" type="email" placeholder="Email*" />
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
                <FormButton type="submit" value="Submit">
                  Skontaktuj się
                </FormButton>
              </ContactForm>
              <Footnotes>
                * Pola są wymagae. Wysyłając formularz zgdadzam się na
                przetwarzanie danych ujętych w Polityce Prywatności.
              </Footnotes>
            </RightContact>
          </InfoContent>
        </ContactContent>
      </ContactContainer>
      <BgHalf />
    </>
  );
};

export default skontaktujSie;
