import *as Types from "../contains";

export const fetchDataRequest = () => ({
    type:Types.FETCH_DATA_REQUEST,
});

export function fetchDataSuccess(weather) {
    return {
      type:Types.FETCH_DATA_SUCCESS,
      weather
    };
  }