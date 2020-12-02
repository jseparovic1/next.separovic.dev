import Link from "next/link";
import React from "react";
import {format, parseISO} from 'date-fns';

export default function PostPreview({post}) {
    return (
        <Link href={post.link}>
            <article className="border border-2 border-gray-400 p-4 hover:animate-wiggle transition transition-all hover:bg-red-900">
                <div className="text-xs uppercase text-gray-400">
                    <time dateTime={post.date}>{format(parseISO(post.meta.date), 'LLLL d, yyyy')}</time>
                </div>
                <h2 className="text-2xl font-bold">{post.meta.title}</h2>
                <p className="mt-2 text-lg text-gray-300">{post.meta.description}</p>
            </article>
        </Link>
    )
}
