/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { reducer, middlewares } from '../src/redux/store';

export const findByTestAtr = (component, atr) => {
  const wrapper = component.find(`[data-test='${atr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};
