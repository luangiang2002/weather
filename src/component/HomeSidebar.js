import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../redux/action/FetchApi';

export default function HomeSidebar() {
    const weather = useSelector(state => state.weather.weather)
    const inputRef=useRef(null)
    let time = new Date().toLocaleDateString();
    const [currentTime, SetCurrentTime] = useState(time)
    const dispatch=useDispatch()
    const handleInput=(e)=>{
        if (e.key === 'Enter'){
            dispatch(fetchWeather(e.target.value))

        }
    }


    useEffect(() => {
        inputRef.current.addEventListener('keypress',handleInput)
        const updateTime = () => {
            let time = new Date().toLocaleTimeString();
            SetCurrentTime(time)
        }
        setInterval(updateTime, 1000)
    },[])
    let date = new Date().toDateString();
    
    return (
        <>

            <div className='flex mb-[30px] w-full'>
                <p className='w-full  text-[25px]'>Your city :</p>
                <input ref={inputRef} type="text" className='border border-black  outline-none rounded w-full px-[10px]  h-[40px] '  />
            </div>
            <div className='text-center time'>
                <p className='xl:text-[30px] sm:my-[80px]'>{date} - {currentTime}</p>
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
