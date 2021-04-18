import {configureStore} from '@reduxjs/toolkit'

import userReducer from './user.slice'
import menuReducer from './menu.slice'

export default configureStore({
  reducer: {
    userReducer,
    menuReducer
  }
})
