import{_ as n,e as a,o as e,c as l,g as t,h as o}from"./app.0afedf10.js";const C=JSON.parse('{"title":"Source Types","description":"","frontmatter":{},"headers":[{"level":2,"title":"Cassandra","slug":"cassandra","link":"#cassandra","children":[]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]}],"relativePath":"docs/source-types.md"}'),p={name:"docs/source-types.md"},c=o(`<h1 id="source-types" tabindex="-1">Source Types <a class="header-anchor" href="#source-types" aria-hidden="true">#</a></h1><table><thead><tr><th>Source Type</th><th>Implementation Status</th></tr></thead><tbody><tr><td><a href="#cassandra">Cassandra</a></td><td>Alpha</td></tr><tr><td><a href="#redis">Redis</a></td><td>Beta</td></tr></tbody></table><h2 id="cassandra" tabindex="-1">Cassandra <a class="header-anchor" href="#cassandra" aria-hidden="true">#</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">Cassandra</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The address to listen from.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listen_addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1:6379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The number of concurrent connections the source will accept.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">connection_limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Defines the behaviour that occurs when Once the configured connection limit is reached:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># * when true: the connection is dropped.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># * when false: the connection will wait until a connection can be made within the limit.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hard_connection_limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># When this field is provided TLS is used when the client connects to Shotover.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Removing this field will disable TLS.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#tls:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  # Path to the certificate authority file, typically named with a .crt extension.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  certificate_authority_path: &quot;tls/localhost_CA.crt&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  # Path to the certificate file, typically named with a .crt extension.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  certificate_path: &quot;tls/localhost.crt&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  # Path to the private key file, typically named with a .key extension.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  private_key_path: &quot;tls/localhost.key&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Timeout in seconds after which to terminate an idle connection. This field is optional, if not provided, idle connections will never be terminated.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># timeout: 60</span></span>
<span class="line"></span></code></pre></div><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">Redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The address to listen from</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listen_addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1:6379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># The number of concurrent connections the source will accept.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">connection_limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Defines the behaviour that occurs when Once the configured connection limit is reached:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># * when true: the connection is dropped.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># * when false: the connection will wait until a connection can be made within the limit.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hard_connection_limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># When this field is provided TLS is used when the client connects to Shotover.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Removing this field will disable TLS.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#tls:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  # Path to the certificate file, typically named with a .crt extension.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  certificate_path: &quot;tls/redis.crt&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  # Path to the private key file, typically named with a .key extension.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  private_key_path: &quot;tls/redis.key&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  # Path to the certificate authority file typically named ca.crt.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#  certificate_authority_path: &quot;tls/ca.crt&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># Timeout in seconds after which to terminate an idle connection. This field is optional, if not provided, idle connections will never be terminated.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># timeout: 60</span></span>
<span class="line"></span></code></pre></div>`,6);function i(r,y,d,h,D,F){const s=a("Footer");return e(),l("div",null,[c,t(s)])}const f=n(p,[["render",i]]);export{C as __pageData,f as default};
