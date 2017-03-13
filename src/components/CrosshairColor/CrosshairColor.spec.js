import React from 'react';
import { shallow } from 'enzyme';
import CrosshairColor from './CrosshairColor';
import Button from '../Button';

describe('CrosshairColor', () => {
  const mockFunc = jest.fn();
  const component = shallow(<CrosshairColor
    setConfigAction={mockFunc}
    activeColor="1"
  />);

  it('should display the label', () => {
    expect(component.find('.label').text()).toEqual('Color:');
  });

  it('should render 5 Button components', () => {
    expect(component.find(Button).length).toEqual(5);
  });

  it('should pass the setConfigAction to the buttons', () => {
    const firstButton = component.find(Button).at(0);
    expect(firstButton.prop('onClick')).toEqual(mockFunc);
  });

  it('should set the isActive prop of the first button according to the activeColor', () => {
    const firstButton = component.find(Button).at(0);
    expect(firstButton.prop('isActive')).toEqual(true);
  });

  it('should set the isActive prop of the second button according to the activeColor', () => {
    const firstButton = component.find(Button).at(1);
    expect(firstButton.prop('isActive')).toEqual(false);
  });
});
