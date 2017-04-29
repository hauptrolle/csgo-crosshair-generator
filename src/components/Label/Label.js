// @flow

import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  margin-right: 20px;
  flex: 0 0 100px;
`;

type Props = {
  label: String};

const Label = ({ label } : Props) => (
  <Root>
    {label}
  </Root>
);

export default Label;
