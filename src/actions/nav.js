import api from '../service/api';

export const NAV_USERNAME = 'NAV_USERNAME';
export const NAV_LOGOUT = 'NAV_LOGOUT';

export const navUsername = (username) => ({
  type:NAV_USERNAME,
  payload:username
})

export const navDel = () => ({
  type:NAV_LOGOUT
})

export const navLogout = () => {
  return (dispatch,getState) => {
    api.logout().then((resJson) => {

    })
    dispatch(navDel());
  }
}