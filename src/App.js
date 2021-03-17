import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import UserLogin from './features/user/Login'
import Home from './Home'

import ProtectedRoute from './utils/auth'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={UserLogin} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
