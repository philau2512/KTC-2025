import type { AuthActionTypes, AuthState } from "../types/authTypes";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/appConstants";

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, isAuthenticated: true, error: null };
    case LOGIN_FAILURE:
      return { loading: false, isAuthenticated: false, error: action.payload };
    default:
      return state;
  }
};
