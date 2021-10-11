import {configureStore} from '@reduxjs/toolkit'

import userReducer from './user.slice'
import usersReducer from './users.slice'
import menuReducer from './menu.slice'

export default configureStore({
  reducer: {
    userReducer,
    usersReducer,
    menuReducer
  }
})
