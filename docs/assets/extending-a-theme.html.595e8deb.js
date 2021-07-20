import{r as n,o as s,c as a,a as e,w as t,F as o,b as l}from"./app.bd6623af.js";import{_ as c}from"./extending-a-theme-01.e9ea99b9.js";const p={},u=e("h1",{id:"extending-a-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extending-a-theme","aria-hidden":"true"},"#"),l(" Extending a Theme")],-1),r=e("p",null,"Sometimes you might want make some minor changes to a theme, but you may not want to fork and modify the entire project.",-1),i=l("With the help of "),k=l("Theme API"),m=l(", you can extend a theme and make your own modifications:"),b=e("div",{class:"theme-code-dark"},[e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),l(),e("span",{class:"token punctuation"},"{"),l(" path "),e("span",{class:"token punctuation"},"}"),l(),e("span",{class:"token operator"},"="),l(),e("span",{class:"token function"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'@vuepress/utils'"),e("span",{class:"token punctuation"},")"),l("\n\nmodule"),e("span",{class:"token punctuation"},"."),l("exports "),e("span",{class:"token operator"},"="),l(),e("span",{class:"token punctuation"},"{"),l("\n  "),e("span",{class:"token comment"},"// your theme"),l("\n  name"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'vuepress-theme-foo'"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token comment"},"// parent theme to extend"),l("\n  "),e("span",{class:"token keyword"},"extends"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'vuepress-theme-bar'"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token comment"},"// override layouts of parent theme"),l("\n  layouts"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token punctuation"},"{"),l("\n    Layout"),e("span",{class:"token operator"},":"),l(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),l("__dirname"),e("span",{class:"token punctuation"},","),l(),e("span",{class:"token string"},"'layouts/Layout.vue'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br")])])],-1),d=e("p",null,[l("In this case, your "),e("code",null,"vuepress-theme-foo"),l(" will inherit all configuration, plugins and layouts from "),e("code",null,"vuepress-theme-bar"),l(", and you can override corresponding layouts as needed.")],-1),g=e("h2",{id:"extend-default-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extend-default-theme","aria-hidden":"true"},"#"),l(" Extend Default Theme")],-1),h=e("p",null,[l("First, create the theme directory and theme entry "),e("code",null,".vuepress/theme/index.js"),l(":")],-1),v=e("div",{class:"theme-code-dark"},[e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),l(),e("span",{class:"token punctuation"},"{"),l(" path "),e("span",{class:"token punctuation"},"}"),l(),e("span",{class:"token operator"},"="),l(),e("span",{class:"token function"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'@vuepress/utils'"),e("span",{class:"token punctuation"},")"),l("\n\nmodule"),e("span",{class:"token punctuation"},"."),l("exports "),e("span",{class:"token operator"},"="),l(),e("span",{class:"token punctuation"},"{"),l("\n  name"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'vuepress-theme-local'"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token keyword"},"extends"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'@vuepress/theme-default'"),e("span",{class:"token punctuation"},","),l("\n  layouts"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token punctuation"},"{"),l("\n    Layout"),e("span",{class:"token operator"},":"),l(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),l("__dirname"),e("span",{class:"token punctuation"},","),l(),e("span",{class:"token string"},"'layouts/Layout.vue'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br")])])],-1),y=e("p",null,[l("You local theme will extends default theme, and override the "),e("code",null,"Layout"),l(" layout.")],-1),f=e("p",null,[l("Next, create "),e("code",null,".vuepress/theme/layouts/Layout.vue"),l(", and make use of the slots that provided by the "),e("code",null,"Layout"),l(" of default theme:")],-1),x=e("div",{class:"theme-code-dark"},[e("div",{class:"language-vue ext-vue line-numbers-mode"},[e("pre",{class:"language-vue"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("Layout")]),e("span",{class:"token punctuation"},">")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("template")]),l(),e("span",{class:"token attr-name"},"#page-bottom"),e("span",{class:"token punctuation"},">")]),l("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("div")]),l(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),l("my-footer"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),l("This is my custom page footer"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("div")]),e("span",{class:"token punctuation"},">")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("Layout")]),e("span",{class:"token punctuation"},">")]),l("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[l("\n"),e("span",{class:"token keyword"},"import"),l(" Layout "),e("span",{class:"token keyword"},"from"),l(),e("span",{class:"token string"},"'@vuepress/theme-default/lib/client/layouts/Layout.vue'"),l("\n\n"),e("span",{class:"token keyword"},"export"),l(),e("span",{class:"token keyword"},"default"),l(),e("span",{class:"token punctuation"},"{"),l("\n  components"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token punctuation"},"{"),l("\n    Layout"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("script")]),e("span",{class:"token punctuation"},">")]),l("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("style")]),l(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),l("css"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token style"},[e("span",{class:"token language-css"},[l("\n"),e("span",{class:"token selector"},".my-footer"),l(),e("span",{class:"token punctuation"},"{"),l("\n  "),e("span",{class:"token property"},"text-align"),e("span",{class:"token punctuation"},":"),l(" center"),e("span",{class:"token punctuation"},";"),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("style")]),e("span",{class:"token punctuation"},">")]),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br")])])],-1),w=e("p",null,"You will add a custom footer to every normal pages in default theme (excluding homepage):",-1),j=e("p",null,[e("img",{src:c,alt:"extending-a-theme"})],-1),L=e("p",null,[l("Here are all the slots that provided by the "),e("code",null,"Layout"),l(" of default theme:")],-1),_=e("ul",null,[e("li",null,[e("code",null,"navbar-before")]),e("li",null,[e("code",null,"navbar-after")]),e("li",null,[e("code",null,"sidebar-top")]),e("li",null,[e("code",null,"sidebar-bottom")]),e("li",null,[e("code",null,"page-top")]),e("li",null,[e("code",null,"page-bottom")])],-1),N=e("h2",{id:"make-your-theme-extendable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#make-your-theme-extendable","aria-hidden":"true"},"#"),l(" Make Your Theme Extendable")],-1),q=e("p",null,"As a theme author, you might want to make your theme extendable, allowing users to use your theme with their own customization.",-1),S=e("p",null,"You can provide slots in your layouts, just like how default theme does. This approach requires you to determine which parts of your theme could be extended. It is more suitable for those common customizations like page footer or header:",-1),T=e("div",{class:"theme-code-dark"},[e("div",{class:"language-vue ext-vue line-numbers-mode"},[e("pre",{class:"language-vue"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("div")]),l(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),l("my-theme-layout"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("slot")]),l(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),l("page-header"),e("span",{class:"token punctuation"},'"')]),l(),e("span",{class:"token punctuation"},"/>")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("Content")]),l(),e("span",{class:"token punctuation"},"/>")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("slot")]),l(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),l("page-footer"),e("span",{class:"token punctuation"},'"')]),l(),e("span",{class:"token punctuation"},"/>")]),l("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("div")]),e("span",{class:"token punctuation"},">")]),l("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br")])])],-1),I=e("p",null,"If you think it is not flexible enough, you can try some more aggressive approaches to make each components of you theme replaceable.",-1),Y=e("p",null,[l("For example, set "),e("code",null,"alias"),l(" for each components of you theme:")],-1),C=e("div",{class:"theme-code-dark"},[e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[l("module"),e("span",{class:"token punctuation"},"."),l("exports "),e("span",{class:"token operator"},"="),l(),e("span",{class:"token punctuation"},"{"),l("\n  name"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'vuepress-theme-foo'"),e("span",{class:"token punctuation"},","),l("\n  alias"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token punctuation"},"{"),l("\n    "),e("span",{class:"token comment"},"// set alias for replaceable components"),l("\n    "),e("span",{class:"token string"},"'@theme/Navbar.vue'"),e("span",{class:"token operator"},":"),l(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),l("__dirname"),e("span",{class:"token punctuation"},","),l(),e("span",{class:"token string"},"'components/Navbar.vue'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),l("\n    "),e("span",{class:"token string"},"'@theme/Sidebar.vue'"),e("span",{class:"token operator"},":"),l(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),l("__dirname"),e("span",{class:"token punctuation"},","),l(),e("span",{class:"token string"},"'components/Sidebar.vue'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])])],-1),E=e("p",null,"Next, use those components via aliases in your theme:",-1),F=e("div",{class:"theme-code-dark"},[e("div",{class:"language-vue ext-vue line-numbers-mode"},[e("pre",{class:"language-vue"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("div")]),l(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),l("my-theme-layout"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("Navbar")]),l(),e("span",{class:"token punctuation"},"/>")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("Sidebar")]),l(),e("span",{class:"token punctuation"},"/>")]),l("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("Content")]),l(),e("span",{class:"token punctuation"},"/>")]),l("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("div")]),e("span",{class:"token punctuation"},">")]),l("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("template")]),e("span",{class:"token punctuation"},">")]),l("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),l("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[l("\n"),e("span",{class:"token keyword"},"import"),l(" Navbar "),e("span",{class:"token keyword"},"from"),l(),e("span",{class:"token string"},"'@theme/Navbar.vue'"),l("\n"),e("span",{class:"token keyword"},"import"),l(" Sidebar "),e("span",{class:"token keyword"},"from"),l(),e("span",{class:"token string"},"'@theme/Sidebar.vue'"),l("\n\n"),e("span",{class:"token keyword"},"export"),l(),e("span",{class:"token keyword"},"default"),l(),e("span",{class:"token punctuation"},"{"),l("\n  components"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token punctuation"},"{"),l("\n    Navbar"),e("span",{class:"token punctuation"},","),l("\n    Sidebar"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),l("script")]),e("span",{class:"token punctuation"},">")]),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br")])])],-1),z=e("p",null,[l("Then, users can replace specific components by overriding the "),e("code",null,"alias"),l(" when extending your theme:")],-1),A=e("div",{class:"theme-code-dark"},[e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[l("module"),e("span",{class:"token punctuation"},"."),l("exports "),e("span",{class:"token operator"},"="),l(),e("span",{class:"token punctuation"},"{"),l("\n  name"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'vuepress-theme-foobar'"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token keyword"},"extends"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token string"},"'vuepress-theme-foo'"),l("\n  alias"),e("span",{class:"token operator"},":"),l(),e("span",{class:"token punctuation"},"{"),l("\n    "),e("span",{class:"token comment"},"// replace the Navbar component"),l("\n    "),e("span",{class:"token string"},"'@theme/Navbar.vue'"),e("span",{class:"token operator"},":"),l(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),l("__dirname"),e("span",{class:"token punctuation"},","),l(),e("span",{class:"token string"},"'components/CustomNavbar.vue'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),l("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),l("\n"),e("span",{class:"token punctuation"},"}"),l("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])])],-1);p.render=function(l,c){const p=n("RouterLink");return s(),a(o,null,[u,r,e("p",null,[i,e(p,{to:"/reference/theme-api.html"},{default:t((()=>[k])),_:1}),m]),b,d,g,h,v,y,f,x,w,j,L,_,N,q,S,T,I,Y,C,E,F,z,A],64)};export default p;
