(this["webpackJsonpantd-staubli"]=this["webpackJsonpantd-staubli"]||[]).push([[0],{108:function(t,e,a){},135:function(t,e){},136:function(t,e){},137:function(t,e){},138:function(t,e){},139:function(t,e){},142:function(t,e,a){},218:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(28),c=a.n(s),o=(a(108),a(87)),d=a(88),r=a(102),u=a(100),l=a.p+"static/media/logo.6ce24c58.svg",p=a.p+"static/media/tx2-40.4d0c74db.jpg",j=a.p+"static/media/tx2-90.e6cacdc0.jpg",g=a.p+"static/media/tx2-40.55c188b1.pdf",b=a.p+"static/media/tx2-90.0f662e5a.pdf",f=a(224),m=a(222),x=a(225),h=a(226),O=a(227),v=(a(217),a(142),a(22)),k=[{title:"TX2-40",image:p,specs:g},{title:"TX2-90",image:j,specs:b}],I=function(t){var e=t.icon,a=t.text;return Object(v.jsxs)(f.b,{children:[i.a.createElement(e),a]})},q=function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(o.a)(this,a),(n=e.call(this,t)).onMessageReceived=function(t){t.data.taskId===n.state.taskIdRequestData&&n.update(t)},n.requestData=function(){window.parent.postMessage({iframe:n.state.id,taskId:n.state.taskIdRequestData,query:[{api:"/api/rd/v1/Configurator",function:"getModel",arguments:[{fakekey:"fakevalue"}]}],response:[],status:"request"},"https://eusb.webcomcpq.com/")},n.update=function(t){var e=t.data.response.find((function(t){return"/api/rd/v1/Configurator"===t.api&&"getModel"===t.function}));n.setState({loading:!1,data:e})};var i="antd-staubli-toggle";return n.state={loading:!0,id:i,taskIdRequestData:"".concat(i,"-requestData"),data:[]},window.addEventListener("message",n.onMessageReceived,!1),n.requestData(),n}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)("img",{src:l,className:"App-logo",alt:"logo",style:{height:"100px"}}),Object(v.jsxs)("div",{className:"App",children:[this.state.loading&&Object(v.jsx)("span",{children:"loading data..."}),!this.state.loading&&Object(v.jsx)("span",{children:"loaded!"}),Object(v.jsx)(m.b,{grid:{gutter:16,column:2},dataSource:k,renderItem:function(t){return Object(v.jsx)(m.b.Item,{style:{"background-color":"white"},actions:[Object(v.jsx)(I,{icon:x.a,text:"156"},"list-vertical-star-o"),Object(v.jsx)(I,{icon:h.a,text:"156"},"list-vertical-like-o"),Object(v.jsx)(I,{icon:O.a,text:"2"},"list-vertical-message")],extra:Object(v.jsx)("img",{width:"200",height:"200",style:{"mix-blend-mode":"multiply"},src:t.image}),children:Object(v.jsx)(m.b.Item.Meta,{title:Object(v.jsx)("a",{children:t.title})})})}})]})]})})}}]),a}(i.a.Component),w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),n(t),i(t),s(t),c(t)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root")),w()},76:function(t,e){}},[[218,1,2]]]);
//# sourceMappingURL=main.da0a4175.chunk.js.map