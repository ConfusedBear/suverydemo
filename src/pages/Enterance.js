import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const {
  Header, Footer, Sider, Content,
} = Layout;

export default class Enterance extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Layout>
          <Content style={{ margin: '24px 16px' }}>
            <div style={{ padding: 13, background: '#fff' }} >
              <Link to="/makesure" style={{color:"black"}}>
                <Row type="flex" justify="start" align="top" style={{height:'45px'}}>
                  <Col span={3} />
                  <Col span={2}>
                    <Icon type="smile" theme="twoTone" twoToneColor="#C83BE5" />
                  </Col>
                  <Col span={15} align="left">
                    <b style={{ fontSize: 18 }}>国内旅游抽样调查问卷</b>
                    <p style={{ fontSize: 5 }} align="left">(住宿调查)</p>
                  </Col>
                </Row>
              </Link>
              <hr style={{margin:'10px'}}/>
              <Row type="flex" justify="start" align="top" style={{height:'50px'}}>
                <Col span={3} />
                <Col span={2}>
                  <Icon type="smile" theme="twoTone" twoToneColor="#C83BE5" />
                </Col>
                <Col span={15} align="left">
                  <b style={{ fontSize: 18 }}>国内旅游抽样调查问卷</b>
                  <p style={{ fontSize: 5 }} align="left">(景区调查)</p>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    )
  }


}


