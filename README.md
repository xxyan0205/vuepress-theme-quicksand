## vuepress-theme-quicksand

![vuepress-theme-quicksand](https://img.shields.io/npm/v/vuepress-theme-quicksand.svg?style=flat-square)

### Usage

> .vuepress/config.js

```js
module.exports = {
  theme: 'vuepress-theme-quicksand',
  // or
  theme: 'quicksand',
}
```

### Inherit

> .vuepress/theme/index.js

```js
module.exports = {
  name: 'vuepress-theme-local',
  extends: 'vuepress-theme-quicksand',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
}
```
