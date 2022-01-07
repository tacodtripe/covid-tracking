import React from 'react';
import { shallow } from 'enzyme';
import findByTestAtr from '../../../utils/testUtils';

import Navbar from './index';

const setUp = () => {
  const component = shallow(<Navbar />);
  return component;
};

describe('Navbar component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtr(component, 'navbarContainer');
    expect(wrapper.length).toBe(1);
  });

  it('Should display the year', () => {
    const wrapper = findByTestAtr(component, 'yearDisplay');
    expect(wrapper.length).toBe(1);
  });

  it('Should display the title', () => {
    const wrapper = findByTestAtr(component, 'title');
    expect(wrapper.length).toBe(1);
  });

  it('Should display two icons', () => {
    const wrapper = findByTestAtr(component, 'icon');
    expect(wrapper.length).toBe(2);
  });
});
