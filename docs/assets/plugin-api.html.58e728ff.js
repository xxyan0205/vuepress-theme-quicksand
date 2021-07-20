import{r as n,o as a,c as s,a as e,w as p,F as t,b as l,d as o}from"./app.ae737f76.js";const i={},c=e("h1",{id:"plugin-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-api","aria-hidden":"true"},"#"),l(" Plugin API")],-1),r=l("Plugin API is supported by "),u={href:"https://www.npmjs.com/package/@vuepress/core",target:"_blank",rel:"noopener noreferrer"},d=l("@vuepress/core"),h=l(" package. You could check out "),k=l("Node API"),m=l(" for how to use the VuePress app instance in plugin hooks."),b=o('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Plugins should be used before initialization. The basic options will be handled once the plugin is used:</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>The following hooks will be processed when initializing app:</p><ul><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#oninitialized">onInitialized</a></li></ul><p>The following hooks will be processed when preparing files:</p><ul><li><a href="#extendspagedata">extendsPageData</a></li><li><a href="#clientappenhancefiles">clientAppEnhanceFiles</a></li><li><a href="#clientapprootcomponentfiles">clientAppRootComponentFiles</a></li><li><a href="#clientappsetupfiles">clientAppSetupFiles</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>The following hooks will be processed in dev / build:</p><ul><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9),g=l("Check out "),f=l("Advanced > Architecture > Core Process and Hooks"),v=l(" to understand the process better."),w=o('<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options" aria-hidden="true">#</a> Basic Options</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the plugin.</p><p>It will be used for identifying plugins to avoid using a same plugin multiple times, so make sure to use a unique plugin name.</p><p>It should follow the naming convention:</p><ul><li>Non-scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>Also see:</p><ul><li><a href="#multiple">Plugin API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Declare whether the plugin can be used multiple times.</p><p>If set to <code>false</code>, when using plugins with the same name, the one used previously will be replaced by the one used later.</p><p>If set to <code>true</code>, plugins with the same name could be used multiple times and won&#39;t be replaced.</p></li><li><p>Also see:</p><ul><li><a href="#name">Plugin API &gt; name</a></li></ul></li></ul><h2 id="development-hooks" tabindex="-1"><a class="header-anchor" href="#development-hooks" aria-hidden="true">#</a> Development Hooks</h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h3><ul><li><p>Type: <code>Record&lt;string, any&gt; | ((app: App) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>Details:</p><p>Path aliases definition.</p><p>This hook accepts an object or a function that returns an object.</p></li><li><p>Example:</p></li></ul><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  alias<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;@alias&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/alias&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> define</h3><ul><li><p>Type: <code>Record&lt;string, any&gt; | ((app: App) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>Details:</p><p>Define global constants replacements.</p><p>This hook accepts an object or a function that returns an object.</p><p>This can be useful for passing variables to client files. Note that the values will be automatically processed by <code>JSON.stringify()</code>.</p></li><li><p>Example:</p></li></ul><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  define<span class="token operator">:</span> <span class="token punctuation">{</span>\n    __GLOBAL_BOOLEAN__<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    __GLOBAL_STRING__<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>\n    __GLOBAL_OBJECT__<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><h3 id="extendsmarkdown" tabindex="-1"><a class="header-anchor" href="#extendsmarkdown" aria-hidden="true">#</a> extendsMarkdown</h3>',13),x=e("li",null,[e("p",null,[l("Type: "),e("code",null,"(md: Markdown, app: App) => void | Promise<void>")])],-1),y=e("p",null,"Details:",-1),P=e("p",null,"Markdown enhancement.",-1),A=l("This hook accepts a function that will receive an instance of "),j=e("code",null,"Markdown",-1),T=l(" powered by "),_={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},D=l("markdown-it"),E=l(" in its arguments."),C=e("p",null,"This can be used for using extra markdown-it plugins and implementing customizations.",-1),I=e("li",null,[e("p",null,"Example:")],-1),O=o('<div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin1<span class="token punctuation">)</span>\n    md<span class="token punctuation">.</span>linkify<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fuzzyEmail<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions" aria-hidden="true">#</a> extendsPageOptions</h3><ul><li><p>Type: <code>(options: PageOptions, app: App) =&gt; PageOptions | Promise&lt;PageOptions&gt;</code></p></li><li><p>Details:</p><p>Page options extension.</p><p>This hook accepts a function that will receive the raw options of the page. The returned object will be merged into page options, which will be used to create the page.</p></li><li><p>Example:</p></li></ul><p>Set permalink pattern for pages in <code>_posts</code> directory:</p><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">extendsPageOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> filePath <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>filePath<span class="token operator">?.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;_posts/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>\n          permalinkPattern<span class="token operator">:</span> <span class="token string">&#39;/:year/:month/:day/:slug.html&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div><h3 id="extendspagedata" tabindex="-1"><a class="header-anchor" href="#extendspagedata" aria-hidden="true">#</a> extendsPageData</h3><ul><li><p>Type: <code>(page: Page, app: App) =&gt; Record&lt;string, any&gt; | Promise&lt;Record&lt;string, any&gt;&gt;</code></p></li><li><p>Details:</p><p>Page data extension.</p><p>This hook accepts a function that will receive an instance of <code>Page</code>. The returned object will be merged into page data, which can be used in client side code.</p></li><li><p>Example:</p></li></ul><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">extendsPageData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> meta <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> meta <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>In client component:</p><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">usePageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>meta<span class="token punctuation">)</span> <span class="token comment">// foobar</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><h2 id="client-files-hooks" tabindex="-1"><a class="header-anchor" href="#client-files-hooks" aria-hidden="true">#</a> Client Files Hooks</h2><h3 id="clientappenhancefiles" tabindex="-1"><a class="header-anchor" href="#clientappenhancefiles" aria-hidden="true">#</a> clientAppEnhanceFiles</h3><ul><li><p>Type: <code>string | string[] | ((app: App) =&gt; string | string[] | Promise&lt;string | string[]&gt;)</code></p></li><li><p>Details:</p><p>Paths of client app enhancement files.</p><p>This hook accepts absolute file paths, or a function that returns the paths.</p><p>Files listed in this hook will be invoked after the client app is created to make some enhancement to it.</p></li><li><p>Example:</p></li></ul><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  clientAppEnhanceFiles<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/clientAppEnhance.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>',14),F=l("Also see: "),R=l("Client API > defineClientAppEnhance"),z=l("Cookbook > Usage of Client App Enhance"),L=o('<h3 id="clientapprootcomponentfiles" tabindex="-1"><a class="header-anchor" href="#clientapprootcomponentfiles" aria-hidden="true">#</a> clientAppRootComponentFiles</h3><ul><li><p>Type: <code>string | string[] | ((app: App) =&gt; string | string[] | Promise&lt;string | string[]&gt;)</code></p></li><li><p>Details:</p><p>Paths of client app root component files.</p><p>This hook accepts absolute file paths, or a function that returns the paths.</p><p>Components listed in this hook will be rendered to the root node of the client app.</p></li><li><p>Example:</p></li></ul><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  clientAppRootComponentFiles<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/RootComponent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h3 id="clientappsetupfiles" tabindex="-1"><a class="header-anchor" href="#clientappsetupfiles" aria-hidden="true">#</a> clientAppSetupFiles</h3>',4),S=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | string[] | ((app: App) => string | string[] | Promise<string | string[]>)")])],-1),N=e("p",null,"Details:",-1),B=e("p",null,"Paths of client app setup files.",-1),G=e("p",null,"This hook accepts absolute file paths, or a function that returns the paths.",-1),M=l("Files listed in this hook will be invoked in the "),q={href:"https://v3.vuejs.org/guide/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},V=l("setup"),W=l(" function of the client app."),H=e("li",null,[e("p",null,"Example:")],-1),J=o('<div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  clientAppSetupFiles<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/clientAppSetup.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>',1),U=l("Also see: "),Y=l("Client API > defineClientAppSetup"),K=o('<h2 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> Lifecycle Hooks</h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a> onInitialized</h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has been initialized.</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared" aria-hidden="true">#</a> onPrepared</h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has finished preparation.</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched" aria-hidden="true">#</a> onWatched</h3><ul><li><p>Type: <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has started dev-server and watched files change.</p><p>The <code>watchers</code> is an array of file watchers. When changing config file, the dev command will be restarted and those watchers will be closed. If you are adding new watchers in this hook, you should push your watchers to the <code>watchers</code> array, so that they can be closed correctly when restarting.</p><p>The <code>restart</code> is a method to restart the dev command. When calling this method, the <code>watchers</code> array will be closed automatically.</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated" aria-hidden="true">#</a> onGenerated</h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has generated static files.</p></li></ul>',9);i.render=function(l,o){const i=n("NpmBadge"),Q=n("OutboundLink"),X=n("RouterLink");return a(),s(t,null,[c,e(i,{package:"@vuepress/core"}),e("p",null,[r,e("a",u,[d,e(Q)]),h,e(X,{to:"/reference/node-api.html"},{default:p((()=>[k])),_:1}),m]),b,e("blockquote",null,[e("p",null,[g,e(X,{to:"/advanced/architecture.html#core-process-and-hooks"},{default:p((()=>[f])),_:1}),v])]),w,e("ul",null,[x,e("li",null,[y,P,e("p",null,[A,j,T,e("a",_,[D,e(Q)]),E]),C]),I]),O,e("ul",null,[e("li",null,[F,e("ul",null,[e("li",null,[e(X,{to:"/reference/client-api.html#defineclientappenhance"},{default:p((()=>[R])),_:1})]),e("li",null,[e(X,{to:"/advanced/cookbook/usage-of-client-app-enhance.html"},{default:p((()=>[z])),_:1})])])])]),L,e("ul",null,[S,e("li",null,[N,B,G,e("p",null,[M,e("a",q,[V,e(Q)]),W])]),H]),J,e("ul",null,[e("li",null,[U,e("ul",null,[e("li",null,[e(X,{to:"/reference/client-api.html#defineclientappsetup"},{default:p((()=>[Y])),_:1})])])])]),K],64)};export default i;
