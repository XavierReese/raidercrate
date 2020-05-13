import React from 'react'
import './QnA.css'

class QnA extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    let input = e.target.value
    console.log('here')
    this.props.changeCurrent(input)
    if (input.toUpperCase() === this.props.task.info.answer.toUpperCase()) {
      if (!this.props.task.done) {
        this.props.onComplete()
      }
    }
  }

  render() {
    let divClass = 'qnadiv'
    if (this.props.task.done) {
      console.log('should be green')
      divClass += ' completeQnAdiv'
    }
    return (
      <div className={divClass}>
        <h1>{'Question ' + this.props.task.order}</h1>
        <p className="question">{this.props.task.info.question}</p>
        <input
          placeholder="Enter Your Answer Here"
          className="answer"
          onChange={this.onChange}
          value={this.props.task.current}
        />
      </div>
    )
  }
}

export default QnA
