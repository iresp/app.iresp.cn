(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-iresp-RscTimesheettableList"],{1306:function(t,e,n){"use strict";var a=n("1abe"),i=n.n(a);i.a},"15cf":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("bf0f");var i=a(n("46c6")),o=a(n("1e32")),s={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[o.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(e){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){e()}))}),50)})).then((function(e){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){e.$emit("change",{show:!1,type:e.type}),clearTimeout(e.timer),e.customOpen&&e.customClose(),e.timer=setTimeout((function(){e.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};e.default=s},"1abe":function(t,e,n){var a=n("40ad");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("9636511c",a,!0,{sourceMap:!1,shadowMode:!1})},"1bed":function(t,e,n){"use strict";n.r(e);var a=n("b9192"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"1e32":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a409")),o={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},s={data:function(){return{config:o}},mixins:[i.default]};e.default=s},"20ee":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniTransition:n("46c6").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t.maskShow?n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}):t._e(),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[]},3977:function(t,e,n){"use strict";n.r(e);var a=n("20ee"),i=n("e121");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d667");var s=n("828b"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"45c2b42e",null,!1,a["a"],void 0);e["default"]=r.exports},"406a":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("9b1b"));n("64aa"),n("bf0f"),n("2797"),n("5c47"),n("a1c1");var o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,i.default)((0,i.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),e="";for(var n in t){var a=this.toLine(n);e+=a+":"+t[n]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,n=this.getTranfrom(t);for(var a in this.transform="",n)"opacity"===a?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(n[a]," ");this.timer=setTimeout((function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}),this.duration)},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ");break}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!==typeof e){var n="";return e.forEach((function(e){n+=e+"-"+t+","})),n.substr(0,n.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=o},"40ad":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".uni-transition[data-v-091c5d88]{transition-timing-function:ease;transition-duration:.3s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-091c5d88]{opacity:0}.fade-active[data-v-091c5d88]{opacity:1}.slide-top-in[data-v-091c5d88]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-091c5d88]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-091c5d88]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-091c5d88]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-091c5d88]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-091c5d88]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-091c5d88]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-091c5d88]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-091c5d88]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-091c5d88]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-091c5d88]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=e},"46c6":function(t,e,n){"use strict";n.r(e);var a=n("c183"),i=n("4b02");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1306");var s=n("828b"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"091c5d88",null,!1,a["a"],void 0);e["default"]=r.exports},"4b02":function(t,e,n){"use strict";n.r(e);var a=n("406a"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"54f3":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-45c2b42e]{position:fixed;z-index:99}.uni-popup__mask[data-v-45c2b42e]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-45c2b42e]{transition-property:opacity;transition-duration:.2s}.uni-top-mask[data-v-45c2b42e]{opacity:1}.uni-bottom-mask[data-v-45c2b42e]{opacity:1}.uni-center-mask[data-v-45c2b42e]{opacity:1}.uni-popup__wrapper[data-v-45c2b42e]{display:block;position:absolute}.top[data-v-45c2b42e]{top:var(--window-top)}.bottom[data-v-45c2b42e]{bottom:0}.uni-popup__wrapper-box[data-v-45c2b42e]{display:block;position:relative;\n  /* iphonex 等安全区设置，底部安全区适配 */padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content-ani[data-v-45c2b42e]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-duration:.2s}.uni-top-content[data-v-45c2b42e]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-45c2b42e]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-45c2b42e]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=e},"64ab":function(t,e,n){var a=n("54f3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("f5c6fcba",a,!0,{sourceMap:!1,shadowMode:!1})},7846:function(t,e,n){"use strict";n.r(e);var a=n("c7d8"),i=n("1bed");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s=n("828b"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports},"7d11":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=a;e.default=i},a409:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=a(n("39d8")),s=(i={created:function(){"message"===this.type&&(this.maskShow=!1,this.children=null)}},(0,o.default)(i,"created",(function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)})),(0,o.default)(i,"methods",{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}),i);e.default=s},b9192:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c223"),n("aa9c");var i=a(n("7d11")),o=a(n("f08c")),s=a(n("de06")),r={name:"工时单",mixins:[i.default,o.default],data:function(){return{CustomBar:this.CustomBar,NavBarColor:this.NavBarColor,url:"/iresp/rscTimesheettable/list?column=createTime&order=desc",modalName:null,listTouchDirection:null,bpmnDiagramImage:""}},onShow:function(){this.mescroll&&this.mescroll.resetUpScroll()},computed:{top:function(){return 2*this.CustomBar},style:function(){var t=this.StatusBar,e=this.CustomBar,n="height:".concat(e,"px;padding-top:").concat(t,"px;");return n}},methods:{ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null},goPage:function(t){if(!t)return!1;this.$Router.push({name:t})},goFormPage:function(t){this.mescroll.resetUpScroll(),uni.navigateTo({url:"/pages/iresp/RscTimesheettableForm?id="+t})},goHome:function(){this.$Router.push({name:"index"})},showBpmnDiagram:function(t){var e=Math.floor(1e12*Math.random())+1;this.bpmnDiagramImage="".concat(s.default.apiUrl,"/sys/bpmn/process/").concat(t.wfInstanceId,"/diagram?t=").concat(e),this.$refs["bpmnDiagram"].open()},deleteRscTimesheettable:function(t){var e=this;this.$http.delete("/iresp/rscTimesheettable/deleteBatch?ids="+t.id).then((function(t){t.data.success?e.mescroll&&e.mescroll.resetUpScroll():alert(t.data.message)}))},submitApproval:function(t){var e=this;this.$http.post("/iresp/rscTimesheettable/".concat(t.id,"/approval/submit")).then((function(t){t.data.success?e.mescroll&&e.mescroll.resetUpScroll():alert(t.data.message)}))}}};e.default=r},c183:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},c7d8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={mescrollUni:n("62ac").default,uniPopup:n("3977").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:t.NavBarColor,isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("工时单")]),n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage("RscTimesheettableForm")}}},[t._v("新增")])],1)],2),n("mescroll-uni",{ref:"mescrollRef",attrs:{top:t.top,up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"al-list cu-list"},t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"message_text bg-white cu-item flex justify-around align-center solid-bottom margin-bottom-sm margin-top-sm",class:t.modalName=="move-box-"+a?"move-cur":"",staticStyle:{width:"100vw"},attrs:{"data-target":"move-box-"+a},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.ListTouchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.ListTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.ListTouchEnd.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.goFormPage(e.id)}}},[n("v-uni-view",{staticClass:"padding-left"},[n("v-uni-view",{staticClass:"cu-avatar radius cuIcon-timesheet bg-orange"})],1),n("v-uni-view",{staticClass:"titlePad content",staticStyle:{height:"4em"}},[n("v-uni-view",{staticClass:"flex justify-start text-cut text-lg",staticStyle:{width:"26em",color:"#333","font-family":"'黑体'"}},[n("v-uni-view",{staticClass:"padding-left"},[n("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.timesheetNbr))])],1)],1),n("v-uni-view",{staticClass:"flex justify-between margin-top-xs",staticStyle:{"font-family":"'黑体'",color:"#999"}},[n("v-uni-view",{staticStyle:{"padding-left":".8rem"}},[n("v-uni-view",{staticClass:"text-content text-cut",staticStyle:{width:"18em"}},[t._v(t._s(e.status_dictText+" "+e.periodCode))])],1)],1)],1),n("v-uni-view",{staticClass:"action text-sm",staticStyle:{color:"#aaa","margin-top":"-2em","margin-left":"-13em",width:"10em"}},[n("v-uni-text",[t._v(t._s(e.resource_dictText))])],1),n("v-uni-view",{staticClass:"move"},[e.wfInstanceId?n("v-uni-view",{staticStyle:{"margin-right":"0","margin-left":"2px"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.showBpmnDiagram(e)}}},[t._v("审批进度")]):t._e(),"Draft"===e.status||"Rejected"===e.status?n("v-uni-view",{staticStyle:{"margin-right":"0","margin-left":"2px"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.submitApproval(e)}}},[t._v("提交审批")]):t._e(),"Draft"===e.status||"Rejected"===e.status?n("v-uni-view",{staticClass:"bg-red",staticStyle:{"margin-right":"0","margin-left":"2px"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.deleteRscTimesheettable(e)}}},[t._v("删除")]):t._e()],1)],1)})),1)],1),n("v-uni-view",[n("uni-popup",{ref:"bpmnDiagram",attrs:{"background-color":"#fff"}},[n("v-uni-view",{staticClass:"popup-content",staticStyle:{"background-color":"#fff",padding:"5px"}},[n("v-uni-image",{attrs:{src:t.bpmnDiagramImage,mode:"aspectFit"}})],1)],1)],1)],1)},o=[]},d667:function(t,e,n){"use strict";var a=n("64ab"),i=n.n(a);i.a},e121:function(t,e,n){"use strict";n.r(e);var a=n("15cf"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},f08c:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c223");var a={data:function(){return{downOption:{auto:!1},upOption:{page:{num:0,size:8,time:null}},queryParam:{pageNo:1,pageSize:8},list:[],pageNo:1,pageSize:8}},methods:{downCallback:function(){this.loadList("down")},upCallback:function(t){var e=this,n=this.queryParam;n.pageNo=t.num,n.pageSize=t.size,1==t.num&&(this.list=[]),console.log("upCallback==param::",n),this.$http.get(this.url,{params:n}).then((function(t){if(console.log("upCallback请求返回res",t),t.data.success){var n=t.data.result.records,a=!0;(!n||n.length<e.pageSize)&&(console.log("加载完成!没有更多了"),a=!1),console.log("hasNext",a),e.mescroll.endSuccess(n.length),e.list=e.list.concat(n),e.$forceUpdate()}else e.mescroll.endErr()})).catch((function(){e.mescroll.endErr()}))},loadList:function(t){var e=this,n=this.queryParam;n.pageNo=this.pageNo,n.pageSize=this.pageSize,console.log("请求参数",n),this.$http.get(this.url,{params:n}).then((function(n){if(n.data.success){console.log("请求返回res.data",n.data);var a=n.data.result.records;"down"==t&&e.mescroll.endSuccess(),e.list=a}else console.log("请求返回else",n),e.mescroll.endErr()})).catch((function(t){console.log("请求返回err",t),e.mescroll.endErr()}))}}},i=a;e.default=i}}]);