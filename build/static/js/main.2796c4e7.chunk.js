(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],Array(27).concat([function(e,t,a){e.exports=a.p+"static/media/slide_1.47b3dbf1.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide_2.0f856909.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide_3.8fc0655b.jpg"},function(e,t,a){e.exports=a.p+"static/media/slide_4.aac08136.jpg"},function(e,t,a){e.exports=a.p+"static/media/banner_1.77f316be.jpg"},function(e,t,a){e.exports=a.p+"static/media/banner_2.5bc6413e.jpg"},function(e,t,a){e.exports=a.p+"static/media/banner_3.eaccd3da.jpg"},function(e,t,a){e.exports=a.p+"static/media/banner_4.cd9c30ea.jpg"},function(e,t,a){e.exports=a.p+"static/media/banner_5.2090cd6c.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_1.13228f5e.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_2.16a38b2c.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_4.d5999b68.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_3.2ee0ccab.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_5.061ba9e1.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_6.eb62cf9a.jpg"},,,,function(e,t,a){e.exports=a(65)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(26),s=a.n(i),o=a(5),c=a(6),l=a(3),u=a(7),m=a(8),d=(a(50),a(27)),p=a.n(d),g=a(28),E=a.n(g),f=a(29),y=a.n(f),v=a(30),h=a.n(v),b=(a(51),a(4)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).hoverTagEvent=function(e){b.a.remove(e.target),b.a.timeline({targets:e.target}).add({translateX:[0,-300],opacity:[1,0],easing:"easeInExpo",duration:500,delay:function(e,t){return 100*t}}).add({translateX:[350,0],opacity:[0,1],easing:"easeOutExpo",duration:1100,delay:function(e,t){return 100*t}})},a.stop=function(){var e=a.state.timer;clearInterval(e)},a.start=function(){a.setState({timer:setInterval((function(){a.next()}),1e3)})},a.change=function(e){var t=a.state.showIndex;t=e,a.setState({showIndex:t})},a.previous=function(){var e=a.state,t=e.showIndex,n=e.imgs;t<=0?t=n.length-1:t--,a.setState({showIndex:t})},a.next=function(){var e=a.state,t=e.showIndex;t===e.imgs.length-1?t=0:t++,a.setState({showIndex:t})},a.getIntroduction=function(e){switch(e){case 0:return r.a.createElement("div",null," ",r.a.createElement("h6",{onMouseEnter:a.hoverTagEvent},"Travel"),"\u591a\u4e8b\u4e4b\u79cb\uff0c\u8036\u8def\u6492\u51b7\u7684\u5929\u7a7a\u3002\u7834\u788e\u7684\u68a6\uff0c\u5e94\u8bb8\u4e4b\u5730\u6d88\u5931\u4e2d\u3002\u4f60\u7684\u773c\u775b\u91cc\u7a76\u7adf\u6709\u591a\u5c11\u65e0\u5948\u3002");case 1:return r.a.createElement("div",null,r.a.createElement("h6",{onMouseEnter:a.hoverTagEvent},"Study"),"\u672b\u65e5\u4e4b\u540e\uff0c\u8c01\u8fd8\u80fd\u7275\u8d77\u6211\u7684\u624b\u3002 \u4ec7\u6068\u968f\u98ce\uff0c\u5e26\u8d70\u4f24\u5e26\u8d70\u6211\u7684\u773c\u6cea\u3002");case 2:return r.a.createElement("div",null,r.a.createElement("h6",{onMouseEnter:a.hoverTagEvent},"Experience"),"\u5e9f\u589f\u4e4b\u4e2d\uff0c\u6587\u660e\u548c\u4e16\u754c\u652f\u79bb\u7834\u788e\u3002\u79cb\u98ce\u8427\u745f\uff0c\u4e3a\u7231\u6d41\u7684\u8840\u5370\u5728\u8fd9\u7edd\u7231\u4e4b\u57ce\u3002");case 3:return r.a.createElement("div",null,r.a.createElement("h6",{onMouseEnter:a.hoverTagEvent},"New Idea"),"\u5982\u6709\u672a\u6765\uff0c\u4e07\u6c34\u5343\u5c71\u4f60\u613f\u610f\u966a\u6211\u4e00\u8d77\u8d70\u5417\uff1f\u8bb0\u5fc6\u5149\u5e74\uff0c\u9648\u65e7\u5f80\u4e8b\u90fd\u4ed8\u7b11\u8c08\u3002");default:return r.a.createElement("div",null)}},a.state={imgs:[p.a,E.a,y.a,h.a],showIndex:0,timer:null,show:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.start()}},{key:"componentWillMount",value:function(){this.stop()}},{key:"render",value:function(){var e=this,t=this.state,a=t.imgs,n=t.showIndex;return r.a.createElement("section",{className:"banner-container",id:"main-banner",style:{}},r.a.createElement("div",{className:"banner-words"},r.a.createElement("h2",{className:"banner-title"},r.a.createElement("div",{onMouseEnter:this.hoverTagEvent},"Hello I'm Xiaoyang")," "),r.a.createElement("h2",{className:"banner-title"},r.a.createElement("div",{onMouseOver:this.hoverTagEvent},"I'm a Web Designer"))),r.a.createElement("div",{className:"banner-sliders",onMouseOver:function(){e.stop()},onMouseLeave:function(){e.start()}},r.a.createElement("ul",{className:"banner-images"},a.map((function(e,t){return r.a.createElement("li",{key:t,className:t===n?"active":" hide"},r.a.createElement("img",{src:e,alt:"alt"}))}))),r.a.createElement("div",{className:"banner-introduction"},r.a.createElement("div",{className:"banner-introduction__group"},r.a.createElement("ul",{className:"banner-descriptions",style:{height:20*a.length+"px"}},a.map((function(t,a){return r.a.createElement("li",{key:a,className:a===n?"active":" hide"},e.getIntroduction(a))}))),r.a.createElement("ul",{className:"banner-dots"},a.map((function(t,a){return r.a.createElement("li",{key:a,className:a===n?"active":" ",onClick:function(){e.change(a)}})})))))))}}]),t}(r.a.Component),O=(a(53),a(17)),k=(a(23),a(31)),x=a.n(k),N=a(32),M=a.n(N),C=a(33),_=a.n(C),I=a(34),w=a.n(I),B=a(35),T=a.n(B),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).sideBarOnMouseEnter=function(e){b.a.remove(e.target),b.a.timeline({}).add({targets:e.target,rotate:{value:-180},duration:500,easing:"easeInExpo",delay:function(e,t){return 30*t}}).add({targets:e.target,rotate:{value:180},duration:500,easing:"easeOutExpo",delay:function(e,t){return 30*t}})},a.sideBarOnClick=function(e){b.a.remove(e.target);var t=a.state.show;t=!t,document.getElementById("nav-menu").style.display=t?"flex":"none",document.getElementById("main-page").style.display=t?"none":"block",document.getElementById("header").style.overflow=t?"hidden":"scroll",document.getElementById("take-cover").style.display=t?"block":"none",a.setState({show:t}),b.a.timeline({}).add({targets:".sidebar-button",rotate:t?{value:90}:{value:180},duration:500,easing:"easeInExpo",delay:function(e,t){return 30*t}}).add({targets:".side",width:t?["0px","100%"]:["100%","6.785rem"],offset:"-=500"}).add({targets:".nav-menu",width:t?["0px","100%"]:["100%","0px"]}).add({targets:".menu-category",translateX:[-800,0],opacity:[0,1]}).add({targets:".menu-category .menu-stretch ul li",rotate:{value:360},opacity:[0,1],delay:function(e,t){return 30*t}})},a.iconOnMouseEnter=function(e){b.a.remove(e.target),b.a.timeline({}).add({targets:e.target,rotate:{value:-180},duration:500,easing:"easeInExpo",delay:function(e,t){return 30*t}}).add({targets:e.target,rotate:{value:0},scale:1,duration:500,easing:"easeOutExpo",delay:function(e,t){return 30*t}})},a.iconOnClick=function(e){b.a.remove(e.target),b.a.timeline({}).add({targets:e.target,rotate:{value:-180},duration:500,easing:"easeInExpo",delay:function(e,t){return 30*t}}).add({targets:e.target,rotate:{value:0},duration:500,easing:"easeOutExpo",delay:function(e,t){return 30*t}})},a.subTitleOnClick=function(e,t){var n=a.state.display;b.a.remove(e.target),(n=n.map((function(e,t){return!1})))[t]=!0,a.setState({display:n}),b.a.timeline({targets:e.target}).add({translateX:[0,100],easing:"easeInExpo",scale:1.2,duration:100,delay:function(e,t){return 30*t}}).add({targets:".take-cover",translateX:[0,1e3],duration:1200,easing:"easeInExpo"}).add({translateX:[100,0],scale:1,easing:"easeOutExpo",duration:500,delay:function(e,t){return 30*t},offset:"+=600"})},a.subTitleOnLeave=function(e){b.a.timeline({targets:e.target}).add({targets:".take-cover",translateX:[1e3,0],duration:600,easing:"easeInExpo"})},a.state={show:!1,imgs:[x.a,M.a,_.a,w.a,T.a],display:[!1,!1,!1,!1,!1],imgsClassName:["banner_1","banner_2","banner_3","banner_4","banner_5"],words:["Introduction","Travel","Projects","Experience","MyLife"],icons:[r.a.createElement(O.a,{onClick:a.iconOnClick,onMouseEnter:a.iconOnMouseEnter}),r.a.createElement(O.e,{onClick:a.iconOnClick,onMouseEnter:a.iconOnMouseEnter}),r.a.createElement(O.d,{onClick:a.iconOnClick,onMouseEnter:a.iconOnMouseEnter}),r.a.createElement(O.c,{onClick:a.iconOnClick,onMouseEnter:a.iconOnMouseEnter}),r.a.createElement(O.b,{onClick:a.iconOnClick,onMouseEnter:a.iconOnMouseEnter})]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.show;document.getElementById("nav-menu").style.display=e?"flex":"none",document.getElementById("main-banner").style.display=e?"none":"block",document.getElementById("header").style.overflowY=e?"hidden":"scroll",document.getElementById("take-cover").style.display=e?"block":"none"}},{key:"render",value:function(){var e=this,t=this.state,a=t.imgs,n=t.icons,i=t.words,s=t.imgsClassName,o=t.display;return r.a.createElement("section",{className:"side",id:"side"},r.a.createElement("aside",{className:"side-bar"},r.a.createElement("div",{className:"sidebar-button",onClick:this.sideBarOnClick,onMouseEnter:function(t){e.sideBarOnMouseEnter(t)}},r.a.createElement("div",{className:"sidebar-button__line"}),r.a.createElement("div",{className:"sidebar-button__line"}),r.a.createElement("div",{className:"sidebar-button__line"}))),r.a.createElement("nav",{className:"nav-menu ",id:"nav-menu",style:{}},r.a.createElement("div",{className:"menu-category"},r.a.createElement("div",{className:"menu-stretch"},n.map((function(t,a){return r.a.createElement("a",{key:a,href:"#study",className:"menu-item",onMouseEnter:function(t){e.subTitleOnClick(t,a)}},t,r.a.createElement("div",{style:o[a]?{fontWeight:600}:{fontWeight:200}},i[a]))})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"inline"},r.a.createElement("i",{className:"fa fa-facebook",onClick:this.iconOnClick,onMouseEnter:this.iconOnMouseEnter}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"inline"},r.a.createElement("i",{className:"fa fa-twitter",onClick:this.iconOnClick,onMouseEnter:this.iconOnMouseEnter}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"inline"},r.a.createElement("i",{className:"fa fa-snapchat",onClick:this.iconOnClick,onMouseEnter:this.iconOnMouseEnter}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"inline"},r.a.createElement("i",{className:"fa fa-instagram",onClick:this.iconOnClick,onMouseEnter:this.iconOnMouseEnter})," ")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"inline"},r.a.createElement("i",{className:"fa fa-youtube",onClick:this.iconOnClick,onMouseEnter:this.iconOnMouseEnter}))))),r.a.createElement("ul",{className:"inner-container"},r.a.createElement("li",{className:"take-cover",id:"take-cover"}),a.map((function(t,a){return r.a.createElement("li",{key:a,className:s[a]+" pictures",onMouseEnter:e.subTitleOnLeave,style:o[a]?{opacity:1}:{opacity:0}},r.a.createElement("img",{src:t,alt:"alt"}))}))))))}}]),t}(r.a.Component),X=(a(54),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={storyTime:["2017","2018","2019","2020"],storyTitle:["Start New Life","Who Am I","In me Tiger","Strive for Future"],storyBrief:["\u6211\u60f3\u8981\u8d5a\u94b1\u642c\u5230\u5e02\u4e2d\u5fc3\uff0c\u4f60\u60f3\u8981\u8d5a\u94b1\u642c\u5230\u5e02\u4e2d\u5fc3\uff0c\u4ed6\u60f3\u8981\u8d5a\u94b1\u642c\u5230\u5e02\u4e2d\u5fc3\u3002","\u8fd9\u4e2a\u5e74\u4ee3\u7b11\u8d2b\u4e0d\u7b11\u5a3c\uff0c\u6bd4\u8f83\u66b4\u529b\u6bd4\u8f83\u9ec4\u3002\u4f60\u53ea\u8981\u623f\u5b50\u4e0d\u8981\u7a97\uff0c \u65e0\u795e\u8bba\u8005\u5f00\u6559\u5802","\u6211\u8ba8\u538c\u7a7f\u5236\u670d\u6211\u8ba8\u538c\u5b66\u6821\u7684\u5236\u5ea6\uff0c\u6211\u8ba8\u538c\u5b66\u6821\u8001\u5e08\u7684\u5634\u8138\u8ba8\u538c\u88ab\u675f\u7f1a\u3002","\u4f60\u53ef\u66fe\u56f0\u60d1\u5728\u4f60\u8eab\u65c1\u8c01\u662f\u654c\u662f\u53cb\uff0c\u5bf9\u4f60\u843d\u4e95\u4e0b\u77f3\u7684\u53ef\u80fd\u5c31\u662f\u4f60\u7684\u631a\u53cb"],storyPicture:["http://pic.netbian.com/uploads/allimg/190322/225206-15532663266fdc.jpg","https://data.1freewallpapers.com/detail/sci-fi-city-on-the-ocean.jpg","https://images.alphacoders.com/208/thumb-1920-208681.jpg","https://www.10wallpaper.com/wallpaper/1366x768/1201/Final_Fantasy_XIII-2_Game_HD_Wallpaper_10_1366x768.jpg"]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.storyBrief,a=e.storyTime,n=e.storyTitle,i=e.storyPicture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"timeline-banner"},"My TimeLine"),r.a.createElement("section",{id:"timeline"},t.map((function(e,s){return r.a.createElement("div",{className:"tl-item",key:s},r.a.createElement("div",{className:"tl-bg",style:{backgroundImage:"url(".concat(i[s],")")}}),r.a.createElement("div",{className:"tl-year"},r.a.createElement("p",{className:"f2 heading--sanSerif"},a[s])),r.a.createElement("div",{className:"tl-content"},r.a.createElement("h1",null,n[s]),r.a.createElement("p",null,t[s])))}))))}}]),t}(r.a.Component)),L=(a(55),n.Component,a(56),a(57),a(36)),Y=a.n(L),P=a(37),D=a.n(P),F=a(38),W=a.n(F),A=a(39),G=a.n(A),H=a(40),J=a.n(H),z=a(41),R=a.n(z),q=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={projectName:["Html5 Phaser Game","Meal Recommender(New Meal)","JavaFx Game(Let's Amazing)","Shield Tasker Application","Blossom Season Blog Site","Xiao's Mall(Shopping mall)"],projectPictures:[Y.a,D.a,G.a,W.a,J.a,R.a],backgroundColors:["#9B308C","#080822","#6B554C","#519960","#003D6C","#00B6FF"],currBackgroundColor:"#9B308C",currProjectIndex:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.projectName,n=t.projectPictures,i=t.currBackgroundColor,s=t.backgroundColors,o=t.currProjectIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"timeline-banner"},"My Projects"),r.a.createElement("section",{className:"myprojects",style:{backgroundColor:"".concat(i)},onMouseLeave:function(e){b.a.remove(".myprojects-images"),b.a.timeline({targets:".myprojects-images"}).add({translateX:[0],translateY:[0],scale:1,duration:500,elasticity:300})},onMouseMove:function(e){var t={x:e.pageX?e.pageX:document.body.scrollLeft-document.body.clientLeft,y:e.pageY?e.pageY:document.body.scrollLeft-document.body.clientTop};console.log(t),b.a.remove(".myprojects-images"),t.x>1250&&t.y<350?b.a.timeline({targets:".myprojects-images"}).add({translateX:[0,60],translateY:[0,-60],scale:.85,duration:2e3,elasticity:300}):t.x>1250&&t.y>750?b.a.timeline({targets:".myprojects-images"}).add({translateX:[0,60],translateY:[0,60],scale:.85,duration:2e3,elasticity:300}):t.x<650&&t.y<350?b.a.timeline({targets:".myprojects-images"}).add({translateX:[0,-100],translateY:[0,-60],scale:.85,duration:2e3,elasticity:300}):t.x<650&&t.y>750?b.a.timeline({targets:".myprojects-images"}).add({translateX:[0,-100],translateY:[0,60],scale:.85,duration:2e3,elasticity:300}):b.a.timeline({targets:".myprojects-images"}).add({translateX:[0],translateY:[0],scale:1,duration:2e3})}},r.a.createElement("div",{className:"myprojects-nav"},a.map((function(t,a){return r.a.createElement("p",{key:a,className:"myprojects-tags",onMouseOver:function(t){e.setState({currBackgroundColor:s[a],currProjectIndex:a}),t.currentTarget.style.opacity="1"},onMouseOut:function(e){e.currentTarget.style.opacity="0.5"}},t)}))),r.a.createElement("div",{className:"myprojects-banner"},r.a.createElement("img",{className:"myprojects-images",src:n[o],alt:"Alternate Text"}))))}}]),t}(r.a.Component)),K=(a(59),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollDown=function(){var e=window.scrollY;console.log(e),e>180?(a.setState({titleBig:"food-banner__title1 to-animate"}),a.setState({titleSub:"food-banner__title2 to-animate"})):(a.setState({titleBig:"food-banner__title1"}),a.setState({titleSub:"food-banner__title2"}))},a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollDown),document.addEventListener("DOMContentLoaded",(function(){b.a.timeline({easing:"easeOutExpo"}).add({targets:".sidebar-button__line",translateX:[-500,0],opacity:[0,1],duration:800}).add({targets:".banner-words",width:["0px","100%"]}).add({targets:".banner-title div",translateX:[-300,0],opacity:[0,1],easing:"easeInExpo",duration:500,offset:"-=100"}).add({targets:".banner-sliders",translateY:[800,0],opacity:[0,1],duration:1e3,offset:"+=1000"}).add({targets:".banner-descriptions li",translateX:[-300,0],opacity:[0,1],easing:"easeInExpo",duration:500,offset:"+=100"}).add({targets:".banner-dots li",opacity:[0,1],easing:"easeOutExpo",duration:600,offset:"+=100"})}))}},{key:"render",value:function(){return r.a.createElement("header",{className:"header",id:"header"},r.a.createElement(S,null),r.a.createElement("div",{className:"main-page",id:"main-page"},r.a.createElement(j,null),r.a.createElement(X,null),r.a.createElement(q,null)))}}]),t}(r.a.Component)),Q=(r.a.Component,a(42)),U=a(14),V=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Q.a,null,r.a.createElement(U.a,{path:"/",component:K}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(V,null),document.getElementById("root"))}]),[[45,1,2]]]);
//# sourceMappingURL=main.2796c4e7.chunk.js.map