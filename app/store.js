import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import countriesReducer from '../features/countries/countriesSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    countries: countriesReducer
  }
})
