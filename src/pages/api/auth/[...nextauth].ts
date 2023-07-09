import endpoints from "@/utils/endpoints/endpoints";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import StravaProvider from "next-auth/providers/strava";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginApiResponse, UserCredentials } from "@/hooks/useUser/types";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import decodeToken from "@/utils/decodeToken";

const authOptions: NextAuthOptions = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    }),
    StravaProvider({
      clientId: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as UserCredentials;

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.login}`,
          { email, password }
        );

        const { token } = response.data as LoginApiResponse;

        const tokenPayload = decodeToken(token);

        return {
          email: tokenPayload.email,
          token: tokenPayload.token,
          id: tokenPayload.id,
        };
      },
    }),
  ],

  pages: {
    signIn: endpoints.login,
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
});

export default authOptions;
