import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {signinUser} from '../../services/user'

export const userLogin = createAsyncThunk('users/login', async formData =>
  signinUser(formData)
)

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
    }
  }
})

export default userSlice.reducer
