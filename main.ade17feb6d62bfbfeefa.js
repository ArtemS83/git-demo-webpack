(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,l,e){},QfWi:function(n,l,e){"use strict";e.r(l);e("L1EO"),e("JBxO"),e("FdtR");var t=e("l8Ea"),a=e.n(t);console.log("Hello fetch");var o=document.querySelector(".js-fetch");document.querySelector(".hidden").addEventListener("click",(function(){fetch("https://newsapi.org/v2/everything?q=football&language=ru",r).then((function(n){return n.json()})).then((function(n){var l=n.articles;console.log(l);var e=a()(l);o.insertAdjacentHTML("beforeend",e)})).catch(console.log)}));var r={headers:{Authorization:"e68dce1f1c6e4e2da21f057bdb3efccb"}}},l8Ea:function(n,l,e){var t=e("mp5j");n.exports=(t.default||t).template({1:function(n,l,e,t,a){var o,r=null!=l?l:n.nullContext||{},c=n.hooks.helperMissing,i="function",u=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<li class="menu__item">\r\n    <article class="card">\r\n        <img src="'+u(typeof(o=null!=(o=s(e,"urlToImage")||(null!=l?s(l,"urlToImage"):l))?o:c)===i?o.call(r,{name:"urlToImage",hash:{},data:a,loc:{start:{line:4,column:18},end:{line:4,column:32}}}):o)+'" alt="'+u(typeof(o=null!=(o=s(e,"title")||(null!=l?s(l,"title"):l))?o:c)===i?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:4,column:39},end:{line:4,column:48}}}):o)+'" class="card__image" />\r\n        <div class="card__content">\r\n\r\n            <a href="'+u(typeof(o=null!=(o=s(e,"url")||(null!=l?s(l,"url"):l))?o:c)===i?o.call(r,{name:"url",hash:{},data:a,loc:{start:{line:7,column:21},end:{line:7,column:28}}}):o)+'" class="card__name">\r\n                <h2 class="card__name">'+u(typeof(o=null!=(o=s(e,"title")||(null!=l?s(l,"title"):l))?o:c)===i?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:8,column:39},end:{line:8,column:48}}}):o)+'</h2>\r\n            </a>\r\n            <p class="card__descr">\r\n                '+u(typeof(o=null!=(o=s(e,"description")||(null!=l?s(l,"description"):l))?o:c)===i?o.call(r,{name:"description",hash:{},data:a,loc:{start:{line:11,column:16},end:{line:11,column:31}}}):o)+"\r\n            </p>\r\n        </div>\r\n        <span>"+u(typeof(o=null!=(o=s(e,"publishedAt")||(null!=l?s(l,"publishedAt"):l))?o:c)===i?o.call(r,{name:"publishedAt",hash:{},data:a,loc:{start:{line:14,column:14},end:{line:14,column:29}}}):o)+"</span>\r\n    </article>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,l,e,t,a){var o;return null!=(o=(n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]})(e,"each").call(null!=l?l:n.nullContext||{},l,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:17,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.ade17feb6d62bfbfeefa.js.map