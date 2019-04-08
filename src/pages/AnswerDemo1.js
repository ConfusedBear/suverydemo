import React from 'react'
import QuestionDemo1 from './QuestionDemo1'
import QuestionDemo2 from './QuestionDemo2'
import QuestionDemo3 from './QuestionDemo3'
import QuestionDemo4 from './QuestionDemo4';
import QuestionDemo5 from './QuestionDemo5';

export default class AnswerDemo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { "num": 2, "sum": 5, "title_type": 1, "title": ["这个问题你的答案是：", "对的吗", "那么对于那个问题您的答案还是", "是这样的吗"], "answer": ["man", "woman"], "checkboxAnswer": ["aaa", "bbb", "ccc", "ddd"] }

      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => {
            return (
              <QuestionDemo5
                num={item["num"]}
                sum={item["sum"]}
                index={index}
                title={item["title"]}
                answer={item["answer"]}
                checkboxAnswer={item["checkboxAnswer"]}
              />
            )
          })
        }
      </div>
    )
  }
}