import { createSlice } from '@reduxjs/toolkit'

export const robotsSlice = createSlice({
  name: 'robots',
  initialState: {
    value: [],
  },
  reducers: {
    setStoreRobots: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setStoreRobots } = robotsSlice.actions

export default robotsSlice.reducer