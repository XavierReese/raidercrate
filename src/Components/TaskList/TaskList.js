import React from 'react'
import './TaskList.css'
import TaskOption from '../TaskOption/TaskOption'
import logo from '../../logo.png'

class TaskList extends React.Component {
  renderTaskList() {
    let tasks = this.props.tasks
    let taskList = []
    for (let i = 0; i < tasks.length; i++) {
      taskList.push(
        <TaskOption
          key={i}
          task={tasks[i]}
          newTask={() => this.props.newTask(i)}
          current={i === this.props.currentTask}
        />
      )
    }

    return taskList
  }

  render() {
    return (
      <div className="header">
        <img src={logo} alt="Raider Crate Logo" />
        <nav>
          <ul>{this.renderTaskList()}</ul>
        </nav>
      </div>
    )
  }
}

export default TaskList
