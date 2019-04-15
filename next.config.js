const withStyledIcons = require("next-plugin-styled-icons");
const withMDX = require("@zeit/next-mdx")();

module.exports = withMDX(
  withStyledIcons({
    target: "serverless"
    // "/": { page: "/" }
  })
);
