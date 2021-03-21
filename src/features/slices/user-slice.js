import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {signinUser, me} from '../../api/user'

export const userLogin = createAsyncThunk('users/login', async formData =>
  signinUser(formData)
)

export const userProfile = createAsyncThunk('user/profile', async () => me())

const initialState = {
  users: {
    status: 'idle',
    data: {},
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
  extraReducers: {
    [userLogin.pending]: state => {
      state.users = {
        status: 'loading',
        data: {},
        error: {}
      }
    },
    [userLogin.fulfilled]: (state, action) => {
      state.users = {
        status: 'idle',
        data: action.payload.data,
        error: {}
      }
    },
    [userLogin.rejected]: (state, action) => {
      state.users = {
        status: 'idle',
        data: {},
        error: action.payload
      }
    },

    [userProfile.pending]: state => {
      state.users = {
        status: 'loading',
        data: {},
        error: {}
      }
    },
    [userProfile.fulfilled]: (state, action) => {
      state.users = {
        status: 'idle',
        data: action.payload.data,
        error: {}
      }
    },
    [userProfile.rejected]: (state, action) => {
      state.users = {
        status: 'idle',
        data: {},
        error: action.payload
      }
    }
  }
})

export const {userLogout} = userSlice.actions
export default userSlice.reducer
