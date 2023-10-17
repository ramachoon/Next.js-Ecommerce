"use client"

import { Provider as ReduxProvider } from "react-redux"
import store from "@/lib/redux"
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider>
        {children}
      </SessionProvider>

      <ToastContainer
        hideProgressBar={true}
        newestOnTop
        position="top-right"
      />
    </ReduxProvider>
  )
}