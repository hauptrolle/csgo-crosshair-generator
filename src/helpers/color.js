export const getPreviewColor = (config) => {
  let alpha = (config.cl_crosshairalpha / 255);

  if (config.cl_crosshairusealpha === '0') {
    alpha = 1;
  }

  if (config.cl_crosshaircolor === '1') {
    return `rgba(0, 255, 0, ${alpha})`;
  }

  if (config.cl_crosshaircolor === '2') {
    return `rgba(255, 255, 0, ${alpha})`;
  }

  if (config.cl_crosshaircolor === '3') {
    return `rgba(0, 0, 255, ${alpha})`;
  }

  if (config.cl_crosshaircolor === '4') {
    return `rgba(0, 255, 255, ${alpha})`;
  }

  const r = parseInt(config.cl_crosshaircolor_r, 10);
  const g = parseInt(config.cl_crosshaircolor_g, 10);
  const b = parseInt(config.cl_crosshaircolor_b, 10);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
