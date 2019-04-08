import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Progress } from 'antd'
import { Cascader, version } from 'antd';
import { Button } from 'antd'
import provinces from "china-division/dist/provinces.json";
import cities from "china-division/dist/cities.json";

cities.forEach(city => {
  const matchProvince = provinces.filter(
    province => province.code === city.provinceCode
  )[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    });
  }
});

const options = provinces.map(province => ({
  label: province.name,
  value: province.code,
  children: province.children
}));


export default class QuestionDemo2 extends Component {
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
          <Progress percent={this.props.num * (100 / this.props.sum)} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div align="left" style={{ color: "#C83BE5" }}>
              <span style={{ fontSize: 20 }}>{this.props.num}</span>
              <span style={{ fontSize: 5 }}>/{this.props.sum}</span>
            </div>
          </div>
          <div align="left" style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: 18 }}>{this.props.title}</span>
            </div>
            <Cascader
              options={options}
              onChange={onChange}
              showSearch
              placeholder="请选择地址"
              style={{ width: '300px' }}
            />
          </div>
          <div style={{ marginTop: '100px', color: "#C83BE5" }}>
            <Link to="/answer2" style={{color: "#C83BE5"}} >
              <b style={{ fontSize: 18 }}>下一题</b>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}



function onChange(value) {
  console.log(value);
}