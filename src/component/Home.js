import React from 'react'
import { useSelector } from 'react-redux'
import HomeSidebar from './HomeSidebar'
import Chart from './Chart'
import HomeDay from './HomeDay'

const Home = () => {
    const weather = useSelector(state => state.weather.weather)
  return (
    <>
    {
      !!weather ?
        <>
          <div className='items-center xl:flex justify-center h-[100vh] w-full block'>
            <div className='app p-[20px] overflow-hidden sm:flex justify-arounde xl:w-[1000px] sm:justify-center  xl:bg-white relative '>
              <h1 className='top-11 left-1/2 absolute text-[30px] font-bold city'>{weather.location.name}</h1>
              <div className=' my-[20px]'>
                <HomeSidebar />
              </div>
              <div className=''>
                <div className='w-full mt-[100px] sm:p-[30px]'>
                  <h1>Temperature Chart</h1>
                </div>
                <div className='w-full'>
                  <Chart />
                </div>
                <div className='flex justify-between item-end  w-full mt-[10px] sm:p-[30px]'>
                  <HomeDay />
                </div>
              </div>
            </div>
          </div>
        </>
        : <></>
    }
  </>
  )
}

export default Home