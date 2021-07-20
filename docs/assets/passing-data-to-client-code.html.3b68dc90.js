import{r as n,o as s,c as a,a as p,w as e,F as t,b as o,d as c}from"./app.48991ef1.js";const l={},r=p("h1",{id:"向客户端代码传递数据",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#向客户端代码传递数据","aria-hidden":"true"},"#"),o(" 向客户端代码传递数据")],-1),i=p("p",null,"我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。",-1),u=p("h2",{id:"使用-define-hook",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#使用-define-hook","aria-hidden":"true"},"#"),o(" 使用 "),p("code",null,"define"),o(" Hook")],-1),k=o("插件 API 提供了一个 "),d=o("define"),b=o(" Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。"),m=c('<p>首先，通过 <code>define</code> Hook 定义一些常量：</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  define<span class="token operator">:</span> <span class="token punctuation">{</span>\n    __FOO__<span class="token operator">:</span> options<span class="token punctuation">.</span>foo <span class="token operator">||</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span>\n    __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span>\n      bar<span class="token operator">:</span> options<span class="token punctuation">.</span>bar <span class="token operator">||</span> <span class="token number">123</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><p>然后，在客户端代码中直接使用它们：</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> __FOO__\n<span class="token keyword">const</span> obj <span class="token operator">=</span> __OBJ__\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些全局常量的类型：</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> __FOO__<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token keyword">declare</span> <span class="token keyword">const</span> __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="写入并加载临时文件" tabindex="-1"><a class="header-anchor" href="#写入并加载临时文件" aria-hidden="true">#</a> 写入并加载临时文件</h2><p>如果你需要实现一些更复杂的功能，你可以写入临时文件，并在客户端代码中动态加载它们。</p>',8),v=o("首先，写入一个名为 "),g=p("code",null,"foo.js",-1),f=o(" 的临时文件，它将会生成在 "),h=o("temp"),_=o(" 目录中："),y=c('<div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">onPrepared</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 写入临时文件</span>\n    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">writeTemp</span><span class="token punctuation">(</span><span class="token string">&#39;foo.js&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export const foo = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>然后，在客户端代码中通过 <code>@temp</code> 别名来加载临时文件：</p><div class="theme-code-dark"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@temp/foo&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些临时模块的类型：</p><div class="theme-code-dark"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@temp/foo&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">export</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div>',5);l.render=function(o,c){const l=n("RouterLink");return s(),a(t,null,[r,i,u,p("p",null,[k,p(l,{to:"/zh/reference/plugin-api.html#define"},{default:e((()=>[d])),_:1}),b]),m,p("p",null,[v,g,f,p(l,{to:"/zh/reference/config.html#temp"},{default:e((()=>[h])),_:1}),_]),y],64)};export default l;