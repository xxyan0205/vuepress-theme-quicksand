import{r as n,o as s,c as a,a as e,w as t,F as p,b as o,d as l}from"./app.ae737f76.js";const r={},c=e("h1",{id:"pwa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),o(" pwa")],-1),i=o("Make your VuePress site a "),u={href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},k=o("Progressive Web Application (PWA)"),d=o("."),b=o("This plugin uses "),m={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},g=o("workbox-build"),h=o(" to generate service worker file, and uses "),f={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},v=o("register-service-worker"),w=o(" to register service worker."),y=e("h2",{id:"web-app-manifests",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-app-manifests","aria-hidden":"true"},"#"),o(" Web App Manifests")],-1),q=o("To make your website fully compliant with PWA, you need to create a "),x={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},W=o("Web app manifests"),_=o(" file and set the icons, colors, etc. for your PWA."),P=o("You need to put your manifest file and icons into the "),S=o("public files directory"),j=o(". In the following example, we assume that you are using the default public directory "),T=e("code",null,".vuepress/public",-1),A=o("."),F=l('<ol><li>Create manifest file</li></ol><p>Typically <code>.vuepress/public/manifest.webmanifest</code>:</p><div class="theme-code-light"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue-powered Static Site Generator&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;start_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/index.html&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standalone&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;background_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;theme_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3eaf7c&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/android-chrome-192x192.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/android-chrome-384x384.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;384x384&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></div><ol start="2"><li>Generate PWA icons</li></ol><p>To make your PWA more accessible, you need to generate some icons, and put them inside the public directory.</p><p>Make sure the path of icons matches the <code>icons</code> field in your manifest file:</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>',7),D={class:"custom-container tip"},E=e("p",{class:"custom-container-title"},"TIP",-1),z=o("Some tools can help to do that. For example, "),I={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},M=o("Favicon Generator"),G=o(" would help you to generate icons together with a sample manifest file."),U=e("ol",{start:"3"},[e("li",null,"Set tags in head")],-1),V=o("You also need to set some tags via "),C=o("head"),R=o(" option to "),Y={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},B=o("deploy the manifest"),L=o(":"),O=l('<div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  head<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;manifest&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/manifest.webmanifest&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;theme-color&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;#3eaf7c&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...other tags</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',2),N=o("This plugin accepts all parameters of workbox-build's "),H={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},J=o("generateSW method"),K=o(" in its options, except "),Q=e("code",null,"globDirectory",-1),X=o(" and "),Z=e("code",null,"swDest",-1),$=o("."),nn=l('<p>For example, you can set <code>skipWaiting: true</code> to auto activate the new service worker once it is ready:</p><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&#39;@vuepress/pwa&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        skipWaiting<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><p>But if you omit <code>skipWaiting</code> or set it to <code>false</code>, you have to activate the new service worker manually:</p>',3),sn=o("For users, you can use our "),an=o("pwa-popup"),en=o(" plugin together."),tn=e("li",null,[o("For developers, you can use our "),e("a",{href:"#composition-api"},"composition API"),o(" to take control of the service worker behavior.")],-1),pn=e("h3",{id:"serviceworkerfilename",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),o(" serviceWorkerFilename")],-1),on=e("li",null,[e("p",null,[o("Type: "),e("code",null,"string")])],-1),ln=e("li",null,[e("p",null,[o("Default: "),e("code",null,"'service-worker.js'")])],-1),rn=e("p",null,"Details:",-1),cn=o("File path of the generated service worker file, which is relative to the "),un=o("dest"),kn=o(" directory."),dn=e("p",null,[o("The service worker file will only be generated in "),e("code",null,"build"),o(" mode.")],-1),bn=e("h2",{id:"composition-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),o(" Composition API")],-1),mn=e("h3",{id:"usepwaevent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),o(" usePwaEvent")],-1),gn=e("p",null,"Details:",-1),hn=e("p",null,"Returns the event emitter of this plugin.",-1),fn=o("You can add listener function to events that provided by "),vn={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},wn=o("register-service-worker"),yn=o("."),qn=e("li",null,[e("p",null,"Example:")],-1),xn=l('<div class="theme-code-light"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-pwa/lib/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Service worker is active.&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>Parameters:</li></ul><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>The registration of the service worker you want activate</td></tr></tbody></table>',4),Wn=e("p",null,"Details:",-1),_n=o("Call "),Pn={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},Sn=o("skipWaiting()"),jn=o(" to activate the waiting service worker."),Tn=e("li",null,[e("p",null,"Example:")],-1),An=l('<div class="theme-code-light"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  usePwaEvent<span class="token punctuation">,</span>\n  useSkipWaiting<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-pwa/lib/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;updated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The waiting service worker is available.&#39;</span><span class="token punctuation">)</span>\n      <span class="token comment">// activate the waiting service worker</span>\n      <span class="token function">useSkipWaiting</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div>',1);r.render=function(o,l){const r=n("NpmBadge"),Fn=n("OutboundLink"),Dn=n("RouterLink");return s(),a(p,null,[c,e(r,{package:"@vuepress/plugin-pwa"}),e("p",null,[i,e("a",u,[k,e(Fn)]),d]),e("p",null,[b,e("a",m,[g,e(Fn)]),h,e("a",f,[v,e(Fn)]),w]),y,e("p",null,[q,e("a",x,[W,e(Fn)]),_]),e("p",null,[P,e(Dn,{to:"/guide/assets.html#public-files"},{default:t((()=>[S])),_:1}),j,T,A]),F,e("div",D,[E,e("p",null,[z,e("a",I,[M,e(Fn)]),G])]),U,e("p",null,[V,e(Dn,{to:"/reference/config.html#head"},{default:t((()=>[C])),_:1}),R,e("a",Y,[B,e(Fn)]),L]),O,e("p",null,[N,e("a",H,[J,e(Fn)]),K,Q,X,Z,$]),nn,e("ul",null,[e("li",null,[sn,e(Dn,{to:"/reference/plugin/pwa-popup.html"},{default:t((()=>[an])),_:1}),en]),tn]),pn,e("ul",null,[on,ln,e("li",null,[rn,e("p",null,[cn,e(Dn,{to:"/reference/config.html#dest"},{default:t((()=>[un])),_:1}),kn]),dn])]),bn,mn,e("ul",null,[e("li",null,[gn,hn,e("p",null,[fn,e("a",vn,[wn,e(Fn)]),yn])]),qn]),xn,e("ul",null,[e("li",null,[Wn,e("p",null,[_n,e("a",Pn,[Sn,e(Fn)]),jn])]),Tn]),An],64)};export default r;
