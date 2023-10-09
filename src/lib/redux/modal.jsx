import { createSlice } from "@reduxjs/toolkit"

// Initial state
const initialState = {
  authModal: false,
}

// Slice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state[action.payload] = !state[action.payload]
    },
  },
})


export const { toggleModal } = modalSlice.actions
export default modalSlice.reducer