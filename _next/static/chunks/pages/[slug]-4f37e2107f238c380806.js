_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{WD4f:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return i("eL0V")}])},eL0V:function(e,n,i){"use strict";i.r(n),i.d(n,"__N_SSG",(function(){return p}));var t=i("o0o1"),a=i.n(t),o=i("HaE+"),l=i("ODXe"),c=i("q1tI"),r=i("hDQs"),s=i("TLva"),d=i("nSCH"),u=i("R/WZ"),v=i("YK1M"),m=c.createElement,g=Object(u.a)((function(e){return{sectionsMenuContainer:{position:"fixed"},sectionsMenu:{}}}));var p=!0;n.default=function(e){var n,i,t,u=e.params,p=c.useState({}),f=Object(l.a)(p,2),h=f[0],_=f[1],N=g(),b=function(){var e=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.e)(u.slug);case 2:n=e.sent,_(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=(null===h||void 0===h?void 0:h.enableSectionsMenu)&&!!(null===h||void 0===h?void 0:h.sections),S=w?"col-9":"col-12";return Object(c.useEffect)((function(){b()}),[]),m(s.a,{headerCarousel:null!==(n=h.header_carousel)&&void 0!==n?n:null,fixedHeader:!0,transparentHeader:!1,mainClassName:"with-fixed-header"},m("div",{className:"row"},w?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return m("div",{className:"col-3 d-flex justify-content-center"},m("div",{className:N.sectionsMenuContainer},m("div",{className:N.sectionsMenu},null===e||void 0===e?void 0:e.map((function(e){return m(v.a,{style:{fontSize:11,marginTop:10},onClick:function(){return window.location.href="#".concat(null===e||void 0===e?void 0:e.id)}},null===e||void 0===e?void 0:e.header)})))))}(null!==(i=null===h||void 0===h?void 0:h.sections)&&void 0!==i?i:[]):null,w?m("div",{className:S},(null!==(t=null===h||void 0===h?void 0:h.sections)&&void 0!==t?t:[]).map((function(e,n){return function(e,n){var i;return m(d.a,{sectionData:e,variant:e.variant?e.variant:n%2===0?"light":"dark",asContainer:null!==(i=null===e||void 0===e?void 0:e.asContainer)&&void 0!==i&&i})}(e,n)}))):null))}},nSCH:function(e,n,i){"use strict";var t=i("o0o1"),a=i.n(t),o=i("HaE+"),l=i("q1tI"),c=i("nOHt"),r=i("ofer"),s=i("rqmy"),d=i("YK1M"),u=i("pNLH"),v=i.n(u),m=i("d0Tl"),g=i("Uv/k"),p=i("N39q"),f=l.createElement;n.a=function(e){var n,i,t,l,u=e.sectionData,h=e.variant,_=void 0===h?"light":h,N=e.asContainer,b=void 0!==N&&N,w=e.openImageCreditsDialog,S=Object(c.useRouter)(),x=function(){var e=Object(o.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(!n.startsWith("http")){e.next=5;break}window.open(n),e.next=7;break;case 5:return e.next=7,S.push(n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C={fontSize:null!==(n=null===u||void 0===u?void 0:u.fontSize)&&void 0!==n?n:p.a.SECTIONS.mainContentTextStyle.fontSize,textAlign:null!==(i=null===u||void 0===u?void 0:u.textAlign)&&void 0!==i?i:p.a.SECTIONS.mainContentTextStyle.textAlign};return f("section",{id:u.id,className:"".concat(v.a["page-section"]," ").concat(v.a[_])},f("div",{className:v.a["page-section-main-container"]},Object(s.b)(null===u||void 0===u?void 0:u.header)?f("div",{className:v.a["page-section-header"]},f(r.a,{variant:"h5",align:"center",gutterBottom:!0,className:v.a["page-section-header-label"]},u.header),f("div",{className:v.a["page-section-header-divider"]})):null,Object(s.b)(null===u||void 0===u?void 0:u.content)?f("div",{className:"row",style:{marginTop:10}},f("div",{className:"col-12"},f(g.a,{content:null!==(t=u.content)&&void 0!==t?t:"",style:C}))):null,(null!==(l=null===u||void 0===u?void 0:u.rows)&&void 0!==l?l:[]).map((function(e){var n,i,t,a,o,l,c={fontSize:null!==(n=null===e||void 0===e?void 0:e.fontSize)&&void 0!==n?n:p.a.SECTIONS.rowContentTextStyle.fontSize,textAlign:null!==(i=null===e||void 0===e?void 0:e.textAlign)&&void 0!==i?i:p.a.SECTIONS.mainContentTextStyle.textAlign},u=(null!==(t=e.columns)&&void 0!==t?t:[]).length>0?"col-".concat(Math.ceil(12/(null!==(a=e.columns)&&void 0!==a?a:[]).length)):"col-12";return f("div",{className:b?"container":null,id:null!==(o=null===e||void 0===e?void 0:e.id)&&void 0!==o?o:""},f("div",{className:"row",style:{marginTop:20}},f("div",{className:"col-12"},Object(s.b)(e.header)?f(r.a,{variant:"h6",gutterBottom:!0,className:v.a["page-section-sub-header"]},e.header):null)),f("div",{className:"row",style:{marginTop:20}},(null!==(l=e.columns)&&void 0!==l?l:[]).map((function(e){var n,i,t,a,o,l;return f("div",{className:u},Object(s.b)(e.content)?f("div",{className:"row"},f("div",{className:"col-12"},f(g.a,{content:null!==(n=null===e||void 0===e?void 0:e.content)&&void 0!==n?n:"",style:c}))):null,(null===e||void 0===e?void 0:e.image)?f("div",{className:"row"},f("div",{className:"col-12 text-center"},f("div",{style:{position:"relative",display:"inline-block"}},f("img",{src:Object(m.a)(null===e||void 0===e?void 0:e.image),style:{maxWidth:null!==(i=null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.maxWidth)&&void 0!==i?i:null===(a=p.a.SECTIONS.rowContentImageStyle)||void 0===a?void 0:a.maxWidth,width:"100%"}}),(null===e||void 0===e||null===(o=e.image)||void 0===o?void 0:o.imageCreditsLabel)?f("div",{className:v.a["page-section-col-image-credits-label"],onClick:function(){var n;return w(null===e||void 0===e||null===(n=e.image)||void 0===n?void 0:n.imageCreditsContent)}},f("span",null,null===e||void 0===e||null===(l=e.image)||void 0===l?void 0:l.imageCreditsLabel)):null))):null)})),e.cta?f("div",{className:"col-12 text-center",style:{marginTop:40}},f(d.a,{onClick:function(){var n;return x(null===e||void 0===e||null===(n=e.cta)||void 0===n?void 0:n.url)},variant:"primary",style:{margin:"0 auto",fontSize:16},isCta:!0},e.cta.label)):null))}))))}},pNLH:function(e,n,i){e.exports={"page-section":"page-section_page-section__3rbo5",light:"page-section_light__KY3Zx","page-section-sub-header":"page-section_page-section-sub-header__2PZhA",dark:"page-section_dark__12WnX","page-section-main-container":"page-section_page-section-main-container__1uiC6","page-section-header":"page-section_page-section-header__1aSgU","page-section-header-label":"page-section_page-section-header-label__3O2wU","page-section-header-divider":"page-section_page-section-header-divider__2JDjB","page-section-col-image-credits-label":"page-section_page-section-col-image-credits-label__f7_Lx"}},rqmy:function(e,n,i){"use strict";i.d(n,"a",(function(){return t})),i.d(n,"b",(function(){return a}));var t=function(e){return!0},a=function(e){return!!e&&e.trim().length>0}}},[["WD4f",1,2,6,0,3,4,5,7]]]);