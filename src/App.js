import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import UserLogin from './features/user/UserLogin'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={UserLogin} />
        </Switch>
      </Router>
    </>
  )
}

export default App
