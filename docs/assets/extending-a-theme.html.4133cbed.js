import{r as n,o as s,c as a,a as t,w as e,F as l,b as o}from"./app.e548ecbe.js";import{_ as p}from"./extending-a-theme-01.e9ea99b9.js";const c={},u=t("h1",{id:"继承一个主题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#继承一个主题","aria-hidden":"true"},"#"),o(" 继承一个主题")],-1),r=t("p",null,"有时你可能希望对一个主题进行一些小改动，但是又不想 Fork 并修改整个项目。",-1),i=o("借助于 "),k=o("主题 API"),b=o(" ，你可以继承一个主题并添加你自己的改动："),m=t("div",{class:"theme-code-dark"},[t("div",{class:"language-javascript ext-js line-numbers-mode"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"const"),o(),t("span",{class:"token punctuation"},"{"),o(" path "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'@vuepress/utils'"),t("span",{class:"token punctuation"},")"),o("\n\nmodule"),t("span",{class:"token punctuation"},"."),o("exports "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token comment"},"// 你的主题"),o("\n  name"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'vuepress-theme-foo'"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token comment"},"// 要继承的父主题"),o("\n  "),t("span",{class:"token keyword"},"extends"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'vuepress-theme-bar'"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token comment"},"// 覆盖父主题的布局"),o("\n  layouts"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    Layout"),t("span",{class:"token operator"},":"),o(" path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),o("__dirname"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token string"},"'layouts/Layout.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br")])])],-1),d=t("p",null,[o("在这个例子中，你的 "),t("code",null,"vuepress-theme-foo"),o(" 将会继承 "),t("code",null,"vuepress-theme-bar"),o(" 的全部配置、插件和布局，并且你可以按照需要来覆盖对应的布局。")],-1),g=t("h2",{id:"继承默认主题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#继承默认主题","aria-hidden":"true"},"#"),o(" 继承默认主题")],-1),v=t("p",null,[o("首先，创建主题目录和主题入口 "),t("code",null,".vuepress/theme/index.js"),o(" ：")],-1),h=t("div",{class:"theme-code-dark"},[t("div",{class:"language-javascript ext-js line-numbers-mode"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"const"),o(),t("span",{class:"token punctuation"},"{"),o(" path "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'@vuepress/utils'"),t("span",{class:"token punctuation"},")"),o("\n\nmodule"),t("span",{class:"token punctuation"},"."),o("exports "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("\n  name"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'vuepress-theme-local'"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token keyword"},"extends"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'@vuepress/theme-default'"),t("span",{class:"token punctuation"},","),o("\n  layouts"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    Layout"),t("span",{class:"token operator"},":"),o(" path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),o("__dirname"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token string"},"'layouts/Layout.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br")])])],-1),y=t("p",null,[o("你的本地主题将会继承默认主题，并且覆盖 "),t("code",null,"Layout"),o(" 布局。")],-1),f=t("p",null,[o("接下来，创建 "),t("code",null,".vuepress/theme/layouts/Layout.vue"),o(" ，并使用由默认主题的 "),t("code",null,"Layout"),o(" 提供的插槽：")],-1),x=t("div",{class:"theme-code-dark"},[t("div",{class:"language-vue ext-vue line-numbers-mode"},[t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Layout")]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),o(),t("span",{class:"token attr-name"},"#page-bottom"),t("span",{class:"token punctuation"},">")]),o("\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("div")]),o(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("my-footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("This is my custom page footer"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("div")]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("Layout")]),t("span",{class:"token punctuation"},">")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[o("\n"),t("span",{class:"token keyword"},"import"),o(" Layout "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'@vuepress/theme-default/lib/client/layouts/Layout.vue'"),o("\n\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"default"),o(),t("span",{class:"token punctuation"},"{"),o("\n  components"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    Layout"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("script")]),t("span",{class:"token punctuation"},">")]),o("\n\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("style")]),o(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("css"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[o("\n"),t("span",{class:"token selector"},".my-footer"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),o(" center"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("style")]),t("span",{class:"token punctuation"},">")]),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br")])])],-1),j=t("p",null,"你将会在除了首页外的所有页面添加一个自定义的页脚：",-1),w=t("p",null,[t("img",{src:p,alt:"extending-a-theme"})],-1),L=t("p",null,[o("下面列出了默认主题的 "),t("code",null,"Layout"),o(" 所提供的所有插槽：")],-1),_=t("ul",null,[t("li",null,[t("code",null,"navbar-before")]),t("li",null,[t("code",null,"navbar-after")]),t("li",null,[t("code",null,"sidebar-top")]),t("li",null,[t("code",null,"sidebar-bottom")]),t("li",null,[t("code",null,"page-top")]),t("li",null,[t("code",null,"page-bottom")])],-1),N=t("h2",{id:"使你的主题可以被继承",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#使你的主题可以被继承","aria-hidden":"true"},"#"),o(" 使你的主题可以被继承")],-1),q=t("p",null,"作为一个主题作者，为了允许用户在使用你的主题时进行更多的自定义，你可能希望你的主题可以被用户继承。",-1),S=t("p",null,"你可以像默认主题的做法一样，在你的布局中添加插槽。这种方式需要你来决定主题的哪些部分是可以被扩展的，它更适合用于一些常见的自定义需求，比如页眉或页脚：",-1),C=t("div",{class:"theme-code-dark"},[t("div",{class:"language-vue ext-vue line-numbers-mode"},[t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("div")]),o(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("my-theme-layout"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("slot")]),o(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("page-header"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Content")]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("slot")]),o(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("page-footer"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("div")]),t("span",{class:"token punctuation"},">")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br")])])],-1),F=t("p",null,"如果你觉得这种方式还不够灵活，你可以尝试一些更激进的做法，使你主题的每个组件都可以被替换。",-1),z=t("p",null,[o("比如，为你主题的每个组件都设置 "),t("code",null,"alias"),o(" 别名：")],-1),A=t("div",{class:"theme-code-dark"},[t("div",{class:"language-javascript ext-js line-numbers-mode"},[t("pre",{class:"language-javascript"},[t("code",null,[o("module"),t("span",{class:"token punctuation"},"."),o("exports "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("\n  name"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'vuepress-theme-foo'"),t("span",{class:"token punctuation"},","),o("\n  alias"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token comment"},"// 为可替换的组件设置别名"),o("\n    "),t("span",{class:"token string"},"'@theme/Navbar.vue'"),t("span",{class:"token operator"},":"),o(" path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),o("__dirname"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token string"},"'components/Navbar.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token string"},"'@theme/Sidebar.vue'"),t("span",{class:"token operator"},":"),o(" path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),o("__dirname"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token string"},"'components/Sidebar.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br")])])],-1),I=t("p",null,"然后，在你的主题中通过别名来使用这些组件：",-1),P=t("div",{class:"theme-code-dark"},[t("div",{class:"language-vue ext-vue line-numbers-mode"},[t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("div")]),o(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("my-theme-layout"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Navbar")]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Sidebar")]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Content")]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("div")]),t("span",{class:"token punctuation"},">")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[o("\n"),t("span",{class:"token keyword"},"import"),o(" Navbar "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'@theme/Navbar.vue'"),o("\n"),t("span",{class:"token keyword"},"import"),o(" Sidebar "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'@theme/Sidebar.vue'"),o("\n\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"default"),o(),t("span",{class:"token punctuation"},"{"),o("\n  components"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    Navbar"),t("span",{class:"token punctuation"},","),o("\n    Sidebar"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("script")]),t("span",{class:"token punctuation"},">")]),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br")])])],-1),R=t("p",null,[o("这样，用户在继承你的主题时，就可以通过覆盖 "),t("code",null,"alias"),o(" 来替换特定的组件了：")],-1),T=t("div",{class:"theme-code-dark"},[t("div",{class:"language-javascript ext-js line-numbers-mode"},[t("pre",{class:"language-javascript"},[t("code",null,[o("module"),t("span",{class:"token punctuation"},"."),o("exports "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("\n  name"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'vuepress-theme-foobar'"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token keyword"},"extends"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'vuepress-theme-foo'"),o("\n  alias"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token comment"},"// 替换 Navbar 组件"),o("\n    "),t("span",{class:"token string"},"'@theme/Navbar.vue'"),t("span",{class:"token operator"},":"),o(" path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),o("__dirname"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token string"},"'components/CustomNavbar.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br")])])],-1);c.render=function(o,p){const c=n("RouterLink");return s(),a(l,null,[u,r,t("p",null,[i,t(c,{to:"/zh/reference/theme-api.html"},{default:e((()=>[k])),_:1}),b]),m,d,g,v,h,y,f,x,j,w,L,_,N,q,S,C,F,z,A,I,P,R,T],64)};export default c;
