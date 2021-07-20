import{r as n,o as s,c as e,a,w as t,F as l,b as c}from"./app.bd6623af.js";const o={},r=a("h1",{id:"打包工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#打包工具","aria-hidden":"true"},"#"),c(" 打包工具")],-1),p=c("VuePress 一直以来都在使用 "),u={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},i=c("webpack"),d=c(" 作为打包工具来进行网站的开发和构建。从 VuePress v2 开始，也可以支持使用其他工具，如 "),k={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},b=c("Vite"),m=c(" 等。"),f=a("p",null,"尽管社区用户也可以创建打包工具 Package ，但目前我们仅推荐使用由 VuePress 团队提供的打包工具。",-1),g=a("h2",{id:"webpack",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),c(" Webpack")],-1),v=c("在使用 "),h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},w=c("vuepress"),y=c(" Package 时，安装的是 webpack 打包工具："),_=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),c(),a("span",{class:"token function"},"add"),c(" -D vuepress@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),x=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),c(),a("span",{class:"token function"},"install"),c(" -D vuepress@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),C=c("你可以在 "),j=c("bundler"),P=c(" 配置项中设置你要使用的打包工具名称，或者不设置它，因为在使用 "),O=a("code",null,"vuepress",-1),D=c(" Package 时， webpack 是默认的打包工具。此时你可以通过 "),V=c("bundlerConfig"),z=c(" 配置项来设置 "),T=c("webpack 打包工具的选项"),B=c(" ："),N=a("div",{class:"theme-code-dark"},[a("div",{class:"language-javascript ext-js line-numbers-mode"},[a("pre",{class:"language-javascript"},[a("code",null,[c("module"),a("span",{class:"token punctuation"},"."),c("exports "),a("span",{class:"token operator"},"="),c(),a("span",{class:"token punctuation"},"{"),c("\n  bundler"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},"'@vuepress/webpack'"),a("span",{class:"token punctuation"},","),c("\n  bundlerConfig"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token comment"},"// webpack 打包工具的选项"),c("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])])],-1),S=a("div",{class:"theme-code-dark"},[a("div",{class:"language-typescript ext-ts line-numbers-mode"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"import"),c(),a("span",{class:"token punctuation"},"{"),c(" defineUserConfig "),a("span",{class:"token punctuation"},"}"),c(),a("span",{class:"token keyword"},"from"),c(),a("span",{class:"token string"},"'vuepress'"),c("\n"),a("span",{class:"token keyword"},"import"),c(),a("span",{class:"token keyword"},"type"),c(),a("span",{class:"token punctuation"},"{"),c(" DefaultThemeOptions"),a("span",{class:"token punctuation"},","),c(" WebpackBundlerOptions "),a("span",{class:"token punctuation"},"}"),c(),a("span",{class:"token keyword"},"from"),c(),a("span",{class:"token string"},"'vuepress'"),c("\n\n"),a("span",{class:"token keyword"},"export"),c(),a("span",{class:"token keyword"},"default"),c(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"defineUserConfig"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),c("DefaultThemeOptions"),a("span",{class:"token punctuation"},","),c(" WebpackBundlerOptions"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),c("\n  bundler"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},"'@vuepress/webpack'"),a("span",{class:"token punctuation"},","),c("\n  bundlerConfig"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token comment"},"// webpack 打包工具的选项"),c("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),c("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),c("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br")])])],-1),U=a("h2",{id:"vite",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),c(" Vite")],-1),R=c("如果想要改为使用 Vite ，你可以切换成 "),W={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},A=c("vuepress-vite"),G=c(" Package ："),J=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),c(),a("span",{class:"token function"},"add"),c(" -D vuepress-vite@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),L=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),c(),a("span",{class:"token function"},"install"),c(" -D vuepress-vite@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),M=c("你可以在 "),Y=c("bundler"),F=c(" 配置项中设置你要使用的打包工具名称，或者不设置它，因为在使用 "),I=a("code",null,"vuepress-vite",-1),q=c(" Package 时， vite 是默认的打包工具。此时你可以通过 "),E=c("bundlerConfig"),H=c(" 配置项来设置 "),K=c("vite 打包工具的选项"),Q=c(" ："),X=a("div",{class:"theme-code-dark"},[a("div",{class:"language-javascript ext-js line-numbers-mode"},[a("pre",{class:"language-javascript"},[a("code",null,[c("module"),a("span",{class:"token punctuation"},"."),c("exports "),a("span",{class:"token operator"},"="),c(),a("span",{class:"token punctuation"},"{"),c("\n  bundler"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},"'@vuepress/vite'"),a("span",{class:"token punctuation"},","),c("\n  bundlerConfig"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token comment"},"// vite 打包工具的选项"),c("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])])],-1),Z=a("div",{class:"theme-code-dark"},[a("div",{class:"language-typescript ext-ts line-numbers-mode"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"import"),c(),a("span",{class:"token punctuation"},"{"),c(" defineUserConfig "),a("span",{class:"token punctuation"},"}"),c(),a("span",{class:"token keyword"},"from"),c(),a("span",{class:"token string"},"'vuepress-vite'"),c("\n"),a("span",{class:"token keyword"},"import"),c(),a("span",{class:"token keyword"},"type"),c(),a("span",{class:"token punctuation"},"{"),c(" DefaultThemeOptions"),a("span",{class:"token punctuation"},","),c(" ViteBundlerOptions "),a("span",{class:"token punctuation"},"}"),c(),a("span",{class:"token keyword"},"from"),c(),a("span",{class:"token string"},"'vuepress-vite'"),c("\n\n"),a("span",{class:"token keyword"},"export"),c(),a("span",{class:"token keyword"},"default"),c(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"defineUserConfig"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),c("DefaultThemeOptions"),a("span",{class:"token punctuation"},","),c(" ViteBundlerOptions"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),c("\n  bundler"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},"'@vuepress/vite'"),a("span",{class:"token punctuation"},","),c("\n  bundlerConfig"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token comment"},"// vite 打包工具的选项"),c("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),c("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),c("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br")])])],-1);o.render=function(c,o){const $=n("OutboundLink"),nn=n("CodeGroupItem"),sn=n("CodeGroup"),en=n("RouterLink");return s(),e(l,null,[r,a("p",null,[p,a("a",u,[i,a($)]),d,a("a",k,[b,a($)]),m]),f,g,a("p",null,[v,a("a",h,[w,a($)]),y]),a(sn,null,{default:t((()=>[a(nn,{title:"YARN",active:""},{default:t((()=>[_])),_:1}),a(nn,{title:"NPM"},{default:t((()=>[x])),_:1})])),_:1}),a("p",null,[C,a(en,{to:"/zh/reference/config.html#bundler"},{default:t((()=>[j])),_:1}),P,O,D,a(en,{to:"/zh/reference/config.html#bundlerconfig"},{default:t((()=>[V])),_:1}),z,a(en,{to:"/zh/reference/bundler/webpack.html"},{default:t((()=>[T])),_:1}),B]),a(sn,null,{default:t((()=>[a(nn,{title:"JS",active:""},{default:t((()=>[N])),_:1}),a(nn,{title:"TS"},{default:t((()=>[S])),_:1})])),_:1}),U,a("p",null,[R,a("a",W,[A,a($)]),G]),a(sn,null,{default:t((()=>[a(nn,{title:"YARN",active:""},{default:t((()=>[J])),_:1}),a(nn,{title:"NPM"},{default:t((()=>[L])),_:1})])),_:1}),a("p",null,[M,a(en,{to:"/zh/reference/config.html#bundler"},{default:t((()=>[Y])),_:1}),F,I,q,a(en,{to:"/zh/reference/config.html#bundlerconfig"},{default:t((()=>[E])),_:1}),H,a(en,{to:"/zh/reference/bundler/vite.html"},{default:t((()=>[K])),_:1}),Q]),a(sn,null,{default:t((()=>[a(nn,{title:"JS",active:""},{default:t((()=>[X])),_:1}),a(nn,{title:"TS"},{default:t((()=>[Z])),_:1})])),_:1})],64)};export default o;