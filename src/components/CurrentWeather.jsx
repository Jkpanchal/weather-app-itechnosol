import React from 'react'
import { useWeatherContext } from '../../context/weatherContext'
import { BookmarkPlus, BookmarkMinus, MapPin, Thermometer, Droplets, Wind } from 'lucide-react';

function CurrentWeather() {

    const { currentWeather, savedCities, saveCity, removeCity } = useWeatherContext();

    if (!currentWeather) return null

    const isSaved = savedCities.includes(currentWeather.name)

    const toggleSave = () => {
        if (isSaved) {
            removeCity(currentWeather.name)
        } else {
            saveCity(currentWeather.name)
        }
    }

    return (
        <div
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 dark:border-gray-700/30 relative overflow-hidden"
        >
            
            <div className="absolute top-6 right-6">
                <button
                    onClick={toggleSave}
                    className={`p-2 rounded-full transition-colors ${isSaved
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
                        }`}
                    title={isSaved ? "Remove from saved" : "Save city"}
                >
                    {isSaved ? <BookmarkMinus className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
                </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                        <MapPin className="w-5 h-5" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                            {currentWeather.name}, {currentWeather.sys.country}
                        </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 capitalize text-lg">
                        {currentWeather.weather[0].description}
                    </p>

                    <div className="flex items-center mt-4">
                        <img
                            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
                            alt={currentWeather.weather[0].description}
                            className="w-24 h-24 -ml-4 drop-shadow-md"
                        />
                        <span className="text-6xl font-light text-gray-900 dark:text-white tracking-tighter">
                            {Math.round(currentWeather.main.temp)}°
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    <div className="bg-white/50 dark:bg-gray-700/50 rounded-2xl p-4 flex items-center gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                            <Thermometer className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Feels Like</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {Math.round(currentWeather.main.feels_like)}°
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/50 dark:bg-gray-700/50 rounded-2xl p-4 flex items-center gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                            <Droplets className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {currentWeather.main.humidity}%
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/50 dark:bg-gray-700/50 rounded-2xl p-4 flex items-center gap-4 col-span-2">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                            <Wind className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {currentWeather.wind.speed} m/s
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather