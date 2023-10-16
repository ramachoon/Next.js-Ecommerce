import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import authorize from "./helpers/authorize"
import session from "./helpers/session"
import jwt from "./helpers/jwt"

const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      authorize,
    }),
  ],
  callbacks: {
    session,
    jwt,
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }