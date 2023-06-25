"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{115:function(n,t,e){e.d(t,{u:function(){return v}});var r,a,i,o,c,u,p=e(168),s=e(3081),l=(s.Z.div(r||(r=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),s.Z.img(a||(a=(0,p.Z)(["\n  flex: 1;\n  object-fit: cover;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n"])))),d=s.Z.div(i||(i=(0,p.Z)(["\n  padding-top: 12px;\n  padding-left: 12px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryDarkText})),h=s.Z.h2(o||(o=(0,p.Z)(["\n  text-decoration: none;\n  margin: 0;\n  font-size: 16px;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryDarkText})),f=s.Z.p(c||(c=(0,p.Z)(["\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryDarkText})),x=s.Z.span(u||(u=(0,p.Z)(["\n  margin-left: 10px;\n  background-color: orange;\n  padding: 3px 8px;\n  color: ",";\n  border-radius: 5px;\n"])),(function(n){return n.theme.colors.primaryDarkText})),g=e(8640),m=e(184),v=function(n){n.id;var t=n.title,e=n.poster,r=n.releaseDate,a=n.voteAverage,i=void 0===a?1:a,o=n.onClick;return(0,m.jsxs)("div",{onClick:o,children:[(0,m.jsx)(l,{src:e?"https://image.tmdb.org/t/p/w300/".concat(e):g,alt:t,loading:"lazy"}),(0,m.jsxs)(d,{children:[(0,m.jsx)(h,{children:t}),(0,m.jsxs)(f,{children:[r?new Date(r).getFullYear():"No information",(0,m.jsx)(x,{children:i.toFixed(1)})]})]})]})}},3314:function(n,t,e){e.d(t,{R:function(){return m}});var r,a,i,o,c=e(9439),u=e(2791),p=e(5763),s=e(168),l=e(3081),d=l.Z.div(r||(r=(0,s.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  "]))),h=l.Z.form(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: 50px;\n  overflow: hidden;\n  padding: 5px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    \n    :hover {\n    box-shadow: 2px 2px 3px 0px rgba(189, 0, 0, 0.5);\n   \n    transition: box-shadow 0.3s ease;\n\n}\n"])),(function(n){return n.theme.colors.tertiaryLightText})),f=l.Z.input(i||(i=(0,s.Z)(["\ndisplay: inline-block;\n  width: 100%;\n  margin-left: 7px; \n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  color: ",";\n  background-color: transparent;\n  ::placeholder {\n  font: inherit;\n  font-size: 18px;\n  background-color: transparent;\n\n}\n"])),(function(n){return n.theme.colors.primaryDarkText})),x=l.Z.button(o||(o=(0,s.Z)(["\ndisplay: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.7;\n  color: ",";\n  background-color: transparent;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n  opacity: 1;\n  color: #bd0000;\n    transform: scale(1.1);\n    transition: transform 0.3s ease;\n\n}\n"])),(function(n){return n.theme.colors.primaryDarkText})),g=e(184),m=function(n){var t=n.value,e=n.onSubmit,r=(0,u.useState)(!1),a=(0,c.Z)(r,2),i=a[0],o=a[1];return(0,g.jsx)(d,{children:(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(t)},children:[!i&&(0,g.jsx)(x,{type:"button",onClick:function(){o(!i)},children:(0,g.jsx)(p.a4h,{})}),i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{type:"text",name:"query",value:t,placeholder:"What do you want to watch?",onChange:function(n){return e(n.target.value)}}),(0,g.jsx)(x,{type:"submit",children:(0,g.jsx)(p.a4h,{})}),(0,g.jsx)(x,{type:"button",onClick:function(){o(!1),e("")},children:(0,g.jsx)(p.Q7B,{size:17})})]})]})})}},9387:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,i,o,c,u,p=e(9439),s=e(1087),l=e(7689),d=e(5218),h=e(2791),f=e(4390),x=e(168),g=e(3081),m=(0,g.Z)(s.OL)(r||(r=(0,x.Z)(["\n\nalign-items: center;\ntext-decoration: none;\ncolor: ",";\nfont-weight: 500;\n\n&.active {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryDarkText}),(function(n){return n.theme.colors.primaryLightText}),(function(n){return n.theme.colors.redColor})),v=g.Z.ul(a||(a=(0,x.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  display: grid;\n  max-width: 280px;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-rows: auto; \n  padding-left: 0; \n\n    @media screen and (min-width: 640px) {\n       margin-bottom: 60px;\n    max-width: 700px;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px;\n  }\n\n        @media screen and (min-width: 940px) {\n       grid-template-columns: repeat(3, 1fr);\n    grid-gap: 32px 16px;\n    max-width: 1200px;\n  }\n\n    @media screen and (min-width: 1280px) {\n    grid-template-columns: repeat(4, 2fr);\n  }\n"]))),b=g.Z.li(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  border-radius: 6px;\n  cursor: pointer; \n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]))),y=e(115),w=e(184),Z=function(n){var t=n.collection,e=(0,l.TH)(),r="/"===e.pathname?"/series/":"";return(0,w.jsx)(v,{children:t.map((function(n){var t=n.id,a=n.name,i=n.poster_path,o=n.first_air_date,c=n.vote_average;return(0,w.jsx)(b,{children:(0,w.jsx)(m,{to:"".concat(r).concat(t),state:{from:e},children:(0,w.jsx)(y.u,{id:t,title:a,poster:i,releaseDate:o,voteAverage:c})})},t)}))})},k=e(3314),j=e(4585),_=g.Z.h1(o||(o=(0,x.Z)(["\nmargin-top: 60px; \ntext-align: center;\ncolor: ",";\n     @media screen and (min-width: 768px){\n  margin-top: 40px; \n\n  }\n"])),(function(n){return n.theme.colors.primaryDarkText})),S=g.Z.main(c||(c=(0,x.Z)(["\nmargin: 0 auto;\npadding: 0 16px;\n"]))),D=g.Z.div(u||(u=(0,x.Z)(["\n  position: absolute;\n  top: 88px;\n  right: -15px; \n  margin-top: 10px; \n  \n     @media screen and (min-width: 1079px){\n   right: 70px;\n\n  }\n"]))),z=function(){var n,t=(0,h.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1],i=(0,h.useState)([]),o=(0,p.Z)(i,2),c=o[0],u=o[1],x=(0,s.lr)(),g=(0,p.Z)(x,2),m=g[0],v=g[1],b=(0,h.useState)(!1),y=(0,p.Z)(b,2),z=y[0],T=y[1],C=null!==(n=m.get("query"))&&void 0!==n?n:"";(0,h.useEffect)((function(){T(!0),C?(0,f.dm)(C).then((function(n){0===n.length&&d.ZP.error("Sorry, we couldnt find anything on your request"),a(n),T(!1)})).catch((function(n){d.ZP.error("An error occured while fetching searched movies"),T(!1)})):(0,f.h1)().then((function(n){u(n),T(!1)})).catch((function(n){d.ZP.error("An error occured while fetching searched movies"),T(!1)}))}),[C]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(S,{children:[z&&(0,w.jsx)(j.a,{}),(0,w.jsx)(D,{children:(0,w.jsx)(k.R,{value:C,onSubmit:function(n){return function(n){v(""!==n?{query:n}:{})}(n)}})}),(0,w.jsx)(_,{children:C?"Search Results":"Popular this week"}),C?(0,w.jsx)(Z,{collection:r}):(0,w.jsx)(Z,{collection:c}),(0,w.jsx)(h.Suspense,{fallback:(0,w.jsx)(j.a,{}),children:(0,w.jsx)(l.j3,{})})]}),(0,w.jsx)(d.x7,{})]})}},4390:function(n,t,e){e.d(t,{Bc:function(){return y},C_:function(){return j},Df:function(){return f},Ff:function(){return q},M1:function(){return v},Pg:function(){return u},Wp:function(){return d},ZF:function(){return s},_X:function(){return P},dm:function(){return z},h1:function(){return g},kL:function(){return C},tx:function(){return Z},z8:function(){return S}});var r=e(5861),a=e(4687),i=e.n(a),o=e(2388),c="a672ae57e08bb16567badfa77d9e520f";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function s(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat(c,"&language=en-US"),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c),n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e.data.results);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function f(){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c),n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e.data.results);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/tv/week?api_key=".concat(c),n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e.data.results);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/tv/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function Z(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function j(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/tv/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function S(n){return D.apply(this,arguments)}function D(){return(D=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false"),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function z(n){return T.apply(this,arguments)}function T(){return(T=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/search/tv?api_key=".concat(c,"&query=").concat(t,"&include_adult=false"),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function C(n){return U.apply(this,arguments)}function U(){return(U=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/tv/".concat(t,"/videos?api_key=").concat(c,"&language=en-US"),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function q(n){return F.apply(this,arguments)}function F(){return(F=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(c,"&language=en-US"),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function P(n){return A.apply(this,arguments)}function A(){return(A=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://api.themoviedb.org/3/discover/movie?api_key=".concat(c,"&sort_by=popularity.desc&with_genres=").concat(t),n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},8640:function(n,t,e){n.exports=e.p+"static/media/no-poster.7555b15218a0f4733bf7.jpeg"}}]);
//# sourceMappingURL=387.c9ddd36f.chunk.js.map