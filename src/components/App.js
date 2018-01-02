import React from 'react'
import Nav from './Nav'
import base from '../base'

class App extends React.Component {
  state = {}

  static propTypes = {}

  componentWillMount() {
    this.ref = base.syncState('portfolio-derek-misler', {
      context: this,
      state: 'contact_details'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  render() {
    return (
      <Nav />
    )
  }
}

export default App
