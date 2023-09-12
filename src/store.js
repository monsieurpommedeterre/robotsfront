import { configureStore } from '@reduxjs/toolkit'
import robotsReducer from './features/robots/robotsSlice'

export default configureStore({
  reducer: {
    robots: robotsReducer
  },
})