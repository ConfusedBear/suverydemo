import React, { Component } from 'react'
import { Progress, Radio, Row, Col } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

const RadioGroup = Radio.Group

export default class RadioDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    })
    this.props.addRadioAnswer(e)
  }

  render() {
    const radios = this.props.answer.map((res) => <Radio value={res} style={{margin:'0 20px'}}>{res}</Radio>)

    return (
      <div>
        <div align="left" style={{ marginTop: '20px' }}>
          <span style={{ fontSize: 18 }}>{this.props.title}</span>
          <div style={{ margin: '20px' }} align="center">
            <RadioGroup onChange={this.onChange} value={this.state.value} style={{ marginTop: '20px' }}> 
              {radios}
            </RadioGroup>
          </div>
        </div>
      </div>
    )
  }
}