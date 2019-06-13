import { API_C_REQ, API_C_SUCC, API_C_FAIL } from "../actions/actionTypes";

const initialState = {
  fetching: false,
  number: null,
  error: null,
  msg: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_C_REQ:
      return { ...state, fetching: true, error: null, number: action.number };
    case API_C_SUCC:
      return {
        ...state,
        fetching: false,
        number: action.number,
        msg: action.msg
      };
    case API_C_FAIL:
      return { ...state, fetching: false, msg: null, error: action.error };
    default:
      return state;
  }
}
