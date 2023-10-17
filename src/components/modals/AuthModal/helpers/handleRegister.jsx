import axios from "axios"

export default async function handleRegister(email, password) {
  try {
    // Try to register
    const res = await axios.post("/api/user/register", {
      email,
      password
    })

    // Data coming from the server
    // Temporary, will be removed in the future
    console.log(res.data)

    // TODO: Login automatically after registration is successful
    // TODO: Show messages to the user

  } catch (error) {
    console.log(error)
  }
}