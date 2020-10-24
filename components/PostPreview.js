import Link from "next/link";
import React from "react";
import {format, parseISO} from 'date-fns';

export default function PostPreview({post}) {
    return (
        <Link href={post.id}>
            <article>
                <h2 className="text-3xl font-bold tracking-tight">{post.title}</h2>
                <p className="text-lg text-gray-400 leading-7">{post.description}</p>
                <footer>
                    <p>Posted on
                        <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
                    </p>
                </footer>
            </article>
        </Link>
    )
}
