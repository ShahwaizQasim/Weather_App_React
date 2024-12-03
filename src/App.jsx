
import { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(0);
  const [weatherData, setWeatherData] = useState();
  console.log('weather', weather);

  const fetchWeather = async () => {
    try {
      const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?
        appid=${API_KEY}&units=metric&q=${weather}`);
      console.log("response=>", response);
      setWeatherData(response);

    } catch (error) {
      console.log("error", error);

    }
  }

  const handleClick = () => {
    fetchWeather();
  }

  return (
    <div>
      <h2>Weather App</h2>
      <form>
        <input type="text" placeholder='Enter Weather'
          className='py-1 px-2 border-2 rounded-md mt-4'
          value={weather} onChange={(e) => setWeather(e.target.value)} />
      </form>
      <button className='py-1 mt-4 text-[12px] px-2 border-2 rounded-md' onClick={handleClick}>Get Weather</button>
    </div>
  )
}

export default App
