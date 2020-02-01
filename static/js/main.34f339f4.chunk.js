(this["webpackJsonpzzz-tracker"]=this["webpackJsonpzzz-tracker"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),r=n(4),s=n.n(r),c=(n(15),n(7)),l=(n(16),n(17),function(e){var t=e.label,n=e.symbol;return o.createElement("span",{role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},n)}),u=function(e){var t=e.addAwake,n=e.addAsleep,a=e.addAwakeAndAsleep;return o.createElement("div",{className:"action-bar"},o.createElement("div",{className:"action-bar__button",onClick:n},o.createElement(l,{symbol:"\ud83d\ude34",label:"fell asleep"})),o.createElement("div",{className:"action-bar__button",onClick:a},o.createElement(l,{symbol:"\ud83d\udc40\ud83d\ude34",label:"woke up and fell asleep"})),o.createElement("div",{className:"action-bar__button",onClick:t},o.createElement(l,{symbol:"\ud83d\udc40",label:"woke up"})))},d=n(1);function p(e){switch(e){case a.Awake:return"\ud83d\udc40";case a.Asleep:return"\ud83d\ude34";default:throw new Error("Unknown SleepState: "+e)}}!function(e){e[e.Awake=0]="Awake",e[e.Asleep=1]="Asleep"}(a||(a={}));var v=function e(t,n){Object(d.a)(this,e),this.state=void 0,this.time=void 0,this.time=t,this.state=n},f=(n(18),function(e){var t=e.sleepEventsState,n={timeZone:"Europe/Helsinki",hour12:!1,hour:"2-digit",minute:"2-digit"};function i(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=p(t.state),r=t.time.toLocaleTimeString("en-US",n),s=a.length>0?"".concat("log__entry","--").concat(a):"log__entry";return o.createElement("div",{className:s,key:e},r," ",i)}function r(e,t,a){var i=p(t.state),r=t.time.toLocaleTimeString("en-US",n),s=p(a.state),c=a.time.toLocaleTimeString("en-US",n),l=r===c?"":" ".concat(c);return o.createElement("div",{className:"log__entry",key:e},r," ",i,l," ",s)}for(var s=[],c=t.sleepEvents.length,l=0;l<c;l++){var u=t.sleepEvents[l];if(u.state===a.Asleep)s.push(i(l,u));else if(l+1<c){var d=t.sleepEvents[l+1],v=d.time.getTime()-u.time.getTime();Math.trunc(v/6e4)<180?(s.push(r(l,u,d)),l++):s.push(i(l,u,"separator"))}else s.push(i(l,u))}return o.createElement("div",{className:"log"},s)});function h(e,t){switch(t.type){case"init":return{sleepEvents:void 0===t.payload?[]:t.payload};case"add":var n=void 0===t.payload?[]:t.payload;return{sleepEvents:e.sleepEvents.concat(n)};default:return e}}var m=n(8),w=n(5),E=n(9),g=new(function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(w.a)(t).call(this,"SleepEventDatabase"))).sleepEvents=void 0,e.version(1).stores({sleepEvents:"++id, state, time"}),e.sleepEvents=e.table("sleepEvents"),e}return Object(E.a)(t,e),t}(n(6).a));function b(e){return function(){var t=new v(new Date,a.Asleep);g.sleepEvents.add(t).then((function(n){e({type:"add",payload:[t]})}))}}function k(e){return function(){var t=new v(new Date,a.Awake),n=new v(new Date,a.Asleep);g.sleepEvents.bulkAdd([t,n]).then((function(a){e({type:"add",payload:[t,n]})}))}}var y=function(){var e,t=i.a.useReducer(h,{sleepEvents:[]}),n=Object(c.a)(t,2),o=n[0],r=n[1];return i.a.useEffect((function(){var e;e=r,g.sleepEvents.toArray().then((function(t){e({type:"init",payload:t})}))}),[]),i.a.createElement("div",{className:"app"},i.a.createElement(f,{sleepEventsState:o}),i.a.createElement(u,{addAwake:(e=r,function(){var t=new v(new Date,a.Awake);g.sleepEvents.add(t).then((function(n){e({type:"add",payload:[t]})}))}),addAwakeAndAsleep:k(r),addAsleep:b(r)}))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(i.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.34f339f4.chunk.js.map