import{r as n,o as s,c as a,a as e,w as p,F as t,b as l,d as o}from"./app.e548ecbe.js";const i={},c=e("h1",{id:"pwa-popup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pwa-popup","aria-hidden":"true"},"#"),l(" pwa-popup")],-1),u=e("p",null,"Provide a popup component for users to activate the new PWA service worker manually.",-1),r=l("This plugin must be used together with "),d=l("pwa plugin"),b=l(", and the "),k=e("code",null,"skipWaiting",-1),m=l(" option must not be set to "),h=e("code",null,"true",-1),g=l("."),v=o('<p>When the new service worker is ready, a popup will appear in the right bottom of the page to ask users to activate the waiting service worker.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p></li><li><p>Details:</p><p>The messages of the popup in different locales.</p><p>If this option is not specified, it will fallback to default messages.</p></li><li><p>Example:</p></li></ul><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;@vuepress/plugin-pwa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&#39;@vuepress/plugin-pwa-popup&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            message<span class="token operator">:</span> <span class="token string">&#39;New content is available.&#39;</span><span class="token punctuation">,</span>\n            buttonText<span class="token operator">:</span> <span class="token string">&#39;Refresh&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            message<span class="token operator">:</span> <span class="token string">&#39;发现新内容可用&#39;</span><span class="token punctuation">,</span>\n            buttonText<span class="token operator">:</span> <span class="token string">&#39;刷新&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div>',5),f=l("Also see: "),w=l("Guide > I18n"),x=o('<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the popup via CSS variables:</p><div class="theme-code-dark"><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers"></div></div></div>',3);i.render=function(l,o){const i=n("NpmBadge"),y=n("RouterLink");return s(),a(t,null,[c,e(i,{package:"@vuepress/plugin-pwa-popup"}),u,e("p",null,[r,e(y,{to:"/reference/plugin/pwa.html"},{default:p((()=>[d])),_:1}),b,k,m,h,g]),v,e("ul",null,[e("li",null,[f,e("ul",null,[e("li",null,[e(y,{to:"/guide/i18n.html"},{default:p((()=>[w])),_:1})])])])]),x],64)};export default i;