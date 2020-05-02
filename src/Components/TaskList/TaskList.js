import React from 'react'
import './TaskList.css'
import TaskOption from '../TaskOption/TaskOption'

class TaskList extends React.Component {
  renderTaskList() {
    let tasks = this.props.tasks
    let taskList = []
    for (let i = 0; i < tasks.length; i++) {
      taskList.push(<TaskOption key={i} num={i} task={tasks[i]} newTask={this.props.newTask} />)
    }

    return taskList
  }

  render() {
    return <div className="taskList">{this.renderTaskList()}</div>
  }
}

export default TaskList
