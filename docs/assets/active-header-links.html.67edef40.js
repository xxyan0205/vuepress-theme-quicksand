import{r as e,o as a,c as l,a as n,w as o,F as r,b as i,d as t}from"./app.e548ecbe.js";const h={},d=n("h1",{id:"active-header-links",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#active-header-links","aria-hidden":"true"},"#"),i(" active-header-links")],-1),c=t('<p>This plugin will listen to page scroll event. When the page scrolls to a certain <em>header anchor</em>, this plugin will change the route hash to that <em>header anchor</em> if there is a corresponding <em>header link</em>.</p><p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won&#39;t need to use it directly in most cases.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector" aria-hidden="true">#</a> headerLinkSelector</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;a.sidebar-item&#39;</code></p></li><li><p>Details:</p><p>Selector of <em>header link</em>.</p><p>If a <em>header anchor</em> does not have a corresponding <em>header link</em>, this plugin won&#39;t change the route hash to that anchor when scrolling to it.</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector" aria-hidden="true">#</a> headerAnchorSelector</h3>',6),s=n("li",null,[n("p",null,[i("Type: "),n("code",null,"string")])],-1),p=n("li",null,[n("p",null,[i("Default: "),n("code",null,"'.header-anchor'")])],-1),u=n("p",null,"Details:",-1),f=n("p",null,[i("Selector of "),n("em",null,"header anchor"),i(".")],-1),m=i("You don't need to specify this option unless you have changed the "),g=n("code",null,"permalinkClass",-1),k=i(" option of "),b={href:"https://github.com/valeriangalliat/markdown-it-anchor#readme",target:"_blank",rel:"noopener noreferrer"},y=i("markdown-it-anchor"),v=i(" via "),w=i("markdown.anchor"),x=i("."),T=n("p",null,"Also see:",-1),D=i("Guide > Markdown > Syntax Extensions > Header Anchors"),S=t('<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>200</code></p></li><li><p>Details:</p><p>The delay of the debounced scroll event listener.</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>5</code></p></li><li><p>Details:</p><p>Even if you click the link of the <em>header anchor</em> directly, the <code>scrollTop</code> might not be exactly equal to <code>offsetTop</code> of the <em>header anchor</em>, so we add an offset to avoid the error.</p></li></ul>',4);h.render=function(i,t){const h=e("NpmBadge"),A=e("OutboundLink"),L=e("RouterLink");return a(),l(r,null,[d,n(h,{package:"@vuepress/plugin-active-header-links"}),c,n("ul",null,[s,p,n("li",null,[u,f,n("p",null,[m,g,k,n("a",b,[y,n(A)]),v,n(L,{to:"/reference/config.html#markdown-anchor"},{default:o((()=>[w])),_:1}),x])]),n("li",null,[T,n("ul",null,[n("li",null,[n(L,{to:"/guide/markdown.html#header-anchors"},{default:o((()=>[D])),_:1})])])])]),S],64)};export default h;
