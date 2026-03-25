const API_KEY = ''
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchCurrentWeather = async (city) => {
    if (!API_KEY) {
        throw new Error("Please Provide API key using .env file")
    }

    const response = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("City not found")
        }
        if (response.status === 401) {
            throw new Error("Invalid API key")
        }
        throw new Error("Faild to fetch current weather data")
    }

    return response.json()
}

export const fetchForeCast = async (city) => {
    if (!API_KEY) {
        throw new Error('Please Provide API key using .env file');
    }

    const response = await fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`City not found`);
        }
        throw new Error('Failed to fetch forecast data.');
    }

    return response.json();
}