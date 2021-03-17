import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {signinUser, me} from '../../api/user'

export const userLogin = createAsyncThunk('users/login', async formData =>
  signinUser(formData)
)

export const userProfile = createAsyncThunk('user/profile', async () => me())

const initialState = {
  user: {
    status: 'idle',
    data: {},
    error: {}
  }
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: state => {
      state.user = {
        status: 'loading',
        data: {},
        error: {}
      }
    },
    [userLogin.fulfilled]: (state, action) => {
      state.user = {
        status: 'idle',
        data: action.payload,
        error: {}
      }
    },
    [userLogin.rejected]: (state, action) => {
      state.user = {
        status: 'idle',
        data: {},
        error: action.payload
      }
    },

    [userProfile.pending]: state => {
      state.user = {
        status: 'loading',
        data: {},
        error: {}
      }
    },
    [userProfile.fulfilled]: (state, action) => {
      state.user = {
        status: 'idle',
        data: action.payload,
        error: {}
      }
    },
    [userProfile.rejected]: (state, action) => {
      state.user = {
        status: 'idle',
        data: {},
        error: action.payload
      }
    }
  }
})

export default userSlice.reducer
