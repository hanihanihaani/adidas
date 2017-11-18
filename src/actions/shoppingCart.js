import api from '../service/api';
import {message} from 'antd';


export const SHOPPING_CART_START = 'SHOPPING_CART_START';
export const SHOPPING_CART_SUCCESS = 'SHOPPING_CART_SUCCESS';
export const SHOPPING_CART_ERROR = 'SHOPPING_CART_ERROR';

export const SHOPPING_DEL_START = 'SHOPPING_DEL_START';
export const SHOPPING_DEL_SUCCESS = 'SHOPPING_DEL_SUCCESS';
export const SHOPPING_DEL_ERROR = 'SHOPPING_DEL_ERROR';

export const SHOPPING_VAL = 'SHOPPING_VAL';


export const cartValid = (num) => ({
  type:SHOPPING_VAL,
  payload:num
})

export const getCartStart = () => ({
  type:SHOPPING_CART_START
})
export const getCartSuccess = (docs) => ({
  type:SHOPPING_CART_SUCCESS,
  payload:docs
})
export const getCartError = () => ({
  type:SHOPPING_CART_ERROR
})

export const getCart = () => {
  return (dispatch,getState) => {
    dispatch(getCartStart());
    api.getCart().then((res) => {
      if (res.OK) {
        dispatch(getCartSuccess(res.docs))
        console.log("res docs",res.docs)
      } else {
        message.error(res.message);
        dispatch(getCartError())
      }
    })
  }
}

export const delCartStart = () => ({
  type:SHOPPING_DEL_START
})
export const delCartSuccess = (id) => ({
  type:SHOPPING_DEL_SUCCESS,
  payload:id
})
export const delCartError = () => ({
  type:SHOPPING_DEL_ERROR
})

export const delCart = (id) => {
  return (dispatch,getState) => {
    dispatch(delCartStart());
    api.delCart(id).then((res) => {
      if (res.OK) {
        dispatch(delCartSuccess(id))
      } else {
        message.error(res.message);
        dispatch(delCartError())
      }
    })
  }
}