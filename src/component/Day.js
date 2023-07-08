import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChartDay from './ChartDay';
import { IoArrowBackOutline } from 'react-icons/io5'
import RenderDay from './RenderDay';
import { useNavigate, useParams } from 'react-router-dom';
export default function Day() {
  const weatherday = useSelector(state => state.weather.weather.forecast.forecastday)
  const navigate = useNavigate();
  const [weatherDay, setWeatherDay] = useState(null)
    const param = useParams()
    useEffect(() => {
        const data = weatherday.filter(weather => weather.date_epoch === Number(param.epoch))
        setWeatherDay(...data)
    }, [])
  const handleBack = () => {
    navigate('/')
  }
  return (
    <>
      {
        !!weatherDay ?
          <div className=' 2xl:flex 2xl:justify-center 2xl:items-center 2xl:h-[100vh] w-full '>
            <div className='w-[99%] mx-auto 2xl:w-[1300px] 2xl:bg-white 2xl:py-[30px]'>
              <IoArrowBackOutline className='text-[40px]' onClick={handleBack} />
              <h1 className='text-center my-[30px] lg:text-[30px] font-bold'>HÀ NỘI - VIỆT NAM</h1>
              <p className='text-center text-[30px] mb-[30px]'>{weatherDay.date}</p>
              <ChartDay weatherDay={weatherDay} />
              <RenderDay />
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
