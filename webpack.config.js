const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      stream: require.resolve("stream-browserify"),
      fs: false, // Not available in browsers
      net: false, // Not available in browsers
    },
  },
};
