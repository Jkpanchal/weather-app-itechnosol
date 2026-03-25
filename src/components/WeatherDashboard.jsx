import { CloudRain, Loader2 } from 'lucide-react'
import { DashboardContainer } from '../Styledcomponent/DashboardContainer'
import { Header } from '../Styledcomponent/Header'
import { IconWrapper } from '../Styledcomponent/IconWrapper'
import { Icon } from '../Styledcomponent/Icon'
import { Nav } from '../Styledcomponent/Nav'
import { Container } from '../Styledcomponent/Container'
import React from 'react'
import { Title } from '../Styledcomponent/Title'
import { Subtitle } from '../Styledcomponent/Subtitle'
import SearchBar from './SearchBar'
import CityList from './CityList'
import { useWeatherContext } from '../../context/weatherContext'
import { WeatherContainer } from '../Styledcomponent/WeatherContainer'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

function WeatherDashboard() {

    const { isLoading, error, currentWeather } = useWeatherContext()

    return (
        <>
            <DashboardContainer>
                <Container>
                    <Header>
                        <Nav>
                            <IconWrapper>
                                <Icon>
                                    <CloudRain />
                                </Icon>
                            </IconWrapper>
                            <div>
                                <Title>WeatherDashboard</Title>
                                <Subtitle>Show correct weather</Subtitle>
                            </div>
                        </Nav>
                    </Header>

                    <main>
                        <SearchBar />
                        <CityList />

                        <WeatherContainer>
                            {isLoading && !currentWeather ? (
                                <div className='abosolute inset-0 flex flex-col items-center justify-center text-blue-600 dark:text-blue-400'>
                                    <Loader2 className='w-12 h-12 ' />
                                </div>
                            ) : error ? (
                                <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-3xl p-8 text-center'>
                                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">Oops! Something went wrong</h3>
                                    <p className="text-red-600 dark:text-red-300">{error}</p>
                                </div>
                            ) : currentWeather ? (
                                <>
                                    <CurrentWeather />
                                    <ForecastWeather />
                                </>
                            ) : null}
                        </WeatherContainer>
                    </main>
                </Container>

            </DashboardContainer>
        </>
    )
}

export default WeatherDashboard