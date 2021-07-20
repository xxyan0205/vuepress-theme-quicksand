import{r as n,o as s,c as a,a as e,w as t,F as p,b as l,d as o}from"./app.48991ef1.js";const c={},r=e("h1",{id:"deployment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deployment","aria-hidden":"true"},"#"),l(" Deployment")],-1),u=e("p",null,"The following guides are based on some shared assumptions:",-1),i=e("li",null,[l("You are placing your Markdown source files inside the "),e("code",null,"docs"),l(" directory of your project;")],-1),b=e("li",null,[l("You are using the default build output location ("),e("code",null,".vuepress/dist"),l(");")],-1),d=l("You are using "),k={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},m=l("yarn classic"),h=l(" as package manager, while npm is also supported;"),g=e("li",null,[l("VuePress is installed as a local dependency in your project, and you have setup the following script in "),e("code",null,"package.json"),l(":")],-1),y=o('<div class="theme-code-dark"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>',2),f=l("Set the correct "),v=l("base"),w=l(" config."),q=o("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),j=l("Choose your preferred CI tools. Here we take "),_={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},E=l("GitHub Actions"),x=l(" as an example."),P=e("p",null,[l("Create "),e("code",null,".github/workflows/docs.yml"),l(" to set up the workflow.")],-1),I=o('<details class="custom-container details"><summary>Click to expand sample config</summary><div class="theme-code-dark"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs\n\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token comment"># trigger deployment on every push to main branch</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>\n  <span class="token comment"># trigger deployment manually</span>\n  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">docs</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token comment"># fetch all commits to get last updated time or other git log info</span>\n          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token comment"># choose node.js version to use</span>\n          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>\n\n      <span class="token comment"># cache node_modules</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            **/node_modules</span>\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            ${{ runner.os }}-yarn-</span>\n\n      <span class="token comment"># install dependencies if the cache did not hit</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies\n        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile\n\n      <span class="token comment"># run build script</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build\n\n      <span class="token comment"># please check out the docs of the workflow for more details</span>\n      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token comment"># deploy to gh-pages branch</span>\n          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages\n          <span class="token comment"># deploy the default output dir of VuePress</span>\n          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist\n        <span class="token key atrule">env</span><span class="token punctuation">:</span>\n          <span class="token comment"># @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>\n          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div></div></details>',1),R={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"TIP",-1),H=l("Please refer to "),N={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},O=l("GitHub Pages official guide"),S=l(" for more details."),G=e("h2",{id:"gitlab-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),l(" GitLab Pages")],-1),A=l("Set the correct "),T=l("base"),U=l(" config."),M=o("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),L=l("Create "),V=e("code",null,".gitlab-ci.yml",-1),B=l(" to set up "),D={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},F=l("GitLab CI"),z=l(" workflow."),Y=o('<details class="custom-container details"><summary>Click to expand sample config</summary><div class="theme-code-dark"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># choose a docker image to use</span>\n<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14<span class="token punctuation">-</span>buster\n\n<span class="token key atrule">pages</span><span class="token punctuation">:</span>\n  <span class="token comment"># trigger deployment on every push to main branch</span>\n  <span class="token key atrule">only</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> main\n\n  <span class="token comment"># cache node_modules</span>\n  <span class="token key atrule">cache</span><span class="token punctuation">:</span>\n    <span class="token key atrule">paths</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> node_modules/\n\n  <span class="token comment"># install dependencies and run build script</span>\n  <span class="token key atrule">script</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile\n  <span class="token punctuation">-</span> yarn docs<span class="token punctuation">:</span>build <span class="token punctuation">-</span><span class="token punctuation">-</span>dest public\n\n  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>\n    <span class="token key atrule">paths</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> public\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></div></details>',1),$={class:"custom-container tip"},K=e("p",{class:"custom-container-title"},"TIP",-1),J=l("Please refer to "),Q={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},W=l("GitLab Pages official guide"),X=l(" for more details."),Z=e("h2",{id:"google-firebase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),l(" Google Firebase")],-1),nn=l("Make sure you have "),sn={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},an=l("firebase-tools"),en=l(" installed."),tn=e("li",null,[e("p",null,[l("Create "),e("code",null,"firebase.json"),l(" and "),e("code",null,".firebaserc"),l(" at the root of your project with the following content:")])],-1),pn=o('<p><code>firebase.json</code>:</p><div class="theme-code-dark"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;hosting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p><code>.firebaserc</code>:</p><div class="theme-code-dark"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;projects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><ol start="3"><li>After running <code>yarn docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol>',5),ln={class:"custom-container tip"},on=e("p",{class:"custom-container-title"},"TIP",-1),cn=l("Please refer to "),rn={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},un=l("Firebase CLI official guide"),bn=l(" for more details."),dn=e("h2",{id:"heroku",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),l(" Heroku")],-1),kn=l("Install "),mn={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},hn=l("Heroku CLI"),gn=l("."),yn=l("Create a Heroku account by "),fn={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},vn=l("signing up"),wn=l("."),qn=e("li",null,[e("p",null,[l("Run "),e("code",null,"heroku login"),l(" and fill in your Heroku credentials:")])],-1),jn=o('<div class="theme-code-dark"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>heroku login\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="theme-code-dark"><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div>',4),_n=l("This is the configuration of your site; read more at "),En={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},xn=l("heroku-buildpack-static"),Pn=l("."),In=e("h2",{id:"netlify",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),l(" Netlify")],-1),Rn=l("On "),Cn={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Hn=l("Netlify"),Nn=l(", set up a new project from GitHub with the following settings:"),On=e("ul",null,[e("li",null,[e("strong",null,"Build Command:"),l(),e("code",null,"yarn docs:build")]),e("li",null,[e("strong",null,"Publish directory:"),l(),e("code",null,"docs/.vuepress/dist")])],-1),Sn=l("Set "),Gn={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},An=l("Environment variables"),Tn=l(" to choose node version:"),Un=e("ul",null,[e("li",null,[e("code",null,"NODE_VERSION"),l(": 14")])],-1),Mn=e("li",null,[e("p",null,"Hit the deploy button.")],-1),Ln=e("h2",{id:"vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),l(" Vercel")],-1),Vn=l("See "),Bn={href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"},Dn=l("Creating and Deploying a VuePress App with Vercel"),Fn=l(".");c.render=function(l,o){const c=n("OutboundLink"),zn=n("RouterLink");return s(),a(p,null,[r,u,e("ul",null,[i,b,e("li",null,[d,e("a",k,[m,e(c)]),h]),g]),y,e("ol",null,[e("li",null,[e("p",null,[f,e(zn,{to:"/reference/config.html#base"},{default:t((()=>[v])),_:1}),w]),q]),e("li",null,[e("p",null,[j,e("a",_,[E,e(c)]),x]),P])]),I,e("div",R,[C,e("p",null,[H,e("a",N,[O,e(c)]),S])]),G,e("ol",null,[e("li",null,[e("p",null,[A,e(zn,{to:"/reference/config.html#base"},{default:t((()=>[T])),_:1}),U]),M]),e("li",null,[e("p",null,[L,V,B,e("a",D,[F,e(c)]),z])])]),Y,e("div",$,[K,e("p",null,[J,e("a",Q,[W,e(c)]),X])]),Z,e("ol",null,[e("li",null,[e("p",null,[nn,e("a",sn,[an,e(c)]),en])]),tn]),pn,e("div",ln,[on,e("p",null,[cn,e("a",rn,[un,e(c)]),bn])]),dn,e("ol",null,[e("li",null,[e("p",null,[kn,e("a",mn,[hn,e(c)]),gn])]),e("li",null,[e("p",null,[yn,e("a",fn,[vn,e(c)]),wn])]),qn]),jn,e("p",null,[_n,e("a",En,[xn,e(c)]),Pn]),In,e("ol",null,[e("li",null,[e("p",null,[Rn,e("a",Cn,[Hn,e(c)]),Nn]),On]),e("li",null,[e("p",null,[Sn,e("a",Gn,[An,e(c)]),Tn]),Un]),Mn]),Ln,e("p",null,[Vn,e("a",Bn,[Dn,e(c)]),Fn])],64)};export default c;