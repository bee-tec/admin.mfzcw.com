(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10e53ca7"],{2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),i=r("1d80"),c=r("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"48b8":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));r("ac1f"),r("5319");var n=r("6c02"),a=function(e){if(e){var t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),i=t.getHours(),c=t.getMinutes(),o=t.getSeconds(),s="",l="",u="",d="",b="",p="";return s=r+"",l=n<10?"0"+n:n+"",u=a<10?"0"+a:a+"",d=i<10?"0"+i:i+"",b=c<10?"0"+c:c+"",p=o<10?"0"+o:o+"",s+"-"+l+"-"+u+" "+d+":"+b+":"+p}return null},i=function(e){var t=Object(n["e"])();if(!(e.length<1))return!0;t.replace("/error/role")}},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},6607:function(e,t,r){"use strict";r.r(t);r("caad"),r("2532");var n=r("7a23"),a={class:"main"},i={class:"table"},c={key:0,style:{color:"#ff0000"}},o={key:1},s={class:"optionBtn"},l=Object(n["createVNode"])("i",{class:"iconfont"},"",-1),u=Object(n["createTextVNode"])("编辑"),d=Object(n["createVNode"])("i",{class:"iconfont"},"",-1),b=Object(n["createTextVNode"])("禁用"),p=Object(n["createVNode"])("i",{class:"iconfont"},"",-1),f=Object(n["createTextVNode"])("启用"),m={class:"modalMaster",ref:"modalMaster"},O={class:"container"},j=Object(n["createTextVNode"])("上传图片");function v(e,t,r,v,g,h){var w=Object(n["resolveComponent"])("a-empty"),x=Object(n["resolveComponent"])("a-table"),k=Object(n["resolveComponent"])("a-spin"),y=Object(n["resolveComponent"])("a-alert"),C=Object(n["resolveComponent"])("a-button"),V=Object(n["resolveComponent"])("a-upload"),N=Object(n["resolveComponent"])("a-form-item"),L=Object(n["resolveComponent"])("a-form"),B=Object(n["resolveComponent"])("a-modal");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(k,{tip:"Loading...",spinning:e.state.delayLoading},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])(w,null,null,512),[[n["vShow"],e.state.delayLoading]]),Object(n["withDirectives"])(Object(n["createVNode"])(x,{size:"middle",rowKey:"displayId",scroll:{x:!0},pagination:!1,columns:e.state.tableColumns,dataSource:e.state.tableData},Object(n["createSlots"])({port:Object(n["withCtx"])((function(e){var t=e.text;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t=0==t?"拓展端":1==t?"销售端":2==t?"用户端":3==t?"商家端":"未知"),1)]})),url:Object(n["withCtx"])((function(t){var r=t.text;return[Object(n["createVNode"])("img",{src:r,style:{width:"100px"},onClick:function(t){return e.onClickImgViewer(r)}},null,8,["src","onClick"])]})),state:Object(n["withCtx"])((function(e){var t=e.text;return[1==t?(Object(n["openBlock"])(),Object(n["createBlock"])("span",c,"禁用")):Object(n["createCommentVNode"])("",!0),0==t?(Object(n["openBlock"])(),Object(n["createBlock"])("span",o,"启用")):Object(n["createCommentVNode"])("",!0)]})),_:2},[e.state.actions.includes("编辑")?{name:"option",fn:Object(n["withCtx"])((function(t){var r=t.record;return[Object(n["createVNode"])("div",s,[Object(n["createVNode"])("span",{class:"item",type:"primary",onClick:function(t){return e.editBtn(r)}},[l,u],8,["onClick"]),0==r.state?(Object(n["openBlock"])(),Object(n["createBlock"])("span",{key:0,class:"item",type:"primary",onClick:function(t){return e.stateBtn(r,1)},style:{color:"#ff0000"}},[d,b],8,["onClick"])):(Object(n["openBlock"])(),Object(n["createBlock"])("span",{key:1,class:"item",type:"primary",onClick:function(t){return e.stateBtn(r,0)}},[p,f],8,["onClick"]))])]}))}:void 0]),1032,["columns","dataSource"]),[[n["vShow"],!e.state.delayLoading]])]})),_:1},8,["spinning"])]),Object(n["createVNode"])("div",m,[Object(n["createVNode"])(B,{getContainer:function(){return e.$refs.modalMaster},destroyOnClose:"",centered:"",maskClosable:!1,visible:e.state.modalEditVisible,"onUpdate:visible":t[2]||(t[2]=function(t){return e.state.modalEditVisible=t}),width:800,title:"编辑版本",onOk:e.modalEditSaveBtn},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",O,[Object(n["createVNode"])(y,{message:"仅支持上传1080*1920分辨率图片",type:"info","show-icon":"",style:{"margin-bottom":"10px"}}),Object(n["createVNode"])(L,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{label:"上传图片",required:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{action:e.http.uploadApi,"list-type":"picture-card",fileList:e.state.editModalFileList,"onUpdate:fileList":t[1]||(t[1]=function(t){return e.state.editModalFileList=t})},{default:Object(n["withCtx"])((function(){return[e.state.editModalFileList.length<1?(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:0},{default:Object(n["withCtx"])((function(){return[j]})),_:1})):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["action","fileList"])]})),_:1})]})),_:1})])]})),_:1},8,["getContainer","visible","onOk"])],512),Object(n["createVNode"])(B,{visible:e.state.imgViewer,footer:null,onCancel:t[3]||(t[3]=function(t){return e.state.imgViewer=!1})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("img",{style:{width:"100%"},src:e.state.imgViewerUrl},null,8,["src"])]})),_:1},8,["visible"])])}r("380f");var g=r("f64c"),h=(r("96cf"),r("1da1")),w=r("48b8"),x=r("b32d"),k=Object(n["defineComponent"])({setup:function(){var e={tableColumns:[{title:"终端名",dataIndex:"port",align:"center",slots:{customRender:"port"}},{title:"当前开屏图",dataIndex:"url",align:"center",slots:{customRender:"url"}},{title:"当前状态",dataIndex:"state",align:"center",slots:{customRender:"state"}},{title:"操作",dataIndex:"option",align:"center",slots:{customRender:"option"}}],tableData:[],delayLoading:!0,editModal:{displayId:null,url:""},imgViewer:!1,imgViewerUrl:"",editModalFileList:[],modalEditVisible:!1,actions:[]},t=Object(n["reactive"])(e);t.actions=JSON.parse(sessionStorage.currentActions),Object(w["b"])(t.actions);var r=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x["a"].post("display/get",{page:1,rows:100});case 3:if(r=e.sent,"000000"!=r.code){e.next=10;break}return t.tableData=r.data.list,t.delayLoading=!1,e.abrupt("return",!0);case 10:return g["a"].error(r.msg,1),e.abrupt("return",!1);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();r();var a=function(e){t.imgViewerUrl=e,t.imgViewer=!0},i=function(e){t.editModal.displayId=e.displayId,t.modalEditVisible=!0},c=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=JSON.parse(JSON.stringify(t.editModal)),n.fileList=t.editModalFileList,!(n.fileList.length>0)){e.next=14;break}return n.url=n.fileList[0].response.data,delete n.fileList,e.next=8,x["a"].getFileDown({fileName:n.url});case 8:a=e.sent,i=new Image,i.src=a.request.responseURL,i.onload=Object(h["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1080!=i.width||1920!=i.height){e.next=17;break}return e.next=3,x["a"].post("display/update",n);case 3:if(a=e.sent,"000000"!=a.code){e.next=13;break}return g["a"].success("更新开屏图成功！",1),r(),t.modalEditVisible=!1,t.editModal={displayId:null,url:""},t.editModalFileList=[],e.abrupt("return",!0);case 13:return g["a"].error(a.msg,1),e.abrupt("return",!1);case 15:e.next=19;break;case 17:return g["a"].error("请上传1080*1920分辨率的图片！",1),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e)}))),e.next=17;break;case 14:t.modalEditVisible=!1,t.editModal={displayId:null,url:""},t.editModalFileList=[];case 17:e.next=22;break;case 19:throw e.prev=19,e.t0=e["catch"](0),e.t0;case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x["a"].post("display/setState",null,{params:{displayId:t.displayId,state:n}});case 3:if(a=e.sent,"000000"!=a.code){e.next=11;break}return i=1==n?"禁用成功！":"启用成功！",g["a"].success(i,1),r(),e.abrupt("return",!0);case 11:return g["a"].error(a.msg,1),e.abrupt("return",!1);case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e["catch"](0),e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}();return{state:t,editBtn:i,onClickImgViewer:a,modalEditSaveBtn:c,stateBtn:o,http:x["a"]}}});k.render=v;t["default"]=k},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,i=r("44d2"),c=r("ae40"),o=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);