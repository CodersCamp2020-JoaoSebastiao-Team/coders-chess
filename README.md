# CodersCamp 2020 | Projekt Zespołowy | TypeScript
Aplikacja do gry w szachy.
![CodersChess](/static/ui/gra-widok-glowny.png)

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](CodersCamp.pl). 
Aplikację wykonali uczestnicy kursu przy pomocy mentora.
Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

**Mentor**: [João Kiakumbo Sebastião](https://github.com/JK-Sebastiao)

**Uczestnicy**:
- [Bartlomiej Kaminski](https://github.com/BartlomiejKaminski)(Development Manager)
- [Hubert Siewior](https://github.com/HubertSiewior) (Scrum Master)
- [Adrian Kotliński](https://github.com/Kotlinski95) (Product Owner)
- [Magdalena Socha](https://github.com/magdalena-socha) 
- [Tomasz Smolarski](https://github.com/TomaszSmolarski)

## Szachy
W ramach trzeciego projektu, zadaniem naszego zespołu było opracowanie aplikacji do gry w szachy. Jest to aplikacja webowa działająca w przeglądarce bez potrzeby instalacji. Językiem domyślnym aplikacji jest język polski. Sama aplikacja oferuje rozgrywkę dla dwóch graczy.

### Demo
Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](http://coders-chess.herokuapp.com/)

### Cel projektu
Celem projektu było dostarczenie aplikacji pozwalającej na rozgrywkę szachową między dwoma graczami. Aplikacja została stworzona bez użycia dedykowanych bibliotek (chess.js).
Aplikacja została wykonana według dostarczonych przez organizatorów CodersCamp wymagań.

### Lista funkcjonalności aplikacji

1. Ruchy wszystkich bierek: pionek, hetman, wieża, goniec, król (wykonanie ruchu, jak i pokazywanie możliwych).
2. Promowanie pionka na dowolną inną figurę (oprócz króla) na końcu planszy.
3. Roszada: https://pl.wikipedia.org/wiki/Roszada
4. Szachowanie króla: https://pl.wikipedia.org/wiki/Szach_(szachy)
5. Szach mat: https://pl.wikipedia.org/wiki/Mat_(szachy)
6. Kończenie gry przez Pat: https://www.chess.com/pl/article/view/czym-jest-pat-szachowe-terminy
7. Bicie w przelocie: https://www.chess.com/pl/article/view/bicie-w-przelocie-specjalne-ruchy-w-szachach
8. Możliwość cofania ruchów (aż do początkowego układu).


Zadaniem projektu była realizacja wymagań klienta, z którym konsultowane były wprowadzane funkcjonalności. Utworzona aplikacja jest responsywna (dostosowana do wyświetlania na Tabletach i Telefonach).


### Wykorzystywane technologie
W trakcie developmentu wykorzystaliśmy:
- JavaScript
- Typescript
- CSS, do stylowania aplikacji
- HTML, do definiowania struktury aplikacji
- LocalStorage, do zapisywania ruchów graczy

#### Menu Główne
W menu głównym należy podać imiona graczy, wybrać czas gry (w domyśle czas jest nieskończony) oraz wybrać opcję zakończenia gry w przypadku pata.

![Ekran startowy](/static/ui/ustawienia-gry.png)

## Rywalizacja
Grę zaczyna zawsze gracz z pomarańczowymi pionkami, następnie gracze wykonują ruchy na przemian. Możliwe ruchy pokazane są po naciśnięcu na dany pionek. Zbite pionki wyświelane są odpowiednio nad planszą oraz pod nią. Rozgrywka toczy się do zamatowania króla przeciwnika lub gdy przeciwnikowi skończy się czas.

![Wyświetlanie zbitych pionków](/static/ui/zbite-pionki.png)

#### W projekcie każdy z uczestników zaprezentował praktyczną znajomość poniższych zagadnień związanych z TypeScript:
- typy podstawowe
- definiowanie własnych typów
- składanie typów
- typy / klasy / interfejsy
- implementacja / dziedziczenie / kompozycja / implementacja interfejsu
- modyfikatory dostępu
- typy generyczne


#### Uruchomienie projektu
Aby uruchomić aplikację na lokalnej maszynie, należy wykonać następujące kroki:
1. Zainstalować zależności za pomocą komendy: `npm install`
2. Wystartować serwer developerski `npm run dev`

Kod produkcyjny aplikacji umieszczamy w katalogu `src`.

##### Dodatkowe zadania (wykraczające poza zakres kursu):
1. Komentarze do gry w formie tekstu lub notacji.
2. Możliwość wyboru nieskończonego czasu gry.
3. Odliczanie czasu dla każdej ze stron.
4. Kończenie gry przez limit czasowy - gracz, któremu skończył się czas przegrywa. Nie rozpatrujemy przypadku remisu.
5. Wyświetlanie zbitych pionków.
6. Wyświetlanie przewagi gracza.

![Wyświetlanie przebiegu gry oraz przewagi gracza](/static/ui/przewaga-gracza.png)

### Organizacja pracy
Praca zespołu była organizowana przy użyciu narzędzi dostarczanych przez GitHub. 
Zadania opisywaliśmy za pomocą GitHub Issues i dzieliśmy czas ich wykonania na tygodnie za pomocą GitHub Projects.
Każde z zadań było estymowane przez mentora, dzięki czemu staraliśmy się, aby liczba punktów przypadająca w danym tygodniu na każdą osobę w zespole była podobna.
Jeśli chcesz zaproponować, jakąś zmianę w aplikacji, utwórz nowy Issue, wzorując się na poprzednich.