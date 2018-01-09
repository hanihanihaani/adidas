import React, { Component }  from 'react';
import { Row, Col, Menu } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import UploadImg from '../components/UploadImg';
import AddProduct from './AddProduct';
import ModifyCategory from './ModifyCategory';
import AddCategory from './AddCategory';
import DelProduct from './DelProduct';
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
                <Link to="/manage/addproduct">商品管理</Link>
              </MenuItem>
               <MenuItem>
                <Link to="/manage/delproduct">删除商品</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/manage/upload">上传图片</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/manage/modifycategory">修改分类</Link>
              </MenuItem>
            </Menu>
          </Col>
          <Col xs={24} sm={16} md={20}>
          <h1>展示中心</h1>
            <Switch>
              <Route path="/manage/upload" render={() => (
                  <UploadImg max={3}
                  getImgList={() => {}}
                  action="http://localhost:3000/upload"
                  />
                )}/>
              <Route path="/manage/addproduct" component={AddProduct}/>
              <Route path="/manage/addcategory" component={AddCategory}/>
              <Route path="/manage/modifycategory" component={ModifyCategory}/>
              <Route path="/manage/delproduct" component={DelProduct}/>
            </Switch>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Manage;