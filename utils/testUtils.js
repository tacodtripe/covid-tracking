/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';

export const findByTestAtr = (component, atr) => {
  const wrapper = component.find(`[data-test='${atr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};
