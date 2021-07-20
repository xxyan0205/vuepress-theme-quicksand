import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/vuepress-theme-quicksand/',
  dest:  path.resolve(__dirname, '../../docs'),
  theme: path.resolve(__dirname, './theme'),
  bundler: '@vuepress/vite',
  // bundler: '@vuepress/webpack',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }]
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress Theme QuickSand',
      description: 'Vuepress static website theme, suitable for Vuepress 2.0',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress Theme QuickSand',
      description: 'Vuepress静态网站主题，适用于Vuepress 2.0',
    },
  },

  themeConfig: {
    // logo: '/images/logo.png',

    repo: 'xxyan0205/vuepress-theme-quicksand',

    docsDir: 'example',

    codeTheme: 'light',

    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
      },
    },
  },
  plugins: [
    ['@vuepress/plugin-debug'],
    // [
    //   '@vuepress/plugin-search'
    // ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
})