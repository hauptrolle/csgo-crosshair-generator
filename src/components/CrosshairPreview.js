import React, { PropTypes } from 'react';

const propTypes = {
  config: PropTypes.object.isRequired,
};

const CrosshairPreview = ({ config }) => (
  <div className="crosshair-preview">
    preview
  </div>
);

CrosshairPreview.propTypes = propTypes;
export default CrosshairPreview;
