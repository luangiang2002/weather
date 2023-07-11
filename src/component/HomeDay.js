import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function HomeDay() {
  const weather = useSelector(state => state.weather.weather.forecast.forecastday)
  
  const navigate = useNavigate();
  const handleDay = (dayEpoch) => {
    navigate( `/day/${dayEpoch}`)
  }
  return (
    <>
    {
      weather.map((weatherDay, index) => {
        return (
          <div className=' active item cursor-pointer' key={weatherDay.date_epoch} onClick={() => handleDay(weatherDay.date_epoch)} >
            <p >{
              index === 0 ? 'Today' : weatherDay.date
            }</p>
            <img src={weatherDay.day.condition.icon} alt="" className='mx-auto' />
            <p>{weatherDay.day.condition.text}</p>
            <p className=''>{weatherDay.day.avghumidity}%</p>
          </div>

        )
      })
    }
    </>
  )
}
