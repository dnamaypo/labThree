module.exports = function(eleventyConfig) {
     eleventyConfig.addPassthroughCopy('css')
     eleventyConfig.addPassthroughCopy('img')
     return {
         passthroughFileCopy: true
     }
 }

 const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};