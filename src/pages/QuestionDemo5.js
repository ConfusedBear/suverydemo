import React, { Component } from 'react'
import { Progress, Radio, InputNumber, Checkbox, Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

function onCheckBoxChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const onInputChange = (e) => {
  console.log(e);
};

export default class QuestionDemo5 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    var i = 1
    const checkboxs = this.props.checkboxAnswer.map((res) => (i++ !== this.props.checkboxAnswer.length)?
      <Col span={12} style={{marginTop: '20px'}}><Checkbox value={res}>{res}</Checkbox></Col>
      : <Col span={12} style={{marginTop: '20px'}}><Checkbox value={res}>{res}</Checkbox><Input allowClear onChange={onInputChange} style={{ width: '60%' }}></Input></Col>
    )


    return (
      <div>
        <div style={{ padding: '20px' }}>
          <div>
            <Progress percent={this.props.num * (100 / this.props.sum)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div align="left" style={{ color: "#C83BE5" }}>
              <span style={{ fontSize: 20 }}>{this.props.num}</span>
              <span style={{ fontSize: 5 }}>/{this.props.sum}</span>
            </div>
          </div>
          <div style={{ margin: '20px 0' }} align="left">
          <span style={{ fontSize: 18 }}>{this.props.title}</span>
          </div>
          <div style={{ margin: '20px 10px' }} align="left">
            <Checkbox.Group style={{ width: '100%' }} onChange={onCheckBoxChange}>
              <Row style={{ marginTop: '20px' }}>
                {checkboxs}
              </Row>
            </Checkbox.Group>
          </div>
          <div style={{ marginTop: '100px', fontSize: 18 }} align="center">
            <Link to="/answer4" style={{ color: "#4A4A4A" }}>
              <b>上一题</b>
            </Link>
            <b style={{ margin: '0 30px' }}>/</b>
            <Link to="/answer6" style={{ color: "#C83BE5" }} >
              <b>下一题</b>
            </Link>
          </div>
        </div>
      </div>

    )
  }
}