import { createSlice } from '@reduxjs/toolkit'

let initialState = { user_n_email: null, password: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, { payload }) => {
      state.user_n_email = payload.user_n_email
      state.password = payload.password
    }
  }
})
export const { signUp } = userSlice.actions

export default userSlice.reducer
