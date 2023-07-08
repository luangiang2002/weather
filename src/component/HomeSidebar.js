import React from 'react'
import { useSelector } from 'react-redux'

export default function HomeSidebar() {
    const weather = useSelector(state => state.weather.weather)
    return (
        <>
            <div className='flex mb-[30px] '>
                <p className='w-[30%]'>Your city :</p>
                <input type="text" className='border outline-none rounded w-[70%]' />
            </div>
            <div className='text-center'>
                <p className='xl:text-[30px] sm:my-[80px]'>{weather.current.last_updated}</p>
                <div className='flex text-[39px] mt-[20px] justify-center'>
                    <img src={weather.current.condition.icon} alt="" />
                    <p className=''>{weather.current.temp_f}<sup>°F</sup></p>
                </div>
                <p className='text-[20px] font-bold ml-[40px] my-[20px] lg:text-[35px] sm:my-[50px]'>{weather.current.condition.text}</p>
                <div className='flex justify-center mt-[40px]'>
                    <div className='text-center mr-[40px] '>
                        <p className='xl:text-[30px]'>Humidity</p>
                        <p className='mt-[5px] font-bold xl:text-[30px]'>{weather.current.humidity}%</p>
                    </div>
                    <div>
                        <p className='xl:text-[30px] '>Wind speed</p>
                        <p className='mt-[5px] font-bold xl:text-[30px]'>{weather.current.wind_kph} km/j</p>
                    </div>
                </div>
            </div>
        </>
    )
}
