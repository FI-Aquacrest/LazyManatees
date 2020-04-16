(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{49:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),i=a.n(r),c=a(26),o=a(14),s=a(21),m=a.n(s),u=a(28),d=a(16),p=a(17),E=a(20),b=a(18),h=a(78),g=a(80),f=a(84),v=Object(h.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},Avatar:{height:"40px",width:"40px",float:"left"},text:{float:"left",marginTop:"12.5px",marginLeft:"5px"}}}));function k(e){var t=v(),a=new Date,r=a.getDate()+"."+(a.getMonth()+1)+"."+a.getFullYear(),i=e.userName[0];return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,e.blogTitle),l.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center"},l.a.createElement(g.a,{item:!0},l.a.createElement(f.a,{className:t.Avatar},i)),l.a.createElement(g.a,{item:!0},l.a.createElement("p",{className:t.text},"Written by ",e.userName,l.a.createElement("br",null),r))))}function w(e){return l.a.createElement("p",{style:{whiteSpace:"pre-line"}},e.blogPost)}var y=a(81),j=a(43),O=a.n(j),C=a(42),x=a.n(C),P=a(32),N=a.n(P),T=a(33),S=a.n(T),F=Object(h.a)((function(e){return{divider:{marginLeft:"15px",marginRight:"15px"}}}));function I(e){var t=F();return l.a.createElement("div",null,l.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center"},l.a.createElement(g.a,{item:!0},l.a.createElement(y.a,{"aria-label":"like",onClick:function(){e.likeCallback()}},l.a.createElement(N.a,null))),l.a.createElement(g.a,{item:!0},e.likes),l.a.createElement("div",{className:t.divider}),l.a.createElement(g.a,{item:!0},l.a.createElement(y.a,{"aria-label":"dislike",onClick:function(){e.dislikeCallback()}},l.a.createElement(S.a,null))),l.a.createElement(g.a,{item:!0},e.dislikes),l.a.createElement("div",{className:t.divider}),l.a.createElement(g.a,{item:!0},l.a.createElement(y.a,{"aria-label":"edit",onClick:function(){e.editPostCallback()}},l.a.createElement(x.a,null))),l.a.createElement("div",{className:t.divider}),l.a.createElement(g.a,{item:!0},l.a.createElement(y.a,{"aria-label":"delete",onClick:function(){e.deletePostCallback()}},l.a.createElement(O.a,null)))))}var L=a(82),A=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",writer:"",content:"",editPostId:null,editing:!1},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){void 0!==this.props.blogObject&&this.setState({title:this.props.blogObject.blogTitle,writer:this.props.blogObject.userName,content:this.props.blogObject.blogPost,editPostId:this.props.blogObject.id,editing:!0})}},{key:"titleChangeEvent",value:function(e){this.setState({title:e.target.value})}},{key:"writerChangeEvent",value:function(e){this.setState({writer:e.target.value})}},{key:"contentChangeEvent",value:function(e){this.setState({content:e.target.value})}},{key:"postCommand",value:function(){var e=this.state.writer,t=this.state.content,a=this.state.title;""===e||""===t||""===a?alert("Please make sure to fill all fields."):this.state.editing?fetch("/api/blogposts",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,blogPost:t,blogTitle:a,id:this.state.editPostId})}).then(alert("Post Updated")).then(window.location.href="/"+(this.state.editPostId-1)):fetch("/api/blogposts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,blogPost:t,blogTitle:a})}).then(alert("Post Saved")).then(window.location.href="/")}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("form",{id:"NewPostForm"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"title",value:this.state.title,style:{width:"50%"},onChange:this.titleChangeEvent.bind(this)}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"writer"},"Writer"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"writer",value:this.state.writer,onChange:this.writerChangeEvent.bind(this)}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"content"},"Content"),l.a.createElement("br",null),l.a.createElement("textarea",{id:"content",rows:"15",cols:"100",style:{whiteSpace:"pre-line"},value:this.state.content,onChange:this.contentChangeEvent.bind(this)}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(L.a,{variant:"contained",onClick:this.postCommand.bind(this)},"Post")))}}]),a}(n.Component),D=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isLoading:!0,blogObject:null,editing:!1},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/blogposts/"+this.props.postId);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({blogObject:a,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"editPostCallback",value:function(){this.setState({editing:!0})}},{key:"deletePostCallback",value:function(){window.confirm("Are you sure you want to delete this post?")&&fetch("/api/blogposts",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.blogObject)}).then(alert("Post deleted")).then(window.location.href="/")}},{key:"render",value:function(){var e=this.state,t=e.blogObject,a=e.isLoading,r=e.editing;if(a)return l.a.createElement("p",null,"Loading...");if(r)return l.a.createElement(A,{blogObject:t});if(void 0===t.userName)return l.a.createElement("p",null,"404");return l.a.createElement(n.Fragment,null,l.a.createElement(k,{blogTitle:t.blogTitle,userName:t.userName}),l.a.createElement("hr",null),l.a.createElement(w,{blogPost:t.blogPost}),l.a.createElement(I,{likes:11,dislikes:999,editPostCallback:this.editPostCallback.bind(this),deletePostCallback:this.deletePostCallback.bind(this)}))}}]),a}(n.Component),J=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isLoading:!0,blogObjects:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/blogposts/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({blogObjects:a,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this.state.blogObjects,t=[],a=0;a<e.length;a++){var l=Object(n.createElement)("a",{href:"/"+a},e[a].blogTitle),r=Object(n.createElement)("li",{},l);t[a]=r}return t}}]),a}(n.Component),M=a(83),U=Object(h.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary}}}));function W(e){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/new"},"New Post")))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/new"},l.a.createElement(H,null)),l.a.createElement(o.a,{exact:!0,path:"/:postId(\\d+)",component:G}),l.a.createElement(o.a,{path:"/"},l.a.createElement(B,null)),l.a.createElement(o.a,{path:"/edit"},l.a.createElement(R,null)))))}function B(){var e=U();return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:e.root},l.a.createElement(g.a,{container:!0,spacing:3},l.a.createElement(g.a,{item:!0,xs:8},l.a.createElement(M.a,{className:e.paper},l.a.createElement(J,null))))))}function G(e){var t=U(),a=e.match.params.postId;return a++,l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:t.root},l.a.createElement(g.a,{container:!0,spacing:3},l.a.createElement(g.a,{item:!0,xs:8},l.a.createElement(M.a,{className:t.paper},l.a.createElement(D,{postId:a}))))))}function H(){var e=U();return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:e.root},l.a.createElement(g.a,{container:!0,spacing:3},l.a.createElement(g.a,{item:!0,xs:8},l.a.createElement(M.a,{className:e.paper},l.a.createElement(A,null))))))}function R(){var e=U();return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:e.root},l.a.createElement(g.a,{container:!0,spacing:3},l.a.createElement(g.a,{item:!0,xs:8},l.a.createElement(M.a,{className:e.paper},l.a.createElement(A,null))))))}i.a.render(l.a.createElement(W,{postId:1}),document.getElementById("app"))}},[[49,1,2]]]);
//# sourceMappingURL=main.69dee951.chunk.js.map