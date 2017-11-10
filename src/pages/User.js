import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row,Col,Card,Button} from 'antd';



class User extends Component {
  state = {
    user:{}
  }
  render () {
    const { user } = this.state;
    return (
     <div className="user">
         <Row>
           <Col span={8} className="left">
              <h1>用户信息</h1>
               <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-card">
                  <h3>用户名：{user.username}</h3>
                  <p>注册时间：{user.createAt}</p>
                  <Link to="/user/setting">
                    <Button>设置中心</Button>
                  </Link>
                  <Link to="/user/artical">
                    <Button>文章列表</Button>
                  </Link>
                </div>
              </Card>
           </Col>
         </Row>
     </div>
    )
  }
}

export default User;