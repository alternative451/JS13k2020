const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(frag|vert|glsl)$/,
        loader: 'glsl-shader-loader',
      },
    ],
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html"
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  }
}
