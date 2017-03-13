import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
  const clickMock = jest.fn();
  const component = shallow(<Toggle
    label="Demo Toggle"
    name="demo_name"
    value="1"
    onClick={clickMock}
    itActive={false}
  />);

  it('should render a html button', () => {
    expect(component.find('button').length).toEqual(1);
  });

  it('should call the onClick handler with name and an invertet value', () => {
    component.find('button').simulate('click');
    expect(clickMock).toHaveBeenCalledWith({ demo_name: '0' });
  });

  it('should get an active class when itActive is true', () => {
    component.setProps({ isActive: true });
    expect(component.find('button').prop('className')).toContain('toggle-active');
  });
});
