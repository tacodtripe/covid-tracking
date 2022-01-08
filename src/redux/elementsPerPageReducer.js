export const SET_ELEMENTS = 'covid-tracking/elementsPerPageReducer/SET_ELEMENTS';

const initialState = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const setElements = (payload) => async (dispatch) => {
  const arr = [];
  for (let i = 0; i < payload; i += 1) {
    arr.push(i);
  }
  dispatch({
    type: SET_ELEMENTS,
    payload: arr,
  });
};

export const elementsPerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ELEMENTS:
      return action.payload;
    default:
      return state;
  }
};
