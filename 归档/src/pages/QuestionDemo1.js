import React, { Component } from 'react'
import { Progress, Radio } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

const RadioGroup = Radio.Group

export default class QuestionDemo2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    }
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    var i = 1
    const radios = this.props.answer.map((res) => <Radio value={i++}>{res}</Radio>)

    return (
      <div>
        <div style={{ padding: '20px' }}>
          <div>
            <Progress percent={this.props.index+1 * (100 / this.props.sum)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div align="left" style={{ color: "#C83BE5" }}>
              <span style={{ fontSize: 20 }}>{this.props.index+1}</span>
              <span style={{ fontSize: 5 }}>/{this.props.sum}</span>
            </div>
            <div align="left" style={{ marginTop: '20px' }}>
              <span style={{ fontSize: 18 }}>{this.props.title}</span>
              <div style={{ margin: '20px' }} align="center">
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  {radios}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}