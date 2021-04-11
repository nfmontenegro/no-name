import React from 'react'
import {Switch, Route} from 'react-router-dom'

const UserLogin = React.lazy(() => import('./features/user/Login'))
const UserRegister = React.lazy(() => import('./features/user/Register'))
const Profile = React.lazy(() => import('./features/user/Profile'))
const EditProfile = React.lazy(() => import('./features/user/EditProfile'))

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
        <ProtectedRoute path="/:username" component={EditProfile} />
      </Switch>
    </Nav>
  )
}

export default App
