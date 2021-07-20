import{r as l,o as e,c as n,a as r,w as u,F as a,b as i}from"./app.e548ecbe.js";import{_ as s,a as o}from"./vuepress-core-process.aa2dda93.js";const t={},p=r("h1",{id:"架构",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#架构","aria-hidden":"true"},"#"),i(" 架构")],-1),d=r("h2",{id:"概览",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#概览","aria-hidden":"true"},"#"),i(" 概览")],-1),h=r("p",null,[r("img",{src:s,alt:"vuepress-architecture-overview"})],-1),c=r("p",null,"上图展示了 VuePress 的简要架构：",-1),f=r("ul",null,[r("li",null,"Node App 会生成临时文件，包括布局、页面、路由等。"),r("li",null,"Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue SPA 一样。")],-1),m=r("p",null,[i("作为开发者，你必须要意识到 VuePress 分为两个主要部分： "),r("strong",null,"Node App"),i(" 和 "),r("strong",null,"Client App"),i(" ，这一点对于开发插件和主题来说都十分重要。")],-1),g=r("ul",null,[r("li",null,"插件或者主题的入口文件会在 Node App 中被加载，因此它们需要使用 CommonJS 格式。"),r("li",null,"客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如布局、组件、App Setup 文件、App Enhance 文件等。它们最好使用 ESM 格式。")],-1),k=r("h2",{id:"核心流程与-hooks",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#核心流程与-hooks","aria-hidden":"true"},"#"),i(" 核心流程与 Hooks")],-1),A=r("p",null,[r("img",{src:o,alt:"vuepress-core-process"})],-1),x=i("上图展示了 VuePress 的核心流程以及 "),b=i("插件 API"),v=i(" 的 Hooks ："),w=i("在 "),P=r("strong",null,"init",-1),_=i(" 阶段： "),z=r("li",null,"主题和插件会被加载。这意味着插件需要在初始化之前使用。",-1),B=i("由于我们要使用 markdown-it 来解析 Markdown 文件，因此 "),C=i("extendsMarkdown"),H=i(" 会在加载页面文件之前调用。"),S=i("页面文件会被加载，因此 "),V=i("extendsPageOptions"),M=i(" Hook 会被调用，用以创建页面。"),N=r("li",null,[i("在 "),r("strong",null,"prepare"),i(" 阶段： "),r("ul",null,[r("li",null,"临时文件会被生成，因此所有和客户端文件相关的 Hooks 会在此处调用。")])],-1),j=i("在 "),E=r("strong",null,"dev / build",-1),F=i(" 阶段： "),I=i("Bundler 会被加载。由于 "),J=i("alias"),L=i(" 和 "),O=i("define"),R=i(" 依赖于 Bundler 的配置，所以它们会在此处调用。");t.render=function(i,s){const o=l("RouterLink");return e(),n(a,null,[p,d,h,c,f,m,g,k,A,r("p",null,[x,r(o,{to:"/zh/reference/plugin-api.html"},{default:u((()=>[b])),_:1}),v]),r("ul",null,[r("li",null,[w,P,_,r("ul",null,[z,r("li",null,[B,r(o,{to:"/zh/reference/plugin-api.html#extendsmarkdown"},{default:u((()=>[C])),_:1}),H]),r("li",null,[S,r(o,{to:"/zh/reference/plugin-api.html#extendspageoptions"},{default:u((()=>[V])),_:1}),M])])]),N,r("li",null,[j,E,F,r("ul",null,[r("li",null,[I,r(o,{to:"/zh/reference/plugin-api.html#alias"},{default:u((()=>[J])),_:1}),L,r(o,{to:"/zh/reference/plugin-api.html#define"},{default:u((()=>[O])),_:1}),R])])])])],64)};export default t;
