import React from 'react'
import './Breadcrumbs.css'

class Breadcrumbs extends React.Component {
  handleClick(taskNum, open) {
    if (open) this.props.updateTask(taskNum)
  }

  renderBreadcrumbs() {
    let section = this.props.section
    let tasks = section.tasks
    let result = []
    for (let i = 0; i < tasks.length; i++) {
      let className = 'bc'
      if (i === this.props.currentTask) {
        className += ' current'
      }
      if (tasks[i].open) {
        className += ' open'
      } else {
        className += ' closed'
      }
      result.push(
        <li key={i} className={className} onClick={() => this.handleClick(i, tasks[i].open)}>
          {tasks[i].order}
        </li>
      )
    }

    return result
  }

  render() {
    return <ul className="breadcrumbs">{this.renderBreadcrumbs()}</ul>
  }
}

export default Breadcrumbs
