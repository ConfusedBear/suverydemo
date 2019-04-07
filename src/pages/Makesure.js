import React, { Component } from 'react'
import { Card } from 'antd'
import { Button } from 'antd'
import imgURL from './../images/welcomepic.png'
import { Link } from 'react-router-dom';
import Answer from './Answer'

const { Meta } = Card;

export default class Makesure extends Component {
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
                        <img object-fit="cover" alt="welcomepic" src={imgURL} width="330px" />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <div style={{ marginTop: '10px' }} align="left">
                            <span><b>尊敬的先生、女士：</b></span>
                        </div>
                        <div style={{ marginTop: '10px' }} align="left">
                            <span>为了解您在杭州期间的旅游及相关花费情况，不断提高我们的旅游接待水平，请您协助我们填写这张调查表。我们将会对您的作答结果严格保密，谢谢您的协助!</span>
                        </div>
                        <div style={{ marginTop: '10px' }} align="right">
                            <span>杭州市文化广电旅游局</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }} align="center">
                        <Link to="/answer" >
                            <Button type="primary" style={{ width: '250px', backgroundColor: "#C83BE5", borderColor: "#C83BE5"}}>开始答题</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}