import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

  if(req.query.nextauth?.includes("callback") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      req.body
    )
  }

  const isDefaultSigninPage = req.method === "GET" && req.query.nextauth?.includes("signin")

  return await NextAuth(req, res, {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    secret: '45cZcLwZPmB4HBXH9qF04RADJjQD9Gr/LKOjMQaKHHg=',
    pages: {
        signIn: 'auth/signin',
    },
    callbacks: {
        async redirect({ baseUrl }) {
            return baseUrl
          },
    }
  })
}