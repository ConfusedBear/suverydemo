import React, { Component } from 'react'
import { InputNumber } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';
import CheckableTag from 'antd/lib/tag/CheckableTag';


function onChange(value) {
  console.log('changed', value)
}


export default class InputDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div style={{ margin: '20px 0' }} align="left">
          <div>
            <span style={{ fontSize: 18 }}>{this.props.title}</span>
            <br />
            <div align="center" style={{marginTop: '20px'}}>
              <InputNumber autoFocus={true} min={0} max={365} onChange={this.props.addAnswer} style={{ margin: '0 5px' }} />
            </div>
          </div>
        </div>
      </div>

    )
  }
}