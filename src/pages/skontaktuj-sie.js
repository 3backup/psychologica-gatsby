import * as React from "react";
import { styled } from "linaria/react";
import Container from "../components/styles/Container";
import { graphql, Link } from "gatsby";
import Button from "../components/styles/Button";
import GoBackIcon from "../images/goback.svg";
import LogoHeader from "../images/logo-psychologica-black.svg";
import MailIcon from "../images/contact__mail.svg";
import PhoneIcon from "../images/contact__phone.svg";
import PinIcon from "../images/contact__pin.svg";
import Seo from "../components/Seo";
import TextLink from "../components/styles/TextLink";
import { trackContactClick, trackEvent } from "../utils/analytics";
import { mapUrl } from "../config/location-map.cjs";

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
  min-height: 95vh;
  a:focus-visible, button:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }
`;
const ContactContent = styled.main`
  display: flex;
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
    width: 100%;
  }
`;
const InfoContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const LeftContact = styled.div`
  flex: 1;
  min-width: 0;
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
  flex: 1;
  min-width: 0;
  max-width: 28rem;
  width: 100%;
  box-sizing: border-box;

  justify-content: space-between;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    background: #f4f5f7;
    padding: 2rem;
    width: 100%;
    position: relative;
    max-width: 100%;
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
  transition: 0.3s;
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
    flex-shrink: 0;
  }
`;
const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: 0.3s;
  &:hover {
    color: rgba(74, 189, 127, 1);
  }
`;
const FormHeader = styled.p`
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
const ContactDetails = styled.div`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #dbdbdb;
  max-width: 52rem;
  & section + section { margin-top: 2.5rem; }
  & h2 {
    font-family: "Red Hat Display", sans-serif;
    font-size: 26px;
    line-height: 1.25;
    font-weight: 500;
    color: #1f1f1f;
    margin: 0 0 1rem;
  }
  & p {
    font-family: "Red Hat Display", sans-serif;
    font-size: 18px;
    line-height: 1.65;
    color: #005650;
    margin: 0;
  }
`;

const SkontaktujSie = ({ data }) => {
  const price = data.datoCmsOfferprice?.offerpricePrice?.trim();
  const duration = data.datoCmsHowitlookslike?.processTime?.replace(/^Czas sesji:\s*/i, "").trim();
  const address = data.site?.siteMetadata?.businessAddress;
  if (![price, duration, address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim())) {
    throw new Error("Kontakt: brak ceny, czasu sesji lub adresu z potwierdzonych źródeł");
  }
  const formRef = React.useRef(null);

  React.useEffect(() => {
    trackEvent("view_contact");

    const form = formRef.current;
    if (!form) return;

    const handleSubmit = () => {
      try {
        window.sessionStorage.setItem(
          "psychologica_contact_submitted",
          Date.now().toString(),
        );
      } catch (error) {
        // The form redirect still works when storage is unavailable.
      }

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
      <Seo
        title="Kontakt z psychologiem w Rzeszowie | Psychologica"
        description="Skontaktuj się z psychologiem Renatą Zubą. Umów konsultację w gabinecie w Rzeszowie lub online telefonicznie, mailowo albo przez formularz."
        imageAlt="Kontakt z psychologiem Renatą Zubą"
        pageType="ContactPage"
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Kontakt", path: "/skontaktuj-sie/" },
        ]}
      />
      <ContactContainer>
        <HeaderContact>
          <Link to="/" aria-label="Psychologica – strona główna">
            <LogoHeader height="60" width="185" aria-hidden="true" focusable="false" />
          </Link>
          <GoBack to="/">
            <GoBackIcon aria-hidden="true" focusable="false" />
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
                Aby umówić pierwszą sesję, zadzwoń do mnie. Możesz też napisać e-mail
                lub skorzystać z formularza. Wybierz dogodny sposób kontaktu i zaznacz,
                czy interesuje Cię spotkanie w gabinecie, czy zdalne.
              </DescParagraph>
              <AdditionalInformation>
                <SingleContactInformation>
                  <PhoneIcon aria-hidden="true" focusable="false" />{" "}
                  <ContactLink
                    onClick={() => trackContactClick("phone", "contact_page")}
                    href={`tel:${(data.datoCmsGlobal.phonenumber || "").replace(/\s/g, "")}`}>
                    {data.datoCmsGlobal.phonenumber}
                  </ContactLink>
                </SingleContactInformation>
                <SingleContactInformation>
                  <MailIcon aria-hidden="true" focusable="false" />{" "}
                  <ContactLink
                    onClick={() => trackContactClick("email", "contact_page")}
                    href={`mailto:${data.datoCmsGlobal.email || ""}`}>
                    {data.datoCmsGlobal.email}
                  </ContactLink>
                </SingleContactInformation>
                <SingleContactInformation>
                  <PinIcon aria-hidden="true" focusable="false" />{" "}
                  <ContactLink
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    {data.datoCmsGlobal.adress}
                  </ContactLink>
                </SingleContactInformation>
              </AdditionalInformation>
              <Footnotes>{data.datoCmsContact.companyDetails}</Footnotes>
            </LeftContact>
            <RightContact>
              <FormHeader>Wyślij wiadomość</FormHeader>

              <ContactForm
                ref={formRef}
                action="https://formkeep.com/f/c856eba7e66e"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                method="POST">
                <input type="hidden" name="utf8" value="✓" />
                <input
                  type="hidden"
                  name="_redirect_url"
                  value="https://www.psychologica.pl/dziekujemy/"
                />

                <InputForm
                  name="email"
                  type="email"
                  placeholder="Email*"
                  aria-label="Adres e-mail"
                  autoComplete="email"
                  required
                />
                <InputForm
                  name="name"
                  type="text"
                  placeholder="Imię i nazwisko"
                  aria-label="Imię i nazwisko"
                  autoComplete="name"
                />
                <InputForm
                  name="phone"
                  type="tel"
                  placeholder="Nr Telefonu"
                  aria-label="Numer telefonu"
                  autoComplete="tel"
                />
                <TextForm
                  name="message"
                  placeholder="Treść Wiadomości*"
                  aria-label="Treść wiadomości"
                  required></TextForm>
                <div
                  className="g-recaptcha"
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
          <ContactDetails>
            <section aria-labelledby="contact-scope">
              <h2 id="contact-scope">W jakich sprawach możesz się skontaktować?</h2>
              <p>
                Oferuję pomoc psychologiczną i psychoterapię osobom dorosłym, które
                doświadczają trudności emocjonalnych, lęku, obniżonego nastroju,
                stresu lub kryzysu życiowego. Pracuję również z osobami uzależnionymi
                oraz ich bliskimi. Jeśli chcesz sprawdzić, czy zakres pomocy odpowiada
                Twojej sytuacji, poznaj <TextLink to="/oferta-terapeutyczna/">ofertę
                psychoterapii dorosłych</TextLink> lub opis <TextLink to="/psychoterapia-uzaleznien-rzeszow/">psychoterapii
                uzależnień i wsparcia bliskich</TextLink>. Pierwsze spotkanie pozwala
                wspólnie omówić potrzeby i możliwości dalszej pracy.
              </p>
            </section>
            <section aria-labelledby="contact-process">
              <h2 id="contact-process">Jak rozpoczyna się współpraca?</h2>
              <p>
                Pierwszy kontakt służy umówieniu terminu spotkania. Podczas konsultacji
                rozmawiamy o aktualnych trudnościach, potrzebach i oczekiwaniach.
                Następnie wspólnie ustalamy cel oraz zasady pomocy psychologicznej
                lub psychoterapii. Sposób pracy dopasowuję do Twojej sytuacji;
                dalsze spotkania służą realizacji uzgodnionych celów. Czas sesji
                indywidualnej: {duration}. Koszt sesji indywidualnej: {price}.
                Informacje te dotyczą psychoterapii i pomocy psychologicznej,
                zarówno w gabinecie, jak i zdalnie.
              </p>
            </section>
            <section aria-labelledby="contact-location">
              <h2 id="contact-location">Gdzie odbywają się spotkania?</h2>
              <p>
                Spotkania osobiste prowadzę w gabinecie przy ul. {address.streetAddress}, {address.postalCode}{" "}
                {address.addressLocality}. Dostępne są także sesje zdalne dla osób
                przebywających w Polsce i za granicą. Jeśli planujesz wizytę osobistą,
                zapoznaj się z informacjami o adresie i możliwościach dotarcia na
                miejsce. <TextLink to="/lokalizacja/">Sprawdź dojazd do gabinetu</TextLink>.
                Formę spotkania możesz omówić przy ustalaniu terminu pierwszej sesji.
              </p>
            </section>
          </ContactDetails>
        </ContactContent>
      </ContactContainer>
      <BgHalf />
    </>
  );
};
export const query = graphql`
  query ContactQuery {
    datoCmsOfferprice { offerpricePrice }
    datoCmsHowitlookslike { processTime }
    site {
      siteMetadata {
        businessAddress { streetAddress postalCode addressLocality }
      }
    }
    datoCmsGlobal {
      adress
      email
      phonenumber
    }
    datoCmsContact {
      title
      titleGreen
      companyDetails
      back
    }
  }
`;

export default SkontaktujSie;
