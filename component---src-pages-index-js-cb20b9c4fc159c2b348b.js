(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BGGp:function(e,t,a){e.exports=a.p+"static/monkandmonkey-d23b5145dc7f4e90ab10210a87a91db8.jpg"},EYjA:function(e,t,a){e.exports=a.p+"static/IMG_8281-1-119d77cb7b6f666c0594efd2eead6053.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),l=a.n(o),n=a("Wbzz"),r=a("7oih");var c=a("dI71"),i=a("dwco"),s=a.n(i),m=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){s.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,o=this.props,l=o.type,n=o.element,r=o.offset,c=o.timeout;if(l&&n)switch(l){case"class":a=!!(t=document.getElementsByClassName(n)[0]);break;case"id":a=!!(t=document.getElementById(n))}a?this.scrollTo(t,r,c):console.log("Element not found: "+n)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),a):window.scroll({top:o+t,left:0,behavior:"smooth"})},a.render=function(){return l.a.createElement(m,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component),d=a("EYjA"),f=a.n(d),h=a("xT4/"),u=a.n(h),E=a("BGGp"),v=a.n(E),b=a("hqup"),g=a.n(b),y=a("obyI"),w=a.n(y);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement("section",{id:"banner"},l.a.createElement("div",{className:"inner"},l.a.createElement("h2",null,w.a.heading),l.a.createElement("p",null,w.a.subHeading),l.a.createElement("ul",{className:"actions special"},l.a.createElement("li",null,l.a.createElement(p,{type:"id",element:"projects"},l.a.createElement("a",{href:"/#",className:"button primary"},"Portfolio"))))),l.a.createElement(p,{type:"id",element:"one"},l.a.createElement("a",{href:"#one",className:"more"},"Learn More"))),l.a.createElement("section",{id:"one",className:"wrapper style1 special"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",{className:"align-left"},"I'm a Frontend developer with fullstack abilities. My background in Graphic Design and Quality Assurance Engineering gave me a razor-sharp eye for detail and an understanding of Agile methodology. Eager to join a team where I can contribute with my creative and quality-oriented approach."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://drive.google.com/file/d/16nm1dAGh-NvrCdnqE7x8EqVERB_5PoE9/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Take a look at my CV.")),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"myStack = "),"React, JavaScript, Typescript, Redux, Node.js, Mongo DB, CSS & HTML"),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:g.a,alt:"Ironhack",height:"90px",width:"90px"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"Graduate of Ironhack Berlin - Web Dev Bootcamp")))),l.a.createElement("section",{id:"projects",className:"wrapper style4"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"PROJECTS")))),l.a.createElement("section",{id:"two",className:"wrapper alt style2"},l.a.createElement("section",{className:"spotlight"},l.a.createElement("div",{className:"image"},l.a.createElement(n.Link,{to:"/Project1"},l.a.createElement("img",{src:f.a,alt:""}))),l.a.createElement("div",{className:"content"},l.a.createElement(n.Link,{to:"/Project1"},l.a.createElement("h2",null,"ShapeIT"),l.a.createElement("p",null,"Social Fitness Platform to build healthy habits. Contains 30-day video-based fitness program, nutrition basics and the opportunity to make a donation to a good cause."),l.a.createElement(n.Link,{to:"/Project1"},"More details")))),l.a.createElement("section",{className:"spotlight"},l.a.createElement("div",{className:"image"},l.a.createElement(n.Link,{to:"/Project2"},l.a.createElement("img",{src:u.a,alt:""}))),l.a.createElement("div",{className:"content"},l.a.createElement(n.Link,{to:"/Project2"},l.a.createElement("h2",null,"all my plants"),l.a.createElement("p",null,"Virtual garden to keep track of the plants you have at home and their specific care requirements."),l.a.createElement(n.Link,{to:"/Project2"},"More details")))),l.a.createElement("section",{className:"spotlight"},l.a.createElement("div",{className:"image"},l.a.createElement(n.Link,{to:"/Project3"},l.a.createElement("img",{src:v.a,alt:""}))),l.a.createElement("div",{className:"content"},l.a.createElement(n.Link,{to:"/Project3"},l.a.createElement("h2",null,"Monk & Monkey"),l.a.createElement("p",null,"Retro game in which you are a monk who must bring an offering to Buddha Keanu Reeves—watch out for the monkeys!"),l.a.createElement(n.Link,{to:"/Project3"},"More details"))))),l.a.createElement("section",{id:"cta",className:"wrapper style4"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Contact me"),l.a.createElement("p",null,"Happy to have a chat about a new project idea, a job offer, or any metaphysical concerns."),l.a.createElement("a",{href:"mailto:mariepascalehardy@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email me")," or find me on ",l.a.createElement("a",{href:"https://github.com/mariehardy",target:"_blank",rel:"noopener noreferrer"},"Github")," or ",l.a.createElement("a",{href:"https://www.linkedin.com/in/hardy-marie/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"."))))}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,o=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},n=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=d(this),o=a.getBoundingClientRect(),n=this.getBoundingClientRect();a!==t.body?(h.call(this,a,a.scrollLeft+n.left-o.left,a.scrollTop+n.top-o.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,a){var o=e.getComputedStyle(t,null)["overflow"+a];return"auto"===o||"scroll"===o}function p(e){var t=s(e,"Y")&&m(e,"Y"),a=s(e,"X")&&m(e,"X");return t||a}function d(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function f(t){var a,o,l,r,c=(n()-t.startTime)/468;r=c=c>1?1:c,a=.5*(1-Math.cos(Math.PI*r)),o=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,o,l),o===t.x&&l===t.y||e.requestAnimationFrame(f.bind(e,t))}function h(a,o,r){var i,s,m,p,d=n();a===t.body?(i=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,p=l.scroll):(i=a,s=a.scrollLeft,m=a.scrollTop,p=c),f({scrollable:i,method:p,startTime:d,startX:s,startY:m,x:o,y:r})}}}}()},hqup:function(e,t,a){e.exports=a.p+"static/logo_ironhack_blue@3x-037b1eb7208a995a0a69d6460ad47c48.png"},"xT4/":function(e,t,a){e.exports=a.p+"static/allmyplantslanding-6b35b27eb24939e11fca5903c22e10bf.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-cb20b9c4fc159c2b348b.js.map