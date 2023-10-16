import connectMongoDB from "@/lib/mongodb"
import User from "@/lib/mongodb/models/user"
import bcrypt from "bcryptjs"

export default async function authorize(credentials) {

  // Destructure email and password
  const { email, password } = credentials

  try {
    await connectMongoDB()

    // Find user in database
    const user = await User.findOne({ email })
    const passwordsMatch = await bcrypt.compare(password, user.password)

    // If user or password don't match, return null
    if (!user || !passwordsMatch) {
      return null
    }

    return user
  } catch (error) {
    console.log("Error: ", error)
  }
}
