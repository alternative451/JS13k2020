const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ClosurePlugin = require('closure-webpack-plugin');


const env = process.env.ENV || "development"

module.exports = {
  /*optimization: {
    minimizer: [
      new ClosurePlugin({ mode: 'STANDARD' }, {
      })
    ]},*/
  module: {
    rules: [
      {
        test: /\.(frag|vert|glsl)$/,
        loader: 'glsl-shader-loader',
      },
    ],
  },
  mode: env,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devtool: env === "development" ? 'inline-source-map' : '',
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html"
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  }
}
