const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.const');

const { NODE_ENV } = process.env;

const plugins = [
  // new CopyPlugin({ // 将from目录内容原封不动的copy到to目录, 适合存放尺寸较大的图片和其他文件
  //   patterns: [
  //     { from: 'static', to: 'static' },
  //   ],
  // }),
  // new MiniCssExtractPlugin({ // css文件提取
  //   filename: 'css/[name].css',
  //   chunkFilename: 'css/[id].css',
  // }),
  new HtmlWebpackPlugin({
    filename: 'index.html', // 最终打包的文件名，默认打包到output.path目录下
    template: './index.ejs',
    templateParameters: {
      title: 'hello world',
      DEPEND_DLL_URL: '//awp-assets.sankuai.com/dupeidong02/ms_dll/1.0.4/react-scripts.js',
    },
  }),
  new webpack.DefinePlugin({ // 项目中注入全局全局变量
    'process.env': JSON.stringify({
      NODE_ENV,
    }),
  }),
];

if (NODE_ENV !== 'development') {
  plugins.push(new CleanWebpackPlugin());
} else {
  // 实现局部更新 https://www.webpackjs.com/guides/hot-module-replacement/
  plugins.push(new webpack.HotModuleReplacementPlugin());
  // 更容易查看要修补(patch)的依赖
  plugins.push(new webpack.NamedModulesPlugin());
}

module.exports = plugins;
