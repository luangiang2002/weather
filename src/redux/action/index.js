import *as Types from "../contains";
export function fetchDataSuccess(weather) {
    return {
      type:Types.FETCH_DATA_SUCCESS,
      weather
    };
  }