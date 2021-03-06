import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {userLogin} from './features/user/user.js'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => {
    console.log(' User reducer ', state)
    return state.user
  })

  console.log('Dispatch: ', dispatch)
  return (
    <div>
      <button onClick={() => dispatch(userLogin())}> Click me </button>
    </div>
  )
}

export default App
