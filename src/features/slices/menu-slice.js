import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  menu: {
    isOpen: false,
  },
}

const menuSlice = createSlice({
  name: '@@MENU',
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.menu = {
        isOpen: action.payload,
      }
    },
  },
})

export const {toggleMenu} = menuSlice.actions
export default menuSlice.reducer
