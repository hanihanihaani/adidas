import React, {Component} from 'react';
import Contact from '../components/Contact';
import '../css/order.css';

class Order extends Component {
  render() {
    return(
      <div className="order">
        <h1>订单页</h1>  
        <Contact/>
      </div>
    )
  }
}

export default Order;