(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),m=n.n(i),o=(n(12),n(3)),c=n(4),l=n(6),s=n(5),u=function(e){var a=e.name,n=e.username,t=e.img;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:t,width:"300",alt:"Intro"}),r.a.createElement("h2",null,a),r.a.createElement("p",null,n))},g=function(e){var a=e.demo;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(u,{key:n,name:a[n].name,username:a[n].username,img:a[n].img})})))},d=[{id:1,name:"Intro",username:"\u81ea\u6211\u4ecb\u7d39",img:"./image/intro.PNG"},{id:2,name:"Table",username:"\u505a\u8868\u683c",img:"./image/table.PNG"},{id:3,name:"Blog",username:"\u6587\u7ae0",img:"./image/blog.PNG"},{id:4,name:"ImageGallery",username:"\u5716\u7247\u7684\u6392\u5e8f",img:"./image/imageGallery.PNG"},{id:5,name:"Div",username:"\u88fd\u4f5c\u5340\u57df\u4e26\u4e14\u80fd\u5920\u63db\u8272",img:"./image/div.PNG"},{id:6,name:"Nav",username:"\u5c0e\u822a\u6b04\u9023\u7d50\u7684\u5340\u57df",img:"./image/nav.PNG"},{id:7,name:"Tku60",username:"\u5f71\u7247\u9023\u63a5",img:"./image/tku60.PNG"},{id:8,name:"Tictactoe",username:"\u4e95\u5b57\u904a\u6232",img:"./image/tictactoe.PNG"},{id:9,name:"Monster",username:"\u6309\u653b\u64ca\u8207\u88dc\u8840\u64ca\u6557\u602a\u7378",img:"./image/monster.PNG"},{id:10,name:"Robofriends",username:"\u986f\u793a10\u5f35robot",img:"./image/robofriends.PNG"}],h=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search demos",onChange:a}))},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=(n(13),function(e){Object(l.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={demo:d,searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.demo.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.demo.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Demos"),r.a.createElement(h,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(g,{demo:a})))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);m.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.8dde0156.chunk.js.map