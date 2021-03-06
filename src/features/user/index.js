import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const userLogin = createAsyncThunk('users/login', async () =>
  axios.post('http://127.0.0.1:8000/v1/login')
)

const initialState = {
  user: {
    status: 'idle',
    data: {},
    error: {}
  }
}

export const userSlice = createSlice({
  name: 'user',
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
