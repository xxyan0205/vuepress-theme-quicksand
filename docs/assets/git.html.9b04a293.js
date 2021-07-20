import{r as e,o as a,c as n,a as s,w as t,F as i,b as o,d as p}from"./app.ae737f76.js";const l={},r=s("h1",{id:"git",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),o(" git")],-1),c=s("p",null,"This plugin will collect git information of your pages, including the created and updated time, the contributors, etc.",-1),u=o("The "),d=o("lastUpdated"),h=o(" and "),m=o("contributors"),g=o(" of default theme is powered by this plugin."),b=s("p",null,"This plugin is mainly used to develop themes. You won't need to use it directly in most cases.",-1),k=s("h2",{id:"git-repository",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git-repository","aria-hidden":"true"},"#"),o(" Git Repository")],-1),f=o("This plugin requires your project to be inside a "),y={href:"https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository",target:"_blank",rel:"noopener noreferrer"},v=o("Git Repository"),w=o(", so that it can collect information from the commit history."),x=o("You should ensure all commits are available when building your site. For example, CI workflows usually clone your repository with "),T={href:"https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt",target:"_blank",rel:"noopener noreferrer"},D=o("--depth 1"),G=o(" to avoid fetching all commits, so you should disable the behavior to make this plugin work properly in CI."),P=p('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This plugin will significantly slow down the speed of data preparation, especially when you have a lot of pages. You can consider disabling this plugin in <code>dev</code> mode to get better development experience.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime" aria-hidden="true">#</a> createdTime</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page created time or not.</p></li></ul><h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime" aria-hidden="true">#</a> updatedTime</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page updated time or not.</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page contributors or not.</p></li></ul><h2 id="page-data" tabindex="-1"><a class="header-anchor" href="#page-data" aria-hidden="true">#</a> Page Data</h2><p>This plugin will add a <code>git</code> field to page data.</p><p>After using this plugin, you can get the collected git information in page data:</p><div class="theme-code-light"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GitPluginPageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePageData</span><span class="token generic class-name"><span class="token operator">&lt;</span>GitPluginPageData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>git<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><h3 id="git-createdtime" tabindex="-1"><a class="header-anchor" href="#git-createdtime" aria-hidden="true">#</a> git.createdTime</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Details:</p><p>Unix timestamp in milliseconds of the first commit of the page.</p></li></ul><h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime" aria-hidden="true">#</a> git.updatedTime</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Details:</p><p>Unix timestamp in milliseconds of the last commit of the page.</p></li></ul><h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors" aria-hidden="true">#</a> git.contributors</h3><ul><li>Type: <code>GitContributor[]</code></li></ul><div class="theme-code-light"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GitContributor</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n  email<span class="token operator">:</span> <span class="token builtin">string</span>\n  commits<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><ul><li><p>Details:</p><p>The contributors information of the page.</p></li></ul>',20);l.render=function(o,p){const l=e("NpmBadge"),R=e("RouterLink"),C=e("OutboundLink");return a(),n(i,null,[r,s(l,{package:"@vuepress/plugin-git"}),c,s("p",null,[u,s(R,{to:"/reference/default-theme/config.html#lastupdated"},{default:t((()=>[d])),_:1}),h,s(R,{to:"/reference/default-theme/config.html#contributors"},{default:t((()=>[m])),_:1}),g]),b,k,s("p",null,[f,s("a",y,[v,s(C)]),w]),s("p",null,[x,s("a",T,[D,s(C)]),G]),P],64)};export default l;
