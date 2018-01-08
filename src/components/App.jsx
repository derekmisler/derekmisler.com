import React, { Component } from 'react'
import Nav from './Nav'
import Header from './Header'
import { resume } from '../constants/resume'

class App extends Component {
  state = { ...resume }

  render() {
    const { profile } = this.state
    return (
      <section>
        <Header profile={profile} />
        <Nav />
      </section>
    )
  }
}

export default App
