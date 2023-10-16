import connectMongoDB from "@/lib/mongodb"
import User from "@/lib/mongodb/models/user"
import bcrypt from "bcryptjs"
import response from "@/lib/helpers/response"

const responses = {
  success: { status: 200, message: "Successfully logged in." },
  userNotFound: { status: 404, message: "User does not exist." },
  wrongPassword: { status: 401, message: "Password is incorrect." },
  emptyFields: { status: 400, message: "Email and password are required." },
}

export async function POST(request) {

  // Get email and password from request body
  const { email, password } = await request.json()

  // If email or password are empty
  if (email === "" || password === "") {
    return response(responses.emptyFields)
  }

  try {
    await connectMongoDB()

    // Check if user exists in database
    const user = await User.findOne({ email })

    // If user doesn't exist
    if (!user) {
      return response(responses.userNotFound)
    }

    // Check password
    const passwordsMatch = await bcrypt.compare(password, user.password)

    // If password doesn't match
    if (!passwordsMatch) {
      return response(responses.wrongPassword)
    }

    if (user && passwordsMatch) {
      return response(responses.success)
    }

  } catch (error) {
    return response({ status: 500, message: error?.message })
  }
}