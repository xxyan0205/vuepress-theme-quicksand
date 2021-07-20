import{r as n,o as a,c as e,a as s,F as l,b as r,d as t}from"./app.e548ecbe.js";const o={},p=s("h1",{id:"google-analytics",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),r(" google-analytics")],-1),c=r("将 "),i={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},u=r("Google Analytics"),g=r(" 集成到 VuePress 中。"),d=r("该插件会通过引入 "),b={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},h=r("gtag.js"),k=r(" 来启用 "),m={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},f=r("Google Analytics 4"),v=r(" 。"),y=s("h2",{id:"上报事件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上报事件","aria-hidden":"true"},"#"),r(" 上报事件")],-1),X=r("Google Analytics 会 "),G={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},_=r("自动收集部分事件"),x=r(" ，比如 "),A=s("code",null,"page_view",-1),D=r(", "),I=s("code",null,"first_visit",-1),j=r(" 等。"),w=s("p",null,[r("因此，如果你只是想收集站点的一些基础数据，你只需要正确设置 "),s("a",{href:"#id"},"Measurement ID"),r(" ，不需要再额外做其他事情。")],-1),M=r("在引入该插件之后，一个全局的 "),U=s("code",null,"gtag()",-1),B=r(" 函数会被挂载到 "),F=s("code",null,"window",-1),L=r(" 对象上，你可以使用它进行 "),N={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},O=r("自定义事件的上报"),P=r(" 。"),T=s("h2",{id:"配置项",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),r(" 配置项")],-1),V=s("h3",{id:"id",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),r(" id")],-1),q=s("li",null,[s("p",null,[r("类型： "),s("code",null,"string")])],-1),z=s("p",null,"详情：",-1),C=s("p",null,[r("Google Analytics 4 的 Measurement ID ，应以 "),s("code",null,"'G-'"),r(" 开头。")],-1),E=r("你可以通过 "),H={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},J=r("这里"),K=r(' 的指引来找到你的 Measurement ID 。注意区分 Google Analytics 4 的 Measurement ID （即 "G-" 开头的 ID） 和 Universal Analytics 的 Tracking ID （即 "UA-" 开头的 ID）。'),Q=s("li",null,[s("p",null,"示例：")],-1),R=t('<div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&#39;@vuepress/plugin-google-analytics&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        id<span class="token operator">:</span> <span class="token string">&#39;G-XXXXXXXXXX&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div>',1);o.render=function(r,t){const o=n("NpmBadge"),S=n("OutboundLink");return a(),e(l,null,[p,s(o,{package:"@vuepress/plugin-google-analytics"}),s("p",null,[c,s("a",i,[u,s(S)]),g]),s("p",null,[d,s("a",b,[h,s(S)]),k,s("a",m,[f,s(S)]),v]),y,s("p",null,[X,s("a",G,[_,s(S)]),x,A,D,I,j]),w,s("p",null,[M,U,B,F,L,s("a",N,[O,s(S)]),P]),T,V,s("ul",null,[q,s("li",null,[z,C,s("p",null,[E,s("a",H,[J,s(S)]),K])]),Q]),R],64)};export default o;
