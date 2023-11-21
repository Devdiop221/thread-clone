import {getAuthSession} from "@/pages/api/auth/[...nextauth]";
import {prisma} from "@/lib/prisma";

export const getUser = async () => {
    const session = await getAuthSession();

    if (!session?.user?.id) {
        throw new Error("User not found");
    }

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            id: session?.user?.id,
        },
    })

    return user;
}