import React, {Component} from 'react';
import {Button,message} from 'antd';
import ContactModal from './ContactModal';
import api from '../service/api'
import '../css/contact.css';

class Contact extends Component {
  state = {
    showModal:false,
    action:"new",
    defaultValues:{},
    allContacts:[]
  }
  cancelModal() {
    this.setState({showModal:false});
  }
  componentWillMount() {
    this.getContact()
  }
  getContact() {
    api.getContact().then((res) => {
      this.setState({allContacts:res.docs})
    })
  }
  addContact(form) {
    this.setState({showModal:false});
    api.addContact(form).then((res) => {
      if (res.OK) {
        message.success("新增收货人地址成功")
        this.setState({allContacts:res.docs})
      } else {
        message.error("新增收货人地址失败"+res.message)
      }
    })
  }
  updateContact(form) {
    this.setState({showModal:false});
    api.updateContact(form).then((res) => {
      if (res.OK) {
        message.success("修改收货人地址成功")
        this.setState({allContacts:res.docs})
      } else {
        message.error("修改收货人地址失败"+res.message)
      }
    })
  }
  render() {
    const {showModal,action,defaultValues,allContacts} = this.state
    let okModal; let title;
    if (action == "new") {
      title="新增收货人地址"
      okModal = this.addContact.bind(this)
    } else {
      title="修改收货人地址"
      okModal = this.updateContact.bind(this)
    }
    return(
      <div className="contact-a">
        <h3>收货人信息</h3>
        <Button
          onClick={() => this.setState({showModal:true,action:"new",defaultValues:{}})}
        >新增收货人地址</Button>
        <ContactModal
          visible={showModal}
          title={title}
          handleOk={okModal}
          handleCancel={()=>this.cancelModal()}
          defaultValues={defaultValues}
        />
      </div>
    )
  }
}

export default Contact;