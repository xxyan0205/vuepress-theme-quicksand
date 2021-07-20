import{r as e,o as a,c as n,a as s,w as l,F as t,d as o,b as c}from"./app.ae737f76.js";const r={},d=o('<h1 id="从-v1-迁移" tabindex="-1"><a class="header-anchor" href="#从-v1-迁移" aria-hidden="true">#</a> 从 v1 迁移</h1><p>VuePress v2 的一些主要改动和优化：</p><ul><li>VuePress v2 现在使用 Vue 3 ，因此你要保证你的组件和其他客户端文件是适用于 Vue 3 的。</li><li>VuePress v2 是使用 TypeScript 开发的，因此它现在提供了更好的类型支持。我们强烈推荐你使用 TypeScript 来开发插件和主题。 VuePress 配置文件也同样支持 TypeScript ，你可以直接使用 <code>.vuepress/config.ts</code> 。</li><li>VuePress v2 支持使用 Webpack 和 Vite 作为打包工具。你甚至可以在开发模式使用 Vite 来获取更好的开发体验，而在构建模式使用 Webpack 来获取更好的浏览器兼容性。</li></ul><p>VuePress v2 的核心思想和流程是和 v1 一致的，但 v2 API 经过了重新设计，更加标准化。因此在将现有的 v1 项目迁移至 v2 时，你很可能会遇到一些 Breaking Changes 。本指南将帮助你将 v1 的站点 / 插件 / 主题迁移至 v2 。</p><ul><li>如果你是一个普通用户，你需要阅读 <a href="#%E7%BB%99%E7%94%A8%E6%88%B7">给用户</a> 的指南。</li><li>如果你是一个插件作者，你需要阅读 <a href="#%E7%BB%99%E6%8F%92%E4%BB%B6%E4%BD%9C%E8%80%85">给插件作者</a> 的指南。</li><li>如果你是一个主题作者，你需要阅读 <a href="#%E7%BB%99%E4%B8%BB%E9%A2%98%E4%BD%9C%E8%80%85">给主题作者</a> 的指南。</li></ul><h2 id="给用户" tabindex="-1"><a class="header-anchor" href="#给用户" aria-hidden="true">#</a> 给用户</h2><h3 id="用户配置变更" tabindex="-1"><a class="header-anchor" href="#用户配置变更" aria-hidden="true">#</a> 用户配置变更</h3><h4 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h4><p>默认值从 <code>() =&gt; true</code> 更改为 <code>false</code> 。</p><h4 id="extrawatchfiles" tabindex="-1"><a class="header-anchor" href="#extrawatchfiles" aria-hidden="true">#</a> extraWatchFiles</h4><p>移除。</p>',11),i=c("你可以手动在 "),p=c("onWatched"),u=c(" Hook 中监听文件变化。"),h=s("h4",{id:"patterns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#patterns","aria-hidden":"true"},"#"),c(" patterns")],-1),m=s("p",null,[c("重命名为 "),s("code",null,"pagePatterns"),c(" 。")],-1),k=s("h4",{id:"markdown-linenumbers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-linenumbers","aria-hidden":"true"},"#"),c(" markdown.lineNumbers")],-1),f=c("移动至 "),b=c("markdown.code.lineNumbers"),g=c(" 。"),x=o('<p>默认值从 <code>false</code> 更改为 <code>true</code> 。</p><h4 id="markdown-slugify" tabindex="-1"><a class="header-anchor" href="#markdown-slugify" aria-hidden="true">#</a> markdown.slugify</h4><p>移除。</p><p>如果你无论如何都要修改 slugify 函数，分别设置以下选项：</p><ul><li><code>markdown.anchor.slugify</code></li><li><code>markdown.toc.slugify</code></li><li><code>markdown.extractHeaders.slugify</code></li></ul><h4 id="markdown-pagesuffix" tabindex="-1"><a class="header-anchor" href="#markdown-pagesuffix" aria-hidden="true">#</a> markdown.pageSuffix</h4><p>移除。</p><h4 id="markdown-externallinks" tabindex="-1"><a class="header-anchor" href="#markdown-externallinks" aria-hidden="true">#</a> markdown.externalLinks</h4>',8),v=c("移动至 "),w=c("markdown.links.externalAttrs"),y=c(" 。"),B=s("h4",{id:"markdown-toc",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-toc","aria-hidden":"true"},"#"),c(" markdown.toc")],-1),E=s("p",null,"有改动。",-1),C=c("参考 "),P=c("配置 > markdown.toc"),A=s("h4",{id:"markdown-plugins",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-plugins","aria-hidden":"true"},"#"),c(" markdown.plugins")],-1),_=s("p",null,"移除。",-1),z=c("在 "),S=c("extendsMarkdown"),j=c(" Hook 中使用 markdown-it 插件。"),W=s("h4",{id:"markdown-extendmarkdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-extendmarkdown","aria-hidden":"true"},"#"),c(" markdown.extendMarkdown")],-1),F=s("p",null,"移除。",-1),V=c("使用 "),I=c("extendsMarkdown"),H=c(" Hook 。"),M=s("h4",{id:"markdown-extractheaders",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-extractheaders","aria-hidden":"true"},"#"),c(" markdown.extractHeaders")],-1),D=s("p",null,"有修改。",-1),G=c("参考 "),L=c("配置 > markdown.extractHeaders"),T=s("h4",{id:"webpack-相关配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#webpack-相关配置","aria-hidden":"true"},"#"),c(" Webpack 相关配置")],-1),R=c("所有 Webpack 相关的配置都移动至 "),$=s("code",null,"@vuepress/bundler-webpack",-1),N=c(" 的配置项中，所以你需要在 "),U=c("bundlerConfig"),q=c(" 中设置它们："),J=o("<ul><li><code>postcss</code>：移动至 <code>bundlerConfig.postcss</code></li><li><code>stylus</code>：移动至 <code>bundlerConfig.stylus</code></li><li><code>scss</code>：移动至 <code>bundlerConfig.scss</code></li><li><code>sass</code>：移动至 <code>bundlerConfig.sass</code></li><li><code>less</code>：移动至 <code>bundlerConfig.less</code></li><li><code>chainWebpack</code>：移动至 <code>bundlerConfig.chainWebpack</code></li><li><code>configureWebpack</code>：移动至 <code>bundlerConfig.configureWebpack</code></li><li><code>evergreen</code>：移动至 <code>bundlerConfig.evergreen</code> ，且默认值从 <code>false</code> 更改为 <code>true</code> 。</li></ul>",1),K=c("参考 "),O=c("打包工具 > Webpack"),Q=s("h3",{id:"frontmatter-变更",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#frontmatter-变更","aria-hidden":"true"},"#"),c(" Frontmatter 变更")],-1),X=s("h4",{id:"meta",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#meta","aria-hidden":"true"},"#"),c(" meta")],-1),Y=s("p",null,"移除。",-1),Z=c("改为使用 "),ee=c("head"),ae=c(" 。例如："),ne=o('<div class="theme-code-light"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">head</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo\n      <span class="token key atrule">content</span><span class="token punctuation">:</span> bar\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> link\n    <span class="token punctuation">-</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> canonical\n      <span class="token key atrule">href</span><span class="token punctuation">:</span> foobar\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> script\n    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">-</span> console.log(&#39;hello from frontmatter&#39;);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><p>和以下结构相同：</p><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  head<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;canonical&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">console.log(&#39;hello from frontmatter&#39;);</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><h3 id="永久链接-patterns-变更" tabindex="-1"><a class="header-anchor" href="#永久链接-patterns-变更" aria-hidden="true">#</a> 永久链接 Patterns 变更</h3><ul><li><code>:i_month</code>：移除</li><li><code>:i_day</code>：移除</li><li><code>:minutes</code>：移除（v1 文档中未列出）</li><li><code>:seconds</code>：移除（v1 文档中未列出）</li><li><code>:regular</code>：重命名为 <code>:raw</code></li></ul>',5),se=c("参考 "),le=c("Frontmatter > permalinkPattern"),te=c(" 。"),oe=s("h3",{id:"调色板系统变更",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#调色板系统变更","aria-hidden":"true"},"#"),c(" 调色板系统变更")],-1),ce=s("p",null,[c("VuePress v1 的 Stylus 调色板系统 （即 "),s("code",null,"styles/palette.styl"),c(" 和 "),s("code",null,"styles/index.styl"),c("） 不再由 VuePress Core 默认提供支持。")],-1),re=c("调色板系统提取到了 "),de=c("@vuepress/plugin-palette"),ie=c(" 当中。"),pe=s("p",null,"主题作者可以使用自己的方式来为用户提供自定义样式的能力，而不必被限制在 Stylus 当中。",-1),ue=c("如果你使用的是默认主题，那么调色板系统仍然存在，但改为使用 SASS ，并且大部分变量都迁移为 CSS 变量。参考 "),he=c("默认主题 > 样式"),me=c(" 。"),ke=s("h3",{id:"约定文件变更",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#约定文件变更","aria-hidden":"true"},"#"),c(" 约定文件变更")],-1),fe=s("h4",{id:"vuepress-enhanceapp-js",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-enhanceapp-js","aria-hidden":"true"},"#"),c(" .vuepress/enhanceApp.js")],-1),be=s("p",null,[c("重命名为 "),s("code",null,".vuepress/clientAppEnhance.{js,ts}"),c(" 。")],-1),ge=s("p",null,"函数接收的参数也有改动。",-1),xe=c("参考 "),ve=c("客户端 API > defineClientAppEnhance"),we=c(" 。"),ye=s("h4",{id:"vuepress-components",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-components","aria-hidden":"true"},"#"),c(" .vuepress/components/")],-1),Be=s("p",null,"在该目录下的文件不会被自动注册为 Vue 组件。",-1),Ee=c("你需要使用 "),Ce=c("@vuepress/plugin-register-components"),Pe=c(" ，或者在 "),Ae=s("code",null,".vuepress/clientAppEnhance.{js,ts}",-1),_e=c(" 中手动注册你的组件。"),ze=s("h4",{id:"vuepress-theme",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-theme","aria-hidden":"true"},"#"),c(" .vuepress/theme/")],-1),Se=s("p",null,"即使该目录存在，也不会被隐式默认当作本地主题目录。",-1),je=c("你需要在 "),We=c("theme"),Fe=c(" 配置项中显式声明本地主题的路径。"),Ve=o('<h3 id="markdown-插槽变更" tabindex="-1"><a class="header-anchor" href="#markdown-插槽变更" aria-hidden="true">#</a> Markdown 插槽变更</h3><p>Markdown 插槽不再被支持。</p><h3 id="插件-api-变更" tabindex="-1"><a class="header-anchor" href="#插件-api-变更" aria-hidden="true">#</a> 插件 API 变更</h3><ul><li><code>plugins</code>：移除</li><li><code>ready</code>：重命名为 <code>onPrepared</code></li><li><code>updated</code>：重命名为 <code>onWatched</code></li><li><code>generated</code>：重命名为 <code>onGenerated</code></li><li><code>additionalPages</code>：移除，改为在 <code>onInitialized</code> Hook 中使用 <code>app.pages.push(createPage())</code></li><li><code>clientDynamicModules</code>：移除，改为在 <code>onPrepared</code> Hook 中使用 <code>app.writeTemp()</code></li><li><code>enhanceAppFiles</code>：重命名为 <code>clientAppEnhanceFiles</code></li><li><code>globalUIComponents</code>：重命名为 <code>clientAppRootComponentFiles</code></li><li><code>clientRootMixin</code>：重命名为<code>clientAppSetupFiles</code></li><li><code>extendMarkdown</code>：重命名为 <code>extendsMarkdown</code></li><li><code>chainMarkdown</code>：移除</li><li><code>extendPageData</code>：重命名为 <code>extendsPageData</code></li><li><code>extendsCli</code>：移除</li><li><code>configureWebpack</code>：移除</li><li><code>chainWebpack</code>：移除</li><li><code>beforeDevServer</code>：移除</li><li><code>afterDevServer</code>：移除</li></ul>',4),Ie=c("参考 "),He=c("插件 API"),Me=c(" 。"),De=s("h3",{id:"主题-api-变更",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题-api-变更","aria-hidden":"true"},"#"),c(" 主题 API 变更")],-1),Ge=s("h4",{id:"layouts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#layouts","aria-hidden":"true"},"#"),c(" layouts")],-1),Le=s("p",null,"现在你需要手动设置布局目录或布局组件。",-1),Te=c("参考 "),Re=c("主题 API > layouts"),$e=c(" 。"),Ne=o('<h4 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> extend</h4><p>重命名为 <code>extends</code> 。</p><p>你仍然可以通过 <code>extends: &#39;parent-theme&#39;</code> 来继承一个父主题，这将会继承其插件和布局等。</p><p><code>@theme</code> 和 <code>@parent-theme</code> 别名不再生效。</p><p>现在支持主题的多级继承。</p><h3 id="cli-变更" tabindex="-1"><a class="header-anchor" href="#cli-变更" aria-hidden="true">#</a> CLI 变更</h3><h4 id="eject-命令" tabindex="-1"><a class="header-anchor" href="#eject-命令" aria-hidden="true">#</a> eject 命令</h4><p>移除。</p><h4 id="cache-选项" tabindex="-1"><a class="header-anchor" href="#cache-选项" aria-hidden="true">#</a> cache 选项</h4><ul><li><code>-c, --cache [cache]</code>：修改为 <code>--cache &lt;cache&gt;</code> ，意味着 <code>-c</code> 不再是 <code>cache</code> 选项的缩写，并且 <code>cache</code> 选项的值不再是可选的。</li><li><code>--no-cache</code>：重命名为 <code>--clean-cache</code> 。</li></ul><h3 id="默认主题变更" tabindex="-1"><a class="header-anchor" href="#默认主题变更" aria-hidden="true">#</a> 默认主题变更</h3><h4 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h4><ul><li><code>&lt;CodeGroup /&gt;</code> 和 <code>&lt;CodeBlock /&gt;</code> 重命名为 <code>&lt;CodeGroup /&gt;</code> 和 <code>&lt;CodeGroupItem /&gt;</code></li><li><code>&lt;Badge /&gt;</code><ul><li><code>$badgeErrorColor</code> 调色板变量重命名为 <code>$badgeDangerColor</code></li><li><code>type</code> Prop 现在只接受 <code>tip</code> 、 <code>warning</code> 和 <code>danger</code></li></ul></li></ul><h4 id="调色板系统" tabindex="-1"><a class="header-anchor" href="#调色板系统" aria-hidden="true">#</a> 调色板系统</h4><p>默认主题的调色板系统迁移为 SASS 和 CSS 变量。</p>',15),Ue=c("参考 "),qe=c("默认主题 > 样式"),Je=c(" 。"),Ke=s("h4",{id:"主题配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题配置","aria-hidden":"true"},"#"),c(" 主题配置")],-1),Oe=s("p",null,"默认主题的配置有大量变更。",-1),Qe=c("参考 "),Xe=c("默认主题 > 配置"),Ye=c(" 。"),Ze=s("h3",{id:"官方插件变更",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#官方插件变更","aria-hidden":"true"},"#"),c(" 官方插件变更")],-1),ea=c("参考 "),aa=c("官方插件"),na=c(" 。"),sa=o('<h3 id="社区主题和插件" tabindex="-1"><a class="header-anchor" href="#社区主题和插件" aria-hidden="true">#</a> 社区主题和插件</h3><p>v1 的主题和插件和 v2 并不兼容。</p><p>请确保你在使用的主题和插件已经支持 v2 ，并前往它们各自的文档查看迁移指南。</p><h2 id="给插件作者" tabindex="-1"><a class="header-anchor" href="#给插件作者" aria-hidden="true">#</a> 给插件作者</h2><p>请先浏览 <a href="#%E6%8F%92%E4%BB%B6-api-%E5%8F%98%E6%9B%B4">插件 API 变更</a> 。</p><p>一些主要的 Breaking Changes ：</p><ul><li>你不能再在你的插件中使用其他插件了，这避免了很多由于插件嵌套引发的问题。如果你的插件依赖于别的插件，你应在文档中列出他们。</li><li>大部分 v1 Hook 都在 v2 中存在等效的 Hook 或实现方式。唯一的例外是 <code>extendsCli</code> ，它被移除了。</li><li>Webpack 相关的 Hook 都被移除了，因为 VuePress Core 已经和 Webpack 解耦了。如果你仍然想要在插件中修改 Webpack 配置，可以尝试直接修改 <code>app.options.bundlerConfig</code> 。</li></ul><h2 id="给主题作者" tabindex="-1"><a class="header-anchor" href="#给主题作者" aria-hidden="true">#</a> 给主题作者</h2><p>请先浏览 <a href="#%E6%8F%92%E4%BB%B6-api-%E5%8F%98%E6%9B%B4">插件 API 变更</a> 和 <a href="#%E4%B8%BB%E9%A2%98-api-%E5%8F%98%E6%9B%B4">主题 API 变更</a>。</p><p>虽然我们不允许在插件中使用其他插件了，但是你仍然可以在你的主题中使用插件。</p><p>一些主要的 Breaking Changes ：</p>',11),la=c("所谓的 "),ta=s("strong",null,"主题目录结构约定",-1),oa=c(" 不再存在。 "),ca=s("li",null,[s("code",null,"theme/enhanceApp.js"),c(" 或 "),s("code",null,"theme/clientAppEnhance.{js,ts}"),c(" 文件不会被隐式作为 Client App Enhance 文件。你需要在 "),s("code",null,"clientAppEnhanceFiles"),c(" Hook 中显式指定它。")],-1),ra=s("code",null,"theme/global-components/",-1),da=c(" 目录下的文件不会被自动注册为 Vue 组件。你需要使用 "),ia=c("@vuepress/plugin-register-components"),pa=c(" ，或者在 "),ua=s("code",null,"clientAppEnhance.{js,ts}",-1),ha=c(" 中手动注册组件。"),ma=s("li",null,[s("code",null,"theme/layouts/"),c(" 目录下的文件不会被自动注册为布局组件。你需要通过 "),s("code",null,"layouts"),c(" 配置项来显式指定。")],-1),ka=s("li",null,[s("code",null,"theme/templates/"),c(" 目录下的文件不会被自动作为 dev / ssr 的模板。")],-1),fa=s("li",null,[c("你始终需要提供主题入口文件，并且不要使用 "),s("code",null,'"main": "layouts/Layout.vue"'),c(" 作为主题入口。")],-1),ba=c("Stylus 不再是默认的 CSS 预处理器，并且 Stylus 调色板系统不再被默认支持。如果你仍然想要使用和 v1 类似的调色板系统，可以使用 "),ga=c("@vuepress/plugin-palette"),xa=c(" 。"),va=c("由 Prism.js 提供的 Markdown 代码块的语法高亮不再被默认支持。你可以选择使用 "),wa=c("@vuepress/plugin-prismjs"),ya=c(" 或 "),Ba=c("@vuepress/plugin-shiki"),Ea=c(" ，或者用你自己的方式实现语法高亮。"),Ca=s("li",null,[c("考虑到可扩展性， "),s("code",null,"$site.pages"),c(" 不再可用。")],-1);r.render=function(o,c){const r=e("RouterLink");return a(),n(t,null,[d,s("p",null,[i,s(r,{to:"/zh/reference/plugin-api.html#onwatched"},{default:l((()=>[p])),_:1}),u]),h,m,k,s("p",null,[f,s(r,{to:"/zh/reference/config.html#markdown-code-linenumbers"},{default:l((()=>[b])),_:1}),g]),x,s("p",null,[v,s(r,{to:"/zh/reference/config.html#markdown-links"},{default:l((()=>[w])),_:1}),y]),B,E,s("p",null,[C,s(r,{to:"/zh/reference/config.html#markdown-toc"},{default:l((()=>[P])),_:1})]),A,_,s("p",null,[z,s(r,{to:"/zh/reference/plugin-api.html#extendsmarkdown"},{default:l((()=>[S])),_:1}),j]),W,F,s("p",null,[V,s(r,{to:"/zh/reference/plugin-api.html#extendsmarkdown"},{default:l((()=>[I])),_:1}),H]),M,D,s("p",null,[G,s(r,{to:"/zh/reference/config.html#markdown-extractheaders"},{default:l((()=>[L])),_:1})]),T,s("p",null,[R,$,N,s(r,{to:"/zh/reference/config.html#bundlerconfig"},{default:l((()=>[U])),_:1}),q]),J,s("p",null,[K,s(r,{to:"/zh/reference/bundler/webpack.html"},{default:l((()=>[O])),_:1})]),Q,X,Y,s("p",null,[Z,s(r,{to:"/zh/reference/frontmatter.html#head"},{default:l((()=>[ee])),_:1}),ae]),ne,s("p",null,[se,s(r,{to:"/zh/reference/frontmatter.html#permalinkpattern"},{default:l((()=>[le])),_:1}),te]),oe,ce,s("p",null,[re,s(r,{to:"/zh/reference/plugin/palette.html"},{default:l((()=>[de])),_:1}),ie]),pe,s("p",null,[ue,s(r,{to:"/zh/reference/default-theme/styles.html"},{default:l((()=>[he])),_:1}),me]),ke,fe,be,ge,s("p",null,[xe,s(r,{to:"/zh/reference/client-api.html#defineclientappenhance"},{default:l((()=>[ve])),_:1}),we]),ye,Be,s("p",null,[Ee,s(r,{to:"/zh/reference/plugin/register-components.html"},{default:l((()=>[Ce])),_:1}),Pe,Ae,_e]),ze,Se,s("p",null,[je,s(r,{to:"/zh/reference/config.html#theme"},{default:l((()=>[We])),_:1}),Fe]),Ve,s("p",null,[Ie,s(r,{to:"/zh/reference/plugin-api.html"},{default:l((()=>[He])),_:1}),Me]),De,Ge,Le,s("p",null,[Te,s(r,{to:"/zh/reference/theme-api.html#layouts"},{default:l((()=>[Re])),_:1}),$e]),Ne,s("p",null,[Ue,s(r,{to:"/zh/reference/default-theme/styles.html"},{default:l((()=>[qe])),_:1}),Je]),Ke,Oe,s("p",null,[Qe,s(r,{to:"/zh/reference/default-theme/config.html"},{default:l((()=>[Xe])),_:1}),Ye]),Ze,s("p",null,[ea,s(r,{to:"/zh/reference/plugin/"},{default:l((()=>[aa])),_:1}),na]),sa,s("ul",null,[s("li",null,[la,ta,oa,s("ul",null,[ca,s("li",null,[ra,da,s(r,{to:"/zh/reference/plugin/register-components.html"},{default:l((()=>[ia])),_:1}),pa,ua,ha]),ma,ka,fa])]),s("li",null,[ba,s(r,{to:"/zh/reference/plugin/palette.html"},{default:l((()=>[ga])),_:1}),xa]),s("li",null,[va,s(r,{to:"/zh/reference/plugin/prismjs.html"},{default:l((()=>[wa])),_:1}),ya,s(r,{to:"/zh/reference/plugin/shiki.html"},{default:l((()=>[Ba])),_:1}),Ea]),Ca])],64)};export default r;