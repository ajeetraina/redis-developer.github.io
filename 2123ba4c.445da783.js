(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{162:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),l=function(e){var a=n.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=l(e.components);return n.a.createElement(d.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},p=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return t?n.a.createElement(m,s(s({ref:a},d),{},{components:t})):n.a.createElement(m,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},163:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return o}));var r=t(22),n=t(172);function i(){var e=Object(r.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,i=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,d=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(n.b)(t))return t;if(s)return a+t;var l=t.startsWith(a)?t:a+t.replace(/^\//,"");return d?e+l:l}(i,t,e,a)}}}function o(e,a){return void 0===a&&(a={}),(0,i().withBaseUrl)(e,a)}},172:function(e,a,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return n}))},279:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/redis-080746df0190688654cd8b2b3e740853.png"},89:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return l}));var r=t(3),n=t(7),i=(t(0),t(162)),o=(t(163),{id:"index-redisdatasource",title:"Redis DataSource for Grafana",sidebar_label:"Redis Data Source for Grafana",slug:"/explore/redisdatasource"}),s={unversionedId:"explore/redisdatasource/index-redisdatasource",id:"explore/redisdatasource/index-redisdatasource",isDocsHomePage:!1,title:"Redis DataSource for Grafana",description:"The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis and application data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs.",source:"@site/docs/explore/redisdatasource/index-redisdatasource.mdx",slug:"/explore/redisdatasource",permalink:"/explore/redisdatasource",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisdatasource/index-redisdatasource.mdx",version:"current",sidebar_label:"Redis Data Source for Grafana",sidebar:"docs",previous:{title:"RedisInsight",permalink:"/explore/redisinsight"},next:{title:"RIOT",permalink:"/explore/riot"}},c=[{value:"Features and Capabilities",id:"features-and-capabilities",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Step 1. Install using <code>grafana-cli</code>",id:"step-1-install-using-grafana-cli",children:[]},{value:"Step 2. Run using <code>docker</code>",id:"step-2-run-using-docker",children:[]},{value:"Step 3. Run using <code>docker-compose</code>",id:"step-3-run-using-docker-compose",children:[]},{value:"Step 4.  Configure Grafana port in <code>docker-compose.yml</code>",id:"step-4--configure-grafana-port-in-docker-composeyml",children:[]},{value:"Step 5. Configure Data Source URL in <code>provisioning/datasources/redis.yaml</code>",id:"step-5-configure-data-source-url-in-provisioningdatasourcesredisyaml",children:[]},{value:"Step 6. Run using <code>docker-compose</code> for development",id:"step-6-run-using-docker-compose-for-development",children:[]},{value:"Supported commands",id:"supported-commands",children:[]},{value:"Template variables",id:"template-variables",children:[]},{value:"Further References",id:"further-references",children:[]}]}],d={toc:c};function l(e){var a=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis and application data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs."),Object(i.b)("p",null,Object(i.b)("img",{alt:"my image",src:t(279).default})),Object(i.b)("h2",{id:"features-and-capabilities"},"Features and Capabilities"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Grafana 7.1 and later with a new plug-in platform supported.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data Source can connect to any Redis database. No special configuration is required.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Redis Cluster and Sentinel supported since version 1.2.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data Source supports:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redistimeseries/"}),"RedisTimeSeries"),": TS.GET, TS.INFO, TS.MRANGE, TS.QUERYINDEX, TS.RANGE"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgears/"}),"RedisGears"),": RG.DUMPREGISTRATIONS, RG.PYEXECUTE, RG.PYSTATS"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/"}),"RedisSearch"),": FT.INFO"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgraph/"}),"RedisGraph"),": GRAPH.QUERY, GRAPH.SLOWLOG")))),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("h3",{id:"step-1-install-using-grafana-cli"},"Step 1. Install using ",Object(i.b)("inlineCode",{parentName:"h3"},"grafana-cli")),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"grafana-cli")," tool to install from the commandline:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"grafana-cli plugins install redis-datasource\n")),Object(i.b)("h3",{id:"step-2-run-using-docker"},"Step 2. Run using ",Object(i.b)("inlineCode",{parentName:"h3"},"docker")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'docker run -d -p 3000:3000 --name=grafana -e "GF_INSTALL_PLUGINS=redis-datasource" grafana/grafana\n')),Object(i.b)("h3",{id:"step-3-run-using-docker-compose"},"Step 3. Run using ",Object(i.b)("inlineCode",{parentName:"h3"},"docker-compose")),Object(i.b)("p",null,"Project provides ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," to start Redis with all Redis Labs modules and Grafana."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up\n")),Object(i.b)("p",null,"Open Grafana in your browser and configure Redis Data Source. You can add as many data sources as you want to support multiple Redis databases."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/RedisGrafana/grafana-redis-datasource/master/src/img/datasource.png",alt:"Datasource"}))),Object(i.b)("p",null,"There are certain settings that can be configured based on your own setup:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Grafana port"),Object(i.b)("li",{parentName:"ul"},"Data Source URL")),Object(i.b)("h3",{id:"step-4--configure-grafana-port-in-docker-composeyml"},"Step 4.  Configure Grafana port in ",Object(i.b)("inlineCode",{parentName:"h3"},"docker-compose.yml")),Object(i.b)("p",null,"If standard port 3000 is occupied by another application update the port to bind Grafana to"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"    ports:\n      - '3000:3000'\n")),Object(i.b)("h3",{id:"step-5-configure-data-source-url-in-provisioningdatasourcesredisyaml"},"Step 5. Configure Data Source URL in ",Object(i.b)("inlineCode",{parentName:"h3"},"provisioning/datasources/redis.yaml")),Object(i.b)("p",null,"If Redis is running and listening on localhost:6379 no changes are required"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"    url: redis://localhost:6379\n")),Object(i.b)("p",null,"If Redis is running as Docker container on MacOS, please update host to ",Object(i.b)("inlineCode",{parentName:"p"},"host.docker.internal")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"    url: redis://host.docker.internal:6379\n")),Object(i.b)("p",null,"If Redis is running as Docker container on Linux, please update host to ",Object(i.b)("inlineCode",{parentName:"p"},"redis")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"    url: redis://redis:6379\n")),Object(i.b)("h3",{id:"step-6-run-using-docker-compose-for-development"},"Step 6. Run using ",Object(i.b)("inlineCode",{parentName:"h3"},"docker-compose")," for development"),Object(i.b)("p",null,"Data Source have to be built following ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/RedisGrafana/grafana-redis-datasource/blob/master/BUILD.md"}),"BUILD")," instructions before starting using ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose/dev.yml")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose/dev.yml up\n")),Object(i.b)("h3",{id:"supported-commands"},"Supported commands"),Object(i.b)("p",null,"Data Source supports various Redis commands using custom components and provides a unified interface to query any command."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/RedisGrafana/grafana-redis-datasource/master/src/img/query.png",alt:"Query"}))),Object(i.b)("h3",{id:"template-variables"},"Template variables"),Object(i.b)("p",null,"Template variables can query any command and use other variables as parameters."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/RedisGrafana/grafana-redis-datasource/master/src/img/variables.png",alt:"Variables"}))),Object(i.b)("h3",{id:"further-references"},"Further References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/introducing-the-redis-data-source-plug-in-for-grafana/"}),"Introducing the Redis Data Source Plug-in for Grafana")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/"}),"How to Use the New Redis Data Source for Grafana Plug-in")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/3-real-life-apps-built-with-redis-data-source-for-grafana/"}),"3 Real-Life Apps Built with Redis Data Source for Grafana")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://grafana.com/go/observabilitycon/real-time-observability-with-redis-and-grafana/"}),"Real-time observability with Redis and Grafana"))))}l.isMDXComponent=!0}}]);