import React from 'react'
import './QnA.css'

class QnA extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.onChange = this.onChange.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.setState({input: this.props.task.current})
  }

  onChange(e) {
    let input = e.target.value
    this.props.changeCurrent(this.props.task.order, input)
    this.setState({input: input}, () => {
      if (input.toUpperCase() === this.props.task.info.answer.toUpperCase()) {
        if (!this.state.done) {
          this.props.onComplete(this.props.task.order)
        }
        console.log('correct')
        console.log(this.state)
      }
    })
  }

  render() {
    let divClass = 'qnadiv'
    if (this.state.done) {
      divClass += ' completeQnAdiv'
    }
    return (
      <div className={divClass}>
        <p className="question">{this.props.task.info.question}</p>
        <input className="answer" onChange={this.onChange} value={this.state.input} />
      </div>
    )
  }
}

export default QnA
