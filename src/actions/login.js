import {login} from '../service/api';

export const LOGIN_SUBMIT_START = 'LOGIN_SUBMIT_START';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR'


export const loginStart = () =>{
  type:LOGIN_SUBMIT_START
}

export const loginSuccess = (resJson) => {
  type:LOGIN_SUBMIT_SUCCESS,
  payload:resJson
}

export const loginError = () => {
  type:LOGIN_SUBMIT_ERROR,
  payload:err
}

export const loginChunk = (form) => {
  return (dispatch,getState) => {
    dispatch(loginStart());
    login(form).then((resJson) => {
      if (resJson.OK) {
        dispatch(loginSuccess(resJson.user));
      } else {
        message.error(resJson.message);
        return dispatch(loginError(resJson.message));
      }
    }).catch((err) => {
      message.error(err.toString());
      return dispatch(loginError(err.toString()))
    })
  }
}

