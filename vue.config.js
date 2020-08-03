const path = require('path')
module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  configureWebpack: (config) => {
    Object.assign(config, {
      resolve: {
        extensions: ['.js','.css','.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages'),
          '@v': path.resolve(__dirname, './src/views'),
          '@a': path.resolve(__dirname, './src/assets'),
        } // 别名配置
      }
    })
  }
}