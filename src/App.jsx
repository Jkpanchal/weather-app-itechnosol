import './App.css'
import WeatherDashboard from './components/WeatherDashboard'
import { WeatherProvider } from '../context/weatherContext'
function App() {

  return (
    <>
      <WeatherProvider>
        <WeatherDashboard />
      </WeatherProvider>
    </>
  )
}

export default App
