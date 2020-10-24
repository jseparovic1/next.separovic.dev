import Head from "next/head";
import {getPost, getPostsSlugs} from "../lib/posts";
import {format, parseISO} from 'date-fns';

export default function GenericPost({post}) {
    console.log(post);

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1 className="text-gray-300">{post.title}</h1>
            <time dateTime="{post.date}">{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
            <div className="text-gray-200" dangerouslySetInnerHTML={{__html: post.content}}/>
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
