"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[291],{3291:function(t,r,e){e.r(r),e.d(r,{default:function(){return Z}});var n,a,u,c,i,o,p=e(9439),s=e(2791),l=e(7689),f=e(4390),h=e(4585),v=e(168),d=e(3081),x=d.Z.ul(n||(n=(0,v.Z)(["\nlist-style: none; \npadding: 20px 0;\n"]))),m=d.Z.li(a||(a=(0,v.Z)(["\n  margin-bottom: 24px;\n  padding: 10px;\n  border: 2px solid black; \n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n"]))),g=d.Z.p(u||(u=(0,v.Z)(["\n  margin-bottom: 8px;\n  color: ",";\n\n"])),(function(t){return t.theme.colors.primaryDarkText})),b=d.Z.span(c||(c=(0,v.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  color: ",";\n"])),(function(t){return t.theme.colors.primaryDarkText})),y=d.Z.p(i||(i=(0,v.Z)(["\ncolor: ",";\n"])),(function(t){return t.theme.colors.primaryDarkText})),k=d.Z.h2(o||(o=(0,v.Z)(["\n font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n  text-shadow:\n             1px 10px 5px ",",\n             1px 25px 50px ",";\n  background-clip: text;\n  -webkit-background-clip: text;\n"])),(function(t){return t.theme.colors.primaryDarkText}),(function(t){return t.theme.colors.primaryDarkText}),(function(t){return t.theme.colors.primaryDarkText})),w=e(184),Z=function(){var t=(0,s.useState)(null),r=(0,p.Z)(t,2),e=r[0],n=r[1],a=(0,l.UO)(),u=a.movieId,c=a.series_id,i=(0,s.useState)(!1),o=(0,p.Z)(i,2),v=o[0],d=o[1];return(0,s.useEffect)((function(){d(!0),u?(0,f.tx)(u).then((function(t){return n(t)})).finally((function(){return d(!1)})):c&&(0,f.C_)(c).then((function(t){return n(t)})).finally((function(){return d(!1)}))}),[u,c]),e?(0,w.jsx)("section",{children:0===e.length?(0,w.jsxs)(k,{children:["We don't have any reviews for this ",u?"movie":"series"," \u2639 "]}):(0,w.jsx)(x,{children:e.map((function(t){var r=t.id,e=t.author,n=t.content;return(0,w.jsxs)(m,{children:[(0,w.jsxs)(g,{children:[(0,w.jsx)(b,{children:"Author:"})," ",e||"No information"]}),(0,w.jsx)(y,{children:n||"No information"})]},r)}))})}):(0,w.jsx)(w.Fragment,{children:v&&(0,w.jsx)(h.a,{})})}},4390:function(t,r,e){e.d(r,{Bc:function(){return g},C_:function(){return w},Df:function(){return f},Ff:function(){return C},M1:function(){return x},Pg:function(){return o},ZF:function(){return s},_X:function(){return F},dm:function(){return j},h1:function(){return v},kL:function(){return D},tx:function(){return y},z8:function(){return _}});var n=e(5861),a=e(4687),u=e.n(a),c=e(2388),i="a672ae57e08bb16567badfa77d9e520f";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/tv/".concat(r,"?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i),t.prev=1,t.next=4,c.Z.get(r);case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function v(){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/trending/tv/week?api_key=".concat(i),t.prev=1,t.next=4,c.Z.get(r);case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.cast);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/tv/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.cast);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function w(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/tv/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function _(t){return S.apply(this,arguments)}function S(){return(S=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(r,"&include_adult=false"),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function j(t){return U.apply(this,arguments)}function U(){return(U=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/search/tv?api_key=".concat(i,"&query=").concat(r,"&include_adult=false"),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function D(t){return T.apply(this,arguments)}function T(){return(T=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/tv/".concat(r,"/videos?api_key=").concat(i,"&language=en-US"),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function C(t){return z.apply(this,arguments)}function z(){return(z=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/movie/".concat(r,"/videos?api_key=").concat(i,"&language=en-US"),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function F(t){return q.apply(this,arguments)}function q(){return(q=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/discover/movie?api_key=".concat(i,"&sort_by=popularity.desc&with_genres=").concat(r),t.next=4,c.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=291.b245a428.chunk.js.map