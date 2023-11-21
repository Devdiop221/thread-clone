import React from 'react';
import {getUser} from "@/src/feature/query/user.query";
import {WriteModal} from "@/app/@modal/(.)write/WriteModal";
import {createPost} from "@/app/write/write-post.action";

export default async function Page() {

    const user = await getUser();
    return (
        <WriteModal user={user} createPost={createPost}/>
    )
}