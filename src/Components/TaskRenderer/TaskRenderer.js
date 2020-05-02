import React from 'react'
import QnA from '../QnA/QnA'
import './TaskRenderer.css'

class TaskRenderer extends React.Component {
  renderTitle() {
    return <h1 className="qTitle">{'Question ' + (this.props.currentTask + 1)}</h1>
  }

  renderCurrentTask() {
    let task = this.props.tasks[this.props.currentTask]
    let type = task.type
    if (type === 'qa') {
      return (
        <QnA className="QnA" task={task} onComplete={this.props.onComplete} changeCurrent={this.props.changeCurrent} />
      )
    }
    // else if (type === 'qr') {
    //   return (
    //     <QnA className="qr" task={task} onComplete
    //   )
    // }
  }

  render() {
    return (
      <div className="TaskDiv">
        {this.renderTitle()}
        {this.renderCurrentTask()}
      </div>
    )
  }
}

export default TaskRenderer
