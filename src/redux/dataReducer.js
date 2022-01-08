/* eslint-disable no-unused-vars */
export const GET_DATA = 'covid-tracking/dataReducer/GET_DATA';

export const dataReducer = (state = [], action) => {
  switch(action.type){
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};
