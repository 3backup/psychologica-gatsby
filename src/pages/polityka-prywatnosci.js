import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

// markup
const politykaPrywatnosci = ({}) => {
  return (
    <>
      <Layout
        pageTitle="Polityka Prywatności  - PSYCHOLOGICA - Psychoterapia i psychoedukacja"
        pageDescription="Polityka prywatności dla PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba">
        <h3>
          <ol>
            <li>Wprowadzenie</li>
            <ol>
              <li>
                Prywatność odwiedzających naszą stronę internetową jest dla nas
                bardzo ważna i dokładamy wszelkich starań, aby ją chronić.
                Niniejsza polityka wyjaśnia, co robimy z Twoimi danymi
                osobowymi.
              </li>
              <li>
                Zgoda na korzystanie z plików cookie zgodnie z warunkami
                niniejszej polityki podczas pierwszej wizyty na naszej stronie
                pozwala nam na korzystanie z plików cookie przy każdej kolejnej
                wizycie na naszej stronie.
              </li>
            </ol>
            <li>Źródło</li>
            <p>
              Ten dokument został utworzony przy użyciu szablonu firmy SEQ Legal
              (seqlegal.com) i zmodyfikowany dla celów Psychologica.pl{" "}
            </p>
            <li>Zbieranie danych osobowych</li>
            <p>
              Następujące rodzaje danych osobowych mogą być gromadzone,
              przechowywane i wykorzystywane:
            </p>
            <ol>
              <li>
                informacje o komputerze, w tym adres IP, lokalizacja
                geograficzna, typ i wersja przeglądarki oraz system operacyjny;
              </li>
              <li>
                informacje o Twoich wizytach i korzystaniu z tej witryny, w tym
                źródło odesłań, długość wizyty, wyświetlenia stron i ścieżki
                nawigacji w witrynie;
              </li>
              <li>
                informacje, takie jak adres e-mail, które podajesz podczas
                rejestracji w naszej witrynie internetowej;
              </li>
              <li>
                informacje wprowadzane podczas tworzenia profilu w naszej
                witrynie — na przykład imię i nazwisko, zdjęcia profilowe, płeć,
                data urodzin, status związku, zainteresowania i hobby, dane
                edukacyjne i dane dotyczące zatrudnienia;
              </li>
              <li>
                informacje, takie jak imię i nazwisko oraz adres e-mail, które
                podajesz w celu skonfigurowania subskrypcji naszych e-maili lub
                biuletynów;
              </li>
              <li>
                informacje wprowadzane podczas korzystania z usług na naszej
                stronie internetowej;
              </li>
              <li>
                informacje, które są generowane podczas korzystania z naszej
                strony internetowej, w tym kiedy, jak często i w jakich
                okolicznościach z niej korzystasz;
              </li>
              <li>
                informacje dotyczące wszystkiego, co kupujesz, usług, z których
                korzystasz lub transakcji dokonywanych za pośrednictwem naszej
                strony internetowej, w tym imię i nazwisko, adres, numer
                telefonu, adres e-mail i dane karty kredytowej;
              </li>
              <li>
                informacje publikowane na naszej stronie internetowej z zamiarem
                opublikowania ich w Internecie, w tym nazwa użytkownika, zdjęcia
                profilowe i treść umieszczanych postów;
              </li>
              <li>
                informacje zawarte we wszelkiej korespondencji przesyłanej do
                nas e-mailem lub za pośrednictwem naszej strony internetowej, w
                tym treści komunikacyjne i metadane;
              </li>
              <li>wszelkie inne dane osobowe, które nam przesyłasz.</li>
            </ol>
            <p>
              Zanim ujawnisz nam dane osobowe innej osoby, musisz uzyskać zgodę
              tej osoby na ujawnienie i przetwarzanie tych danych osobowych
              zgodnie z niniejszymi zasadami
            </p>
            <li>Korzystanie z Twoich danych osobowych</li>
          </ol>
        </h3>
        <Footer />
      </Layout>
    </>
  );
};

export default politykaPrywatnosci;
