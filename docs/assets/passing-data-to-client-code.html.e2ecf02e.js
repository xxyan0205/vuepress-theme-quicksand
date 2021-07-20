import{r as n,o as s,c as a,a as e,w as p,F as t,b as o,d as c}from"./app.e548ecbe.js";const l={},i=e("h1",{id:"passing-data-to-client-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#passing-data-to-client-code","aria-hidden":"true"},"#"),o(" Passing Data to Client Code")],-1),r=e("p",null,"As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.",-1),u=e("h2",{id:"use-define-hook",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-define-hook","aria-hidden":"true"},"#"),o(" Use "),e("code",null,"define"),o(" Hook")],-1),d=o("Plugin API provides a "),k=o("define"),m=o(" hook to define global constants for client code. You can make use of it to pass data to client."),b=c('<p>First, define some constants in <code>define</code> hook:</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  define<span class="token operator">:</span> <span class="token punctuation">{</span>\n    __FOO__<span class="token operator">:</span> options<span class="token punctuation">.</span>foo <span class="token operator">||</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span>\n    __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span>\n      bar<span class="token operator">:</span> options<span class="token punctuation">.</span>bar <span class="token operator">||</span> <span class="token number">123</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><p>Then use them in client code directly:</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> __FOO__\n<span class="token keyword">const</span> obj <span class="token operator">=</span> __OBJ__\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><p>If you are using TypeScript in client code, you may need to declare the types of the global constants manually:</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> __FOO__<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token keyword">declare</span> <span class="token keyword">const</span> __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="write-and-load-temp-files" tabindex="-1"><a class="header-anchor" href="#write-and-load-temp-files" aria-hidden="true">#</a> Write and Load Temp Files</h2><p>If you need to achieve some more complex features, you can write temp files and load them dynamically in client code.</p>',8),f=o("First, write a temp file "),g=e("code",null,"foo.js",-1),v=o(", which will be generated in the "),h=o("temp"),y=o(" directory:"),w=c('<div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">onPrepared</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// write temp file</span>\n    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">writeTemp</span><span class="token punctuation">(</span><span class="token string">&#39;foo.js&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export const foo = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>Then, load the temp file via <code>@temp</code> alias in client code:</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@temp/foo&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><p>If you are using TypeScript in client code, you may need to declare the type of the temp module manually:</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@temp/foo&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">export</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div>',5);l.render=function(o,c){const l=n("RouterLink");return s(),a(t,null,[i,r,u,e("p",null,[d,e(l,{to:"/reference/plugin-api.html#define"},{default:p((()=>[k])),_:1}),m]),b,e("p",null,[f,g,v,e(l,{to:"/reference/config.html#temp"},{default:p((()=>[h])),_:1}),y]),w],64)};export default l;
