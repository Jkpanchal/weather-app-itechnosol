/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchCurrentWeather, fetchForeCast } from '../src/services/weather-service';


const WeatherContext = createContext()

export const useWeatherContext = () => useContext(WeatherContext)

export const WeatherProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState('Vadodara');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [savedCities, setSavedCities] = useState(() => {
    const saved = localStorage.getItem('savedCities');
    return saved ? JSON.parse(saved) : ['Vadodara'];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
  }, [savedCities])


  //Grouping data for one each day instead showing for every three hours
  const processForecast = (data) => {
    const dailyData = {};

    data.list.forEach((item) => {

      // Date formation of timestemp for show like day name and month name
      const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      
      if (!dailyData[date]) {
        dailyData[date] = {
          date,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          weather: item.weather[0],
        }
      } else {
        dailyData[date].temp_min = Math.min(dailyData[date].temp_min, item.main.temp_min);
        dailyData[date].temp_max = Math.max(dailyData[date].temp_max, item.main.temp_max);
        const hour = new Date(item.dt * 1000).getHours();
        // dailyData[date].weather = item.weather[0]
        // Getting mid day weather
        if (hour >= 11 && hour <= 15) {
          dailyData[date].weather = item.weather[0];
        }
      }
    })

    // Return the next 5 days
    return Object.values(dailyData).slice(0, 5);
  }

  const fetchData = useCallback(async (city) => {
    setIsLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForeCast(city)
      ]);
      setCurrentWeather(weatherData);
      setForecast(processForecast(forecastData));
      setCurrentCity(weatherData.name);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred while fetching weather data.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchData(currentCity);
  }, [fetchData, currentCity]); // Initial load

  const searchCity = async (city) => {
    if (!city.trim()) return;
    await fetchData(city);
  }

  const saveCity = (city) => {
    if (!savedCities.includes(city)) {
      setSavedCities([...savedCities, city]);
    }
  }

  const removeCity = (city) => {
    setSavedCities(savedCities.filter(c => c !== city));
  }


  return (
    <WeatherContext.Provider value={{
      currentCity,
      currentWeather,
      forecast,
      savedCities,
      isLoading,
      error,
      searchCity,
      saveCity,
      removeCity,
    }}>
      {children}
    </WeatherContext.Provider>
  );
}
