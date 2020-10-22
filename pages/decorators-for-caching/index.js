import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost({title}) {
    return (
        <>
            <head>
                <title>{title}</title>
            </head>
            <div>
                <h1>{title}</h1>
                <h2 className="text-4xl">
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </div>
        </>
    )
};

export async function getStaticProps() {
  console.log("Get static props...");
  return {
    props: {
        title: "Hey I'm loaded on each request"
    }
  }
}
