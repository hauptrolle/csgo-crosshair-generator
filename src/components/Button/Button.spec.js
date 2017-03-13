import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const clickMock = jest.fn();
  const component = shallow(<Button
    label="Demo Button"
    name="demo_name"
    value="5"
    onClick={clickMock}
    itActive={false}
  />);

  it('should display the label', () => {
    expect(component.text()).toEqual('Demo Button');
  });

  it('should call the onClick handler with name and value', () => {
    component.simulate('click');
    expect(clickMock).toHaveBeenCalledWith({ demo_name: '5' });
  });

  it('should get an active class when itActive is true', () => {
    component.setProps({ isActive: true });
    expect(component.prop('className')).toContain('button-active');
  });
});
