import {configureStore} from '@reduxjs/toolkit'

import userReducer from '../features/slices/user-slice'
import menuReducer from '../features/slices/menu-slice'

export default configureStore({
  reducer: {
    userReducer,
    menuReducer,
  },
})
