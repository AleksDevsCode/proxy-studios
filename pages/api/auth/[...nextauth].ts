import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '994ad62fe587f7aecdc8',
      clientSecret: '0f4f1d01055dc9c160df0c367ea06486692992a6',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)