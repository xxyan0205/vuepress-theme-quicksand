import{r as e,o as a,c as n,a as s,w as p,F as l,b as t,d as i}from"./app.e548ecbe.js";const c={},o=s("h1",{id:"客户端-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#客户端-api","aria-hidden":"true"},"#"),t(" 客户端 API")],-1),r=t("客户端 API 是由 "),u={href:"https://www.npmjs.com/package/@vuepress/client",target:"_blank",rel:"noopener noreferrer"},d=t("@vuepress/client"),h=t(" Package 提供的，用于开发客户端文件。"),f=i('<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata" aria-hidden="true">#</a> useSiteData</h3><ul><li><p>详情：</p><p>返回站点数据的 Ref 对象。</p></li></ul><h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata" aria-hidden="true">#</a> useSiteLocaleData</h3><ul><li><p>详情：</p><p>返回当前 locale 的站点数据的 Ref 对象。</p><p>当前 locale 中的配置已经合并到顶层配置中。</p></li></ul><h3 id="useroutelocale" tabindex="-1"><a class="header-anchor" href="#useroutelocale" aria-hidden="true">#</a> useRouteLocale</h3>',6),b=s("p",null,"详情：",-1),k=s("p",null,"返回当前路由对应的 locale path 的 Ref 对象。",-1),m=t("它的值是 "),g=t("locales"),v=t(" 配置的键之一。"),x=i('<h3 id="usepagedata" tabindex="-1"><a class="header-anchor" href="#usepagedata" aria-hidden="true">#</a> usePageData</h3><ul><li><p>详情：</p><p>返回当前页面数据的 Ref 对象。</p></li></ul><h3 id="usepagefrontmatter" tabindex="-1"><a class="header-anchor" href="#usepagefrontmatter" aria-hidden="true">#</a> usePageFrontmatter</h3><ul><li><p>详情：</p><p>返回当前页面 Frontmatter 的 Ref 对象。</p><p>它的值是页面数据的 <code>frontmatter</code> 属性。</p></li></ul><h3 id="usepagehead" tabindex="-1"><a class="header-anchor" href="#usepagehead" aria-hidden="true">#</a> usePageHead</h3>',5),_=s("p",null,"详情：",-1),w=s("p",null,"返回当前页面 Head 配置的 Ref 对象。",-1),y=t("它的值是合并 "),A=t("head"),R=t(" Frontmatter 和 "),S=t("head"),C=t(" 配置，并进行去重后得到的。"),P=i('<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle" aria-hidden="true">#</a> usePageHeadTitle</h3><ul><li><p>详情：</p><p>返回当前页面 Head 中的标题的 Ref 对象。</p><p>它的值是连接页面标题和站点标题后得到的。</p></li></ul><h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang" aria-hidden="true">#</a> usePageLang</h3><ul><li><p>详情：</p><p>返回当前页面语言的 Ref 对象。</p><p>它的值是页面数据的 <code>lang</code> 属性。</p></li></ul><h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数" aria-hidden="true">#</a> 工具函数</h2><h3 id="defineclientappenhance" tabindex="-1"><a class="header-anchor" href="#defineclientappenhance" aria-hidden="true">#</a> defineClientAppEnhance</h3>',6),z=s("p",null,"详情：",-1),E=t("帮助你创建 "),j=t("clientAppEnhanceFiles"),q=t(" 的工具函数。"),F=s("li",null,[s("p",null,"示例：")],-1),L=i('<p>创建 <code>clientAppEnhance.ts</code> 文件：</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>',2),D=t("参考： "),H=t("Cookbook > Client App Enhance 的使用方法"),I=s("h3",{id:"defineclientappsetup",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#defineclientappsetup","aria-hidden":"true"},"#"),t(" defineClientAppSetup")],-1),B=s("p",null,"详情：",-1),O=t("帮助你创建 "),V=t("clientAppSetupFiles"),N=t(" 的工具函数。"),T=s("li",null,[s("p",null,"示例：")],-1),U=i('<p>创建 <code>clientAppSetup.ts</code> 文件：</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppSetup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppSetup</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h3 id="withbase" tabindex="-1"><a class="header-anchor" href="#withbase" aria-hidden="true">#</a> withBase</h3>',3),G=s("p",null,"详情：",-1),J=t("在 URL 前添加站点 "),K=t("base"),M=t(" 前缀。"),Q=s("p",null,"参考：",-1),W=t("指南 > 静态资源 > Base Helper"),X=i('<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p>在客户端代码中有一些常量可以使用。</p><p>如果想要把这些常量的类型定义补充到你的代码环境中，请将 <code>@vuepress/client/types</code> 添加到你的 <code>tsconfig.json</code> 里：</p><div class="theme-code-dark"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@vuepress/client/types&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> <code>_<wbr>_VERSION__</code></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>VuePress Core 的版本号。</p></li></ul><h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> <code>_<wbr>_DEV__</code></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>一个环境标记，用于标识当前是否运行在 <code>dev</code> 模式下。</p></li></ul><h3 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr" aria-hidden="true">#</a> <code>_<wbr>_SSR__</code></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>一个环境标记，用于标识当前是否运行在服务端渲染 (SSR) 环境下。</p></li></ul>',10);c.render=function(t,i){const c=e("NpmBadge"),Y=e("OutboundLink"),Z=e("RouterLink");return a(),n(l,null,[o,s(c,{package:"@vuepress/client"}),s("p",null,[r,s("a",u,[d,s(Y)]),h]),f,s("ul",null,[s("li",null,[b,k,s("p",null,[m,s(Z,{to:"/zh/reference/config.html#locales"},{default:p((()=>[g])),_:1}),v])])]),x,s("ul",null,[s("li",null,[_,w,s("p",null,[y,s(Z,{to:"/zh/reference/frontmatter.html#head"},{default:p((()=>[A])),_:1}),R,s(Z,{to:"/zh/reference/config.html#head"},{default:p((()=>[S])),_:1}),C])])]),P,s("ul",null,[s("li",null,[z,s("p",null,[E,s(Z,{to:"/zh/reference/plugin-api.html#clientappenhancefiles"},{default:p((()=>[j])),_:1}),q])]),F]),L,s("ul",null,[s("li",null,[D,s("ul",null,[s("li",null,[s(Z,{to:"/zh/advanced/cookbook/usage-of-client-app-enhance.html"},{default:p((()=>[H])),_:1})])])])]),I,s("ul",null,[s("li",null,[B,s("p",null,[O,s(Z,{to:"/zh/reference/plugin-api.html#clientappsetupfiles"},{default:p((()=>[V])),_:1}),N])]),T]),U,s("ul",null,[s("li",null,[G,s("p",null,[J,s(Z,{to:"/zh/reference/config.html#base"},{default:p((()=>[K])),_:1}),M])]),s("li",null,[Q,s("ul",null,[s("li",null,[s(Z,{to:"/zh/guide/assets.html#base-helper"},{default:p((()=>[W])),_:1})])])])]),X],64)};export default c;
