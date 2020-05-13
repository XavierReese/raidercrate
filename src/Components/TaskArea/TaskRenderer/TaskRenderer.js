import React from 'react'
import QnA from '../QnA/QnA'
import WrittenPage from '../writtenPage/writtenPage'
import './TaskRenderer.css'

class TaskRenderer extends React.Component {
  renderCurrentTask() {
    let i = this.props.currentTask
    let task = this.props.tasks[i]
    let type = task.type
    if (type === 'qa') {
      return (
        <QnA
          className="QnA"
          task={task}
          onComplete={() => this.props.onComplete(this.props.currentSection, i)}
          changeCurrent={input => this.props.changeCurrent(this.props.currentSection, i, input)}
        />
      )
    } else if (type === 'p') {
      return (
        <WrittenPage
          className="written"
          page={task}
          onComplete={() => {
            this.props.onComplete(this.props.currentSection, i)
          }}
        />
      )
    }
  }

  render() {
    return <div className="TaskDiv">{this.renderCurrentTask()}</div>
  }
}

export default TaskRenderer
