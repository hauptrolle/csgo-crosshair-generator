import React from 'react';
import styled from 'styled-components';
import { copyNotification } from '../../helpers/copyNotification';

type Props = {
  config: Object,
  setNotificationAction: Function,
};

const HeaderWrapper = styled.div`
  background: ${props => props.theme.colorHeader};
  width: 100%;
  font-size: 25px;
  padding: 20px  10px;
  box-shadow: 0 0 15px rgba(0,0,0,.2);
  color: #ececec;

  span {
    color: ${props => props.theme.primary};
  }
`;

const InnerHeader = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  color: ${props => props.secondary ? props.theme.primary : '#fff'};
  border: ${props => props.secondary ? `2px solid ${props.theme.primary}` : '0'};
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 10px;
  background: ${props => props.secondary ? 'transparent' : props.theme.primary};;
`;

const getFormattedConfig = config => Object.keys(config).map(key => `${key} "${config[key]}"\n`).join('');
const getConsoleConfig = config => Object.keys(config).map(key => `${key} "${config[key]}"`).join(';');

const Header = ({ config, setNotificationAction }: Props) => (
  <HeaderWrapper>
    <InnerHeader>
      <div>
        <span>CS:GO</span> Crosshair Generator
      </div>

      <div>
        <Button
          secondary
          onClick={() => copyNotification('Share Url copied', window.location.href, setNotificationAction)}
        >
          Share Crosshair
        </Button>

        <Button onClick={() => copyNotification('Config copied', getFormattedConfig(config), setNotificationAction)}>
          Copy for Config
        </Button>

        <Button onClick={() => copyNotification('Config copied', getConsoleConfig(config), setNotificationAction)}>
          Copy for Console
        </Button>
      </div>
    </InnerHeader>
  </HeaderWrapper>
);

export default Header;
