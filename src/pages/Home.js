import React, {Component} from 'react';
import { Carousel, Row, Col} from 'antd';
import api from '../service/api';
import ProductCard from '../components/ProductCard';
import '../css/home.css';

const imgs = [
  {
    img:"imgs/1.jpg"
  },
  {
    img:"imgs/2.jpg"
  },
  {
    img:"imgs/3.jpg"
  }
] 
class Home extends Component {
  state = {
    allPros:[]
  }
  getAllPros() {
    api.getPro().then((resJson) => {
      if (resJson.OK) {
        this.setState({allPros:resJson.docs})
      }
    })
  }
  componentWillMount() {
    this.getAllPros();
  }
  render () {
    return (
      <div className="carousel">
        <Carousel autoplay>
          {
            imgs.map((img,i) => {
              return (
                  <div key={i}>
                    <img src={img.img} alt="图片"/>
                  </div>
                )
            })
          }
        </Carousel>
        <div className="product">
          <Row>
            {
              this.state.allPros.map((product,i) => (
                  <Col span={8} key={i}>
                    <ProductCard key={i} product={product}/>
                  </Col>
                ))
              }
          </Row>
        </div>
      </div>
    )
  }
}

export default Home