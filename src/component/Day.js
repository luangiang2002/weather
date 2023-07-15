import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import ChartDay from './ChartDay';
import { IoArrowBackOutline } from 'react-icons/io5'
import RenderDay from './RenderDay';
import { useNavigate, useParams } from 'react-router-dom';
const ChartDay = React.lazy(() => import('./ChartDay'));

export default function Day() {
  const navigate = useNavigate();
  const weatherday = useSelector(state => state.weather.weather)
  const param = useParams()
  const [weatherDay, setWeatherDay] = useState([])
  useEffect(() => {
    if (weatherday && weatherday.forecast !== undefined) {
      const data = weatherday.forecast.forecastday.filter(weather => weather.date_epoch === Number(param.epoch))
      setWeatherDay(...weatherDay, data)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherday])
  const handleBack = () => {
    navigate('/')
  }
  
  return (
    <>
      {
        !!weatherDay ?
          <div className=' 2xl:flex 2xl:justify-center 2xl:items-center 2xl:h-[100vh] w-full mt-[50px]'>
            <div className='w-[99%] mx-auto 2xl:w-[1300px] 2xl:bg-white 2xl:py-[30px]'>
              <IoArrowBackOutline className='text-[40px]' onClick={handleBack} />
              <h1 className='text-center my-[30px] text-[40px] font-bold'>{weatherday.location.name}</h1>
              <p className='text-center text-[30px] mb-[30px]'>{weatherDay.date}</p>
              {weatherDay.length !== 0 ?
                <ChartDay weatherDay={weatherDay} /> : 'chart loading'
              }
              <RenderDay weatherDay={weatherDay} />
            </div>
          </div>
          :
          <>
            loading
          </>
      }
    </>
  )
}
