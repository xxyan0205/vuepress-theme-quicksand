import{r as n,o as a,c as s,a as e,w as t,F as l,b as p,d as o}from"./app.e548ecbe.js";const c={},u=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),p(" Frontmatter")],-1),r=e("h2",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),p(" lang")],-1),i=e("li",null,[e("p",null,[p("类型： "),e("code",null,"string")])],-1),d=e("li",null,[e("p",null,"详情："),e("p",null,"页面的语言。"),e("p",null,[p("它将会覆盖站点配置中的 "),e("code",null,"lang"),p(" 配置项")])],-1),k=e("p",null,"参考：",-1),m=p("配置 > lang"),h=o('<h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>页面的标题。</p><p>如果你不在 Frontmatter 中设置 <code>title</code> ，那么页面中第一个一级标题（即 <code># title</code>）的内容会被当作标题使用。</p></li></ul><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2>',3),b=e("li",null,[e("p",null,[p("类型： "),e("code",null,"string")])],-1),g=e("li",null,[e("p",null,"详情："),e("p",null,"页面的描述。"),e("p",null,[p("它将会覆盖站点配置中的 "),e("code",null,"description"),p(" 配置项")])],-1),y=e("p",null,"参考：",-1),f=p("配置 > description"),v=o('<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>类型： <code>HeadConfig[]</code></p></li><li><p>详情：</p><p>页面 <code>&lt;head&gt;</code> 标签内添加的额外标签。</p></li><li><p>示例：</p></li></ul><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo\n      <span class="token key atrule">content</span><span class="token punctuation">:</span> bar\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> link\n    <span class="token punctuation">-</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> canonical\n      <span class="token key atrule">href</span><span class="token punctuation">:</span> foobar</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><p>渲染为：</p><div class="theme-code-dark"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canonical<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foobar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>',5),x=p("参考： "),w=p("配置 > head"),F=e("h2",{id:"date",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),p(" date")],-1),q=e("li",null,[e("p",null,[p("类型： "),e("code",null,"string")])],-1),M=e("p",null,"详情：",-1),C=e("p",null,"页面的创建日期。",-1),L=p("应按照 "),z=e("code",null,"yyyy-MM-dd",-1),P=p(" 的格式来指定日期，或者遵循 "),_={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},A=p("YAML Timestamp Type"),E=p(" 。"),B=e("h2",{id:"permalink",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permalink","aria-hidden":"true"},"#"),p(" permalink")],-1),I=e("li",null,[e("p",null,[p("类型： "),e("code",null,"string")])],-1),T=e("li",null,[e("p",null,"详情："),e("p",null,"页面的永久链接。"),e("p",null,"它将会覆盖根据文件路径来决定的默认路由路径。")],-1),j=e("p",null,"参考：",-1),H=e("li",null,[e("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),N=p("指南 > 页面 > 路由"),O=o('<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>为页面生成永久链接的 Pattern 。</p><p>如果 Frontmatter 中设置了 <code>permalink</code> ，那么这个字段则不会生效。</p></li><li><p>使用：</p><table><thead><tr><th>Pattern</th><th>描述</th></tr></thead><tbody><tr><td><code>:year</code></td><td>创建日期的 年 部分</td></tr><tr><td><code>:month</code></td><td>创建日期的 月 部分</td></tr><tr><td><code>:day</code></td><td>创建日期的 日 部分</td></tr><tr><td><code>:slug</code></td><td>页面文件名的 Slug</td></tr><tr><td><code>:raw</code></td><td>原始路由路径</td></tr></tbody></table><p><code>:year</code>, <code>:month</code> 和 <code>:day</code> Pattern 根据如下优先级进行解析：</p><ul><li>Frontmatter 中的 <code>date</code> 字段。</li><li>符合 <code>yyyy-MM-dd-foobar.md</code> 或 <code>yyyy-MM-foobar.md</code> 日期格式的文件名。</li><li>符合 <code>yyyy/MM/dd/foobar.md</code> 或 <code>yyyy/MM/foobar.md</code> 日期格式的目录名。</li><li>默认值 <code>0000-00-00</code> 。</li></ul></li><li><p>示例 1 ：</p><p>页面文件名是 <code>foo-bar.md</code> 。</p><p>页面 Frontmatter 是：</p></li></ul><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2021-01-03</span>\n<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/foo-bar.html</code> 。</p><ul><li><p>示例 2 ：</p><p>页面文件名是 <code>2021-01-03-bar-baz.md</code>。</p><p>页面 Frontmatter 是：</p></li></ul><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/bar-baz.html</code> 。</p><ul><li>参考： <ul><li><a href="#date">Frontmatter &gt; date</a></li><li><a href="#permalink">Frontmatter &gt; permalink</a></li></ul></li></ul><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>页面的布局。</p><p>布局是由主题提供的。如果你不指定该 Frontmatter ，则会使用默认布局。你应该参考主题自身的文档来了解其提供了哪些布局。</p><p>如果主题布局无法满足你的需求，你可以使用自定义布局组件。</p></li><li><p>示例：</p></li></ul><p>在 <code>.vuepress/clientAppEnhance.ts</code> 文件中注册一个布局组件：</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">&#39;./CustomLayout.vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;CustomLayout&#39;</span><span class="token punctuation">,</span> CustomLayout<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>在 Frontmatter 中设置自定义布局：</p><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="externalicon" tabindex="-1"><a class="header-anchor" href="#externalicon" aria-hidden="true">#</a> externalIcon</h2>',15),R=e("li",null,[e("p",null,[p("类型： "),e("code",null,"boolean")])],-1),S=e("p",null,"详情：",-1),Y=p("是否在当前页面的外部链接的后面添加 "),D=p(" 图标。"),G=e("p",null,"参考：",-1),J=p("配置 > markdown.links.externalIcon");c.render=function(p,o){const c=n("NpmBadge"),K=n("RouterLink"),Q=n("OutboundLink");return a(),s(l,null,[u,e(c,{package:"@vuepress/client"}),e(c,{package:"@vuepress/markdown"}),r,e("ul",null,[i,d,e("li",null,[k,e("ul",null,[e("li",null,[e(K,{to:"/zh/reference/config.html#lang"},{default:t((()=>[m])),_:1})])])])]),h,e("ul",null,[b,g,e("li",null,[y,e("ul",null,[e("li",null,[e(K,{to:"/zh/reference/config.html#description"},{default:t((()=>[f])),_:1})])])])]),v,e("ul",null,[e("li",null,[x,e("ul",null,[e("li",null,[e(K,{to:"/zh/reference/config.html#head"},{default:t((()=>[w])),_:1})])])])]),F,e("ul",null,[q,e("li",null,[M,C,e("p",null,[L,z,P,e("a",_,[A,e(Q)]),E])])]),B,e("ul",null,[I,T,e("li",null,[j,e("ul",null,[H,e("li",null,[e(K,{to:"/zh/guide/page.html#%E8%B7%AF%E7%94%B1"},{default:t((()=>[N])),_:1})])])])]),O,e("ul",null,[R,e("li",null,[S,e("p",null,[Y,e(Q),D])]),e("li",null,[G,e("ul",null,[e("li",null,[e(K,{to:"/zh/reference/config.html#markdown-links-externalicon"},{default:t((()=>[J])),_:1})])])])])],64)};export default c;
