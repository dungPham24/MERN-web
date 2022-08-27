import { createReducer, createActions } from "reduxsauce";
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  checkLogin: ["data"],
  loginSuccess: ["data"],
  loginFailure: ["error"],
});
export const LoginTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: null,
  isFetching: false,
  isSuccess: false,
  isLoginSuccess: false,
  error: null,
};
/* ------------- Reducers Waiting Consumer ------------- */
export const request = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
});
export const success = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isFetching: false,
    ...action.data,
  };
};
export const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetching: false,
  isSuccess: false,
  error: action.error,
});

export const set = (state = INITIAL_STATE, action) => {
  let data = action.data || {};
  return {
    ...state,
    ...data,
  };
};

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.CHECK_LOGIN]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
};
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
