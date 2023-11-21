'use server';
import {WritePostFormValues} from "@/app/write/WritePostForm";
import {getUser} from "@/src/feature/query/user.query";
import {prisma} from "@/lib/prisma";

export const createReply = async (postid: string, values: WritePostFormValues) => {
    console.log("i'm on server2 !");
    const user = await getUser();

    const post = await prisma.post.create({
        data: {
            content: values.content,
            userId: user.id,
        },
    });

    return post.id;
}