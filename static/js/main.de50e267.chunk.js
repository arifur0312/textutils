(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,a,t){e.exports=t(15)},,,,,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.06e73328.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),c=t.n(r);t(12),t(13),t(14);function o(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"Link")),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown"),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),n.a.createElement("li",null,n.a.createElement("hr",{className:"dropdown-divider"})),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link disabled","aria-disabled":"true"},"Disabled"))),n.a.createElement("div",{className:`form-check form-switch text-${"light"===e.mode?"dark":"light"}`},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"dark"))))))}function s(e){const[a,t]=Object(l.useState)("Write here");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("h3",{style:{color:"light"===e.mode?"black":"white"}},e.Heading," "),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control ",id:"exampleFormControlTextarea1",value:a,onChange:function(e){t(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#9e9e9e",color:"light"===e.mode?"black":"white"},rows:"5"})),n.a.createElement("div",{className:"Button"},n.a.createElement("button",{className:"UpperCase btn btn-primary",onClick:function(){let l=a.toUpperCase();t(l),e.showAlert("success","Converted to Uppercase")}},"Convert Upper Case"),n.a.createElement("button",{className:"LowerCase btn btn-primary",onClick:function(){let l=a.toLowerCase();t(l),e.showAlert("success","Converted to Lowercase")}},"Convert Lower Case"),n.a.createElement("button",{className:"clear btn btn-primary",onClick:function(){t(""),e.showAlert("success","Text cleared")}},"Clear")),n.a.createElement("div",{className:"Container"},n.a.createElement("p",null,a.trim().split("").length," words   ",a.length," characters "),n.a.createElement("p",null,.005*a.split(" ").length," minute average "))))}function m(e){return e.alert&&n.a.createElement("div",{className:`alert alert-${e.alert.type}`,role:"alert"},e.alert.type,":",e.alert.msg)}var i=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null),c=(e,a)=>{r({type:e,msg:a}),setTimeout(()=>{r(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#9e9e9e",c("success","Dark mode enabled.")):(a("light"),document.body.style.backgroundColor="white",c("success","Light mode enabled."))}}),n.a.createElement(m,{alert:t}),n.a.createElement("div",null,n.a.createElement(s,{Heading:"Enter Text Here",className:"container",mode:e,showAlert:c})))};var d=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()}],[[3,1,2]]]);
//# sourceMappingURL=main.de50e267.chunk.js.map