import React, {Component} from 'react';
import {Button,message,Radio} from 'antd';
import ContactModal from './ContactModal';
import api from '../service/api'
import ContactItem from './ContactItem';
import '../css/contact.css';
const RadioGroup = Radio.Group;

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
  updateModal(contact) {
    this.setState({
      showModal:true,
      action:"update",
      defaultValues:contact
    })
  }
  delContact(id) {
      api.delContact(id).then((res) => {
      if (res.OK) {
        message.success("删除收货人地址成功")
        this.setState({allContacts:res.docs})
      } else {
        message.error("删除收货人地址失败"+res.message)
      }
    })
  }
  setDefault(id) {
      api.defaultContact(id).then((res) => {
      if (res.OK) {
        message.success("收货人默认地址设置成功")
        this.setState({allContacts:res.docs})
      } else {
        message.error("收货人默认地址设置失败"+res.message)
      }
    })
  }  render() {
    const {showModal,action,defaultValues,allContacts} = this.state
    console.log("allContacts",allContacts);
    let okModal; let title;
    if (action === "new") {
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
        {
          allContacts.length === 0 ? 
          <h3>没有收货人地址，请新增</h3>
          :
          <RadioGroup>
          {
            allContacts.map((contact,i) => (
                <ContactItem
                  key={i}
                  contact={contact}
                  delContact={this.delContact.bind(this)}
                  setDefault={this.setDefault.bind(this)}
                  updateContact={this.updateModal.bind(this)}
                />
              ))
          }
          </RadioGroup>
        }
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