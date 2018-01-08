import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import Header from './Header'
import { resume } from '../constants/resume'

class App extends Component {
  state = { ...resume }

  render() {
    const { profile } = this.state
    return (
      <Fragment>
        <Nav />
        <Header profile={profile} />
      </Fragment>
    )
  }
}

export default App
