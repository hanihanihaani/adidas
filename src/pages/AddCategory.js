import React, {Component} from 'react';
import { Form, Input, Button,Transfer, Select, message } from 'antd';
import { getCats, addCat } from '../service/api';
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
        addCat(values).then((resJson) => {
          if (resJson.OK) {
            message.success("分类添加成功")
          } else {
            message.error("添加失败"+resJson.message,5);
          }
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
  getAllCat2() {
    getCats(2).then((resJson) => {
      this.setState({
        allCats:resJson.map((cat) => ({key:cat.name,name:cat.name}))
      })
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


const AddCategory = Form.create()(NormalCategory);
export default AddCategory;
