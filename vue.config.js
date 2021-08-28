/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 16:07:19
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-07 21:57:49
 */
const path = require('path')

module.exports = {
  /* 打包文件名 */
  outputDir: './build',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  publicPath: './',
  /* 别名配置  */
  // 方案一 合并配置
  /* configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }, */
  // 函数覆盖配置
  /* configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }, */
  // 函数链式配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
      .set('views', '@/views')
  }
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'http://152.136.185.210:5000',
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //       changeOrigin: true
  //     }
  //   }
  // }
}
