// Auth Action Code Here
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGN_UP } from "./auth.actionTypes";

export const userSignUp = (data) => (dispatch) => {
  dispatch({ type: AUTH_SIGN_UP, payload: data });
};
export const userLogin = () => (dispatch) => {
  dispatch({ type: AUTH_LOGIN });
};
export const userLogout = () => (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
};
