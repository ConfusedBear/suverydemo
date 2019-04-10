import React, { Component } from 'react'
import { Progress, Radio, Row, Col, Checkbox } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

function onCheckBoxChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const options = [
  { label: '话剧歌剧', value: '话剧歌剧' },
  { label: '演唱会', value: '演唱会' },
  { label: '音乐会', value: '音乐会' },
  { label: '戏曲艺术', value: '戏曲艺术' },
  { label: '亲子演出', value: '亲子演出' },
  { label: '电影', value: '电影' },
  { label: '芭蕾舞蹈', value: '芭蕾舞蹈' },
];

export default class Answer6 extends Component {
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
            <Progress percent={6 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div >
              <div align="left" style={{ color: "#C83BE5" }}>
                <span style={{ fontSize: 20 }}>6</span>
                <span style={{ fontSize: 5 }}>/9</span>
              </div>
            </div>
            <div style={{ margin: '20px 0' }} align="left">
              <span style={{ fontSize: 18 }}>您此行在杭州是否观看文艺表演：</span>
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
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="话剧歌剧">话剧歌剧</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="演唱会">演唱会</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="音乐会">音乐会</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="戏曲艺术">戏曲艺术</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="亲子演出">亲子演出</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="电影">电影</Checkbox></Col></Row>
                              <Row style={{ marginTop: '5px' }}><Col><Checkbox value="芭蕾舞蹈">芭蕾舞蹈</Checkbox></Col></Row>
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
              <Link to="/answer5" style={{ color: "#4A4A4A" }}>
                <b>上一题</b>
              </Link>
              <b style={{ margin: '0 30px' }}>/</b>
              <Link to="/answer7" style={{ color: "#C83BE5" }} >
                <b>下一题</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}