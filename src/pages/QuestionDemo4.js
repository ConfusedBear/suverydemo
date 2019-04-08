import React, { Component } from 'react'
import { Progress, Radio, Row, Col, Checkbox } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

const RadioGroup = Radio.Group

function onCheckBoxChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

export default class QuestionDemo4 extends Component {
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
    var j = 1
    const checkboxs = this.props.checkboxAnswer.map((res) =>
      <Col span={24} style={{ marginTop: '20px' }}><Checkbox value={res}>{res}</Checkbox></Col>
    )



    var i = 1
    const radios = this.props.answer.map((res) => (i++ !== 2) ?
      <Col span={12}><Radio value={1}>{res}</Radio></Col> :
      <Col span={12}><Radio value={2}>{res}
        {this.state.value === 2 ?
        <div>
          <Checkbox.Group style={{ width: '100%', marginLeft: '5px' }} onChange={onCheckBoxChange} align="left" defaultChecked={false}>
            {checkboxs}
          </Checkbox.Group>
        </div> : null
        }
      </Radio></Col>
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
            <div align="left" style={{ marginTop: '20px' }}>
              <span style={{ fontSize: 18 }}>{this.props.title}</span>
              <div style={{ margin: '20px' }} align="center">
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Row>
                    {radios}
                  </Row>
                </RadioGroup>
              </div>
            </div>
            <div style={{ marginTop: '100px', fontSize: 18 }}>
              <Link to="/answer" style={{ color: "#4A4A4A" }}>
                <b>上一题</b>
              </Link>
              <b style={{ margin: '0 30px' }}>/</b>
              <Link to="/answer3" style={{ color: "#C83BE5" }} >
                <b>下一题</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}