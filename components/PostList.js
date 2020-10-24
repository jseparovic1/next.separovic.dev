import React from "react";
import PostPreview from "./PostPreview";

export default function PostList({posts}) {
    const postsList = posts.map((post, index) => <PostPreview key={index} className="space-y-10" post={post} />);

    return <div className="space-y-8">{postsList}</div>
}
