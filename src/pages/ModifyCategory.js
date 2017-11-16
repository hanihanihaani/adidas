import React, {Component} from 'react';
import { Form, Input, Button,Transfer, Select } from 'antd';
import api from '../service/api';
const FormItem = Form.Item;
const Option = Select.Option;



class NormalCategory extends Component {
  state = {
    allCats:[],
    targetKeys:[],
    level:"2"
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        api.getCats(1).then((resJson) => {
          console.log("resJson docs",resJson.docs);
         
        })
      }
    })
  }
  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  //向后台发送请求，获取所有的二级分类，并将其添加到穿梭框中，
  getAllCat2() {
    api.getCats(2).then((resJson) => {
      if (resJson.OK) {
       this.setState({
          allCats:resJson.docs.map((cat) => ({key:cat.name,name:cat.name}))
        })
      }
    })
  }
  componentWillMount() {
    this.getAllCat2();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
    return (
      <div className="category">
        <Form onSubmit={this.handleSubmit.bind(this)} >
           <FormItem
            {...formItemLayout}
            label="分类名称"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '商品名称不能为空', whitespace: true }
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="分类等级"
            hasFeedback
          >
            {getFieldDecorator('level', {
              rules: [{ required: true, message: '分类等级不能为空', whitespace: true }
              ],
              initiaValue:"2"
            })(
              <Select style={{ width: "100%" }}
              onChange={(value) => this.setState({level:value})}
              >
                <Option value="1">一级分类</Option>
                <Option value="2">二级分类</Option>
              </Select>
            )}
          </FormItem>
           {
            this.state.level === "2" ?
            null :
             <FormItem
            {...formItemLayout}
            label="下级分类"
            hasFeedback
          >
            {getFieldDecorator('children', {
            })(
              <Transfer
                dataSource={this.state.allCats}
                showSearch
                filterOption={this.filterOption}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={item => item.name}
              />
            )}
          </FormItem>
           }
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}


const ModifyCategory = Form.create()(NormalCategory);
export default ModifyCategory;
