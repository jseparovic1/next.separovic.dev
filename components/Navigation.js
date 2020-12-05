import React from "react";
import Link from "next/link";

export default function Navigation() {
    const navLinks = [
        {
            href: '/about',
            name: 'about'
        }
    ];

    return (
        <nav>
            <ul className="flex flex-row space-x-4">
                {
                    navLinks.map(link => {
                        return (
                            <li className="font-bold tracking-tight">
                                <Link href={link.href} className="border border-b-2 hover:border-brand-100">
                                    <div>{link.name}<span className="text-brand-700">.php</span></div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
