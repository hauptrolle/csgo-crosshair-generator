// Actions
export const CONFIG_SET = 'csgocrosshairgen/config/SET';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case CONFIG_SET:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}

// Action Creators
export function setConfig(payload) {
  return { type: CONFIG_SET, payload };
}
