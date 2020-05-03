import React from 'react'
import './TaskOption.css'

class TaskOption extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.task.open) {
      this.props.newTask(this.props.order)
    }
  }

  render() {
    let state = ''
    let task = this.props.task

    if (task.open) {
      state += 'openTask'
      if (task.done) {
        state += ' completeTask'
      }
    } else {
      state += 'closedTask'
    }

    if (typeof this.props.task.order === 'string') state += ' string'

    if (this.props.current) state += ' current'
    return (
      <button className={'task ' + state} onClick={this.handleClick}>
        <li className="taskNum">{this.props.task.order}</li>
      </button>
    )
  }
}

export default TaskOption
