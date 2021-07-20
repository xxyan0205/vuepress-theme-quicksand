import{r as s,o as n,c as e,a,w as l,F as r,b as t,d as o}from"./app.bd6623af.js";const c={},i=a("h1",{id:"快速上手",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),t(" 快速上手")],-1),p=a("h2",{id:"依赖环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#依赖环境","aria-hidden":"true"},"#"),t(" 依赖环境")],-1),u={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},d=t("Node.js v12+"),b={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},g=t("Yarn v1 classic"),m=t(" （可选）"),h={class:"custom-container tip"},k=a("p",{class:"custom-container-title"},"提示",-1),v=t("使用 "),f={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},_=t("pnpm"),x=t(" 时，你需要在 "),y={href:"https://pnpm.io/zh/npmrc#shamefully-hoist",target:"_blank",rel:"noopener noreferrer"},q=a("code",null,".npmrc",-1),P=t(" 文件中设置 "),j=a("code",null,"shamefully-hoist=true",-1),N=t(" 。"),V=t("使用 "),z={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},M=t("yarn 2"),R=t(" 时，你需要在 "),A={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},L=a("code",null,".yarnrc.yml",-1),Y=t(" 文件中设置 "),D=a("code",null,"nodeLinker: 'node-modules'",-1),H=t(" 。"),w=o('<h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。</p><ul><li><strong>步骤1</strong>: 创建并进入一个新目录</li></ul><div class="theme-code-dark"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter\n<span class="token builtin class-name">cd</span> vuepress-starter\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><ul><li><strong>步骤2</strong>: 初始化项目</li></ul>',5),C=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),t(" init\n"),a("span",{class:"token function"},"yarn"),t(" init\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br")])])],-1),E=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),t(" init\n"),a("span",{class:"token function"},"npm"),t(" init\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br")])])],-1),G=a("ul",null,[a("li",null,[a("strong",null,"步骤3"),t(": 将 VuePress 安装为本地依赖")])],-1),F=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),t(),a("span",{class:"token function"},"add"),t(" -D vuepress@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),I=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),t(),a("span",{class:"token function"},"install"),t(" -D vuepress@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),O=a("strong",null,"步骤4",-1),B=t(": 在 "),J=a("code",null,"package.json",-1),K=t(" 中添加一些 "),Q={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},S=t("scripts"),T=o('<div class="theme-code-dark"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><ul><li><strong>步骤5</strong>: 将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</li></ul><div class="theme-code-dark"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><ul><li><strong>步骤6</strong>: 创建你的第一篇文档</li></ul><div class="theme-code-dark"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><ul><li><strong>步骤7</strong>: 在本地启动服务器来开发你的文档网站</li></ul>',6),U=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),t(" docs:dev\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),W=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),t(" run docs:dev\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),X=t("VuePress 会在 "),Z={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},$=t("http://localhost:8080"),ss=t(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。"),ns=t("现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress "),es=t("配置"),as=t(" 相关的内容。");c.render=function(t,o){const c=s("OutboundLink"),ls=s("CodeGroupItem"),rs=s("CodeGroup"),ts=s("RouterLink");return n(),e(r,null,[i,p,a("ul",null,[a("li",null,[a("a",u,[d,a(c)])]),a("li",null,[a("a",b,[g,a(c)]),m])]),a("div",h,[k,a("ul",null,[a("li",null,[v,a("a",f,[_,a(c)]),x,a("a",y,[q,a(c)]),P,j,N]),a("li",null,[V,a("a",z,[M,a(c)]),R,a("a",A,[L,a(c)]),Y,D,H])])]),w,a(rs,null,{default:l((()=>[a(ls,{title:"YARN",active:""},{default:l((()=>[C])),_:1}),a(ls,{title:"NPM"},{default:l((()=>[E])),_:1})])),_:1}),G,a(rs,null,{default:l((()=>[a(ls,{title:"YARN",active:""},{default:l((()=>[F])),_:1}),a(ls,{title:"NPM"},{default:l((()=>[I])),_:1})])),_:1}),a("ul",null,[a("li",null,[O,B,J,K,a("a",Q,[S,a(c)])])]),T,a(rs,null,{default:l((()=>[a(ls,{title:"YARN",active:""},{default:l((()=>[U])),_:1}),a(ls,{title:"NPM"},{default:l((()=>[W])),_:1})])),_:1}),a("p",null,[X,a("a",Z,[$,a(c)]),ss]),a("p",null,[ns,a(ts,{to:"/zh/guide/configuration.html"},{default:l((()=>[es])),_:1}),as])],64)};export default c;
