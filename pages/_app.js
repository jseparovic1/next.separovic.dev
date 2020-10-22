import '../css/tailwind.css';
import Head from "next/head";
import React from "react";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>*/}
                {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
                {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
                {/*<link rel="manifest" href="/site.webmanifest"/>*/}
                {/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>*/}
                {/*<meta name="msapplication-TileColor" content="#00aba9"/>*/}
                {/*<meta name="theme-color" content="#ffffff"/>*/}
                {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml"/>*/}
            </Head>
            <div className="antialiased fonts-sans bg-gray-900">
                <div className="absolute border-4 border-red-700 w-full"/>
                <div className="max-w-4xl w-full mx-auto flex flex-col min-h-screen py-6 px-4 lg:py-12 lg:px-0">
                    <header>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                                <span className="text-5xl text-red-700 font-extrabold">~</span>
                                <h1 className="ml-2 text-blue-100 text-5xl font-bold tracking-tight">separovic.dev</h1>
                                <div className="ml-2 mt-2 w-3 h-8 bg-gray-100 animate-blink"/>
                            </div>
                            <nav className="flex">
                                <a title="separovic.dev About"
                                   href="/about"
                                   className="ml-6 text-xl text-gray-200 hover:text-blue-600">
                                    about.<span className="">php</span>
                                </a>
                            </nav>
                        </div>
                    </header>
                    <Component {...pageProps}/>
                    <footer className="">
                        FOOTERIZE ME...
                    </footer>
                </div>
            </div>
        </>
    )
}
