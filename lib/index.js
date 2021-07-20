const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-quicksand',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
  },
  extendsMarkdown: md => {
    const fence = md.renderer.rules.fence
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
      const token = tokens[idx]
      // get token info
      const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''

      let theme = 'dark'
    
      if (/#light\b/.test(info)) {
        theme = 'light'
      }

      return `<div class="theme-code-${theme}">${fence(tokens, idx, options, env, slf)}</div>`
    }
  },

  // clientAppSetupFiles: path.resolve(__dirname, './clientAppSetup.js'),
  // ...
}