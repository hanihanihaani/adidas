import {
  SHOPPING_CART_START,
  SHOPPING_CART_SUCCESS,
  SHOPPING_CART_ERROR,
  SHOPPING_DEL_START,
  SHOPPING_DEL_SUCCESS,
  SHOPPING_DEL_ERROR,
  SHOPPING_VAL
} from '../actions/shoppingCart';

const defaultState = {
  isFetching:false,
  valid:true,
  count:parseInt(localStorage.getItem("CART_COUNT") || 0, 10),
  cartList:[]
}

const shoppingCart = (state = defaultState, action) => {
  switch (action.type) {
    case SHOPPING_CART_START:
      return {...state,isFetching:true}
    case SHOPPING_CART_SUCCESS:
      localStorage.setItem("CART_COUNT",action.payload.length)
      return {...state,isFetching:false,
              valid:false,
              count:action.payload.length,
              cartList:action.payload}
    case SHOPPING_CART_ERROR:
      localStorage.removeItem("CART_COUNT")
      return {...state,isFetching:true}
   
    case SHOPPING_DEL_START:
      return {...state,isFetching:true}
    case SHOPPING_DEL_SUCCESS:
      const newCartList = state.cartList.filter((cart) => cart._id !== action.payload)
      return {...state,isFetching:false,cartList:newCartList,count:newCartList.length}
    case SHOPPING_DEL_ERROR:
      return {...state,isFetching:false}

    case SHOPPING_VAL:
      return {...state,valid:true,count:action.payload}
    default:
      return state
  }
}

export default shoppingCart;