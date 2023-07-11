import './App.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/action/FetchApi';
import { Suspense, lazy } from 'react'
import Chart from './component/Chart';
import HomeDay from './component/HomeDay';
import HomeSidebar from './component/HomeSidebar';
import { Route, Routes } from 'react-router-dom';
import Day from './component/Day';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeather());
  }, [])
  const weather = useSelector(state => state.weather.weather)
  const RenderWeather = () => {
    return (
      <>
        {
          !!weather ?
            <div className='items-center flex justify-center h-[100vh] w-full '>
              <div className='app p-[20px] overflow-hidden sm:flex justify-arounde xl:w-[1000px] xl:mx-auto  xl:bg-white '>
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
            :<></>
          }
      </>
    )

  }
  const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms))
  }
  const LoadComponent = lazy(async () => {
    await sleep(500)
    return {
      default: RenderWeather
    }
  })
  const LoadDay = lazy(async () => {
    await sleep(500)
    return {
      default: Day
    }
  })
  return (

    <>
      <Suspense fallback={<h1 className='bg-slate-400 text-white text-center w-[100vw] h-[100vh] text-5xl '>Loading weather...</h1>}>

        <Routes>
          <Route path='/' element={<LoadComponent />}></Route>
          <Route path='/day/:epoch' element={<LoadDay />}></Route>
        </Routes>
      </Suspense>

    </>

  )
}
export default (App)
