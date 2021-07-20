const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: path.resolve(__dirname, '../../../lib'),
  layouts: {
    Layout: path.resolve(__dirname, './Layout.vue'),
  },
  alias: {
    '@theme/layout.vue': path.resolve(__dirname, '../../../lib/layouts/Layout.vue'),
  },
}