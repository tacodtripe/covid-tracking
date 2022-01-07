import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtr } from '../../../utils/testUtils';
import ThumbnailContainer from './index';

const setUp = () => {
  const component = shallow(<ThumbnailContainer />);
  return component;
};

describe('ThumbnailContainer component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtr(component, 'thumbnailContainer');
    expect(wrapper.length).toBe(1);
  });
});
