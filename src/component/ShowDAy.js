import React, { useState } from 'react'

export default function ShowDAy(props) {
    let show = props.show
    let data = props.data
    const [isShow, setShow] = useState(show)
    const handleClose = () => {
        setShow(show => !show);
        console.log(show);
    }
    console.log(data);
    return (
        <>
            {
                !!data && isShow === true ?
                    <div className='w-[100vw] h-[110vh] bg-transparent absolute top-0 left-0' onClick={()=>handleClose(!show)}>
                        <div className='modal modalshow z-10'>
                            <div className='relative p-[30px]'>
                                <div className='text-center text-[20px] text-white '>
                                    <p className='mt-[29px] text-[30px] mb-3'>{data.time.split(" ")[0]}</p>
                                    <p className='text-[20px] mb-3'>{data.time.split(" ")[1]}</p>
                                    <p className='mb-3 items-center flex justify-center'><img src={data.condition.icon} alt="" /> </p>
                                    <p className='mb-3'>cloud :{data.cloud}</p>
                                    <p className='mb-3'>Temperature :{data.temp_c}</p>
                                    <p className='mb-3'>  {data.condition.text} </p>
                                    <p>wind_kph :{data.wind_kph}</p>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
        </>
    )
}
