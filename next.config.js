const withStyledIcons = require('next-plugin-styled-icons');
// const withMDX = require("@zeit/next-mdx")();
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  withStyledIcons({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
);
