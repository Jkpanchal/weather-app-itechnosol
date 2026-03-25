import React from 'react'
import { useWeatherContext } from '../../context/weatherContext'
import { ForeCastCard } from '../Styledcomponent/ForecastCard';

function ForecastWeather() {

    const { forecast } = useWeatherContext()
    if (!forecast || forecast.length === 0) return null;

    return (
        <div className='mt-8'>
            {console.log(forecast)}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 px-2">5-Day Forecast</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {forecast.map((day, index) => {
                    return (
                        <ForeCastCard key={index}>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{day.date} date</p>
                            <img
                                src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                                alt={day.weather.description}
                                className="w-16 h-16 drop-shadow-sm"
                            />
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {Math.round(day.temp_max)}°
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {Math.round(day.temp_min)}°
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize text-center">
                                {day.weather.main}
                            </p>
                        </ForeCastCard>
                    )
                })}
            </div>
        </div>
    )
}

export default ForecastWeather