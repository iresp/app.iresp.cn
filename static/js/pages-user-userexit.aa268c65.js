(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userexit"],{"582f":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={name:"user",data:function(){return{elements:[{title:"退出",name:"exit",color:"cyan",cuIcon:"newsfill",auth:"ac"}]}},methods:{}}},"912c":function(t,n,e){"use strict";e.r(n);var a=e("582f"),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},bc0e:function(t,n,e){"use strict";e.r(n);var a=e("ee3c"),i=e("912c");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);var c=e("828b"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"28b80674",null,!1,a["a"],void 0);n["default"]=u.exports},ee3c:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":!0}},[e("v-uni-image",{staticClass:"response",attrs:{src:"/static/componentBg.png ",mode:"widthFix"}}),e("v-uni-view",{staticClass:"nav-list"},t._l(t.elements,(function(n,a){return e("v-uni-navigator",{key:a,staticClass:"nav-li",class:"bg-"+n.color,style:[{animation:"show "+(.2*(a+1)+1)+"s 1"}],attrs:{"hover-class":"none",url:"/pages/common/"+n.name,navigateTo:!0}},[e("v-uni-view",{staticClass:"nav-title"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"nav-name"},[t._v(t._s(n.name))]),e("v-uni-text",{class:"cuIcon-"+n.cuIcon})],1)})),1),e("v-uni-view",{staticClass:"cu-tabbar-height"})],1)],1)},i=[]}}]);