(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{9370:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n,a,u,o=r(9439),c=r(2791),i=r(4390),s=r(7689),p=r(2534),l=(r(4314),r(4585)),f=r(168),h=r(3081),d=r(9126),v=h.Z.button(n||(n=(0,f.Z)(["\ndisplay: block;\npadding: 6px 10px;\nfont-size: 16px;\nfont-weight: 500;\ntext-decoration: none;\ntext-transform: uppercase;\nbackground-color: transparent;\ncolor: ",";\ncursor: pointer; \nborder: 2px solid black;\ntransition: color 200ms linear;\n&:hover:not(.active) {\n    color: ",";\n    border-color: ",";\n  }\n  \n  &.active {\n  color: ",";\n    border-color: ",";\n  }\n\n    &:disabled { \n    pointer-events: none;\n    background-color: ",";\n    border-color: ",";\n  }\n"])),(function(t){return t.theme.colors.primaryDarkText}),(function(t){return t.theme.colors.redColor}),(function(t){return t.theme.colors.redColor}),(function(t){return t.theme.colors.redColor}),(function(t){return t.theme.colors.redColor}),(function(t){return t.theme.colors.primaryLightText}),(function(t){return t.theme.colors.tertiaryLightText})),b=h.Z.span(a||(a=(0,f.Z)(["\n  padding: 0;\n  display: flex; \n  align-items: center; \n  text-align: center; \n"]))),m=(0,h.Z)(d.yS_)(u||(u=(0,f.Z)(["\n  padding: 0; \n  margin: 0; \n  margin-left: 8px; \n"]))),g=r(184),y=function(){var t=(0,c.useState)(null),e=(0,o.Z)(t,2),r=e[0],n=e[1],a=(0,s.UO)(),u=a.series_id,f=a.movieId,h=(0,c.useState)(!1),d=(0,o.Z)(h,2),y=d[0],w=d[1],x=(0,c.useState)(!1),k=(0,o.Z)(x,2),Z=k[0],_=k[1];if((0,c.useEffect)((function(){w(!0),u?(0,i.kL)(u).then((function(t){return n(t)})).finally((function(){return w(!1)})):f&&(0,i.Ff)(f).then((function(t){return n(t)})).finally((function(){return w(!1)}))}),[u,f]),!r)return(0,g.jsx)(g.Fragment,{children:y&&(0,g.jsx)(l.a,{})});var L=r.filter((function(t){return"trailer"===t.type.toLowerCase()})),C=L.length>0,S=!C,E=L[0];return(0,g.jsx)("div",{children:(0,g.jsx)(v,{onClick:function(){var t;S||(t=E.key,p.create('\n      <iframe width="680" height="415" src="https://www.youtube.com/embed/'.concat(t,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')).show())},disabled:S,onMouseEnter:function(){return _(C&&!S)},onMouseLeave:function(){return _(!1)},children:Z?(0,g.jsxs)(b,{children:["Play ",(0,g.jsx)(m,{})]}):(0,g.jsx)(b,{children:S?"No trailer :(":"Trailer"})})})}},4390:function(t,e,r){"use strict";r.d(e,{Bc:function(){return w},C_:function(){return _},Df:function(){return d},Ff:function(){return U},M1:function(){return g},Pg:function(){return i},Wp:function(){return f},ZF:function(){return p},_X:function(){return O},dm:function(){return E},h1:function(){return b},kL:function(){return M},tx:function(){return k},z8:function(){return C}});var n=r(5861),a=r(4687),u=r.n(a),o=r(2388),c="a672ae57e08bb16567badfa77d9e520f";function i(t){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),t.prev=1,t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(c,"&language=en-US"),t.prev=1,t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c),t.prev=1,t.next=4,o.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function d(){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c),t.prev=1,t.next=4,o.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function b(){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/trending/tv/week?api_key=".concat(c),t.prev=1,t.next=4,o.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),t.prev=1,t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.cast);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/tv/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),t.prev=1,t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.cast);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function k(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function _(t){return L.apply(this,arguments)}function L(){return(L=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/tv/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function C(t){return S.apply(this,arguments)}function S(){return(S=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e,"&include_adult=false"),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function E(t){return T.apply(this,arguments)}function T(){return(T=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/search/tv?api_key=".concat(c,"&query=").concat(e,"&include_adult=false"),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function M(t){return N.apply(this,arguments)}function N(){return(N=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=").concat(c,"&language=en-US"),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function U(t){return j.apply(this,arguments)}function j(){return(j=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(c,"&language=en-US"),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function O(t){return P.apply(this,arguments)}function P(){return(P=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/discover/movie?api_key=".concat(c,"&sort_by=popularity.desc&with_genres=").concat(e),t.next=4,o.Z.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},2534:function(t){t.exports=function t(e,r,n){function a(o,c){if(!r[o]){if(!e[o]){if(u)return u(o,!0);var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}var s=r[o]={exports:{}};e[o][0].call(s.exports,(function(t){return a(e[o][1][t]||t)}),s,s.exports,t,e,r,n)}return r[o].exports}for(var u=void 0,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("div");return r.innerHTML=t.trim(),!0===e?r.children:r.firstChild},a=function(t,e){var r=t.children;return 1===r.length&&r[0].tagName===e},u=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};r.visible=u,r.create=function(t,e){var r=function(t,e){var r=n('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),u=r.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return u.appendChild(t)}));var o=a(u,"IMG"),c=a(u,"VIDEO"),i=a(u,"IFRAME");return!0===o&&r.classList.add("basicLightbox--img"),!0===c&&r.classList.add("basicLightbox--video"),!0===i&&r.classList.add("basicLightbox--iframe"),r}(t=function(t){var e="string"==typeof t,r=t instanceof HTMLElement==1;if(!1===e&&!1===r)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(n(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),o=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===u(t)||t.parentElement.removeChild(t),e()}),410),!0}(r,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&r.addEventListener("click",(function(t){t.target===r&&o()}));var c={element:function(){return r},visible:function(){return u(r)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(r,(function(){if("function"==typeof t)return t(c)}))},close:o};return c}},{}]},{},[1])(1)},4314:function(){}}]);
//# sourceMappingURL=370.31f7fc4c.chunk.js.map