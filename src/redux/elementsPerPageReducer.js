// export const nextElements = () => async (dispatch) => {
//   dispatch({
//     type: NEXT_ELEMENTS,
//   });
// };

// export const prevElements = (payload) => async (dispatch) => {
//   const arr = [];
//   for (let i = payload[0]; i < payload[9]; i += 1) {
//     arr.push(i - 10);
//   }
//   dispatch({
//     type: PREV_ELEMENTS,
//     payload: arr,
//   });
// };

// export const elementsPerPageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case NEXT_ELEMENTS:
//       return state.map((e) => e + 10);
//     default:
//       return state;
//   }
// };
