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
        <Layout style={{backgroundColor: 'white'}}>
          <Content style={{ margin: '0 16px' , background: 'white'}}>
            <div style={{ padding: 13, background: 'white' }} >
              <Link to="/makesure" style={{ color: "black" }}>
                <Row type="flex" justify="start" align="top" style={{ height: '45px' }}>
                  <Col span={3} />
                  <Col span={2}>
                    <Icon type="smile" theme="twoTone" twoToneColor="#C83BE5" style={{ marginTop: '5px', fontSize: '20px' }} />
                  </Col>
                  <Col span={18} align="left">
                    <b style={{ fontSize: 20 }}>国内旅游抽样调查问卷</b>
                    <p style={{ fontSize: 12 }} align="left">(住宿调查)</p>
                  </Col>
                </Row>
              </Link>
              <hr style={{ marginTop: '20px', marginBottom: '10px' }} />
              <Link to="/makesure" style={{ color: "black" }}>
                <Row type="flex" justify="start" align="top" style={{ height: '50px' }}>
                  <Col span={3} />
                  <Col span={2}>
                    <Icon type="smile" theme="twoTone" twoToneColor="#C83BE5" style={{ marginTop: '5px', fontSize: '20px' }} />
                  </Col>
                  <Col span={18} align="left">
                    <b style={{ fontSize: 20 }}>国内旅游抽样调查问卷</b>
                    <p style={{ fontSize: 12 }} align="left">(景区调查)</p>
                  </Col>
                </Row>
              </Link>
            </div>
          </Content>
        </Layout>
      </div>
    )
  }


}


