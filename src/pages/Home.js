import React, {Component} from 'react';
import { Carousel } from 'antd';
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
      </div>
    )
  }
}

export default Home