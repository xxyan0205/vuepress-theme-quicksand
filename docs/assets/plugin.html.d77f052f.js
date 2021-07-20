import{r as n,o as s,c as a,a as e,w as t,F as o,b as p,d as l}from"./app.ae737f76.js";const u={},i=e("h1",{id:"plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin","aria-hidden":"true"},"#"),p(" Plugin")],-1),c=p("With the help of "),r=p("Plugin API"),d=p(", VuePress plugin can provide different features for you."),g=e("h2",{id:"community-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-plugin","aria-hidden":"true"},"#"),p(" Community Plugin")],-1),h=p("Community users have created lots of plugins and published them to "),m={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},f=p("NPM"),b=p(". VuePress team also maintains some official plugins under the "),k={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},v=p("@vuepress"),y=p(" scope. You should check the plugin's own documentation for detailed guide."),w=p("In general, you need to specify the name of the plugin to use in "),P=p("plugins"),j=p(" option:"),_=l('<div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* options */</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>You can use either plugin name or its shorthand:</p><table><thead><tr><th>Plugin Name</th><th>Shorthand</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>',3),x={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"TIP",-1),q=e("p",null,"Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.",-1),A=p("However, some plugins can be used multiple times (e.g. "),C=p("@vuepress/plugin-container"),L=p("), and you should check the documentation of the plugin itself for detailed guide."),Y=e("h2",{id:"local-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-plugin","aria-hidden":"true"},"#"),p(" Local Plugin")],-1),F=e("p",null,"If you want to use your own plugin but don't want to publish it, you can create a local plugin.",-1),M=p("It is recommended to use the "),N=p("Config File"),V=p(" directly as a plugin, because "),W=p("almost all of the Plugin APIs are available"),B=p(", which would be more convenient in most cases."),H=l('<p>But if you have too many things to do in your config file, it&#39;s better to extract them into separate plugins, and use them by setting the absolute path to them or requiring them:</p><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/your-plugin.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./another-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div>',2),O=p("You can refer to "),R=p("Advanced > Writing a Plugin"),S=p(" for how to write your own plugin.");u.render=function(p,l){const u=n("RouterLink"),T=n("OutboundLink");return s(),a(o,null,[i,e("p",null,[c,e(u,{to:"/reference/plugin-api.html"},{default:t((()=>[r])),_:1}),d]),g,e("p",null,[h,e("a",m,[f,e(T)]),b,e("a",k,[v,e(T)]),y]),e("p",null,[w,e(u,{to:"/reference/config.html#plugins"},{default:t((()=>[P])),_:1}),j]),_,e("div",x,[I,q,e("p",null,[A,e(u,{to:"/reference/plugin/container.html"},{default:t((()=>[C])),_:1}),L])]),Y,F,e("p",null,[M,e(u,{to:"/guide/configuration.html#config-file"},{default:t((()=>[N])),_:1}),V,e(u,{to:"/reference/config.html#plugin-api"},{default:t((()=>[W])),_:1}),B]),H,e("p",null,[O,e(u,{to:"/advanced/plugin.html"},{default:t((()=>[R])),_:1}),S])],64)};export default u;