(this["webpackJsonpantd-staubli"]=this["webpackJsonpantd-staubli"]||[]).push([[0],{112:function(t,e,a){},139:function(t,e){},140:function(t,e){},141:function(t,e){},142:function(t,e){},143:function(t,e){},146:function(t,e,a){},222:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(28),c=a.n(i),r=(a(112),a(90)),o=a(91),d=a(105),u=a(103),l=a.p+"static/media/logo.6ce24c58.svg",p=a(225),g=(a(221),a(226)),f=(a(146),a(25)),b=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(r.a)(this,a),(n=e.call(this,t)).onMessageReceived=function(t){t.data.taskId===n.state.taskIdRequestData&&n.update(t)},n.requestData=function(){window.parent.postMessage({iframe:n.state.id,taskId:n.state.taskIdRequestData,query:[{api:"/api/rd/v1/Configurator",function:"getModel",arguments:[{fakekey:"fakevalue"}]}],response:[],status:"request"},"https://eusb.webcomcpq.com/")},n.update=function(t){var e=t.data.response.find((function(t){return"/api/rd/v1/Configurator"===t.api&&"getModel"===t.function}));n.setState({loading:!1,data:e.data})};var s="antd-staubli-toggle";return n.state={loading:!0,id:s,taskIdRequestData:"".concat(s,"-requestData"),data:[]},window.addEventListener("message",n.onMessageReceived,!1),n.requestData(),n}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:l,className:"App-logo",alt:"logo",style:{height:"100px"}}),Object(f.jsxs)("div",{className:"App",children:[this.state.loading&&Object(f.jsx)("span",{children:"loading data..."}),!this.state.loading&&Object(f.jsx)(p.b,{dataSource:this.state.data.Attributes,grid:{gutter:0,column:3},renderItem:function(t){return Object(f.jsx)(p.b,{dataSource:t.Values,header:t.Label,renderItem:function(t){return Object(f.jsx)(p.b.Item,{children:Object(f.jsx)(g.a,{checkedChildren:t.ValueDisplay,unCheckedChildren:t.ValueDisplay})})}})}})]})]})})}}]),a}(s.a.Component),h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),h()},79:function(t,e){}},[[222,1,2]]]);
//# sourceMappingURL=main.c0c115e7.chunk.js.map