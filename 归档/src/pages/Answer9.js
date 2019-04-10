import React, { Component } from 'react'
import { Progress, Radio, Checkbox, Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

function onCheckBoxChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const onInputChange = (e) => {
    console.log(e);
};

export default class Answer9 extends Component {
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
                        <Progress percent={9 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <div >
                            <div align="left" style={{ color: "#C83BE5" }}>
                                <span style={{ fontSize: 20 }}>9</span>
                                <span style={{ fontSize: 5 }}>/9</span>
                            </div>
                        </div>
                        <div style={{ margin: '20px 0' }} align="left">
                            <span style={{ fontSize: 18 }}>您此行的主要目的：</span>
                        </div>
                        <div style={{ margin: '20px 0' }} align="left">
                            <Checkbox.Group style={{ width: '100%' }} onChange={onCheckBoxChange}>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="观光游览">观光游览</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="休闲度假">休闲度假</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="探亲访友">探亲访友</Checkbox>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="商务会展">商务会展</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="会议培训">会议培训</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="健康/疗养">健康/疗养</Checkbox>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="宗教/朝拜">宗教/朝拜</Checkbox>
                                    </Col>
                                    <Col span={16}>
                                        <Checkbox value="文化/体育/科技交流">文化/体育/科技交流</Checkbox>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="购物">购物</Checkbox>
                                    </Col>
                                    <Col span={16} style={{marginTop: '-5px'}}>
                                        <Checkbox value="其他">其他</Checkbox>
                                        <Input allowClear onChange={onInputChange} style={{ width: '60%' }} />
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </div>
                        <div style={{ marginTop: '100px', fontSize: 18 }} align="center">
                            <Link to="/answer8" style={{ color: "#4A4A4A" }}>
                                <b>上一题</b>
                            </Link>
                            <b style={{ margin: '0 30px' }}>/</b>
                            <Link to="/" style={{ color: "#C83BE5" }} >
                                <b>结束答题</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}