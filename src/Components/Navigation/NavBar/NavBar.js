import React from 'react'
import './NavBar.css'
import NavSection from '../NavSection/NavSection'
import logo from '../../../logo.png'

class NavBar extends React.Component {
  renderNavBar() {
    let sections = this.props.sections
    let taskList = []
    for (let i = 0; i < sections.length; i++) {
      let className = 'navSection'

      if (i === 0) {
        className += ' intro'
      } else if (i === 1) {
        className += ' second'
      }
      if (i === sections.length - 2) {
        className += ' secondToLast'
      } else if (i === sections.length - 1) {
        className += ' ending'
      }

      if (sections[i].done) {
        className += ' done'
      } else if (sections[i].open) {
        className += ' open'
      } else {
        className += ' closed'
      }

      taskList.push(
        <li className={className} key={i}>
          <NavSection
            sectionInfo={sections[i]}
            updateSection={() => this.props.updateSection(i)}
            isCurrentSection={i === this.props.currentSection}
          />
        </li>
      )
    }

    // let ending = this.props.ending
    //
    // taskList.push(
    //   <NavSection
    //     key={'ending'}
    //     sectionInfo={ending}
    //     updateSection={() => this.props.updateSection(-1)}
    //     isCurrentSection={-1 === this.props.currentSection}
    //   />
    // )

    return taskList
  }

  render() {
    return (
      <div className="header">
        <img src={logo} alt="Raider Crate Logo" />
        <nav>
          <ul>{this.renderNavBar()}</ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
