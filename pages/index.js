import Head from 'next/head'
import React from "react";
import {MDXProvider} from '@mdx-js/react'
import {getPostsPreviews} from "../lib/posts";
import PostPreview from "../components/PostPreview";

export default function HomePage({posts}) {
    return (
        <>
            <Head>
                <title>separovic.dev</title>
            </Head>
            <header className="px-4">
                <div className="flex justify-between items-center py-2">
                    <a className="flex items-center text-4xl lg:text-6xl py-6 leading-none" href="/">
                        <span className="text-red-700 font-extrabold">~</span>
                        <h1 className="ml-2 text-blue-100 font-bold tracking-tight">separovic.dev</h1>
                        <div className="ml-2 mt-2 w-3 h-6 bg-gray-100 animate-blink"/>
                    </a>
                </div>
            </header>
            <main className="px-4">
                <div className="max-w-3xl mt-4 space-y-8">
                    {
                        posts.map(post => <PostPreview post={post}/>)
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
