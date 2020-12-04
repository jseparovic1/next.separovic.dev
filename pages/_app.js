import '../css/tailwind.css';
import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>separovic.dev</title>
            </Head>
            <div className="relative antialiased fonts-sans min-h-screen bg-gray-900 text-gray-200">
                <div className="absolute w-full h-1 bg-red-700"/>
                <Header
                    left=<HeaderBlinkText title="separovic.dev"/>
                />
                <main>
                    <Component {...pageProps}/>
                </main>
                <Footer/>
            </div>
        </>
    )
}
