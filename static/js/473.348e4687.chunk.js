"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[473],{548:function(t,e,n){n.d(e,{Mc:function(){return o},Vu:function(){return i},ZN:function(){return f},wH:function(){return v},y:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(294),s="5cf59ee4e900eea5cdca6ff85cfcf632",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,console.log(n.data.cast),t.abrupt("return",n.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&page=").concat(n,"&api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},699:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(548),i=n(791),o=n(689),p="MovieCastPage_castPhoto__9GsTi",f=n.p+"static/media/defaultImg.94e096f21d7c4da5ab4d.jpg",v=n(184),d=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,i.useState)(!1),h=(0,a.Z)(d,2),l=h[0],m=h[1],g=(0,i.useState)(null),x=(0,a.Z)(g,2),w=x[0],_=x[1],k=(0,o.UO)().movieId;(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,s.y)(k);case 4:e=t.sent,c(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),_(t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]);var b=n.map((function(t){var e=t.id,n=t.name,r=t.profile_path;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/original".concat(r):f,alt:n,width:50,className:p}),(0,v.jsx)("p",{children:n})]},e)}));return(0,v.jsxs)(v.Fragment,{children:[l&&(0,v.jsx)("p",{children:"...Loading"}),w&&(0,v.jsx)("p",{children:w}),n.length>0&&(0,v.jsx)("ol",{children:b})]})}}}]);
//# sourceMappingURL=473.348e4687.chunk.js.map