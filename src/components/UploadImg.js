import React, {Component} from 'react';
import { Upload, Icon, Modal } from 'antd';
import PropTypes from 'prop-types';


class UploadImg extends Component {
  static propTypes = {
    getImgList:PropTypes.func.isRequired,
    max:PropTypes.number.isRequired,
    action:PropTypes.string.isRequired
  }
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange(event) {
    // console.log("event",event)
    console.log("fileList",event.fileList)
   
    //获取上传图片时的信息，里面包含了需要的图片的路径信息
    this.setState({ fileList:event.fileList })

    //对fileList遍历，获取里面的response（即图片的路径）的信息
    const imgList = event.fileList.map((file) => (file.response))
   
    //将其放入到静态属性getImgList里，供父组件调用
    this.props.getImgList(imgList); 
  }

  render() {
    const { action, max } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action={action}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange.bind(this)}
        >
          {fileList.length >= max ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default UploadImg;