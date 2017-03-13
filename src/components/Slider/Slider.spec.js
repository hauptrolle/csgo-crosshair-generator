import React from 'react';
import { shallow } from 'enzyme';

import RCSlider from 'rc-slider/lib/Slider';
import Slider from './Slider';

describe('Slider', () => {
  const clickMock = jest.fn();
  const component = shallow(<Slider
    name="demo_name"
    label="Demo Slider"
    onChange={clickMock}
    min={0}
    max={100}
    value={5}
  />);

  it('should render a RCSlider component', () => {
    expect(component.find(RCSlider).length).toEqual(1);
  });
});
