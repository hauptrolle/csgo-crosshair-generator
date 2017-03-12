import { standard } from '../presets/standard';

// Actions
export const CONFIG_SET = 'csgocrosshairgen/config/SET';
export const LOAD_PRESET = 'csgocrosshairgen/preset/LOAD';

// Reducer
export default function reducer(state = standard.config, action) {
  switch (action.type) {
    case CONFIG_SET:
      return {
        ...state,
        ...action.payload,
      };
    case LOAD_PRESET:
      return action.payload;

    default:
      return state;
  }
}

// Action Creators
export function setConfig(payload) {
  return { type: CONFIG_SET, payload };
}

export function loadPreset(payload) {
  return { type: LOAD_PRESET, payload }
}
