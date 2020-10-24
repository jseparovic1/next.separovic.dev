import Head from 'next/head'
import React from "react";
import PostList from "../components/PostList";
import {getPostsPreviews} from "../lib/posts";

export default function HomePage({posts}) {
    return (
        <>
            <Head>
                <title>separovic.dev</title>
                {/*<link rel="icon" href="/favicon.ico"/>*/}
            </Head>
            <main>
                <PostList posts={posts}/>
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
