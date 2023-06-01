import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './module/home'

const store = configureStore({
  reducer: {
    homeReducer
  }
})

export type IRootState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch

export default store
