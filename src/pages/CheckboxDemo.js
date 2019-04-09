import React, { Component } from 'react'
import { Progress, Radio, InputNumber, Checkbox, Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

export default class CheckboxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    var i = 1
    const checkboxs = this.props.answer.map((res) => 
      <Col span={12} style={{marginTop: '20px'}}><Checkbox value={res}>{res}</Checkbox></Col>
    )

    return (
      <div>
          <div align="left" style={{ marginTop: '20px' }}>
          <span style={{ fontSize: 18 }}>{this.props.title}</span>
          </div>
          <div style={{ margin: '20px 10px' }} align="left">
            <Checkbox.Group style={{ width: '100%' }} onChange={this.props.addCheckboxAnswer}>
              <Row style={{ marginTop: '20px' }}>
                {checkboxs}
              </Row>
            </Checkbox.Group>
          </div>
      </div>

    )
  }
}