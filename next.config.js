const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');
const rehypeHeadings = require('rehype-autolink-headings');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            rehypeHeadings,
        ]
    }
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
})
