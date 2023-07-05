import axios from "axios";
import {fetchDataSuccess} from "./index";

export function fetchWeather() {
  return dispatch => {
    axios.get(
        "http://api.weatherapi.com/v1/forecast.json?q=hanoi&days=10&aqi=no&alerts=yes&key=f5ac4be4a19c47d8a3e42522222112"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
  };
}

