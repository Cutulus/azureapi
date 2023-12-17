const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Define the environment
  target: 'node',

  // Entry point of your application
  entry: './index.mjs',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },

  // Handling Node.js externals (to keep node_modules out of your bundle)
  externals: [nodeExternals()],

  // Configuration for handling .mjs files
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },

  // Source maps for debugging (optional, but recommended)
  devtool: 'source-map',

  // Resolving .mjs files
  resolve: {
    extensions: ['.mjs', '.js']
  }
};
