// @flow

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${props => props.isActive ? props.theme.primary : '#fff'};
  cursor: pointer;
  margin-right: 10px;
  background: none;
  font-size: 100%;
  border-radius: 3px;
  border: 2px solid ${props => props.isActive ? props.theme.primary : '#d3d3d3'};

  &:focus, &:active {
    outline: none;
  }
`;

type Props = {
    label: string,
    name: string,
    value: string,
    onClick: Function,
    isActive: Boolean,
};

const defaultProps = {
  isActive: false,
};

const Button = ({ label, name, value, onClick, isActive } : Props) => (
  <StyledButton onClick={() => onClick({ [name]: value })} isActive={isActive}>
    {label}
  </StyledButton>
);

Button.defaultProps = defaultProps;
export default Button;
