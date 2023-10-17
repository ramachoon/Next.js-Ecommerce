import { signIn } from "next-auth/react"
import axios from "axios"

export default async function handleLogin(email, password) {
  try {
    // Try to login
    const res = await axios.post("/api/user/login", {
      email,
      password,
    })

    // If the login was successful
    if (res.data.status === 200) {
      signIn('credentials', {
        email,
        password,
        redirect: false,
      })
    }

    // Data coming from the server
    // Temporary, will be removed in the future
    console.log(res.data)

    // TODO: Show messages to the user

  } catch (error) {
    console.log(error)
  }
}