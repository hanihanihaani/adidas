import React from 'react';
import { Form, Input, Button, message, Switch, Select, Transfer } from 'antd';
import UploadImg from '../components/UploadImg';
import api from '../service/api';
const FormItem = Form.Item;
const Option = Select.Option;

class NormalProductForm extends React.Component {
  state = {
    imgList:[],
    allCats:[],
  }
  getImgList(imgList) {
    this.setState({
      imgList:imgList
    })
  }

  filterOption = (inputValue, option) => {
    return option.name.indexOf(inputValue) > -1;
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }

  handleSubmit(e) {
    e.preventDefault();
    //获取到富文本编辑器里的值
    const info = window.CKEDITOR.instances.info.getData();
    console.log('description',info);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        //获取图片列表的路径
        values.images = this.state.imgList;
        values.info = info;

        //将字符串分隔成数组
        // values.tag = values.tag.split(" ");
        console.log("values:",values);
         
         
         api.addProduct(values).then((resJson) => {
            if (resJson.OK) {
              message.success("分类添加成功")
            } else {
              message.error("添加失败" + resJson.message,5)
            }
         })
      }
    })
  }
  //配置富文本编辑器，public里的index.html也需要引入ckeidtor，
  componentDidMount() {
    window.CKEDITOR.replace("info", {
      height: 200,  
      filebrowserImageUploadUrl: "/upload/ckeditor",
    }); 
    this.getAllCats1();
  }
  getAllCats1() {
    api.getCats(1).then((resJson) => {
      if (resJson.OK) {
        this.setState({
          allCats:resJson.docs.map((cat) => ({key:cat.name,name:cat.name}))
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { allCats } = this.state
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
      <div className="product">
        <Form onSubmit={this.handleSubmit.bind(this)} >
           <FormItem
            {...formItemLayout}
            label="商品名称"
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
            label="商品描述"
            hasFeedback
          >
              <textarea name="info" id="info" />
          </FormItem>
           <FormItem
            {...formItemLayout}
            label="商品价格"
            hasFeedback
          >
            {getFieldDecorator('price', {
              rules: [{ required: true, message: '商品价格不能为空', whitespace: true }
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="商品单位"
            hasFeedback
          >
            {getFieldDecorator('unit', {
              rules: [{ required: true, message: '商品单位不能为空', whitespace: true }
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="商品库存"
            hasFeedback
          >
            {getFieldDecorator('storage', {
              rules: [{ required: true, message: '商品库存不能为空', whitespace: true }
              ],
            })(
              <Input />
            )}
          </FormItem>  
          <FormItem
            {...formItemLayout}
            label="商品分类"
            hasFeedback
          >
            {getFieldDecorator('category', {
              rules: [{ required: true, message: '商品分类不能为空', whitespace: true }
              ],
            })(
              <Select style={{ width:"100%" }}>
              {
                allCats.map((cat,i) => (<Option key={cat.name}>{cat.name}</Option>))
              }
              </Select>
            )}
          </FormItem>      
          <FormItem
            {...formItemLayout}
            label="商品标签"
            hasFeedback
          >
            {getFieldDecorator('tag', {
            })(
              // <Input placeholder="请输入以逗号分隔的内容"/>
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
           <FormItem
            {...formItemLayout}
            label="商品信息"
            hasFeedback
          >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: '商品信息不能为空', whitespace: true }
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="商品状态"
            hasFeedback
          >
            {getFieldDecorator('status', {
            })(
              <Switch defaultChecked={true}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="图片列表"
            hasFeedback
          >
            {getFieldDecorator('images', {})(
              <UploadImg
              max={8}
              action="http://192.168.1.210:3000/upload"
              getImgList={this.getImgList.bind(this)}
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const AddProduct = Form.create()(NormalProductForm)
export default AddProduct;