import path from "path";
import fs from "fs";
import matter from "gray-matter";
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsPreviews() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const postPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(postPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    });
}

export function getPostsSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPost(id) {
    const postPath = path.join(postsDirectory, `${id}.md`);
    const postContentRaw = fs.readFileSync(postPath, 'utf8');

    const frontMatter = matter(postContentRaw);
    const postContent = await remark()
        .use(html)
        .process(frontMatter.content)

    const content = postContent.toString();

    return {
        id,
        ...frontMatter.data,
        content
    }
}
