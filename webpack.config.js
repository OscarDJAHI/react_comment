var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  eslint: {
    configFile: './.eslintrc'
  },
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel', 'eslint-loader'],
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
};
