(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"11f3":function(t,e,i){"use strict";i.r(e);var n=i("aaad"),a=i("8ebb");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("eb43");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"8ba70edc",null,!1,n["a"],r);e["default"]=c.exports},"17db":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cebc")),o=n(i("62ab")),r=n(i("5c80")),s={data:function(){return{title:"我的",enterprise_id:"",portrait:"",poptype:"",popMask:"",newImg:"",shareConfig:{},WeChatInfo:{},UserInfo:{},jobTotal:0}},components:{uniPopup:o.default,Share:r.default},onLoad:function(){var t=this;t.getData("supports")},onShow:function(){var t=this;uni.getStorage({key:"WeChatInfo",success:function(t){console.log(t.data)},fail:function(){}}),uni.getStorage({key:"UserInfo",success:function(e){t.UserInfo=e.data,t.WeChatInfo=e.data.wechat,t.portrait=e.data.wechat.headimgurl,t.shareConfig=(0,a.default)({},t.shareConfig,e.data)},fail:function(){t.UserInfo=t.$store.state.UserInfo}}),t.$store.state.isWeixin?t.enterprise_id=t.$store.state.UserInfo.enterprise_id:t.enterprise_id=15,t.shareConfig=(0,a.default)({},t.shareConfig,{enterprise_id:"",url:t.$store.state.webDomain+"/#/pages/company/index?enterprise_id="+t.enterprise_id})},onReady:function(){var t=this;t.enterprise_id&&(t.$refs.ShareBox.getBase64Image(),t.$refs.ShareBox.setWebQRcode())},methods:{getData:function(t,e){var i=this,n=i.$store.state.UserInfo.token;i.$store.state.isWeixin||(n=i.$store.state.testToken);var a={inter:t,parm:"?enterprise_id=".concat(i.enterprise_id),header:{token:n},fun:function(t){console.log(t),t.success?i.jobTotal=t.data.total:i.jobTotal=0}};i.$store.dispatch("getData",a)},userBinding:function(){uni.navigateTo({url:"/pages/user/login"})},jobAction:function(){uni.navigateTo({url:"/pages/index/index"})},togglePopup:function(t){var e=this;e.poptype=t},jobShare:function(){var t=this;uni.showLoading({title:"加载中"}),uni.pageScrollTo({scrollTop:0,duration:0}),setTimeout(function(){uni.hideLoading(),t.$refs.ShareBox.toImage()},1e3)},hideMask:function(){this.popMask=""},getShareImg:function(t){var e=this;e.poptype="showNewImg",e.newImg=t}}};e.default=s},3490:function(t,e,i){"use strict";i.r(e);var n=i("617f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"492b":function(t,e,i){"use strict";var n=i("6215"),a=i.n(n);a.a},"5c80":function(t,e,i){"use strict";i.r(e);var n=i("78f7"),a=i("3490");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("492b");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"537513d3",null,!1,n["a"],r);e["default"]=c.exports},"617f":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a,o=n(i("3b8d")),r=n(i("1dd3")),s=n(i("4621")),c=n(i("62ab")),l=i("fdee"),d={props:{shareConfig:{type:Object,default:function(){}}},data:function(){return{data:{},poptype:"",newImg:"",company:"",watermark:"",waterState:!1,QRCodeImg:"",QROpacity:1,QRSize:200,wmSize:"1",QRColor:0,qrtst:!1,base64Img:"",tempFilePath:"",cropFixed:!0,cropWidth:250,cropHeight:250,imgBg:"/static/default.jpg"}},onLoad:function(t){},onShow:function(){},onReady:function(){},components:{imageWrapper:s.default,uniPopup:c.default},methods:{setWebQRcode:function(){var t=this,e=t.shareConfig.url;a&&a.clear(),a=new r.default({context:t,canvasId:"tki-qrcode-canvas",text:e,correctLevel:0,background:"rgba(255, 255, 255,1)",foreground:"rgba(0,0,0,1)",size:t.QRSize,cbResult:function(e){t.QRCodeImg=e,t.data["QRCodeImg"]=e}})},toImage:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e,i,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,!e.loading){t.next=3;break}return t.abrupt("return",!1);case 3:i=document.getElementById("ImageWrapper"),n=i.offsetWidth,a=i.offsetHeight,e.loading=!0,uni.showLoading({title:"正在生成..."}),l(i,{backgroundColor:"transparent",useCORS:!0,allowTaint:!0,tainttest:!0,width:n,height:a}).then(function(t){e.loading=!1,uni.hideLoading();var i=t.toDataURL("image/png");e.poptype="showNewImg",e.$store.state.portrait=[{path:i,imgType:"base64Img",upload_percent:0}],e.$emit("getShareImg",i),e.newImg=i});case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getBase64Image:function(t,e){var i=this;uni.showToast({title:"",icon:"loading",duration:1500});var n=new Image;n.crossOrigin="Anonymous",n.setAttribute("crossorigin"," *"),n.src=e+"?t="+(new Date).getTime(),n.onload=function(){var t=document.createElement("canvas");t.width=n.width,t.height=n.height;var e=t.getContext("2d");e.drawImage(n,0,0,n.width,n.height);var a=n.src.substring(n.src.lastIndexOf(".")+1).toLowerCase(),o=t.toDataURL("image/"+a);return i.base64Img=o,uni.hideToast(),o}},togglePopup:function(t){var e=this;e.poptype=t}}};e.default=d},6215:function(t,e,i){var n=i("8773");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("26d20bfc",n,!0,{sourceMap:!1,shadowMode:!1})},"721e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'#Generated[data-v-8ba70edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:90%;padding:5% 0}#Generated .imgs[data-v-8ba70edc]{width:90%}.share-job-imgs[data-v-8ba70edc]{border:1px solid #e2e2e2}.gen-btns[data-v-8ba70edc]{position:absolute;width:90%;left:0;bottom:0;padding:%?40?% 5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}#UserHeader[data-v-8ba70edc]{background:#3a78ea;padding:%?30?%}.user-build[data-v-8ba70edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.user-info[data-v-8ba70edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;padding:%?30?% 0}.user-ovs[data-v-8ba70edc]{padding-left:%?30?%;font-size:%?40?%;color:#fff}.user-name[data-v-8ba70edc]{font-size:%?36?%}.reume-label[data-v-8ba70edc]{font-size:%?30?%}.portrait[data-v-8ba70edc]{width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden}.portrait-img[data-v-8ba70edc]{width:100%;height:100%}.reume-count[data-v-8ba70edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.count-block[data-v-8ba70edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;color:#fff;font-size:%?35?%;position:relative;width:25%}.count-block[data-v-8ba70edc]::after{content:"";width:1px;overflow:hidden;position:absolute;background-color:rgba(154,196,249,.5);height:60%;top:20%;right:0}.count-block[data-v-8ba70edc]:last-child:after{width:0}.count-numb[data-v-8ba70edc]{font-size:%?32?%}.count-label[data-v-8ba70edc]{font-size:%?28?%}.job-box[data-v-8ba70edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;padding:%?30?% %?30?% 15px;border-bottom:1px solid #f3f3f1;line-height:2}.j-left[data-v-8ba70edc]{color:#595757;font-size:%?30?%}.j-right[data-v-8ba70edc]{color:#aaa;font-size:%?28?%}.j-right[data-v-8ba70edc]::after{content:"\\E600";font-family:uniicons!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#aaa}.job-block-wrapper[data-v-8ba70edc]{border-bottom:%?20?% solid #f5f5f6}.job-block-row[data-v-8ba70edc]{padding:15px %?30?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.customer-box[data-v-8ba70edc]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.customer-row[data-v-8ba70edc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.ctm-label[data-v-8ba70edc]{padding:0 %?15?%;color:#595757;font-size:%?32?%}.j-block[data-v-8ba70edc]{width:33.3%;font-size:%?30?%;color:#595757;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-right:%?1?% solid #f3f1ef}.j-block[data-v-8ba70edc]:last-child{border-right:none}.close-btn[data-v-8ba70edc]{padding:0 %?50?%;color:#666}.j-label[data-v-8ba70edc]{padding:0 %?10?%;font-size:%?32?%;color:#595757}.j-total[data-v-8ba70edc]{font-size:%?38?%}.j-block-action[data-v-8ba70edc]{width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.act-icon[data-v-8ba70edc]{background-image:-webkit-linear-gradient(top left,#77baed,#257df2);background-image:linear-gradient(to bottom right,#77baed,#257df2);background-image:-webkit-linear-gradient(to bottom right,#77baed,#257df2);padding:%?15?%;border-radius:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?10?%}',""])},"78f7":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"share-img-wrapper"},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"portrait-box"},[i("imageWrapper",{ref:"imageWrapper",attrs:{data:t.data,QRCodeImg:t.QRCodeImg,shareConfig:t.shareConfig}})],1),i("v-uni-view",{staticClass:"portrait-main"},[i("v-uni-view",{staticClass:"imgSelect"},[i("v-uni-view",{staticClass:"webQRCode"},[i("v-uni-canvas",{staticClass:"tki-qrcode-canvas",style:{width:t.QRSize+"px",height:t.QRSize+"px"},attrs:{"canvas-id":"tki-qrcode-canvas"}})],1)],1)],1)],1)],1)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},8773:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.webQRCode[data-v-537513d3]{position:absolute;width:%?100?%;height:%?100?%;opacity:0;left:-10000px}.content[data-v-537513d3]{height:100%}.uni-padding-wrap[data-v-537513d3]{height:100%;padding:0}.portrait-box[data-v-537513d3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.imgs[data-v-537513d3]{width:100%}.imgSelect[data-v-537513d3]{width:90%;padding:%?10?% 5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.editBtns[data-v-537513d3]{width:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.selBtn[data-v-537513d3]{font-size:%?28?%;padding:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.selBtn[data-v-537513d3]::after{content:"";height:50%;width:1px;background:#e7e7e7;overflow:hidden;position:absolute;right:-1px}.selBtnOn[data-v-537513d3]{background:#151c26;color:#f17f5a}.selBtn[data-v-537513d3]:last-child()::after{width:0;background:none}.ctgBox[data-v-537513d3]{padding:%?10?% %?10?% %?100?%;height:%?400?%;overflow-y:auto}.ctgCont[data-v-537513d3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?10?%}.ctgImgBlock[data-v-537513d3]{width:20%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?10?%;position:relative}.ctgImg[data-v-537513d3]{max-width:70%;max-height:100%}.editBtn[data-v-537513d3],\n.selPor[data-v-537513d3]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#f17f5a;line-height:1;border-radius:%?10?%;padding:%?15?% 0}.editBtn[data-v-537513d3]{width:48%;color:#fff;border-radius:%?20?%;background-image:-webkit-linear-gradient(left,#e5a590,#f17f5a);background-image:linear-gradient(90deg,#e5a590,#f17f5a);background:#f17f5a}',""])},"8ebb":function(t,e,i){"use strict";i.r(e);var n=i("17db"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},9410:function(t,e,i){var n=i("721e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("16bc3212",n,!0,{sourceMap:!1,shadowMode:!1})},aaad:function(t,e,i){"use strict";var n={"uni-icons":i("0d42").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{attrs:{id:"UserHeader"}},[i("v-uni-view",{staticClass:"user-build"},[i("uni-icons",{staticClass:"build-btn",attrs:{type:"tuichu",size:24,color:"#fff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$store.dispatch("logout")}}})],1),i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"portrait"},[t.portrait?i("v-uni-image",{staticClass:"portrait-img",attrs:{src:t.portrait,mode:"aspectFit"}}):i("v-uni-image",{staticClass:"portrait-img",attrs:{src:"/static/logo.png",mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"user-ovs"},[i("v-uni-view",{staticClass:"user-name"},[t._v(t._s(t.UserInfo.enterprise?t.UserInfo.enterprise.username:"游客"))]),i("v-uni-view",{staticClass:"user-sub-ov"},[i("v-uni-view",{staticClass:"reume-label"},[t._v(t._s(t.UserInfo.enterprise?t.UserInfo.enterprise.name:""))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"reume-count"},[i("v-uni-view",{staticClass:"count-block"},[i("v-uni-view",{staticClass:"count-numb"},[t._v("0")]),i("v-uni-view",{staticClass:"count-label"},[t._v("简历")])],1),i("v-uni-view",{staticClass:"count-block"},[i("v-uni-view",{staticClass:"count-numb"},[t._v("0")]),i("v-uni-view",{staticClass:"count-label"},[t._v("今日新增")])],1),i("v-uni-view",{staticClass:"count-block"},[i("v-uni-view",{staticClass:"count-numb"},[t._v("0")]),i("v-uni-view",{staticClass:"count-label"},[t._v("已导出")])],1),i("v-uni-view",{staticClass:"count-block"},[i("v-uni-view",{staticClass:"count-numb"},[t._v("0")]),i("v-uni-view",{staticClass:"count-label"},[t._v("未导出")])],1)],1)],1),i("v-uni-view",{staticClass:"job-block-wrapper"},[i("v-uni-view",{staticClass:"job-box"},[i("v-uni-view",{staticClass:"j-left"},[i("v-uni-text",{staticClass:"j-total"},[t._v(t._s(t.jobTotal))]),t._v("个在线职位")],1),i("v-uni-view",{staticClass:"j-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jobAction.apply(void 0,arguments)}}},[t._v("职位管理")])],1),i("v-uni-view",{staticClass:"job-block-row"},[i("v-uni-view",{staticClass:"j-block"},[i("v-uni-text",{staticClass:"j-label"},[t._v("导出简历")]),i("uni-icons",{attrs:{type:"daochu",size:18,color:"#595656"}})],1),i("v-uni-view",{staticClass:"j-block"},[i("v-uni-text",{staticClass:"j-label"},[t._v("导出名单")]),i("uni-icons",{attrs:{type:"mingdandaochu",size:18,color:"#595656"}})],1),i("v-uni-view",{staticClass:"j-block",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jobShare.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"j-label"},[t._v("职位分享")]),i("uni-icons",{attrs:{type:"fenxiangjiantouxianxing",size:18,color:"#595656"}})],1)],1)],1),i("v-uni-view",{staticClass:"job-block-wrapper"},[i("v-uni-view",{staticClass:"job-block-row"},[i("v-uni-view",{staticClass:"j-block-action"},[i("v-uni-view",{staticClass:"act-icon"},[i("uni-icons",{attrs:{type:"shuju",size:20,color:"#fff"}})],1),i("v-uni-view",{staticClass:"act-label"},[t._v("招聘数据")])],1),i("v-uni-view",{staticClass:"j-block-action"},[i("v-uni-view",{staticClass:"act-icon"},[i("uni-icons",{attrs:{type:"mingpian1",size:20,color:"#fff"}})],1),i("v-uni-view",{staticClass:"act-label"},[t._v("个人主页")])],1),i("v-uni-view",{staticClass:"j-block-action"},[i("v-uni-view",{staticClass:"act-icon"},[i("uni-icons",{attrs:{type:"daoju",size:20,color:"#fff"}})],1),i("v-uni-view",{staticClass:"act-label"},[t._v("招聘道具")])],1),i("v-uni-view",{staticClass:"j-block-action"},[i("v-uni-view",{staticClass:"act-icon"},[i("uni-icons",{attrs:{type:"xunzhang_",size:20,color:"#fff"}})],1),i("v-uni-view",{staticClass:"act-label"},[t._v("我的勋章")])],1)],1)],1),i("v-uni-view",{staticClass:"job-block-wrapper"},[i("v-uni-view",{staticClass:"job-block-row customer-box"},[i("v-uni-view",{staticClass:"customer-row"},[i("v-uni-view",{staticClass:"cst-left"},[i("uni-icons",{attrs:{type:"kefu",size:24,color:"#656262"}}),i("v-uni-text",{staticClass:"ctm-label"},[t._v("我的客服")])],1),i("uni-icons",{attrs:{type:"jiantou1",size:24,color:"#656262"}})],1)],1)],1),i("v-uni-view",{staticClass:"share-box-hide"},[i("share",{ref:"ShareBox",attrs:{shareConfig:t.shareConfig},on:{getShareImg:function(e){arguments[0]=e=t.$handleEvent(e),t.getShareImg.apply(void 0,arguments)}}})],1),t.popMask?i("v-uni-view",{staticClass:"popMask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideMask.apply(void 0,arguments)}}}):t._e(),i("uni-popup",{attrs:{show:"showNewImg"===t.poptype,position:"full",mode:"fixed",width:"100"},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[i("v-uni-view",{attrs:{id:"Generated"}},[t.newImg?i("img",{staticClass:"imgs share-job-imgs",attrs:{src:t.newImg,alt:""}}):t._e(),i("v-uni-view",{staticClass:"share-sm"},[i("v-uni-view",{staticClass:"close-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[t._v("返回")]),t._v("长按图片保存后分享")],1)],1)],1)],1)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},eb43:function(t,e,i){"use strict";var n=i("9410"),a=i.n(n);a.a}}]);