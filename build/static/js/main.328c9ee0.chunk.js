(this["webpackJsonpantd-staubli"]=this["webpackJsonpantd-staubli"]||[]).push([[0],{110:function(t,e,a){},137:function(t,e){},138:function(t,e){},139:function(t,e){},140:function(t,e){},141:function(t,e){},219:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(27),c=a.n(i),r=(a(110),a(66)),u=a(88),d=a(89),o=a(103),l=a(101),b=a.p+"static/media/logo.6ce24c58.svg",g=a(222),h=(a(218),a(223)),j=(a.p,a(24)),p=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var n;Object(u.a)(this,a),(n=e.call(this,t)).onMessageReceived=function(t){t.data.taskId===n.state.taskIdRequestData&&n.update(t)},n.requestData=function(){window.parent.postMessage({iframe:n.state.id,taskId:n.state.taskIdRequestData,query:[{api:"/api/rd/v1/Configurator",function:"getModel",arguments:[{fakekey:"fakevalue"}]}],response:[],status:"request"},"https://eusb.webcomcpq.com/")},n.update=function(t){var e=t.data.response.find((function(t){return"/api/rd/v1/Configurator"===t.api&&"getModel"===t.function}));n.setState({loading:!1,data:e.data})};var s="antd-staubli-toggle";return n.state={loading:!0,id:s,taskIdRequestData:"".concat(s,"-requestData"),data:[]},window.addEventListener("message",n.onMessageReceived,!1),n.requestData(),n}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:b,className:"App-logo",alt:"logo",style:{height:"100px"}}),Object(j.jsxs)("div",{className:"App",children:[this.state.loading&&Object(j.jsx)("span",{children:"loading data..."}),!this.state.loading&&Object(j.jsx)(g.b,{dataSource:this.state.data.Attributes,grid:{gutter:0,column:1},renderItem:function(t){return Object(j.jsx)(g.b,{dataSource:t.Values,grid:{gutter:0,column:4},header:t.Label,renderItem:function(t){return Object(j.jsx)(g.b.Item,{children:Object(j.jsx)(h.a,{checkedChildren:t.ValueDisplay,unCheckedChildren:t.ValueDisplay})})}})}}),!this.state.loading&&Object(j.jsx)(g.b,{dataSource:[].concat(Object(r.a)(this.state.data.Attributes[0].Values),Object(r.a)(this.state.data.Attributes[1].Values),Object(r.a)(this.state.data.Attributes[2].Values)),grid:{gutter:0,column:3},renderItem:function(e){return Object(j.jsx)(g.b.Item,{children:Object(j.jsx)(h.a,{checkedChildren:e.ValueDisplay,unCheckedChildren:e.ValueDisplay,className:t.state.data.Attributes.find((function(t){return t.Values.includes(e)})).Name.replace(/ /g,"")})})}})]})]})})}}]),a}(s.a.Component),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,225)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()},77:function(t,e){}},[[219,1,2]]]);
//# sourceMappingURL=main.328c9ee0.chunk.js.map