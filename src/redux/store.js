import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { dataReducer } from './dataReducer';

const reducer = combineReducers({
  dataReducer,
});

export const middlewares = [ReduxThunk, logger];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(reducer);
