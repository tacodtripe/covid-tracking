/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import MainThumbnail from './index';
import { checkProps, findByTestAtr } from '../../../utils/testUtils';

const setUp = (props = {}) => {
  const component = shallow(<MainThumbnail {...props} />);
  return component;
};

describe('MainThumbnail component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw warning about prop types', () => {
      const expectedProps = {
        country: 'demo country',
        flag: 'demo flag url',
        cases: 1000,
        todayCases: 12,
      };
      const propsErr = checkProps(MainThumbnail, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component has props', () => {
    let component;
    beforeEach(() => {
      const props = {
        country: 'demo country',
        flag: 'demo flag url',
        cases: 1000,
        todayCases: 123,
      };
      component = setUp(props);
    });
    it('Renders without errors', () => {
      const wrapper = findByTestAtr(component, 'mainThumbnail');
      expect(wrapper.length).toBe(1);
    });
    it('Renders country name', () => {
      const wrapper = findByTestAtr(component, 'countryName');
      expect(wrapper.length).toBe(1);
    });
    it('Renders total cases', () => {
      const wrapper = findByTestAtr(component, 'totalCases');
      expect(wrapper.length).toBe(1);
    });
    it('Renders today cases', () => {
      const wrapper = findByTestAtr(component, 'todayCases');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Component has NO props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it('Does not render', () => {
      const wrapper = findByTestAtr(component, 'mainThumbnail');
      expect(wrapper.length).toBe(0);
    });
  });
});
