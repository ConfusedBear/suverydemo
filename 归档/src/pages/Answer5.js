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


export default class Answer5 extends Component {
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
                        <Progress percent={5 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <div >
                            <div align="left" style={{ color: "#C83BE5" }}>
                                <span style={{ fontSize: 20 }}>5</span>
                                <span style={{ fontSize: 5 }}>/9</span>
                            </div>
                        </div>
                        <div style={{ margin: '20px 0' }} align="left">
                            <span style={{ fontSize: 18 }}>您此行在杭州浏览了</span>
                            <InputNumber min={0} max={365} onChange={onRadioChange} style={{ margin: '0 5px' }}/>
                            <span style={{ fontSize: 18 }}>个旅游吸引物，包括（可多选）：</span>
                        </div>
                        <div style={{ margin: '20px 0' }} align="left">
                            <Checkbox.Group style={{ width: '100%' }} onChange={onCheckBoxChange}>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="Scenic">旅游景区</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Park">主题公园</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="History">历史街区</Checkbox>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="Museum">博物馆</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Art">美术馆</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Lib">图书馆</Checkbox>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col span={8}>
                                        <Checkbox value="Sci">科技馆</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Square">休闲广场</Checkbox>
                                    </Col>
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
            </div>
        )
    }
}