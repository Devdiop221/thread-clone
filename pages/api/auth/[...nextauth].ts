import NextAuth, {getServerSession, NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {prisma} from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github";


const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
    throw new Error("GITHUB_ID or GITHUB_SECRET  is not set");
}
export const authConfig = {
    providers: [
        GithubProvider({
            clientId: githubId,
            clientSecret: githubSecret,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: ({session, user}) => {
            if (!session?.user) return session;
            session.user.id = user.id;
            return session;
        },
    },
} satisfies NextAuthOptions;

export const getAuthSession = async () => {
    const session = await getServerSession(authConfig);
    return session;
}

// @ts-ignore
export default NextAuth(authConfig);