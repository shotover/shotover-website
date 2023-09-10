import{_ as n,e as l,o as a,c as e,g as o,h as p}from"./app.4efe6a50.js";const D=JSON.parse('{"title":"Redis Clustering","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setting up the Redis cluster","slug":"setting-up-the-redis-cluster","link":"#setting-up-the-redis-cluster","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]}],"relativePath":"docs/examples/redis-clustering-unaware.md"}'),t={name:"docs/examples/redis-clustering-unaware.md"},c=p(`<h1 id="redis-clustering" tabindex="-1">Redis Clustering <a class="header-anchor" href="#redis-clustering" aria-hidden="true">#</a></h1><p>The following guide shows you how to configure Shotover Proxy to support transparently proxying Redis cluster <em>unaware</em> clients to a <a href="https://redis.io/topics/cluster-spec" target="_blank" rel="noreferrer">Redis cluster</a>.</p><h2 id="setting-up-the-redis-cluster" tabindex="-1">Setting up the Redis cluster <a class="header-anchor" href="#setting-up-the-redis-cluster" aria-hidden="true">#</a></h2><p>First you need to setup a Redis cluster for Shotover to connect to.</p><p>The easiest way to do this is with this example <a href="https://github.com/shotover/shotover-proxy/blob/main/shotover-proxy/example-configs-docker/redis-cluster-hiding/docker-compose.yaml" target="_blank" rel="noreferrer">docker-compose.yaml</a> You should first inspect the <code>docker-compose.yaml</code> to understand what the cluster looks like and how its exposed to the network.</p><p>Then run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl -L https://raw.githubusercontent.com/shotover/shotover-proxy/main/shotover-proxy/example-configs/redis-cluster-hiding/docker-compose.yaml --output docker-compose.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose -f docker-compose.yaml up</span></span>
<span class="line"></span></code></pre></div><p>When you are finished with the containers <kbd>ctrl</kbd> + <kbd>c</kbd> will shut them down.</p><p>Alternatively you could spin up a hosted Redis cluster on <a href="https://www.instaclustr.com/products/managed-redis" target="_blank" rel="noreferrer">any cloud provider that provides it</a>. This more accurately reflects a real production use but will take a bit more setup.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>Modify your <code>topology.yaml</code> file like this:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">#</span><span style="color:#C3E88D;">include ../../../shotover-proxy/example-configs-docker/redis-cluster-hiding/topology.yaml</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre></div><p>If you didnt use the standard <code>docker-compose.yaml</code> setup then you will need to change <code>first_contact_points</code> to point to the Redis instances you used.</p><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><p>With your Redis Cluster and Shotover now up and running, we can test out our client application. Let&#39;s start it up!</p><div class="language-make"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">redis-benchmark -t set,get</span></span>
<span class="line"></span></code></pre></div><p>Running against local containerised Redis instances on a Ryzen 9 3900X we get the following:</p><div class="language-make"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">user@demo ~$ redis-benchmark -t set,get</span></span>
<span class="line"><span style="color:#A6ACCD;">====== SET ======                                                     </span></span>
<span class="line"><span style="color:#A6ACCD;">  100000 requests completed in 0.69 seconds</span></span>
<span class="line"><span style="color:#A6ACCD;">  50 parallel clients</span></span>
<span class="line"><span style="color:#A6ACCD;">  3 bytes payload</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">keep</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">alive</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">&quot;save&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">&quot;appendonly&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">multi-thread</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Latency</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">percentile</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">distribution</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">0.000% &lt;= 0.079 milliseconds (cumulative count 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">50.000% &lt;= 0.215 milliseconds (cumulative count 51352)</span></span>
<span class="line"><span style="color:#A6ACCD;">75.000% &lt;= 0.231 milliseconds (cumulative count 79466)</span></span>
<span class="line"><span style="color:#A6ACCD;">87.500% &lt;= 0.247 milliseconds (cumulative count 91677)</span></span>
<span class="line"><span style="color:#A6ACCD;">93.750% &lt;= 0.255 milliseconds (cumulative count 94319)</span></span>
<span class="line"><span style="color:#A6ACCD;">96.875% &lt;= 0.271 milliseconds (cumulative count 97011)</span></span>
<span class="line"><span style="color:#A6ACCD;">98.438% &lt;= 0.303 milliseconds (cumulative count 98471)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.219% &lt;= 0.495 milliseconds (cumulative count 99222)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.609% &lt;= 0.615 milliseconds (cumulative count 99613)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.805% &lt;= 0.719 milliseconds (cumulative count 99806)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.902% &lt;= 0.791 milliseconds (cumulative count 99908)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.951% &lt;= 0.919 milliseconds (cumulative count 99959)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.976% &lt;= 0.967 milliseconds (cumulative count 99976)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.988% &lt;= 0.991 milliseconds (cumulative count 99992)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.994% &lt;= 1.007 milliseconds (cumulative count 99995)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.997% &lt;= 1.015 milliseconds (cumulative count 99998)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.998% &lt;= 1.023 milliseconds (cumulative count 99999)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.999% &lt;= 1.031 milliseconds (cumulative count 100000)</span></span>
<span class="line"><span style="color:#A6ACCD;">100.000% &lt;= 1.031 milliseconds (cumulative count 100000)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Cumulative</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">distribution</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">latencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">0.007% &lt;= 0.103 milliseconds (cumulative count 7)</span></span>
<span class="line"><span style="color:#A6ACCD;">33.204% &lt;= 0.207 milliseconds (cumulative count 33204)</span></span>
<span class="line"><span style="color:#A6ACCD;">98.471% &lt;= 0.303 milliseconds (cumulative count 98471)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.044% &lt;= 0.407 milliseconds (cumulative count 99044)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.236% &lt;= 0.503 milliseconds (cumulative count 99236)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.571% &lt;= 0.607 milliseconds (cumulative count 99571)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.793% &lt;= 0.703 milliseconds (cumulative count 99793)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.926% &lt;= 0.807 milliseconds (cumulative count 99926)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.949% &lt;= 0.903 milliseconds (cumulative count 99949)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.995% &lt;= 1.007 milliseconds (cumulative count 99995)</span></span>
<span class="line"><span style="color:#A6ACCD;">100.000% &lt;= 1.103 milliseconds (cumulative count 100000)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Summary</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">throughput</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">summary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 144092.22 requests per second</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">latency</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">summary</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">(msec)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          avg       min       p50       p95       p99       max</span></span>
<span class="line"><span style="color:#A6ACCD;">        0.222     0.072     0.215     0.263     0.391     1.031</span></span>
<span class="line"><span style="color:#A6ACCD;">====== GET ======                                                     </span></span>
<span class="line"><span style="color:#A6ACCD;">  100000 requests completed in 0.69 seconds</span></span>
<span class="line"><span style="color:#A6ACCD;">  50 parallel clients</span></span>
<span class="line"><span style="color:#A6ACCD;">  3 bytes payload</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">keep</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">alive</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">&quot;save&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">&quot;appendonly&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">multi-thread</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Latency</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">percentile</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">distribution</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">0.000% &lt;= 0.079 milliseconds (cumulative count 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">50.000% &lt;= 0.215 milliseconds (cumulative count 64586)</span></span>
<span class="line"><span style="color:#A6ACCD;">75.000% &lt;= 0.223 milliseconds (cumulative count 77139)</span></span>
<span class="line"><span style="color:#A6ACCD;">87.500% &lt;= 0.239 milliseconds (cumulative count 90521)</span></span>
<span class="line"><span style="color:#A6ACCD;">93.750% &lt;= 0.255 milliseconds (cumulative count 94985)</span></span>
<span class="line"><span style="color:#A6ACCD;">96.875% &lt;= 0.287 milliseconds (cumulative count 97262)</span></span>
<span class="line"><span style="color:#A6ACCD;">98.438% &lt;= 0.311 milliseconds (cumulative count 98588)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.219% &lt;= 0.367 milliseconds (cumulative count 99232)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.609% &lt;= 0.495 milliseconds (cumulative count 99613)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.805% &lt;= 0.583 milliseconds (cumulative count 99808)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.902% &lt;= 0.631 milliseconds (cumulative count 99913)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.951% &lt;= 0.647 milliseconds (cumulative count 99955)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.976% &lt;= 0.663 milliseconds (cumulative count 99978)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.988% &lt;= 0.679 milliseconds (cumulative count 99990)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.994% &lt;= 0.703 milliseconds (cumulative count 99995)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.997% &lt;= 0.711 milliseconds (cumulative count 99997)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.998% &lt;= 0.751 milliseconds (cumulative count 99999)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.999% &lt;= 0.775 milliseconds (cumulative count 100000)</span></span>
<span class="line"><span style="color:#A6ACCD;">100.000% &lt;= 0.775 milliseconds (cumulative count 100000)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Cumulative</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">distribution</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">latencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">0.009% &lt;= 0.103 milliseconds (cumulative count 9)</span></span>
<span class="line"><span style="color:#A6ACCD;">48.520% &lt;= 0.207 milliseconds (cumulative count 48520)</span></span>
<span class="line"><span style="color:#A6ACCD;">98.179% &lt;= 0.303 milliseconds (cumulative count 98179)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.358% &lt;= 0.407 milliseconds (cumulative count 99358)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.626% &lt;= 0.503 milliseconds (cumulative count 99626)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.867% &lt;= 0.607 milliseconds (cumulative count 99867)</span></span>
<span class="line"><span style="color:#A6ACCD;">99.995% &lt;= 0.703 milliseconds (cumulative count 99995)</span></span>
<span class="line"><span style="color:#A6ACCD;">100.000% &lt;= 0.807 milliseconds (cumulative count 100000)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Summary</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">throughput</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">summary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 143884.89 requests per second</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">latency</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">summary</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">(msec)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          avg       min       p50       p95       p99       max</span></span>
<span class="line"><span style="color:#A6ACCD;">        0.214     0.072     0.215     0.263     0.335     0.775</span></span>
<span class="line"></span></code></pre></div>`,18);function i(r,A,u,C,y,d){const s=l("Footer");return a(),e("div",null,[c,o(s)])}const F=n(t,[["render",i]]);export{D as __pageData,F as default};
