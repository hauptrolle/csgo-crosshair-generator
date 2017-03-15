// Actions
export const SET = 'csgocrosshairgen/notification/SET';
export const CLEAR = 'csgocrosshairgen/notification/CLEAR';

const defaultState = {
  message: '',
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET:
      return {
        message: action.payload,
      };

    case CLEAR:
      return defaultState;

    default:
      return state;
  }
}

// Action Creators
export function setNotification(payload) {
  return { type: SET, payload };
}

export function clearNotification() {
  return { type: CLEAR };
}
