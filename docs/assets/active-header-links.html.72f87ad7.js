import{r as e,o as a,c as l,a as r,w as n,F as d,b as i,d as o}from"./app.e548ecbe.js";const h={},c=r("h1",{id:"active-header-links",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#active-header-links","aria-hidden":"true"},"#"),i(" active-header-links")],-1),t=o('<p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector" aria-hidden="true">#</a> headerLinkSelector</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;a.sidebar-item&#39;</code></p></li><li><p>详情：</p><p><em>标题链接</em> 的选择器。</p><p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么及时滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector" aria-hidden="true">#</a> headerAnchorSelector</h3>',6),p=r("li",null,[r("p",null,[i("类型： "),r("code",null,"string")])],-1),s=r("li",null,[r("p",null,[i("默认值： "),r("code",null,"'.header-anchor'")])],-1),u=r("p",null,"详情：",-1),m=r("p",null,[r("em",null,"标题锚点"),i(" 的选择器。")],-1),f=i("你通常不需要设置该选项，除非你通过 "),k=i("markdown.anchor"),b=i(" 修改了 "),g={href:"https://github.com/valeriangalliat/markdown-it-anchor#readme",target:"_blank",rel:"noopener noreferrer"},w=i("markdown-it-anchor"),x=i(" 的 "),v=r("code",null,"permalinkClass",-1),A=i(" 选项。"),E=r("p",null,"参考：",-1),y=i("指南 > Markdown > 语法扩展 > 标题锚点"),L=o('<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>200</code></p></li><li><p>详情：</p><p>滚动事件监听器的 Debounce 延迟。</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p></li></ul>',4);h.render=function(i,o){const h=e("NpmBadge"),_=e("RouterLink"),z=e("OutboundLink");return a(),l(d,null,[c,r(h,{package:"@vuepress/plugin-active-header-links"}),t,r("ul",null,[p,s,r("li",null,[u,m,r("p",null,[f,r(_,{to:"/zh/reference/config.html#markdown-anchor"},{default:n((()=>[k])),_:1}),b,r("a",g,[w,r(z)]),x,v,A])]),r("li",null,[E,r("ul",null,[r("li",null,[r(_,{to:"/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},{default:n((()=>[y])),_:1})])])])]),L],64)};export default h;
