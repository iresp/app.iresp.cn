(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-loginOauth2"],{"0601":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9b1b"));i("5c47"),i("a1c1"),i("0506"),i("af8f"),i("5ef2"),i("45da"),i("c223");i("2d6f");var o=i("8f59"),r=i("00b9"),s=n(i("de06")),c={data:function(){return{loading:!1,env:{thirdType:"",thirdApp:!1,wxWork:!1,dingtalk:!1},redirectUrl:""}},beforeCreate:function(){(0,r.isOAuth2AppEnv)()||this.$Router.replace({name:"login"})},created:function(){this.checkEnv(),this.doOAuth2Login()},methods:(0,a.default)((0,a.default)({},(0,o.mapActions)(["ThirdLogin"])),{},{checkEnv:function(){/wxwork/i.test(navigator.userAgent)&&(this.env.thirdApp=!0,this.env.wxWork=!0),/dingtalk/i.test(navigator.userAgent)&&(this.env.thirdApp=!0,this.env.dingtalk=!0)},doOAuth2Login:function(){if(this.env.thirdApp){this.redirectUrl="";var t=window.location.search;if(t.indexOf("hasToken")>0){var e=(0,r.getUrlParams)(t);e.params.redirect?(this.redirectUrl=decodeURIComponent(decodeURIComponent(e.params.redirect)),this.goRedirectUrl()):alert("hasToken参数错误!")}else if(t.indexOf("oauth2LoginToken")>0){var i=(0,r.getUrlParams)(t);this.env.thirdType=i.params.thirdType;var n=i.params.oauth2LoginToken;i.params.redirect&&(this.redirectUrl=decodeURIComponent(i.params.redirect)),this.doThirdLogin(n)}else this.env.wxWork?this.doWechatEnterpriseOAuth2Login():this.env.dingtalk&&this.doDingTalkOAuth2Login()}},doThirdLogin:function(t){var e=this;this.ThirdLogin({token:t,thirdType:this.env.thirdType}).then((function(t){t.data.success?e.loginSuccess():e.requestFailed(t)})).catch((function(t){alert(t.message||t)}))},loginSuccess:function(){this.$Router.replaceAll({name:"index"})},requestFailed:function(t){this.$message.warning("登录失败")},goRedirectUrl:function(){var t=(0,r.getUrlParams)(this.redirectUrl),e=t.url,i=t.params;if(i.info){var n=JSON.parse(i.info),a={instanceId:n.procInsId,taskId:n.taskId,taskDefKey:n.taskDefKey};1==n.claim&&(a["claim"]=1),this.$Router.replaceAll({path:e,query:a})}else this.$Router.replaceAll({path:e})},doWechatEnterpriseOAuth2Login:function(){this.sysOAuth2Login("wechat_enterprise")},doDingTalkOAuth2Login:function(){this.sysOAuth2Login("dingtalk")},sysOAuth2Login:function(t){var e=s.default.apiUrl,i="".concat(e,"/sys/thirdLogin/oauth2/").concat(t,"/login"),n=window.location.origin+window.location.search;i+="?state=".concat(encodeURIComponent(n)),console.log("sysOAuth2Login====》",i),window.location.href=i}})};e.default=c},"30e1":function(t,e,i){var n=i("4d1b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("dfb6e7f4",n,!0,{sourceMap:!1,shadowMode:!1})},"3c11":function(t,e,i){"use strict";var n=i("30e1"),a=i.n(n);a.a},"4c95":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"zai-box"},[e("v-uni-view",{staticClass:"cu-load load-modal"},[e("v-uni-image",{staticClass:"round",attrs:{src:"/static/logo.png",mode:"aspectFit"}}),e("v-uni-view",{staticClass:"gray-text"},[this._v("正在登录中...")])],1)],1)},a=[]},"4d1b":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".login-paddingtop[data-v-5882344c]{padding-top:100 upx}.zai-box[data-v-5882344c]{padding:0 20 upx;padding-top:100 upx;position:relative}.zai-logo[data-v-5882344c]{width:200 upx;height:150px}.zai-title[data-v-5882344c]{font-size:58 upx;color:#000;text-align:center}.input-placeholder[data-v-5882344c], .zai-input[data-v-5882344c]{color:#94afce}.zai-label[data-v-5882344c]{padding:60 upx 0;text-align:center;font-size:30 upx;color:#a7b6d0}.zai-btn[data-v-5882344c]{background:#ff65a3;color:#fff;border:0;border-radius:100 upx;font-size:36 upx}.zai-btn[data-v-5882344c]:after{border:0}\n\n/*按钮点击效果*/.zai-btn.button-hover[data-v-5882344c]{-webkit-transform:translate(1 upx,1 upx);transform:translate(1 upx,1 upx)}",""]),t.exports=e},6743:function(t,e,i){"use strict";i.r(e);var n=i("4c95"),a=i("8130");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3c11");var r=i("828b"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5882344c",null,!1,n["a"],void 0);e["default"]=s.exports},8130:function(t,e,i){"use strict";i.r(e);var n=i("0601"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);