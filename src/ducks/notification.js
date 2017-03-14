// Actions
export const SET = 'csgocrosshairgen/notification/SET';
export const CLEAR = 'csgocrosshairgen/notification/CLEAR';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET:
      return {
        message: action.payload,
      };

    case CLEAR:
      return {};

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
