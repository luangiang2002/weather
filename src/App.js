
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/action/FetchApi';
function App() {
  const weather=useSelector(state=>state.weather.weather)
  const dispatch = useDispatch()
  useEffect(() => {
    if(weather!=='undefined')
    dispatch(fetchWeather());
  }, [])
  
  console.log(weather.current);
  return (
    <>
      
    <div className='app flex mt-4 w-[700px] h-[400px] mx-auto  p-5 justify-between rounded outline outline-8 outline-sky-100'>
      <div className=''>
        <div className='flex mb-[30px]'>
          Your city
          <input type="text" className='border outline-none ml-3 rounded' />
        </div>
        <div className='text-center'>
          <p>5:05 PM,Mon, Now 23, 2002</p>
          <div className='flex text-[39px] mt-[20px] justify-center'>
            <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" />
            <p className=''>72<sup>°F</sup></p>
          </div>
          <p className='text-[20px] font-bold ml-[40px] my-[20px]'>Cloudy</p>
          <div className='flex justify-center mt-[40px]'>
            <div className='text-center mr-[40px] '>
              <p>Humidty</p>
              <p className='mt-[5px] font-bold '>45%</p>
            </div>
            <div>
              <p >Wind speed</p>
              <p className='mt-[5px] font-bold'>19.2 km/j</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-end gap-5'>
        <div className='text-center active '>
          <p>Today</p>
          <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" className='mx-auto' />
          <p>Humidty</p>
          <p>45%</p>
        </div>
        <div className='text-center h-[150px] '>
          <p>Today</p>
          <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" className='mx-auto' />
          <p>Humidty</p>
          <p>45%</p>
        </div>
        <div className='text-center h-[150px] '>
          <p>Today</p>
          <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" className='mx-auto' />
          <p>Humidty</p>
          <p>45%</p>
        </div>
        <div className='text-center  h-[150px]'>
          <p>Today</p>
          <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" className='mx-auto' />
          <p>Humidty</p>
          <p>45%</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default (App)
