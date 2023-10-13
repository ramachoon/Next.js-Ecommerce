"use client"

import { Provider as ReduxProvider } from "react-redux"
import store from "@/lib/redux"
import { SessionProvider } from "next-auth/react"

export default function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </ReduxProvider>
  )
}