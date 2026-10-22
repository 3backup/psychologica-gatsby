# Kontrola środowiska i wdrożeń

Preferencja użytkownika: nie używaj znaku U+2014 w odpowiedziach ani przygotowywanych treściach. Zastępuj go kropką, przecinkiem, dwukropkiem lub nawiasami.

Obowiązują globalne instrukcje użytkownika dotyczące kontroli wersji, produkcji i baz.

- Potwierdź repozytorium i źródło produkcji na podstawie konfiguracji oraz metadanych wdrożeń, nigdy z samej nazwy gałęzi. Zidentyfikowane repozytorium: `3backup/psychologica-gatsby`; domena: `https://www.psychologica.pl/`. Przed każdym zadaniem ponownie sprawdź te informacje.
- Sprawdź staged, unstaged i untracked oraz SHA lokalnego HEAD. Wykonaj fetch potwierdzonego repozytorium i porównaj SHA oraz ahead/behind z potwierdzonym refem produkcji. Nie wykonuj automatycznie pull, merge, rebase, reset, clean ani stash w celu ukrycia lub usunięcia pracy użytkownika.
- Produkcyjna treść jest odczytywana z DatoCMS: projekt Psychologica, ID `43634`, środowisko `main`. Samo oznaczenie środowiska nie jest dowodem: porównaj faktyczny endpoint, ID projektu, środowisko, konfigurację runtime i źródło danych z zatwierdzoną konfiguracją wydania. Nie ujawniaj tokenów.
- Nie ma lokalnej aplikacyjnej bazy SQL ani historii migracji. Cache Gatsby jest pochodnym cache odczytów, nie kopią produkcyjnej bazy. Zweryfikuj to ponownie; zgłaszaj brak lokalnej bazy i brak dostępu. Porównuj schemat, wymagane obiekty, wersjonowane dane referencyjne i konfigurację z produkcją i GitHub. Oddziel oczekiwane zmiany wydania od driftu. Nie zakładaj aktualności danych biznesowych na podstawie kodu.
- Nie synchronizuj danych biznesowych, nie seeduj i nie zastępuj baz. Przy niepewności blokuj zapisy, importy, migracje, synchronizacje oraz uruchomienia mogące pośrednio zmienić bazę; można kontynuować odczyty i lokalne przygotowanie zmian. Kontrola środowiska nie jest zgodą na zapis.
- DROP, TRUNCATE, reset, usuwanie/nadpisywanie danych, odtwarzanie backupu i destrukcyjne migracje wymagają osobnej wyraźnej zgody na konkretną bazę, zakres i skutki oraz planu odzyskania.
- Wdrożenie obejmuje aplikację i wszystkie wymagane zmiany bazy. Przed publikacją ustal commit wydania, wymagane migracje/obiekty/uprawnienia/indeksy/dane/konfigurację, kolejność i plan odzyskania. Dla zmian wyłącznie statycznej strony odnotuj po sprawdzeniu: „Baza zweryfikowana; brak wymaganych zmian”.
- Build obowiązkowo porównuje rzeczywistą tożsamość, schemat i konfigurację DatoCMS z `deployment/cms-baseline.json` przed i po kompilacji. Nie aktualizuj baseline tylko w celu obejścia błędu. Zmiana baseline wymaga wyjaśnienia różnic i zgodności z zatwierdzonym wydaniem.
- Publikację wykonuj zgodnie z `deployment/README.md`. Po publikacji obowiązkowo uruchom `node scripts/verify-production.cjs <pełny-SHA>`. Skrypt musi zakończyć się powodzeniem; zielony pipeline ani sam push nie wystarczają.
- Raportuj osobno GITHUB / APLIKACJA / BAZA: ponownie odczytany zdalny ref, rzeczywiście wdrożony SHA i bezpieczny test aplikacji, stan migracji/obiektów lub udokumentowany brak zmian bazy. Choćby jeden niepotwierdzony wynik oznacza NIEKOMPLETNE/ZABLOKOWANE. Nie naprawiaj tego automatycznym destrukcyjnym rollbackiem.
- Przy delegowaniu przekaż wymagania i dowody oraz niezależnie zweryfikuj wyniki agenta. Same instrukcje nie gwarantują przestrzegania reguł przez wszystkie narzędzia.
