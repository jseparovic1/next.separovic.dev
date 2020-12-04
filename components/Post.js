import React from "react";
import Head from "next/head";
import ContentContainer from "./ContentContainer";

export default function Post({meta, children}) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta name="description" content={meta.description}/>
            </Head>
            <div className="px-4 md:px-10 pt-8 mx-auto max-w-4xl">
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                    {meta.title}
                </h1>
            </div>
            <ContentContainer>
                <div className="post-content">{children}</div>
            </ContentContainer>
        </>
    )
}
