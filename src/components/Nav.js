import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/Nav.css";
import { Layout, Menu, Button,Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class Nav extends Component {
  static propTypes = {
    username:PropTypes.string.isRequired,
    actions:PropTypes.object.isRequired
  }
  handleLogout() {
    this.props.actions.navLogout();
    window.location.href="/";
  }
  render () {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_self" rel="noopener noreferrer" href="/user">用户中心</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.handleLogout.bind(this)}>退出</a>
        </Menu.Item>
      </Menu>
    );
    const img = {img:'imgs/logo.png'}
    return (
      <div className='nav'>
          <Layout>
            <Header>
             <div className='logo'><img src={img.img} alt='图标'/></div>
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
                 <Dropdown overlay={menu}>
                  <Button icon="user" className="user-btn">
                     {this.props.username}<Icon type="down" />
                  </Button>
                </Dropdown>
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