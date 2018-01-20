

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

