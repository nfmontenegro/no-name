import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import UserLogin from './features/user/Login'
import UserRegister from './features/user/Register'
import Nav from './components/Navbar/Nav'
import Home from './Home'

import ProtectedRoute from './utils/auth'

function App() {
  return (
    <Router>
      <Nav>
        <Switch>
          <Route path="/login" component={UserLogin} />
          <Route path="/register" component={UserRegister} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </Nav>
    </Router>
  )
}

export default App
