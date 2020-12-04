import React from "react";
import {getPostsPreviews} from "../lib/posts";
import PostPreview from "../components/PostPreview";
import ContentContainer from "../components/ContentContainer";

export default function HomePage({posts}) {
    return (
        <>
            <ContentContainer>
                <article className="space-y-8">
                    {
                        posts.map((post, id) => <PostPreview key={id} post={post}/>)
                    }
                </article>
            </ContentContainer>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: getPostsPreviews()
        }
    }
}
