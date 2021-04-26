// const categories = ['szkolenie', 'sprzet', 'oprogramowanie', 'usluga'];

const products = [
    //szkolenia
    {
        id: 'T0001',
        title: 'Podstawy edukacji zdalnej w przedszkolu',
        desc:
            'Szkolenie z ćwiczeniami oraz aplkacjami edukacyjnymi Zapoznanie z pakietem M365, omówienie podstaw Teams, wykorzystanie białej tablicy Whiteboard, bezpieczna komunikacja e-mail(wewnętrzna i zewnętrzna) z wykorzystaniem Outlook, prezentacja możliwości aplikacji firm trzecich',
        time: 6,
        category: 'szkolenie',
        price: 1390,
        image: '4.png', // do uzupelnienia,
    },
    {
        id: 'T0002',
        title: 'Edukacja zdalna w przedszkolu',
        desc:
            'szkolenie rozszerzone z ćwiczeniami z komunikacji i produktywności Zapoznanie z pakietem M365, szczegółowe omówienie Teams, Whiteboard, Notes Zajęć w OneNote, Forms, PowerPoint i Sway',
        time: 6,
        category: 'szkolenie',
        price: 1490,
        image: '3.png', // do uzupelnienia,
    },
    {
        id: 'T0003',
        title: 'Edukacja zdalna w przedszkolu',
        desc:
            'szkolenie zaawansowane z elementami cyberbezpieczeństwa Zapoznanie z pakietem M365, szczegółowe omówienie Teams, Whiteboard, Notes Zajęć w OneNote, Forms, PowerPoint i Sway rozszerzone z ćwiczeniami z komunikacji i produktywności Zapoznanie z pakietem M365, szczegółowe omówienie Teams, Whiteboard, Notes Zajęć w OneNote, Forms, PowerPoint i Sway',
        time: 6,
        category: 'szkolenie',
        price: 1590,
        image: '1.png', // do uzupelnienia,
    },
    {
        id: 'T0004',
        title: 'Podstawy edukacji zdalnej w szkole z elementami cyberbezpieczeństwa',
        desc:
            'Zapoznanie z pakietem M365, szczegółowe omówienie Teams, Whiteboard, Notes Zajęć w OneNote, Forms, PowerPoint i Sway',
        time: 6,
        category: 'szkolenie',
        price: 1790,
        image: '2.png', // do uzupelnienia,
    },
    {
        id: 'T0005',
        title: 'Edukacja zdalna w szkole',
        desc:
            'szkolenie rozszerzone z wykorzystaniem aplikacji firm trzecich Produktywność w M365, możliwości komunikacyjne Teams, współpraca nad zadaniami i programami zajęć w Planner i ToDo, wykorzystanie Kalendarza oraz Shifts w organizacji pracy, MyAnalytics, obieg dokumentów w OneDrive i Sharepoint, prezentacje PowerPoint, praca z portalem społecznościowym szkoły Yammer',
        time: 6,
        category: 'szkolenie',
        price: 1890,
        image: '3.png', // do uzupelnienia,
    },
    {
        id: 'T0006',
        title: 'Edukacja zdalna w szkole',
        desc:
            'szkolenie zaawansowane Budowa wewnętrznego portalu swoich zajęć w aplikacji Sharepoint, wykorzystanie Stream do oszczędzania głosu (podstawy montażu filmów), automatyzacja pracy z Power Automate',
        time: 6,
        category: 'szkolenie',
        price: 1990,
        image: '4.png', // do uzupelnienia,
    },
    {
        id: 'T0007',
        title: 'Podstawy Minecraft: Education Edition',
        desc:
            'Logowanie do gry, poruszanie się, omówienie narzędzi i surowców, które można wykorzystać w budowie światów i projektowania lekcji online / hybrydowych i stacjonarnych, kreowanie obiektów',
        time: 6,
        category: 'szkolenie',
        price: 1390,
        image: '3.png', // do uzupelnienia,
    },
    {
        id: 'T0008',
        title: 'Minecraft: Education Edition dla średniozaawansowanych',
        desc:
            'Omówienie dostępnych programów zajęć i praktyczne wykorzystanie ich na lekcjach',
        time: 6,
        category: 'szkolenie',
        price: 1590,
        image: '2.png', // do uzupelnienia,
    },
    {
        id: 'T0009',
        title: 'Przygoda z programowaniem w Minecraft: Education Edition',
        desc:
            'Programowanie z wykorzystaniem bloków oraz w języku Python w Minecraft Education',
        time: 6,
        category: 'szkolenie',
        price: 1990,
        image: '2.png', // do uzupelnienia,
    },
    {
        id: 'T0010',
        title: 'Cyberbezpieczeństwo w miejscu pracy i w pracy zdalnej',
        desc:
            'Podstawy prawne, wpływ życia prywatnego na bezpieczeństwo informacji w szkole, studium przypadków, zagrożenia w sieci, metody zabezpieczania kont służbowych i prywatnych, obrona przed spamem i phishingiem, narzędzia zwiększające bezpieczeństwo oraz anonimowośc w sieci, o systemie zarządzania bezpieczeństwem informacji w miejscu pracy',
        time: 6,
        category: 'szkolenie',
        price: 2290,
        image: '2.png', // do uzupelnienia,
    },
    {
        id: 'T0011',
        title: 'Szkolenie podstawowe dla Dyrektorów Szkół',
        desc:
            'Cyfrowy wizerunek szkoły, cyfrowy profil dyrektora, nauczyciela i ucznia, podstawy prawne w cyfrowym świecie, narzędzia komunikacyjne, spotkania online, podstawy administracji platformą edukacyjną, zarządzanie hasłami w szkole',
        time: 10,
        category: 'szkolenie',
        price: 1990,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0012',
        title: 'Szkolenie rozszerzone dla Dyrektorów Szkół',
        desc:
            'Cyfrowe narzędzia wspomagające produktywność w pracy zdalnej, hybrydowej i stacjonarnej, delegowanie zadań, sprawny obieg dokumentów w pracy stacjonarnej i zdalnej, zarządzanie bazami danych w szkole, cyberbezpieczeństwo platformy edukacyjnej, grywalizacja w szkole',
        time: 11,
        category: 'szkolenie',
        price: 2190,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0013',
        title: 'Szkolenie zaawansowane dla Dyrektorów Szkół',
        desc:
            'Zaawansowane rozwiązania stosowane w platformach edukacyjnych, budowa intranetu szkoły, automatyzacja procesów związanych z przepływem informacji, kopie zapasowe w obliczu sytuacji kryzysowych, ochrona danych osobowych w pracy zdalnej i hybrydowej, polityka bezpieczeństwa szkoły, wyszukiwanie informacji o osobach (podstawy OSINT)',
        time: 11,
        category: 'szkolenie',
        price: 2390,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0014',
        title: 'Programowanie w języku Python dla nauczycieli informatyki',
        desc:
            'Kompletne szkolenie z zakresu przygotowania do prowadzenia zajęć z programowania w języku Python',
        time: 12,
        category: 'szkolenie',
        price: 4990,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0015',
        title: 'Podstawy administracji platformą Microsoft 365',
        desc:
            'Omówienie funkcjonalności centrum administracyjnego, administracja usługami OneDrive, Teams',
        time: 4,
        category: 'szkolenie',
        price: 2190,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0016',
        title: 'Administracja platformą Microsoft 365 dla średniozaawansowanych',
        desc:
            'Administracja usługą w panelach Azure Active Directory, Exchange, Sharepoint, Stream, Zabezpieczenia',
        time: 4,
        category: 'szkolenie',
        price: 2590,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0017',
        title: 'Administracja platformą Microsoft 365 dla zaawansowanych',
        desc:
            'Administracja usługą w panelach Power Automate, Search & Intelligence, Power Apps, Yammer, SDS',
        time: 4,
        category: 'szkolenie',
        price: 2990,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0018',
        title: 'BHP w pracy i edukacji zdalnej w czasach pandemii',
        desc: 'Szkolenie z zakresu BHP w pracy oraz edukacji zdalnej w czasach pandemii',
        time: 8,
        category: 'szkolenie',
        price: 999,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0019',
        title:
            'Projektowanie strony internetowej szkoły dla osób z niepełnosprawnościami w Wordpress',
        desc:
            'Efektem szkolenia jest nowa strona internetowa szkoły oraz przeszkolony personel w zakresie budowy i obsługi serwisu; dodatkowo szkoła otrzyma serwer w Polsce na 3 lata i kompletny zestaw narzędzi do bezterminowego wykorzystania',
        time: 8,
        category: 'szkolenie',
        price: 2299,
        image: '', // do uzupelnienia,
    },
    {
        id: 'T0020',
        title:
            'Wdrożenie platformy edukacyjnej, standaryzacja lub połączenie dwóch najpopularniejszych bezpłatnych platform edukacyjnych',
        desc:
            'Zalecane jest posiadanie co najmniej dwóch najpopularniejszych bezpłatnych platform edukacyjnych od Microsoft oraz Google. Pozwala to na prowadzenie zajęć zdalnych w przypadku awarii jednej z platform, daje drugą lokalizację zapasową przechowywania danych oraz daje uczniom kompetencje związane z ich obsługą (przeciwdziałanie wykluczeniu cyfrowemu)',
        time: null,
        category: 'usluga',
        price: 1290,
        image: '', // do uzupelnienia,
    },

    //oprogramowanie
    {
        id: 'P0001',
        title: 'Microsoft 365 Business Basic',
        desc:
            'Najlepsze rozwiązanie dla firm, które potrzebują prostych rozwiązań zdalnych z usługą Microsoft Teams, bezpiecznym magazynem w chmurze i usługą Office Online ',
        time: null,
        category: 'oprogramowanie',
        price: 19,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0002',
        title: 'Microsoft 365 Business Standard',
        desc:
            'Najlepsze rozwiązanie dla firm, które potrzebują narzędzi do pełnej pracy zdalnej i współpracy — obejmuje usługę Microsoft Teams, bezpieczny magazyn w chmurze, biznesową pocztę e-mail i aplikacje Premium pakietu Office na urządzeniach. ',
        time: null,
        category: 'oprogramowanie',
        price: 48,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0003',
        title: 'Microsoft 365 Business Premium',
        desc:
            'Najlepsze rozwiązanie dla firm, które wymagają bezpiecznych rozwiązań do pracy zdalnej ze wszystkimi funkcjami zawartymi w wersji Business Standard oraz zaawansowanej ochrony przed zagrożeniami cybernetycznymi i zarządzania urządzeniamoprogramowanie ',
        time: null,
        category: 'oprogramowanie',
        price: 78,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0004',
        title: 'Microsoft 365 E3',
        desc:
            'Uzykaj w swojej klasie aplikacje biurowe połączone z podstawowymi funkcjami zabezpieczeń i zgodności dla przedsiębiorstw',
        time: null,
        category: 'oprogramowanie',
        price: 145,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0005',
        title: 'Microsoft 365 E5',
        desc:
            'Uzykaj w swojej klasie aplikacje biurowe oraz zaawansowane funkcje zabezpieczeń, zgodności, komunikacji głosowej i analiz dla przedsiębiorstw',
        time: null,
        category: 'oprogramowanie',
        price: 247,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0006',
        title: 'Microsoft 365 F3',
        desc:
            'Zwiększ możliwości pracowników pierwszego kontatku za pomocą aplikacji biurowych i usług w chmurze.',
        time: null,
        category: 'oprogramowanie',
        price: 31,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0007',
        title: 'Office 365 A1 - dla uczniów i studentów',
        desc:
            'Bezpłatna usługa Office 365 w Internecie, obejmująca popularne aplikacje, takie jak Outlook, Word, PowerPoint, Excel i OneNote, dzięki którym nauczyciele i uczniowie mogą ze sobą współpracować, bezproblemowo się komunikować i tworzyć niesamowitą zawartość',
        time: null,
        category: 'oprogramowanie',
        price: 0,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0008',
        title: 'Office 365 A3 - dla uczniów i studentów',
        desc:
            'Wszystkie funkcje planu A1 oraz pełny dostęp do aplikacji klasycznych pakietu Office, dodatkowe funkcje zarządzania i narzędzia zabezpieczeń.',
        time: null,
        category: 'oprogramowanie',
        price: 11,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0009',
        title: 'Office 365 A5 - dla uczniów i studentów',
        desc:
            'Wszystkie funkcje planu A3 oraz najlepsze w swojej klasie funkcje inteligentnego zarządzania zabezpieczeniami, zaawansowane funkcje zachowywania zgodności i systemy analityczne firmy Microsoft.',
        time: null,
        category: 'oprogramowanie',
        price: 27,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0009a',
        title: 'Office 365 A1 - dla nauczycieli, wykładowców i pracowników',
        desc:
            'Bezpłatna usługa Office 365 w Internecie, obejmująca popularne aplikacje internetowe, takie jak Outlook, Word, PowerPoint, Excel i OneNote, dzięki którym nauczyciele i uczniowie mogą ze sobą współpracować, bezproblemowo się komunikować i tworzyć niesamowitą zawartość.',
        time: null,
        category: 'oprogramowanie',
        price: 0,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0010',
        title: 'Office 365 A3 - dla nauczycieli, wykładowców i pracowników',
        desc:
            'Wszystkie funkcje planu A1 oraz pełny dostęp do aplikacji klasycznych pakietu Office, dodatkowe funkcje zarządzania i narzędzia zabezpieczeń.',
        time: null,
        category: 'oprogramowanie',
        price: 15,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0011',
        title: 'Office 365 A5 - dla nauczycieli, wykładowców i pracowników',
        desc:
            'Wszystkie funkcje planu A3 oraz najlepsze w swojej klasie funkcje inteligentnego zarządzania zabezpieczeniami, zaawansowane funkcje zachowywania zgodności i systemy analityczne firmy Microsoft.',
        time: null,
        category: 'oprogramowanie',
        price: 36,
        image: '', // do uzupelnienia,
    },
    {
        id: 'P0012',
        title: 'Minecraft: Education Edition',
        desc: 'Edukacyjna wersja gry Minecraft zaprojektowana do używania w szkołach.',
        time: null,
        category: 'oprogramowanie',
        price: 20,
        image: '', // do uzupelnienia
    },
    {
        id: 'P0013',
        title: 'Microsoft 365 A1',
        desc:
            'Usługa Microsoft 365 A1, obejmująca popularne aplikacje, takie jak Outlook, Word, PowerPoint i Excel, dzięki którym nauczyciele i uczniowie mogą ze sobą współpracować.',
        time: null,
        category: 'oprogramowanie',
        price: 81,
        image: '', // do uzupelnienia
    },
    {
        id: 'P0014',
        title: 'Microsoft 365 A3',
        desc:
            'Wszystkie funkcje planu A1 i dostęp do Minecraft: Education Edition oraz dodatkowe możliwości zarządzania zabezpieczeniami i narzędzia',
        time: null,
        category: 'oprogramowanie',
        price: 18,
        image: '', // do uzupelnienia
    },
    {
        id: 'P0015',
        title: 'Microsoft 365 A5',
        desc:
            'Wszystkie funkcje planu A3, funkcje inteligentnego zarządzania zabezpieczeniami, zaawansowane funkcje zachowywania zgodności i systemy analityczne firmy Microsoft.',
        time: null,
        category: 'oprogramowanie',
        price: 33,
        image: '', // do uzupelnienia
    },

    //sprzet
    {
        id: 'D0001',
        title: 'FortiGate/FortiWiFi® 30E',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. Seria FortiGate/FortiWiFi 30E zapewnia skoncentrowane na aplikacjach, skalowalne i bezpieczne rozwiązanie SD-WAN w kompaktowej, bezwentylatorowej obudowie typu desktop dla oddziałów przedsiębiorstw i średnich firm.',
        time: null,
        category: 'sprzet',
        price: 3059,
        image: 'fortigate-fortiwifi-30e.jpg',
    },
    {
        id: 'D0002',
        title: 'FortiGate/FortiWiFi® 30E - odnowienie licencji bez wymiany urządzenia',
        desc:
            'Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 1205,
        image: 'fortigate-fortiwifi-30e.jpg',
    },
    {
        id: 'D0003',
        title: 'FortiGate-40F',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. Seria FortiGate/FortiWiFi 40F zapewnia szybkie i bezpieczne rozwiązanie SD-WAN w kompaktowej obudowie bez wentylatora dla oddziałów przedsiębiorstw i średnich firm. ',
        time: null,
        category: 'sprzet',
        price: 3519,
        image: 'fortigate-fortiwifi-40f-series.jpg',
    },
    {
        id: 'D0004',
        title: 'FortiGate-40F - odnowienie licencji bez wymiany urządzenia',
        desc:
            'Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 1384,
        image: 'fortigate-fortiwifi-40f-series.jpg',
    },
    {
        id: 'D0005',
        title: 'FortiGate-40F-3G4G',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. Seria FortiGate/FortiWiFi 40F zapewnia szybkie i bezpieczne rozwiązanie SD-WAN w kompaktowej obudowie bez wentylatora dla oddziałów przedsiębiorstw i średnich firm. ',
        time: null,
        category: 'sprzet',
        price: 6789,
        image: 'fortigate-fortiwifi-40f-series.jpg',
    },
    {
        id: 'D0006',
        title: 'FortiGate-40F-3G4G - odnowienie licencji bez wymiany urządzenia',
        desc:
            ' Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 2677,
        image: 'fortigate-fortiwifi-40f-series.jpg',
    },
    {
        id: 'D0007',
        title: 'FortiGate-60F',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. Seria FortiGate/FortiWiFi 60F zapewnia szybkie i bezpieczne rozwiązanie SD-WAN w kompaktowej obudowie bez wentylatora dla oddziałów przedsiębiorstw i średnich firm.  ',
        time: null,
        category: 'sprzet',
        price: 4945,
        image: 'fortigate-fortiwifi-60f-series.jpg',
    },
    {
        id: 'D0008',
        title: 'FortiGate-60F - odnowienie licencji bez wymiany urządzenia',
        desc:
            'Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 4945,
        image: 'fortigate-fortiwifi-60f-series.jpg',
    },
    {
        id: 'D0009',
        title: 'FortiGateRugged-60F',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. FortiGate Rugged Series oferuje wzmocnione przemysłowo, wszechstronne urządzenie zabezpieczające, które zapewnia specjalistyczną ochronę przed zagrożeniami w celu zabezpieczenia krytycznych sieci przemysłowych i kontrolnych przed złośliwymi atakami.',
        time: null,
        category: 'sprzet',
        price: 12088,
        image: 'fortigate-rugged-series.jpg',
    },
    {
        id: 'D00010',
        title: 'FortiGateRugged-60F - odnowienie licencji bez wymiany urządzenia',
        desc:
            'Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 4761,
        image: 'fortigate-rugged-series.jpg',
    },
    {
        id: 'D00011',
        title: 'FortiGate-80F',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. Seria FortiGate 80F oferuje skoncentrowane na aplikacjach, skalowalne i bezpieczne rozwiązanie SD-WAN w kompaktowej obudowie bez wentylatora dla oddziałów przedsiębiorstw i średnich firm. ',
        time: null,
        category: 'sprzet',
        price: 8533,
        image: 'fortigate-fortiwifi-80f-series.jpg',
    },
    {
        id: 'D00012',
        title: 'FortiGate-80F - odnowienie licencji bez wymiany urządzenia',
        desc:
            'Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 3362,
        image: 'fortigate-fortiwifi-80f-series.jpg',
    },
    {
        id: 'D00013',
        title: 'FortiGate-100F',
        desc:
            'Sprzęt plus 24x7 FortiCare i FortiGuard Unified Threat Protection. Seria FortiGate 100F stanowi skoncentrowane na aplikacjach, skalowalne i bezpieczne rozwiązanie SD-WAN z funkcjami Next Generation Firewall (NGFW) dla średnich i dużych przedsiębiorstw wdrożonych na poziomie kampusu lub oddziału.',
        time: null,
        category: 'sprzet',
        price: 19913,
        image: 'fortigate-100f-series.jpg',
    },
    {
        id: 'D00014',
        title: 'FortiGate-100F - odnowienie licencji bez wymiany urządzenia',
        desc:
            'Unified Threat Protection (UTP) (IPS, zaawansowana ochrona przed złośliwym oprogramowaniem, kontrola aplikacji, filtrowanie stron internetowych, usługa antyspamowa i 24x7 FortiCare).',
        time: null,
        category: 'sprzet',
        price: 7843,
        image: 'fortigate-100f-series.jpg',
    },

    //telefony-sprzet
    {
        id: 'D00015', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T21E2',
        desc:
            'SIP-T21 to podstawowy telefon IP, który oferuje funkcje i wydajność zazwyczaj oferowane przez znacznie bardziej zaawansowane telefony. ',
        time: null,
        category: 'sprzet',
        price: 169,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00016', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T53',
        desc:
            'Yealink SIP-T53, zaprojektowany specjalnie dla zapracowanej kadry kierowniczej i profesjonalistów, jest łatwym w użyciu telefonem biznesowym. ',
        time: null,
        category: 'sprzet',
        price: 449,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00017', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T48SSFB',
        desc:
            'Ten telefon klasy premium jest przeznaczony dla kadry kierowniczej i profesjonalistów, którzy oczekują wysokiej wydajności telefonu i doskonałego Skype’a, dostosowanego do potrzeb biznesowych. ',
        time: null,
        category: 'sprzet',
        price: 799,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00018', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T56A SFB',
        desc:
            'YealinkT56A, kompatybilny z Microsoft® Skype for Business i pakietem Office365, zapewnia doskonałe wrażenia i funkcjonalność dostosowanego do potrzeb biznesowych Skype’a na pulpicie. ',
        time: null,
        category: 'sprzet',
        price: 999,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00019', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T56A SFB',
        desc:
            'YealinkT56A, kompatybilny z Microsoft® Skype for Business i pakietem Office365, zapewnia doskonałe wrażenia i funkcjonalność dostosowanego do potrzeb biznesowych Skype’a na pulpicie. ',
        time: null,
        category: 'sprzet',
        price: 999,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00020', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T58A SFB',
        desc:
            'YealinkT58A, kompatybilny z Microsoft® Skype for Business i pakietem Office365, zapewnia doskonałe wrażenia i funkcjonalność dostosowanego do potrzeb biznesowych Skype’a na pulpicie. ',
        time: null,
        category: 'sprzet',
        price: 1029,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00021', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T46SSFB',
        desc:
            'T46S to doskonałe narzędzie komunikacyjne dla zapracowanej kadry kierowniczej i profesjonalistów. Poza tym, że oferuje lepszą ogólną wydajność niż T46G, urządzenie to posiada szybszy interfejs z bogatym, wysokiej rozdzielczości kolorowym wyświetlaczem TFT. ',
        time: null,
        category: 'sprzet',
        price: 559,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00022', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T42SSFB',
        desc:
            'T42S jest bogatym w funkcje narzędziem biznesowym zapewniającym doskonałą komunikację i rozszerzoną funkcjonalność, które idealnie nadaje się do powszechnego użytku i dla pracowników call center. ',
        time: null,
        category: 'sprzet',
        price: 425,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00023', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T58A z kamerą',
        desc:
            'Yealink SIP-T58A z kamerą jest prostym w użyciu smartfonem biznesowym, który zapewnia wzbogacone doświadczenie w rozmowach audio i wideo HD dla profesjonalistów biznesowych. ',
        time: null,
        category: 'sprzet',
        price: 1399,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00024', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink CP960 SFB',
        desc:
            'YealinkCP960, kompatybilny z Microsoft® Skype for Business, jest telefonem konferencyjnym klasy korporacyjnej, który przenosi doświadczenia i funkcje Skype for Business z pulpitu do sali konferencyjnej. ',
        time: null,
        category: 'sprzet',
        price: 2499,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00025', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T58A',
        desc:
            'Yealink SIP-T58A jest prostym w obsłudze smartfonem biznesowym, który zapewnia profesjonalistom biznesowym wzbogacone wrażenia z rozmów audio i wideo HD. ',
        time: null,
        category: 'sprzet',
        price: 1049,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00026', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T48S',
        desc:
            'Telefon IP SIP-T48S jest dynamicznym rozwiązaniem komunikacji biznesowej dla kadry kierowniczej i profesjonalistów. Telefon ten oferuje duży ekran dotykowy, który sprawia, że przełączanie między stronami i aplikacjami jest szybkie, łatwe i wygodne. ',
        time: null,
        category: 'sprzet',
        price: 819,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00027', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T46S',
        desc:
            'Telefon IP SIP-T46S to doskonałe narzędzie komunikacyjne dla zapracowanej kadry kierowniczej i profesjonalistów. ',
        time: null,
        category: 'sprzet',
        price: 589,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00028', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T41SSFB',
        desc:
            'T41S jest bogatym w funkcje narzędziem biznesowym zapewniającym doskonałą komunikację i rozszerzoną funkcjonalność, które idealnie nadaje się do powszechnego użytku i dla pracowników call center. ',
        time: null,
        category: 'sprzet',
        price: 379,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00029', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T40G',
        desc:
            'Yealink SIP-T40G to bogaty w funkcje telefon SIP, który zwiększa codzienną interoperacyjność i unifikuje komunikację dla zapracowanych menedżerów. ',
        time: null,
        category: 'sprzet',
        price: 349,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00030', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T19PE2',
        desc:
            'SIP-T19(P) E2 jest jednym z najnowszych rozwiązań Yealink dla podstawowychtelefonów IP, który oferuje funkcje i wydajność zwykle związane z dużo bardziej zaawansowanymi telefonami. ',
        time: null,
        category: 'sprzet',
        price: 169,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00031', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W53P',
        desc:
            'Yealink W53P, będący wysokowydajnym systemem telefonii bezprzewodowej SIP, jestidealnym rozwiązaniem dla małych i średnich przedsiębiorstw. ',
        time: null,
        category: 'sprzet',
        price: 399,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00032', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T48U',
        desc:
            'Dzięki nowemu telefonowi IP SIP-T48U Yealink prezentuje dynamiczne rozwiązanie w zakresie komunikacji biznesowej dla kadry zarządzającej i specjalistów.  ',
        time: null,
        category: 'sprzet',
        price: 749,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00033', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W52P',
        desc:
            'Yealink W52P jest systemem telefonii bezprzewodowej SIP przeznaczonym dlamałych firm i SoHo, które szukają natychmiastowych oszczędności, aleskalowalnego systemu komunikacji mobilnej opartego na SIP.  ',
        time: null,
        category: 'sprzet',
        price: 379,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00034', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T57W',
        desc:
            'Yealink SIP-T57W, zaprojektowany specjalnie dla zapracowanej kadry kierowniczej i profesjonalistów, jest łatwym w użyciu telefonem biznesowym Prime z 7-calowym z wielopunktowym ekranem dotykowym.  ',
        time: null,
        category: 'sprzet',
        price: 949,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00035', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T46U',
        desc:
            'Zaprojektowany z myślą o zapracowanej kadrze kierowniczej i profesjonalistach, telefon IP SIP-T46U jest doskonałym narzędziem komunikacyjnym, które zapewnia lepszą ogólną wydajność.  ',
        time: null,
        category: 'sprzet',
        price: 599,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00036', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T43U',
        desc:
            'Telefon IP SIP-T43U jest bogatym w funkcje narzędziem biznesowym zapewniającym doskonałą komunikację i rozszerzoną funkcjonalność. Jest to 12-liniowy telefon IP z dużym, czarno-białym, 3,7-calowym ekranem i obsługą EXP43.  ',
        time: null,
        category: 'sprzet',
        price: 379,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00037', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Gigaset A540IP',
        desc:
            'Jest to wygodne rozwiązanie komunikacji VoIP z doskonałą jakością dźwięku HD. Zapewnia możliwość prowadzenia trzech rozmów jednocześnie (2 VoIP i 1 PSTN).',
        time: null,
        category: 'sprzet',
        price: 219,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00038', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T21PE2',
        desc:
            'Nowy model SIP-T21(P) E2 firmy Yealink podnosi poziom podstawowych telefonów IP do poziomu nigdy wcześniej nieosiągalnego.',
        time: null,
        category: 'sprzet',
        price: 179,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00039', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T41S',
        desc:
            'SIP-T41S jest bogatym w funkcje narzędziem biznesowym zapewniającym doskonałą komunikację i rozszerzoną funkcjonalność.',
        time: null,
        category: 'sprzet',
        price: 349,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00040', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T29G',
        desc:
            'Telefon IP SIP-T29G jest najbardziej zaawansowanym modelem z serii terminali IP Yealink T2x. Posiada kolorowy wyświetlacz TFT o wysokiej rozdzielczości, zapewnia bogate wrażenia wizualne. ',
        time: null,
        category: 'sprzet',
        price: 499,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00041', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T27G',
        desc:
            'Dzięki szybszej reakcji interfejsu użytkownika telefonu i lepszej wydajności urządzenia, telefon IP SIP-T27G, jako zmodernizowany produkt T27P, jest najnowszym, bogatym w funkcje narzędziem firmy Yealink, łączącym w sobie doskonałe możliwości głosowe i zwiększone możliwości rozszerzania funkcji dla biznesu. ',
        time: null,
        category: 'sprzet',
        price: 349,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00042', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W60P',
        desc:
            'Yealink W60P, będący wysokowydajnym systemem telefonii bezprzewodowej SIP, jest idealnym rozwiązaniem dla małych i średnich przedsiębiorstw. Posiadając w sumie do 8 słuchawek Yealink W56H DECT, pozwala natychmiast cieszyć się doskonałą mobilnością i wydajną elastycznością, a także znacznie eliminuje dodatkowe kłopoty z okablowaniem i ładowaniem. ',
        time: null,
        category: 'sprzet',
        price: 419,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00043', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink EXP43',
        desc:
            'Moduł rozszerzenia kolorów Yealink Edla telefonów IP YealinkT43U/T46U/T48U, został zaprojektowany w celu rozszerzenia możliwości funkcjonalnych telefonu SIP na zupełnie nowy poziom.  ',
        time: null,
        category: 'sprzet',
        price: 339,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00044', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink EXP40',
        desc:
            'Moduł rozszerzenia EXP40 dla telefonów SIP-T46S, SIP-T46G, SIP-T48S i SIP-T48G, rozszerzający możliwości funkcjonalne telefonu typu sip na zupełnie nowy poziom.  ',
        time: null,
        category: 'sprzet',
        price: 366,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00045', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink EXP20',
        desc:
            'EXP20 zawiera duży i przyjazny dla użytkownika interfejs ciekłokrystaliczny (LCD), który mierzy 160×320 pikseli, jak również zawiera 20 fizycznych, dwukolorowych przycisków LED.  ',
        time: null,
        category: 'sprzet',
        price: 309,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00046', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T23G',
        desc:
            'YealinkSIP-T23G charakteryzuje się intuicyjnym interfejsem użytkownika i rozszerzoną funkcjonalnością, które ułatwiają ludziom interakcję i maksymalizują wydajność.  ',
        time: null,
        category: 'sprzet',
        price: 229,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00047', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W59R',
        desc:
            'Yealink W59R, certyfikowany zgodnie z rygorystycznym standardem IP67, jest profesjonalną, wytrzymałą słuchawką DECT ze zintegrowanym Bluetooth i alarmem wibracyjnym, która nadaje się do stosowania w środowisku, w którym może występować kurz, wilgoć i trudne warunki.   ',
        time: null,
        category: 'sprzet',
        price: 519,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00048', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W53H',
        desc:
            'Yealink W53H to bezprzewodowa słuchawka nowej generacji przeznaczona do użytku biznesowego, charakteryzująca się doskonałą żywotnością baterii i wysoką kompatybilnością. ',
        time: null,
        category: 'sprzet',
        price: 269,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00049', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W56H',
        desc:
            'Yealink W56H to bezprzewodowa słuchawka nowej generacji przeznaczona do użytku biznesowego, charakteryzująca się doskonałą żywotnością baterii i wysoką kompatybilnością.',
        time: null,
        category: 'sprzet',
        price: 289,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00050', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink W56H',
        desc:
            'Yealink W56H to bezprzewodowa słuchawka nowej generacji przeznaczona do użytku biznesowego, charakteryzująca się doskonałą żywotnością baterii i wysoką kompatybilnością.',
        time: null,
        category: 'sprzet',
        price: 289,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00051', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T54W',
        desc:
            'Yealink SIP-T54W to łatwy w obsłudze telefon biznesowy Prime z 4,3-calowym, kolorowym ekranem LCD z możliwością regulacji,na którym można łatwo i elastycznie znaleźć wygodny kąt widzenia w zależności od potrzeb osobistych i środowiskowych',
        time: null,
        category: 'sprzet',
        price: 889,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00052', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink SIP-T42S',
        desc:
            'Telefon IP SIP-T42S jest dynamicznym narzędziem komunikacji biznesowej zapewniającym doskonałą komunikację głosową i rozszerzoną funkcjonalność.',
        time: null,
        category: 'sprzet',
        price: 425,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00053', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T53W',
        desc:
            'Yealink SIP-T53W, zaprojektowany specjalnie dla zapracowanej kadry kierowniczej i profesjonalistów, jest łatwym w użyciu telefonem biznesowym Prime z 3,7-calowym, graficznym wyświetlaczem LCD z możliwością regulacji, który pozwala na łatwe i elastyczne znalezienie wygodnego kąta widzenia, w zależności od potrzeb osobistych i środowiskowych.',
        time: null,
        category: 'sprzet',
        price: 549,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00054', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink VP59 Teams Edition',
        desc:
            'Telefon VP59 z systemem Android jest zaprojektowany jako telefon biurkowy dla kadry kierowniczej i możebyć również stosowany w pomieszczeniach zamkniętych. ',
        time: null,
        category: 'sprzet',
        price: 2099,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00055', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T56A',
        desc:
            'Yealink T56A, kompatybilny z Microsoft® Skype for Business i pakietem Office365, zapewnia doskonałe wrażenia i funkcjonalność dostosowanego do potrzeb biznesowych Skype’a na pulpicie. Uaktualniony z serii Yealink T4S (Skype for Business® Edition), T56A posiada nie tylko 7-calowy, wielopunktowy ekran dotykowy, ale także lepszy interfejs użytkownika.',
        time: null,
        category: 'sprzet',
        price: 999,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00056', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T56A',
        desc:
            'Yealink T56A, kompatybilny z Microsoft® Skype for Business i pakietem Office365, zapewnia doskonałe wrażenia i funkcjonalność dostosowanego do potrzeb biznesowych Skype’a na pulpicie. Uaktualniony z serii Yealink T4S (Skype for Business® Edition), T56A posiada nie tylko 7-calowy, wielopunktowy ekran dotykowy, ale także lepszy interfejs użytkownika.',
        time: null,
        category: 'sprzet',
        price: 999,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00057', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T58A Teams Edition',
        desc:
            'Telefon T58A z systemem Android jest przeznaczony do pokoi C-level i executive, oferując dużą elastyczność. Telefon T58A jest wyposażony nie tylko w 7-calowy, wielopunktowy ekran dotykowy z możliwością regulacji, ale także w interfejs użytkownika dostosowany do potrzeb zespołu oraz szybszą reakcję, co sprawia, że współpraca jest łatwiejsza niż kiedykolwiek. ',
        time: null,
        category: 'sprzet',
        price: 1199,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00058', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink MP56 Teams Edition',
        desc:
            'Oparty na systemie operacyjnym Android 9, MP56 jest telefonem IP dostosowanym do pracy zespołowej z 7calowym pojemnościowym ekranem dotykowym, który oferuje większą szybkość reakcji i możliwość aktualizacji oprogramowania sprzętowego do wersji SfB. ',
        time: null,
        category: 'sprzet',
        price: 999,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
    {
        id: 'D00059', //id zwiekszamy o 1 musi byc inne dla kazdego produktu
        title: 'Yealink T55A Teams Edition',
        desc:
            'Telefon T55A z systemem Android jest wyposażony w 4,3-calowy, regulowany pojemnościowo ekran dotykowy i zapewnia spójne, dopasowane do potrzeb zespołu doświadczenie.',
        time: null,
        category: 'sprzet',
        price: 649,
        image: '', //te obrazki są potrzebne aspect ratio taki sam nie mniejsze niż 200px
    },
];
console.log('długość tabeli: ', products.length);
// console.log(Array.length(products));

// products.map(product => console.log(product.title));

export default products;
