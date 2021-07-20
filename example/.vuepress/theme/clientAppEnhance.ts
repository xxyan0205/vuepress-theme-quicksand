import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
})