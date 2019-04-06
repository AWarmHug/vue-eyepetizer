module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://baobab.kaiyanapp.com/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
