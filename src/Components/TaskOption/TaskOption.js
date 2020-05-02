import React from 'react'
import './TaskOption.css'

class TaskOption extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.task.open) {
      this.props.newTask(this.props.num)
    }
  }

  render() {
    let state = ''
    let task = this.props.task

    console.log(task)

    if (task.open) {
      state += 'openTask'
      if (task.done) {
        console.log('heyo we know you done')
        state += ' completeTask'
      }
    } else {
      state += 'closedTask'
    }
    return (
      <button className={'task ' + state} onClick={this.handleClick}>
        <li className="taskNum">{this.props.num + 1}</li>
      </button>
    )
  }
}

export default TaskOption
