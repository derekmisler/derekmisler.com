import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './assets/css/style.css'
import App from './components/App'

const Root = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
)

render(<Root />, document.querySelector('#main'))
