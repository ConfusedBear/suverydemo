import React, { Component } from 'react'
import { Progress, Radio } from 'antd'
import { Link } from 'react-router-dom';
import './Answer2.css';

const RadioGroup = Radio.Group

export default class Answer2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
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
                        <Progress percent={2 * (100 / 9)} showInfo={false} strokeColor="#C83BE5" />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <div align="left" style={{ color: "#C83BE5" }}>
                            <span style={{ fontSize: 20 }}>2</span>
                            <span style={{ fontSize: 5 }}>/9</span>
                        </div>
                        <div align="left" style={{ marginTop: '20px' }}>
                            <span style={{ fontSize: 18 }}>您的性别是：</span>
                            <div style={{ margin: '20px' }} align="center">
                                <RadioGroup onChange={this.onChange} value={this.state.value}>
                                    <Radio value={1} style={{ marginRight: '100px' }}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGroup>
                            </div>
                        </div>
                        <div style={{ marginTop: '100px', fontSize: 18 }}>
                            <Link to="/answer" style={{ color: "#4A4A4A" }}>
                                <b>上一题</b>
                            </Link>
                            <b style={{ margin: '0 30px' }}>/</b>
                            <Link to="/answer3" style={{ color: "#C83BE5" }} >
                                <b>下一题</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}