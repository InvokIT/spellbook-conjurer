"use strict";var precacheConfig=[["/dnd-cards/index.html","dae71e11d311078738340133adca5ca4"],["/dnd-cards/static/css/main.bb154f7e.css","5f6f7d9aa48eda5d9a563a26a73ae020"],["/dnd-cards/static/js/main.c2f60ae5.js","7da36d56955911baa6205ead25463d91"],["/dnd-cards/static/media/Lycanthrope.2eb98ce3.ttf","2eb98ce3f379358a09283c1461e09df2"],["/dnd-cards/static/media/alegreya-latin-400.635ab018.woff","635ab018e0ab2b2467eb5731e615eabf"],["/dnd-cards/static/media/alegreya-latin-400.d1ee74f2.woff2","d1ee74f2aeb877c324036f09349a2d67"],["/dnd-cards/static/media/alegreya-latin-400italic.01610ced.woff","01610cedfc74fa02fbe496a4b824ac33"],["/dnd-cards/static/media/alegreya-latin-400italic.0b8b81db.woff2","0b8b81dbf628df31f417179caf2c80aa"],["/dnd-cards/static/media/alegreya-latin-500.63ca48a5.woff","63ca48a5a8bc51490d5ebbd78c7af576"],["/dnd-cards/static/media/alegreya-latin-500.aaaf1078.woff2","aaaf10786a645133c3fb5c4ff3e5693c"],["/dnd-cards/static/media/alegreya-latin-500italic.2cc10787.woff2","2cc1078732378c693ca9fb645a362159"],["/dnd-cards/static/media/alegreya-latin-500italic.929f8d52.woff","929f8d525c3eb8b61ee362b72022903a"],["/dnd-cards/static/media/alegreya-latin-700.33663a0e.woff2","33663a0e8cf1ab4839d25a7039868626"],["/dnd-cards/static/media/alegreya-latin-700.4586f895.woff","4586f895c4a5320275e9951054214bc2"],["/dnd-cards/static/media/alegreya-latin-700italic.0e6b34ba.woff2","0e6b34ba201abea80d4a7848c38da48e"],["/dnd-cards/static/media/alegreya-latin-700italic.c6ee5c65.woff","c6ee5c653a185e7254698e2c3185bc53"],["/dnd-cards/static/media/alegreya-latin-800.22ce5207.woff","22ce5207219fb94033ce3e9f30f75416"],["/dnd-cards/static/media/alegreya-latin-800.98eed218.woff2","98eed218ca184311fb084ea97bfcad83"],["/dnd-cards/static/media/alegreya-latin-800italic.2f9c9fb3.woff","2f9c9fb3662cfe5e64b0743fb1da532f"],["/dnd-cards/static/media/alegreya-latin-800italic.99d95468.woff2","99d95468374e35e3f8c9ddedece44d7d"],["/dnd-cards/static/media/alegreya-latin-900.069621d6.woff2","069621d6f358ed981282d45ae694b0c5"],["/dnd-cards/static/media/alegreya-latin-900.641e0d10.woff","641e0d10277edb77ca8e93b578e37ff4"],["/dnd-cards/static/media/alegreya-latin-900italic.4a66b151.woff","4a66b15102b727ec572a536c16772b41"],["/dnd-cards/static/media/alegreya-latin-900italic.9b290005.woff2","9b290005da3f4b2b3cc93063cf646929"],["/dnd-cards/static/media/card-background-0.5cee27dc.jpg","5cee27dc803f4b061e7cd1a641efd6fe"],["/dnd-cards/static/media/card-background-1.eaae501d.jpg","eaae501d0e41cd23ac0216a6abc5c862"],["/dnd-cards/static/media/card-background-2.dd22133b.jpg","dd22133b868e30aeba622dc393eab5c3"],["/dnd-cards/static/media/card-background-3.87134a60.jpg","87134a601f26ce1eed72ea9276278b50"],["/dnd-cards/static/media/gear.4ae75512.svg","4ae7551276c71dcd8fc384682082a02b"],["/dnd-cards/static/media/hourglass.7e3da996.svg","7e3da99624e35955f8bc329c9316225a"],["/dnd-cards/static/media/reticle.09afb4fb.svg","09afb4fb197351f1eb818f4ada7b05c8"],["/dnd-cards/static/media/shield.56676a1f.svg","56676a1f033fb6a529ae3bb47fe925af"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/dnd-cards/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});