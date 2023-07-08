import {fetchDataSuccess} from "./index";
export const fetchWeather=()=>async dispatch=>{
    try {
      const url="http://api.weatherapi.com/v1/forecast.json?q=hanoi&days=10&aqi=no&alerts=yes&key=f5ac4be4a19c47d8a3e42522222112";
      const response=await fetch(url);
      const responseBody=await response.json()
      dispatch(fetchDataSuccess(responseBody))
    } catch (error) {
      console.log(error);
    }
}