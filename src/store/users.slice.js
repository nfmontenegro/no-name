import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {apiClient} from '../api/user'

export const getUsers = createAsyncThunk('@@USERS/ALL_USERS', async () => {
  const options = {
    endpoint: `users`
  }

  const response = await apiClient(options)
  return {
    data: response
  }
})

const initialState = {
  users: {
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
  state.users = {
    loading: false,
    data: action.payload.data,
    error: null
  }
}

const usersSlice = createSlice({
  name: '@@USERS',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, fulfilledPayloadReducer)
      .addMatcher(isPendingAction('@@USERS/'), state => {
        state.users = {
          loading: true,
          data: null,
          error: null
        }
      })
      .addMatcher(isRejectedAction('@@USERS/'), (state, action) => {
        state.users = {
          loading: false,
          data: null,
          error: action.payload.data
        }
      })
  }
})

export const {fetchRequest} = usersSlice.actions
export default usersSlice.reducer
