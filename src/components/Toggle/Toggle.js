// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string,
  label: string,
  value: string,
  onClick: Function,
  isActive: boolean,
};

const Root = styled.button`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  background: none;
  font-size: 100%;
  border-radius: 5px;
  border: 2px solid ${props => props.active ? props.theme.success : props.theme.error};
  color: ${props => props.active ? props.theme.success : props.theme.error};
  flex: 1 0 33%;

  &:focus {
    outline: none;
  }
`;

const Toggle = ({ name, label, value, onClick, isActive }: Props) => (
  <Root
    active={isActive}
    onClick={() => onClick({ [name]: (value === '0' ? '1' : '0') })}
  >
    {label}
  </Root>
);

export default Toggle;
