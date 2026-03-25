import React from 'react'
import { MapPin } from 'lucide-react'
import { useWeatherContext } from '../../context/weatherContext'




function CityList() {

    const { savedCities, searchCity, currentCity } = useWeatherContext();

    if (savedCities && savedCities.length === 0) return null

    return (
        <div className='mt-8'>
            <h3 className='text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2'>Saved Cities</h3>
            <div className="flex flex-wrap gap-2" >
                {savedCities.map((city, index) => {
                    return (
                        <button key={index} initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            onClick={() => searchCity(city)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${currentCity.toLowerCase() === city.toLowerCase()
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                }`}>
                            <MapPin className="w-4 h-4" />
                            {city}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CityList