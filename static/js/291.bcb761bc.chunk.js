"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[291],{3291:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var r,a,u,c,i=e(9439),o=e(2791),s=e(4390),p=e(7689),f=e(1362),l=e(168),h=e(7402),d=h.Z.ul(r||(r=(0,l.Z)(["\nlist-style: none; \npadding: 20px 0;\n"]))),v=h.Z.li(a||(a=(0,l.Z)(["\n  margin-bottom: 24px;\n  padding: 10px;\n  border: 2px solid black; \n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n"]))),x=h.Z.p(u||(u=(0,l.Z)(["\n  margin-bottom: 8px;\n\n"]))),m=h.Z.span(c||(c=(0,l.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n"]))),b=e(184),g=function(){var t=(0,o.useState)(null),n=(0,i.Z)(t,2),e=n[0],r=n[1],a=(0,p.UO)().movieId,u=(0,o.useState)(!1),c=(0,i.Z)(u,2),l=c[0],h=c[1];return(0,o.useEffect)((function(){h(!0),a&&(0,s.tx)(a).then((function(t){return r(t)})).finally((function(){return h(!1)}))}),[a]),e?(0,b.jsx)("section",{children:0===e.length?(0,b.jsx)("p",{children:"We dont't have any reviews for this movie."}):(0,b.jsx)(d,{children:e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,b.jsxs)(v,{children:[(0,b.jsxs)(x,{children:[(0,b.jsx)(m,{children:"Author:"})," ",e||"No information"]}),(0,b.jsx)("p",{children:r||"No information"})]},n)}))})}):(0,b.jsx)(b.Fragment,{children:l&&(0,b.jsx)(f.a,{})})}},4390:function(t,n,e){e.d(n,{Df:function(){return p},M1:function(){return l},Pg:function(){return o},tx:function(){return d},z8:function(){return x}});var r=e(5861),a=e(4687),u=e.n(a),c=e(2388),i="a672ae57e08bb16567badfa77d9e520f";function o(t){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,c.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i),t.prev=1,t.next=4,c.Z.get(n);case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,c.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.cast);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"),t.next=4,c.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(n,"&include_adult=false"),t.next=4,c.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=291.bcb761bc.chunk.js.map