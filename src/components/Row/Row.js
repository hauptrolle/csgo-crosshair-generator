// @flow

import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
  height: 40px;
`;

type Props = {
  children: Object
};

const Label = ({ children } : Props) => (
  <Root>
    {children}
  </Root>
);

export default Label;
