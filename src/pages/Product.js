import React from 'react';
import { Form, Input, Button, message } from 'antd';
import UploadImg from '../components/UploadImg';
import api from '../service/api';
const FormItem = Form.Item;

class NormalProductForm extends React.Component {
  state = {
    imgList:[],
  }
  getImgList(imgList) {
    this.setState({
      imgList:imgList
    })
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
        values.tag = values.tag.split(" ");
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
      filebrowserImageUploadUrl: "/upload",
    }); 
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
              <Input />
            )}
          </FormItem>      
          <FormItem
            {...formItemLayout}
            label="商品标签"
            hasFeedback
          >
            {getFieldDecorator('tag', {
              rules: [{ required: true, message: '商品标签不能为空', whitespace: true }
              ],
            })(
              <Input placeholder="请输入以逗号分隔的内容"/>
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
              rules: [{ required: true, message: '商品状态不能为空', whitespace: true }
              ],
            })(
              <Input />
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

const Product = Form.create()(NormalProductForm)
export default Product;