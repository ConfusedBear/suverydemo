import React from 'react'
import { Progress } from 'antd'
import { Link } from 'react-router-dom';
import QuestionDemo1 from './QuestionDemo1'
import QuestionDemo2 from './QuestionDemo2'
import QuestionDemo3 from './QuestionDemo3'
import QuestionDemo4 from './QuestionDemo4';
import QuestionDemo5 from './QuestionDemo5';
import RadioDemo from './RadioDemo';
import CheckboxDemo from './CheckboxDemo';
import InputDemo from './InputDemo';

// let list = [
//   {
//     "id": 1,
//     "title_type": 3,
//     "title": "您此行在杭州几天：",
//     "answers": []
//   },
//   {
//     "id": 3,
//     "title_type": 1,
//     "title": "您的性别是？",
//     "answers": ["男", "女"]
//   },
//   {
//     "id": 9,
//     "title_type": 2,
//     "title": "您此行在杭州观看的文艺表演有：",
//     "answers": ["话剧歌剧", "演唱会", "音乐会", "戏曲艺术", "亲子演出", "电影", "芭蕾舞蹈", "其他"]
//   },
//   {
//     "id": 2,
//     "title_type": 1,
//     "title": "您喜欢杭州吗：",
//     "answers": ["否", "是"]
//   },
//   {
//     "id": 6,
//     "title_type": 2,
//     "title": "您此行在杭州参与的体育旅游项目有：",
//     "answers": ["赛事观赏", "运动休闲", "竞技体育", "其他"]
//   },
//   {
//     "id": 2,
//     "title_type": 1,
//     "title": "您此行在杭州是否到旅游吸引物游览：",
//     "answers": ["否", "是"]
//   }
// ]
// let list = []
// let listtemp = []

export default class AnswerDemo1 extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      titlelist: [],
      titlenum: 0,
      listnum: 0,
      answers: [],
      answerTemp: '',
      titlenumTemp: [],
      sum: [],
      isLoading: true,
    }

    // fetch(testJson)
    //   .then((res) => res.text())
    //   .then((text) => {
    //     console.log("what the fuck")
    //     console.log("data:",text)
    //     // listtemp = responseData
    //     // console.log(listtemp)
    //     // list = listtemp["obj"]
    //   }
    // )

    fetch('/test.json')
      .then(response => response.json())
      .then(data => {
        let temp = data["obj"]
        this.state.listnum = temp.length
        console.log('temp:', this.state.listnum)
        for (var i = 0; i < temp.length; i++) {
          let temptitle = temp[i]
          console.log('temptitle:', temptitle)
          this.state.titlenumTemp.push(temptitle["id"])
          console.log('title:',this.state.titlenumTemp)
          this.state.titlelist.push(
            <div>
              {(() => {
                switch (parseInt(temptitle["title_type"])) {
                  case 1:
                    return <RadioDemo
                      id={temptitle["id"]}
                      index={this.state.titlenum}
                      title={temptitle["title"]}
                      answer={temptitle["answers"]}
                      addRadioAnswer={this.addRadioAnswer}
                    />;
                  case 2:
                    return <CheckboxDemo
                      id={temptitle["id"]}
                      index={this.state.titlenum}
                      title={temptitle["title"]}
                      answer={temptitle["answers"]}
                      addCheckboxAnswer={this.addCheckboxAnswer}
                    />;
                  case 3:
                    return <InputDemo
                      id={temptitle["id"]}
                      index={this.state.titlenum}
                      title={temptitle["title"]}
                      answer={temptitle["answers"]}
                      addAnswer={this.addInputAnswer}
                    />;
                  default:
                    return null
                }
              }
              )()}
            </div>
          )
          console.log('titlelist:',this.state.titlelist[i])
          this.state.isLoading = false;
          this.setState({

          })
        }
        
      })



  }


  toLastTitle = () => {
    let num = this.state.titlenum - 1
    this.setState({
      titlenum: num
    })
  }
  toNextTitle = () => {
    let num = this.state.titlenum + 1
    if (num > this.state.listnum - 1) {
      this.state.answers.push(this.state.answerTemp)
      for (var i = 0; i < this.state.listnum; i++) {
        this.state.sum.push({
          "question_id": this.state.titlenumTemp[i],
          "answers": this.state.answers[i]
        })
      }
      // console.log(this.state.sum)
    } else {
      this.state.answers.push(this.state.answerTemp)
      this.setState({
        titlenum: num
      })
    }
    console.log(this.state.answers)

  }

  addInputAnswer = (value) => {
    this.setState({
      answerTemp: value
    })
  }

  addRadioAnswer = (e) => {
    this.setState({
      answerTemp: e.target.value
    })
  }

  addCheckboxAnswer = (value) => {
    this.setState({
      answerTemp: value
    })
  }





  render() {
    console.log("listnum：",this.state.listnum)
    return (
      <div style={{ padding: '20px' }}>
        <div>
          {this.state.answerTemp}
          {this.state.sum}
        </div>
        < br />
        <div>
          <div>
            <Progress percent={((this.state.titlenum + 1) * (100 / this.state.listnum))} showInfo={false} strokeColor="#C83BE5" />
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div align="left" style={{ color: "#C83BE5" }}>
              <span style={{ fontSize: 30 }}>{this.state.titlenum + 1}</span>
              <span style={{ fontSize: 15 }}>/{this.state.listnum}</span>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            {this.state.titlelist[this.state.titlenum]}
          </div>
          <div>
            <div style={{ margin: '10px 0', fontSize: 18 }}>
              {/* <b>titlenum:{this.state.titlenum}  </b>
            <b>titlesum:{this.state.listnum}</b>
            <br /> */}
              <b onClick={this.toLastTitle}>{(this.state.titlenum === 0) ? <Link to="/" style={{ color: "#4A4A4A" }}>返回</Link> : "上一题"}</b>
              <b style={{ margin: '0 30px' }}>/</b>
              <b style={{ color: "#C83BE5" }} onClick={this.toNextTitle}>{(this.state.titlenum === (this.state.listnum - 1)) ? <Link to="/">结束答题</Link> : "下一题"}</b>
            </div>
          </div>
        </div>
      </div>
    )
  }
}