import { createSlice } from '@reduxjs/toolkit'

export const robotsSlice = createSlice({
  name: 'robots',
  initialState: {
    value: [],
  },
  reducers: {
    setRobotsFromStore: (state, action) => {
      state.value = action.payload
    },
    deleteRobotFromStore: (state, action) => {
      state.value = state.value.filter(robot => robot._id !== action.payload)
    },
    addRobotFromStore: (state, action) => {
      state.value.push(action.payload)
    },
    updateRobotChargeFromStore: (state, action) => {
      const robotToChargeIndex = state.value.findIndex(element => element._id === action.payload)
      state.value[robotToChargeIndex].batteryLevel = 100;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRobotsFromStore, deleteRobotFromStore, addRobotFromStore, updateRobotChargeFromStore } = robotsSlice.actions

export default robotsSlice.reducer