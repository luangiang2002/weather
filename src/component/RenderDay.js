import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
function RenderDay() {
    const weatherday = useSelector(state => state.weather.weather.forecast.forecastday)
    const [weatherDay, setWeatherDay] = useState(null)
    const param = useParams()
    useEffect(() => {
        const data = weatherday.filter(weather => weather.date_epoch === Number(param.epoch))

        setWeatherDay(...data)
    }, [])

    return (
        !!weatherDay ?
        <div className ="renderday" >
        <div className=' mt-8'>
            <Slider
                infinite={false}
                slidesToShow={8}
                slidesToScroll={8}
                arrows={false}
                draggable={true}
            >
                {
                    weatherDay.hour.map((item, index) => {
                        return (
                            <div className='block ' draggable="true"  >
                                <div className='text-center  mx-[10px] itemday' key={index} >
                                    <p> {item.time.split(" ")[1]} </p>
                                    <img src={item.condition.icon} alt="" className='mx-auto my-[5px]' />
                                    <p className='text-[12px]'>{item.condition.text}</p>
                                    <p>{item.humidity}%</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
        : <>loading</>
        )
    }
    export default RenderDay