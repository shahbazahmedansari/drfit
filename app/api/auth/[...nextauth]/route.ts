import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_CLIENT_ID || "",
      clientSecret: process.env.NEXT_AUTH_GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {},
  pages: {
    signIn: "/signin",
    signup: "/signup",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
