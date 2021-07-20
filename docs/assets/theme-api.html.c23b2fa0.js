import{r as n,o as s,c as a,a as e,w as t,F as p,b as o,d as l}from"./app.e548ecbe.js";const i={},c=e("h1",{id:"theme-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-api","aria-hidden":"true"},"#"),o(" Theme API")],-1),u=o("VuePress theme also works as a plugin, so Theme API can accept all the options of "),r=o("Plugin API"),d=o(" with following differences."),h=l('<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options" aria-hidden="true">#</a> Basic Options</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the theme.</p><p>It should follow the naming convention:</p><ul><li>Non-scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>Details:</p><p>A theme should never be used multiple times, so this option should not be set.</p></li></ul><h2 id="theme-specific-options" tabindex="-1"><a class="header-anchor" href="#theme-specific-options" aria-hidden="true">#</a> Theme Specific Options</h2><h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3><ul><li><p>Type: <code>string | Record&lt;string, string&gt;</code></p></li><li><p>Details:</p><p>Specify layout components of the theme.</p><p>It accepts absolute path of the layouts directory. All the <code>.vue,.ts,.js</code> files in the directory will be registered as layout components.</p><p>It also accepts a plain object, of which the key is the layout name and the value is the absolute path of the layout file.</p><p>A theme must have at least two layouts: <code>Layout</code> and <code>404</code>.</p></li><li><p>Example:</p></li></ul><p>The layout directory:</p><div class="theme-code-dark"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>layouts\n├─ Layout.vue\n├─ <span class="token number">404</span>.vue\n└─ FooBar.vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><p>Using the absolute path of layout directory:</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  layouts<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><p>Using a plain object is equivalent:</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts/Layout.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts/404.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    FooBar<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/layouts/FooBar.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>',15),m=e("li",null,[e("p",null,[o("Type: "),e("code",null,"PluginConfig[]")])],-1),k=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use in the theme.")],-1),b=e("p",null,"Also see:",-1),v=o("Config > plugins"),g=l('<h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>The name of the theme to inherit.</p><p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme.</p><p>When a layout with the same name is registered in both child and parent theme, the layout of the child theme will have a higher priority.</p><p>When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.</p><p>Multi-level inheritance is supported.</p></li><li><p>Example:</p></li></ul><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// inherit the default theme</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// override the `404` layout</span>\n  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/404.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div>',3);i.render=function(o,l){const i=n("NpmBadge"),f=n("RouterLink");return s(),a(p,null,[c,e(i,{package:"@vuepress/core"}),e("p",null,[u,e(f,{to:"/reference/plugin-api.html"},{default:t((()=>[r])),_:1}),d]),h,e("ul",null,[m,k,e("li",null,[b,e("ul",null,[e("li",null,[e(f,{to:"/reference/config.html#plugins"},{default:t((()=>[v])),_:1})])])])]),g],64)};export default i;
