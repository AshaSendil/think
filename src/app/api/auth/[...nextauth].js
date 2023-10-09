import EmailProvider from "next-auth/providers/email";

providers: [
  EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM
  }),
]