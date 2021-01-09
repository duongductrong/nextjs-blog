const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules")(["@uiw/react-md-editor"], {
  debug: true,
}); // pass the modules you would like to see transpiled

module.exports = withTM(
  // Accept css
  withCSS({
    cssLoaderOptions: {
      url: false,
    },
  })
);
