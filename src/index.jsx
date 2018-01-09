import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import './assets/sass/style.sass'
import App from './components/App'

const Root = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.Fragment>
)

render(<Root />, document.getElementById('root'))
registerServiceWorker()
