(this["webpackJsonptic-tac-toe-v1"]=this["webpackJsonptic-tac-toe-v1"]||[]).push([[0],{10:function(e,n,l){"use strict";l.r(n);var a=l(0),t=l.n(a),u=l(3),r=l.n(u),s=(l(9),l(1));var c=function(e){var n=e.className,l=e.value,a=e.onClick;return t.a.createElement("button",{className:n,onClick:a}," ",l," ")},o=function(e){var n=e.squares,l=e.onClick,a=e.className;console.log(n);var u=n.map((function(e,n){return t.a.createElement(c,{className:a[n],key:n,value:e,onClick:function(){return l(n)}})}));return t.a.createElement("div",{className:"board"},u)},i=function(){var e=Object(a.useState)([null,null,null,null,null,null,null,null,null]),n=Object(s.a)(e,2),l=n[0],u=n[1],r=Object(a.useState)(0),c=Object(s.a)(r,2),i=c[0],m=c[1],q=Object(a.useState)(!0),f=Object(s.a)(q,2),v=f[0],b=f[1],E=Object(a.useState)(["squares","squares","squares","squares","squares","squares","squares","squares","squares"]),d=Object(s.a)(E,2),O=d[0],k=d[1],p=function(e){for(var n=0;n<7;n++){if(null!=e[n]&&n%3===0&&e[n]===e[n+1]&&e[n]===e[n+2])return e[n];if(null!=e[n]&&n<3&&e[n]===e[n+3]&&e[n]===e[n+6])return e[n]}return e[0]===e[4]&&e[0]===e[8]?e[0]:e[2]===e[4]&&e[2]===e[6]?e[2]:null}(l),N=v?"X":"O";return t.a.createElement(t.a.Fragment,null,t.a.createElement("h1",null,"Tic Tac Toe"),t.a.createElement(o,{className:O,squares:l,onClick:function(e){return function(e){if(null==p&&null==l[e])return l[e]=N,O[e]="clicked squares",b(!v),void m(i+1)}(e)}}),t.a.createElement("div",{className:"info-wrapper"},t.a.createElement("div",null,t.a.createElement("button",{onClick:function(){return u([null,null,null,null,null,null,null,null,null]),m(0),b(!0),void k(["squares","squares","squares","squares","squares","squares","squares","squares","squares"])}},"Go to Start")),t.a.createElement("h3",null,null!=p?"Winner: "+p:-1===l.indexOf(null)?"Tie Game":v?"Next Player: X":"Next Player: O")))};r.a.render(t.a.createElement(i,null),document.getElementById("root"))},4:function(e,n,l){e.exports=l(10)},9:function(e,n,l){}},[[4,1,2]]]);
//# sourceMappingURL=main.6080c5bb.chunk.js.map