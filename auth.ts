import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LineProvider from "next-auth/providers/line";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV !== "production",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
    }),
    // TODO: Enable this again when SendGrid allows me to send emails
    // {
    //   id: "sendgrid",
    //   type: "email",
    //   async sendVerificationRequest({ identifier: email, url }) {
    //     // Call the cloud Email provider API for sending emails
    //     // See https://docs.sendgrid.com/api-reference/mail-send/mail-send
    //     const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    //       // The body format will vary depending on provider, please see their documentation
    //       // for further details.
    //       body: JSON.stringify({
    //         personalizations: [{ to: [{ email }] }],
    //         from: { email: "noreply@limweijin.dev" },
    //         subject: "Sign in to limweijin.dev",
    //         content: [
    //           {
    //             type: "text/plain",
    //             value: `Please click here to authenticate - ${url}`,
    //           },
    //         ],
    //       }),
    //       headers: {
    //         // Authentication will also vary from provider to provider, please see their docs.
    //         Authorization: `Bearer ${process.env.SENDGRID_API}`,
    //         "Content-Type": "application/json",
    //       },
    //       method: "POST",
    //     });

    //     if (!response.ok) {
    //       const { errors } = await response.json();
    //       throw new Error(JSON.stringify(errors));
    //     }
    //   },
    // },
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session: async ({ session, user }) => {
      session.id = user?.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
