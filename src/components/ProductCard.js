import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Card} from 'antd';
import {Link} from 'react-router-dom';

class ProductCard extends Component {
  static propTypes = {
    product:PropTypes.object.isRequired
  }
  render() {
    const { description, name, price, _id, images } = this.props.product;
    console.log("images",images);
    return(
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <Link to={"/product/"+_id}>
            <div className="custom-image">
              <img alt="example" width="100%" src={images[0]} />
            </div>
            <div className="custom-card">
              <h3>{name}</h3>
              <h4>{description}</h4>
              <p>价格：{price}</p>
            </div>
          </Link>
      </Card>
    )
  }
}

export default ProductCard;