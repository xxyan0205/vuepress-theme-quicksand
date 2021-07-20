<template>
  <Layout>
    <template #page-top>
      <p class="page-header-slot">
        <template v-if="siteData.lang === 'en-US'">
          The document is only used for theme display,  please go to the <a href="https://v2.vuepress.vuejs.org/">official site</a> for the latest Vuepress documentation
        </template>
        <template v-else>
          文档仅用于主题展示，最新Vuepress使用文档请前往<a href="https://v2.vuepress.vuejs.org/">官方站点</a>
        </template>
      </p>
    </template>
  </Layout>
</template>

<script>
import {useSiteLocaleData} from '@vuepress/client'
import Layout from '@theme/layout.vue'

export default {
  components: {
    Layout,
  },
  setup () {
    const siteData = useSiteLocaleData()
    return {
      siteData
    }
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
.page-header-slot {
  position: relative;
  left: 50%;
  display: inline-block;
  /* height: 2rem;
  line-height: 2rem; */
  padding: 0.5rem 1.2rem;
  font-size: .8rem;
  font-weight: 400;
  color: #666;
  border-radius: 2rem;
  background-color: #f0f0f0;
  transform: translateX(-50%);
}
</style>