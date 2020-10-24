import Head from 'next/head'
import React from "react";
import {getPostsPreviews} from "../lib/posts";
import PostPreview from "../components/PostPreview";

export default function HomePage({posts}) {
    return (
        <>
            <Head>
                <title>separovic.dev | Jurica Separovic</title>
            </Head>
            <main>
                <div className="space-y-8">
                    {
                        posts.map((post, index) => {
                            return <PostPreview key={index} className="space-y-10" post={post}/>
                        })
                    }
                </div>
            </main>
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
