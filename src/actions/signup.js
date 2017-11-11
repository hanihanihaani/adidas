import {signup} from '../service/api';
import {navUsername} from './nav';
import {message} from 'antd';
import history from '../service/history';


export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';


export const signupStart = () => ({
  type:SIGNUP_START
})

export const signupSuccess = (resJson) => ({
  type:SIGNUP_SUCCESS,
  payload:resJson,
})

export const signupError = (message) => ({
  type:SIGNUP_ERROR,
  payload:message,
})

export const signupSubmit = (form) => {
  return (dispatch,getState) => {
    dispatch(signupStart());
    signup(form).then((resJson) => {
      if (resJson.OK) {
        dispatch(signupSuccess(resJson.user));
        return dispatch(navUsername(resJson.user.username));
       // message.success('登录成功')
        //dispatch(navUsername(resJson.user.username));
        //return history.push('/')
      } else {
        message.error(resJson.message);
        return dispatch(signupError(resJson.message));
      }
    }).catch((err) => {
      message.error('注册失败，请检查网络');
      dispatch(signupError(err.toString()));
    })
  }
}