const path = require('path');

module.exports = {
  entry: './server.js',
  mode: 'production',
  node: {
    __dirname: false,
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'server.bundle.js'
  }
};