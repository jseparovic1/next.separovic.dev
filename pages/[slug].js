import Head from "next/head";
import {getPost, getPostsSlugs} from "../lib/posts";
import ReactMarkdown from "react-markdown";

export default function GenericPost({post}) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta property="og:title" content={post.title}/>
                <meta property="og:description" content={post.description}/>
                <meta name="description" content={post.description}/>
            </Head>

            <div className="px-4 md:px-10 py-8 lg:py-16 mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">{post.title}</h1>
            </div>
            <div className="px-8 max-w-3xl mx-auto">
                <ReactMarkdown className="post-content" source={post.content}/>
            </div>
        </>
    )
};

export async function getStaticPaths() {
    return {
        paths: getPostsSlugs(),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    return {
        props: {
            post: await getPost(params.slug)
        }
    }
}
