import React, {Component} from 'react';
import { Radio, Button } from 'antd';
import '../css/contactitem.css';
const RadioButton = Radio.Button;

class ContactItem extends Component {
  render() {
    const {contact,phone,address,_id} = this.props.contact;
    const {delContact,updateContact,setDefault} = this.props;
    return(
      <div className="radio-btn">
        <div className="trangle"></div>
        <span className="duigou">&radic;</span>
        <RadioButton value="_id">
          {contact}
        </RadioButton>
        <div className="info">
          <div className="contact">{contact}</div>
          <div className="address">{address}</div>
          <div className="phone">{phone}</div>
          {
            this.props.contact.default ? 
            <div>默认地址</div>
            : null
          }
        </div>
        <div className="op">
        {
          this.props.contact.default ? null
          : 
          <Button onClick={() => setDefault(_id)}>设为默认</Button>
        }
        <Button onClick={() => updateContact(this.props.contact)}>编辑</Button>
        <Button onClick={() => delContact(_id)}>删除</Button>
        </div>
      </div>
    )
  }
}

export default ContactItem;