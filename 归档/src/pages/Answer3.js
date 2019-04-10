import React, { Component } from 'react'
import { Progress, Radio, InputNumber, Checkbox } from 'antd'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './Answer2.css';


function onRadioChange1(value) {
  console.log('changed', value);
}
function onRadioChange2(value) {
  console.log('changed', value);
}
function onRadioChange3(value) {
  console.log('changed', value);
}
function onRadioChange4(value) {
  console.log('changed', value);
}

function onCheckBoxChange(value) {
  console.log('Change', value)
}

const options = [
  { label: '住在杭州的住宿单位', value: 'hotel' },
  { label: '住在杭州的亲友家中', value: 'friend' },
  { label: '住在杭州的其他住宿设施', value: 'others' },
]

export default class Answer3 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <div style={{ padding: '20px' }}>
          <div>
            <Progress percent={3 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div >
              <div align="left" style={{ color: "#C83BE5" }}>
                <span style={{ fontSize: 20 }}>3</span>
                <span style={{ fontSize: 5 }}>/9</span>
              </div>
            </div>
            <div align="left" style={{ marginTop: '20px' }}>
              <div>
                <div align="left" style={{ height: '45px' }}>
                  <span style={{ fontSize: 18 }}>您此行在杭州共度过</span>
                  <InputNumber min={0} max={365} onChange={onRadioChange1} style={{ margin: '0 5px' }} />
                  <span style={{ fontSize: 18 }}>夜，其中：</span>

                </div>
                    
              </div>
              <div style={{ marginTop: '10px' }}>
                <Checkbox.Group style={{ width: '100%' }} onChange={onCheckBoxChange}>
                  <Row>
                    <Col span={24} style={{ marginTop: '20px' }}>
                      <Checkbox value="hotel">住在杭州的宿舍单位</Checkbox>
                      <InputNumber min={0} max={365} onChange={onRadioChange2} />
                      <span style={{ marginLeft: '5px' }}>夜</span>
                    </Col>
                    <Col span={24} style={{ marginTop: '20px' }}>
                      <Checkbox value="friend">住在杭州的亲友家中</Checkbox>
                      <InputNumber min={0} max={365} onChange={onRadioChange3} />
                      <span style={{ marginLeft: '5px' }}>夜</span>
                    </Col>
                    <Col span={24} style={{ marginTop: '20px' }}>
                      <Checkbox value="others">住在杭州的其他住宿设施</Checkbox>
                      <InputNumber min={0} max={365} onChange={onRadioChange4} />
                      <span style={{ marginLeft: '5px' }}>夜</span>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
              <div style={{ marginTop: '100px', fontSize: 18 }} align="center">
                <Link to="/answer2" style={{ color: "#4A4A4A" }}>
                  <b>上一题</b>
                </Link>
                <b style={{ margin: '0 30px' }}>/</b>
                <Link to="/answer4" style={{ color: "#C83BE5" }} >
                  <b>下一题</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}