import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "./modal"
import validationReducer from "./validation"

const store = configureStore({
  reducer: {
    modal: modalReducer,
    validation: validationReducer,
  },
})

export default store