/* eslint-disable no-unused-vars */
import axios from 'axios';

export const GET_DATA = 'covid-tracking/dataReducer/GET_DATA';
export const SET_COUNTRIES_TO_SHOW = 'covid-tracking/dataReducer/SET_COUNTRIES_TO_SHOW';
export const NEXT_ELEMENTS = 'covid-tracking/dataReducer/NEXT_ELEMENTS';
export const PREV_ELEMENTS = 'covid-tracking/dataReducer/PREV_ELEMENTS';

export const fetchData = () => async (dispatch, getState) => {
  await axios.get('https://disease.sh/v3/covid-19/countries')
    .then((res) => {
      const arr = res.data.map((e, index) => {
        const cont = {};
        cont.id = index;
        cont.country = e.country;
        cont.flag = e.countryInfo.flag;
        cont.cases = e.cases;
        cont.todayCases = e.todayCases;
        cont.deaths = e.deaths;
        cont.todayDeaths = e.todayDeaths;
        cont.recovered = e.recovered;
        cont.todayRecovered = e.todayRecovered;
        cont.active = e.active;
        cont.critical = e.critical;
        cont.population = e.population;
        return cont;
      });
      const indexToShow = getState().dataReducer[0];
      const toShow = arr.filter((e, index) => index === indexToShow[index]);
      dispatch({
        type: GET_DATA,
        payload: [arr, toShow],
      });
    });
};

export const nextElements = (arr) => ({
  type: NEXT_ELEMENTS,
  payload: arr,
});

export const nextCountries = (arr) => ({
  type: SET_COUNTRIES_TO_SHOW,
  payload: arr,
});

const initialState = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, action.payload[0], action.payload[1]];
    case SET_COUNTRIES_TO_SHOW: {
      const newState = [...state];
      newState[2] = action.payload;
      return newState;
    }
    case NEXT_ELEMENTS: {
      const newState = [...state];
      newState[0] = action.payload;
      return newState;
    }

    default:
      return state;
  }
};
