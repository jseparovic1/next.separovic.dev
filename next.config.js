const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  remarkPlugins: [],
  rehypePlugins: [
      require('@mapbox/rehype-prism'),
      require('rehype-slug')
  ]
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
