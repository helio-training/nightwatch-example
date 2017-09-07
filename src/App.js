import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textVisible: false
    }
  }

  render () {
    return (
      <div className="App">
        <p className={`${(this.state.textVisible) ? 'show' : 'hide'} special-text`}>
          I should be visible after you click the button.
        </p>
        <button type="button" style={{ marginTop: '1em' }} onClick={() => this.setState({ textVisible: true })}>Press me...</button>
      </div>
    )
  }
}

export default App
