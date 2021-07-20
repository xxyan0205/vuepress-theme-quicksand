import{r as e,o as n,c as a,a as t,w as r,F as s,d,b as o}from"./app.bd6623af.js";const l={},c=d('<h1 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h1><p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>假设这是你的 Markdown 文件所处的目录结构：</p><div class="theme-code-dark"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>└─ docs\n   ├─ guide\n   │  ├─ getting-started.md\n   │  └─ README.md\n   ├─ contributing.md\n   └─ README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div>',6),i=o("将 "),u=t("code",null,"docs",-1),p=o(" 目录作为你的 "),m=o("sourceDir"),h=o(" ，例如你在运行 "),b=t("code",null,"vuepress dev docs",-1),k=o(" 命令。此时，你的 Markdown 文件对应的路由路径为："),g=d('<table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>',2),f=o("Markdown 文件可以包含一个 "),w={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},M=o("YAML"),v=o(" Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例："),E=d('<div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN\n<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题\n<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>',1),F=o("你肯定注意到 Frontmatter 中的字段和"),x=o("配置文件"),y=o("中的"),_=o("站点配置"),z=o("十分类似。你可以通过 Frontmatter 来覆盖当前页面的 "),A=t("code",null,"lang",-1),D=o(", "),V=t("code",null,"title",-1),L=o(", "),P=t("code",null,"description",-1),R=o(" 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。"),B=t("p",null,"同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。",-1),H={class:"custom-container tip"},T=t("p",{class:"custom-container-title"},"提示",-1),j=o("前往 "),C=o("Frontmatter 参考"),N=o(" 查看 VuePress 支持的 Frontmatter 配置。"),O=o("前往 "),Y=o("默认主题 > Frontmatter 参考"),q=o(" 查看默认主题的 Frontmatter 配置。"),G=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),o(" 内容")],-1),I=t("p",null,[o("页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 "),t("code",null,"<template>"),o(" 。")],-1),J=o("借助 "),K={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},Q=o("markdown-it"),S=o(" 和 Vue 模板语法的能力，基础的 Markdown 可以得到很多的扩展功能。接下来，前往 "),U=o("Markdown"),W=o(" 章节来了解 VuePress 中 Markdown 的扩展功能。");l.render=function(d,o){const l=e("RouterLink"),X=e("OutboundLink");return n(),a(s,null,[c,t("p",null,[i,u,p,t(l,{to:"/zh/reference/cli.html"},{default:r((()=>[m])),_:1}),h,b,k]),g,t("p",null,[f,t("a",w,[M,t(X)]),v]),E,t("p",null,[F,t(l,{to:"/zh/guide/configuration.html#config-file"},{default:r((()=>[x])),_:1}),y,t(l,{to:"/zh/guide/configuration.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE"},{default:r((()=>[_])),_:1}),z,A,D,V,L,P,R]),B,t("div",H,[T,t("p",null,[j,t(l,{to:"/zh/reference/config.html"},{default:r((()=>[C])),_:1}),N]),t("p",null,[O,t(l,{to:"/zh/reference/default-theme/frontmatter.html"},{default:r((()=>[Y])),_:1}),q])]),G,I,t("p",null,[J,t("a",K,[Q,t(X)]),S,t(l,{to:"/zh/guide/markdown.html"},{default:r((()=>[U])),_:1}),W])],64)};export default l;
