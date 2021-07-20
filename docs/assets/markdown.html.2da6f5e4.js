import{r as n,o as s,c as a,a as e,w as l,F as p,b as o,d as t}from"./app.ae737f76.js";const c={},r=e("h1",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),o(" Markdown")],-1),i=e("h2",{id:"custom-containers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#"),o(" Custom Containers")],-1),u=t('<p>Usage:</p><div class="theme-code-light"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]\n[content]\n:::\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p>',4),d=e("li",null,[e("code",null,"tip")],-1),m=e("li",null,[e("code",null,"warning")],-1),b=e("li",null,[e("code",null,"danger")],-1),g=e("li",null,[e("code",null,"details")],-1),k=o("Alias of "),v=o("CodeGroup"),h=o(" and "),w=o("CodeGroupItem"),f=o(": "),j=e("ul",null,[e("li",null,[e("code",null,"code-group")]),e("li",null,[e("code",null,"code-group-item")])],-1),x=e("li",null,[e("p",null,"Example 1 (default title):")],-1),T=t('<p><strong>Input</strong></p><div class="theme-code-light"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n\n::: details\nThis is a details block\n:::\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div><p><strong>Output</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This is a warning</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a dangerous warning</p></div><details class="custom-container details"><p>This is a details block</p></details><ul><li>Example 2 (custom title):</li></ul><p><strong>Input</strong></p><div class="theme-code-light"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: danger STOP\nDanger zone, do not proceed\n:::\n\n::: details Click me to view the code\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>\n<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VuePress!&#39;</span><span class="token punctuation">)</span></span>\n<span class="token punctuation">```</span></span>\n:::\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><p><strong>Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="theme-code-light"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VuePress!&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div></details><ul><li>Example 3 (code group alias):</li></ul><p><strong>Input</strong></p><div class="theme-code-light"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: code-group\n::: code-group-item FOO\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>\n<span class="token code-block language-js"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span>\n<span class="token punctuation">```</span></span>\n:::\n::: code-group-item BAR\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>\n<span class="token code-block language-js"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span></span>\n<span class="token punctuation">```</span></span>\n:::\n::::\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div><p><strong>Output</strong></p>',17),y=e("div",{class:"theme-code-light"},[e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),o(" foo "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token string"},"'foo'"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])])],-1),O=e("div",{class:"theme-code-light"},[e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),o(" bar "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token string"},"'bar'"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])])],-1);c.render=function(o,t){const c=n("NpmBadge"),C=n("RouterLink"),I=n("CodeGroupItem"),G=n("CodeGroup");return s(),a(p,null,[r,e(c,{package:"@vuepress/theme-default"}),i,e("ul",null,[e("li",null,[u,e("ul",null,[d,m,b,g,e("li",null,[k,e(C,{to:"/reference/default-theme/components.html#codegroup"},{default:l((()=>[v])),_:1}),h,e(C,{to:"/reference/default-theme/components.html#codegroupitem"},{default:l((()=>[w])),_:1}),f,j])])]),x]),T,e(G,null,{default:l((()=>[e(I,{title:"FOO"},{default:l((()=>[y])),_:1}),e(I,{title:"BAR"},{default:l((()=>[O])),_:1})])),_:1})],64)};export default c;
