import React from 'react'
import Nav from './Nav'
import Header from './Header'
import { resume } from '../constants/resume'

class App extends React.Component {
  state = resume

  render() {
    return (
      <section>
        <Header profile={this.state.profile} />
        <Nav />
      </section>
    )
  }
}

export default App
