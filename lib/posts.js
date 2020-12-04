function importAll(r) {
    return r
        .keys()
        .map((fileName) => ({
            link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
            module: r(fileName),
        }))
}

function dateSortDesc(a, b) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

export function getPostsPreviews() {
    const posts = importAll(require.context('./../pages', true, /\.mdx$/)).sort((a, b) =>
        dateSortDesc(a.module.meta.date, b.module.meta.date)
    )

    return posts
        .map(post => {
            return {
                link: post.link,
                meta: post.module.meta
            }
        });
}
