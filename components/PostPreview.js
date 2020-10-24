import Link from "next/link";
import React from "react";

export default function PostPreview(props) {
    const post = props.post;
    return (
        <Link>
            <article href="`${post.id}`">
                <h2 className="text-3xl font-bold tracking-tight">{post.title}</h2>
                <p className="text-lg text-gray-400 leading-7">{post.description}</p>
                <footer>
                    <p>
                        Posted on
                        <time dateTime="2015-05-16 19:00">May 16</time>
                    </p>
                </footer>
            </article>
        </Link>
    )
}
