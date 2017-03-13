export const getPreviewColor = (config) => {
  // Todo: add alpha chanel based on cl_crosshairalpha
  if (config.cl_crosshaircolor === '1') {
    return 'rgb(0, 255, 0)';
  }

  if (config.cl_crosshaircolor === '2') {
    return 'rgb(255, 255, 0)';
  }

  if (config.cl_crosshaircolor === '3') {
    return 'rgb(0, 0, 255)';
  }

  if (config.cl_crosshaircolor === '4') {
    return 'rgb(0, 255, 255)';
  }

  const r = parseInt(config.cl_crosshaircolor_r, 10);
  const g = parseInt(config.cl_crosshaircolor_g, 10);
  const b = parseInt(config.cl_crosshaircolor_b, 10);
  return `rgb(${r}, ${g}, ${b})`;
};
