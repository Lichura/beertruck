/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-appearance-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-checked-cookies-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customevent-displaytable-ellipsis-eventlistener-formvalidation-fullscreen-generatedcontent-hiddenscroll-hsla-ie8compat-input-inputtypes-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-picture-placeholder-pointerevents-postmessage-queryselector-regions-rgba-search-shapes-siblinggeneral-subpixelfont-supports-target-templatestrings-textalignlast-textshadow-touchevents-typedarrays-unicode-unicoderange-userselect-videoautoplay-videoloop-wrapflow !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,n,r,o,i,d;for(var s in tests){if(e=[],t=tests[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],d=i.split("."),1===d.length?Modernizr[d[0]]=r:(!Modernizr[d[0]]||Modernizr[d[0]]instanceof Boolean||(Modernizr[d[0]]=new Boolean(Modernizr[d[0]])),Modernizr[d[0]][d[1]]=r),classes.push((r?"":"no-")+d.join("-"))}}function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),setClasses([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function contains(e,t){return!!~(""+e).indexOf(t)}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],is(r,"function")?fnBind(r,n||t):r);return!1}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,n,r){var o,i,d,s,a="modernizr",l=createElement("div"),A=getBody();if(parseInt(n,10))for(;n--;)d=createElement("div"),d.id=r?r[n]:a+(n+1),l.appendChild(d);return o=createElement("style"),o.type="text/css",o.id="s"+a,(A.fake?A:l).appendChild(o),A.appendChild(l),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),l.id=a,A.fake&&(A.style.background="",A.style.overflow="hidden",s=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(A)),i=t(l,e),A.fake?(A.parentNode.removeChild(A),docElement.style.overflow=s,docElement.offsetHeight):l.parentNode.removeChild(l),!!i}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var r=[];n--;)r.push("("+domToCSS(e[n])+":"+t+")");return r=r.join(" or "),injectElementWithStyles("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function testProps(e,t,n,r){function o(){d&&(delete mStyle.style,delete mStyle.modElem)}if(r=is(r,"undefined")?!1:r,!is(n,"undefined")){var i=nativeTestProps(e,n);if(!is(i,"undefined"))return i}for(var d,s,a,l,A,c=["modernizr","tspan"];!mStyle.style;)d=!0,mStyle.modElem=createElement(c.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,s=0;a>s;s++)if(l=e[s],A=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(r||is(n,"undefined"))return o(),"pfx"==t?l:!0;try{mStyle.style[l]=n}catch(u){}if(mStyle.style[l]!=A)return o(),"pfx"==t?l:!0}return o(),!1}function testPropsAll(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),d=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(d,t,r,o):(d=(e+" "+domPrefixes.join(i+" ")+i).split(" "),testDOMProps(d,t,n))}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}var classes=[],tests=[],ModernizrProto={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("eventlistener","addEventListener"in window),Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),Modernizr.addTest("postmessage","postMessage"in window),Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),Modernizr.addTest("typedarrays","ArrayBuffer"in window);var CSS=window.CSS;Modernizr.addTest("cssescape",CSS?"function"==typeof CSS.escape:!1);var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),Modernizr.addTest("target",function(){var e=window.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}}),Modernizr.addTest("picture","HTMLPictureElement"in window);var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof createElement("canvas").getContext("2d").fillText}),Modernizr.addTest("bgpositionshorthand",function(){var e=createElement("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=createElement("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("rgba",function(){var e=createElement("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("regions",function(){if(isSVG)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),n=!1;if(!e||!t)return n;var r=createElement("iframe"),o=createElement("div"),i=createElement("div"),d=createElement("div"),s="modernizr_flow_for_regions_check";i.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=s,o.appendChild(i),o.appendChild(d),docElement.appendChild(o);var a,l,A=i.getBoundingClientRect();return i.style[t]=s,a=i.getBoundingClientRect(),l=parseInt(a.left-A.left,10),docElement.removeChild(o),42==l?n=!0:(docElement.appendChild(r),A=r.getBoundingClientRect(),r.style[t]=s,a=r.getBoundingClientRect(),A.height>0&&A.height!==a.height&&0===a.height&&(n=!0)),i=d=o=r=undefined,n}),Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea"));var hasEvent=function(e){function t(t,r){var o;return t?(r&&"string"!=typeof r||(r=createElement(r||"div")),t="on"+t,o=t in r,!o&&n&&(r.setAttribute||(r=createElement("div")),r.setAttribute(t,""),o="function"==typeof r[t],r[t]!==e&&(r[t]=e),r.removeAttribute(t)),o):!1}var n=!("onblur"in document.documentElement);return t}();ModernizrProto.hasEvent=hasEvent,Modernizr.addTest("inputsearchevent",hasEvent("search")),Modernizr.addTest("videoloop","loop"in createElement("video")),Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),Modernizr.addAsyncTest(function(){function e(n){clearTimeout(t),r.removeEventListener("playing",e,!1),addTest("videoautoplay",n&&"playing"===n.type||0!==r.currentTime),r.parentNode.removeChild(r)}var t,n=300,r=createElement("video"),o=r.style;if(!(Modernizr.video&&"autoplay"in r))return void addTest("videoautoplay",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.video.ogg)r.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);r.src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"}}catch(i){return void addTest("videoautoplay",!1)}r.setAttribute("autoplay",""),r.style.cssText="display:none",docElement.appendChild(r),setTimeout(function(){r.addEventListener("playing",e,!1),t=setTimeout(e,n)},0)});var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem}),Modernizr.addTest("cssexunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e}),Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e});var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs);var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,n,r,o=e.length,i=":)",d=0;o>d;d++)inputElem.setAttribute("type",t=e[d]),r="text"!==inputElem.type&&"style"in inputElem,r&&(inputElem.value=i,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),n=document.defaultView,r=n.getComputedStyle&&"textfield"!==n.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(r=/^(url|email|number)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=i)),inputs[e[d]]=!!r;return inputs}(inputtypes),Modernizr.addTest("hsla",function(){var e=createElement("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",contains(e.backgroundColor,"rgba")||contains(e.backgroundColor,"hsla")});var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];ModernizrProto._prefixes=prefixes,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=createElement("a");return n.style.cssText=e+prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);",r=e+prefixes.join(n+e).slice(0,-e.length);Modernizr._config.usePrefixes&&(r+=e+"-webkit-"+t);var o=createElement("a"),i=o.style;return i.cssText=r,(""+i.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=createElement("a"),r=n.style;return r.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var omPrefixes="Moz O ms Webkit",domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes,Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,n=prefixes.length,r=window.CSSRule;if("undefined"==typeof r)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in r)return"@"+e;for(var o=0;n>o;o++){var i=prefixes[o],d=i.toUpperCase()+"_"+t;if(d in r)return"@-"+i.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var testStyles=ModernizrProto.testStyles=injectElementWithStyles;Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],n=0;n<t.length;n++){var r=createElement("span");r.innerHTML=t[n],r.className=n%2?"mono":"",e.appendChild(r),t[n]=r.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})}),Modernizr.addTest("unicode",function(){var e,t=createElement("span"),n=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(r){t.innerHTML=isSVG?"妇":"&#5987",n.innerHTML=isSVG?"☆":"&#9734",r.appendChild(t),r.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=createElement("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;return n})},5),testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"]),testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,d=r.clientHeight/100,s=parseInt(50*Math.min(i,d),10),a=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(s,a)||roundedEquals(s,a-o))},3),Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=createElement("input");return e.appendChild(t),t.clientWidth>10})}),testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==t)}),testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==t)}),testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,d=r.clientHeight/100,s=parseInt(50*Math.max(i,d),10),a=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(s,a)||roundedEquals(s,a-o))},3),Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(r){r.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),n});var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq,Modernizr.addTest("mediaqueries",mq("only all")),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,n){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,n):testPropsAll(e,"pfx"))};Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),n=createElement("div"),r=createElement("div"),o=createElement("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",n.appendChild(r),n.appendChild(o),docElement.appendChild(n);var i=o.offsetLeft;return docElement.removeChild(n),r=o=n=undefined,150==i}),ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var e=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return e;var t=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(t,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),Modernizr.addTest("appearance",testAllProps("appearance")),Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),Modernizr.addAsyncTest(function(){function e(){function n(){try{var e=createElement("div"),t=createElement("span"),n=e.style,r=0,o=0,i=!1,d=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",
document.body.insertBefore(e,d),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=t.offsetHeight,o=t.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),i=t.offsetHeight!=r||t.offsetWidth!=o,document.body.removeChild(e),e.removeChild(t),i}catch(s){return!1}}function r(e,t){try{var n=createElement("div"),r=createElement("span"),o=n.style,i=0,d=!1,s=!1,a=!1,l=document.body.firstElementChild||document.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(r),document.body.insertBefore(n,l),r.innerHTML="mm",i=r.offsetHeight,r.innerHTML="m"+e+"m",s=r.offsetHeight>i,t?(r.innerHTML="m<br />m",i=r.offsetWidth,r.innerHTML="m"+e+"m",a=r.offsetWidth>i):a=!0,s===!0&&a===!0&&(d=!0),document.body.removeChild(n),n.removeChild(r),d}catch(A){return!1}}function o(e){try{var t,n=createElement("input"),r=createElement("div"),o="lebowski",i=!1,d=document.body.firstElementChild||document.body.firstChild;if(r.innerHTML=o+e+o,document.body.insertBefore(r,d),document.body.insertBefore(n,r),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(t=n.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select()),window.find)i=window.find(o+o);else try{t=window.self.document.body.createTextRange(),i=t.findText(o+o)}catch(s){i=!1}return document.body.removeChild(r),document.body.removeChild(n),i}catch(s){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return n()}catch(e){return!1}}),addTest("softhyphens",function(){try{return r("&#173;",!0)&&r("&#8203;",!1)}catch(e){return!1}}),void addTest("softhyphensfind",function(){try{return o("&#173;")&&o("&#8203;")}catch(e){return!1}})):void setTimeout(e,t)}var t=300;setTimeout(e,t)}),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=testAllProps("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||testAllProps(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis")),Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var n;Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",testStyles(n,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e});var testProp=ModernizrProto.testProp=function(e,t,n){return testProps([e],undefined,t,n)};Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);