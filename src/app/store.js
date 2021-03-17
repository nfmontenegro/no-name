import {configureStore} from '@reduxjs/toolkit'

import userReducer from '../features/slices/user-slice'

export default configureStore({
  reducer: {
    users: userReducer
  }
})
