(this["webpackJsonpanr4-bets"]=this["webpackJsonpanr4-bets"]||[]).push([[0],{19:function(e,t,n){e.exports={leaderboard:"Tournament_leaderboard__b1hvq",content:"Tournament_content__tV85N"}},21:function(e,t,n){e.exports={layout:"Layout_layout__3qLmz"}},22:function(e,t,n){e.exports={grid:"Dashboard_grid__1ouZL"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(9),a=n.n(c),s=n(14),i=n(3),o="/dashboard",j="/tournament/:tournamentId",d=n(24),l=n(8),b=n(20),u=n(2),h=function(e){var t=e.title;return Object(u.jsx)(b.a,{title:t})},x=n(21),O=n.n(x),m=function(e){var t=e.children,n=e.direction,r=void 0===n?"column":n;return Object(u.jsx)("div",{style:{flexDirection:r},className:O.a.layout,children:t})},f=n(22),p=n.n(f),v=function(){var e=Array.from({length:10},(function(e,t){return{id:t,title:"Rofloturik - ".concat(t)}}));return Object(u.jsxs)(m,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{label:"Create tournament",icon:l.a.PLUS})}),Object(u.jsx)("div",{className:p.a.grid,children:e.map((function(e){var t=e.id,n=e.title;return Object(u.jsx)(s.b,{to:Object(i.f)(j,{tournamentId:t}),children:Object(u.jsx)(h,{title:n})},t)}))})]})},I=n(12),_=function(e){var t=e.leaders,n=e.className;return Object(u.jsxs)("div",{className:n,children:[Object(u.jsx)("h2",{children:"Leaderboard"}),t.map((function(e){var t=e.name,n=e.points;return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:t}),Object(u.jsx)("span",{children:n})]},t)}))]})},g=n(19),y=n.n(g),N=function(){var e=Array.from({length:100},(function(e,t){return{name:"cheliks-"+t,points:10*t}}));return Object(u.jsxs)(m,{direction:"row",children:[Object(u.jsxs)("div",{className:y.a.content,children:[Object(u.jsx)("h2",{children:"Rofloturik"}),Object(u.jsxs)(I.b,{children:[Object(u.jsx)(I.a,{header:"stage I",children:"Content I"}),Object(u.jsx)(I.a,{header:"stage II",children:"Content II"}),Object(u.jsx)(I.a,{header:"stage III",children:"Content III"})]})]}),Object(u.jsx)(_,{className:y.a.leaderboard,leaders:e})]})},k=function(){return Object(u.jsx)(s.a,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:o,children:Object(u.jsx)(v,{})}),Object(u.jsx)(i.b,{path:j,children:Object(u.jsx)(N,{})}),Object(u.jsx)(i.a,{to:o})]})})};n(38);a.a.render(Object(u.jsx)(r.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3ed2d71e.chunk.js.map