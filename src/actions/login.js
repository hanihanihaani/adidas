import {login} from '../service/api';

export const LOGIN_SUBMIT_START = 'LOGIN_SUBMIT_START';
export const LOGIN_SUBMIT_END = 'LOGIN_SUBMIT_END';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const LOGIN_SUBMIT_PROMISE = 'LOGIN_SUBMIT_PROMISE';

export const loginStart = () =>{
  type:LOGIN_SUBMIT_START
}

export const loginPromise = (form) => {
  return (dispatch,getState) => {
    dispatch(loginStart);
    dispatch({
       type:LOGIN_SUBMIT_PROMISE,
       payload:login(form)
    })
  }
}