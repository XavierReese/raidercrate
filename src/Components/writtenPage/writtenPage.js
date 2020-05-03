import React from 'react'
import './WrittenPage.css'

class WrittenPage extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onComplete()
  }

  render() {
    let info = this.props.page.info
    let h1Class = info.title === 'Congratulations!' ? 'congrats' : undefined
    console.log(h1Class)
    let subtitle = info.subtitle ? <h2 className="subtitle">{info.subtitle}</h2> : undefined
    let button = info.button ? (
      <button className="button" onClick={this.handleClick}>
        {info.button}
      </button>
    ) : (
      undefined
    )
    return (
      <div className="page">
        <h1 className={h1Class}>{info.title}</h1>
        {subtitle}
        <p>{info.para}</p>
        {button}
      </div>
    )
  }
}

export default WrittenPage
