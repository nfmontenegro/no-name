import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {signinUser, me, registerUser} from '../../api/user'

export const userLogin = createAsyncThunk('@@USER/LOGIN', async formData =>
  signinUser(formData)
)

export const userProfile = createAsyncThunk('@@USER/PROFILE', async () => me())

export const userRegisterAction = createAsyncThunk('@@USER/REGISTER', async formData =>
  registerUser(formData)
)

const initialState = {
  users: {
    status: 'idle',
    data: {},
    error: {}
  }
}

const hasPrefix = (action, prefix) => action.type.startsWith(prefix)
const isPending = action => action.type.endsWith('/pending')
const isRejected = action => action.type.endsWith('/rejected')

const isPendingAction = prefix => action => {
  // Note: this cast to AnyAction could also be `any` or whatever fits your case best
  return hasPrefix(action, prefix) && isPending(action)
}

const isRejectedAction = prefix => action => {
  // Note: this cast to AnyAction could also be `any` or whatever fits your case best - like if you had standardized errors and used `rejectWithValue`
  return hasPrefix(action, prefix) && isRejected(action)
}

const fulfilledPayloadReducer = (state, action) => {
  state.users = {
    status: 'idle',
    data: action.payload.data,
    error: {}
  }
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userLogout: state => {
      state.users = initialState.users
    }
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.fulfilled, fulfilledPayloadReducer)
      .addCase(userProfile.fulfilled, fulfilledPayloadReducer)
      .addCase(userRegisterAction.fulfilled, fulfilledPayloadReducer)
      .addMatcher(isPendingAction('user/'), state => {
        state.users = {
          status: 'loading',
          data: {},
          error: {}
        }
      })
      .addMatcher(isRejectedAction('user/'), (state, action) => {
        state.users = {
          status: 'idle',
          data: {},
          error: action.payload.data
        }
      })
  }
})

export const {userLogout} = userSlice.actions
export default userSlice.reducer
