const translations = {
    en: {
        appTitle: "Global Weather",
        useLocation: "Use My Location",
        searchPlaceholder: "Search any city...",
        emptyStateTitle: "No Location Selected",
        emptyStateDescription: "Search for any city worldwide or use your current location to view weather information",
        emptyStateButton: "Use My Current Location",
        currentCity: "Select a Location",
        selectCountry: "Select Country",
        feelsLike: "Feels like",
        wind: "Wind Speed",
        humidity: "Humidity",
        locationDetected: "Location Detected",
        nearestCity: "Nearest city",
        nearestWeatherLocation: "Nearest weather location found",
        findingLocation: "Finding nearest location...",
        locationDetails: "Location Details",
        yourCoordinates: "Your coordinates",
        distance: "Distance",
        region: "Region",
        detectingLocation: "Detecting Your Location",
        fetchingWeather: "Finding nearest weather location...",
        geolocationNotSupported: "Geolocation not supported",
        geolocationNotSupportedMsg: "Your browser does not support location services.",
        locationAccessDenied: "Location access denied",
        locationAccessDeniedMsg: "Please allow location access to use this feature.",
        locationUnavailable: "Location unavailable",
        locationUnavailableMsg: "Could not determine your location.",
        locationTimeout: "Location timeout",
        locationTimeoutMsg: "Location request timed out.",
        locationError: "Location error",
        locationErrorMsg: "An error occurred while getting your location.",
        weatherApiError: "Weather API Error",
        weatherApiErrorMsg: "Could not fetch real weather data. Please check your API key.",
        noResults: "No cities found",
        kmh: "km/h",
        footerText: "Global Weather",
        weatherInfo: "Weather information for cities worldwide",
        // Day names
        sunday: "Sunday",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        // Month names
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November",
        december: "December"
    },
   ku: {
        appTitle: "کەش و هەوا",
        useLocation: "جهێ من بکار بینە…",
        searchPlaceholder: "لێگەریان بۆ شاری...",
        emptyStateTitle: "هیچ جهەک نەهاتییە هەڵبژاردن",
        emptyStateDescription: "لێگەریان بکە بۆ هەر جهەکێ یان خۆ جهێ خو هەلبژێرە بۆ دیتنا زانیاریێن کەش و هەوایێ",
        emptyStateButton: "جهێ من بکار بینە",
        currentCity: "شارەکێ هەڵبژێرە",
        selectCountry: "وڵاتەکێ هەڵبژێرە",
        feelsLike: "وەکی",
        wind: "خێرایا بایێ",
        humidity: "شێدارییێ",
        locationDetected: "جهێتە هاتە دیتن",
        nearestCity: "شارێ نێزیک",
        nearestWeatherLocation: "جهێ کەش و هەوایا نێزیک هاتە دیتن",
        findingLocation: "جهێ نزیک دهێتە ڤەدیتن...",
        locationDetails: "وردەکاریێن جهی",
        yourCoordinates: "کۆردیناتێن تە",
        distance: "دووری",
        region: "ناوچە",
        detectingLocation: "جهێ تە دهێتە ڤەدیتن…",
        fetchingWeather: "جهێ کەش و هەوایا نزیک دهێتە ڤەدیتن...",
        geolocationNotSupported: "جهێتە نەیێ پشتگیری کریە!",
        geolocationNotSupportedMsg: "پشتگیریا جهێ تە ناکەت.",
        locationAccessDenied: "دەستپێدانا شوێنێ هاتە ڕەتکرن",
        locationAccessDeniedMsg: "رێکێ بدە کو بشیێن جهێ تە ببینین.",
        locationUnavailable: "جهێ تە نەهاتە دیتن",
        locationUnavailableMsg: "نەشیا جهێ تە دیاربکەین.",
        locationTimeout: "کاتێ جهی تێپەڕی",
        locationTimeoutMsg: "داواکرنا جهی کاتێ پێ تێپەڕی.",
        locationError: "هەڵەیەک د جهی دا",
        locationErrorMsg: "هەڵەیەک روویدا د کاتێ وەرگرتنا جهێ تە دا.",
        weatherApiError: "هەڵەیا کەش و هەوایێ",
        weatherApiErrorMsg: "نەشیا زانیاریێن کەش و هەوایێ بهێنە وەرگرتن. تکایە کلیلا API چارەسەر بکە.",
        noResults: "هیچ شارەکی نەهاتە دیتن",
        kmh: "کم/کاتژمێر",
        footerText: "کەش و هەوا",
        weatherInfo: "زانیاریێن کەش و هەوایێ بۆ شارێن دنیایێ",
        // Day names in Kurdish Bahdini
        sunday: "ئێکشەمبی",
        monday: "دووشەمبی",
        tuesday: "سێشەمبی",
        wednesday: "چوارشەمبی",
        thursday: "پێنجشەمبی",
        friday: "هەینی ( خودبە ) ",
        saturday: "شەمبی",
        // Month names in Kurdish Bahdini
        january: "کانونا دووێ",
        february: "شوبات",
        march: "ئادار",
        april: "نیسان",
        may: "ئایار",
        june: "حوزەیران",
        july: "تەموز",
        august: "ئاب",
        september: "ئەیلول",
        october: "تشرینا یەکێ",
        november: "تشرینا دووێ",
        december: "کانونا یەکێ"
    }
};

// Current language (default: English)
let currentLang = localStorage.getItem('language') || 'en';

// GLOBAL CITIES DATABASE - Major cities from around the world
const globalCities = [
 // Middle East - Kurdistan Region
{ name: "Erbil", country: "Iraq", region: "Erbil District", lat: 36.1900, lon: 44.0089, type: "City" },
{ name: "Pirmam", country: "Iraq", region: "Erbil District", lat: 36.2167, lon: 44.1000, type: "City" },
{ name: "Mergasor", country: "Iraq", region: "Erbil District", lat: 36.6300, lon: 44.1500, type: "City" },
{ name: "Barzan", country: "Iraq", region: "Erbil District", lat: 37.0261, lon: 43.9628, type: "Town" },
{ name: "Dara Dazan", country: "Iraq", region: "Erbil District", lat: 37.0500, lon: 44.0833, type: "Village" },
{ name: "Sulaymaniyah", country: "Iraq", region: "Sulaymaniyah District", lat: 35.5572, lon: 45.4356, type: "City" },
{ name: "Duhok", country: "Iraq", region: "Duhok District", lat: 36.8667, lon: 43.0000, type: "City" },
{ name: "Semel", country: "Iraq", region: "Duhok District", lat: 36.8528, lon: 42.8472, type: "City" },
{ name: "Zakho", country: "Iraq", region: "Duhok District", lat: 37.1436, lon: 42.6819, type: "City" },
{ name: "Akre", country: "Iraq", region: "Duhok District", lat: 36.7408, lon: 43.8922, type: "City" },
{ name: "Amedi", country: "Iraq", region: "Duhok District", lat: 37.0925, lon: 43.4872, type: "City" },
{ name: "Sheladze", country: "Iraq", region: "Duhok District", lat: 37.0333, lon: 43.3167, type: "City" },
{ name: "Deraluk", country: "Iraq", region: "Duhok District", lat: 37.0667, lon: 43.5167, type: "City" },
{ name: "Sarsing", country: "Iraq", region: "Duhok District", lat: 36.9167, lon: 43.4333, type: "City" },
{ name: "Karkuk", country: "Iraq", region: "Kirkuk", lat: 35.4667, lon: 44.3167, type: "City" },
{ name: "Halabja", country: "Iraq", region: "Sulaymaniyah District", lat: 35.1778, lon: 45.9861, type: "City" },
{ name: "Chamchamal", country: "Iraq", region: "Sulaymaniyah District", lat: 35.5333, lon: 44.8333, type: "City" },
{ name: "Ranya", country: "Iraq", region: "Sulaymaniyah District", lat: 36.2500, lon: 44.8833, type: "City" },
{ name: "Qaladize", country: "Iraq", region: "Sulaymaniyah District", lat: 36.1000, lon: 45.1167, type: "City" },
{ name: "Dukan", country: "Iraq", region: "Sulaymaniyah District", lat: 35.1333, lon: 45.0333, type: "City" },
{ name: "Penjwin", country: "Iraq", region: "Sulaymaniyah District", lat: 35.6167, lon: 45.9667, type: "City" },
{ name: "Zawita", country: "Iraq", region: "Duhok District", lat: 36.9500, lon: 43.3000, type: "City" },
{ name: "Bamarni", country: "Iraq", region: "Duhok District", lat: 37.0333, lon: 43.3167, type: "City" },
{ name: "Choman", country: "Iraq", region: "Erbil District", lat: 36.6333, lon: 44.9500, type: "City" },
{ name: "Rawanduz", country: "Iraq", region: "Erbil District", lat: 36.6111, lon: 44.5222, type: "City" },
{ name: "Koya", country: "Iraq", region: "Erbil District", lat: 36.0833, lon: 44.6333, type: "City" },
{ name: "Shaqlawa", country: "Iraq", region: "Erbil District", lat: 36.4000, lon: 44.3333, type: "City" },
{ name: "Soran", country: "Iraq", region: "Erbil District", lat: 36.6500, lon: 44.5333, type: "City" },
    // Middle East
    { name: "Baghdad", country: "Iraq", region: "Baghdad", lat: 33.3152, lon: 44.3661, type: "city" },
    { name: "Mosul", country: "Iraq", region: "Nineveh", lat: 36.3400, lon: 43.1300, type: "city" },
    { name: "Tehran", country: "Iran", region: "Tehran", lat: 35.6892, lon: 51.3890, type: "city" },
    { name: "Istanbul", country: "Turkey", region: "Istanbul", lat: 41.0082, lon: 28.9784, type: "city" },
    { name: "Ankara", country: "Turkey", region: "Ankara", lat: 39.9334, lon: 32.8597, type: "city" },
    { name: "Damascus", country: "Syria", region: "Damascus", lat: 33.5138, lon: 36.2765, type: "city" },
    { name: "Amman", country: "Jordan", region: "Amman", lat: 31.9497, lon: 35.9328, type: "city" },
    { name: "Beirut", country: "Lebanon", region: "Beirut", lat: 33.8938, lon: 35.5018, type: "city" },
    { name: "Riyadh", country: "Saudi Arabia", region: "Riyadh", lat: 24.7136, lon: 46.6753, type: "city" },
    { name: "Dubai", country: "UAE", region: "Dubai", lat: 25.2048, lon: 55.2708, type: "city" },
    { name: "Abu Dhabi", country: "UAE", region: "Abu Dhabi", lat: 24.4539, lon: 54.3773, type: "city" },
    { name: "Doha", country: "Qatar", region: "Doha", lat: 25.2854, lon: 51.5310, type: "city" },
    { name: "Kuwait City", country: "Kuwait", region: "Kuwait", lat: 29.3759, lon: 47.9774, type: "city" },
    { name: "Manama", country: "Bahrain", region: "Manama", lat: 26.2235, lon: 50.5876, type: "city" },
    { name: "Muscat", country: "Oman", region: "Muscat", lat: 23.5880, lon: 58.3829, type: "city" },
    { name: "Sana'a", country: "Yemen", region: "Sana'a", lat: 15.3694, lon: 44.1910, type: "city" },
    
    // Asia
    { name: "Tokyo", country: "Japan", region: "Kanto", lat: 35.6762, lon: 139.6503, type: "city" },
    { name: "Beijing", country: "China", region: "Beijing", lat: 39.9042, lon: 116.4074, type: "city" },
    { name: "Shanghai", country: "China", region: "Shanghai", lat: 31.2304, lon: 121.4737, type: "city" },
    { name: "Seoul", country: "South Korea", region: "Seoul", lat: 37.5665, lon: 126.9780, type: "city" },
    { name: "Delhi", country: "India", region: "Delhi", lat: 28.7041, lon: 77.1025, type: "city" },
    { name: "Mumbai", country: "India", region: "Maharashtra", lat: 19.0760, lon: 72.8777, type: "city" },
    { name: "Bangkok", country: "Thailand", region: "Bangkok", lat: 13.7563, lon: 100.5018, type: "city" },
    { name: "Singapore", country: "Singapore", region: "Singapore", lat: 1.3521, lon: 103.8198, type: "city" },
    { name: "Jakarta", country: "Indonesia", region: "Jakarta", lat: 6.2088, lon: 106.8456, type: "city" },
    { name: "Manila", country: "Philippines", region: "Metro Manila", lat: 14.5995, lon: 120.9842, type: "city" },
    { name: "Kuala Lumpur", country: "Malaysia", region: "Kuala Lumpur", lat: 3.1390, lon: 101.6869, type: "city" },
    { name: "Hanoi", country: "Vietnam", region: "Hanoi", lat: 21.0285, lon: 105.8542, type: "city" },
    { name: "Ho Chi Minh City", country: "Vietnam", region: "Ho Chi Minh", lat: 10.8231, lon: 106.6297, type: "city" },
    
    // Europe
    { name: "London", country: "United Kingdom", region: "England", lat: 51.5074, lon: -0.1278, type: "city" },
    { name: "Paris", country: "France", region: "Île-de-France", lat: 48.8566, lon: 2.3522, type: "city" },
    { name: "Berlin", country: "Germany", region: "Berlin", lat: 52.5200, lon: 13.4050, type: "city" },
    { name: "Madrid", country: "Spain", region: "Madrid", lat: 40.4168, lon: -3.7038, type: "city" },
    { name: "Rome", country: "Italy", region: "Lazio", lat: 41.9028, lon: 12.4964, type: "city" },
    { name: "Amsterdam", country: "Netherlands", region: "North Holland", lat: 52.3676, lon: 4.9041, type: "city" },
    { name: "Brussels", country: "Belgium", region: "Brussels", lat: 50.8503, lon: 4.3517, type: "city" },
    { name: "Vienna", country: "Austria", region: "Vienna", lat: 48.2082, lon: 16.3738, type: "city" },
    { name: "Prague", country: "Czech Republic", region: "Prague", lat: 50.0755, lon: 14.4378, type: "city" },
    { name: "Warsaw", country: "Poland", region: "Masovia", lat: 52.2297, lon: 21.0122, type: "city" },
    { name: "Moscow", country: "Russia", region: "Moscow", lat: 55.7558, lon: 37.6173, type: "city" },
    { name: "Athens", country: "Greece", region: "Attica", lat: 37.9838, lon: 23.7275, type: "city" },
    { name: "Lisbon", country: "Portugal", region: "Lisbon", lat: 38.7223, lon: -9.1393, type: "city" },
    { name: "Stockholm", country: "Sweden", region: "Stockholm", lat: 59.3293, lon: 18.0686, type: "city" },
    { name: "Oslo", country: "Norway", region: "Oslo", lat: 59.9139, lon: 10.7522, type: "city" },
    { name: "Helsinki", country: "Finland", region: "Uusimaa", lat: 60.1699, lon: 24.9384, type: "city" },
    
    // North America
    { name: "New York", country: "USA", region: "New York", lat: 40.7128, lon: -74.0060, type: "city" },
    { name: "Los Angeles", country: "USA", region: "California", lat: 34.0522, lon: -118.2437, type: "city" },
    { name: "Chicago", country: "USA", region: "Illinois", lat: 41.8781, lon: -87.6298, type: "city" },
    { name: "Toronto", country: "Canada", region: "Ontario", lat: 43.6532, lon: -79.3832, type: "city" },
    { name: "Vancouver", country: "Canada", region: "British Columbia", lat: 49.2827, lon: -123.1207, type: "city" },
    { name: "Mexico City", country: "Mexico", region: "Mexico City", lat: 19.4326, lon: -99.1332, type: "city" },
    
    // South America
    { name: "São Paulo", country: "Brazil", region: "São Paulo", lat: -23.5505, lon: -46.6333, type: "city" },
    { name: "Rio de Janeiro", country: "Brazil", region: "Rio de Janeiro", lat: -22.9068, lon: -43.1729, type: "city" },
    { name: "Buenos Aires", country: "Argentina", region: "Buenos Aires", lat: -34.6037, lon: -58.3816, type: "city" },
    { name: "Lima", country: "Peru", region: "Lima", lat: -12.0464, lon: -77.0428, type: "city" },
    { name: "Bogotá", country: "Colombia", region: "Bogotá", lat: 4.7110, lon: -74.0721, type: "city" },
    { name: "Santiago", country: "Chile", region: "Santiago", lat: -33.4489, lon: -70.6693, type: "city" },
    
    // Africa
    { name: "Cairo", country: "Egypt", region: "Cairo", lat: 30.0444, lon: 31.2357, type: "city" },
    { name: "Johannesburg", country: "South Africa", region: "Gauteng", lat: -26.2041, lon: 28.0473, type: "city" },
    { name: "Cape Town", country: "South Africa", region: "Western Cape", lat: -33.9249, lon: 18.4241, type: "city" },
    { name: "Nairobi", country: "Kenya", region: "Nairobi", lat: -1.2921, lon: 36.8219, type: "city" },
    { name: "Lagos", country: "Nigeria", region: "Lagos", lat: 6.5244, lon: 3.3792, type: "city" },
    { name: "Accra", country: "Ghana", region: "Greater Accra", lat: 5.6037, lon: -0.1870, type: "city" },
    { name: "Casablanca", country: "Morocco", region: "Casablanca", lat: 33.5731, lon: -7.5898, type: "city" },
    { name: "Addis Ababa", country: "Ethiopia", region: "Addis Ababa", lat: 9.0320, lon: 38.7469, type: "city" },
    
    // Oceania
    { name: "Sydney", country: "Australia", region: "New South Wales", lat: -33.8688, lon: 151.2093, type: "city" },
    { name: "Melbourne", country: "Australia", region: "Victoria", lat: -37.8136, lon: 144.9631, type: "city" },
    { name: "Auckland", country: "New Zealand", region: "Auckland", lat: -36.8485, lon: 174.7633, type: "city" },
    { name: "Wellington", country: "New Zealand", region: "Wellington", lat: -41.2865, lon: 174.7762, type: "city" }
];

// Weather conditions with proper icons, emojis, and colors
const weatherConditions = [
    { 
        name: "Sunny", 
        icon: "fa-sun", 
        colorClass: "sunny",
        imageText: "☀️",
        description: "Clear and sunny skies"
    },
    { 
        name: "Partly Cloudy", 
        icon: "fa-cloud-sun", 
        colorClass: "partly-cloudy",
        imageText: "⛅",
        description: "Partly cloudy with some sun"
    },
    { 
        name: "Cloudy", 
        icon: "fa-cloud", 
        colorClass: "cloudy",
        imageText: "☁️",
        description: "Overcast and cloudy"
    },
    { 
        name: "Light Rain", 
        icon: "fa-cloud-rain", 
        colorClass: "rainy",
        imageText: "🌧️",
        description: "Light rain showers"
    },
    { 
        name: "Heavy Rain", 
        icon: "fa-cloud-showers-heavy", 
        colorClass: "rainy",
        imageText: "⛈️",
        description: "Heavy rain and showers"
    },
    { 
        name: "Snow", 
        icon: "fa-snowflake", 
        colorClass: "snowy",
        imageText: "❄️",
        description: "Snowfall"
    },
    { 
        name: "Storm", 
        icon: "fa-bolt", 
        colorClass: "stormy",
        imageText: "⚡",
        description: "Thunderstorms"
    },
    { 
        name: "Clear Sky", 
        icon: "fa-moon", 
        colorClass: "sunny",
        imageText: "✨",
        description: "Clear night sky"
    },
    { 
        name: "Foggy", 
        icon: "fa-smog", 
        colorClass: "cloudy",
        imageText: "🌫️",
        description: "Fog and reduced visibility"
    },
    { 
        name: "Windy", 
        icon: "fa-wind", 
        colorClass: "cloudy",
        imageText: "💨",
        description: "Windy conditions"
    }
];

// ===== WEATHERAPI.COM CONFIGURATION =====
const WEATHER_API_KEY = '2d649e10d1db460784d223719261002'; // Your WeatherAPI key
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';

// DOM Elements
const locationBtn = document.getElementById('locationBtn');
const emptyLocationBtn = document.getElementById('emptyLocationBtn');
const locationStatus = document.getElementById('locationStatus');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const loadingOverlay = document.getElementById('loadingOverlay');
const errorToast = document.getElementById('errorToast');
const emptyState = document.getElementById('emptyState');
const weatherContent = document.getElementById('weatherContent');
const languageToggle = document.getElementById('languageToggle');

// Current selected location (initially null)
let currentCity = null;

// ===== LANGUAGE FUNCTIONS =====
function translate(key) {
    return translations[currentLang][key] || translations.en[key] || key;
}

function updatePageLanguage() {
    // Update direction for Kurdish (RTL)
    document.documentElement.dir = currentLang === 'ku' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang === 'ku' ? 'ku' : 'en';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT') {
            element.placeholder = translate(key);
        } else {
            element.textContent = translate(key);
        }
    });
    
    // Update language toggle button
    if (languageToggle) {
        languageToggle.textContent = currentLang === 'en' ? 'Ku' : 'En';
    }
    
    // Update specific texts that don't have data-translate
    const currentCityElement = document.getElementById('currentCity');
    if (currentCityElement && !currentCity) {
        currentCityElement.textContent = translate('currentCity');
    }
    
    // Re-render current weather if displayed
    if (currentCity) {
        updateWeatherDisplay();
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ku' : 'en';
    localStorage.setItem('language', currentLang);
    updatePageLanguage();
}

function updateWeatherDisplay() {
    // Update labels that might have changed
    const feelsLikeLabel = document.querySelector('[data-label="feelsLike"]');
    const windLabel = document.querySelector('[data-label="wind"]');
    const humidityLabel = document.querySelector('[data-label="humidity"]');
    
    if (feelsLikeLabel) feelsLikeLabel.textContent = translate('feelsLike');
    if (windLabel) windLabel.textContent = translate('wind');
    if (humidityLabel) humidityLabel.textContent = translate('humidity');
}

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Find nearest city from global database
function findNearestLocation(userLat, userLon) {
    let nearestCity = null;
    let minDistance = Infinity;
    
    globalCities.forEach(city => {
        const distance = calculateDistance(userLat, userLon, city.lat, city.lon);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
        }
    });
    
    return {
        city: nearestCity,
        distance: minDistance
    };
}

// ===== FETCH REAL WEATHER DATA FROM WEATHERAPI.COM =====
async function fetchRealWeatherData(lat, lon) {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${lat},${lon}&aqi=no`
        );
        
        if (!response.ok) {
            throw new Error('Weather API request failed');
        }
        
        const data = await response.json();
        return {
            temp: Math.round(data.current.temp_c),
            feelsLike: Math.round(data.current.feelslike_c),
            humidity: data.current.humidity,
            windSpeed: Math.round(data.current.wind_kph),
            weatherCode: data.current.condition.code,
            weatherText: data.current.condition.text,
            isDay: data.current.is_day === 1
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// ===== MAP WEATHERAPI CODES TO YOUR WEATHER CONDITIONS =====
function mapWeatherCodeToCondition(weatherCode, weatherText, isDay) {
    // Sunny/Clear (1000)
    if (weatherCode === 1000) {
        return isDay ? weatherConditions[0] : weatherConditions[7]; // Sunny or Clear Sky
    }
    
    // Partly Cloudy (1003)
    if (weatherCode === 1003) {
        return weatherConditions[1]; // Partly Cloudy
    }
    
    // Cloudy/Overcast (1006, 1009)
    if (weatherCode === 1006 || weatherCode === 1009) {
        return weatherConditions[2]; // Cloudy
    }
    
    // Fog/Mist (1030, 1135, 1147)
    if (weatherCode === 1030 || weatherCode === 1135 || weatherCode === 1147) {
        return weatherConditions[8]; // Foggy
    }
    
    // Light Rain/Drizzle (1063, 1150, 1153, 1180, 1183, 1186, 1189, 1240)
    if ([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1240].includes(weatherCode)) {
        return weatherConditions[3]; // Light Rain
    }
    
    // Heavy Rain (1192, 1195, 1243, 1246, 1273, 1276)
    if ([1192, 1195, 1243, 1246, 1273, 1276].includes(weatherCode)) {
        return weatherConditions[4]; // Heavy Rain
    }
    
    // Snow (1066, 1114, 1210-1225, 1255-1264, 1279, 1282)
    if (weatherCode === 1066 || weatherCode === 1114 || 
        (weatherCode >= 1210 && weatherCode <= 1225) ||
        (weatherCode >= 1255 && weatherCode <= 1264) ||
        weatherCode === 1279 || weatherCode === 1282) {
        return weatherConditions[5]; // Snow
    }
    
    // Thunderstorm (1087, 1273, 1276, 1279, 1282)
    if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) {
        return weatherConditions[6]; // Storm
    }
    
    // Check for windy conditions in text
    if (weatherText.toLowerCase().includes('wind')) {
        return weatherConditions[9]; // Windy
    }
    
    // Default to partly cloudy
    return weatherConditions[1];
}

// Initialize the application
function init() {
    updateTime();
    setInterval(updateTime, 1000);
    
    // Set initial language
    updatePageLanguage();
    
    // Set up event listeners
    locationBtn.addEventListener('click', getCurrentLocation);
    emptyLocationBtn.addEventListener('click', getCurrentLocation);
    searchInput.addEventListener('input', handleSearch);
    
    // Language toggle
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

// Get current location from browser
function getCurrentLocation() {
    showLoading(true, translate('detectingLocation'));
    
    if (!navigator.geolocation) {
        showError(translate('geolocationNotSupported'), translate('geolocationNotSupportedMsg'));
        showLoading(false);
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        // Success callback
        (position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            
            // Find nearest city
            const result = findNearestLocation(userLat, userLon);
            
            // Show location status
            showLocationStatus(result, userLat, userLon);
            
            // Load the nearest city data
            loadCityData(result.city, result.distance);
            
            showLoading(false);
        },
        // Error callback
        (error) => {
            showLoading(false);
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    showError(translate('locationAccessDenied'), translate('locationAccessDeniedMsg'));
                    break;
                case error.POSITION_UNAVAILABLE:
                    showError(translate('locationUnavailable'), translate('locationUnavailableMsg'));
                    break;
                case error.TIMEOUT:
                    showError(translate('locationTimeout'), translate('locationTimeoutMsg'));
                    break;
                default:
                    showError(translate('locationError'), translate('locationErrorMsg'));
            }
        },
        // Options
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// Show location detection status
function showLocationStatus(result, userLat, userLon) {
    const statusTitle = document.getElementById('statusTitle');
    const statusMessage = document.getElementById('statusMessage');
    const statusDetails = document.getElementById('statusDetails');
    
    statusTitle.textContent = translate('locationDetected');
    statusMessage.textContent = `${translate('nearestCity')}: ${result.city.name}`;
    statusDetails.innerHTML = `
        <strong>${translate('locationDetails')}:</strong><br>
        • ${translate('yourCoordinates')}: ${userLat.toFixed(4)}, ${userLon.toFixed(4)}<br>
        • ${translate('nearestCity')}: ${result.city.name}, ${result.city.country}<br>
        • ${translate('distance')}: ${result.distance.toFixed(1)} ${currentLang === 'ku' ? 'کم' : 'km'}<br>
        • ${translate('region')}: ${result.city.region}
    `;
    
    // Show status panel
    locationStatus.style.display = 'block';
    
    // Hide after 10 seconds
    setTimeout(() => {
        locationStatus.style.display = 'none';
    }, 10000);
}

// Load city data and update UI
async function loadCityData(city, distance = null) {
    // Update current city
    currentCity = city;
    
    // Hide empty state, show weather content
    emptyState.style.display = 'none';
    weatherContent.style.display = 'block';
    
    // Update location display
    document.getElementById('currentCity').textContent = `${city.name}, ${city.country}`;
    document.getElementById('currentRegion').textContent = city.region;
    document.getElementById('currentRegion').style.display = 'inline-flex';
    
    // Update distance indicator if available
    if (distance && distance < 100) {
        document.getElementById('distanceIndicator').style.display = 'inline-flex';
        document.getElementById('distanceValue').textContent = distance.toFixed(1) + (currentLang === 'ku' ? ' کم' : ' km');
    } else {
        document.getElementById('distanceIndicator').style.display = 'none';
    }
    
    // Fetch and display real weather data
    showLoading(true, translate('fetchingWeather'));
    await generateWeatherData(city);
    showLoading(false);
    
    // Update search input field
    searchInput.value = `${city.name}, ${city.country}`;
}

// ===== GENERATE WEATHER DATA USING REAL API =====
async function generateWeatherData(city) {
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherDescription = document.getElementById('weatherDescription');
    
    // Fetch real weather data from API
    const weatherData = await fetchRealWeatherData(city.lat, city.lon);
    
    if (weatherData) {
        // Use real API data
        const condition = mapWeatherCodeToCondition(
            weatherData.weatherCode, 
            weatherData.weatherText, 
            weatherData.isDay
        );
        
        // Update weather display with image/text above description
        weatherIcon.className = 'weather-icon-large ' + condition.colorClass;
        
        // Create weather display with image above text
        weatherIcon.innerHTML = `
            <div class="weather-image-large">
                <div class="weather-image-text">${condition.imageText}</div>
            </div>
        `;
        
        // Update weather description with condition name and emoji
        weatherDescription.innerHTML = condition.name;
        
        // Add description tooltip
        weatherDescription.title = condition.description;
        
        // Update UI with REAL data
        document.getElementById('temperature').textContent = weatherData.temp;
        document.getElementById('feelsLike').textContent = weatherData.feelsLike + '°C';
        document.getElementById('windSpeed').textContent = weatherData.windSpeed;
        document.getElementById('humidity').textContent = weatherData.humidity;
        
    } else {
        // Fallback to fake data if API fails
        showError(translate('weatherApiError'), translate('weatherApiErrorMsg'));
        generateFakeWeatherData(city);
    }
}

// ===== FALLBACK FUNCTION (original fake weather generation) =====
function generateFakeWeatherData(city) {
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherDescription = document.getElementById('weatherDescription');
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentHour = now.getHours();
    const isNorthernHemisphere = city.lat >= 0;
    const isDaytime = currentHour >= 6 && currentHour < 18;
    
    // Determine season based on hemisphere
    let season;
    if (isNorthernHemisphere) {
        if (currentMonth >= 12 || currentMonth <= 2) season = 'winter';
        else if (currentMonth >= 3 && currentMonth <= 5) season = 'spring';
        else if (currentMonth >= 6 && currentMonth <= 8) season = 'summer';
        else season = 'autumn';
    } else {
        if (currentMonth >= 12 || currentMonth <= 2) season = 'summer';
        else if (currentMonth >= 3 && currentMonth <= 5) season = 'autumn';
        else if (currentMonth >= 6 && currentMonth <= 8) season = 'winter';
        else season = 'spring';
    }
    
    // Base temperature based on latitude and season
    let baseTemp;
    const absLat = Math.abs(city.lat);
    
    if (season === 'winter') {
        if (absLat < 30) baseTemp = 15 + Math.random() * 10;
        else if (absLat < 45) baseTemp = 0 + Math.random() * 10;
        else baseTemp = -10 + Math.random() * 10;
    } else if (season === 'summer') {
        if (absLat < 30) baseTemp = 25 + Math.random() * 15;
        else if (absLat < 45) baseTemp = 15 + Math.random() * 15;
        else baseTemp = 5 + Math.random() * 10;
    } else {
        if (absLat < 30) baseTemp = 20 + Math.random() * 10;
        else if (absLat < 45) baseTemp = 10 + Math.random() * 10;
        else baseTemp = 0 + Math.random() * 10;
    }
    
    // Adjust for elevation
    if (city.name.includes("City") || city.region.includes("Plateau")) {
        baseTemp -= 3 + Math.random() * 4;
    }
    
    const temp = Math.round(baseTemp);
    
    // Feels like temperature
    let feelsLike = temp;
    if (temp < 10) {
        feelsLike = Math.round(temp - (Math.random() * 3));
    } else if (temp > 25) {
        feelsLike = Math.round(temp + (Math.random() * 3));
    } else {
        feelsLike = Math.round(temp + (Math.random() * 2 - 1));
    }
    
    // Select weather condition with better probabilities
    let condition;
    const rand = Math.random();
    
    if (!isDaytime) {
        // Night time conditions
        if (temp < 0) {
            condition = weatherConditions[5]; // Snow
        } else if (temp < 10) {
            condition = rand > 0.6 ? weatherConditions[2] : weatherConditions[7]; // Cloudy or Clear night
        } else {
            condition = rand > 0.7 ? weatherConditions[1] : weatherConditions[7]; // Partly cloudy or Clear night
        }
    } else {
        // Day time conditions
        if (temp < 0) {
            condition = weatherConditions[5]; // Snow
        } else if (temp < 10) {
            condition = rand > 0.6 ? weatherConditions[3] : weatherConditions[2]; // Rain or Cloudy
        } else if (temp < 20) {
            if (rand > 0.6) condition = weatherConditions[1]; // Partly Cloudy
            else if (rand > 0.3) condition = weatherConditions[2]; // Cloudy
            else condition = weatherConditions[0]; // Sunny
        } else if (temp < 30) {
            if (rand > 0.7) condition = weatherConditions[0]; // Sunny
            else if (rand > 0.4) condition = weatherConditions[1]; // Partly Cloudy
            else if (rand > 0.1) condition = weatherConditions[2]; // Cloudy
            else condition = weatherConditions[9]; // Windy
        } else {
            if (rand > 0.8) condition = weatherConditions[6]; // Storm
            else if (rand > 0.4) condition = weatherConditions[9]; // Windy
            else condition = weatherConditions[0]; // Sunny
        }
    }
    
    // For specific cities, make weather more accurate
    if (city.name === "Akre") {
        const currentHour = now.getHours();
        if (currentMonth === 2) { // February
            if (rand > 0.7) condition = weatherConditions[2]; // Mostly Cloudy
            else if (rand > 0.4) condition = weatherConditions[1]; // Partly Cloudy
            else condition = weatherConditions[0]; // Sunny
        }
    }
    
    
    // Generate other weather data
    const windSpeed = Math.round(5 + Math.random() * 25);
    const humidity = Math.round(30 + Math.random() * 50);
    
    // Update weather display with image/text above description
    weatherIcon.className = 'weather-icon-large ' + condition.colorClass;
    
    // Create weather display with image above text
    weatherIcon.innerHTML = `
        <div class="weather-image-large">
            <div class="weather-image-text">${condition.imageText}</div>
        </div>
    `;
    
    // Update weather description with condition name and emoji
    weatherDescription.innerHTML = condition.name;
    
    // Add description tooltip
    weatherDescription.title = condition.description;
    
    // Update UI
    document.getElementById('temperature').textContent = temp;
    document.getElementById('feelsLike').textContent = feelsLike + '°C';
    document.getElementById('windSpeed').textContent = windSpeed;
    document.getElementById('humidity').textContent = humidity;
}

// Handle search functionality
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const results = [];
    
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }
    
    // Search through all cities
    globalCities.forEach(city => {
        if (city.name.toLowerCase().includes(query) || 
            city.country.toLowerCase().includes(query) ||
            city.region.toLowerCase().includes(query)) {
            results.push(city);
        }
    });
    
    // Display results
    if (results.length > 0) {
        searchResults.innerHTML = results.slice(0, 10).map(city => `
            <div class="search-result-item" data-lat="${city.lat}" data-lon="${city.lon}">
                <div>
                    <div class="result-name">${city.name}, ${city.country}</div>
                    <div class="result-region">${city.region}</div>
                </div>
                <div>${city.type}</div>
            </div>
        `).join('');
        
        // Add click event to results
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const lat = parseFloat(item.dataset.lat);
                const lon = parseFloat(item.dataset.lon);
                const city = globalCities.find(c => c.lat === lat && c.lon === lon);
                
                if (city) {
                    loadCityData(city);
                    searchInput.value = `${city.name}, ${city.country}`;
                    searchResults.style.display = 'none';
                }
            });
        });
        
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = `<div class="no-results">${translate('noResults')}</div>`;
        searchResults.style.display = 'block';
    }
}

// Update time display to 12-hour format
function updateTime() {
    const now = new Date();
    
    // Get time in 12-hour format with AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    
    // Format minutes with leading zero
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    
    const timeStr = `${hours}:${minutesStr} ${ampm}`;
    
    // Get day and month names based on current language
    const dayNames = currentLang === 'en' ? 
        ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] :
        ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    const monthNames = currentLang === 'en' ?
        ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'] :
        ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    
    const dayName = translate(dayNames[now.getDay()]);
    const monthName = translate(monthNames[now.getMonth()]);
    const day = now.getDate();
    const year = now.getFullYear();
    
    const dateStr = currentLang === 'ku' ? 
        `${dayName}، ${day} ${monthName} ${year}` : 
        `${dayName}, ${monthName} ${day}, ${year}`;
    
    document.getElementById('currentTime').textContent = timeStr;
    document.getElementById('currentDate').textContent = dateStr;
}

// Show/hide loading overlay
function showLoading(show, message = '') {
    if (show) {
        loadingOverlay.style.display = 'flex';
        if (message) {
            loadingOverlay.querySelector('p').textContent = message;
        }
    } else {
        loadingOverlay.style.display = 'none';
    }
}

// Show error toast
function showError(title, message) {
    document.getElementById('errorTitle').textContent = title;
    document.getElementById('errorMessage').textContent = message;
    errorToast.style.display = 'flex';
    
    // Auto-hide after 5 seconds
    setTimeout(hideError, 5000);
}

// Hide error toast
function hideError() {
    errorToast.style.display = 'none';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);