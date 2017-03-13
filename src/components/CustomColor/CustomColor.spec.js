import React from 'react';
import { shallow } from 'enzyme';
import CustomColor from './CustomColor';
import Slider from '../Slider';

const config = {
  cl_crosshaircolor_r: '10',
};

describe('CustomColor', () => {
  const mockFunc = jest.fn();
  const component = shallow(<CustomColor
    onChange={mockFunc}
    config={config}
  />);

  it('should render 3 Slider components', () => {
    expect(component.find(Slider).length).toEqual(3);
  });

  it('should pass the onChange function to the sliders', () => {
    expect(component.find(Slider).at(0).prop('onChange')).toEqual(mockFunc);
  });

  it('should pass the defaultValue to the sliders', () => {
    expect(component.find(Slider).at(0).prop('defaultValue')).toEqual(10);
  });
});
