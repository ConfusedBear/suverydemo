import React, { Component } from 'react'
import { Progress, Radio } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

const RadioGroup = Radio.Group

export default class Answer4 extends Component {
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
            <Progress percent={4 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div >
              <div align="left" style={{ color: "#C83BE5" }}>
                <span style={{ fontSize: 20 }}>4</span>
                <span style={{ fontSize: 5 }}>/9</span>
              </div>
            </div>
            <div style={{ margin: '20px 0' }} align="left">
              <span style={{ fontSize: 18 }}>您此行在杭州是否到旅游吸引物（旅游景区、主题公园、历史街区、博物馆、美术馆、图书馆、科技馆、休闲广场等）游览：</span>
            </div>
            <div style={{ margin: '20px' }}>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1} style={{ marginRight: '100px' }}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>
            <div style={{ marginTop: '100px', fontSize: 18 }} align="center">
              <Link to="/answer3" style={{ color: "#4A4A4A" }}>
                <b>上一题</b>
              </Link>
              <b style={{ margin: '0 30px' }}>/</b>
              <Link to="/answer5" style={{ color: "#C83BE5" }} >
                <b>下一题</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}