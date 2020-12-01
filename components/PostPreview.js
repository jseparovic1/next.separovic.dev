import Link from "next/link";
import React from "react";
import {format, parseISO} from 'date-fns';

export default function PostPreview({post, className}) {
    return (
        <Link href={post.id}>
            <article className="border border-2 border-gray-400 p-4 hover:animate-wiggle transition transition-all hover:bg-red-900">
                <div className="text-xs uppercase text-gray-400">
                    <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
                </div>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="mt-2 text-lg text-gray-300">{post.description}</p>
            </article>
        </Link>
    )
}
