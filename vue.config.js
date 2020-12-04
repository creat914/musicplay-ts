const webpack = require('webpack');
const path = require('path');
const merge = require('lodash/merge');

//import { Configuration } from 'webpack'

function resolve(dir) {
  return path.join(__dirname, dir);
}

/**
 * @type {Configuration}
 */
module.exports = {

  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
    config.plugin('define').tap((args) =>
      merge(args, [{
        'process.env': {
          VERSION: JSON.stringify(require('./package.json').version),
        },
      },]),
    );
  },
  configureWebpack: {
    entry: './src/main.ts'
  },
  // 配置全局样式
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./music.less")] // 引入全局样式变量（文件路径）
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#456ae4',
          'link-color': '#19D06C', //'#4F3610',
        },
        javascriptEnabled: true,
      },
    },
  },

  // devServer: {
  //   open: false,
  //   disableHostCheck: true,
  //   port: 8088,
  //   https: false,
  //   hotOnly: false,
  //
  //   proxy: {
  //     '/yjl-manager': {
  //       // target: 'https://riash.apemoon.com/', //253国内
  //       // target: 'http://${window.location.hostname}:8080',
  //       target: 'https://riash.riashapp.com', // 沙特
  //       // target:'http://localhost:8080',//本地
  //       // target: 'http://pancr.eicp.vip', //昌荣本地
  //       changeOrigin: true,
  //     },
  //   },
  //
  //   // proxy: {
  //   //   '/youxian-manager': {
  //   //     target: 'http://192.168.0.128:8080',
  //   //     changeOrigin: true,
  //   //   },
  //   // },
  //
  //   // proxy: {
  //   //   '/youxian-manager': {
  //   //     target: 'http://192.168.0.128:8080',
  //   //     changeOrigin: true,
  //   //   },
  //   // },
  //
  //   // proxy: {
  //   //   '/youxian-manager': {
  //   //     target: 'https://api.uxiangg.com',
  //   //     changeOrigin: true,
  //   //   },
  //   // }
  // },
};
