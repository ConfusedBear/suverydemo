import React, { Component } from 'react'
import { Progress, Radio, InputNumber, Checkbox, Row, Col } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';
import CheckableTag from 'antd/lib/tag/CheckableTag';


function onRadioChange(value) {
  console.log('changed', value);
}

function onCheckBoxChange(checkedValues) {
  console.log('checked = ', checkedValues);
}


export default class QuestionDemo3 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    var i = 0
    const inputs = this.props.title.map((res) => (i++%2 === 0)?
      <div><span style={{ fontSize: 18 }}>{res}</span><InputNumber min={0} max={365} onChange={onRadioChange} style={{ margin: '0 5px' }} /></div>:
      <div><span style={{ fontSize: 18 }}>{res}</span><br/></div>     
    )
    var j = 0
    const checkboxs = this.props.checkboxAnswer.map((res) => 
      <Col span={12} style={{marginTop: '20px'}}><Checkbox value={res}>{res}</Checkbox></Col>
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
            {inputs}
            {/* <span style={{ fontSize: 18 }}>您此行在杭州浏览了</span>
            <InputNumber min={0} max={365} onChange={onRadioChange} style={{ margin: '0 5px' }} />
            <span style={{ fontSize: 18 }}>个旅游吸引物，包括（可多选）：</span> */}
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