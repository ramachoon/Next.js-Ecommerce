import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  authForm: {
    message: null,
  },
}

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state[action.payload.form].message = action.payload.message
    },
    clearMessage: (state, action) => {
      state[action.payload.form].message = null
    },
  },
})

export const { setMessage, clearMessage } = validationSlice.actions
export default validationSlice.reducer