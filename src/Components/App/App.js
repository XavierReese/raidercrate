import React from 'react'
import TaskList from '../TaskList/TaskList.js'
import TaskRenderer from '../TaskRenderer/TaskRenderer'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          order: 'INTRO',
          type: 'p',
          info: {
            title: 'INSTRUCTIONS',
            subtitle: 'Read Carefully!',
            para:
              'instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions',
            button: "I'm Ready!"
          },
          open: true,
          done: false
        },
        {
          order: 1,
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
          order: 2,
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
          order: 3,
          type: 'qa',
          info: {
            question: 'Testing',
            answer: 'TESTING'
          },
          current: '',
          open: false,
          done: false
        },
        {
          order: 4,
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
          order: 'END',
          type: 'p',
          info: {
            title: 'Congratulations!',
            subtitle: 'You finished the hunt!',
            para:
              'instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions'
          },
          open: true
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
    if (tasks.length !== taskNum + 1) {
      tasks[taskNum + 1].open = true
    }
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
