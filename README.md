# 📍 Restaurants Compas (Cafes Map)

**Restaurants Compas** to nowoczesna aplikacja webowa typu SPA (Single Page Application) służąca do interaktywnego wyszukiwania kawiarni i restauracji. Projekt został zbudowany w oparciu o framework **Next.js** oraz potężne możliwości **Google Maps API**, oferując użytkownikom precyzyjne narzędzia do eksploracji lokalnej gastronomii.



---

## 🚀 Główne Funkcjonalności

* **Inteligentna Mapa:** Wykorzystanie `Google Maps JavaScript API` z obsługą **Cloud Map Styling** (Map ID) dla unikalnego i czytelnego wyglądu.
* **Geolokalizacja i Wyszukiwanie:** * Automatyczne wykrywanie pozycji użytkownika przy starcie aplikacji.
    * Wyszukiwarka miast oparta na **Google Geocoding API** – wpisz miasto, a mapa natychmiast Cię tam przeniesie.
* **Dynamiczne Filtrowanie:** * Wybór kategorii (kuchnia indyjska, włoska, japońska itp.) z natychmiastowym odświeżaniem wyników.
    * Regulacja promienia wyszukiwania (suwak od 500m do 5000m).
* **Zaawansowany UX:**
    * **Skeleton Loading:** Animowane placeholdery wyświetlane podczas pobierania danych.
    * **Custom Overlays:** Niestandardowe okna informacyjne nad markerami zamiast standardowych InfoWindows.
    * **Interaktywna Karuzela:** Przewijalna lista biznesów zsynchronizowana z markerami na mapie.

---

## 🛠️ Stos Technologiczny

### Frontend
* **React 18** & **Next.js 13+** (App Router)
* **Tailwind CSS** (Responsywny design & animacje)
* **React Context API** (Zarządzanie stanem lokalizacji i wybranych obiektów)

### Backend & API
* **Next.js API Routes:** Bezpieczny serwer Proxy obsługujący zapytania do Google API (ochrona kluczy przed dostępem publicznym).
* **Axios:** Komunikacja asynchroniczna z backendem.



---

## 📂 Architektura Projektu

Projekt podzielony jest na logiczne moduły, co ułatwia jego rozwój:
* `/app/api/google-place/route.js` – Logika serwerowa komunikująca się z Google Places API.
* `/components/Home/` – Kluczowe komponenty interfejsu (Map, List, Filters).
* `/context/` – Globalne stany aplikacji (Lokalizacja użytkownika, wybrany biznes).
* `/Shared/` – Konfiguracja API oraz statyczne dane kategorii.

---

## ⚙️ Instalacja i Konfiguracja

1. **Sklonuj repozytorium:**
   ```bash
   git clone [https://github.com/GronskaDaria/cafes-map.git](https://github.com/GronskaDaria/cafes-map.git)
   cd cafes-map
   npm install
   npm run dev

   ## 📝 Planowane Rozszerzenia (TODO)

W ramach dalszego rozwoju projektu planowane jest wprowadzenie następujących funkcjonalności:

### 🛠 Poprawki i Optymalizacja UI/UX
- [ ] **Naprawa widoczności listy:** Rozwiązanie problemu znikania komponentu `BusinessList` po wywołaniu funkcji wyszukiwania w `HeaderNavBar`.
- [ ] **Przycisk "Mój widok":** Dodanie przycisku umożliwiającego natychmiastowy powrót (recenter) mapy do pierwotnie wybranej lub aktualnej lokalizacji użytkownika.

### 🚀 Nowe Funkcjonalności
- [ ] **Dynamiczne odświeżanie mapy:** Implementacja funkcji "Szukaj w tym obszarze" – automatyczne dociąganie i wyświetlanie nowych miejsc na bieżąco podczas przesuwania (scrollowania) mapy przez użytkownika.
- [ ] **System Autoryzacji:** Dodanie modułu logowania użytkowników (np. przy użyciu NextAuth.js lub Firebase).
- [ ] **Ulubione Miejsca:** Możliwość dodawania kawiarni do listy ulubionych i zapisywania ich w bazie danych (MongoDB) przypisanej do konta użytkownika.
