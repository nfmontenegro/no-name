import {configureStore} from '@reduxjs/toolkit'

import userReducer from '../features/user'

export default configureStore({
  reducer: {
    users: userReducer
  }
})
