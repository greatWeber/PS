// webpack dev 配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output:{
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname,'../public'),
    clean:true
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./public',
    hot: true,
    port: 8888,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'ps',
      template: './index.html'
    })
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

}