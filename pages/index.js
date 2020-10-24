import Head from 'next/head'
import React from "react";
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
                    <div className="flex items-center text-4xl">
                        <span className="text-red-700 font-extrabold">~</span>
                        <h1 className="ml-2 text-blue-100 font-bold tracking-tight">separovic.dev</h1>
                        <div className="ml-2 mt-2 w-3 h-6 bg-gray-100 animate-blink"/>
                    </div>
                    {/*<nav className="flex">*/}
                    {/*    <a title="separovic.dev About"*/}
                    {/*       href="/about"*/}
                    {/*       className="ml-6 text-xl text-gray-200 hover:text-blue-600">*/}
                    {/*        about.<span className="text-red-700">php</span>*/}
                    {/*    </a>*/}
                    {/*</nav>*/}
                </div>
            </header>
            <main className="px-4">
                <div className="mt-4 space-y-8">
                    {
                        posts.map((post, index) => {
                            return <PostPreview key={index} post={post}/>
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
