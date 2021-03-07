import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {userLogin} from './features/user'

import Button from './components/Form/Button'

function App() {
  const dispatch = useDispatch()
  const {user: userState} = useSelector(state => state.users)

  const handleClick = () => {
    dispatch(userLogin())
  }

  return (
    <div>
      <Button action={handleClick} textButton="Click me" loading={userState.status} />
    </div>
  )
}

export default App
