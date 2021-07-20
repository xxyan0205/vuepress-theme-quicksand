import{r as n,o as s,c as a,a as e,w as p,F as t,d as l,b as c}from"./app.e548ecbe.js";const o={},r=l('<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置" aria-hidden="true">#</a> 站点多语言配置</h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="theme-code-dark"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docs\n├─ README.md\n├─ foo.md\n├─ nested\n│  └─ README.md\n└─ zh\n   ├─ README.md\n   ├─ foo.md\n   └─ nested\n      └─ README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div>',4),i=c("然后，在你的 "),u=c("配置文件"),b=c(" 中设置 "),d=e("code",null,"locales",-1),m=c(" 选项："),k=l('<div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 键名是该语言所属的子路径</span>\n    <span class="token comment">// 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span>\n    <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>\n      description<span class="token operator">:</span> <span class="token string">&#39;Vue-powered Static Site Generator&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>\n      description<span class="token operator">:</span> <span class="token string">&#39;Vue 驱动的静态网站生成器&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>',2),g={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"提示",-1),v=c("配置参考： "),f=c("locales"),E=l('<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置" aria-hidden="true">#</a> 主题多语言配置</h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div>',4),x={class:"custom-container tip"},j=e("p",{class:"custom-container-title"},"提示",-1),z=c("配置参考： "),V=c("默认主题 > locales");o.render=function(l,c){const o=n("RouterLink");return s(),a(t,null,[r,e("p",null,[i,e(o,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:p((()=>[u])),_:1}),b,d,m]),k,e("div",g,[h,e("p",null,[v,e(o,{to:"/zh/reference/config.html#locales"},{default:p((()=>[f])),_:1})])]),E,e("div",x,[j,e("p",null,[z,e(o,{to:"/zh/reference/default-theme/config.html#locales"},{default:p((()=>[V])),_:1})])])],64)};export default o;
