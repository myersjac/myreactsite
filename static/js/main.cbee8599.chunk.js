(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},23:function(e,a,t){},26:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(13),c=t.n(s),r=(t(23),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=t(10),h=t(14),p=t.n(h),E=(t(26),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.occupation2,n=this.props.data.occupation3,s=this.props.data.description,c=this.props.data.address.city,r=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("img",{src:"images/JMlogo.png",id:"JMheaderlogo"}),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null,"I'm an ",c," based ",l.a.createElement("span",null,a),", ",l.a.createElement("span",null,t),", and  ",l.a.createElement("span",null,n),". ",s,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},r))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2019 Jake Myers"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email),s=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:s,download:"JakeMyersResume.pdf",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null," \u2022 ",e.description),e.description2?l.a.createElement("p",null," \u2022 ",e.description2):null,e.description3?l.a.createElement("p",null," \u2022 ",e.description3):null,l.a.createElement("br",null))}),n=this.props.data.skills.map(function(e){var a="images/tech/"+e.image;return l.a.createElement("div",{key:e.name,className:"columns feature-item skilldiv"},l.a.createElement("img",{className:"skill",alt:e.name,src:a}),l.a.createElement("h5",{className:"skilltitle"},e.name),l.a.createElement("p",null,e.description))});return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Favorite Tech"))),l.a.createElement("div",null,l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",{className:"lead center"},e)),l.a.createElement("ul",{id:"skillicons",className:"bgrid-quarters s-bgrid-thirds cf"},n))))}}]),a}(n.Component),g=t(7),N=t(15),w=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={name:"",email:"",subject:"",message:""},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t.isEnabled=!1,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e,a){switch(a){case"name":this.setState({name:e.target.value});break;case"email":this.setState({email:e.target.value});break;case"subject":this.setState({subject:e.target.value});break;case"message":this.setState({message:e.target.value})}}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),console.log(this.state),this.state.email.length>0&&this.state.subject.length>0&&this.state.message.length>0){var a={to:"jacobmyers922@gmail.com",from:this.state.email,subject:this.state.subject,text:this.state.message,html:"<strong>and easy to do anywhere, even with Node.js!</strong>"};return N.send("default_service","contactme",a,"user_jv6GwFGMxfrpuH2eoDCrH").then(function(e){console.log("SUCCESS!",e.status,e.text),alert("Email Sent!"),document.getElementById("contactForm").reset()},function(e){return console.log("FAILED...",e),alert("Email Not Sent! Looks to be an external problem."),!1}),this.setState({name:"",email:"",subject:"",message:""}),!1}alert("Please follow the requested email format!")}},{key:"render",value:function(){var e=this;if(this.props.data)var a=this.props.data.name,t=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email),n=this.props.data.contactmessage;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},n))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{onSubmit:this.handleSubmit,id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{pattern:".{3,}",value:this.state.value,type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:function(a){e.handleChange(a,"name")}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",value:this.state.value,type:"email",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:function(a){e.handleChange(a,"email")}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{pattern:".{3,}",value:this.state.value,type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:function(a){e.handleChange(a,"subject")}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{pattern:".{3,}",value:this.state.value,cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",onChange:function(a){e.handleChange(a,"message")}})),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Submit"}),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Contact"),l.a.createElement("p",{className:"address"},a,l.a.createElement("br",null),t,l.a.createElement("br",null))))))}}]),a}(n.Component),j=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))});return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),k=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map(function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"}))))});return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),y=(t(16),t(40),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.resume}),l.a.createElement(k,{data:this.state.resumeData.portfolio}),l.a.createElement(j,{data:this.state.resumeData.testimonials}),l.a.createElement(w,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.cbee8599.chunk.js.map