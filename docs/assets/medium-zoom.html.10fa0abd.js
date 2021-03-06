import{r as n,o as a,c as e,a as s,F as o,b as t,d as l}from"./app.bd6623af.js";const i={},p=s("h1",{id:"medium-zoom",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#medium-zoom","aria-hidden":"true"},"#"),t(" medium-zoom")],-1),r=t("Integrate "),u={href:"https://github.com/francoischalifour/medium-zoom#readme",target:"_blank",rel:"noopener noreferrer"},c=t("medium-zoom"),d=t(" into VuePress, which can provide the ability to zoom images."),m=l('<p>This plugin has been integrated into the default theme.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>Details:</p><p>Selector for zoomable images.</p><p>By default this plugin will make all images zoomable except those inside <code>&lt;a&gt;</code> tags.</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>500</code></p></li><li><p>Details:</p><p>Delay in milliseconds.</p><p>After navigating to a new page, this plugin will make images zoomable with a delay.</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a> zoomOptions</h3>',7),h=s("li",null,[s("p",null,[t("Type: "),s("code",null,"Object")])],-1),b=s("li",null,[s("p",null,"Details:"),s("p",null,"Options for medium-zoom.")],-1),k=s("p",null,"Also see:",-1),g={href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"},f=t("medium-zoom > Options"),y=l('<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p><div class="theme-code-dark"><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom" aria-hidden="true">#</a> useMediumZoom</h3>',5),z=s("p",null,"Details:",-1),w=t("Returns the "),v=s("code",null,"Zoom",-1),x=t(" instance that used by this plugin, so that you can use the instance "),T={href:"https://github.com/francoischalifour/medium-zoom#methods",target:"_blank",rel:"noopener noreferrer"},D=t("methods"),O=t(" directly."),Z=s("p",null,"This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.",-1),S=s("p",null,[t("This plugin adds an extra "),s("code",null,"refresh"),t(" method on the "),s("code",null,"Zoom"),t(" instance, which will call "),s("code",null,"zoom.detach()"),t(" then "),s("code",null,"zoom.attach()"),t(" with the "),s("a",{href:"#selector"},"selector"),t(" as the default parameter. It will help you to refresh the zoomable images for current page.")],-1),A=s("li",null,[s("p",null,"Example:")],-1),B=l('<div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useMediumZoom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-medium-zoom/lib/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">useMediumZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// ... do something to add new images in current page</span>\n  \n    <span class="token comment">// then you may need to call `refresh` manually to make those new images zoomable</span>\n    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      zoom<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div>',1);i.render=function(t,l){const i=n("NpmBadge"),I=n("OutboundLink");return a(),e(o,null,[p,s(i,{package:"@vuepress/plugin-medium-zoom"}),s("p",null,[r,s("a",u,[c,s(I)]),d]),m,s("ul",null,[h,b,s("li",null,[k,s("ul",null,[s("li",null,[s("a",g,[f,s(I)])])])])]),y,s("ul",null,[s("li",null,[z,s("p",null,[w,v,x,s("a",T,[D,s(I)]),O]),Z,S]),A]),B],64)};export default i;
