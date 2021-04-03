import React from 'react'
import {Switch, Route} from 'react-router-dom'

const UserLogin = React.lazy(() => import('./features/user/Login'))
const UserRegister = React.lazy(() => import('./features/user/Register'))
const Profile = React.lazy(() => import('./features/user/Profile'))

const Nav = React.lazy(() => import('./components/Navbar/Nav'))
const Home = React.lazy(() => import('./Home'))
const ProtectedRoute = React.lazy(() => import('./utils/auth'))

function App() {
  return (
    <Nav>
      <Switch>
        <Route path="/login" component={UserLogin} />
        <Route path="/register" component={UserRegister} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </Nav>
  )
}

export default App
