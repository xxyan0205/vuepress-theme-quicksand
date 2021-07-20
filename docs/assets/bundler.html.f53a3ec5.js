import{r as n,o as e,c as s,a,w as t,F as l,b as o}from"./app.bd6623af.js";const r={},c=a("h1",{id:"bundler",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#bundler","aria-hidden":"true"},"#"),o(" Bundler")],-1),u=o("VuePress has been using "),p={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},i=o("webpack"),d=o(" as the bundler to dev and build sites. Since VuePress v2, other tools like "),b={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},k=o("Vite"),m=o(" are also supported."),f=a("p",null,"Although it is possible to create other bundler packages by community users, currently we only suggest to use the bundlers provided by VuePress team.",-1),g=a("h2",{id:"webpack",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),o(" Webpack")],-1),h=o("When using the "),v={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},w=o("vuepress"),y=o(" package, the webpack bundler is installed:"),_=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),o(),a("span",{class:"token function"},"add"),o(" -D vuepress@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),x=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),o(),a("span",{class:"token function"},"install"),o(" -D vuepress@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),C=o("You can specify the name of the bundler to use in "),j=o("bundler"),O=o(" option, or omit it because webpack is the default bundler when using "),D=a("code",null,"vuepress",-1),T=o(" package. Then you can set "),V=o("options of webpack bundler"),B=o(" via "),P=o("bundlerConfig"),S=o(" option:"),N=a("div",{class:"theme-code-dark"},[a("div",{class:"language-javascript ext-js line-numbers-mode"},[a("pre",{class:"language-javascript"},[a("code",null,[o("module"),a("span",{class:"token punctuation"},"."),o("exports "),a("span",{class:"token operator"},"="),o(),a("span",{class:"token punctuation"},"{"),o("\n  bundler"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},"'@vuepress/webpack'"),a("span",{class:"token punctuation"},","),o("\n  bundlerConfig"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"{"),o("\n    "),a("span",{class:"token comment"},"// webpack bundler options"),o("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),o("\n"),a("span",{class:"token punctuation"},"}"),o("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])])],-1),U=a("div",{class:"theme-code-dark"},[a("div",{class:"language-typescript ext-ts line-numbers-mode"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"import"),o(),a("span",{class:"token punctuation"},"{"),o(" defineUserConfig "),a("span",{class:"token punctuation"},"}"),o(),a("span",{class:"token keyword"},"from"),o(),a("span",{class:"token string"},"'vuepress'"),o("\n"),a("span",{class:"token keyword"},"import"),o(),a("span",{class:"token keyword"},"type"),o(),a("span",{class:"token punctuation"},"{"),o(" DefaultThemeOptions"),a("span",{class:"token punctuation"},","),o(" WebpackBundlerOptions "),a("span",{class:"token punctuation"},"}"),o(),a("span",{class:"token keyword"},"from"),o(),a("span",{class:"token string"},"'vuepress'"),o("\n\n"),a("span",{class:"token keyword"},"export"),o(),a("span",{class:"token keyword"},"default"),o(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"defineUserConfig"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),o("DefaultThemeOptions"),a("span",{class:"token punctuation"},","),o(" WebpackBundlerOptions"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),o("\n  bundler"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},"'@vuepress/webpack'"),a("span",{class:"token punctuation"},","),o("\n  bundlerConfig"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"{"),o("\n    "),a("span",{class:"token comment"},"// webpack bundler options"),o("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),o("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),o("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br")])])],-1),W=a("h2",{id:"vite",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),o(" Vite")],-1),Y=o("If you want to use Vite instead, you can switch to "),A={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},R=o("vuepress-vite"),G=o(" package:"),I=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),o(),a("span",{class:"token function"},"add"),o(" -D vuepress-vite@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),J=a("div",{class:"theme-code-dark"},[a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),o(),a("span",{class:"token function"},"install"),o(" -D vuepress-vite@next\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])],-1),L=o("You can specify the name of the bundler to use in "),M=o("bundler"),F=o(" option, or omit it because vite is the default bundler when using "),q=a("code",null,"vuepress-vite",-1),z=o(" package. Then you can set "),E=o("options of vite bundler"),H=o(" via "),K=o("bundlerConfig"),Q=o(" option:"),X=a("div",{class:"theme-code-dark"},[a("div",{class:"language-javascript ext-js line-numbers-mode"},[a("pre",{class:"language-javascript"},[a("code",null,[o("module"),a("span",{class:"token punctuation"},"."),o("exports "),a("span",{class:"token operator"},"="),o(),a("span",{class:"token punctuation"},"{"),o("\n  bundler"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},"'@vuepress/vite'"),a("span",{class:"token punctuation"},","),o("\n  bundlerConfig"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"{"),o("\n    "),a("span",{class:"token comment"},"// vite bundler options"),o("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),o("\n"),a("span",{class:"token punctuation"},"}"),o("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])])],-1),Z=a("div",{class:"theme-code-dark"},[a("div",{class:"language-typescript ext-ts line-numbers-mode"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"import"),o(),a("span",{class:"token punctuation"},"{"),o(" defineUserConfig "),a("span",{class:"token punctuation"},"}"),o(),a("span",{class:"token keyword"},"from"),o(),a("span",{class:"token string"},"'vuepress-vite'"),o("\n"),a("span",{class:"token keyword"},"import"),o(),a("span",{class:"token keyword"},"type"),o(),a("span",{class:"token punctuation"},"{"),o(" DefaultThemeOptions"),a("span",{class:"token punctuation"},","),o(" ViteBundlerOptions "),a("span",{class:"token punctuation"},"}"),o(),a("span",{class:"token keyword"},"from"),o(),a("span",{class:"token string"},"'vuepress-vite'"),o("\n\n"),a("span",{class:"token keyword"},"export"),o(),a("span",{class:"token keyword"},"default"),o(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"defineUserConfig"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),o("DefaultThemeOptions"),a("span",{class:"token punctuation"},","),o(" ViteBundlerOptions"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),o("\n  bundler"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token string"},"'@vuepress/vite'"),a("span",{class:"token punctuation"},","),o("\n  bundlerConfig"),a("span",{class:"token operator"},":"),o(),a("span",{class:"token punctuation"},"{"),o("\n    "),a("span",{class:"token comment"},"// vite bundler options"),o("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),o("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),o("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br")])])],-1);r.render=function(o,r){const $=n("OutboundLink"),nn=n("CodeGroupItem"),en=n("CodeGroup"),sn=n("RouterLink");return e(),s(l,null,[c,a("p",null,[u,a("a",p,[i,a($)]),d,a("a",b,[k,a($)]),m]),f,g,a("p",null,[h,a("a",v,[w,a($)]),y]),a(en,null,{default:t((()=>[a(nn,{title:"YARN",active:""},{default:t((()=>[_])),_:1}),a(nn,{title:"NPM"},{default:t((()=>[x])),_:1})])),_:1}),a("p",null,[C,a(sn,{to:"/reference/config.html#bundler"},{default:t((()=>[j])),_:1}),O,D,T,a(sn,{to:"/reference/bundler/webpack.html"},{default:t((()=>[V])),_:1}),B,a(sn,{to:"/reference/config.html#bundlerconfig"},{default:t((()=>[P])),_:1}),S]),a(en,null,{default:t((()=>[a(nn,{title:"JS",active:""},{default:t((()=>[N])),_:1}),a(nn,{title:"TS"},{default:t((()=>[U])),_:1})])),_:1}),W,a("p",null,[Y,a("a",A,[R,a($)]),G]),a(en,null,{default:t((()=>[a(nn,{title:"YARN",active:""},{default:t((()=>[I])),_:1}),a(nn,{title:"NPM"},{default:t((()=>[J])),_:1})])),_:1}),a("p",null,[L,a(sn,{to:"/reference/config.html#bundler"},{default:t((()=>[M])),_:1}),F,q,z,a(sn,{to:"/reference/bundler/vite.html"},{default:t((()=>[E])),_:1}),H,a(sn,{to:"/reference/config.html#bundlerconfig"},{default:t((()=>[K])),_:1}),Q]),a(en,null,{default:t((()=>[a(nn,{title:"JS",active:""},{default:t((()=>[X])),_:1}),a(nn,{title:"TS"},{default:t((()=>[Z])),_:1})])),_:1})],64)};export default r;
