"use client"

import { Provider as ReduxProvider } from "react-redux"
import store from "@/lib/redux"

export default function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}