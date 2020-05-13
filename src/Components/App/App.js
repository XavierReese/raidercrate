import React from 'react'
import NavBar from '../Navigation/NavBar/NavBar.js'
import TaskRenderer from '../TaskArea/TaskRenderer/TaskRenderer'
import Breadcrumbs from '../Bread/Breadcrumbs/Breadcrumbs'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {
          order: 'INTRO',
          open: true,
          done: false,
          furthestOpen: 0,
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
                question: 'Testing testing testing testing testing testing testing testing testing',
                answer: 'TESTING'
              },
              current: '',
              open: false,
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
              open: false,
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
              open: false,
              done: false
            }
          ]
        },
        {
          order: 1,
          open: true,
          done: false,
          furthestOpen: 0,
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
                question: 'Testing testing testing testing testing testing testing testing testing',
                answer: 'TESTING'
              },
              current: '',
              open: false,
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
              open: false,
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
              open: false,
              done: false
            }
          ]
        },
        {
          order: 2,
          open: true,
          done: false,
          furthestOpen: 0,
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
                question: 'Testing testing testing testing testing testing testing testing testing',
                answer: 'TESTING'
              },
              current: '',
              open: false,
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
              open: false,
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
              open: false,
              done: false
            }
          ]
        },
        {
          order: 3,
          open: true,
          done: false,
          furthestOpen: 0,
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
                question: 'Testing testing testing testing testing testing testing testing testing',
                answer: 'TESTING'
              },
              current: '',
              open: false,
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
              open: false,
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
              open: false,
              done: false
            }
          ]
        },
        {
          order: 4,
          open: true,
          done: false,
          furthestOpen: 0,
          tasks: [
            {
              order: 4,
              type: 'qa',
              info: {
                question: 'Testing',
                answer: 'TESTING'
              },
              current: '',
              open: false,
              done: false
            }
          ]
        },
        {
          order: 'END',
          open: false,
          done: false,
          furthestOpen: 0,
          tasks: [
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
          ]
        }
      ],
      currentSection: 0,
      currentTask: 0,
      ending: {
        order: 'END',
        type: 'p',
        info: {
          title: 'Congratulations!',
          subtitle: 'You finished the hunt!',
          para:
            'instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions instructions'
        },
        open: false
      }
    }

    this.setSection = this.setSection.bind(this)
    this.setTask = this.setTask.bind(this)
    this.editCurrent = this.editCurrent.bind(this)
    this.completeTask = this.completeTask.bind(this)
    this.checkSectionCompleteness = this.checkSectionCompleteness.bind(this)
  }

  completeTask(sectionNum, taskNum) {
    let sections = this.state.sections
    let tasks = sections[sectionNum].tasks
    tasks[taskNum].done = true
    if (tasks.length !== taskNum + 1) {
      tasks[taskNum + 1].open = true
      sections[sectionNum].furthestOpen = taskNum + 1
    }
    sections[sectionNum].tasks = tasks
    this.setState({sections: sections}, this.checkSectionCompleteness(sectionNum))
  }

  checkSectionCompleteness(secNum) {
    let sections = this.state.sections
    let section = sections[secNum]
    let done = true
    section.tasks.forEach(t => {
      if (!t.done) done = false
    })
    if (done) {
      section.done = true
      sections[secNum] = section
      console.log('DONE! ' + secNum)
      this.setState({sections: section})
      this.checkAllComplete()
    }
  }

  checkAllComplete() {
    let sections = this.state.sections
    for (let i = 0; i < sections.length - 1; i++) {
      if (!sections[i].done) return
    }
    sections[sections.length - 1].open = true
    this.setState({sections: sections})
  }

  editCurrent(sectionNum, taskNum, newCurrent) {
    let sections = this.state.sections
    let tasks = sections[sectionNum].tasks
    tasks[taskNum].current = newCurrent
    sections[sectionNum].tasks = tasks
    this.setState({sections: sections})
  }

  setSection(sectionNum) {
    let newSec = this.state.sections[sectionNum] ? this.state.sections[sectionNum] : this.state.ending
    let currentTask = newSec.furthestOpen ? newSec.furthestOpen : 0
    if (newSec.open) this.setState({currentSection: sectionNum, currentTask: currentTask})
  }

  setTask(taskNum) {
    this.setState({currentTask: taskNum})
  }

  render() {
    return (
      <div className="App">
        <NavBar
          sections={this.state.sections}
          currentSection={this.state.currentSection}
          updateSection={this.setSection}
        />
        {/*
        <div className="notNav">
          <Breadcrumbs section={this.state.sections[this.state.currentSection]} updateTask={this.setTask} />
        </div>
        <TaskRenderer
          currentSection={this.state.currentSection}
          currentTask={this.state.currentTask}
          tasks={this.state.sections[this.state.currentSection].tasks}
          onComplete={this.completeTask}
          changeCurrent={this.editCurrent}
        />
        */}
      </div>
    )
  }
}

export default App
