import React, { Component } from 'react'
import { Progress, Radio, InputNumber, Row, Col } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';



export default class Answer8 extends Component {
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
            <Progress percent={8 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div >
              <div align="left" style={{ color: "#C83BE5" }}>
                <span style={{ fontSize: 20 }}>8</span>
                <span style={{ fontSize: 5 }}>/9</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }} align="left">
              <span style={{ fontSize: 18 }}>您此行在杭州的花费总额中：</span>
            </div>
            <div align="left">
              <div>
                <div align="left" style={{ margin: '10px 0' }} >
                  <span style={{ color: "#C83BE5" }}>1. </span><span>在杭州购票的长途交通花费</span>
                </div>
                <Row>
                  <Col span={12}>
                    <span>飞机</span>
                    <InputNumber min={0} max={100000} onChange={onChange1} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                  <Col span={12}>
                    <span>火车</span>
                    <InputNumber min={0} max={100000} onChange={onChange2} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={12}>
                    <span>汽车</span>
                    <InputNumber min={0} max={100000} onChange={onChange3} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                  <Col span={12}>
                    <span>轮船</span>
                    <InputNumber min={0} max={100000} onChange={onChange4} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>2. </span><span>住宿花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange5} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>3. </span><span>餐饮花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange6} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>4. </span><span>景区（点）、博物馆、科技馆等旅游吸引物的门票及导游费</span>
                    <InputNumber min={0} max={100000} onChange={onChange7} style={{ margin: '5px 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>5. </span><span>观看文艺表演花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange8} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>6. </span><span>娱乐体育（包括歌舞、棋牌、网吧、游艺厅等室内外娱乐场所以及体育赛事、运动休闲等）花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange9} style={{ margin: '5px 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>7. </span><span>购物花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange10} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>8. </span><span>市内交通（包括自驾车、租车、加油、打车、公共交通等）花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange11} style={{ margin: '10px 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>9. </span><span>居民服务（包括理发、美容、桑拿、沐浴、足浴、推拿保健、摄影扩印、车辆维修等）花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange12} style={{ margin: '5px 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>10. </span><span>邮电通讯花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange13} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>11. </span><span>其他花费</span>
                    <InputNumber min={0} max={100000} onChange={onChange14} style={{ margin: '0 5px' }} />
                    <span>元</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                  <Col span={24}>
                    <span style={{ color: "#C83BE5" }}>12. </span><span>以上花费所包括的人数</span>
                    <InputNumber min={0} max={100000} onChange={onChange15} style={{ margin: '0 5px' }} />
                    <span>人</span>
                  </Col>
                </Row>
              </div>
              <div style={{ margin: '50px 0', fontSize: 18 }} align="center">
                <Link to="/answer7" style={{ color: "#4A4A4A" }}>
                  <b>上一题</b>
                </Link>
                <b style={{ margin: '0 30px' }}>/</b>
                <Link to="/answer9" style={{ color: "#C83BE5" }} >
                  <b>下一题</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

function onChange1(value) {
  console.log('changed', value);
}
function onChange2(value) {
  console.log('changed', value);
}
function onChange3(value) {
  console.log('changed', value);
}
function onChange4(value) {
  console.log('changed', value);
}
function onChange5(value) {
  console.log('changed', value);
}
function onChange6(value) {
  console.log('changed', value);
}
function onChange7(value) {
  console.log('changed', value);
}
function onChange8(value) {
  console.log('changed', value);
}
function onChange9(value) {
  console.log('changed', value);
}
function onChange10(value) {
  console.log('changed', value);
}
function onChange11(value) {
  console.log('changed', value);
}
function onChange12(value) {
  console.log('changed', value);
} function onChange13(value) {
  console.log('changed', value);
}
function onChange14(value) {
  console.log('changed', value);
}
function onChange15(value) {
  console.log('changed', value);
}
