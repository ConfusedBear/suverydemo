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
        {
          "sum": 5, "title_type": 5,
          "title": ["问题5", "对的吗", "那么对于那个问题您的答案还是", "是这样的吗"],
          "answer": ["man", "woman"],
          "checkboxAnswer": ["aaa", "bbb", "ccc", "ddd"]
        },
        {
          "sum": 5, "title_type": 2,
          "title": ["问题2", "对的吗", "那么对于那个问题您的答案还是", "是这样的吗"],
          "answer": ["man", "woman"],
          "checkboxAnswer": ["aaa", "bbb", "ccc", "ddd"]
        },
        {
          "sum": 5, "title_type": 1,
          "title": ["问题1", "对的吗", "那么对于那个问题您的答案还是", "是这样的吗"],
          "answer": ["man", "woman"],
          "checkboxAnswer": ["aaa", "bbb", "ccc", "ddd"]
        }

      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => {
            return (
              <div>
                {(() => {
                  switch (item["title_type"]) {
                    case 1:
                      return <QuestionDemo1
                        sum={item["sum"]}
                        index={index}
                        title={item["title"]}
                        answer={item["answer"]}
                        checkboxAnswer={item["checkboxAnswer"]}
                      />;
                    case 2:
                      return <QuestionDemo2
                        sum={item["sum"]}
                        index={index}
                        title={item["title"]}
                        answer={item["answer"]}
                        checkboxAnswer={item["checkboxAnswer"]}
                      />;
                    case 3:
                      return <QuestionDemo3
                        sum={item["sum"]}
                        index={index}
                        title={item["title"]}
                        answer={item["answer"]}
                        checkboxAnswer={item["checkboxAnswer"]}
                      />;
                    case 4:
                      return <QuestionDemo4
                        sum={item["sum"]}
                        index={index}
                        title={item["title"]}
                        answer={item["answer"]}
                        checkboxAnswer={item["checkboxAnswer"]}
                      />;
                    case 5:
                      return <QuestionDemo5
                        sum={item["sum"]}
                        index={index}
                        title={item["title"]}
                        answer={item["answer"]}
                        checkboxAnswer={item["checkboxAnswer"]}
                      />;
                    default:
                      return null
                  }
                }
                )()}
              </div>
            )
          })
        }
      </div>
    )
  }
}