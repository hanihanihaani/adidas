import React, { Component }  from 'react';
import { Row, Col, Menu } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import UploadImg from '../components/UploadImg';
import Product from './Product';
import AddCategory from './AddCategory';
const MenuItem = Menu.Item


class Manage extends Component {
  render () {
    return (
      <div className="manage">
        <Row>
          <Col xs={24} sm={8} md={4}>
            <h1>管理中心</h1>
            <Menu>
              <MenuItem>
                <Link to="/manage/addcategory">商品分类</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/manage/product">商品管理</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/manage/uploadimg">上传图片</Link>
              </MenuItem>
            </Menu>
          </Col>
          <Col xs={24} sm={16} md={20}>
          <h1>展示中心</h1>
            <Switch>
              <Route path="/manage/uploadimg" render={(props) => (
                  <UploadImg max={3}
                  getImgList={(list) => console.log("list",list)}
                  action="http://192.168.1.210:3000/upload"
                  />
                )}/>
              <Route path="/manage/product" component={Product}/>
              <Route path="/manage/addcategory" component={AddCategory}/>
            </Switch>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Manage;