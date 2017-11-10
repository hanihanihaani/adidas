import {NAV_USERNAME} from '../actions/nav';
import {getUser,saveUser} from '../service/getUser';

const  nav = (state=getUser()||"",action) => {
  switch(action.type) {
    case NAV_USERNAME:
      saveUser(action.payload)
      return action.payload;
    default:
      return state
  }
}

export default nav;


