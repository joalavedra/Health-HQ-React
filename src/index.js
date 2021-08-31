import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import LandingPage from './views/landing-page'
import ExamplePage from './views/example-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LandingPage} path="/" />
        <Route exact component={ExamplePage} path="/example-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
