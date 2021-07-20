import{r as e,o as t,c as r,a,F as o,b as n,d as i}from"./app.e548ecbe.js";const s={},d=a("h1",{id:"introduction",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),h=n("VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in "),u={href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},l=n("Markdown"),c=n(", then VuePress will help you to generate a static site to host them."),p=a("p",null,"The purpose of creating VuePress was to support the documentation of Vue.js and its sub-projects, but now it has been helping a large amount of users to build their documentation, blogs, and other static sites.",-1),f=a("h2",{id:"how-it-works",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#how-it-works","aria-hidden":"true"},"#"),n(" How It Works")],-1),g=n("A VuePress site is in fact a single-page application (SPA) powered by "),m={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=n("Vue"),w=n(" and "),y={href:"https://next.router.vuejs.org",target:"_blank",rel:"noopener noreferrer"},k=n("Vue Router"),v=n("."),x=n("Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with "),V={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},P=n("markdown-it"),j=n(" and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content."),T=a("p",null,"During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.",-1),B=n("During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by "),H={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},I=n("Nuxt"),M=n("'s "),S=a("code",null,"nuxt generate",-1),_=n(" command and other projects like "),G={href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},L=n("Gatsby"),N=n("."),A=i('<h2 id="why-not" tabindex="-1"><a class="header-anchor" href="#why-not" aria-hidden="true">#</a> Why Not ...?</h2><h3 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> Nuxt</h3><p>Nuxt is an outstanding Vue SSR framework, and it is capable of doing what VuePress does. But Nuxt is designed for building applications, while VuePress is more lightweight and focused on content-centric static sites.</p><h3 id="vitepress" tabindex="-1"><a class="header-anchor" href="#vitepress" aria-hidden="true">#</a> VitePress</h3><p>VitePress is the little brother of VuePress. It&#39;s also created and maintained by our Vue.js team. It&#39;s even more lightweight and faster than VuePress. However, as a tradeoff, it&#39;s more opinionated and less configurable. For example, it does not support plugins. But VitePress is powerful enough to make your content online if you don&#39;t need advanced customizations.</p><p>It might not be an appropriate comparison, but you can take VuePress and VitePress as Laravel and Lumen.</p><h3 id="docsify-docute" tabindex="-1"><a class="header-anchor" href="#docsify-docute" aria-hidden="true">#</a> Docsify / Docute</h3><p>Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.</p><h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo" aria-hidden="true">#</a> Hexo</h3><p>Hexo has been serving the Vue 2.x docs well. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.</p><h3 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook" aria-hidden="true">#</a> GitBook</h3><p>We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.</p>',12);s.render=function(n,i){const s=e("OutboundLink");return t(),r(o,null,[d,a("p",null,[h,a("a",u,[l,a(s)]),c]),p,f,a("p",null,[g,a("a",m,[b,a(s)]),w,a("a",y,[k,a(s)]),v]),a("p",null,[x,a("a",V,[P,a(s)]),j]),T,a("p",null,[B,a("a",H,[I,a(s)]),M,S,_,a("a",G,[L,a(s)]),N]),A],64)};export default s;