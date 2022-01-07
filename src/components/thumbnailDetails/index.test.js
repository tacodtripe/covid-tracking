/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import ThumbnailDetails from './index';
import { checkProps, findByTestAtr } from '../../../utils/testUtils';

const setUp = (props = {}) => {
  const component = shallow(<ThumbnailDetails {...props} />);
  return component;
};

describe('Thumbnail component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw warning about prop types', () => {
      const expectedProps = {
        country: 'demo country',
        flag: 'demo flag url',
        cases: 1000,
        todayCases: 12,
        deaths: 2,
        todayDeaths: 3,
        recovered: 1,
        todayRecovered: 4,
        active: 2,
        critical: 5,
        population: 123123133,
      };
      const propsErr = checkProps(ThumbnailDetails, expectedProps);
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
        todayCases: 12,
        deaths: 2,
        todayDeaths: 3,
        recovered: 1,
        todayRecovered: 4,
        active: 2,
        critical: 5,
        population: 123123133,
      };
      component = setUp(props);
    });
    it('Renders without errors', () => {
      const wrapper = findByTestAtr(component, 'thumbnailDetails');
      expect(wrapper.length).toBe(1);
    });
    it('Renders total deaths', () => {
      const wrapper = findByTestAtr(component, 'totalDeaths');
      expect(wrapper.length).toBe(1);
    });
    it('Renders today deaths', () => {
      const wrapper = findByTestAtr(component, 'todayDeaths');
      expect(wrapper.length).toBe(1);
    });
    it('Renders recovered cases', () => {
      const wrapper = findByTestAtr(component, 'recovered');
      expect(wrapper.length).toBe(1);
    });
    it('Renders today recovered cases', () => {
      const wrapper = findByTestAtr(component, 'todayRecovered');
      expect(wrapper.length).toBe(1);
    });
    it('Renders active cases', () => {
      const wrapper = findByTestAtr(component, 'active');
      expect(wrapper.length).toBe(1);
    });
    it('Renders critical cases', () => {
      const wrapper = findByTestAtr(component, 'critical');
      expect(wrapper.length).toBe(1);
    });
    it('Renders country population', () => {
      const wrapper = findByTestAtr(component, 'population');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Component has NO props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it('Does not render', () => {
      const wrapper = findByTestAtr(component, 'thumbnailDetails');
      expect(wrapper.length).toBe(0);
    });
  });
});
