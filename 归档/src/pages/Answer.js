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


export default class Answer extends Component {
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
            <b style={{ fontSize: 15 }}>国内旅游抽样调查问卷(A)</b>
            <p>(在住宿单位内发放)</p>
          </div>
          <div>
            <Progress percent={100 / 9} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div align="left" style={{ color: "#C83BE5" }}>
              <span style={{ fontSize: 20 }}>1</span>
              <span style={{ fontSize: 5 }}>/9</span>
            </div>
          </div>
          <div align="left" style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: 18 }}>请选择您的户籍所在地</span>
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