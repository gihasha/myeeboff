import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const {
  handlers,
  signIn,
  signOut,
  auth
} = NextAuth({

  providers: [

    Credentials({

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials) {

        const user =
          await prisma.user.findUnique({
            where: {
              email:
                credentials.email as string
            }
          });

        if (!user) {
          return null;
        }

        const valid =
          await bcrypt.compare(
            credentials.password as string,
            user.password
          );

        if (!valid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        };

      }

    })

  ],

  session: {
    strategy: "jwt"
  }

});
