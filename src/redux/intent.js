import { createSlice } from '@reduxjs/toolkit'

export const intentSlice = createSlice({
  name: 'intent',
  initialState:{
    value: 'initial value'
  },
  reducers: {

    changeValue: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue } = intentSlice.actions

export default intentSlice.reducer