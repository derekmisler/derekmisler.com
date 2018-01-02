import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import './assets/css/style.css'
import App from './components/App'
import FourOhFour from './components/FourOhFour'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Miss component={FourOhFour} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'))