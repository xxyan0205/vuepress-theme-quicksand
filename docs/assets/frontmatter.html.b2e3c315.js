import{r as n,o as a,c as e,a as s,w as t,F as l,b as p,d as o}from"./app.48991ef1.js";const c={},i=s("h1",{id:"frontmatter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),p(" Frontmatter")],-1),r=s("h2",{id:"lang",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),p(" lang")],-1),u=s("li",null,[s("p",null,[p("Type: "),s("code",null,"string")])],-1),d=s("li",null,[s("p",null,"Details:"),s("p",null,"Language for the page."),s("p",null,[p("This will override the "),s("code",null,"lang"),p(" option in your site config.")])],-1),m=s("p",null,"Also see:",-1),k=p("Config > lang"),h=o('<h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Title for the page.</p><p>If you don&#39;t specify <code>title</code> in frontmatter, content of the first level-one header (i.e. <code># title</code>) will be used as the title.</p></li></ul><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2>',3),b=s("li",null,[s("p",null,[p("Type: "),s("code",null,"string")])],-1),f=s("li",null,[s("p",null,"Details:"),s("p",null,"Description for the page."),s("p",null,[p("This will override the "),s("code",null,"description"),p(" option in your site config.")])],-1),g=s("p",null,"Also see:",-1),y=p("Config > description"),v=o('<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Details:</p><p>Extra tags in <code>&lt;head&gt;</code> tag for the page.</p></li><li><p>Example:</p></li></ul><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo\n      <span class="token key atrule">content</span><span class="token punctuation">:</span> bar\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> link\n    <span class="token punctuation">-</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> canonical\n      <span class="token key atrule">href</span><span class="token punctuation">:</span> foobar</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><p>Rendered as:</p><div class="theme-code-dark"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canonical<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foobar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>',5),w=p("Also see: "),x=p("Config > head"),T=s("h2",{id:"date",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),p(" date")],-1),C=s("li",null,[s("p",null,[p("Type: "),s("code",null,"string")])],-1),q=s("p",null,"Details:",-1),D=s("p",null,"Created date for the page.",-1),M=p("You should specify the date in the form of "),L=s("code",null,"yyyy-MM-dd",-1),A=p(", or follow the "),E={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},P=p("YAML Timestamp Type"),F=p("."),_=s("h2",{id:"permalink",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#permalink","aria-hidden":"true"},"#"),p(" permalink")],-1),I=s("li",null,[s("p",null,[p("Type: "),s("code",null,"string")])],-1),R=s("li",null,[s("p",null,"Details:"),s("p",null,"Permalink for the page."),s("p",null,"This will override the default route path that determined by the file path of the page.")],-1),Y=s("p",null,"Also see:",-1),z=s("li",null,[s("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),S=p("Guide > Page > Routing"),j=o('<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Pattern to generate permalink for the page.</p><p>This won&#39;t take effect if the <code>permalink</code> frontmatter has been set.</p></li><li><p>Usage:</p><table><thead><tr><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td><code>:year</code></td><td>Year part of created date</td></tr><tr><td><code>:month</code></td><td>Month part of created date</td></tr><tr><td><code>:day</code></td><td>Day part of created date</td></tr><tr><td><code>:slug</code></td><td>Slug of page filename</td></tr><tr><td><code>:raw</code></td><td>Raw route path</td></tr></tbody></table><p>The <code>:year</code>, <code>:month</code> and <code>:day</code> patterns are resolved according to the following priority:</p><ul><li>The <code>date</code> frontmatter.</li><li>The filename that matches the date pattern <code>yyyy-MM-dd-foobar.md</code> or <code>yyyy-MM-foobar.md</code>.</li><li>The dirname that matches the date pattern <code>yyyy/MM/dd/foobar.md</code> or <code>yyyy/MM/foobar.md</code>.</li><li>Fallback to <code>0000-00-00</code>.</li></ul></li><li><p>Example 1:</p><p>The page filename is <code>foo-bar.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2021-01-03</span>\n<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/foo-bar.html</code>.</p><ul><li><p>Example 2:</p><p>The page filename is <code>2021-01-03-bar-baz.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/bar-baz.html</code>.</p><ul><li>Also see: <ul><li><a href="#date">Frontmatter &gt; date</a></li><li><a href="#permalink">Frontmatter &gt; permalink</a></li></ul></li></ul><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Layout for the page.</p><p>Layouts are provided by theme. If you don&#39;t specify this frontmatter, the default layout will be used. You should refer to the theme&#39;s own documentation to find what layouts it provides.</p><p>If the theme layouts cannot meet your needs, you can use a custom layout component.</p></li><li><p>Example:</p></li></ul><p>Register a layout component in <code>.vuepress/clientAppEnhance.ts</code> file:</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">&#39;./CustomLayout.vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;CustomLayout&#39;</span><span class="token punctuation">,</span> CustomLayout<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>Set custom layout in frontmatter:</p><div class="theme-code-dark"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="externalicon" tabindex="-1"><a class="header-anchor" href="#externalicon" aria-hidden="true">#</a> externalIcon</h2>',15),B=s("li",null,[s("p",null,[p("Type: "),s("code",null,"boolean")])],-1),G=s("p",null,"Details:",-1),H=p("Whether to append an "),N=p(" icon to external links in current page."),O=s("p",null,"Also see:",-1),U=p("Config > markdown.links.externalIcon");c.render=function(p,o){const c=n("NpmBadge"),W=n("RouterLink"),J=n("OutboundLink");return a(),e(l,null,[i,s(c,{package:"@vuepress/client"}),s(c,{package:"@vuepress/markdown"}),r,s("ul",null,[u,d,s("li",null,[m,s("ul",null,[s("li",null,[s(W,{to:"/reference/config.html#lang"},{default:t((()=>[k])),_:1})])])])]),h,s("ul",null,[b,f,s("li",null,[g,s("ul",null,[s("li",null,[s(W,{to:"/reference/config.html#description"},{default:t((()=>[y])),_:1})])])])]),v,s("ul",null,[s("li",null,[w,s("ul",null,[s("li",null,[s(W,{to:"/reference/config.html#head"},{default:t((()=>[x])),_:1})])])])]),T,s("ul",null,[C,s("li",null,[q,D,s("p",null,[M,L,A,s("a",E,[P,s(J)]),F])])]),_,s("ul",null,[I,R,s("li",null,[Y,s("ul",null,[z,s("li",null,[s(W,{to:"/guide/page.html#routing"},{default:t((()=>[S])),_:1})])])])]),j,s("ul",null,[B,s("li",null,[G,s("p",null,[H,s(J),N])]),s("li",null,[O,s("ul",null,[s("li",null,[s(W,{to:"/reference/config.html#markdown-links-externalicon"},{default:t((()=>[U])),_:1})])])])])],64)};export default c;