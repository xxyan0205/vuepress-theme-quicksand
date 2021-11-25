<template>
  <Layout>
    <template #navbar-before>
      <slot name="navbar-before" />
    </template>
    <template #navbar>
      <slot name="navbar" />
    </template>
    <template #navbar-after>
      <slot name="navbar-after" />
    </template>
    <template #sidebar-top>
      <slot name="sidebar-top" />
    </template>
    <template #sidebar>
      <slot name="sidebar" />
    </template>
    <template #sidebar-bottom>
      <slot name="sidebar-bottom" />
    </template>
    <template #page-top>
      <slot name="page-top" />
    </template>
    <template #page>
      <slot name="page" />
    </template>
    <template #page-bottom>
      <slot name="page-bottom" />
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import '../styles/index.styl'

export default {
  components: {
    Layout,
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>