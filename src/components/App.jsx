import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Qualifications from './Qualifications'
import Projects from './Projects'
import Footer from './Footer'
import resume from '../constants/resume'

class App extends Component {
  state = { ...resume }

  render() {
    const { profile } = this.state
    return (
      <Fragment>
        <Header profile={profile} />
        <Nav />
        <About />
        <Experience />
        <Qualifications />
        <Projects />
        <Footer />
      </Fragment>
    )
  }
}

export default App
