import React from 'react';
import {getAuthSession} from "@/pages/api/auth/[...nextauth]";
import {prisma} from "@/lib/prisma";
import {getLatestPosts} from "@/src/feature/query/post.query";
import {Post} from "@/src/feature/post/Post";

export default async function Home() {
    const session = await getAuthSession();

    const posts = await getLatestPosts();
    return (
        <div className="divide-y divide-muted">
            {posts.map(p => (
                <Post post={p} key={p.id}/>
            ))}
        </div>
    )
}