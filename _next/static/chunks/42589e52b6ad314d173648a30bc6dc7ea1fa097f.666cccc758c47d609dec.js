(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"+Hmc":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("ODXe"),o=n("LybE"),i=n("bv9d");var a={m:"margin",p:"padding"},c={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},u={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},f=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}((function(t){if(t.length>2){if(!u[t])return[t];t=u[t]}var e=t.split(""),n=Object(r.a)(e,2),o=n[0],i=n[1],f=a[o],s=c[i]||"";return Array.isArray(s)?s.map((function(t){return f+t})):[f+s]})),s=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function l(t){var e=t.spacing||8;return"number"===typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"===typeof e?e:function(){}}function p(t,e){return function(n){return t.reduce((function(t,r){return t[r]=function(t,e){if("string"===typeof e)return e;var n=t(Math.abs(e));return e>=0?n:"number"===typeof n?-n:"-".concat(n)}(e,n),t}),{})}}function d(t){var e=l(t.theme);return Object.keys(t).map((function(n){if(-1===s.indexOf(n))return null;var r=p(f(n),e),i=t[n];return Object(o.b)(t,i,r)})).reduce(i.a,{})}d.propTypes={},d.filterProps=s;e.b=d},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"2+6g":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("wx14"),o=n("U8pU");function i(t){return t&&"object"===Object(o.a)(t)&&t.constructor===Object}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},o=n.clone?Object(r.a)({},t):t;return i(t)&&i(e)&&Object.keys(e).forEach((function(r){"__proto__"!==r&&(i(e[r])&&r in t?o[r]=a(t[r],e[r],n):o[r]=e[r])})),o}},"25BE":function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n.d(e,"a",(function(){return r}))},"2mql":function(t,e,n){"use strict";var r=n("r36Y"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,b=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(b){var o=d(n);o&&o!==b&&t(e,o,r)}var a=s(n);l&&(a=a.concat(l(n)));for(var c=u(e),m=u(n),h=0;h<a.length;++h){var y=a[h];if(!i[y]&&(!r||!r[y])&&(!m||!m[y])&&(!c||!c[y])){var g=p(n,y);try{f(e,y,g)}catch(v){}}}}return e}},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,f=[],s=!1,l=-1;function p(){s&&u&&(s=!1,u.length?f=u.concat(f):l=-1,f.length&&d())}function d(){if(!s){var t=c(p);s=!0;for(var e=f.length;e;){for(u=f,f=[];++l<e;)u&&u[l].run();l=-1,e=f.length}u=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new b(t,e)),1!==f.length||s||c(d)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},Copi:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,b=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function j(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case a:case u:case c:case b:return t;default:switch(t=t&&t.$$typeof){case s:case d:case y:case h:case f:return t;default:return e}}case i:return e}}}function w(t){return j(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=s,e.ContextProvider=f,e.Element=o,e.ForwardRef=d,e.Fragment=a,e.Lazy=y,e.Memo=h,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=b,e.isAsyncMode=function(t){return w(t)||j(t)===l},e.isConcurrentMode=w,e.isContextConsumer=function(t){return j(t)===s},e.isContextProvider=function(t){return j(t)===f},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return j(t)===d},e.isFragment=function(t){return j(t)===a},e.isLazy=function(t){return j(t)===y},e.isMemo=function(t){return j(t)===h},e.isPortal=function(t){return j(t)===i},e.isProfiler=function(t){return j(t)===u},e.isStrictMode=function(t){return j(t)===c},e.isSuspense=function(t){return j(t)===b},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===p||t===u||t===c||t===b||t===m||"object"===typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===h||t.$$typeof===f||t.$$typeof===s||t.$$typeof===d||t.$$typeof===v||t.$$typeof===O||t.$$typeof===x||t.$$typeof===g)},e.typeOf=j},DSFK:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},Ff2n:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("zLVn");function o(t,e){if(null==t)return{};var n,o,i=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},HwzS:function(t,e,n){"use strict";e.a={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("a3WO");var o=n("25BE"),i=n("BsWD");function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},LybE:function(t,e,n){"use strict";n.d(e,"b",(function(){return f}));var r=n("KQm4"),o=n("wx14"),i=n("U8pU"),a=(n("17x9"),n("bv9d")),c={xs:0,sm:600,md:960,lg:1280,xl:1920},u={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(c[t],"px)")}};function f(t,e,n){if(Array.isArray(e)){var r=t.theme.breakpoints||u;return e.reduce((function(t,o,i){return t[r.up(r.keys[i])]=n(e[i]),t}),{})}if("object"===Object(i.a)(e)){var o=t.theme.breakpoints||u;return Object.keys(e).reduce((function(t,r){return t[o.up(r)]=n(e[r]),t}),{})}return n(e)}e.a=function(t){var e=function(e){var n=t(e),r=e.theme.breakpoints||u,i=r.keys.reduce((function(n,i){return e[i]&&((n=n||{})[r.up(i)]=t(Object(o.a)({theme:e.theme},e[i]))),n}),null);return Object(a.a)(n,i)};return e.propTypes={},e.filterProps=["xs","sm","md","lg","xl"].concat(Object(r.a)(t.filterProps)),e}},N39q:function(t,e,n){"use strict";e.a={BACKEND_URL:null!=="https://facility-hub.cineca.it"?"https://facility-hub.cineca.it":"http://localhost:5000",BASE_URL:"".concat(null!=="/community"?"/community":""),BASE_DATA_URL:"".concat(null!=="/community"?"/community":"","/json_data"),EXTERNAL_API_URLS:{EBRAINS_KNOWLEDGE_GRAPH:"https://search.kg.ebrains.eu/api/groups/public/search",NEUROMORPHO:"http://neuromorpho.org/",HIPPOCAMPOME:"http://hippocampome.org/php/index.php",ALLEN_INSTITUTE:"https://celltypes.brain-map.org/experiment/electrophysiology/623308514 "},HHF_COMM:"HHF-Comm",HODGKIN_HUXLEY_BASE_URL:null!=="https://hbp-bsp-hhnb.cineca.it:17895/hh-neuron-builder/hhf-comm"?"https://hbp-bsp-hhnb.cineca.it:17895/hh-neuron-builder/hhf-comm":"http://localhost/",ENDPOINTS:{config:"config",menuItems:"menu-items",homePage:"home-page",pages:"pages",posts:"posts",news:"news",contacts:"contacts",datasets:"datasets",models:"models"},REQUEST_METHODS:{get:"get",post:"post"},DEFAULT_HITS_PER_PAGE:20,MORPHOLOGY_VIEWER_BASE_URL:"https://morph-view.apps.hbp.eu/?model=",SUGGESTION_MIN_LENGTH:(1,1)}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("DSFK");var o=n("BsWD"),i=n("PYwp");function a(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||Object(o.a)(t,e)||Object(i.a)()}},OKji:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createContext(null);e.a=o},PYwp:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},TrhM:function(t,e,n){"use strict";function r(t){for(var e="https://material-ui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}n.d(e,"a",(function(){return r}))},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},aXM8:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r),i=n("OKji");function a(){return o.a.useContext(i.a)}},bWLx:function(t,e,n){"use strict";var r=n("wx14"),o=n("q1tI"),i=n.n(o),a=(n("17x9"),n("OKji")),c=n("aXM8"),u=n("hfi/");e.a=function(t){var e=t.children,n=t.theme,o=Object(c.a)(),f=i.a.useMemo((function(){var t=null===o?n:function(t,e){return"function"===typeof e?e(t):Object(r.a)({},t,e)}(o,n);return null!=t&&(t[u.a]=null!==o),t}),[n,o]);return i.a.createElement(a.a.Provider,{value:f},e)}},bv9d:function(t,e,n){"use strict";var r=n("2+6g");e.a=function(t,e){return e?Object(r.a)(t,e,{clone:!1}):t}},"hfi/":function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for;e.a=r?Symbol.for("mui.nested"):"__THEME_NESTED__"},r36Y:function(t,e,n){"use strict";t.exports=n("Copi")},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},viY9:function(t,e,n){"use strict";var r=n("rePB"),o=n("Ff2n"),i=n("2+6g"),a=n("wx14"),c=["xs","sm","md","lg","xl"];function u(t){var e=t.values,n=void 0===e?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,r=t.unit,i=void 0===r?"px":r,u=t.step,f=void 0===u?5:u,s=Object(o.a)(t,["values","unit","step"]);function l(t){var e="number"===typeof n[t]?n[t]:t;return"@media (min-width:".concat(e).concat(i,")")}function p(t,e){var r=c.indexOf(e);return r===c.length-1?l(t):"@media (min-width:".concat("number"===typeof n[t]?n[t]:t).concat(i,") and ")+"(max-width:".concat((-1!==r&&"number"===typeof n[c[r+1]]?n[c[r+1]]:e)-f/100).concat(i,")")}return Object(a.a)({keys:c,values:n,up:l,down:function(t){var e=c.indexOf(t)+1,r=n[c[e]];return e===c.length?l("xs"):"@media (max-width:".concat(("number"===typeof r&&e>0?r:t)-f/100).concat(i,")")},between:p,only:function(t){return p(t,t)},width:function(t){return n[t]}},s)}function f(t,e,n){var o;return Object(a.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({paddingLeft:e(2),paddingRight:e(2)},n,Object(r.a)({},t.up("sm"),Object(a.a)({paddingLeft:e(3),paddingRight:e(3)},n[t.up("sm")])))},toolbar:(o={minHeight:56},Object(r.a)(o,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),Object(r.a)(o,t.up("sm"),{minHeight:64}),o)},n)}var s=n("TrhM"),l={black:"#000",white:"#fff"},p={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},d={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},b={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},m={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},h={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},y={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},g={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},v=n("ye/S"),O={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:l.white,default:p[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},x={text:{primary:l.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:p[800],default:"#303030"},action:{active:l.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function j(t,e,n,r){var o=r.light||r,i=r.dark||1.5*r;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:"light"===e?t.light=Object(v.i)(t.main,o):"dark"===e&&(t.dark=Object(v.a)(t.main,i)))}function w(t){var e=t.primary,n=void 0===e?{light:d[300],main:d[500],dark:d[700]}:e,r=t.secondary,c=void 0===r?{light:b.A200,main:b.A400,dark:b.A700}:r,u=t.error,f=void 0===u?{light:m[300],main:m[500],dark:m[700]}:u,w=t.warning,S=void 0===w?{light:h[300],main:h[500],dark:h[700]}:w,A=t.info,T=void 0===A?{light:y[300],main:y[500],dark:y[700]}:A,E=t.success,M=void 0===E?{light:g[300],main:g[500],dark:g[700]}:E,P=t.type,_=void 0===P?"light":P,k=t.contrastThreshold,R=void 0===k?3:k,L=t.tonalOffset,I=void 0===L?.2:L,$=Object(o.a)(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function B(t){return Object(v.e)(t,x.text.primary)>=R?x.text.primary:O.text.primary}var H=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(t=Object(a.a)({},t)).main&&t[e]&&(t.main=t[e]),!t.main)throw new Error(Object(s.a)(4,e));if("string"!==typeof t.main)throw new Error(Object(s.a)(5,JSON.stringify(t.main)));return j(t,"light",n,I),j(t,"dark",r,I),t.contrastText||(t.contrastText=B(t.main)),t},F={dark:x,light:O};return Object(i.a)(Object(a.a)({common:l,type:_,primary:H(n),secondary:H(c,"A400","A200","A700"),error:H(f),warning:H(S),info:H(T),success:H(M),grey:p,contrastThreshold:R,getContrastText:B,augmentColor:H,tonalOffset:I},F[_]),$)}function S(t){return Math.round(1e5*t)/1e5}var A={textTransform:"uppercase"};function T(t,e){var n="function"===typeof e?e(t):e,r=n.fontFamily,c=void 0===r?'"Roboto", "Helvetica", "Arial", sans-serif':r,u=n.fontSize,f=void 0===u?14:u,s=n.fontWeightLight,l=void 0===s?300:s,p=n.fontWeightRegular,d=void 0===p?400:p,b=n.fontWeightMedium,m=void 0===b?500:b,h=n.fontWeightBold,y=void 0===h?700:h,g=n.htmlFontSize,v=void 0===g?16:g,O=n.allVariants,x=n.pxToRem,j=Object(o.a)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var w=f/14,T=x||function(t){return"".concat(t/v*w,"rem")},E=function(t,e,n,r,o){return Object(a.a)({fontFamily:c,fontWeight:t,fontSize:T(e),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===c?{letterSpacing:"".concat(S(r/e),"em")}:{},o,O)},M={h1:E(l,96,1.167,-1.5),h2:E(l,60,1.2,-.5),h3:E(d,48,1.167,0),h4:E(d,34,1.235,.25),h5:E(d,24,1.334,0),h6:E(m,20,1.6,.15),subtitle1:E(d,16,1.75,.15),subtitle2:E(m,14,1.57,.1),body1:E(d,16,1.5,.15),body2:E(d,14,1.43,.15),button:E(m,14,1.75,.4,A),caption:E(d,12,1.66,.4),overline:E(d,12,2.66,1,A)};return Object(i.a)(Object(a.a)({htmlFontSize:v,pxToRem:T,round:S,fontFamily:c,fontSize:f,fontWeightLight:l,fontWeightRegular:d,fontWeightMedium:m,fontWeightBold:y},M),j,{clone:!1})}function E(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var M=["none",E(0,2,1,-1,0,1,1,0,0,1,3,0),E(0,3,1,-2,0,2,2,0,0,1,5,0),E(0,3,3,-2,0,3,4,0,0,1,8,0),E(0,2,4,-1,0,4,5,0,0,1,10,0),E(0,3,5,-1,0,5,8,0,0,1,14,0),E(0,3,5,-1,0,6,10,0,0,1,18,0),E(0,4,5,-2,0,7,10,1,0,2,16,1),E(0,5,5,-3,0,8,10,1,0,3,14,2),E(0,5,6,-3,0,9,12,1,0,3,16,2),E(0,6,6,-3,0,10,14,1,0,4,18,3),E(0,6,7,-4,0,11,15,1,0,4,20,3),E(0,7,8,-4,0,12,17,2,0,5,22,4),E(0,7,8,-4,0,13,19,2,0,5,24,4),E(0,7,9,-4,0,14,21,2,0,5,26,4),E(0,8,9,-5,0,15,22,2,0,6,28,5),E(0,8,10,-5,0,16,24,2,0,6,30,5),E(0,8,11,-5,0,17,26,2,0,6,32,5),E(0,9,11,-5,0,18,28,2,0,7,34,6),E(0,9,12,-6,0,19,29,2,0,7,36,6),E(0,10,13,-6,0,20,31,3,0,8,38,7),E(0,10,13,-6,0,21,33,3,0,8,40,7),E(0,10,14,-6,0,22,35,3,0,8,42,7),E(0,11,14,-7,0,23,36,3,0,9,44,8),E(0,11,15,-7,0,24,38,3,0,9,46,8)],P={borderRadius:4},_=n("+Hmc");function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(t.mui)return t;var e=Object(_.a)({spacing:t}),n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===n.length?e(1):1===n.length?e(n[0]):n.map((function(t){if("string"===typeof t)return t;var n=e(t);return"number"===typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var R=n("wpWl"),L=n("HwzS");e.a=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.breakpoints,n=void 0===e?{}:e,r=t.mixins,a=void 0===r?{}:r,c=t.palette,s=void 0===c?{}:c,l=t.spacing,p=t.typography,d=void 0===p?{}:p,b=Object(o.a)(t,["breakpoints","mixins","palette","spacing","typography"]),m=w(s),h=u(n),y=k(l),g=Object(i.a)({breakpoints:h,direction:"ltr",mixins:f(h,y,a),overrides:{},palette:m,props:{},shadows:M,typography:T(m,d),spacing:y,shape:P,transitions:R.a,zIndex:L.a},b),v=arguments.length,O=new Array(v>1?v-1:0),x=1;x<v;x++)O[x-1]=arguments[x];return g=O.reduce((function(t,e){return Object(i.a)(t,e)}),g)}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wpWl:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i}));var r=n("Ff2n"),o={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},i={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function a(t){return"".concat(Math.round(t),"ms")}e.a={easing:o,duration:i,create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,c=void 0===n?i.standard:n,u=e.easing,f=void 0===u?o.easeInOut:u,s=e.delay,l=void 0===s?0:s;Object(r.a)(e,["duration","easing","delay"]);return(Array.isArray(t)?t:[t]).map((function(t){return"".concat(t," ").concat("string"===typeof c?c:a(c)," ").concat(f," ").concat("string"===typeof l?l:a(l))})).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))}}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},"ye/S":function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"k",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"j",(function(){return f})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"i",(function(){return m}));var r=n("TrhM");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)}function i(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&1===n[0].length&&(n=n.map((function(t){return t+t}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(t,e){return e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3})).join(", "),")"):""}function a(t){if(0===t.indexOf("#"))return t;var e=u(t).values;return"#".concat(e.map((function(t){return function(t){var e=t.toString(16);return 1===e.length?"0".concat(e):e}(t)})).join(""))}function c(t){var e=(t=u(t)).values,n=e[0],r=e[1]/100,o=e[2]/100,i=r*Math.min(o,1-o),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t+n/30)%12;return o-i*Math.max(Math.min(e-3,9-e,1),-1)},c="rgb",s=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===t.type&&(c+="a",s.push(e[3])),f({type:c,values:s})}function u(t){if(t.type)return t;if("#"===t.charAt(0))return u(i(t));var e=t.indexOf("("),n=t.substring(0,e);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(Object(r.a)(3,t));var o=t.substring(e+1,t.length-1).split(",");return{type:n,values:o=o.map((function(t){return parseFloat(t)}))}}function f(t){var e=t.type,n=t.values;return-1!==e.indexOf("rgb")?n=n.map((function(t,e){return e<3?parseInt(t,10):t})):-1!==e.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function s(t,e){var n=l(t),r=l(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function l(t){var e="hsl"===(t=u(t)).type?u(c(t)).values:t.values;return e=e.map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return l(t)>.5?b(t,e):m(t,e)}function d(t,e){return t=u(t),e=o(e),"rgb"!==t.type&&"hsl"!==t.type||(t.type+="a"),t.values[3]=e,f(t)}function b(t,e){if(t=u(t),e=o(e),-1!==t.type.indexOf("hsl"))t.values[2]*=1-e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]*=1-e;return f(t)}function m(t,e){if(t=u(t),e=o(e),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return f(t)}},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}}]);