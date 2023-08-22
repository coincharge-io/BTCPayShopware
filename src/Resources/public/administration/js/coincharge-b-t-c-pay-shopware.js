!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=(window.__sw__.assetPath + '/bundles/coinchargebtcpayshopware/'),n(n.s="2xLn")}({"2xLn":function(e,t,n){"use strict";n.r(t);n("DrLj");var r=Shopware,o=r.Component,i=r.Mixin,c=r.ApiService;o.register("coincharge-btcpay-buttons",{template:'<sw-container columns="repeat(2, auto)" gap="0px 10px">\n\t<sw-button v-tooltip.top="{ message:$tc(\'coincharge-btcpay-generate-credentials.info\')}" class="sw-button-coincharge" @click="generateAPIKey">{{ $tc(\'coincharge-btcpay-generate-credentials.button\') }}</sw-button>\n\t<sw-button-process class="sw-button-coincharge" :process-success="isLoading" :is-loading="isLoading" @click="testConnection">{{ $tc(\'coincharge-btcpay-test-connection.button\') }}</sw-button-process>\n</sw-container>\n',inject:[["coinchargeBtcpayApiService"]],mixins:[i.getByName("notification")],data:function(){return{isLoading:!1,config:{"CoinchargeBTCPayShopware.config.btcpayServerUrl":""}}},methods:{generateAPIKey:function(){var e=c.getByName("systemConfigApiService"),t=document.getElementById("CoinchargeBTCPayShopware.config.btcpayServerUrl").value;if(!t)return this.createNotificationWarning({title:"BTCPay Server",message:this.$tc("coincharge-btcpay-generate-credentials.missing_server")});var n=this.removeTrailingSlash(t);this.config["CoinchargeBTCPayShopware.config.btcpayServerUrl"]=n;var r=window.location.pathname.replace("/admin","/"),o=window.location.origin+r+"api/_action/coincharge/credentials";return e.saveValues({"CoinchargeBTCPayShopware.config.btcpayServerUrl":this.config["CoinchargeBTCPayShopware.config.btcpayServerUrl"],"CoinchargeBTCPayShopware.config.btcpayApiKey":"","CoinchargeBTCPayShopware.config.btcpayServerStoreId":"","CoinchargeBTCPayShopware.config.btcpayWebhookId":"","CoinchargeBTCPayShopware.config.btcpayWebhookSecret":"","CoinchargeBTCPayShopware.config.integrationStatus":!1,"CoinchargeBTCPayShopware.config.btcpayStorePaymentMethodBTC":!1,"CoinchargeBTCPayShopware.config.btcpayStorePaymentMethodLightning":!1,"CoinchargeBTCPayShopware.config.btcpayStorePaymentMethodMonero":!1,"CoinchargeBTCPayShopware.config.btcpayStorePaymentMethodLitecoin":!1}),window.open(n+"/api-keys/authorize/?applicationName=BTCPayShopwarePlugin&permissions=btcpay.store.cancreateinvoice&permissions=btcpay.store.canviewinvoices&permissions=btcpay.store.webhooks.canmodifywebhooks&permissions=btcpay.store.canviewstoresettings&selectiveStores=true&redirect="+o,"_blank","noopener")},removeTrailingSlash:function(e){return e.replace(/\/$/,"")},testConnection:function(){var e=this;if(this.isLoading=!0,!this.credentialsExist())return this.isLoading=!1,this.createNotificationWarning({title:"BTCPay Server",message:this.$tc("coincharge-btcpay-test-connection.missing_credentials")});this.coinchargeBtcpayApiService.verifyApiKey().then((function(t){if(!1===t.success)return e.createNotificationWarning({title:"BTCPay Server",message:t.message}),void(e.isLoading=!1);e.createNotificationSuccess({title:"BTCPay Server",message:e.$tc("coincharge-btcpay-test-connection.success")}),e.isLoading=!1,window.location.reload()})).catch((function(t){return e.isLoading=!1,e.createNotificationError({title:"BTCPay Server",message:e.$tc("coincharge-btcpay-test-connection.error")})}))},credentialsExist:function(){return""!==document.getElementById("CoinchargeBTCPayShopware.config.btcpayServerUrl").value&&""!==document.getElementById("CoinchargeBTCPayShopware.config.btcpayApiKey").value&&""!==document.getElementById("CoinchargeBTCPayShopware.config.btcpayServerStoreId").value}}});n("ZwRL");var a=Shopware,s=a.Component,u=a.Mixin,l=a.ApiService;s.register("coincharge-coinsnap-button",{template:'<sw-container>\n\t<sw-button-process class="sw-button-coincharge" :process-success="isLoading" :is-loading="isLoading" @click="testConnection">{{ $tc(\'coincharge-coinsnap-test-connection.button\') }}</sw-button-process>\n</sw-container>\n',inject:[["coinchargeCoinsnapApiService"]],mixins:[u.getByName("notification")],data:function(){return{isLoading:!1,config:{"CoinchargeBTCPayShopware.config.coinsnapStoreId":"","CoinchargeBTCPayShopware.config.coinsnapApiKey":""}}},methods:{testConnection:function(){var e=this;this.isLoading=!0;var t=l.getByName("systemConfigApiService"),n=document.getElementById("CoinchargeBTCPayShopware.config.coinsnapStoreId").value,r=document.getElementById("CoinchargeBTCPayShopware.config.coinsnapApiKey").value;if(t.saveValues({"CoinchargeBTCPayShopware.config.coinsnapApiKey":r,"CoinchargeBTCPayShopware.config.coinsnapStoreId":n}),""==r||""==n)return this.createNotificationWarning({title:"BTCPay Server",message:this.$tc("coincharge-coinsnap-test-connection.missing_credentials")});this.coinchargeCoinsnapApiService.verifyApiKey().then((function(t){if(!1===t.success)return e.createNotificationWarning({title:"Coinsnap",message:t.message}),void(e.isLoading=!1);e.createNotificationSuccess({title:"Coinsnap",message:e.$tc("coincharge-coinsnap-test-connection.success")}),e.isLoading=!1,window.location.reload()})).catch((function(t){return e.isLoading=!1,e.createNotificationError({title:"Coinsnap",message:e.$tc("coincharge-coinsnap-test-connection.error")})}))}}});n("KcJ9");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===f(i)?i:String(i)),r)}var o,i}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=Shopware.Classes.ApiService,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,o=g(i);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"coincharge";return p(this,i),o.call(this,e,t,n)}return t=i,(n=[{key:"verifyApiKey",value:function(){var e="/_action/".concat(this.getApiBasePath(),"/verify"),t=this.getBasicHeaders();return this.httpClient.get(e,{headers:t}).then((function(e){return b.handleResponse(e)})).catch((function(e){throw e}))}},{key:"generateWebhook",value:function(){var e="/_action/".concat(this.getApiBasePath(),"/webhook");return this.httpClient.post(e,{},{headers:this.getBasicHeaders()}).then((function(e){return b.handleResponse(e)})).catch((function(e){throw e}))}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(b);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===S(i)?i:String(i)),r)}var o,i}function P(e,t){return(P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=Shopware.Classes.ApiService,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(i,e);var t,n,r,o=B(i);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"coincharge";return w(this,i),o.call(this,e,t,n)}return t=i,(n=[{key:"verifyApiKey",value:function(){var e="/_action/".concat(this.getApiBasePath(),"/coinsnap_verify"),t=this.getBasicHeaders();return this.httpClient.get(e,{headers:t}).then((function(e){return _.handleResponse(e)})).catch((function(e){throw e.message}))}}])&&C(t.prototype,n),r&&C(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(_),A=n("MemC"),L=n("Liry"),E=Shopware.Application;E.addServiceProvider("coinchargeBtcpayApiService",(function(e){var t=E.getContainer("init");return new m(t.httpClient,e.loginService)})),E.addServiceProvider("coinchargeCoinsnapApiService",(function(e){var t=E.getContainer("init");return new O(t.httpClient,e.loginService)})),Shopware.Locale.extend("de-DE",A),Shopware.Locale.extend("en-GB",L)},"7Z9L":function(e,t,n){},"9jfE":function(e,t,n){},DrLj:function(e,t,n){var r=n("9jfE");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("20c879ca",r,!0,{})},KcJ9:function(e,t,n){var r=n("7Z9L");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("36929ef2",r,!0,{})},Liry:function(e){e.exports=JSON.parse('{"coincharge-btcpay-generate-credentials":{"button":"Generate credentials","missing_server":"You need to provide BTCPay Server url","info":"You will be redirected to the provided BTCPayServer url to generate required credentials"},"coincharge-btcpay-test-connection":{"button":"Test connection","success":"The plugin is connected to the server","error":"Something went wrong. Check if credentials are valid and try again.","missing_credentials":"You need to generate credentials first."},"coincharge-coinsnap-test-connection":{"button":"Test connection","success":"The plugin is connected to the server","error":"Something went wrong. Check if credentials are valid and try again.","missing_credentials":"You need to provide API key and store ID first."}}')},MemC:function(e){e.exports=JSON.parse('{"coincharge-btcpay-generate-credentials":{"button":"Berechtigungsnachweise generieren","missing_server":"Sie müssen die BTCPay Server url angeben","info":"Sie werden zur angegebenen BTCPayServer-URL weitergeleitet, um die erforderlichen Anmeldedaten zu generieren"},"coincharge-btcpay-test-connection":{"button":"Verbindung testen","success":"Das Plugin ist mit dem Server verbunden","error":"Ein Fehler ist aufgetreten. Prüfen Sie, ob die Anmeldedaten gültig sind und versuchen Sie es erneut.","missing_credentials":"Sie müssen zunächst einen Berechtigungsnachweis erstellen."},"coincharge-coinsnap-test-connection":{"button":"Verbindung testen","success":"Das Plugin ist mit dem Server verbunden","error":"Ein Fehler ist aufgetreten. Prüfen Sie, ob die Anmeldedaten gültig sind und versuchen Sie es erneut.","missing_credentials":"Sie müssen zuerst den API-Schlüssel und die Speicher-ID angeben"}}')},P8hj:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],c=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(a):n.push(r[c]={id:c,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},c=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,s=0,u=!1,l=function(){},f=null,p="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){u=n,f=o||{};var c=r(e,t);return g(c),function(t){for(var n=[],o=0;o<c.length;o++){var a=c[o];(s=i[a.id]).refs--,n.push(s)}t?g(c=r(e,t)):c=[];for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var c=[];for(o=0;o<n.parts.length;o++)c.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:c}}}}function y(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(d){var o=s++;r=a||(a=y()),t=S.bind(null,r,o,!1),n=S.bind(null,r,o,!0)}else r=y(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,m=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function S(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function w(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},ZwRL:function(e,t,n){var r=n("kUEc");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("1f32e858",r,!0,{})},kUEc:function(e,t,n){}});