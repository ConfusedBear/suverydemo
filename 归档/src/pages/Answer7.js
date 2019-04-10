import React, { Component } from 'react'
import { Progress, Radio, Row, Col, Checkbox } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

function onCheckBoxChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const options = [
  { label: '自行车赛', value: '自行车赛' },
  { label: '马拉松', value: '马拉松' },
  { label: '拉力赛', value: '拉力赛' },
  { label: '铁人三项', value: '铁人三项' },
  { label: '帆船', value: '帆船' },
  { label: '射箭', value: '射箭' },
  { label: '滑翔伞', value: '滑翔伞' },
];

export default class Answer7 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div style={{ padding: '20px' }}>
          <div>
            <Progress percent={7 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div >
              <div align="left" style={{ color: "#C83BE5" }}>
                <span style={{ fontSize: 20 }}>7</span>
                <span style={{ fontSize: 5 }}>/9</span>
              </div>
            </div>
            <div style={{ margin: '20px 0' }} align="left">
              <span style={{ fontSize: 18 }}>您此行在杭州是否参与体育旅游项目：</span>
            </div>
            <div style={{ margin: '20px' }}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Row>
                  <Col span={12}>
                    <Radio value={1} style={{ marginRight: '100px' }}>否</Radio>
                  </Col>
                  <Col span={12}>
                    <Radio value={2}>
                      是（可多选）{
                        this.state.value === 2 ?
                          <div>
                            <Checkbox.Group style={{ width: '100%', marginLeft: '5px' }} onChange={onCheckBoxChange} align="left" defaultChecked={false}>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="自行车赛">自行车赛</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="马拉松">马拉松</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="拉力赛">拉力赛</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="铁人三项">铁人三项</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="帆船">帆船</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="射箭">射箭</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="滑翔伞">滑翔伞</Checkbox></Col></Row>
                            </Checkbox.Group>
                          </div>
                          : null
                      }
                    </Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </div>
            <div style={{ marginTop: '100px', fontSize: 18 }} align="center">
              <Link to="/answer6" style={{ color: "#4A4A4A" }}>
                <b>上一题</b>
              </Link>
              <b style={{ margin: '0 30px' }}>/</b>
              <Link to="/answer8" style={{ color: "#C83BE5" }} >
                <b>下一题</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}