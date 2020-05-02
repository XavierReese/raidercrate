import React from 'react'
import logo from '../../logo.svg'
import TaskList from '../TaskList/TaskList.js'
import TaskRenderer from '../TaskRenderer/TaskRenderer'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          order: 0,
          type: 'qa',
          info: {
            question: 'Testing',
            answer: 'TESTING'
          },
          current: '',
          open: true,
          done: false
        },
        {
          order: 1,
          open: false,
          done: false
        },
        {
          order: 2,
          open: false,
          done: false
        },
        {
          order: 3,
          open: false,
          done: false
        }
      ],
      taskNum: 0
    }

    this.changeTask = this.changeTask.bind(this)
    this.editCurrent = this.editCurrent.bind(this)
    this.completeTask = this.completeTask.bind(this)
  }

  completeTask(taskNum) {
    let tasks = this.state.tasks
    tasks[taskNum].done = true
    tasks[taskNum + 1].open = true
    this.setState({tasks: tasks})
  }

  editCurrent(taskNum, newCurrent) {
    let tasks = this.state.tasks
    tasks[taskNum].current = newCurrent
    this.setState({tasks: tasks})
  }

  changeTask(taskNum) {
    this.setState({taskNum: taskNum})
    console.log(this.state.tasks[taskNum])
  }

  render() {
    return (
      <div className="App">
        <TaskList tasks={this.state.tasks} currentTask={this.state.taskNum} newTask={this.changeTask} />
        <TaskRenderer
          currentTask={this.state.taskNum}
          tasks={this.state.tasks}
          onComplete={this.completeTask}
          changeCurrent={this.editCurrent}
        />
      </div>
    )
  }
}

export default App
