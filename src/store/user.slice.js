import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {apiClient} from '../api/user'

export const userLogin = createAsyncThunk('@@USER/LOGIN', async formData => {
  const options = {
    endpoint: 'signin',
    method: 'POST',
    data: formData
  }
  const response = await apiClient(options)
  return {
    data: response
  }
})

export const userProfile = createAsyncThunk('@@USER/PROFILE', async () => {
  const options = {
    endpoint: 'users/me',
    method: 'GET'
  }
  const response = await apiClient(options)
  return {
    data: response
  }
})

export const userRegisterAction = createAsyncThunk('@@USER/REGISTER', async formData => {
  const options = {
    endpoint: 'signup',
    method: 'POST',
    data: formData
  }

  const response = await apiClient(options)
  return {
    data: response
  }
})

export const updateUser = createAsyncThunk('@@USER/UPDATE', async ({userId, formValues}) => {
  const options = {
    endpoint: `users/${userId}`,
    method: 'POST',
    data: formValues
  }

  const response = await apiClient(options)
  return {
    data: response
  }
})

const initialState = {
  user: {
    loading: false,
    data: null,
    error: null
  }
}

const hasPrefix = (action, prefix) => action.type.startsWith(prefix)
const isPending = action => action.type.endsWith('/pending')
const isRejected = action => action.type.endsWith('/rejected')

const isPendingAction = prefix => action => hasPrefix(action, prefix) && isPending(action)
const isRejectedAction = prefix => action => hasPrefix(action, prefix) && isRejected(action)

const fulfilledPayloadReducer = (state, action) => {
  state.user = {
    loading: false,
    data: action.payload.data,
    error: null
  }
}

const userSlice = createSlice({
  name: '@@USER',
  initialState,
  reducers: {
    userLogout: state => {
      state.user = initialState.user
    }
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.fulfilled, fulfilledPayloadReducer)
      .addCase(userProfile.fulfilled, fulfilledPayloadReducer)
      .addCase(userRegisterAction.fulfilled, fulfilledPayloadReducer)
      .addCase(updateUser.fulfilled, fulfilledPayloadReducer)
      .addMatcher(isPendingAction('@@USER/'), state => {
        state.user.loading = true
      })
      .addMatcher(isRejectedAction('@@USER/'), (state, action) => {
        state.user.data = null
        state.user.error = action.payload.data
      })
  }
})

export const {userLogout, fetchRequest} = userSlice.actions
export default userSlice.reducer
