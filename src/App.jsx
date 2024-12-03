
import { useState } from 'react';
import './App.css'

function App() {
  const [weather, setWeather] = useState(0);
  console.log('weather', weather);
  return (
    <div>
      <h2>Weather App</h2>
      <form>
        <input type="text" placeholder='Enter Weather'
          className='py-1 px-2 border-2 rounded-md mt-4'
          value={weather} onChange={(e) => setWeather(e.target.value)} />
      </form>
      <button className='py-1 mt-4 text-[12px] px-2 border-2 rounded-md'>Check Weather</button>
    </div>
  )
}

export default App
