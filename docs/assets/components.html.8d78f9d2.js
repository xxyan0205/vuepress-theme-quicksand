import{r as n,o as a,c as s,a as t,w as e,F as p,b as l,d as o}from"./app.ae737f76.js";const c={},u=t("h1",{id:"built-in-components",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#built-in-components","aria-hidden":"true"},"#"),l(" Built-in Components")],-1),i={id:"badge",tabindex:"-1"},r=t("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),d=l(" Badge "),k=o('<ul><li><p>Props:</p><ul><li>type <ul><li>Type: <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>Default: <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>Type: <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>Default: <code>undefined</code></li></ul></li></ul></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="theme-code-light"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tip<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><p><strong>Output</strong></p>',4),m=l("VuePress - "),g=l("VuePress - "),b=l("VuePress - "),h=o('<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>Details:</p><p>Wrapper of the <a href="#codegroupitem">CodeGroupItem</a> components.</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul></li></ul></li><li><p>Details:</p><p>This component must be placed inside a <a href="#codegroup">CodeGroup</a> component.</p><p>Use the <code>active</code> prop to set the initial active item, or the first item will be activated by default.</p></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="theme-code-light"><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroup</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YARN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">bash:no-line-numbers</span>\n<span class="token code-block language-bash"><span class="token function">yarn</span></span>\n<span class="token punctuation">```</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>NPM<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">bash:no-line-numbers</span>\n<span class="token code-block language-bash"><span class="token function">npm</span> <span class="token function">install</span></span>\n<span class="token punctuation">```</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroup</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></div><p><strong>Output</strong></p>',7),v=t("div",{class:"theme-code-light"},[t("div",{class:"language-bash ext-sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),l("\n")])])])],-1),f=t("div",{class:"theme-code-light"},[t("div",{class:"language-bash ext-sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),l(),t("span",{class:"token function"},"install"),l("\n")])])])],-1),q={class:"custom-container warning"},y=t("p",{class:"custom-container-title"},"WARNING",-1),x=t("p",null,[l("You must add an empty line between the starting tag of "),t("code",null,"<CodeGroupItem>"),l(" and the code fence, otherwise the code fence will not be parsed correctly by Markdown.")],-1),w=t("p",null,"All content must be valid Markdown first, and then a Vue SFC.",-1),C=l("Learn more: "),G=l("Cookbook > Markdown and Vue SFC"),I=l("Alternatively, you can use the "),P=l("custom containers"),V=l(".");c.render=function(l,o){const c=n("NpmBadge"),B=n("Badge"),N=n("CodeGroupItem"),D=n("CodeGroup"),T=n("RouterLink");return a(),s(p,null,[u,t(c,{package:"@vuepress/theme-default"}),t("h2",i,[r,d,t(B,{text:"badge"})]),k,t("ul",null,[t("li",null,[m,t(B,{type:"tip",text:"v2",vertical:"top"})]),t("li",null,[g,t(B,{type:"warning",text:"v2",vertical:"middle"})]),t("li",null,[b,t(B,{type:"danger",text:"v2",vertical:"bottom"})])]),h,t(D,null,{default:e((()=>[t(N,{title:"YARN"},{default:e((()=>[v])),_:1}),t(N,{title:"NPM",active:""},{default:e((()=>[f])),_:1})])),_:1}),t("div",q,[y,x,w,t("p",null,[C,t(T,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:e((()=>[G])),_:1})]),t("p",null,[I,t(T,{to:"/reference/default-theme/markdown.html#custom-containers"},{default:e((()=>[P])),_:1}),V])])],64)};export default c;
