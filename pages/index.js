import Head from 'next/head'
import React from "react";
import PostList from "../components/PostList";

export default function HomePage() {
    const posts = [
        {
            "title": "Decorators for caching",
            "path": "/decorators-for-caching",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet ipsum sed tortor mollis rhoncus id vel dui. Curabitur nec velit eros. Nunc fermentum massa vitae ligula consectetur sodales. Nullam sapien magna, pellentesque nec tellus ut, ultrices viverra sem. Morbi maximus dui quis erat facilisis laoreet. Pellentesque non sapien non tellus aliquet scelerisque. Fusce vel orci porttitor, vestibulum nibh non, luctus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n"
        },
        {
            "title": "Stuff for stuff",
            "path": "/decorators-for-caching",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet ipsum sed tortor mollis rhoncus id vel dui. Curabitur nec velit eros. Nunc fermentum massa vitae ligula consectetur sodales. Nullam sapien magna, pellentesque nec tellus ut, ultrices viverra sem. Morbi maximus dui quis erat facilisis laoreet. Pellentesque non sapien non tellus aliquet scelerisque. Fusce vel orci porttitor, vestibulum nibh non, luctus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n"
        }
    ];

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <PostList posts={posts}/>
            </main>
        </>
    )
}
