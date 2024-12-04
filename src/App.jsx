
import { useRef, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState('');
  const [weatherData, setWeatherData] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  const fetchWeather = async () => {
    try {
      const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${weather}`);
      console.log("response=>", response);
      const weatherIcons = `https://openweathermap.org/img/wn/${response?.data?.weather[0]?.icon}.png`
      setWeatherData(response);
      setWeatherIcon(weatherIcons);
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleClick = () => {
    fetchWeather();
    setWeather('');
  }

  return (
    <div className='h-dvh flex flex-col justify-center items-center gap-2 bg-black w-full'>
      <h2 className='text-3xl text-white'>Weather App</h2>
      <form>
        <input type="text" placeholder='Enter City Name'
          className='py-1 px-2 min-w-96 border-2 rounded-md mt-4 outline-none focus:border-gray-200'
          value={weather} onChange={(e) => setWeather(e.target.value)} />
      </form>
      {
        weatherData ? <><h2 className='text-white mt-4 text-2xl'>{`Weather of ${weatherData?.data?.name}`}</h2>
          <h3 className='text-white mt-4 text-xl'>{weatherData?.data?.weather[0]?.description}</h3>
          <div className='flex items-center mt-4'>
            <img src={weatherIcon} />
            <h1 className='text-white text-4xl font-semibold'>{Math.floor(weatherData?.data?.main?.temp)} °C</h1>
          </div></> : ''
      }

      <button className='py-2 mt-5 text-[14px] px-4 border-2 rounded-md text-white'
        onClick={handleClick}>Get Weather</button>
    </div>
  )
}

export default App
