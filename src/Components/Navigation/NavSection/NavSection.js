import React from 'react'
import './NavSection.css'

class NavSection extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.sectionInfo.open) {
      this.props.updateSection()
    }
  }

  render() {
    let state = ''
    let section = this.props.sectionInfo

    if (section.done) {
      state += ' completeTask'
    }

    if (typeof section.order === 'string') state += ' string'

    if (this.props.isCurrentSection) state += ' current'

    return <p className="sectionNum">{section.order}</p>
  }
}

export default NavSection
