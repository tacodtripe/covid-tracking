/* eslint-disable no-unused-vars */
import axios from 'axios';

export const GET_DATA = 'covid-tracking/dataReducer/GET_DATA';

export const fetchData = () => async (dispatch) => {
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
      dispatch({
        type: GET_DATA,
        payload: arr,
      });
    });
};

const initialState = [];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};
