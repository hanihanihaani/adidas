import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/Nav.css";
import { Layout, Menu, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class Nav extends Component {
  static propTypes = {
    username:PropTypes.string.isRequired
  }
  render () {
    return (
      <div className='nav'>
          <Layout>
            <Header>
             <div className='logo'/>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                  <SubMenu title={<span>男子</span>}>
                      <Menu.Item key="setting:1">最新活动</Menu.Item>
                      <Menu.Item key="setting:2">鞋类</Menu.Item>
                      <Menu.Item key="setting:3">服饰类</Menu.Item>
                      <Menu.Item key="setting:4">配件类</Menu.Item>
                      <Menu.Item key="setting:5">运动分类</Menu.Item>
                  </SubMenu>
                  <SubMenu title={<span>女子</span>}>
                      <Menu.Item key="setting:1">最新活动</Menu.Item>
                      <Menu.Item key="setting:2">鞋类</Menu.Item>
                      <Menu.Item key="setting:3">服饰类</Menu.Item>
                      <Menu.Item key="setting:4">配件类</Menu.Item>
                      <Menu.Item key="setting:5">运动分类</Menu.Item>
                  </SubMenu>
                  <SubMenu title={<span>童装</span>}>
                      <Menu.Item key="setting:1">最新活动</Menu.Item>
                      <Menu.Item key="setting:2">大童</Menu.Item>
                      <Menu.Item key="setting:3">小童</Menu.Item>
                      <Menu.Item key="setting:4">婴幼儿</Menu.Item>
                  </SubMenu>
                  <SubMenu title={<span>运动</span>}>
                      <Menu.Item key="setting:1">跑步</Menu.Item>
                      <Menu.Item key="setting:2">训练</Menu.Item>
                      <Menu.Item key="setting:3">足球</Menu.Item>
                      <Menu.Item key="setting:4">篮球</Menu.Item>
                      <Menu.Item key="setting:5">户外</Menu.Item>
                      <Menu.Item key="setting:6">其他运动</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="5">品牌</Menu.Item>
                  <SubMenu title={<span>miadidas定制</span>}>
                      <Menu.Item key="setting:1">女子</Menu.Item>
                      <Menu.Item key="setting:2">男子</Menu.Item>
                      <Menu.Item key="setting:3">颜色</Menu.Item>
                      <Menu.Item key="setting:4">个性印制定品</Menu.Item>
                      <Menu.Item key="setting:5">发现更多</Menu.Item>
                  </SubMenu>
              </Menu>
              {
                 this.props.username ?
                <Link to="/user">
                  <Button icon="user">
                  <span>{this.state.username}</span>
                  </Button>
                </Link>
                :
                <div>
                  <Link to="/login">
                    <Button className="login">登录</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="signup">注册</Button>
                  </Link>
                </div>
              }
            </Header>
          </Layout>
      </div>
    )
  }
}

export default Nav;