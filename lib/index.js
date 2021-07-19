const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-quicksand',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
  },
  alias: {
    '@theme/Home.vue': path.resolve(__dirname, 'layouts/Home.vue'),
  }
  // clientAppSetupFiles: path.resolve(__dirname, './clientAppSetup.js'),
  // ...
}