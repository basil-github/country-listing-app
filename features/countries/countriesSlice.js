import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  list: [],
  activeRegion: null
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountries: (state, { payload }) => {
      state.list = payload
      state.activeRegion = null
    },
    setRegion: (state, { payload }) => {
      state.activeRegion = payload
    }
  }
})
export const { getCountries, setRegion } = countriesSlice.actions

export default countriesSlice.reducer
