## vuepress-theme-quicksand

![vuepress-theme-quicksand](https://img.shields.io/npm/v/vuepress-theme-quicksand.svg?style=flat-square) ![](https://img.shields.io/github/license/xxyan0205/vuepress-theme-quicksand?style=flat-square)

> A niubility style theme for [VuePress v2.0](https://v2.vuepress.vuejs.org/)

### Install

```base
npm i vuepress-theme-quicksand
#or
yarn add vuepress-theme-quicksand
```

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

### Extension

#### Code theme

##### Code block settings

* dark (default)

````md
```javascript#dark
console.log('dark theme')
```
````

* light

````md
```javascript#light
console.log('light theme')
```
````

##### Global settings

```js
module.exports = {
  themeConfig: {
    codeTheme: 'light',
  }
}
```

#### Style variables

```css
:root, html.dark {
  --container-width: 1280px;

  --font-family-quicksand: Quicksand, var(--font-family);
  --font-family-code: Source Code Pro, var(--font-family);
  
  .theme-code-dark {
    --code-text-color: #f0f0f0;
    --code-brand-color: #00CCFF;
  }

  .theme-code-light {
    --code-text-color: #3a385d;
    --code-brand-color: var(--c-brand);
  }
}
```