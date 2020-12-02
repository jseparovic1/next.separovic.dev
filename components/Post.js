import React from "react";
import Head from "next/head";

export default function Post({meta, children}) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta name="description" content={meta.description}/>
            </Head>

            <div className="px-4 md:px-10 py-8 lg:py-16 mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">{meta.title}</h1>
            </div>
            <div className="px-8 max-w-3xl mx-auto">
                <div className="post-content">{children}</div>
            </div>
        </>
    )
}
