import{r as n,o as s,c as a,a as p,w as e,F as t,b as l,d as o}from"./app.bd6623af.js";const c={},u=p("h1",{id:"主题-api",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#主题-api","aria-hidden":"true"},"#"),l(" 主题 API")],-1),i=l("VuePress 主题同样是一个插件，因此主题 API 可以接收 "),r=l("插件 API"),d=l(" 的所有选项，但存在以下差别："),k=o('<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>主题的名称。</p><p>它应遵从如下命名约定：</p><ul><li>非 Scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>详情：</p><p>主题永远不能被多次使用，因此不应设置该配置项。</p></li></ul><h2 id="主题特定配置项" tabindex="-1"><a class="header-anchor" href="#主题特定配置项" aria-hidden="true">#</a> 主题特定配置项</h2><h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3><ul><li><p>类型： <code>string | Record&lt;string, string&gt;</code></p></li><li><p>详情：</p><p>指定主题的布局组件。</p><p>它可以接收布局目录的绝对路径。该目录下的所有 <code>.vue,.ts,.js</code> 文件都会被注册为布局组件。</p><p>它还可以接收一个普通对象，其键是布局名称，值是布局文件的绝对路径。</p><p>一个主题必须至少有两个布局： <code>Layout</code> 和 <code>404</code> 。</p></li><li><p>示例：</p></li></ul><p>布局目录：</p><div class="theme-code-dark"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>layouts\n├─ Layout.vue\n├─ <span class="token number">404</span>.vue\n└─ FooBar.vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><p>使用布局目录的绝对路径：</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  layouts<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><p>使用普通对象是等效的：</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts/Layout.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts/404.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    FooBar<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts/FooBar.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>',15),b=p("li",null,[p("p",null,[l("类型： "),p("code",null,"PluginConfig[]")])],-1),h=p("li",null,[p("p",null,"详情："),p("p",null,"主题中要使用的插件。")],-1),m=p("p",null,"参考：",-1),v=l("配置 > plugins"),g=o('<h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>要继承的主题名称。</p><p>父主题的所有主题 API 都会被继承，但是子主题不会覆盖父主题。</p><p>当在子主题和父主题中注册了具有相同名称的布局时，则子主题的布局将具有更高的优先级。</p><p>当同一个插件在子主题和父主题中都被使用时，如果该插件不支持被多次使用，那么只有在子主题中使用的插件会生效。</p><p>支持多级继承。</p></li><li><p>示例：</p></li></ul><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 继承默认主题</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 覆盖 `404` 布局</span>\n  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/404.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div>',3);c.render=function(l,o){const c=n("NpmBadge"),f=n("RouterLink");return s(),a(t,null,[u,p(c,{package:"@vuepress/core"}),p("p",null,[i,p(f,{to:"/zh/reference/plugin-api.html"},{default:e((()=>[r])),_:1}),d]),k,p("ul",null,[b,h,p("li",null,[m,p("ul",null,[p("li",null,[p(f,{to:"/zh/reference/config.html#plugins"},{default:e((()=>[v])),_:1})])])])]),g],64)};export default c;