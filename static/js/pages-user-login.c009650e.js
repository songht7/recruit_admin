(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"297c":function(e,t,n){"use strict";var o=n("8cb5"),r=n.n(o);r.a},"2b45":function(e,t,n){"use strict";var o={uniIcons:n("70f6").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"user-login"},[[n("v-uni-view",{staticClass:"login-block"},[n("v-uni-view",{staticClass:"login-label"},[n("v-uni-text",{staticClass:"label"},[e._v("管理员登录")])],1),n("v-uni-view",{class:["login-input",e.phoneErr?"phone-err":""]},[n("v-uni-view",{staticClass:"input-left"},[n("uni-icons",{attrs:{type:"p-shouji",size:"18",color:"#999"}}),n("v-uni-input",{staticClass:"user-input ",attrs:{type:"number",maxlength:"11",placeholder:"手机号"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)}},model:{value:e.formData["phone"],callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData['phone']"}})],1)],1),n("v-uni-view",{staticClass:"login-input"},[n("v-uni-view",{staticClass:"input-left"},[n("uni-icons",{attrs:{type:"yanzhengma",size:"18",color:"#999"}}),n("v-uni-input",{staticClass:"user-input",attrs:{type:"text",maxlength:"6",placeholder:"验证码"},model:{value:e.formData["code"],callback:function(t){e.$set(e.formData,"code",t)},expression:"formData['code']"}})],1),n("v-uni-view",{class:["get-code",e.seandCode?"loading":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.seandCode?e.count+"s 重新获取":"获取验证码"))])],1),n("v-uni-view",{staticClass:"login-btns"},[n("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")])],1),n("v-uni-view",{staticStyle:{padding:"30rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$store.dispatch("logout")}}},[e._v("清除缓存")])],1)]],2)},i=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},"45af":function(e,t,n){"use strict";n.r(t);var o=n("e745"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},"79f8":function(e,t,n){"use strict";n.r(t);var o=n("2b45"),r=n("45af");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("297c");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"08d1b27e",null,!1,o["a"],a);t["default"]=c.exports},"8cb5":function(e,t,n){var o=n("c910");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("48856a10",o,!0,{sourceMap:!1,shadowMode:!1})},c910:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".user-login[data-v-08d1b27e]{padding:%?100?% %?30?% %?30?%}.login-block[data-v-08d1b27e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.login-label[data-v-08d1b27e]{line-height:1.6;padding-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.label[data-v-08d1b27e]{font-size:%?45?%;color:#000}.sub-label[data-v-08d1b27e]{font-size:%?35?%;color:#848383}.login-input[data-v-08d1b27e]{padding:%?10?%;border-bottom:%?2?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin-bottom:%?30?%}.input-left[data-v-08d1b27e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.phone-err[data-v-08d1b27e]{border-color:#f33}.user-input[data-v-08d1b27e]{line-height:2;font-size:%?34?%;color:#666;padding:0 %?10?%}.login-btns[data-v-08d1b27e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.login-btn[data-v-08d1b27e]{width:100%;background:#3a78ea;border-radius:%?10?%;line-height:2;border:%?2?% solid #3a78ea;color:#fff;font-size:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.get-code[data-v-08d1b27e]{color:#007aff}.disbale-btn[data-v-08d1b27e],\n.loading[data-v-08d1b27e]{color:#666}",""]),e.exports=t},d6cb:function(e,t,n){n("c975"),n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var o=new RegExp("^.{"+t[n].checkRule+"}$");if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":o=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":o=/^-?[1-9][0-9]?$/;if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":o=/^-?[0-9][0-9]?.+[0-9]+$/;if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":o=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":o=/^1[0-9]{10,10}$/;if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":o=/^[0-9]{6}$/;if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":o=new RegExp(t[n].checkRule);if(!o.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},e745:function(e,t,n){"use strict";n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("d6cb"),r=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],i={data:function(){return{title:"登录",pageIs:"phone",disbale:!0,phoneErr:!1,loading:!1,seandCode:!1,count:60,formData:{phone:"",code:""},token:"",WeChatInfo:{},openid:""}},onLoad:function(){},onShow:function(){var e=this;console.log("-------------"),uni.getStorage({key:"WeChatInfo",success:function(t){console.log("onShow:",t.data),e.WeChatInfo=t.data,e.openid=t.data.wechat?t.data.wechat.openid:t.data.userError.openid,e.$store.state.UserInfo.id&&e.WeChatInfo.wechat.openid&&uni.redirectTo({url:"/pages/user/index"})},fail:function(){e.$store.state.isWeixin?e.$store.dispatch("wxXCXAuth"):(e.WeChatInfo["token"]=e.$store.state.testToken,e.WeChatInfo["wechat"]={openid:e.$store.state.testOpenid})}}),e.$store.dispatch("cheack_user"),uni.getStorage({key:"UserInfo",success:function(t){t.data.token&&(e.token=t.data.token,e.login())}})},onReady:function(){},methods:{login:function(e){var t=this,n=[].concat(r,[{name:"code",checkType:"notnull",checkRule:"",errorMsg:"验证码不能为空"}]),i=t.formData,a=o.check(i,n);if(a||t.token){var s=t.openid;t.$store.state.isWeixin||(s=t.$store.state.testOpenid);var c={inter:"weChatAuth",parm:"?phone=".concat(t.formData.phone,"&phoneCode=").concat(t.formData.code,"&openid=").concat(s)};t.token&&(c["parm"]="",c["header"]={token:t.token}),c["fun"]=function(e){e.success?0==e.data.userError?uni.showToast({title:"该账户未注册管理员",icon:"none"}):""==e.data?uni.showToast({title:"获取用户信息失败",icon:"none"}):(t.$store.state.UserInfo=e.data,uni.setStorage({key:"UserInfo",data:e.data,success:function(){uni.navigateTo({url:"/pages/user/index"})},fail:function(e){uni.showToast({title:"获取用户信息失败",icon:"none"})}})):"errorSms"==e.data.userError&&uni.showToast({title:"验证码错误",icon:"none"})},t.$store.dispatch("getData",c)}else uni.showToast({title:o.error,icon:"none"})},onFocus:function(){var e=this;e.phoneErr=!1,e.disbale=!0},getCode:function(){var e=this;if(!e.seandCode){uni.pageScrollTo({scrollTop:0,duration:0});var t=r,n=e.formData,i=o.check(n,t);if(i){e.seandCode=!0,e.countDown(),console.log(e.formData);var a={inter:"sendSms",parm:"?phone=".concat(e.formData.phone),fun:function(e){console.log(e),e.success}};e.$store.dispatch("getData",a)}else uni.showToast({title:o.error,icon:"none"})}},countDown:function(){var e=this,t=this,n=60;this.timer||(this.count=n,this.timer=setInterval((function(){e.count>0&&e.count<=n?e.count--:(t.seandCode=!1,clearInterval(e.timer),e.timer=null)}),1e3))}}};t.default=i}}]);