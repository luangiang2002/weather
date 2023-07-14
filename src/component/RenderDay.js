import React, { useEffect, useState } from 'react'
import ShowDAy from './ShowDAy';
import useSmoothHorizontalScroll from 'use-smooth-horizontal-scroll';
function RenderDay(props,rootClass = "") {
    const hour = props.weatherDay[0];
    const [show, SetShow] = useState(false)
    const [data, SetData] = useState('')
    const handleShow = (data) => {
        SetShow(show => !show);
        SetData(data)
    }
    const { scrollContainerRef, handleScroll, scrollTo } = useSmoothHorizontalScroll();
    const [draDown, setDraDown] = useState(0)
    const [draMovie, setDraMovie] = useState(0)
    const [isDrag, setIsDrag] = useState(false)
    useEffect(() => {
        if (isDrag) {
            if (draMovie < draDown) scrollTo(500);
            if (draMovie > draDown) scrollTo(-500)
        }
    }, [draDown, draMovie, isDrag, scrollTo])
    const onDragStart = (e) => {
        setIsDrag(true)
        setDraDown(e.screenX)
    }
    const onDragEnd = (e) => {
        setIsDrag(false)
    }
    const onDragEnter = (e) => {
        setDraMovie(e.screenX)
    }

    return (
        hour !== undefined && hour ?
            <div className="renderday" >
                <div className=' mt-8 scrollDay ' 
                 ref={scrollContainerRef}
                onScroll={handleScroll}
                draggable="true"
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                  >
                    {show && <ShowDAy data={data} show={show} handleShow={handleShow}/>}
                        {
                            hour.hour.map((item, index) => {
                                return (
                                    <>
                                        <div className='block ' onDoubleClick={() => handleShow(item)} key={index} draggable="false">
                                            <div className='text-center  mx-[10px] itemday' draggable="false" >
                                                <p draggable="false"> {item.time.split(" ")[1]} </p>
                                                <img src={item.condition.icon} alt="" className='mx-auto my-[5px]' draggable="false"/>
                                                <p className='text-[12px]' draggable="false">{item.condition.text}</p>
                                                <p draggable="false">{item.humidity}%</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                </div>

            </div>
            : <>loading</>
    )
}
export default RenderDay