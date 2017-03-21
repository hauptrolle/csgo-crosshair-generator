import React from 'react';
import CSSModules from 'react-css-modules';
import { copyNotification } from '../../helpers/copyNotification';

import styles from './header.css';

type Props = {
  config: Object,
  setNotificationAction: Function,
};

const getFormattedConfig = config => Object.keys(config).map(key => `${key} "${config[key]}"\n`).join('');
const getConsoleConfig = config => Object.keys(config).map(key => `${key} "${config[key]}"`).join(';');

const Header = ({ config, setNotificationAction }: Props) => (
  <div styleName="root">
    <div styleName="inner">
      <div>
        <span>CS:GO</span> Crosshair Generator
            </div>
      <div>
        <button
          styleName="button secondary"
          onClick={() => copyNotification('Share Url copied', window.location.href, setNotificationAction)}
        >
          Share Crosshair
              </button>

        <button
          styleName="button"
          onClick={() => copyNotification('Config copied', getFormattedConfig(config), setNotificationAction)}
        >
          Copy for Config
          </button>

        <button
          styleName="button"
          onClick={() => copyNotification('Config copied', getConsoleConfig(config), setNotificationAction)}
        >
          Copy for Console
          </button>
      </div>
    </div>
  </div>
);

export default CSSModules(Header, styles, { allowMultiple: true });
