(this["webpackJsonpbrowser-history"]=this["webpackJsonpbrowser-history"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var i=s(2),n=s.n(i),c=s(4),r=s.n(c),a=s(5),o=s(7),l=s(6),d=s(8),m=(s(13),s(0)),g=[{id:0,timeAccessed:"07:45 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/instagram-img.png",title:"Instagram",domainUrl:"instagram.com"},{id:1,timeAccessed:"05:45 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/twitter-img.png",title:"Twitter. It\u2019s what\u2019s happening / Twitter",domainUrl:"twitter.com"},{id:2,timeAccessed:"04:35 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/facebook-img.png",title:"Facebook \u2013 log in or sign up",domainUrl:"facebook.com"},{id:3,timeAccessed:"04:25 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/linkedin-img.png",title:"LinkedIn: Log In or Sign Up",domainUrl:"linkedin.com"},{id:4,timeAccessed:"04:00 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/hashnode-img.png",title:"Hashnode: Everything you need to start blogging as a developer!",domainUrl:"hashnode.com"},{id:5,timeAccessed:"03:25 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/github-img.png",title:"GitHub: Where the world builds software \xb7 GitHub",domainUrl:"github.com"},{id:6,timeAccessed:"02:45 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/react-img.png",title:"React \u2013 A JavaScript library for building user interfaces",domainUrl:"reactjs.org"},{id:7,timeAccessed:"01:25 PM",logoUrl:"https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",title:"Stack Overflow - Where Developers Learn, Share, & Build Careers",domainUrl:"stackoverflow.com"},{id:8,timeAccessed:"09:25 AM",logoUrl:"https://assets.ccbp.in/frontend/react-js/gmail-img.png",title:"Gmail",domainUrl:"mail.google.com"},{id:9,timeAccessed:"09:00 AM",logoUrl:"https://assets.ccbp.in/frontend/react-js/google-img.png",title:"Google",domainUrl:"google.com"}],p=function(e){var t=e.uid,s=e.ondeleteReq,i=e.timeAccessed,n=e.logoUrl,c=e.title,r=e.domainUrl;return Object(m.jsxs)("li",{className:"list-item",children:[Object(m.jsxs)("div",{className:"list-item-container",children:[Object(m.jsx)("p",{className:"time",children:i}),Object(m.jsxs)("div",{className:"box-4",children:[Object(m.jsx)("img",{className:"logo",alt:"domain logo",src:n}),Object(m.jsx)("p",{className:"title",children:c}),Object(m.jsx)("p",{className:"link",children:r})]})]}),Object(m.jsx)("button",{onClick:function(){s(t)},"data-testid":"delete",className:"btn",type:"button",children:Object(m.jsx)("img",{className:"delete",alt:"delete",src:"https://assets.ccbp.in/frontend/react-js/delete-img.png"})})]})},h=function(e){function t(){var e;Object(a.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=Object(l.a)(this,t,[].concat(i))).state={userInpput:"",initialHistoryListc:g},e.onInputChamge=function(t){e.setState({userInpput:t.target.value})},e.ondeleteReq=function(t){var s=e.state.initialHistoryListc.filter((function(e){return e.id!==t}));e.setState({initialHistoryListc:s})},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,s=t.userInpput,i=t.initialHistoryListc.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)("img",{className:"nav-logo",alt:"app logo",src:"https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"}),Object(m.jsxs)("div",{className:"search-container",children:[Object(m.jsx)("img",{className:"search-img",alt:"search",src:"https://assets.ccbp.in/frontend/react-js/search-img.png"}),Object(m.jsx)("input",{value:s,onChange:this.onInputChamge,className:"input",type:"search",placeholder:"Search history"})]})]}),Object(m.jsx)("div",{className:"box2",children:0===i.length?Object(m.jsx)("ul",{className:"list-container",children:Object(m.jsx)("p",{className:"nohistory",children:"There is no history to show"})}):Object(m.jsx)("ul",{className:"list-container",children:i.map((function(t){return Object(m.jsx)(p,{uid:t.id,timeAccessed:t.timeAccessed,logoUrl:t.logoUrl,title:t.title,domainUrl:t.domainUrl,ondeleteReq:e.ondeleteReq},t.id)}))})})]})}}])}(i.Component),j=h;r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ce64da80.chunk.js.map