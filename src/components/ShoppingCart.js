import React, {Component} from 'react';
import { Button, Icon, message, Spin, Badge } from 'antd';
import CartItem from './CartItem';
import api from '../service/api';
import "../css/shoppingcart.css";


class ShoppingCart extends Component {
  state = {
    showList:false,
    cartList:[],
    isFetching:false,
  }
  handleMouseOver() {
    this.setState({
      showList:true,
      isFetching:true
    })
    this.getCart();
  }
  handleMouseOut() {
    this.setState({
      showList:false
    })
  }
  getCart() {
    api.getCart().then((res) => {
      if (res.OK) {
        console.log("res.docs",res.docs);
        return this.setState({
          cartList:res.docs,
          isFetching:false,
        })
      } else {
        message.error(res.message);
      }
    })
  }
  delCart(id) {
    this.setState({isFetching:true})
    api.delCart(id).then((res) => {
      if (res.OK) {
        this.getCart()
      }
    })
  }
  render() {
    const {cartList,isFetching,showList} = this.state;
    let count=0; 
    let sum=0;
    return(
      <div className="shoppingcart"
            onMouseLeave={this.handleMouseOut.bind(this)}
      >
        <Button
          className="btn-cart"
          onMouseOver={this.handleMouseOver.bind(this)}
        >
        <Badge count={cartList.length} showZero>
        购物车
         <Icon type={"shopping-cart"}/>
        </Badge>
        </Button>
        {
          showList ? 
          <div className="cart">
           {
            isFetching ?
            <Spin/>
            :
            <div className="cartList">
              {
                cartList.length > 0 ?
                cartList.map((cart,i) => {
                  count += cart.num;
                  sum += cart.num * cart.product.price;
                  return (
                    <CartItem
                      product={cart.product}
                      num={cart.num}
                      key={i}
                      delCart={() => this.delCart(cart._id)}
                    />
                  )
                })
                :<p>购物车空空如也</p>
              }
              <div className="cartFooter">
                <p>共{count}件商品，共计￥{sum.toFixed(2)}</p>
                <Button>去购物车</Button>
              </div>
            </div>
           }
          </div>
          : null
        }
      </div>
    )
  }
}

export default ShoppingCart;