/*----------------------------------------------------------------------
	IE
----------------------------------------------------------------------*/
/**
 * ! HTML5 Shiv pre3.5 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv
 */
(function(a,b){function h(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function i(){var a=l.elements;return typeof a=="string"?a.split(" "):a}function j(a){var b={},c=a.createElement,f=a.createDocumentFragment,g=f();a.createElement=function(a){l.shivMethods||c(a);var f;return b[a]?f=b[a].cloneNode():e.test(a)?f=(b[a]=c(a)).cloneNode():f=c(a),f.canHaveChildren&&!d.test(a)?g.appendChild(f):f},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(a){return b[a]=c(a),g.createElement(a),'c("'+a+'")'})+");return n}")(l,g)}function k(a){var b;return a.documentShived?a:(l.shivCSS&&!f&&(b=!!h(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),g||(b=!j(a)),b&&(a.documentShived=b),a)}function p(a){var b,c=a.getElementsByTagName("*"),d=c.length,e=RegExp("^(?:"+i().join("|")+")$","i"),f=[];while(d--)b=c[d],e.test(b.nodeName)&&f.push(b.applyElement(q(b)));return f}function q(a){var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(n+":"+a.nodeName);while(d--)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function r(a){var b,c=a.split("{"),d=c.length,e=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),f="$1"+n+"\\:$2";while(d--)b=c[d]=c[d].split("}"),b[b.length-1]=b[b.length-1].replace(e,f),c[d]=b.join("}");return c.join("{")}function s(a){var b=a.length;while(b--)a[b].removeNode()}function t(a){var b,c,d=a.namespaces,e=a.parentWindow;return!o||a.printShived?a:(typeof d[n]=="undefined"&&d.add(n),e.attachEvent("onbeforeprint",function(){var d,e,f,g=a.styleSheets,i=[],j=g.length,k=Array(j);while(j--)k[j]=g[j];while(f=k.pop())if(!f.disabled&&m.test(f.media)){for(d=f.imports,j=0,e=d.length;j<e;j++)k.push(d[j]);try{i.push(f.cssText)}catch(l){}}i=r(i.reverse().join("")),c=p(a),b=h(a,i)}),e.attachEvent("onafterprint",function(){s(c),b.removeNode(!0)}),a.printShived=!0,a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g;(function(){var c=b.createElement("a");c.innerHTML="<xyz></xyz>",f="hidden"in c,f&&typeof injectElementWithStyles=="function"&&injectElementWithStyles("#modernizr{}",function(b){b.hidden=!0,f=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).display=="none"}),g=c.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var l={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:k};a.html5=l,k(b);var m=/^$|\b(?:all|print)\b/,n="html5shiv",o=!g&&function(){var c=b.documentElement;return typeof b.namespaces!="undefined"&&typeof b.parentWindow!="undefined"&&typeof c.applyElement!="undefined"&&typeof c.removeNode!="undefined"&&typeof a.attachEvent!="undefined"}();l.type+=" print",l.shivPrint=t,t(b)})(this,document)

/**
 * IEのバージョン部分のみget
 */
var msie=navigator.appVersion.toLowerCase();
msie=(msie.indexOf('msie')>-1)?parseInt(msie.replace(/.*msie[ ]/,'').match(/^[0-9]+/)):0;

/**
 * IE6 〜 IE8
 * "selectivizr.js" ie6 ~ ie8 Selectors Level 3
 * ローカルでは使えないので注意です。
 */
if((msie >= 6) && (msie <= 8)) {
	scriptCreate("js/selectivizr.js");
}

/**
 * 〜 IE6
 * "js/DD_belatedPNG.js" 透明pngを使えるようにします。
 */

if(Boolean(msie) && msie <= 6) {
	scriptCreate("js/jquery.belatedPNG.js");
	$(function() {
		$('body *').fixPng();
	});
}

/**
 * script実行用
 */
function scriptCreate(name) {
	var n = document.createElement("script");
	n.setAttribute( "type", "text/javascript");
	n.setAttribute( "src", name);
	document.getElementsByTagName("head")[0].appendChild(n);
}



//----------------------------------------------------------------------
//	Develo.org
//----------------------------------------------------------------------

$(function(){
	
	prettyPrint();
	
	
	$(".guide .search a").unbind();
	$(".guide .search a").click(function () {
		$("#searchBox").toggleClass("on");
		if($.cookie('searchBox') == 'on') {
			$.cookie('searchBox', 'off', { expires: 365, path: '/' });
		}
		else {
			$.cookie('searchBox', 'on', { expires: 365, path: '/' });
		}
		return false;
	});
	
	
	$(".pageNav h2 a").unbind();
	$(".pageNav h2 a").click(function () {
		$(".pageNav").toggleClass("off");
		$(".pageNav").find('>ul').toggleClass("off");
		$(".pageNav").find('>ol').toggleClass("off");
		if($.cookie('pageNav') == 'off') {
			$.cookie('pageNav', 'on', { expires: 365, path: '/' });
		}
		else {
			$.cookie('pageNav', 'off', { expires: 365, path: '/' });
		}
		return false;
	});
	
	if($.cookie('searchBox') == 'on') {
		$("#searchBox").toggleClass("on");
	}

	if($.cookie('pageNav') == 'off') {
		$(".pageNav").toggleClass("off");
		$(".pageNav").find('>ul').toggleClass("off");
		$(".pageNav").find('>ol').toggleClass("off");
	}
	
	if($.cookie('detailsSelect') == 'off') {
		$(".detailsSelect").toggleClass("off");
		$("article article").addClass("off");
		$.cookie('detailsSelect', 'off', { expires: 365, path: '/' });
	}

	$(".detailsSelect a").unbind();
	$(".detailsSelect a").click(function () {
		$('.detailsSelect').toggleClass("off");
		$("article").toggleClass("off");

		if($.cookie('detailsSelect') == 'off') {
			$.cookie('detailsSelect', 'on', { expires: 365, path: '/' });
		}
		else {
			$.cookie('detailsSelect', 'off', { expires: 365, path: '/' });
		}
		
		return false;
	});
})