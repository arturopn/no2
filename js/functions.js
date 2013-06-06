/*ScrollTo 1.4.1*/
;(function($){var m=$.scrollTo=function(b,h,f){$(window).scrollTo(b,h,f)};m.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1};m.window=function(b){return $(window).scrollable()};$.fn.scrollable=function(){return this.map(function(){var b=this,h=!b.nodeName||$.inArray(b.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!h)return b;var f=(b.contentWindow||b).document||b.ownerDocument||b;return $.browser.safari||f.compatMode=='BackCompat'?f.body:f.documentElement})};$.fn.scrollTo=function(l,j,a){if(typeof j=='object'){a=j;j=0}if(typeof a=='function')a={onAfter:a};if(l=='max')l=9e9;a=$.extend({},m.defaults,a);j=j||a.speed||a.duration;a.queue=a.queue&&a.axis.length>1;if(a.queue)j/=2;a.offset=n(a.offset);a.over=n(a.over);return this.scrollable().each(function(){var k=this,o=$(k),d=l,p,g={},q=o.is('html,body');switch(typeof d){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px)?$/.test(d)){d=n(d);break}d=$(d,this);case'object':if(d.is||d.style)p=(d=$(d)).offset()}$.each(a.axis.split(''),function(b,h){var f=h=='x'?'Left':'Top',i=f.toLowerCase(),c='scroll'+f,r=k[c],s=h=='x'?'Width':'Height';if(p){g[c]=p[i]+(q?0:r-o.offset()[i]);if(a.margin){g[c]-=parseInt(d.css('margin'+f))||0;g[c]-=parseInt(d.css('border'+f+'Width'))||0}g[c]+=a.offset[i]||0;if(a.over[i])g[c]+=d[s.toLowerCase()]()*a.over[i]}else g[c]=d[i];if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],u(s));if(!b&&a.queue){if(r!=g[c])t(a.onAfterFirst);delete g[c]}});t(a.onAfter);function t(b){o.animate(g,j,a.easing,b&&function(){b.call(this,l,a)})};function u(b){var h='scroll'+b;if(!q)return k[h];var f='client'+b,i=k.ownerDocument.documentElement,c=k.ownerDocument.body;return Math.max(i[h],c[h])-Math.min(i[f],c[f])}}).end()};function n(b){return typeof b=='object'?b:{top:b,left:b}}})(jQuery);
;(function($){var a='serialScroll',b='.'+a,c='bind',C=$[a]=function(b){$.scrollTo.window()[a](b)};C.defaults={duration:1e3,axis:'x',event:'click',start:0,step:1,lock:1,cycle:1,constant:1};$.fn[a]=function(y){y=$.extend({},C.defaults,y);var z=y.event,A=y.step,B=y.lazy;return this.each(function(){var j=y.target?this:document,k=$(y.target||this,j),l=k[0],m=y.items,o=y.start,p=y.interval,q=y.navigation,r;if(!B)m=w();if(y.force)t({},o);$(y.prev||[],j)[c](z,-A,s);$(y.next||[],j)[c](z,A,s);if(!l.ssbound)k[c]('prev'+b,-A,s)[c]('next'+b,A,s)[c]('goto'+b,t);if(p)k[c]('start'+b,function(e){if(!p){v();p=1;u()}})[c]('stop'+b,function(){v();p=0});k[c]('notify'+b,function(e,a){var i=x(a);if(i>-1)o=i});l.ssbound=1;if(y.jump)(B?k:w())[c](z,function(e){t(e,x(e.target))});if(q)q=$(q,j)[c](z,function(e){e.data=Math.round(w().length/q.length)*q.index(this);t(e,this)});function s(e){e.data+=o;t(e,this)};function t(e,a){if(!isNaN(a)){e.data=a;a=l}var c=e.data,n,d=e.type,f=y.exclude?w().slice(0,-y.exclude):w(),g=f.length,h=f[c],i=y.duration;if(d)e.preventDefault();if(p){v();r=setTimeout(u,y.interval)}if(!h){n=c<0?0:n=g-1;if(o!=n)c=n;else if(!y.cycle)return;else c=g-n-1;h=f[c]}if(!h||d&&o==c||y.lock&&k.is(':animated')||d&&y.onBefore&&y.onBefore.call(a,e,h,k,w(),c)===!1)return;if(y.stop)k.queue('fx',[]).stop();if(y.constant)i=Math.abs(i/A*(o-c));k.scrollTo(h,i,y).trigger('notify'+b,[c])};function u(){k.trigger('next'+b)};function v(){clearTimeout(r)};function w(){return $(m,l)};function x(a){if(!isNaN(a))return a;var b=w(),i;while((i=b.index(a))==-1&&a!=l)a=a.parentNode;return i}})}})(jQuery);



/*TimePicker*/
(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function o(t){var r=t.data("timepicker-settings"),i=t.data("timepicker-list");i&&i.length&&(i.remove(),t.data("timepicker-list",!1)),i=e("<ul />",{tabindex:-1,"class":"ui-timepicker-list"}),r.className&&i.addClass(r.className),i.css({display:"none",position:"absolute"}),(r.minTime!==null||r.durationTime!==null)&&r.showDuration&&i.addClass("ui-timepicker-with-duration");var s=r.durationTime!==null?r.durationTime:r.minTime,o=r.minTime!==null?r.minTime:0,u=r.maxTime!==null?r.maxTime:o+n-1;u<=o&&(u+=n);for(var a=o;a<=u;a+=r.step*60){var f=a%n,l=e("<li />");l.data("time",f),l.text(m(f,r.timeFormat));if((r.minTime!==null||r.durationTime!==null)&&r.showDuration){var h=e("<span />");h.addClass("ui-timepicker-duration"),h.text(" ("+v(a-s)+")"),l.append(h)}i.append(l)}i.data("timepicker-input",t),t.data("timepicker-list",i);var p=r.appendTo;typeof p=="string"?p=e(p):typeof p=="function"&&(p=p(t)),p.append(i),c(t,i),i.on("click","li",function(n){t.addClass("ui-timepicker-hideme"),t[0].focus(),i.find("li").removeClass("ui-timepicker-selected"),e(this).addClass("ui-timepicker-selected"),d(t),i.hide()})}function u(){var e=new Date,t=e.getTimezoneOffset()*6e4;e.setHours(0),e.setMinutes(0),e.setSeconds(0);var n=e.getTimezoneOffset()*6e4;return new Date(e.valueOf()-n+t)}function a(){"ontouchstart"in document?e("body").on("touchstart.ui-timepicker",f):(e("body").on("mousedown.ui-timepicker",f),e(window).on("scroll.ui-timepicker",f))}function f(t){var n=e(t.target),r=n.closest(".ui-timepicker-input");r.length===0&&n.closest(".ui-timepicker-list").length===0&&(s.hide(),e("body").unbind(".ui-timepicker"),e(window).unbind(".ui-timepicker"))}function l(t,n,r){if(!r&&r!==0)return!1;var i=t.data("timepicker-settings"),s=!1,o=i.step*30;return n.find("li").each(function(t,n){var i=e(n),u=i.data("time")-r;if(Math.abs(u)<o||u==o)return s=i,!1}),s}function c(e,t){var n=g(e.val()),r=l(e,t,n);r&&r.addClass("ui-timepicker-selected")}function h(){if(this.value==="")return;var t=e(this),n=g(this.value);if(n===null){t.trigger("timeFormatError");return}var r=t.data("timepicker-settings");if(r.forceRoundTime){var i=n%(r.step*60);i>=r.step*30?n+=r.step*60-i:n-=i}var s=m(n,r.timeFormat);t.val(s)}function p(t){var n=e(this),r=n.data("timepicker-list");if(!r.is(":visible")){if(t.keyCode!=40)return!0;n.focus()}switch(t.keyCode){case 13:return d(n),s.hide.apply(this),t.preventDefault(),!1;case 38:var i=r.find(".ui-timepicker-selected");i.length?i.is(":first-child")||(i.removeClass("ui-timepicker-selected"),i.prev().addClass("ui-timepicker-selected"),i.prev().position().top<i.outerHeight()&&r.scrollTop(r.scrollTop()-i.outerHeight())):(r.children().each(function(t,n){if(e(n).position().top>0)return i=e(n),!1}),i.addClass("ui-timepicker-selected"));break;case 40:i=r.find(".ui-timepicker-selected"),i.length===0?(r.children().each(function(t,n){if(e(n).position().top>0)return i=e(n),!1}),i.addClass("ui-timepicker-selected")):i.is(":last-child")||(i.removeClass("ui-timepicker-selected"),i.next().addClass("ui-timepicker-selected"),i.next().position().top+2*i.outerHeight()>r.outerHeight()&&r.scrollTop(r.scrollTop()+i.outerHeight()));break;case 27:r.find("li").removeClass("ui-timepicker-selected"),r.hide();break;case 9:s.hide();break;case 16:case 17:case 18:case 19:case 20:case 33:case 34:case 35:case 36:case 37:case 39:case 45:return;default:r.find("li").removeClass("ui-timepicker-selected");return}}function d(e){var t=e.data("timepicker-settings"),n=e.data("timepicker-list"),r=null,i=n.find(".ui-timepicker-selected");i.length?r=i.data("time"):e.val()&&(r=g(e.val()),c(e,n));if(r!==null){var s=m(r,t.timeFormat);e.val(s)}e.trigger("change").trigger("changeTime")}function v(e){var t=Math.round(e/60),n;if(Math.abs(t)<60)n=[t,i.mins];else if(t==60)n=["1",i.hr];else{var r=(t/60).toFixed(1);i.decimal!="."&&(r=r.replace(".",i.decimal)),n=[r,i.hrs]}return n.join(" ")}function m(e,n){if(e===null)return;var r=new Date(t.valueOf()+e*1e3),i="",s,o;for(var u=0;u<n.length;u++){o=n.charAt(u);switch(o){case"a":i+=r.getHours()>11?"pm":"am";break;case"A":i+=r.getHours()>11?"PM":"AM";break;case"g":s=r.getHours()%12,i+=s===0?"12":s;break;case"G":i+=r.getHours();break;case"h":s=r.getHours()%12,s!==0&&s<10&&(s="0"+s),i+=s===0?"12":s;break;case"H":s=r.getHours(),i+=s>9?s:"0"+s;break;case"i":var a=r.getMinutes();i+=a>9?a:"0"+a;break;case"s":e=r.getSeconds(),i+=e>9?e:"0"+e;break;default:i+=o}}return i}function g(e){if(e==="")return null;if(e+0==e)return e;typeof e=="object"&&(e=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds());var t=new Date(0),n;e.indexOf(":")!==-1?n=/(\d{1,2})(?::(\d{1,2}))?(?::(\d{2}))?\s*([pa]?)/:n=/^([0-2][0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)$/;var r=e.toLowerCase().match(n);if(!r)return null;var i=parseInt(r[1]*1,10),s;r[4]?i==12?s=r[4]=="p"?12:0:s=i+(r[4]=="p"?12:0):s=i;var o=r[2]*1||0,u=r[3]*1||0;return s*3600+o*60+u}var t=u(),n=86400,r={className:null,minTime:null,maxTime:null,durationTime:null,step:30,showDuration:!1,timeFormat:"g:ia",scrollDefaultNow:!1,scrollDefaultTime:!1,selectOnBlur:!1,disableTouchKeyboard:!0,forceRoundTime:!1,appendTo:"body"},i={decimal:".",mins:"mins",hr:"hr",hrs:"hrs"},s={init:function(t){return this.each(function(){var n=e(this);if(n[0].tagName=="SELECT"){var o={type:"text",value:n.val()},u=n[0].attributes;for(var a=0;a<u.length;a++)o[u[a].nodeName]=u[a].nodeValue;var f=e("<input />",o);n.replaceWith(f),n=f}var l=e.extend({},r);t&&(l=e.extend(l,t)),l.minTime&&(l.minTime=g(l.minTime)),l.maxTime&&(l.maxTime=g(l.maxTime)),l.durationTime&&(l.durationTime=g(l.durationTime)),l.lang&&(i=e.extend(i,l.lang)),n.data("timepicker-settings",l),n.prop("autocomplete","off"),n.on("click.timepicker focus.timepicker",s.show),n.on("blur.timepicker",h),n.on("keydown.timepicker",p),n.addClass("ui-timepicker-input"),h.call(n.get(0))})},show:function(t){var n=e(this),r=n.data("timepicker-settings");"ontouchstart"in document&&r.disableTouchKeyboard&&n.blur();var i=n.data("timepicker-list");if(n.prop("readonly"))return;if(!i||i.length===0)o(n),i=n.data("timepicker-list");if(n.hasClass("ui-timepicker-hideme")){n.removeClass("ui-timepicker-hideme"),i.hide();return}if(i.is(":visible"))return;s.hide(),n.offset().top+n.outerHeight(!0)+i.outerHeight()>e(window).height()+e(window).scrollTop()?i.css({left:n.offset().left,top:n.offset().top-i.outerHeight()}):i.css({left:n.offset().left,top:n.offset().top+n.outerHeight()}),i.show();var u=i.find(".ui-timepicker-selected");u.length||(n.val()?u=l(n,i,g(n.val())):r.scrollDefaultNow?u=l(n,i,g(new Date)):r.scrollDefaultTime!==!1&&(u=l(n,i,g(r.scrollDefaultTime))));if(u&&u.length){var f=i.scrollTop()+u.position().top-u.outerHeight();i.scrollTop(f)}else i.scrollTop(0);a(),n.trigger("showTimepicker")},hide:function(t){e(".ui-timepicker-list:visible").each(function(){var t=e(this),n=t.data("timepicker-input"),r=n.data("timepicker-settings");r&&r.selectOnBlur&&d(n),t.hide(),n.trigger("hideTimepicker")})},option:function(t,n){var r=e(this),i=r.data("timepicker-settings"),s=r.data("timepicker-list");if(typeof t=="object")i=e.extend(i,t);else if(typeof t=="string"&&typeof n!="undefined")i[t]=n;else if(typeof t=="string")return i[t];i.minTime&&(i.minTime=g(i.minTime)),i.maxTime&&(i.maxTime=g(i.maxTime)),i.durationTime&&(i.durationTime=g(i.durationTime)),r.data("timepicker-settings",i),s&&(s.remove(),r.data("timepicker-list",!1))},getSecondsFromMidnight:function(){return g(e(this).val())},getTime:function(){return new Date(t.valueOf()+g(e(this).val())*1e3)},setTime:function(t){var n=e(this),r=m(g(t),n.data("timepicker-settings").timeFormat);n.val(r)},remove:function(){var t=e(this);if(!t.hasClass("ui-timepicker-input"))return;t.removeAttr("autocomplete","off"),t.removeClass("ui-timepicker-input"),t.removeData("timepicker-settings"),t.off(".timepicker"),t.data("timepicker-list")&&t.data("timepicker-list").remove(),t.removeData("timepicker-list")}};e.fn.timepicker=function(t){if(s[t])return s[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return s.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.timepicker")}});

/* // JCARRUSEL 0.2.3// */
(function($) {$.fn.jcarousel = function(o) {return this.each(function() {new $jc(this, o);});};var defaults = {vertical: false,start: 1,offset: 1,size: null,scroll: 3,visible: null,animation: 'normal',easing: 'swing',auto: 0,wrap: null,initCallback: null,reloadCallback: null,itemLoadCallback: null,itemFirstInCallback: null,itemFirstOutCallback: null,itemLastInCallback: null,itemLastOutCallback: null,itemVisibleInCallback: null,itemVisibleOutCallback: null,buttonNextHTML: '<div></div>',buttonPrevHTML: '<div></div>',buttonNextEvent: 'click',buttonPrevEvent: 'click',buttonNextCallback: null,buttonPrevCallback: null};$.jcarousel = function(e, o) {this.options    = $.extend({}, defaults, o || {});this.locked     = false;this.container  = null;this.clip       = null;this.list       = null;this.buttonNext = null;this.buttonPrev = null;this.wh = !this.options.vertical ? 'width' : 'height';this.lt = !this.options.vertical ? 'left' : 'top';var skin = '', split = e.className.split(' ');for (var i = 0; i < split.length; i++) {if (split[i].indexOf('jcarousel-skin') != -1) {$(e).removeClass(split[i]);var skin = split[i];break;}}if (e.nodeName == 'UL' || e.nodeName == 'OL') {this.list = $(e);this.container = this.list.parent();if (this.container.hasClass('jcarousel-clip')) {if (!this.container.parent().hasClass('jcarousel-container'))this.container = this.container.wrap('<div></div>');this.container = this.container.parent();} else if (!this.container.hasClass('jcarousel-container'))this.container = this.list.wrap('<div></div>').parent();} else {this.container = $(e);this.list = $(e).find('>ul,>ol,div>ul,div>ol');}if (skin != '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1)this.container.wrap('<div class=" '+ skin + '"></div>');this.clip = this.list.parent();if (!this.clip.length || !this.clip.hasClass('jcarousel-clip'))this.clip = this.list.wrap('<div></div>').parent();this.buttonPrev = $('.jcarousel-prev', this.container);if (this.buttonPrev.size() == 0 && this.options.buttonPrevHTML != null)this.buttonPrev = this.clip.before(this.options.buttonPrevHTML).prev();this.buttonPrev.addClass(this.className('jcarousel-prev'));this.buttonNext = $('.jcarousel-next', this.container);if (this.buttonNext.size() == 0 && this.options.buttonNextHTML != null)this.buttonNext = this.clip.before(this.options.buttonNextHTML).prev();this.buttonNext.addClass(this.className('jcarousel-next'));this.clip.addClass(this.className('jcarousel-clip'));this.list.addClass(this.className('jcarousel-list'));this.container.addClass(this.className('jcarousel-container'));var di = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;var li = this.list.children('li');var self = this;if (li.size() > 0) {var wh = 0, i = this.options.offset;li.each(function() {self.format(this, i++);wh += self.dimension(this, di);});this.list.css(this.wh, wh + 'px');if (!o || o.size === undefined)this.options.size = li.size();}this.container.css('display', 'block');this.buttonNext.css('display', 'block');this.buttonPrev.css('display', 'block');this.funcNext   = function() { self.next(); };this.funcPrev   = function() { self.prev(); };this.funcResize = function() { self.reload(); };if (this.options.initCallback != null)this.options.initCallback(this, 'init');if ($.browser.safari) {this.buttons(false, false);$(window).bind('load', function() { self.setup(); });} else
this.setup();};var $jc = $.jcarousel;$jc.fn = $jc.prototype = {jcarousel: '0.2.3'};$jc.fn.extend = $jc.extend = $.extend;$jc.fn.extend({setup: function() {this.first     = null;this.last      = null;this.prevFirst = null;this.prevLast  = null;this.animating = false;this.timer     = null;this.tail      = null;this.inTail    = false;if (this.locked)return;this.list.css(this.lt, this.pos(this.options.offset) + 'px');var p = this.pos(this.options.start);this.prevFirst = this.prevLast = null;this.animate(p, false);$(window).unbind('resize', this.funcResize).bind('resize', this.funcResize);},reset: function() {this.list.empty();this.list.css(this.lt, '0px');this.list.css(this.wh, '10px');if (this.options.initCallback != null)this.options.initCallback(this, 'reset');this.setup();},reload: function() {if (this.tail != null && this.inTail)this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);this.tail   = null;this.inTail = false;if (this.options.reloadCallback != null)this.options.reloadCallback(this);if (this.options.visible != null) {var self = this;var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;$('li', this.list).each(function(i) {wh += self.dimension(this, di);if (i + 1 < self.first)lt = wh;});this.list.css(this.wh, wh + 'px');this.list.css(this.lt, -lt + 'px');}this.scroll(this.first, false);},lock: function() {this.locked = true;this.buttons();},unlock: function() {this.locked = false;this.buttons();},size: function(s) {if (s != undefined) {this.options.size = s;if (!this.locked)this.buttons();}return this.options.size;},has: function(i, i2) {if (i2 == undefined || !i2)i2 = i;if (this.options.size !== null && i2 > this.options.size)i2 = this.options.size;for (var j = i; j <= i2; j++) {var e = this.get(j);if (!e.length || e.hasClass('jcarousel-item-placeholder'))return false;}return true;},get: function(i) {return $('.jcarousel-item-' + i, this.list);},add: function(i, s) {var e = this.get(i), old = 0, add = 0;if (e.length == 0) {var c, e = this.create(i), j = $jc.intval(i);while (c = this.get(--j)) {if (j <= 0 || c.length) {j <= 0 ? this.list.prepend(e) : c.after(e);break;}}} else old = this.dimension(e);e.removeClass(this.className('jcarousel-item-placeholder'));typeof s == 'string' ? e.html(s) : e.empty().append(s);var di = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;var wh = this.dimension(e, di) - old;if (i > 0 && i < this.first)this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');return e;},remove: function(i) {var e = this.get(i);if (!e.length || (i >= this.first && i <= this.last))return;var d = this.dimension(e);if (i < this.first)this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');e.remove();this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');},next: function() {this.stopAuto();if (this.tail != null && !this.inTail)this.scrollTail(false);else this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size != null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);},prev: function() {this.stopAuto();if (this.tail != null && this.inTail)this.scrollTail(true);else this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size != null && this.first == 1) ? this.options.size : this.first - this.options.scroll);},scrollTail: function(b) {if (this.locked || this.animating || !this.tail)return;var pos  = $jc.intval(this.list.css(this.lt));!b ? pos -= this.tail : pos += this.tail;this.inTail = !b;this.prevFirst = this.first;this.prevLast  = this.last;this.animate(pos);},scroll: function(i, a) {if (this.locked || this.animating)return;this.animate(this.pos(i), a);},pos: function(i) {if (this.locked || this.animating)return;if (this.options.wrap != 'circular')i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);var back = this.first > i;var pos  = $jc.intval(this.list.css(this.lt));var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;var c = back ? this.get(f) : this.get(this.last);var j = back ? f : f - 1;var e = null, l = 0, p = false, d = 0;while (back ? --j >= i : ++j < i) {e = this.get(j);p = !e.length;if (e.length == 0) {e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back ? 'before' : 'after' ](e);}c = e;d = this.dimension(e);if (p) l += d;if (this.first != null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size == null || j <= this.options.size))))pos = back ? pos + d : pos - d;}var clipping = this.clipping();var cache = [];var visible = 0, j = i, v = 0;var c = this.get(i - 1);while (++visible) {e = this.get(j);p = !e.length;if (e.length == 0) {e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));c.length == 0 ? this.list.prepend(e) : c[back ? 'before' : 'after' ](e);}c = e;var d = this.dimension(e);if (d == 0) {alert('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');return 0;}if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size)cache.push(e);else if (p)l += d;v += d;if (v >= clipping)break;j++;}for (var x = 0; x < cache.length; x++)cache[x].remove();if (l > 0) {this.list.css(this.wh, this.dimension(this.list) + l + 'px');if (back) {pos -= l;this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');}}var last = i + visible - 1;if (this.options.wrap != 'circular' && this.options.size && last > this.options.size)last = this.options.size;if (j > last) {visible = 0, j = last, v = 0;while (++visible) {var e = this.get(j--);if (!e.length)break;v += this.dimension(e);if (v >= clipping)break;}}var first = last - visible + 1;if (this.options.wrap != 'circular' && first < 1)first = 1;if (this.inTail && back) {pos += this.tail;this.inTail = false;}this.tail = null;if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {var m = $jc.margin(this.get(last), !this.options.vertical ? 'marginRight' : 'marginBottom');if ((v - m) > clipping)this.tail = v - clipping - m;}while (i-- > first)pos += this.dimension(this.get(i));this.prevFirst = this.first;this.prevLast  = this.last;this.first     = first;this.last      = last;return pos;},animate: function(p, a) {if (this.locked || this.animating)return;this.animating = true;var self = this;var scrolled = function() {self.animating = false;if (p == 0)self.list.css(self.lt,  0);if (self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size == null || self.last < self.options.size)self.startAuto();self.buttons();self.notify('onAfterAnimation');};this.notify('onBeforeAnimation');if (!this.options.animation || a == false) {this.list.css(this.lt, p + 'px');scrolled();} else {var o = !this.options.vertical ? {'left': p} : {'top': p};this.list.animate(o, this.options.animation, this.options.easing, scrolled);}},startAuto: function(s) {if (s != undefined)this.options.auto = s;if (this.options.auto == 0)return this.stopAuto();if (this.timer != null)return;var self = this;this.timer = setTimeout(function() { self.next(); }, this.options.auto * 1000);},stopAuto: function() {if (this.timer == null)return;clearTimeout(this.timer);this.timer = null;},buttons: function(n, p) {if (n == undefined || n == null) {var n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size == null || this.last < this.options.size);if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size != null && this.last >= this.options.size)n = this.tail != null && !this.inTail;}if (p == undefined || p == null) {var p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size != null && this.first == 1)p = this.tail != null && this.inTail;}var self = this;this.buttonNext[n ? 'bind' : 'unbind'](this.options.buttonNextEvent, this.funcNext)[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);this.buttonPrev[p ? 'bind' : 'unbind'](this.options.buttonPrevEvent, this.funcPrev)[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);if (this.buttonNext.length > 0 && (this.buttonNext[0].jcarouselstate == undefined || this.buttonNext[0].jcarouselstate != n) && this.options.buttonNextCallback != null) {this.buttonNext.each(function() { self.options.buttonNextCallback(self, this, n); });this.buttonNext[0].jcarouselstate = n;}if (this.buttonPrev.length > 0 && (this.buttonPrev[0].jcarouselstate == undefined || this.buttonPrev[0].jcarouselstate != p) && this.options.buttonPrevCallback != null) {this.buttonPrev.each(function() { self.options.buttonPrevCallback(self, this, p); });this.buttonPrev[0].jcarouselstate = p;}},notify: function(evt) {var state = this.prevFirst == null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');this.callback('itemLoadCallback', evt, state);if (this.prevFirst !== this.first) {this.callback('itemFirstInCallback', evt, state, this.first);this.callback('itemFirstOutCallback', evt, state, this.prevFirst);}if (this.prevLast !== this.last) {this.callback('itemLastInCallback', evt, state, this.last);this.callback('itemLastOutCallback', evt, state, this.prevLast);}this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);},callback: function(cb, evt, state, i1, i2, i3, i4) {if (this.options[cb] == undefined || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation'))return;var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];if (!$.isFunction(callback))return;var self = this;if (i1 === undefined)callback(self, state, evt);else if (i2 === undefined)this.get(i1).each(function() { callback(self, this, i1, state, evt); });else {for (var i = i1; i <= i2; i++)if (i !== null && !(i >= i3 && i <= i4))this.get(i).each(function() { callback(self, this, i, state, evt); });}},create: function(i) {return this.format('<li></li>', i);},format: function(e, i) {var $e = $(e).addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i));$e.attr('jcarouselindex', i);return $e;},className: function(c) {return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');},dimension: function(e, d) {var el = e.jquery != undefined ? e[0] : e;var old = !this.options.vertical ? el.offsetWidth + $jc.margin(el, 'marginLeft') + $jc.margin(el, 'marginRight') : el.offsetHeight + $jc.margin(el, 'marginTop') + $jc.margin(el, 'marginBottom');if (d == undefined || old == d)return old;var w = !this.options.vertical ? d - $jc.margin(el, 'marginLeft') - $jc.margin(el, 'marginRight') : d - $jc.margin(el, 'marginTop') - $jc.margin(el, 'marginBottom');$(el).css(this.wh, w + 'px');return this.dimension(el);},clipping: function() {return !this.options.vertical ? this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) : this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));},index: function(i, s) {if (s == undefined)s = this.options.size;return Math.round((((i-1) / s) - Math.floor((i-1) / s)) * s) + 1;}});$jc.extend({defaults: function(d) {return $.extend(defaults, d || {});},margin: function(e, p) {if (!e)return 0;var el = e.jquery != undefined ? e[0] : e;if (p == 'marginRight' && $.browser.safari) {var old = {'display': 'block', 'float': 'none', 'width': 'auto'}, oWidth, oWidth2;$.swap(el, old, function() { oWidth = el.offsetWidth; });old['marginRight'] = 0;$.swap(el, old, function() { oWidth2 = el.offsetWidth; });return oWidth2 - oWidth;}return $jc.intval($.css(el, p));},intval: function(v) {v = parseInt(v);return isNaN(v) ? 0 : v;}});})(jQuery);

/* // Accordion 1.6 // */
;(function($) {$.ui = $.ui || {};$.fn.extend({accordion: function(options, data) {var args = Array.prototype.slice.call(arguments, 1);return this.each(function() {if (typeof options == "string") {var accordion = $.data(this, "ui-accordion");accordion[options].apply(accordion, args);} else if (!$(this).is(".ui-accordion"))$.data(this, "ui-accordion", new $.ui.accordion(this, options));});},activate: function(index) {return this.accordion("activate", index);}});$.ui.accordion = function(container, options) {this.options = options = $.extend({}, $.ui.accordion.defaults, options);this.element = container;$(container).addClass("ui-accordion");if ( options.navigation ) {var current = $(container).find("a").filter(options.navigationFilter);if ( current.length ) {if ( current.filter(options.header).length ) {options.active = current;} else {options.active = current.parent().parent().prev();current.addClass("current");}}}options.headers = $(container).find(options.header);options.active = findActive(options.headers, options.active);if ( options.fillSpace ) {var maxHeight = $(container).parent().height();options.headers.each(function() {maxHeight -= $(this).outerHeight();});var maxPadding = 0;options.headers.next().each(function() {maxPadding = Math.max(maxPadding, $(this).innerHeight() - $(this).height());}).height(maxHeight - maxPadding);} else if ( options.autoheight ) {var maxHeight = 0;options.headers.next().each(function() {maxHeight = Math.max(maxHeight, $(this).outerHeight());}).height(maxHeight);}options.headers.not(options.active || "").next().hide();options.active.parent().andSelf().addClass(options.selectedClass);if (options.event)$(container).bind((options.event) + ".ui-accordion", clickHandler);};$.ui.accordion.prototype = {activate: function(index) {clickHandler.call(this.element, {target: findActive( this.options.headers, index )[0]});},
enable: function() {this.options.disabled = false;},disable: function() {this.options.disabled = true;},destroy: function() {this.options.headers.next().css("display", "");if ( this.options.fillSpace || this.options.autoheight ) {this.options.headers.next().css("height", "");}$.removeData(this.element, "ui-accordion");$(this.element).removeClass("ui-accordion").unbind(".ui-accordion");}}
function scopeCallback(callback, scope) {return function() {return callback.apply(scope, arguments);};}function completed(cancel) {if (!$.data(this, "ui-accordion"))return;var instance = $.data(this, "ui-accordion");var options = instance.options;options.running = cancel ? 0 : --options.running;if ( options.running )return;if ( options.clearStyle ) {options.toShow.add(options.toHide).css({height: "",overflow: ""});}$(this).triggerHandler("change.ui-accordion", [options.data], options.change);}function toggle(toShow, toHide, data, clickedActive, down) {var options = $.data(this, "ui-accordion").options;options.toShow = toShow;options.toHide = toHide;options.data = data;var complete = scopeCallback(completed, this);options.running = toHide.size() == 0 ? toShow.size() : toHide.size();if ( options.animated ) {if ( !options.alwaysOpen && clickedActive ) {$.ui.accordion.animations[options.animated]({toShow: jQuery([]),toHide: toHide,complete: complete,down: down,autoheight: options.autoheight});} else {$.ui.accordion.animations[options.animated]({toShow: toShow,toHide: toHide,complete: complete,down: down,autoheight: options.autoheight});}} else {if ( !options.alwaysOpen && clickedActive ) {toShow.toggle();} else {toHide.hide();toShow.show();}complete(true);}}function clickHandler(event) {var options = $.data(this, "ui-accordion").options;if (options.disabled)return false;if ( !event.target && !options.alwaysOpen ) {options.active.parent().andSelf().toggleClass(options.selectedClass);var toHide = options.active.next(),data = {instance: this,options: options,newHeader: jQuery([]),oldHeader: options.active,newContent: jQuery([]),oldContent: toHide},toShow = options.active = $([]);toggle.call(this, toShow, toHide, data );return false;}var clicked = $(event.target);if ( clicked.parents(options.header).length )while ( !clicked.is(options.header) )clicked = clicked.parent();var clickedActive = clicked[0] == options.active[0];if (options.running || (options.alwaysOpen && clickedActive))return false;if (!clicked.is(options.header))return;options.active.parent().andSelf().toggleClass(options.selectedClass);if ( !clickedActive ) {clicked.parent().andSelf().addClass(options.selectedClass);}var toShow = clicked.next(),toHide = options.active.next(),data = {instance: this,options: options,newHeader: clicked,oldHeader: options.active,newContent: toShow,oldContent: toHide},down = options.headers.index( options.active[0] ) > options.headers.index( clicked[0] );options.active = clickedActive ? $([]) : clicked;toggle.call(this, toShow, toHide, data, clickedActive, down );return false;};function findActive(headers, selector) {return selector != undefined ? typeof selector == "number" ? headers.filter(":eq(" + selector + ")") : headers.not(headers.not(selector)) : selector === false ? $([]) : headers.filter(":eq(0)");}$.extend($.ui.accordion, {defaults: {selectedClass: "selected",alwaysOpen: true,animated: 'slide',event: "click",header: "a",autoheight: true,running: 0,navigationFilter: function() {return this.href.toLowerCase() == location.href.toLowerCase();}},animations: {slide: function(options, additions) {options = $.extend({easing: "swing",duration: 300}, options, additions);if ( !options.toHide.size() ) {options.toShow.animate({height: "show"}, options);return;}var hideHeight = options.toHide.height(),showHeight = options.toShow.height(),difference = showHeight / hideHeight;options.toShow.css({ height: 0, overflow: 'hidden' }).show();options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate({height:"hide"},{step: function(now) {var current = (hideHeight - now) * difference;if ($.browser.msie || $.browser.opera) {current = Math.ceil(current);}options.toShow.height( current );},duration: options.duration,easing: options.easing,complete: function() {if ( !options.autoheight ) {options.toShow.css("height", "auto");}options.complete();}});},bounceslide: function(options) {this.slide(options, {easing: options.down ? "bounceout" : "swing",duration: options.down ? 1000 : 200});},easeslide: function(options) {this.slide(options, {easing: "easeinout",duration: 700})}}});})(jQuery);

/*
jdPicker 1.0
Requires jQuery version: >= 1.2.6
2010 - ? -- Paul Da Silva, AMJ Groupe
Copyright (c) 2007-2008 Jonathan Leighton & Torchbox Ltd
*/
jdPicker = (function($) { 

function jdPicker(el, opts) {
  if (typeof(opts) != "object") opts = {};
  $.extend(this, jdPicker.DEFAULT_OPTS, opts);
  
  this.input = $(el);
  this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate");
  
  this.build();
  this.selectDate();
  
  this.hide();
};
jdPicker.DEFAULT_OPTS = {
  month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  short_month_names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  short_day_names: ["S", "M", "T", "W", "T", "F", "S"],
  error_out_of_range: "Selected date is out of range",
  selectable_days: [0, 1, 2, 3, 4, 5, 6],
  non_selectable: [],
  rec_non_selectable: [],
  start_of_week: 1,
  show_week: 0,
  select_week: 0,
  week_label: "",
  date_min: "",
  date_max: "",
  date_format: "YYYY/mm/dd"
};
jdPicker.prototype = {
  build: function() {
	
	this.wrapp = this.input.wrap('<div class="jdpicker_w">');

	if(this.input.context.type!="hidden"){
		var clearer = $('<span class="date_clearer">&times;</span>');
		clearer.click(this.bindToObj(function(){this.input.val(""); this.selectDate();}));
		this.input.after(clearer);
	}
	
	switch (this.date_format){
		case "dd/mm/YYYY": 
			this.reg = new RegExp(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/); 
			this.date_decode = "new Date(matches[3], parseInt(matches[2]-1), matches[1]);";
			this.date_encode = 'this.strpad(date.getDate()) + "/" + this.strpad(date.getMonth()+1) + "/" + date.getFullYear();';
			this.date_encode_s = 'this.strpad(date.getDate()) + "/" + this.strpad(date.getMonth()+1)';
		break;
		case "FF dd YYYY": 
			this.reg = new RegExp(/^([a-zA-Z]+) (\d{1,2}) (\d{4})$/); 
			this.date_decode = "new Date(matches[3], this.indexFor(this.month_names, matches[1]), matches[2]);"; 
			this.date_encode = 'this.month_names[date.getMonth()] + " " + this.strpad(date.getDate()) + " " + date.getFullYear();';
			this.date_encode_s = 'this.month_names[date.getMonth()] + " " + this.strpad(date.getDate());';
		break;
		case "dd MM YYYY": 
			this.reg = new RegExp(/^(\d{1,2}) ([a-zA-Z]{3}) (\d{4})$/); 
			this.date_decode = "new Date(matches[3], this.indexFor(this.short_month_names, matches[2]), matches[1]);"; 
			this.date_encode = 'this.strpad(date.getDate()) + " " + this.short_month_names[date.getMonth()] + " " + date.getFullYear();'; 
			this.date_encode_s = 'this.strpad(date.getDate()) + " " + this.short_month_names[date.getMonth()];'; 
		break;
		case "MM dd YYYY": 
			this.reg = new RegExp(/^([a-zA-Z]{3}) (\d{1,2}) (\d{4})$/); 
			this.date_decode = "new Date(matches[3], this.indexFor(this.short_month_names, matches[1]), matches[2]);"; 
			this.date_encode = 'this.short_month_names[date.getMonth()] + " " + this.strpad(date.getDate()) + " " + date.getFullYear();'; 
			this.date_encode_s = 'this.short_month_names[date.getMonth()] + " " + this.strpad(date.getDate());'; 
		break;
		case "dd FF YYYY": 
			this.reg = new RegExp(/^(\d{1,2}) ([a-zA-Z]+) (\d{4})$/); 
			this.date_decode = "new Date(matches[3], this.indexFor(this.month_names, matches[2]), matches[1]);"; 
			this.date_encode = 'this.strpad(date.getDate()) + " " + this.month_names[date.getMonth()] + " " + date.getFullYear();'; 
			this.date_encode_s = 'this.strpad(date.getDate()) + " " + this.month_names[date.getMonth()];'; 
		break;
		case "YYYY/mm/dd": 
		default: 
			this.reg = new RegExp(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/); 
			this.date_decode = "new Date(matches[1], parseInt(matches[2]-1), matches[3]);"; 
			this.date_encode = 'date.getFullYear() + "/" + this.strpad(date.getMonth()+1) + "/" + this.strpad(date.getDate());'; 
			this.date_encode_s = 'this.strpad(date.getMonth()+1) + "/" + this.strpad(date.getDate());'; 
		break;
	}
	
	if(this.date_max != "" && this.date_max.match(this.reg)){
		var matches = this.date_max.match(this.reg);
		this.date_max = eval(this.date_decode);
	}else
		this.date_max = "";
	
	if(this.date_min != "" && this.date_min.match(this.reg)){
		var matches = this.date_min.match(this.reg);
		this.date_min = eval(this.date_decode);
	}else
		this.date_min = "";
	
    var monthNav = $('<p class="month_nav">' +
      '<span class="button prev" title="[Page-Up]">&#171;</span>' +
      ' <span class="month_name"></span> ' +
      '<span class="button next" title="[Page-Down]">&#187;</span>' +
      '</p>');
	  
    this.monthNameSpan = $(".month_name", monthNav);
    $(".prev", monthNav).click(this.bindToObj(function() { this.moveMonthBy(-1); }));
    $(".next", monthNav).click(this.bindToObj(function() { this.moveMonthBy(1); }));
    
	this.monthNameSpan.dblclick(this.bindToObj(function(){
		this.monthNameSpan.empty().append(this.getMonthSelect());
		$('select', this.monthNameSpan).change(this.bindToObj(function(){
			this.moveMonthBy(parseInt($('select :selected', this.monthNameSpan).val()) - this.currentMonth.getMonth());
		}));
	}));
	
    var yearNav = $('<p class="year_nav">' +
      '<span class="button prev" title="[Ctrl+Page-Up]">&#171;</span>' +
      ' <span class="year_name" id="year_name"></span> ' +
      '<span class="button next" title="[Ctrl+Page-Down]">&#187;</span>' +
      '</p>');
	  
    this.yearNameSpan = $(".year_name", yearNav);
    $(".prev", yearNav).click(this.bindToObj(function() { this.moveMonthBy(-12); }));
    $(".next", yearNav).click(this.bindToObj(function() { this.moveMonthBy(12); }));
    
    this.yearNameSpan.dblclick(this.bindToObj(function(){
    	
    	if($('.year_name input', this.rootLayers).length==0){
			var initialDate = this.yearNameSpan.html();
			
			var yearNameInput = $('<input type="text" class="text year_input" value="'+initialDate+'" />');
			this.yearNameSpan.empty().append(yearNameInput);
			
			$(".year_input", yearNav).keyup(this.bindToObj(function(){
				if($('input',this.yearNameSpan).val().length == 4 && $('input',this.yearNameSpan).val() != initialDate && parseInt($('input',this.yearNameSpan).val()) == $('input',this.yearNameSpan).val()){
					this.moveMonthBy(parseInt(parseInt(parseInt($('input',this.yearNameSpan).val()) - initialDate)*12));
				}else if($('input',this.yearNameSpan).val().length>4)
					$('input',this.yearNameSpan).val($('input',this.yearNameSpan).val().substr(0, 4));
			}));
			
			$('input',this.yearNameSpan).focus();
			$('input',this.yearNameSpan).select();
    	}
		
    }));

	var error_msg = $('<div class="error_msg"></div>');
	
    var nav = $('<div class="nav"></div>').append(error_msg, monthNav, yearNav);
    
    var tableShell = "<table><thead><tr>";
	
	if(this.show_week == 1) tableShell +='<th class="week_label">'+(this.week_label)+'</th>';
	
    $(this.adjustDays(this.short_day_names)).each(function() {
      tableShell += "<th>" + this + "</th>";
    });
	
    tableShell += "</tr></thead><tbody></tbody></table>";

    var style = (this.input.context.type=="hidden")?' style="display:block; position:static; margin:0 auto"':'';    

    this.dateSelector = this.rootLayers = $('<div class="date_selector" '+style+'></div>').append(nav, tableShell).insertAfter(this.input);
    
    if ($.browser.msie && $.browser.version < 7) {
      
      this.ieframe = $('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector);
      this.rootLayers = this.rootLayers.add(this.ieframe);
      
      $(".button", nav).mouseover(function() { $(this).addClass("hover"); });
      $(".button", nav).mouseout(function() { $(this).removeClass("hover"); });
    };
    
    this.tbody = $("tbody", this.dateSelector);

    this.input.change(this.bindToObj(function() { this.selectDate(); }));
    this.selectDate();
	
  },
  
  selectMonth: function(date) {
    var newMonth = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if(this.isNewDateAllowed(newMonth)){
		if (!this.currentMonth || !(this.currentMonth.getFullYear() == newMonth.getFullYear() &&
									this.currentMonth.getMonth() == newMonth.getMonth())) {
		  
		  this.currentMonth = newMonth;
		  
		  var rangeStart = this.rangeStart(date), rangeEnd = this.rangeEnd(date);
		  var numDays = this.daysBetween(rangeStart, rangeEnd);
		  var dayCells = "";
		  
		  for (var i = 0; i <= numDays; i++) {
			var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i, 12, 00);
			
			if (this.isFirstDayOfWeek(currentDay)){
			
				var firstDayOfWeek = currentDay;
				var lastDayOfWeek = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()+6, 12, 00);
			
				if(this.select_week && this.isNewDateAllowed(firstDayOfWeek))
					dayCells += "<tr date='" + this.dateToString(currentDay) + "' class='selectable_week'>";
				else
					dayCells += "<tr>";
					
				if(this.show_week==1)
					dayCells += '<td class="week_num">'+this.getWeekNum(currentDay)+'</td>';
			}
			if ((this.select_week == 0 && currentDay.getMonth() == date.getMonth() && this.isNewDateAllowed(currentDay) && !this.isHoliday(currentDay)) || (this.select_week==1 && currentDay.getMonth() == date.getMonth() && this.isNewDateAllowed(firstDayOfWeek))) {
			  dayCells += '<td class="selectable_day" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
			} else {
			  dayCells += '<td class="unselected_month" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
			};
			
			if (this.isLastDayOfWeek(currentDay)) dayCells += "</tr>";
		  };
		  this.tbody.empty().append(dayCells);
		  
		  this.monthNameSpan.empty().append(this.monthName(date));
		  this.yearNameSpan.empty().append(this.currentMonth.getFullYear());
		  
		  if(this.select_week == 0){
			  $(".selectable_day", this.tbody).click(this.bindToObj(function(event) {
				this.changeInput($(event.target).attr("date"));
			  }));
		  }else{
			  $(".selectable_week", this.tbody).click(this.bindToObj(function(event) {
				this.changeInput($(event.target.parentNode).attr("date"));
			  }));
		  }
		  
		  $("td[date='" + this.dateToString(new Date()) + "']", this.tbody).addClass("today");
		  if(this.select_week == 1){
			  $("tr", this.tbody).mouseover(function() { $(this).addClass("hover"); });
			  $("tr", this.tbody).mouseout(function() { $(this).removeClass("hover"); });
		  }else{
			  $("td.selectable_day", this.tbody).mouseover(function() { $(this).addClass("hover"); });
			  $("td.selectable_day", this.tbody).mouseout(function() { $(this).removeClass("hover"); });
		  }
		};
		
		$('.selected', this.tbody).removeClass("selected");
		$('td[date="' + this.selectedDateString + '"], tr[date="' + this.selectedDateString + '"]', this.tbody).addClass("selected");
	}else
		this.show_error(this.error_out_of_range);
  },
  
  selectDate: function(date) {
    if (typeof(date) == "undefined") {
      date = this.stringToDate(this.input.val());
    };
    if (!date) date = new Date();
    
	if(this.select_week == 1 && !this.isFirstDayOfWeek(date))
		date = new Date(date.getFullYear(), date.getMonth(), (date.getDate() - date.getDay() + this.start_of_week), 12, 00);	
	
	if(this.isNewDateAllowed(date)){
		this.selectedDate = date;
		this.selectedDateString = this.dateToString(this.selectedDate);
		this.selectMonth(this.selectedDate);
	}else if((this.date_min) && this.daysBetween(this.date_min, date)<0){
			this.selectedDate = this.date_min;
			this.selectMonth(this.date_min);
			this.input.val(" ");
	}else{
			this.selectMonth(this.date_max);
			this.input.val(" ");
	}
  },
  
  isNewDateAllowed: function(date){
	return ((!this.date_min) || this.daysBetween(this.date_min, date)>=0) && ((!this.date_max) || this.daysBetween(date, this.date_max)>=0);
  },

  isHoliday: function(date){
	return ((this.indexFor(this.selectable_days, date.getDay())===false || this.indexFor(this.non_selectable, this.dateToString(date))!==false) || this.indexFor(this.rec_non_selectable, this.dateToShortString(date))!==false);
  },
  
  changeInput: function(dateString) {
    this.input.val(dateString).change();
    if(this.input.context.type!="hidden")
       this.hide();
  },
  
  show: function() {
	$('.error_msg', this.rootLayers).css('display', 'none');
    this.rootLayers.slideDown();
    $([window, document.body]).click(this.hideIfClickOutside);
    this.input.unbind("focus", this.show);
	this.input.attr('readonly', true);
    $(document.body).keydown(this.keydownHandler);
    this.setPosition();
  },
  
  hide: function() {
	if(this.input.context.type!="hidden"){
		this.input.removeAttr('readonly');
		this.rootLayers.slideUp();
		$([window, document.body]).unbind("click", this.hideIfClickOutside);
		this.input.focus(this.show);
		$(document.body).unbind("keydown", this.keydownHandler);
	}
  },
  
  hideIfClickOutside: function(event) {
    if (event.target != this.input[0] && !this.insideSelector(event)) {
      this.hide();
    };
  },
  
  insideSelector: function(event) {
    var offset = this.dateSelector.position();
    offset.right = offset.left + this.dateSelector.outerWidth();
    offset.bottom = offset.top + this.dateSelector.outerHeight();
    
    return event.pageY < offset.bottom &&
           event.pageY > offset.top &&
           event.pageX < offset.right &&
           event.pageX > offset.left;
  },
  
  keydownHandler: function(event) {
    switch (event.keyCode)
    {
      case 9: 
      case 27:
        this.hide();
        return;
      break;
      case 13:
		if(this.isNewDateAllowed(this.stringToDate(this.selectedDateString)) && !this.isHoliday(this.stringToDate(this.selectedDateString)))
	        this.changeInput(this.selectedDateString);
      break;
      case 33:
        this.moveDateMonthBy(event.ctrlKey ? -12 : -1);
      break;
      case 34:
        this.moveDateMonthBy(event.ctrlKey ? 12 : 1);
      break;
      case 38:
        this.moveDateBy(-7);
      break;
      case 40:
        this.moveDateBy(7);
      break;
      case 37:
        if(this.select_week == 0) this.moveDateBy(-1);
      break;
      case 39:
        if(this.select_week == 0) this.moveDateBy(1);
      break;
      default:
        return;
    }
    event.preventDefault();
  },
  
  stringToDate: function(string) {
    var matches;
	
    if (matches = string.match(this.reg)) {
      if(matches[3]==0 && matches[2]==0 && matches[1]==0)
    	return null;
      else
        return eval(this.date_decode);
    } else {
      return null;
    };
  },
  
  dateToString: function(date) {
    return eval(this.date_encode);
  },

  dateToShortString: function(date){
    return eval(this.date_encode_s);
  },
  
  setPosition: function() {
    var offset = this.input.offset();
    this.rootLayers.css({
      top: offset.top + this.input.outerHeight(),
      left: offset.left
    });
    
    if (this.ieframe) {
      this.ieframe.css({
        width: this.dateSelector.outerWidth(),
        height: this.dateSelector.outerHeight()
      });
    };
  },
  
  moveDateBy: function(amount) {
    var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate() + amount);
    this.selectDate(newDate);
  },
  
  moveDateMonthBy: function(amount) {
    var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + amount, this.selectedDate.getDate());
    if (newDate.getMonth() == this.selectedDate.getMonth() + amount + 1) {
      newDate.setDate(0);
    };
    this.selectDate(newDate);
  },
  
  moveMonthBy: function(amount) {
	if(amount<0)
		var newMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + amount+1, -1);
    else
		var newMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + amount, 1);
    this.selectMonth(newMonth);
  },
  
  monthName: function(date) {
    return this.month_names[date.getMonth()];
  },
  
  getMonthSelect:function(){
  	var month_select = '<select>';
	for(var i = 0; i<this.month_names.length; i++){
		if(i==this.currentMonth.getMonth())
			month_select += '<option value="'+(i)+'" selected="selected">'+this.month_names[i]+'</option>';
		else
			month_select += '<option value="'+(i)+'">'+this.month_names[i]+'</option>';
	}
	month_select += '</select>';
	
	return month_select;
  },
  
  bindToObj: function(fn) {
    var self = this;
    return function() { return fn.apply(self, arguments) };
  },
  
  bindMethodsToObj: function() {
    for (var i = 0; i < arguments.length; i++) {
      this[arguments[i]] = this.bindToObj(this[arguments[i]]);
    };
  },
  
  indexFor: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value == array[i]) return i;
    };
	return false;
  },
  
  monthNum: function(month_name) {
    return this.indexFor(this.month_names, month_name);
  },
  
  shortMonthNum: function(month_name) {
    return this.indexFor(this.short_month_names, month_name);
  },
  
  shortDayNum: function(day_name) {
    return this.indexFor(this.short_day_names, day_name);
  },
  
  daysBetween: function(start, end) {
    start = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    end = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    return (end - start) / 86400000;
  },
  
  changeDayTo: function(dayOfWeek, date, direction) {
    var difference = direction * (Math.abs(date.getDay() - dayOfWeek - (direction * 7)) % 7);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + difference);
  },
  
  rangeStart: function(date) {
    return this.changeDayTo(this.start_of_week, new Date(date.getFullYear(), date.getMonth()), -1);
  },
  
  rangeEnd: function(date) {
    return this.changeDayTo((this.start_of_week - 1) % 7, new Date(date.getFullYear(), date.getMonth() + 1, 0), 1);
  },
  
  isFirstDayOfWeek: function(date) {
    return date.getDay() == this.start_of_week;
  },
  
  getWeekNum:function(date){
	date_week= new Date(date.getFullYear(), date.getMonth(), date.getDate()+6);
	var firstDayOfYear = new Date(date_week.getFullYear(), 0, 1, 12, 00);
	var n = parseInt(this.daysBetween(firstDayOfYear, date_week)) + 1;
	return Math.floor((date_week.getDay() + n + 5)/7) - Math.floor(date_week.getDay() / 5);
  },
  
  isLastDayOfWeek: function(date) {
    return date.getDay() == (this.start_of_week - 1) % 7;
  },
  
  show_error: function(error){
	$('.error_msg', this.rootLayers).html(error);
	$('.error_msg', this.rootLayers).slideDown(400, function(){
		setTimeout("$('.error_msg', this.rootLayers).slideUp(200);", 2000);
	});
  },
  
  adjustDays: function(days) {
    var newDays = [];
    for (var i = 0; i < days.length; i++) {
      newDays[i] = days[(i + this.start_of_week) % 7];
    };
    return newDays;
  },
  
  strpad: function(num){
	if(parseInt(num)<10)	return "0"+parseInt(num);
	else	return parseInt(num);
  }
  
};

$.fn.jdPicker = function(opts) {
  return this.each(function() { new jdPicker(this, opts); });
};
$.jdPicker = { initialize: function(opts) {
  $("input.jdpicker").jdPicker(opts);
} };

return jdPicker;
})(jQuery); 

$($.jdPicker.initialize);

/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*
 q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&
 f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};
 a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===
 b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+
 a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,
 display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));
 c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);
 a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-
 b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-
 a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=
 d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();
 c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",
 manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");
 switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);
 
 