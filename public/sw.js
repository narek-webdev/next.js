if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const i=e=>o(e,c),r={module:{uri:c},exports:a,require:i};s[c]=Promise.all(n.map((e=>r[e]||i(e)))).then((e=>(t(...e),a)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts("fallback-NKkCcaGcNdvRB3ksKbAez.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NKkCcaGcNdvRB3ksKbAez/_buildManifest.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/NKkCcaGcNdvRB3ksKbAez/_middlewareManifest.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/NKkCcaGcNdvRB3ksKbAez/_ssgManifest.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/481-637d62691fcd5ee4.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/61-294918dd451eb632.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/main-eef9888a02d84939.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/_app-64651ee15a3dad86.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/_offline-cfaf343d1502a2fb.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/about-fac120398c47074c.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/index-744eb78498627f8e.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/posts-3d66282e536e437e.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/pages/posts/%5Burl%5D-5004bc6e960a6c66.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/css/2385073c01b01eeb.css",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/css/3a98b7601b9ea981.css",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/media/RobotoMono-Bold.8f49b1aa.ttf",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_next/static/media/next.38384b79.png",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/_offline",revision:"NKkCcaGcNdvRB3ksKbAez"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/RobotoMono/RobotoMono-Bold.ttf",revision:"e72fdf1cca2cebcbe91325bbe9f9e5da"},{url:"/fonts/RobotoMono/RobotoMono-BoldItalic.ttf",revision:"9f19015ac5913e03cdd542eb73d17d12"},{url:"/fonts/RobotoMono/RobotoMono-ExtraLight.ttf",revision:"9bab8fe7af63fb4a1d536f0690799953"},{url:"/fonts/RobotoMono/RobotoMono-ExtraLightItalic.ttf",revision:"2186a1bc18fe3a5b9d35b1f0a9661f97"},{url:"/fonts/RobotoMono/RobotoMono-Italic.ttf",revision:"4e76966e85cfc4edb3db058576edcb1b"},{url:"/fonts/RobotoMono/RobotoMono-Light.ttf",revision:"fa8ab495d494eccb28f4431f054ddbd4"},{url:"/fonts/RobotoMono/RobotoMono-LightItalic.ttf",revision:"060d28a8c0576728842455c0a92641e0"},{url:"/fonts/RobotoMono/RobotoMono-Medium.ttf",revision:"8ad82b1dc550319993a7d6c932b2656d"},{url:"/fonts/RobotoMono/RobotoMono-MediumItalic.ttf",revision:"50fcbc561a338706746be330f2b7ef99"},{url:"/fonts/RobotoMono/RobotoMono-Regular.ttf",revision:"e5ca8c0ac474df46fe45840707a0c483"},{url:"/fonts/RobotoMono/RobotoMono-SemiBold.ttf",revision:"2a12618b6d46fd798157e4b9d29cdf06"},{url:"/fonts/RobotoMono/RobotoMono-SemiBoldItalic.ttf",revision:"e0781b003f2cd1145518cc5f5f8d134c"},{url:"/fonts/RobotoMono/RobotoMono-Thin.ttf",revision:"7cb58857d294ac1e09b72ea9403c690a"},{url:"/fonts/RobotoMono/RobotoMono-ThinItalic.ttf",revision:"95e08d0c587d02c33914026841dd5e89"},{url:"/icons/apple-touch-icon.png",revision:"7861ddf3eef7b51e813b0ee95b6e0095"},{url:"/icons/icon-144x144.png",revision:"faa3945a8e2c4739021e24acd0c234de"},{url:"/icons/icon-192x192.png",revision:"af6016fb056f6bf4b23b694c874e6bf9"},{url:"/icons/icon-36x36.png",revision:"9f6296e2a71effd6db7a468c17de679a"},{url:"/icons/icon-48x48.png",revision:"af272adcc21579e68bdc946e3dd741f1"},{url:"/icons/icon-512x512.png",revision:"b59330710d41d2ad1b3015e4726f0b9e"},{url:"/icons/icon-72x72.png",revision:"bb130ae8d436952f5967840b0a628554"},{url:"/icons/icon-96x96.png",revision:"a296c8efc86787ee95f6ff701aff475f"},{url:"/icons/maskable.png",revision:"af6016fb056f6bf4b23b694c874e6bf9"},{url:"/images/next.png",revision:"68bbb76eb3ba43d93c09b1af977ce1d3"},{url:"/manifest.json",revision:"a776e081b8041655ada67320b66154fe"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:o,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
