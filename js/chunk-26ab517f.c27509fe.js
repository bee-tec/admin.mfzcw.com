(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ab517f"],{2204:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),r={class:"main"},o={class:"feature"},c=Object(n["createTextVNode"])(" 全部 "),s=Object(n["createVNode"])("i",{class:"iconfont"},"",-1),i=Object(n["createTextVNode"])("搜索"),l={class:"table"},u={key:0},p={class:"table"};function f(e,t,a,f,d,b){var g=Object(n["resolveComponent"])("a-select-option"),j=Object(n["resolveComponent"])("a-select"),m=Object(n["resolveComponent"])("a-form-item"),O=Object(n["resolveComponent"])("a-input"),v=Object(n["resolveComponent"])("a-button"),x=Object(n["resolveComponent"])("a-form"),h=Object(n["resolveComponent"])("a-empty"),k=Object(n["resolveComponent"])("a-table"),y=Object(n["resolveComponent"])("a-spin"),N=Object(n["resolveComponent"])("a-tab-pane"),S=Object(n["resolveComponent"])("a-tabs");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])("div",o,[Object(n["createVNode"])(x,{layout:"inline",model:e.state.searchForm},{default:Object(n["withCtx"])((function(){return[1==e.state.userInfo.headCompany?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:0,label:"公司选择"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{value:e.state.companyId,"onUpdate:value":t[1]||(t[1]=function(t){return e.state.companyId=t}),style:{width:"150px"},onChange:t[2]||(t[2]=function(t){return e.onCompanySelectChange()})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{value:"allData"},{default:Object(n["withCtx"])((function(){return[c]})),_:1}),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.state.companyList,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(g,{key:t,value:e.companyId},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["value"])]})),_:1})):Object(n["createCommentVNode"])("",!0),1==e.state.tabKey?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:1,label:"员工姓名"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{placeholder:"请输入",style:{width:"150px"},value:e.state.searchForm.staffName,"onUpdate:value":t[3]||(t[3]=function(t){return e.state.searchForm.staffName=t})},null,8,["value"])]})),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:2,label:"项目名称"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{placeholder:"请输入",style:{width:"150px"},value:e.state.searchForm.projectName,"onUpdate:value":t[4]||(t[4]=function(t){return e.state.searchForm.projectName=t})},null,8,["value"])]})),_:1})),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{class:"search-btn",onClick:e.onClickSearch},{default:Object(n["withCtx"])((function(){return[s,i]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])]),Object(n["createVNode"])(S,{type:"card",onChange:e.onTabsClick},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{key:"1",tab:"个人统计"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",l,[Object(n["createVNode"])(y,{tip:"Loading...",spinning:e.state.delayLoading},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])(h,null,null,512),[[n["vShow"],e.state.delayLoading]]),Object(n["withDirectives"])(Object(n["createVNode"])(k,{size:"middle",rowKey:"staffId",scroll:{x:!0},pagination:{total:e.state.staffPagination.total,current:e.state.staffPagination.current,pageSize:e.state.staffPagination.pageSize,simple:e.state.staffPagination.simple,size:e.state.staffPagination.size,defaultPageSize:e.state.staffPagination.defaultPageSize,showSizeChanger:e.state.staffPagination.showSizeChanger,pageSizeOptions:e.state.staffPagination.pageSizeOptions,showTotal:e.state.staffPagination.showTotal,onChange:e.onStaffPageChange,onShowSizeChange:e.onStaffPageSizeChange},columns:e.state.staffTableColumns,dataSource:e.state.staffTableData},{staffRoleNames:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,a){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:a},[Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(e),1),a!==t.length-1?(Object(n["openBlock"])(),Object(n["createBlock"])("span",u,"、")):Object(n["createCommentVNode"])("",!0)],64)})),128))]})),expandReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),projectManageReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),fixedAssetsReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),companyReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),otherReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),_:1},8,["pagination","columns","dataSource"]),[[n["vShow"],!e.state.delayLoading]])]})),_:1},8,["spinning"])])]})),_:1}),Object(n["createVNode"])(N,{key:"2",tab:"项目统计"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",p,[Object(n["createVNode"])(y,{tip:"Loading...",spinning:e.state.delayLoading},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])(h,null,null,512),[[n["vShow"],e.state.delayLoading]]),Object(n["withDirectives"])(Object(n["createVNode"])(k,{size:"middle",rowKey:"projectId",scroll:{x:!0},pagination:{total:e.state.projectPagination.total,current:e.state.projectPagination.current,pageSize:e.state.projectPagination.pageSize,simple:e.state.projectPagination.simple,size:e.state.projectPagination.size,defaultPageSize:e.state.projectPagination.defaultPageSize,showSizeChanger:e.state.projectPagination.showSizeChanger,pageSizeOptions:e.state.projectPagination.pageSizeOptions,showTotal:e.state.projectPagination.showTotal,onChange:e.onProjectPageChange,onShowSizeChange:e.onProjectPageSizeChange},columns:e.state.projectTableColumns,dataSource:e.state.projectTableData},{customerSmallGiftReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),qySaleBigGiftReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),saleGoldenEggsGiftReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),fixedAssetsReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),consumerGoodsReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),otherReserve:Object(n["withCtx"])((function(e){var t=e.text;return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.reserveName+"x"+e.reserveNum+"  "),1)],64)})),128))]})),_:1},8,["pagination","columns","dataSource"]),[[n["vShow"],!e.state.delayLoading]])]})),_:1},8,["spinning"])])]})),_:1})]})),_:1},8,["onChange"])])}a("380f");var d=a("f64c"),b=(a("96cf"),a("1da1")),g=a("0613"),j=a("48b8"),m=a("b32d"),O=Object(n["defineComponent"])({setup:function(){var e={staffTableColumns:[{title:"员工姓名",dataIndex:"staffName",align:"center",slots:{customRender:"staffName"}},{title:"员工角色",dataIndex:"staffRoleNames",align:"center",slots:{customRender:"staffRoleNames"}},{title:"拓展类",dataIndex:"expandReserve",align:"center",slots:{customRender:"expandReserve"}},{title:"经理送礼",dataIndex:"projectManageReserve",align:"center",slots:{customRender:"projectManageReserve"}},{title:"固定资产",dataIndex:"fixedAssetsReserve",align:"center",slots:{customRender:"fixedAssetsReserve"}},{title:"公司发展",dataIndex:"companyReserve",align:"center",slots:{customRender:"companyReserve"}},{title:"其他",dataIndex:"otherReserve",align:"center",slots:{customRender:"otherReserve"}}],staffTableData:[],delayLoading:!0,staffPagination:{total:0,simple:!1,current:1,pageSize:10,size:"default",defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:["10","30","50","100"],showTotal:function(e){return"共有 ".concat(e," 条数据")}},searchForm:{staffName:"",projectName:""},projectTableColumns:[{title:"项目名称",dataIndex:"projectName",align:"center",slots:{customRender:"projectName"}},{title:"业主小礼包",dataIndex:"customerSmallGiftReserve",align:"center",slots:{customRender:"customerSmallGiftReserve"}},{title:"签约大礼品",dataIndex:"qySaleBigGiftReserve",align:"center",slots:{customRender:"qySaleBigGiftReserve"}},{title:"金蛋礼品",dataIndex:"saleGoldenEggsGiftReserve",align:"center",slots:{customRender:"saleGoldenEggsGiftReserve"}},{title:"固定资产",dataIndex:"fixedAssetsReserve",align:"center",slots:{customRender:"fixedAssetsReserve"}},{title:"销售日常消耗",dataIndex:"consumerGoodsReserve",align:"center",slots:{customRender:"consumerGoodsReserve"}},{title:"其他",dataIndex:"otherReserve",align:"center",slots:{customRender:"otherReserve"}}],projectTableData:[],projectPagination:{total:0,simple:!1,current:1,pageSize:10,size:"default",defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:["10","30","50","100"],showTotal:function(e){return"共有 ".concat(e," 条数据")}},userInfo:{userId:"",loginName:"",realName:"",phone:"",companyId:"",companyName:"",headCompany:null},companyList:[],actions:[],companyId:"",tabKey:1},t=Object(n["reactive"])(e),a=Object(g["c"])();t.userInfo=a.state.baseInfo.userInfo,t.companyId=t.userInfo.companyId,t.companyId=1==t.userInfo.headCompany?"allData":t.companyId,t.companyList=a.state.baseInfo.companyList,t.actions=JSON.parse(sessionStorage.currentActions),Object(j["b"])(t.actions);var r=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(a,n,r){var o,c,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,"allData"!=t.companyId){e.next=31;break}if(!r){e.next=17;break}return e.next=5,m["a"].post("Reserve/staffReserveDetailStatistics",{page:a,rows:n},{params:{staffName:r.staffName,projectName:r.projectName}});case 5:if(o=e.sent,"000000"!=o.code){e.next=13;break}return t.staffTableData=o.data.list,t.staffPagination.total=o.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 13:return d["a"].error(o.msg,1),e.abrupt("return",!1);case 15:e.next=29;break;case 17:return e.next=19,m["a"].post("Reserve/staffReserveDetailStatistics",{params:{page:a,rows:n}});case 19:if(c=e.sent,"000000"!=c.code){e.next=27;break}return t.staffTableData=c.data.list,t.staffPagination.total=c.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 27:return d["a"].error(c.msg,1),e.abrupt("return",!1);case 29:e.next=58;break;case 31:if(!r){e.next=46;break}return e.next=34,m["a"].post("Reserve/staffReserveDetailStatistics",{page:a,rows:n},{params:{companyId:t.companyId,staffName:r.staffName,projectName:r.projectName}});case 34:if(s=e.sent,"000000"!=s.code){e.next=42;break}return t.staffTableData=s.data.list,t.staffPagination.total=s.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 42:return d["a"].error(s.msg,1),e.abrupt("return",!1);case 44:e.next=58;break;case 46:return e.next=48,m["a"].post("Reserve/staffReserveDetailStatistics",{page:a,rows:n},{params:{companyId:t.companyId}});case 48:if(i=e.sent,"000000"!=i.code){e.next=56;break}return t.staffTableData=i.data.list,t.staffPagination.total=i.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 56:return d["a"].error(i.msg,1),e.abrupt("return",!1);case 58:e.next=63;break;case 60:throw e.prev=60,e.t0=e["catch"](0),e.t0;case 63:case"end":return e.stop()}}),e,null,[[0,60]])})));return function(t,a,n){return e.apply(this,arguments)}}(),o=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(a,n,r){var o,c,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,"allData"!=t.companyId){e.next=31;break}if(!r){e.next=17;break}return e.next=5,m["a"].post("Reserve/projectReserveDetailStatistics",{page:a,rows:n},{params:{staffName:r.staffName,projectName:r.projectName}});case 5:if(o=e.sent,"000000"!=o.code){e.next=13;break}return t.projectTableData=o.data.list,t.projectPagination.total=o.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 13:return d["a"].error(o.msg,1),e.abrupt("return",!1);case 15:e.next=29;break;case 17:return e.next=19,m["a"].post("Reserve/projectReserveDetailStatistics",{params:{page:a,rows:n}});case 19:if(c=e.sent,"000000"!=c.code){e.next=27;break}return t.projectTableData=c.data.list,t.projectPagination.total=c.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 27:return d["a"].error(c.msg,1),e.abrupt("return",!1);case 29:e.next=58;break;case 31:if(!r){e.next=46;break}return e.next=34,m["a"].post("Reserve/projectReserveDetailStatistics",{page:a,rows:n},{params:{companyId:t.companyId,staffName:r.staffName,projectName:r.projectName}});case 34:if(s=e.sent,"000000"!=s.code){e.next=42;break}return t.projectTableData=s.data.list,t.projectPagination.total=s.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 42:return d["a"].error(s.msg,1),e.abrupt("return",!1);case 44:e.next=58;break;case 46:return e.next=48,m["a"].post("Reserve/projectReserveDetailStatistics",{page:a,rows:n},{params:{companyId:t.companyId}});case 48:if(i=e.sent,"000000"!=i.code){e.next=56;break}return t.projectTableData=i.data.list,t.projectPagination.total=i.data.total,t.delayLoading=!1,e.abrupt("return",!0);case 56:return d["a"].error(i.msg,1),e.abrupt("return",!1);case 58:e.next=63;break;case 60:throw e.prev=60,e.t0=e["catch"](0),e.t0;case 63:case"end":return e.stop()}}),e,null,[[0,60]])})));return function(t,a,n){return e.apply(this,arguments)}}();r(t.staffPagination.current,t.staffPagination.pageSize);var c=function(){t.delayLoading=!0,r(t.staffPagination.current,t.staffPagination.pageSize),o(t.projectPagination.current,t.projectPagination.pageSize)},s=function(){t.delayLoading=!0,r(t.staffPagination.current,t.staffPagination.pageSize,t.searchForm),o(t.projectPagination.current,t.projectPagination.pageSize,t.searchForm)},i=function(e){"1"==e?(t.delayLoading=!0,t.tabKey=1,r(t.staffPagination.current,t.staffPagination.pageSize)):(t.delayLoading=!0,t.tabKey=2,o(t.projectPagination.current,t.projectPagination.pageSize))},l=function(e,a){t.delayLoading=!0,t.searchForm?r(e,a,t.searchForm):r(e,a),t.staffPagination.current=e,t.staffPagination.pageSize=a},u=function(e,a){t.delayLoading=!0,t.searchForm?r(e,a,t.searchForm):r(e,a),t.staffPagination.pageSize=a},p=function(e,a){t.delayLoading=!0,t.searchForm?o(e,a,t.searchForm):o(e,a),t.staffPagination.current=e,t.staffPagination.pageSize=a},f=function(e,a){t.delayLoading=!0,t.searchForm?o(e,a,t.searchForm):o(e,a),t.staffPagination.pageSize=a};return{state:t,onClickSearch:s,onStaffPageChange:l,onStaffPageSizeChange:u,onProjectPageChange:p,onProjectPageSizeChange:f,onTabsClick:i,FormatDate:j["a"],onCompanySelectChange:c}}});O.render=f;t["default"]=O},"48b8":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));a("ac1f"),a("5319");var n=a("6c02"),r=function(e){if(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),c=t.getMinutes(),s=t.getSeconds(),i="",l="",u="",p="",f="",d="";return i=a+"",l=n<10?"0"+n:n+"",u=r<10?"0"+r:r+"",p=o<10?"0"+o:o+"",f=c<10?"0"+c:c+"",d=s<10?"0"+s:s+"",i+"-"+l+"-"+u+" "+p+":"+f+":"+d}return null},o=function(e){var t=Object(n["e"])();if(!(e.length<1))return!0;t.replace("/error/role")}}}]);