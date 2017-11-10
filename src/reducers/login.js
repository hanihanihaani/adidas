import { LOGIN_SUBMIT_START, LOGIN_SUBMIT_PROMISE } from '../actions/login';

const defaultState = {
  isFetching:false,
  user:{},
}

const login = (state=defaultState,action) => {
  switch (action.type) {
    case LOGIN_SUBMIT_START:
      return {isFetching:true,user:{}}
    case LOGIN_SUBMIT_PROMISE:
      if (!action.error && action.payload.OK) {
        return {isFetching:true,user:action.payload.user}
      } else {
        return {isFetching:false,user:{},message:action.payload,error:true}
      }
    default:
      return state;
  }
}

export default login;