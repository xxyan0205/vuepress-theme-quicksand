import{r as n,o as s,c as a,a as p,w as t,F as e,b as o,d as l}from"./app.ae737f76.js";const c={},r=p("h1",{id:"docsearch",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#docsearch","aria-hidden":"true"},"#"),o(" docsearch")],-1),u=o("将 "),i={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},k=o("Algolia DocSearch"),d=o(" 集成到 VuePress 中，为你的文档网站提供搜索功能。"),b=p("div",{class:"custom-container tip"},[p("p",{class:"custom-container-title"},"提示"),p("p",null,"当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。"),p("p",null,"该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。")],-1),h=p("h2",{id:"获取搜索索引",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#获取搜索索引","aria-hidden":"true"},"#"),o(" 获取搜索索引")],-1),m=o("你需要 "),g={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},f=o("提交你的网站 URL"),y=o(" 来加入 DocSearch 项目。当你的索引成功创建后， DocSearch 团队会将 "),x=p("a",{href:"#apikey"},"apiKey",-1),q=o(" 和 "),v=p("a",{href:"#indexname"},"indexName",-1),_=o(" 发送到你的邮箱。接下来，你就可以配置该插件，在 VuePress 中启用 DocSearch 了。"),D=o("或者，你也可以 "),S={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},j=o("运行你自己的爬虫"),P=o(" 来创建索引，然后使用你自己的 "),w=p("a",{href:"#appId"},"appId",-1),I=o(", "),A=p("a",{href:"#apikey"},"apiKey",-1),N=o(" 和 "),O=p("a",{href:"#indexname"},"indexName",-1),z=o(" 来配置该插件。"),K=l('<details class="custom-container details"><summary>点击查看爬虫配置示例</summary><div class="theme-code-light"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;index_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your_index_name&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;start_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;https://your.domain.name/&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;stop_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;selectors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;lvl0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.sidebar-heading.active&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Documentation&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h2&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h3&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h4&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h5&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content p, .theme-default-content li&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/html/@lang&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xpath&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;custom_settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;attributesForFaceting&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lang&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></div><p>上述 <code>selectors</code> 是用于默认主题的配置，你可以根据你使用的主题来修改它们。</p><p>注意 <code>selectors.lang</code> 和 <code>custom_settings.attributesForFaceting</code> 字段，它们是<strong>必须</strong>的，否则该插件将无法正常工作。</p></details>',1),F={class:"custom-container tip"},R=p("p",{class:"custom-container-title"},"提示",-1),E=o("如果你使用的不是默认主题，或者在使用 Docsearch 的时候遇到了任何问题，你也可以检查上述的爬虫配置示例，然后前往 "),L={href:"https://github.com/algolia/docsearch-configs",target:"_blank",rel:"noopener noreferrer"},U=o("docsearch-configs"),Q=o(" 仓库，向你的网站的对应配置提交 PR 。"),V=p("h2",{id:"配置项",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),o(" 配置项")],-1),B=p("h3",{id:"apikey",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#apikey","aria-hidden":"true"},"#"),o(" apiKey")],-1),C=p("li",null,[p("p",null,[o("类型： "),p("code",null,"string")])],-1),M=p("li",null,[p("p",null,[o("是否必需： "),p("code",null,"true")])],-1),X=p("li",null,[p("p",null,"详情："),p("p",null,[o("从 DocSearch 团队收到的 "),p("code",null,"apiKey"),o(" ，或者由你自己生成。")])],-1),Y=p("p",null,"参考：",-1),G={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#apikey",target:"_blank",rel:"noopener noreferrer"},H=o("DocSearch > Options > apiKey"),J=p("h3",{id:"indexname",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#indexname","aria-hidden":"true"},"#"),o(" indexName")],-1),T=p("li",null,[p("p",null,[o("类型： "),p("code",null,"string")])],-1),W=p("li",null,[p("p",null,[o("是否必需： "),p("code",null,"true")])],-1),Z=p("li",null,[p("p",null,"详情："),p("p",null,[o("从 DocSearch 团队收到的 "),p("code",null,"indexName"),o(" ，或者由你自己生成。")])],-1),$=p("p",null,"参考：",-1),nn={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#indexname",target:"_blank",rel:"noopener noreferrer"},sn=o("DocSearch > Options > indexName"),an=p("h3",{id:"appid",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#appid","aria-hidden":"true"},"#"),o(" appId")],-1),pn=p("li",null,[p("p",null,[o("类型： "),p("code",null,"string")])],-1),tn=p("p",null,"详情：",-1),en=o("只有在你 "),on={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},ln=o("运行你自己的 DocSearch 爬虫"),cn=o(" 时，才需要配置该选项。用于设置你的 Application ID 。"),rn=p("p",null,"参考：",-1),un={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#appid",target:"_blank",rel:"noopener noreferrer"},kn=o("DocSearch > Options > appId"),dn=p("h3",{id:"searchparameters",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#searchparameters","aria-hidden":"true"},"#"),o(" searchParameters")],-1),bn=p("li",null,[p("p",null,[o("类型： "),p("code",null,"Record<string, any>")])],-1),hn=p("li",null,[p("p",null,"详情："),p("p",null,"Algolia API 的 API 参数。")],-1),mn=p("p",null,"参考：",-1),gn={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#searchparameters",target:"_blank",rel:"noopener noreferrer"},fn=o("DocSearch > Options > searchParameters"),yn={href:"https://www.algolia.com/doc/api-reference/api-parameters/",target:"_blank",rel:"noopener noreferrer"},xn=o("Algolia > API Parameters"),qn=p("h3",{id:"placeholder",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#placeholder","aria-hidden":"true"},"#"),o(" placeholder")],-1),vn=p("li",null,[p("p",null,[o("类型： "),p("code",null,"string")])],-1),_n=p("li",null,[p("p",null,[o("默认值： "),p("code",null,"'Search docs'")])],-1),Dn=p("li",null,[p("p",null,"详情："),p("p",null,"搜索输入框的 placeholder 属性。")],-1),Sn=p("p",null,"参考：",-1),jn={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#placeholder",target:"_blank",rel:"noopener noreferrer"},Pn=o("DocSearch > Options > placeholder"),wn=p("h3",{id:"disableuserpersonalization",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#disableuserpersonalization","aria-hidden":"true"},"#"),o(" disableUserPersonalization")],-1),In=p("li",null,[p("p",null,[o("类型： "),p("code",null,"boolean")])],-1),An=p("li",null,[p("p",null,[o("默认值： "),p("code",null,"false")])],-1),Nn=p("li",null,[p("p",null,"详情："),p("p",null,"是否禁用所有的个性化功能：最近的搜索、收藏的搜索结果等。")],-1),On=p("p",null,"参考：",-1),zn={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#disableuserpersonalization",target:"_blank",rel:"noopener noreferrer"},Kn=o("DocSearch > Options > disableUserPersonalization"),Fn=p("h3",{id:"initialquery",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#initialquery","aria-hidden":"true"},"#"),o(" initialQuery")],-1),Rn=p("li",null,[p("p",null,[o("类型： "),p("code",null,"string")])],-1),En=p("li",null,[p("p",null,"详情："),p("p",null,"打开弹窗时的初始请求。")],-1),Ln=p("p",null,"参考：",-1),Un={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-js#initialquery",target:"_blank",rel:"noopener noreferrer"},Qn=o("DocSearch > Options > initialQuery"),Vn=l('<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, DocsearchPluginOptions&gt;</code></p></li><li><p>详情：</p><p>在不同 locales 下对该插件进行不同的配置。</p><p>该插件的所有其他选项都可以在 locale 中进行配置。</p></li><li><p>示例：</p></li></ul><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&#39;@vuepress/docsearch&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        apiKey<span class="token operator">:</span> <span class="token string">&#39;&lt;API_KEY&gt;&#39;</span><span class="token punctuation">,</span>\n        indexName<span class="token operator">:</span> <span class="token string">&#39;&lt;INDEX_NAME&gt;&#39;</span><span class="token punctuation">,</span>\n        locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            placeholder<span class="token operator">:</span> <span class="token string">&#39;Search Documentation&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            placeholder<span class="token operator">:</span> <span class="token string">&#39;搜索文档&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div>',3),Bn=o("参考： "),Cn=o("指南 > 多语言支持"),Mn=p("h2",{id:"样式",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),o(" 样式")],-1),Xn=o("你可以通过 "),Yn={href:"https://autocomplete-experimental.netlify.app/docs/docsearch-css",target:"_blank",rel:"noopener noreferrer"},Gn=o("@docsearch/css"),Hn=o(" 提供的 CSS 变量来自定义样式："),Jn=l('<div class="theme-code-light"><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>28<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 33<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-spacing</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-icon-stroke-width</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 159<span class="token punctuation">,</span> 175<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>101<span class="token punctuation">,</span> 108<span class="token punctuation">,</span> 133<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* modal */</span>\n  <span class="token property">--docsearch-modal-width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-modal-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 246<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    0 3px 8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* searchbox */</span>\n  <span class="token property">--docsearch-searchbox-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>235<span class="token punctuation">,</span> 237<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* hit */</span>\n  <span class="token property">--docsearch-hit-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>68<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">rgb</span><span class="token punctuation">(</span>212<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* key */</span>\n  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>\n    -225deg<span class="token punctuation">,</span>\n    <span class="token function">rgb</span><span class="token punctuation">(</span>213<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 228<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span>\n    <span class="token function">rgb</span><span class="token punctuation">(</span>248<span class="token punctuation">,</span> 248<span class="token punctuation">,</span> 248<span class="token punctuation">)</span> 100%\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>205<span class="token punctuation">,</span> 205<span class="token punctuation">,</span> 230<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inset 0 0 1px 1px #fff<span class="token punctuation">,</span> 0 1px 2px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 35<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* footer */</span>\n  <span class="token property">--docsearch-footer-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> 0 -1px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>224<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 232<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    0 -3px 6px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>69<span class="token punctuation">,</span> 98<span class="token punctuation">,</span> 155<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="docsearch-1" tabindex="-1"><a class="header-anchor" href="#docsearch-1" aria-hidden="true">#</a> Docsearch</h3><ul><li><p>详情：</p><p>该插件会全局注册一个 <code>&lt;Docsearch /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p><p>将该组件放置在你想要显示 docsearch 按钮的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p></div>',5);c.render=function(o,l){const c=n("NpmBadge"),Tn=n("OutboundLink"),Wn=n("RouterLink");return s(),a(e,null,[r,p(c,{package:"@vuepress/plugin-docsearch"}),p("p",null,[u,p("a",i,[k,p(Tn)]),d]),b,h,p("p",null,[m,p("a",g,[f,p(Tn)]),y,x,q,v,_]),p("p",null,[D,p("a",S,[j,p(Tn)]),P,w,I,A,N,O,z]),K,p("div",F,[R,p("p",null,[E,p("a",L,[U,p(Tn)]),Q])]),V,B,p("ul",null,[C,M,X,p("li",null,[Y,p("ul",null,[p("li",null,[p("a",G,[H,p(Tn)])])])])]),J,p("ul",null,[T,W,Z,p("li",null,[$,p("ul",null,[p("li",null,[p("a",nn,[sn,p(Tn)])])])])]),an,p("ul",null,[pn,p("li",null,[tn,p("p",null,[en,p("a",on,[ln,p(Tn)]),cn])]),p("li",null,[rn,p("ul",null,[p("li",null,[p("a",un,[kn,p(Tn)])])])])]),dn,p("ul",null,[bn,hn,p("li",null,[mn,p("ul",null,[p("li",null,[p("a",gn,[fn,p(Tn)])]),p("li",null,[p("a",yn,[xn,p(Tn)])])])])]),qn,p("ul",null,[vn,_n,Dn,p("li",null,[Sn,p("ul",null,[p("li",null,[p("a",jn,[Pn,p(Tn)])])])])]),wn,p("ul",null,[In,An,Nn,p("li",null,[On,p("ul",null,[p("li",null,[p("a",zn,[Kn,p(Tn)])])])])]),Fn,p("ul",null,[Rn,En,p("li",null,[Ln,p("ul",null,[p("li",null,[p("a",Un,[Qn,p(Tn)])])])])]),Vn,p("ul",null,[p("li",null,[Bn,p("ul",null,[p("li",null,[p(Wn,{to:"/zh/guide/i18n.html"},{default:t((()=>[Cn])),_:1})])])])]),Mn,p("p",null,[Xn,p("a",Yn,[Gn,p(Tn)]),Hn]),Jn],64)};export default c;
