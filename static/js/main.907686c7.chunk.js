(this.webpackJsonpshare=this.webpackJsonpshare||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),s=a(1),o=a(2),l=a(4),h=a(3),u=a(5);a(13);function d(t,e,a){this.x=t,this.y=e,this.colorArr=["rgba(229,77,66,","rgba(243,123,29,","rgba(251,189,8,","rgba(141,198,63,","rgba(57,181,74,","rgba(28,187,180,","rgba(0,129,255,","rgba(103,57,182,","rgba(156,38,176,","rgba(224,57,151,"],this.init=function(){this.opacity=1.5,this.radius=Math.floor(3*Math.random())+2,this.dy=(1+Math.random())*(Math.floor(2*Math.random())?1:-1),this.dx=(1+Math.random())*(Math.floor(2*Math.random())?1:-1),this.color=this.colorArr[Math.floor(10*Math.random())]},this.chgDeg=function(t){t&&(Math.floor(2*Math.random())?this.dx*=5*Math.random()*.1:this.dy*=5*Math.random()*.1,Math.floor(2*Math.random())?this.dy*=1.5+5*Math.random()*.1:this.dx*=1.5+5*Math.random()*.1)},this.init(),this.chgDeg(Math.floor(2*Math.random())),this.draw=function(){a.beginPath(),a.arc(this.x,this.y,this.radius,0,2*Math.PI),a.fillStyle=this.color+this.opacity+")",a.fill(),this.x+=this.dx,this.y+=this.dy,this.dy+=.05,this.opacity-=.05}}var m=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(l.a)(this,Object(h.a)(e).call(this))).firework=function(e,a,n){for(var i=0;i<=49;i++)t.particleArr.push(new d(e,a,n))},t.animate=function(){requestAnimationFrame(t.animate),t.canvas.current.getContext("2d").clearRect(0,0,t.canvas.current.width,t.canvas.current.height);var e=!0,a=!1,n=void 0;try{for(var i,r=t.particleArr[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){i.value.draw()}}catch(c){a=!0,n=c}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}},t.canvas=i.a.createRef(),t.cx=null,t.particleArr=[],t}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.canvas.current;this.cx=e.getContext("2d"),e.height=window.innerHeight,e.width=window.innerWidth,this.animate(this.cx),window.onmousedown=function(e){t.firework(e.clientX,e.clientY,t.cx),setTimeout((function(){t.particleArr.splice(0,50)}),1e3)},window.onresize=function(){e.height=window.innerHeight,e.width=window.innerWidth}}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidShow",value:function(){}},{key:"componentDidHide",value:function(){}},{key:"render",value:function(){return i.a.createElement("canvas",{ref:this.canvas,id:"canvas"})}}]),e}(n.Component),v=(a(14),a(15),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={scrollTop:0,transDis:0,preTouch:0,animate:!1},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"handleTouchStart",value:function(t){this.setState({preTouch:t.touches[0].clientY,scrollTop:t.target.scrollTop})}},{key:"handleTouch",value:function(t){var e=this.state,a=e.scrollTop,n=e.transDis,i=e.preTouch,r=t.touches[0].clientY-i;0===a&&n<=40&&(n+.4*r<40?this.setState({transDis:n+.4*r}):this.setState({transDis:40})),this.setState({preTouch:t.touches[0].clientY,scrollTop:t.target.scrollTop})}},{key:"handleTouchEnd",value:function(){var t=this;40===this.state.transDis?this.setState({animate:!0},(function(){setTimeout((function(){t.setState({transDis:0,animate:!1})}),1e3)})):this.setState({transDis:0})}},{key:"render",value:function(){var t=this.state,e=t.transDis,a=t.animate,n={transform:"translateY("+2*e+"px)"};return i.a.createElement("div",{className:"pulldown"},i.a.createElement("div",{className:"animate",style:n},i.a.createElement("div",{className:"circle",style:a?{animation:"spaning 1s linear infinite"}:null})),i.a.createElement("div",{className:"con",onTouchStart:this.handleTouchStart.bind(this),onTouchMove:this.handleTouch.bind(this),onTouchEnd:this.handleTouchEnd.bind(this)},i.a.createElement("div",{className:"content"},"\u4e0b\u62c9\u5237\u65b0\u6211\u4e0d\u52a8"),i.a.createElement("div",{className:"content"},"2")))}}]),e}(n.Component)),f=(a(16),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={scrollTop:0,transDis:0,preTouch:0,animate:!1},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"handleTouchStart",value:function(t){this.setState({preTouch:t.touches[0].clientY,scrollTop:t.target.scrollTop})}},{key:"handleTouch",value:function(t){var e=this.state,a=e.scrollTop,n=e.transDis,i=e.preTouch,r=t.touches[0].clientY-i;0===a&&n<=40&&(n+.4*r<40?this.setState({transDis:n+.4*r}):this.setState({transDis:40})),this.setState({preTouch:t.touches[0].clientY,scrollTop:t.target.scrollTop})}},{key:"handleTouchEnd",value:function(){var t=this;40===this.state.transDis?this.setState({animate:!0},(function(){setTimeout((function(){t.setState({transDis:0,animate:!1})}),1e3)})):this.setState({transDis:0})}},{key:"render",value:function(){var t=this.state,e=t.transDis,a=t.animate,n={transform:"translateY(-"+(80-2*e)+"px)"};return i.a.createElement("div",{className:"pulldown1",style:n},i.a.createElement("div",{className:"animate1"},i.a.createElement("div",{className:"circle",style:a?{animation:"spaning 1s linear infinite"}:null})),i.a.createElement("div",{className:"con1",onTouchStart:this.handleTouchStart.bind(this),onTouchMove:this.handleTouch.bind(this),onTouchEnd:this.handleTouchEnd.bind(this)},i.a.createElement("div",{className:"content1"},"\u4e0b\u62c9\u5237\u65b0\u6211\u4e5f\u52a8"),i.a.createElement("div",{className:"content1"},"2")))}}]),e}(n.Component)),p=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={which:0},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"handlewhich",value:function(t){this.setState({which:t})}},{key:"render",value:function(){var t=this.state.which;return i.a.createElement("div",null,i.a.createElement("div",{className:"phone"},i.a.createElement("div",{className:"screen"},i.a.createElement("div",{className:"top-title"},i.a.createElement("div",{className:"hd"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("div",{className:"time"}," 10.10 PM"),i.a.createElement("div",{className:"battery"})),i.a.createElement("div",{className:"outline"},t?i.a.createElement(v,null):i.a.createElement(f,null)))),i.a.createElement("div",{className:"butch"},i.a.createElement("div",{onClick:this.handlewhich.bind(this,1)},"\u5355View"),i.a.createElement("div",{onClick:this.handlewhich.bind(this,0)},"\u53ccView")),i.a.createElement(m,null))}}]),e}(n.Component);c.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.907686c7.chunk.js.map