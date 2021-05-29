import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Container from "../components/styles/Container";
import Footer from "../components/Footer";
const ContainerNew = styled(Container)`
  padding: 6rem 0;
  max-width: 800px;
  margin: 0 auto;
  font-family: Manrope;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
  color: #3e7672;
  li {
    font-weight: 300;
  }
`;
const HeaderPrivacePolicy = styled.h1`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 125%;
  /* identical to box height, or 60px */

  color: #1f1f1f;
`;
const politykaPrywatnosci = ({}) => {
  return (
    <Layout
      pageTitle="Polityka Prywatności  - PSYCHOLOGICA - Psychoterapia i psychoedukacja"
      pageDescription="Polityka prywatności dla PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba">
      <ContainerNew>
        <HeaderPrivacePolicy>
          Polityka prywatności i Cookies dla Psychologica.pl
        </HeaderPrivacePolicy>
        <ol>
          <li>Wprowadzenie</li>
          <ol>
            <li>
              Prywatność odwiedzających naszą stronę internetową jest dla nas
              bardzo ważna i dokładamy wszelkich starań, aby ją chronić.
              Niniejsza polityka wyjaśnia, co robimy z Twoimi danymi osobowymi.
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
              informacje o komputerze, w tym adres IP, lokalizacja geograficzna,
              typ i wersja przeglądarki oraz system operacyjny;
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
              informacje wprowadzane podczas tworzenia profilu w naszej witrynie
              — na przykład imię i nazwisko, zdjęcia profilowe, płeć, data
              urodzin, status związku, zainteresowania i hobby, dane edukacyjne
              i dane dotyczące zatrudnienia;
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
              strony internetowej, w tym imię i nazwisko, adres, numer telefonu,
              adres e-mail i dane karty kredytowej;
            </li>
            <li>
              informacje publikowane na naszej stronie internetowej z zamiarem
              opublikowania ich w Internecie, w tym nazwa użytkownika, zdjęcia
              profilowe i treść umieszczanych postów;
            </li>
            <li>
              informacje zawarte we wszelkiej korespondencji przesyłanej do nas
              e-mailem lub za pośrednictwem naszej strony internetowej, w tym
              treści komunikacyjne i metadane;
            </li>
            <li>wszelkie inne dane osobowe, które nam przesyłasz.</li>
          </ol>
          <p>
            Zanim ujawnisz nam dane osobowe innej osoby, musisz uzyskać zgodę
            tej osoby na ujawnienie i przetwarzanie tych danych osobowych
            zgodnie z niniejszymi zasadami
          </p>
          <li>Korzystanie z Twoich danych osobowych</li>
          <p>
            Dane osobowe przesłane do nas za pośrednictwem naszej strony
            internetowej będą wykorzystywane do celów określonych w niniejszej
            polityce lub na odpowiednich stronach witryny. Możemy wykorzystywać
            Twoje dane osobowe do celu:
          </p>
          <ol>
            <li>administrowania naszą stroną internetową i biznesem;</li>
            <li>personalizowania naszej strony internetowej dla Ciebie;</li>
            <li>
              umożliwienia korzystania z usług dostępnych na naszej stronie
              internetowej;
            </li>
            <li>
              wysyłania towarów zakupionych za pośrednictwem naszej strony
              internetowej;
            </li>
            <li>
              świadczenia usług zakupionych za pośrednictwem naszej strony
              internetowej;
            </li>
            <li>
              wysyłania do ciebie wyciągów, faktur i przypomnień o płatnościach
              oraz odbioru płatności od Ciebie;
            </li>
            <li>przesyłania niemarketingowej komunikacji handlowej;</li>
            <li>wysyłania powiadomień e-mail, o które prosiłeś;</li>
            <li>
              wysyłania naszego newslettera e-mail, jeśli o to poprosiłeś
              (możesz nas w każdej chwili poinformować, jeśli nie chcesz już
              otrzymywać newslettera);
            </li>
            <li>
              przesyłania informacji marketingowych dotyczących naszej
              działalności lub aktywności starannie wybranych stron trzecich,
              które naszym zdaniem mogą Cię zainteresować, pocztą lub, jeśli
              wyraziłeś na to zgodę, pocztą elektroniczną lub podobną
              technologią (możesz nas o tym poinformować w dowolnym momencie,
              jeśli nie chcesz już otrzymywać komunikatów marketingowych);
            </li>
            <li>
              dostarczania stronom trzecim informacji statystycznych o naszych
              użytkownikach (ale te osoby trzecie nie będą w stanie
              zidentyfikować żadnego konkretnego użytkownika na podstawie tych
              informacji);
            </li>
            <li>
              zajmowania się zapytaniami i skargami składanymi przez Ciebie lub
              dotyczącymi Ciebie w związku z naszą witryną;
            </li>
            <li>
              zapewnienia bezpieczeństwa naszej strony internetowej i
              zapobieganie oszustwom;
            </li>
            <li>
              weryfikacji zgodności z warunkami korzystania z naszej strony
              internetowej (w tym monitorowanie prywatnych wiadomości wysyłanych
              za pośrednictwem naszej prywatnej usługi przesyłania wiadomości);
              i
            </li>
            <li>innych zastosowań.</li>
          </ol>
          <p>
            Jeśli prześlesz dane osobowe do publikacji w naszej witrynie,
            opublikujemy je i wykorzystamy w inny sposób zgodnie z udzieloną nam
            licencją.
            <br /> <br />
            Twoje ustawienia prywatności mogą być wykorzystane do ograniczenia
            publikacji Twoich informacji na naszej stronie internetowej i mogą
            być dostosowane za pomocą kontroli prywatności na stronie.
            <br /> <br />
            Nie będziemy bez Twojej wyraźnej zgody przekazywać danych osobowych
            stronom trzecim, lub jakimkolwiek innym związanym z nimi stronom
            trzecim, w celach marketingu bezpośredniego.
          </p>
          <li>Ujawnianie danych osobowych</li>
          <p>
            Możemy ujawniać dane osobowe użytkownika wszelkim naszym
            pracownikom, członkom kadry kierowniczej, przedstawicielom,
            dostawcom lub podwykonawcom, o ile jest to niezbędne do celów
            określonych w niniejszych „Zasadach ochrony prywatności”. <br />{" "}
            <br />
            Możemy ujawniać dane osobowe wszelkim członkom naszej grupy spółek
            (tzn. spółkom zależnym, głównej spółce holdingowej i jej spółkom
            zależnym), o ile jest to niezbędne do celów określonych w
            niniejszych „Zasadach ochrony prywatności”. <br /> <br />
            Możemy ujawniać Twoje dane osobowe:
          </p>
          <ol>
            <li>w zakresie, w jakim jest to wymagane przepisami prawa;</li>
            <li>
              w związku z trwającymi lub potencjalnymi postępowaniami prawnymi;
            </li>
            <>
              w celu ustanowienia, wyegzekwowania lub obrony naszych praw
              (wliczając w to udostępnienie informacji innym podmiotom w celu
              przeciwdziałania oszustwom);
            </>
            <li>
              nabywcy (lub potencjalnemu nabywcy) jakiejkolwiek działalności lub
              aktywów, które sprzedajemy (lub rozważamy); i
            </li>
            <li>
              wszelkim osobom, które wedle naszej zasadnej opinii mogą wystąpić
              do sądu lub innego właściwego organu o ujawnienie takich danych
              osobowych, jeśli wedle zasadnej rozsądnej opinii, istnieje duże
              prawdopodobieństwo, że taki sąd lub organ nakaże ujawnienie takich
              danych osobowych
            </li>
          </ol>
          <p>
            Z wyjątkiem postanowień zawartych w niniejszych „Zasadach ochrony
            prywatności” nie będziemy udostępniać osobom trzecim informacji
            dotyczących użytkownika.
          </p>
          <li>Międzynarodowe transfery danych</li>
          <ol>
            <li>
              Informacje, które gromadzimy mogą być przechowywane i przetwarzane
              w każdym z krajów, w którym prowadzimy działalność i mogą być
              przesyłane pomiędzy tymi krajami w celu umożliwienia wykorzystania
              informacji zgodnie z niniejszymi „Zasadami ochrony prywatności”.
            </li>
            <li>
              Informacje, które zbieramy, mogą być przekazywane do następujących
              krajów, które nie mają przepisów o ochronie danych równoważnych z
              obowiązującymi w Europejskim Obszarze Gospodarczym: Stanów
              Zjednoczonych Ameryki, Rosji, Japonii, Chin i Indii.
            </li>
            <li>
              Dane osobowe, które publikujesz na naszej stronie internetowej lub
              przesyłasz do publikacji na naszej stronie internetowej, mogą być
              dostępne za pośrednictwem Internetu na całym świecie. Nie możemy
              zapobiec wykorzystywaniu lub niewłaściwemu wykorzystaniu takich
              informacji przez inne osoby.
            </li>
            <li>
              Wyraźnie zgadzasz się na przekazywanie danych osobowych opisanych
              w tej sekcji F.
            </li>
          </ol>
          <li>Zachowywanie danych osobowych</li>
          <ol>
            <li>
              W Niniejszej Sekcji G określiliśmy nasze zasady i procedury
              dotyczące zatrzymywania danych, które mają na celu zapewnienie
              przestrzegania naszych zobowiązań prawnych w zakresie zachowywania
              i usuwania danych osobowych.
            </li>
            <li>
              Dane osobowe, które przetwarzamy w dowolnym celu lub celach, nie
              będą przechowywane dłużej niż jest to konieczne do tego celu lub
              tych celów.
            </li>
            <li>
              Bez uszczerbku dla artykułu G-2 zazwyczaj usuwamy dane osobowe
              należące do kategorii określonych poniżej w dniu/godzinie
              określonej poniżej:typ danych osobowych zostanie usunięty 7 dni od
              ostatniej wizyty;
            </li>
            <li>
              Niezależnie od innych postanowień niniejszej sekcji G zachowamy
              dokumenty (w tym dokumenty elektroniczne) zawierające dane
              osobowe:
              <ul>
                <li>w zakresie, w jakim jest to wymagane przepisami prawa;</li>
                <li>
                  jeśli uważamy, że dokumenty mogą mieć znaczenie dla wszelkich
                  toczących się lub przyszłych postępowań sądowych;
                </li>
                <li>
                  w celu ustanowienia, wyegzekwowania lub obrony naszych praw
                  (wliczając w to udostępnienie informacji innym podmiotom w
                  celu przeciwdziałania oszustwom).
                </li>
              </ul>
            </li>
          </ol>
          <li>H. Bezpieczeństwo danych osobowych</li>
          <ol>
            <li>
              Podejmiemy zasadne techniczne i organizacyjne środki ostrożności w
              celu przeciwdziałania utracie, nadużyciu lub zmianie danych
              osobowych użytkownika.
            </li>
            <li>
              Będziemy przechowywać wszystkie dane osobowe, które podasz na
              naszych bezpiecznych serwerach (chronionych hasłem i zaporą).
            </li>
            <li>
              Wszystkie elektroniczne transakcje finansowe zawierane za
              pośrednictwem naszej strony internetowej będą chronione
              technologią szyfrowania.
            </li>
            <li>
              Użytkownik przyjmuje do wiadomości, że transmisja informacji przez
              Internet jest potencjalnie niebezpieczna i bezpieczeństwo
              przesłanych w ten sposób danych nie jest gwarantowane.
            </li>
            <li>
              Jesteś odpowiedzialny za zachowanie poufności hasła używanego do
              uzyskania dostępu do naszej strony internetowej; nie poprosimy Cię
              o podanie hasła (z wyjątkiem sytuacji, gdy logujesz się na naszej
              stronie internetowej).
            </li>
            <li></li>
          </ol>
          <li>Nowelizacja</li>
          <p>
            Niniejsze zasady mogą być okresowo aktualizowane poprzez
            zamieszczenie w naszej witrynie ich nowej wersji. Należy od czasu do
            czasu sprawdzać tę stronę, aby upewnić się, że rozumiesz wszelkie
            zmiany w tych zasadach. Możemy powiadomić Cię o zmianach w
            niniejszej polityce za pośrednictwem poczty elektronicznej lub
            prywatnego systemu przesyłania wiadomości na naszej stronie
            internetowej.
          </p>
          <li> Twoje prawa</li>
          <p>
            Możemy na Twoje żądanie ukrywać dane osobowe, w zakresie dozwolonym
            przez prawo. Możesz w dowolnym momencie poinstruować nas, aby nie
            przetwarzać danych osobowych w celach marketingowych. W praktyce
            zazwyczaj albo z góry wyraźnie wyrażasz zgodę na wykorzystanie przez
            nas Twoich danych osobowych w celach marketingowych, albo zapewnimy
            Ci możliwość rezygnacji z udostępniania Twoich danych osobowych w
            celach marketingowych.
          </p>
          <li>Strony Internetowe osób trzecich</li>
          <p>
            Nasza strona internetowa zawiera hiperłącza do stron internetowych
            osób trzecich oraz szczegółowe informacje na ich temat. Nie mamy
            kontroli i nie ponosimy odpowiedzialności za politykę prywatności i
            praktyki osób trzecich.
          </p>
          <li>Aktualizacja informacji</li>
          <p>
            Prosimy o informację w przypadku konieczności skorygowania lub
            aktualizowania danych osobowych, w których posiadaniu jesteśmy.
          </p>
          <li>Ciasteczka</li>
          <p>
            Nasza strona internetowa korzysta z plików cookie. Plik cookie to
            plik zawierający identyfikator (ciąg liter i cyfr), który jest
            wysyłany przez serwer internetowy do przeglądarki internetowej i
            przechowywany przez przeglądarkę. Dane identyfikacyjne są ponownie
            przesyłane na serwer za każdym razem, gdy przeglądarka wyśle żądanie
            otwarcia strony znajdującej się na serwerze. Pliki cookie mogą być
            „trwałymi” lub „sesyjnymi” plikami cookie: trwałe pliki cookie będą
            przechowywane przez przeglądarkę internetową i pozostaną ważne do
            ustalonej daty wygaśnięcia, chyba że użytkownik usunie je przed datą
            wygaśnięcia; sesyjny plik cookie wygasa z końcem sesji użytkownika,
            gdy przeglądarka internetowa jest zamykana. Pliki cookie zazwyczaj
            nie zawierają żadnych informacji identyfikujących użytkownika, ale
            dane osobowe, które przechowujemy na Twój temat, mogą być powiązane
            z informacjami przechowywanymi w plikach cookie i uzyskiwanymi z
            nich. Używamy tylko ciasteczek zarówno sesyjnych, jak i trwałych
            ciasteczek na naszej stronie.
          </p>
          <ol>
            <li>
              Nazwy plików cookie, których używamy na naszej stronie
              internetowej, oraz cele, w których są wykorzystywane, są określone
              poniżej:
              <ul>
                <li>
                  używamy Google Analytics i Adwords na naszej stronie
                  internetowej, aby rozpoznać komputer, gdy użytkownik odwiedza
                  witrynę / śledzi użytkowników podczas przeglądania witryny /
                  poprawić użyteczność strony internetowej / analizować
                  korzystanie ze strony internetowej / administrować stroną
                  internetową / zarządzać witryną / zapobiegać oszustwom i
                  poprawić bezpieczeństwo strony internetowej / personalizować
                  stronę internetową dla każdego użytkownika .
                </li>
              </ul>
            </li>
            <li>
              Większość przeglądarek pozwala odmówić przyjęcia plików cookie —
              na przykład:
              <ul>
                <li>
                  w przeglądarce Internet Explorer (wersja 10) można blokować
                  pliki cookie, korzystając z dostępnych ustawień zastępowania
                  obsługi plików cookie, klikając „Narzędzia”, „Opcje
                  internetowe”, „Prywatność”, a następnie „Zaawansowane”;
                </li>
                <li>
                  w przeglądarce Firefox (wersja 24) możesz zablokować wszystkie
                  pliki cookie, klikając „Narzędzia”, „Opcje”, „Prywatność”,
                  wybierając „Użyj ustawień niestandardowych dla historii” z
                  menu rozwijanego i odznaczając „Akceptuj ciasteczka z witryn”;
                  i
                </li>
                <li>
                  w Chrome (wersja 29) możesz zablokować wszystkie pliki cookie,
                  otwierając menu „Dostosuj i kontroluj”, klikając „Ustawienia”,
                  „Pokaż ustawienia zaawansowane” i „Ustawienia treści”, a
                  następnie wybierając „Blokuj witrynom ustawianie dowolnych
                  danych” pod nagłówkiem „Pliki cookie”.
                </li>
              </ul>
            </li>
            <p>
              Zablokowanie wszystkich plików cookie będzie miało negatywny wpływ
              na możliwość korzystania z wielu stron internetowych. Jeśli
              zablokujesz pliki cookie, nie będziesz mógł korzystać z wszystkich
              funkcji naszej strony.
            </p>
            <li>
              Możesz usunąć pliki cookie już zapisane na komputerze — na
              przykład:
              <ul>
                <li>
                  w przeglądarce Internet Explorer (wersja 10) należy ręcznie
                  usunąć pliki cookie (instrukcje można znaleźć na stronie
                  http://support.microsoft.com/kb/278835 );
                </li>
                <li>
                  w przeglądarce Firefox (wersja 24) możesz usunąć pliki cookie,
                  klikając „Narzędzia”, „Opcje” i „Prywatność”, a następnie
                  wybierając „Użyj ustawień niestandardowych dla historii”,
                  klikając „Pokaż pliki cookie”, a następnie klikając „Usuń
                  wszystkie pliki cookie”; i
                </li>
                <li>
                  w przeglądarce Chrome (wersja 29) można usunąć wszystkie pliki
                  cookie, otwierając menu „Dostosuj i kontroluj”, klikając
                  „Ustawienia”, „Pokaż ustawienia zaawansowane” i „Wyczyść dane
                  przeglądarki”, a następnie wybierając „Usuń pliki cookie i
                  dane innych stron i wtyczek” przed kliknięciem „Wyczyść dane
                  przeglądania”.
                </li>
              </ul>
            </li>
            <li>
              Usunięcie plików cookie będzie miało negatywny wpływ na
              użyteczność wielu stron internetowych.
            </li>
          </ol>
        </ol>
      </ContainerNew>
      <Footer />
    </Layout>
  );
};

export default politykaPrywatnosci;
