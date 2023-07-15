import './App.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/action/FetchApi';
import { Suspense, lazy } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Day from './component/Day';
import Error from './component/Error';
import Home from './component/Home';
function App() {
  const dispatch = useDispatch()
 
  const weather = useSelector(state => state.weather.weather)
  const navigate=useNavigate()
  const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms))
  }
  const LoadComponent = lazy(async () => {
    await sleep(500)
    return {
      default: Home
    }
  })
  const LoadDay = lazy(async () => {
    await sleep(500)
    return {
      default: Day
    }
  })

  useEffect(() => {
    dispatch(fetchWeather('hanoi'));
  }, [])

  useEffect(() => {
    if(weather?.error){
      navigate('/error')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather])
  

  return (

    <>
      <Suspense fallback={<h1 className='bg-slate-400 text-white text-center w-[100vw] h-[100vh] text-5xl '>Loading weather...</h1>}>

        <Routes>
          <Route path='/' element={<LoadComponent />}></Route>
          <Route path='/day/:epoch' element={<LoadDay />}></Route>
          <Route path='/error' element={<Error/>}></Route>
        </Routes>
      </Suspense>

    </>

  )
}
export default (App)
