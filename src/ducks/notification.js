// Actions
export const SET = 'csgocrosshairgen/notification/SET';
export const CLEAR = 'csgocrosshairgen/notification/CLEAR';

const defaultState = {
  message: '',
  visible: false,
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET:
      return {
        message: action.payload,
        visible: true,
      };

    case CLEAR:
      return {
        ...state,
        visible: false,
      };

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
