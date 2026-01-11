Opis Projektu
Projekt zakłada stworzenie zaawansowanej aplikacji webowej „Restaurants Compas”, umożliwiającej dynamiczne wyświetlanie lokalizacji kawiarni oraz restauracji na interaktywnej mapie. Aplikacja pozwala użytkownikowi na precyzyjne lokalizowanie punktów gastronomicznych w oparciu o jego aktualne położenie lub dowolne wyszukane miasto. System oferuje intuicyjny interfejs do filtrowania wyników pod kątem rodzaju kuchni oraz odległości, zapewniając dostęp do kluczowych danych, takich jak oceny, adresy i zdjęcia lokali.

Aplikacja została zbudowana w oparciu o nowoczesny stos technologiczny, gwarantujący szybkość działania (Server-Side Rendering) oraz bezpieczeństwo kluczy API.

Wykorzystywane technologie:

a. Frontend:

React.js (Hooki, Context API)

Next.js 13+ (App Router)

Tailwind CSS (Stylizacja i responsywność)

b. Backend:

Node.js

Next.js API Routes (jako serwer proxy dla zapytań Google)

c. Integracja Map i Danych:

Google Maps JavaScript API

Google Places API (źródło danych o lokalach)

Google Geocoding API (zamiana nazw miast na współrzędne)

d. Dodatkowe narzędzia:

GitHub (kontrola wersji)

Axios (komunikacja asynchroniczna)

Funkcjonalność
1. Interaktywna mapa
Użytkownik ma dostęp do mapy zaimplementowanej przy użyciu @react-google-maps/api.

Mapa obsługuje Cloud Map Styling, co pozwala na dostosowanie wyglądu (Map ID) do estetyki aplikacji.

Interakcja obejmuje płynne przybliżanie (zoom), przesuwanie oraz centrowanie widoku na wybranym obiekcie.

2. Wyszukiwanie i Geokodowanie
Wyszukiwanie kawiarni: Możliwość wpisania nazwy miasta w nagłówku. Aplikacja wykorzystuje Geocoding API, aby przemieścić punkt widzenia użytkownika w dowolne miejsce na świecie.

Lokalizacja użytkownika: Automatyczne pobieranie współrzędnych za pomocą systemowego API geolokalizacji przeglądarki przy starcie aplikacji.

3. Znakowanie i Overlay punktów
Każdy lokal jest reprezentowany przez Custom Marker (minimalistyczna ikona kółka).

OverlayView: Kliknięcie w marker nie otwiera standardowego okna, lecz niestandardowy komponent Reactowy (BusinessItem), wyświetlający:

Zdjęcie lokalu (pobrane przez API Google).

Nazwę i sformatowany adres.

Ocenę (Rating) z ikoną gwiazdki.

Zastosowano logikę SelectedBusinessContext, która synchronizuje wybór między mapą a listą przewijalną.

4. Dynamiczne Filtrowanie
Kategorie: Wybór typu kuchni (Indian, Mexican, Italian itp.) za pomocą kafelków z ikonami.

Zasięg (Radius): Suwak umożliwiający określenie promienia poszukiwań w metrach (od 500m do 5000m). Każda zmiana suwaka automatycznie odświeża wyniki na mapie.

5. Responsywność i UX
Responsive Design: Zastosowanie Tailwind Grid (kolumny 1/4 i 3/4 na desktopie, układ pionowy na mobile).

Skeleton Loading: W czasie oczekiwania na dane z serwera, użytkownik widzi animowane placeholdery, co poprawia odbiór wydajności aplikacji.

Płynna Karuzela: Dolna lista wyników wyposażona w mechanizm scroll-smooth i sterowanie przyciskami (React Refs).

6. Integracja z danymi (Backend Proxy)
Aplikacja korzysta z bezpiecznego routingu backendowego (/api/google-place). Dzięki temu zapytania do zewnętrznych serwerów Google odbywają się po stronie serwera, co chroni prywatne klucze API przed wyciekiem do przeglądarki.
