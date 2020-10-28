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

            <div className="p-8 mx-auto max-w-4xl">
                <h1 className="text-4xl font-extrabold leading-tight text-center">{post.title}</h1>
                {/*<time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>*/}
            </div>
            <div className="px-8 max-w-3xl mx-auto leading-relaxed">
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
