import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"; "next-auth/providers/credentials"
import bcrypt from "bcrypt"

import prisma from "@/app/libs/prismadb"
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials:{
                email:{label:"email",type: "text"},
                password:{label:"password",type: "password"},
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Invalid credentials");
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                });

                if(!user || !user?.hashedPassword){
                    throw new Error(`Invalid email or password.`)
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if(!isCorrectPassword){
                    throw new Error("Invalid email or password.")
                }

                return user;
            },
        })
    ],

    callbacks: {
        session: async ({ session }) => {
                const currentUser = await prisma.user.findUnique({
                  where: {
                    email: session.user?.email as string,
                  }
                });

                if(currentUser){
                    let {hashedPassword, ...others} = currentUser;

                    session = {
                        ...session,
                        user:{
                            ...others,
                        },
                      };
                }

            
                return session
        }
      },

    pages:{
        signIn:"/",
    },

    debug: process.env.NODE_ENV === "development",
    session:{
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
};


const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};