import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "../css/login.css";
import PropTypes from 'prop-types';
import { saveUser } from '../service/getUser';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  static propTypes = {
    isFetching:PropTypes.bool.isRequired,
    actions:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
    error:PropTypes.bool,
    message:PropTypes.string
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.username) {
      this.props.history.push('/home');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.actions.loginThunk(values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="log">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>欢迎登录</h1>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className="remember">Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm)
export default Login;