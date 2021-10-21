const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const path = require("path");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

function shouldWrite(filePath) {
  if (
    path.basename(filePath) == "bundle.js" ||
    path.basename(filePath) == "bundle.js.map"
  ) {
    return true;
  } else {
    return false;
  }
}

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    // writeToDisk: (filePath) => shouldWrite(filePath),
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});
