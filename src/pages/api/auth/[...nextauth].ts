import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import StravaProvider from "next-auth/providers/strava";

const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    }),
    StravaProvider({
      clientId: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
});

export default authOptions;
