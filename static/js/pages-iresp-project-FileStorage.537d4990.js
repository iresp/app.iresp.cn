(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-iresp-project-FileStorage"],{"01ea":function(t,e,i){"use strict";i.r(e);var n=i("9318"),r=i("6ff7");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("5392");var o=i("828b"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"91e8bf42",null,!1,n["a"],void 0);e["default"]=d.exports},"11a6":function(t,e,i){"use strict";var n=i("608d"),r=i.n(n);r.a},1998:function(t,e,i){var n=i("f245");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("967d").default;r("26f94340",n,!0,{sourceMap:!1,shadowMode:!1})},"199a":function(t,e,i){"use strict";i.r(e);var n=i("8eb3"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"28e3":function(t,e,i){var n=i("d73a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("967d").default;r("c4c9bc7c",n,!0,{sourceMap:!1,shadowMode:!1})},"2e38":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-badge--x[data-v-1693f0ea]{display:inline-block;position:relative}.uni-badge--absolute[data-v-1693f0ea]{position:absolute}.uni-badge--small[data-v-1693f0ea]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-1693f0ea]{display:flex;overflow:hidden;box-sizing:border-box;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";min-width:20px;justify-content:center;flex-direction:row;height:20px;padding:0 4px;line-height:18px;color:#fff;border-radius:100px;background-color:#8f939c;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-1693f0ea]{color:#fff;background-color:#8f939c}.uni-badge--primary[data-v-1693f0ea]{background-color:#2979ff}.uni-badge--success[data-v-1693f0ea]{background-color:#18bc37}.uni-badge--warning[data-v-1693f0ea]{background-color:#f3a73f}.uni-badge--error[data-v-1693f0ea]{background-color:#e43d33}.uni-badge--inverted[data-v-1693f0ea]{padding:0 5px 0 0;color:#8f939c}.uni-badge--info-inverted[data-v-1693f0ea]{color:#8f939c;background-color:initial}.uni-badge--primary-inverted[data-v-1693f0ea]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-1693f0ea]{color:#18bc37;background-color:initial}.uni-badge--warning-inverted[data-v-1693f0ea]{color:#f3a73f;background-color:initial}.uni-badge--error-inverted[data-v-1693f0ea]{color:#e43d33;background-color:initial}',""]),t.exports=e},"3cc7":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("aa9c"),i("bf0f"),i("2797"),i("dd2b");var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},"4d87":function(t,e,i){var n=i("e7e7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("967d").default;r("6b77442e",n,!0,{sourceMap:!1,shadowMode:!1})},5392:function(t,e,i){"use strict";var n=i("1998"),r=i.n(n);r.a},"5c29":function(t,e,i){"use strict";i.r(e);var n=i("bb6a"),r=i("9fdc");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("80ae");var o=i("828b"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"13f73da8",null,!1,n["a"],void 0);e["default"]=d.exports},"5d25":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("c9b5"),i("bf0f"),i("ab80"),i("2797"),i("5c47"),i("e966");var n={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},"608d":function(t,e,i){var n=i("2e38");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("967d").default;r("250c8850",n,!0,{sourceMap:!1,shadowMode:!1})},"66b6":function(t,e,i){"use strict";i.r(e);var n=i("a25a"),r=i("199a");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("11a6");var o=i("828b"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"1693f0ea",null,!1,n["a"],void 0);e["default"]=d.exports},"6ff7":function(t,e,i){"use strict";i.r(e);var n=i("c035"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"80ae":function(t,e,i){"use strict";var n=i("28e3"),r=i.n(n);r.a},"8eb3":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa");var n={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,i=this.size,n=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,n?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var i="".concat(-t+this.offset[0],"px"),n="".concat(-e+this.offset[1],"px"),r={rightTop:{right:i,top:n},rightBottom:{right:i,bottom:n},leftBottom:{left:i,bottom:n},leftTop:{left:i,top:n}},a=r[this.absolute];return a||r["rightTop"]},dotStyle:function(){return this.isDot?{width:"10px",minWidth:"0",height:"10px",padding:"0",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,i=this.maxNum;return t?"":Number(e)>i?"".concat(i,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},9318:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("de3a").default,uniSection:i("a115").default,uniGrid:i("acae").default,uniGridItem:i("5c29").default,uniBadge:i("66b6").default,uniDrawer:i("61cd").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:t.NavBarColor,isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("文档中心")])],2),i("v-uni-view",{staticClass:"bg-white",staticStyle:{padding:"20px"}},[i("h2",[t._v(t._s(t.title))]),i("h4",[t._v(t._s(t.subTitle))]),i("v-uni-view",{staticStyle:{"padding-top":"10px"}},[i("v-uni-text",{staticStyle:{color:"#007BFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goHome.apply(void 0,arguments)}}},[i("uni-icons",{attrs:{color:"#007BFF",type:"home",size:"20"}}),t._v("文档首页")],1),i("v-uni-text",{staticStyle:{"margin-left":"10px",color:"#007BFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("uni-icons",{attrs:{color:"#007BFF",type:"back",size:"20"}}),t._v("后退")],1)],1)],1),i("uni-section",{staticStyle:{"margin-top":"0"}},[i("uni-grid",{attrs:{column:3,"show-border":!1,square:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("v-uni-view",{staticClass:"grid-item-box",staticStyle:{padding:"15px"}},[i("uni-icons",{attrs:{type:e.icon,size:"30"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.text))]),e.badge?i("v-uni-view",{staticClass:"grid-dot"},[i("uni-badge",{attrs:{text:e.badge,type:"success"}})],1):t._e()],1)],1)})),1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"example-body"},[i("uni-drawer",{ref:"showRight",attrs:{mode:"right",width:t.drawerWidth}},[i("v-uni-view",{staticClass:"container"},[i("v-uni-web-view",{style:{width:"100%",height:t.webViewHeight+"px",marginTop:"50px"},attrs:{fullscreen:!1,src:t.webViewSrc}})],1)],1)],1)],1)],1)},a=[]},"9fdc":function(t,e,i){"use strict";i.r(e);var n=i("3cc7"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},a25a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},r=[]},acae:function(t,e,i){"use strict";i.r(e);var n=i("f7a9"),r=i("c76a");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("d907");var o=i("828b"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"6f48037d",null,!1,n["a"],void 0);e["default"]=d.exports},bb6a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},r=[]},c035:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("aa9c"),i("c223");var r=n(i("2634")),a=n(i("2fdc")),o={data:function(){return{CustomBar:this.CustomBar,NavBarColor:this.NavBarColor,drawerWidth:uni.getSystemInfoSync().screenWidth-50,webViewHeight:uni.getSystemInfoSync().screenHeight-80,currentProjectCode:void 0,currentDocName:void 0,webViewSrc:"",title:"文档中心",subTitle:"项目过程中上传提交的文档汇总。",dynamicList:[],list:[]}},created:function(){this.query()},computed:{top:function(){return 2*this.CustomBar}},methods:{query:function(t,e){var i=this;return(0,a.default)((0,r.default)().mark((function n(){var a,o,d,c,s;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={},t&&(a.projectCode=t),e&&(a.docName=e),n.next=5,i.$http.get("/iresp/custom/project/document",{params:a});case 5:if(o=n.sent,o.data.success){for(d=[],c=0;c<o.data.result.length;c++)s=o.data.result[c],s.icon="folder-add",s.text=s.file_name?s.file_name:s.doc_name?s.doc_name:s.project_name,s.badge=s.total?s.total:s.file_type,d.push(s);i.list=d}case 7:case"end":return n.stop()}}),n)})))()},change:function(t){var e=t.detail.index,i=this.list[e];i.file_name?(this.webViewSrc="https://fileview.dev.iresp.cn/onlinePreview?officePreviewType=".concat(i.file_type,"&url=https://uat.iresp.cn/jeecg-boot/sys/common/static/").concat(i.url),this.$refs["showRight"].open()):i.doc_name?(this.currentDocName=i.doc_name,this.query(this.currentProjectCode,i.doc_name)):(this.currentProjectCode=i.project_code,this.query(i.project_code,void 0))},goHome:function(){this.currentProjectCode=void 0,this.currentDocName=void 0,this.query(void 0,void 0)},back:function(){this.currentDocName?(this.currentDocName=void 0,this.query(this.currentProjectCode,void 0)):this.goHome()}}};e.default=o},c76a:function(t,e,i){"use strict";i.r(e);var n=i("5d25"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},d73a:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),t.exports=e},d907:function(t,e,i){"use strict";var n=i("4d87"),r=i.n(n);r.a},e7e7:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=e},f245:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.image[data-v-91e8bf42]{width:25px;height:25px}.text[data-v-91e8bf42]{font-size:14px;margin-top:5px}.grid-dynamic-box[data-v-91e8bf42]{margin-bottom:15px}.grid-item-box[data-v-91e8bf42]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 0}.grid-item-box-row[data-v-91e8bf42]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px 0}.grid-dot[data-v-91e8bf42]{position:absolute;top:5px;right:15px}.swiper[data-v-91e8bf42]{height:420px}@media screen and (min-width:768px) and (max-width:1425px){.swiper[data-v-91e8bf42]{height:630px}}@media screen and (min-width:1425px){.swiper[data-v-91e8bf42]{height:830px}}',""]),t.exports=e},f7a9:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},r=[]}}]);