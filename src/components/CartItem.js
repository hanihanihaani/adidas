import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CartItem extends Component {
  static propTypes = {
    product:PropTypes.object.isRequired,
    num:PropTypes.number.isRequired,
    delCart:PropTypes.func.isRequired
  }
  render() {
    const {product,num,delCart} = this.props;
    return (
      <div className="cartItem">
        <img src={product.images[0]} alt="图片"/>
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <p>￥:{product.price}x {num}</p>
        <button onClick={delCart}>删除</button>
      </div>
    )
  }
}

export default CartItem;