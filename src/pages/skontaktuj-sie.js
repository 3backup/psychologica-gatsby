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
  font-size: 48px;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    color: rgba(74, 189, 127, 1);
    font-weight: 700;
  }
  @media (max-width: 768px) {
    font-size: 32px;
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
const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: rgba(74, 189, 127, 1);
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

const SkontaktujSie = ({ data }) => {
  const formRef = React.useRef(null);

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = async (e) => {
      // Get form data
      const formData = new FormData(form);
      const email = formData.get("email") || "";
      const name = formData.get("name") || "";
      const phone = formData.get("phone") || "";
      const message = formData.get("message") || "";

      // Send SMS notification in parallel (don't block form submission)
      // Use fetch with no await to fire and forget
      fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          message,
        }),
      }).catch((error) => {
        // Silently fail - don't interrupt form submission
        console.error("Failed to send SMS notification:", error);
      });

      // Form will continue with normal submission to Formkeep
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <Helmet
        title="Skontaktuj się - Uzyskaj pomoc psychologa w Rzeszowie"
        meta={[
          {
            name: "description",
            content:
              "Skontaktuj się z Renatą Zubą, aby uzyskać pomoc psychologa w Rzeszowie. Kontakt jest bezpłatny, a do każdego przypadku podchodzę indywidualnie",
          },
          { property: "og:title", content: "Skontaktuj się - Uzyskaj pomoc psychologa w Rzeszowie" },
          { property: "og:description", content: "Skontaktuj się z Renatą Zubą, aby uzyskać pomoc psychologa w Rzeszowie. Kontakt jest bezpłatny, a do każdego przypadku podchodzę indywidualnie" },
          { property: "og:url", content: "https://www.psychologica.pl/skontaktuj-sie/" },
          { property: "og:type", content: "website" },
          { property: "og:image", content: "https://www.psychologica.pl/og-image.jpg" },
          { property: "og:locale", content: "pl_PL" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Skontaktuj się - Uzyskaj pomoc psychologa w Rzeszowie" },
          { name: "twitter:description", content: "Skontaktuj się z Renatą Zubą, aby uzyskać pomoc psychologa w Rzeszowie. Kontakt jest bezpłatny, a do każdego przypadku podchodzę indywidualnie" },
          { name: "twitter:image", content: "https://www.psychologica.pl/og-image.jpg" },
        ]}>
        <link rel="canonical" href="https://www.psychologica.pl/skontaktuj-sie/" />
      </Helmet>
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
            Kontakt – Psycholog <span>Renata Zuba</span> Rzeszów | Psychologica
          </TitleContact>
          <InfoContent>
            <LeftContact>
              <DescParagraph>
                {data.datoCmsContact.desc}
                <AdditionalInformation>
                  <SingleContactInformation>
                    <PhoneIcon />{" "}
                    <ContactLink
                      href={`tel:${(data.datoCmsGlobal.phonenumber || "").replace(/\s/g, "")}`}>
                      {data.datoCmsGlobal.phonenumber}
                    </ContactLink>
                  </SingleContactInformation>
                  <SingleContactInformation>
                    <MailIcon />{" "}
                    <ContactLink href={`mailto:${data.datoCmsGlobal.email || ""}`}>
                      {data.datoCmsGlobal.email}
                    </ContactLink>
                  </SingleContactInformation>
                  <SingleContactInformation>
                    <PinIcon />{" "}
                    <ContactLink
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.datoCmsGlobal.adress || "")}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {data.datoCmsGlobal.adress}
                    </ContactLink>
                  </SingleContactInformation>
                </AdditionalInformation>
              </DescParagraph>
              <Footnotes>{data.datoCmsContact.companyDetails}</Footnotes>
            </LeftContact>
            <RightContact>
              <FormHeader>Wyślij wiadomość</FormHeader>

              <ContactForm
                ref={formRef}
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
                <TextForm name="message" placeholder="Treść Wiadomości"></TextForm>
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

export default SkontaktujSie;
