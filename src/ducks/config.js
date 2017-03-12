// Actions
export const CONFIG_SET = 'csgocrosshairgen/config/SET';

const defaultState = {
  cl_crosshairalpha: '200',
  cl_crosshaircolor: '5',
  cl_crosshaircolor_b: '50',
  cl_crosshaircolor_r: '50',
  cl_crosshaircolor_g: '250',
  cl_crosshairdot: '0',
  cl_crosshairgap: '0',
  cl_crosshairsize: '5',
  cl_crosshairstyle: '2',
  cl_crosshairusealpha: '1',
  cl_crosshairthickness: '0.5',
  cl_fixedcrosshairgap: '0',
  cl_crosshair_outline: '0',
  cl_crosshair_outline_draw: '0',
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONFIG_SET:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
export function setConfig(payload) {
  return { type: CONFIG_SET, payload };
}
