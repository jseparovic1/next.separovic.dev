import '../css/tailwind.css';
import React from "react";

export default function App({Component, pageProps}) {
    const links = [
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/jurica-%C5%A1eparovi%C4%87/',
        },
        {
            name: 'Github',
            url: 'https://github.com/jseparovic1',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/jseparovic1',
        },
    ];

    return (
        <>
            {/*<Head></Head>*/}
            <div
                className="relative antialiased fonts-sans min-h-screen bg-gray-900 flex flex-col justify-between">
                <div className="absolute w-full h-1 bg-red-700"/>
                <div className="mx-auto flex flex-col sm:bg-blue-900 lg:bg-yellow-900">
                    <Component {...pageProps}/>
                </div>
                <footer className="p-8 flex justify-center">
                    <ul className="flex space-x-6">
                        {links.map(link => {
                            return (
                                <li>
                                    <a href={link.url}
                                       className="text-large text-gray-300 hover:underline">
                                        {link.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </footer>
            </div>
        </>
    )
}
