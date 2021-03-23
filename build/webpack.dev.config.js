// webpack dev 配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')
const MiniCssExtractPlugin  = require("mini-css-extract-plugin")

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
    port: 8899,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'ps',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
       // 把这个配置放在所有loader之前
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true, // 这个配置需要打开，才能在控制台输出warning信息
            emitError: true, // 这个配置需要打开，才能在控制台输出error信息
            fix: true // 是否自动修复，如果是，每次保存时会自动修复可以修复的部分
          }
        },
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'less-loader',
            {
              loader: 'style-resources-loader',
              options: {
                  patterns: path.resolve(__dirname,'../src/styles/variable.less'),
                  injector: 'append'
              }
            }
          ]
        }
    ]
  },

}