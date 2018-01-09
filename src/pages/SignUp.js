import React from 'react';
import { Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
import "../css/signup.css";
import PropTypes from 'prop-types';
import api from '../service/api';
const FormItem = Form.Item;
const Option = Select.Option;


class RegistrationForm extends React.Component {
  static propTypes = {
    signup:PropTypes.func.isRequired,
    isFetching:PropTypes.bool.isRequired,
    error:PropTypes.bool,
  }

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    // captcha:""
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.signup(values);
      }
   })     
  }
  // getCaptcha() {
  //   api.captcha().then((data) => {
  //   console.log("cap：",data);
  //    this.setState({
  //       captcha:data.captcha
  //     })
  //   })
  // }
  // componentDidMount() {
  //   this.getCaptcha();
  // }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // const capImg = (<img style={{height:28,cursor:"pointer"}}
    //   onClick={()=>this.getCaptcha()}
    //   src={"data: image/jpg; base64,"+ this.state.captcha} 
    //   alt="captcha"/>)
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <div className="sign">
        <Form onSubmit={this.handleSubmit}>
           <FormItem
            {...formItemLayout}
            label="用户名"
            hasFeedback
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名不能为空', whitespace: true },
                {pattern:/^[a-zA-Z][a-zA-Z0-9_-]{3,19}$/,message:"用户名必须是字母开头，包含数字，字母，的4-20位字符"}
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="电子邮箱"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, 
              {
                pattern:/((?=.*[\d])(?=.*[^\d])).{8,}|((?=.*[^A-Za-z])(?=.*[a-zA-Z])).{8,}/,
                message:"密码必须符合复杂性要求"
              },
              {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit"
            >注册</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const SignUp = Form.create()(RegistrationForm);
export default SignUp;