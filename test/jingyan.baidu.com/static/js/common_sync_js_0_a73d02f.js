var require, define;
! function(e) {
    function r(e, r) {
        function t() { clearTimeout(o) } if (!(e in u)) { u[e] = !0; var i = document.createElement("script"); if (r) { var o = setTimeout(r, require.timeout);
                i.onerror = function() { clearTimeout(o), r() }, "onload" in i ? i.onload = t : i.onreadystatechange = function() {
                    ("loaded" === this.readyState || "complete" === this.readyState) && t() } } return i.type = "text/javascript", i.src = e, n.appendChild(i), i } }

    function t(e, t, n) { var o = i[e] || (i[e] = []);
        o.push(t); var a, u = s[e] || {},
            f = u.pkg;
        a = f ? c[f].url : u.url || e, r(a, n && function() { n(e) }) } var n = document.getElementsByTagName("head")[0],
        i = {},
        o = {},
        a = {},
        u = {},
        s = {},
        c = {};
    define = function(e, r) { o[e] = r; var t = i[e]; if (t) { for (var n = 0, a = t.length; a > n; n++) t[n]();
            delete i[e] } }, require = function(e) { e = require.alias(e); var r = a[e]; if (r) return r.exports; var t = o[e]; if (!t) throw "[ModJS] Cannot find module `" + e + "`";
        r = a[e] = { exports: {} }; var n = "function" == typeof t ? t.apply(r, [require, r.exports, r]) : t; return n && (r.exports = n), r.exports }, require.async = function(r, n, i) {
        function a(e) { for (var r = 0, n = e.length; n > r; r++) { var c = e[r]; if (c in o) { var f = s[c];
                    f && "deps" in f && a(f.deps) } else if (!(c in l)) { l[c] = !0, p++, t(c, u, i); var f = s[c];
                    f && "deps" in f && a(f.deps) } } }

        function u() { if (0 === p--) { for (var t = [], i = 0, o = r.length; o > i; i++) t[i] = require(r[i]);
                n && n.apply(e, t) } } "string" == typeof r && (r = [r]); for (var c = 0, f = r.length; f > c; c++) r[c] = require.alias(r[c]); var l = {},
            p = 0;
        a(r), u() }, require.resourceMap = function(e) { var r, t;
        t = e.res; for (r in t) t.hasOwnProperty(r) && (s[r] = t[r]);
        t = e.pkg; for (r in t) t.hasOwnProperty(r) && (c[r] = t[r]) }, require.loadJs = function(e) { r(e) }, require.loadCss = function(e) { if (e.content) { var r = document.createElement("style");
            r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e.content : r.innerHTML = e.content, n.appendChild(r) } else if (e.url) { var t = document.createElement("link");
            t.href = e.url, t.rel = "stylesheet", t.type = "text/css", n.appendChild(t) } }, require.alias = function(e) { return e }, require.timeout = 5e3 }(this);;
define("common:widget/lib/tangram/base/base.js", function(e, t, n) {
    var r, o = r = o || { version: "1.5.2.1" };
    o.guid = "$BAIDU$", o.$$ = window[o.guid] = window[o.guid] || { global: {} }, o.ajax = o.ajax || {}, o.fn = o.fn || {}, o.fn.blank = function() {}, o.ajax.request = function(e, t) {
        function n() { if (4 == l.readyState) { try { var e = l.status } catch (t) { return void i("failure") } i(e), i(e >= 200 && 300 > e || 304 == e || 1223 == e ? "success" : "failure"), window.setTimeout(function() { l.onreadystatechange = o.fn.blank, f && (l = null) }, 0) } }

        function r() { if (window.ActiveXObject) try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (e) { try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }
            return window.XMLHttpRequest ? new XMLHttpRequest : void 0 }

        function i(e) { e = "on" + e; var t = v[e],
                n = o.ajax[e]; if (t)
                if (a && clearTimeout(a), "onsuccess" != e) t(l);
                else { try { l.responseText } catch (r) { return t(l) } t(l, l.responseText) } else if (n) { if ("onsuccess" == e) return;
                n(l) } } var a, s, l, u = t || {},
            c = u.data || "",
            f = !(u.async === !1),
            d = u.username || "",
            p = u.password || "",
            g = (u.method || "GET").toUpperCase(),
            m = u.headers || {},
            h = u.timeout || 0,
            v = {}; for (s in u) v[s] = u[s];
        m["X-Requested-With"] = "XMLHttpRequest"; try { l = r(), "GET" == g && (c && (e += (e.indexOf("?") >= 0 ? "&" : "?") + c, c = null), u.noCache && (e += (e.indexOf("?") >= 0 ? "&" : "?") + "b" + +new Date + "=1")), d ? l.open(g, e, f, d, p) : l.open(g, e, f), f && (l.onreadystatechange = n), "POST" == g && l.setRequestHeader("Content-Type", m["Content-Type"] || "application/x-www-form-urlencoded"); for (s in m) m.hasOwnProperty(s) && l.setRequestHeader(s, m[s]);
            i("beforerequest"), h && (a = setTimeout(function() { l.onreadystatechange = o.fn.blank, l.abort(), i("timeout") }, h)), l.send(c), f || n() } catch (y) { i("failure") } return l }, o.url = o.url || {}, o.url.escapeSymbol = function(e) { return String(e).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function(e) { return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase() }) }, o.ajax.form = function(e, t) {
        function n(e, t) { y.push(e + "=" + t) } t = t || {}; var r, i, a, s, l, u, c, f, d, p = e.elements,
            g = p.length,
            m = (e.getAttribute("method"), e.getAttribute("action")),
            h = t.replacer || function(e) { return e },
            v = {},
            y = []; for (r in t) t.hasOwnProperty(r) && (v[r] = t[r]); for (r = 0; g > r; r++)
            if (i = p[r], s = i.name, !i.disabled && s) switch (a = i.type, l = o.url.escapeSymbol(i.value), a) {
                case "radio":
                case "checkbox":
                    if (!i.checked) break;
                case "textarea":
                case "text":
                case "password":
                case "hidden":
                case "select-one":
                    n(s, h(l, s)); break;
                case "select-multiple":
                    for (u = i.options, f = u.length, c = 0; f > c; c++) d = u[c], d.selected && n(s, h(d.value, s)) }
        return v.data = y.join("&"), v.method = e.getAttribute("method") || "GET", o.ajax.request(m, v) }, o.ajax.get = function(e, t) { return o.ajax.request(e, { onsuccess: t }) }, o.ajax.post = function(e, t, n) { return o.ajax.request(e, { onsuccess: n, method: "POST", data: t }) }, o.array = o.array || {}, o.array.indexOf = function(e, t, n) { var r = e.length; for (n = 0 | n, 0 > n && (n = Math.max(0, r + n)); r > n; n++)
            if (n in e && e[n] === t) return n; return -1 }, o.array.contains = function(e, t) { return o.array.indexOf(e, t) >= 0 }, o.each = o.array.forEach = o.array.each = function(e, t, n) { var r, o, i, a = e.length; if ("function" == typeof t)
            for (i = 0; a > i && (o = e[i], r = t.call(n || e, o, i), r !== !1); i++); return e }, o.array.empty = function(e) { e.length = 0 }, o.array.every = function(e, t, n) { for (var r = 0, o = e.length; o > r; r++)
            if (r in e && !t.call(n || e, e[r], r)) return !1; return !0 }, o.array.filter = function(e, t, n) { var r, o, i = [],
            a = 0,
            s = e.length; if ("function" == typeof t)
            for (o = 0; s > o; o++) r = e[o], !0 === t.call(n || e, r, o) && (i[a++] = r); return i }, o.array.find = function(e, t) { var n, r, o = e.length; if ("function" == typeof t)
            for (r = 0; o > r; r++)
                if (n = e[r], !0 === t.call(e, n, r)) return n; return null }, o.array.hash = function(e, t) { for (var n = {}, r = t && t.length, o = 0, i = e.length; i > o; o++) n[e[o]] = r && r > o ? t[o] : !0; return n }, o.array.lastIndexOf = function(e, t, n) { var r = e.length; for (n = 0 | n, (!n || n >= r) && (n = r - 1), 0 > n && (n += r); n >= 0; n--)
            if (n in e && e[n] === t) return n; return -1 }, o.array.map = function(e, t, n) { for (var r = [], o = 0, i = e.length; i > o; o++) r[o] = t.call(n || e, e[o], o); return r }, o.array.reduce = function(e, t, n) { var r = 0,
            o = e.length,
            i = 0; if (arguments.length < 3) { for (; o > r; r++) { n = e[r++], i = 1; break } if (!i) return } for (; o > r; r++) r in e && (n = t(n, e[r], r, e)); return n }, o.array.remove = function(e, t) { for (var n = e.length; n--;) n in e && e[n] === t && e.splice(n, 1); return e }, o.array.removeAt = function(e, t) { return e.splice(t, 1)[0] }, o.array.some = function(e, t, n) { for (var r = 0, o = e.length; o > r; r++)
            if (r in e && t.call(n || e, e[r], r)) return !0; return !1 }, o.array.unique = function(e, t) { var n, r, o = e.length,
            i = e.slice(0); for ("function" != typeof t && (t = function(e, t) { return e === t }); --o > 0;)
            for (r = i[o], n = o; n--;)
                if (t(r, i[n])) { i.splice(o, 1); break }
        return i }, o.async = o.async || {}, o.object = o.object || {}, o.extend = o.object.extend = function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e }, o.lang = o.lang || {}, o.lang.isFunction = function(e) { return "[object Function]" == Object.prototype.toString.call(e) }, o.async._isDeferred = function(e) { var t = o.lang.isFunction; return e && t(e.success) && t(e.then) && t(e.fail) && t(e.cancel) }, o.async.Deferred = function() {
        function e() { if (!t._cancelled && !t._firing) { if (t._nextDeferred) return void t._nextDeferred.then(t._resolveChain[0], t._rejectChain[0]);
                t._firing = 1; for (var e = t._isError ? t._rejectChain : t._resolveChain, n = t._result[t._isError ? 1 : 0]; e[0] && !t._cancelled;) try { var r = e.shift().call(t, n);
                    o.async._isDeferred(r) && (t._nextDeferred = r, [].push.apply(r._resolveChain, t._resolveChain), [].push.apply(r._rejectChain, t._rejectChain), e = t._resolveChain = [], t._rejectChain = []) } catch (i) { throw i } finally { t._fired = 1, t._firing = 0 } } } var t = this;
        o.extend(t, { _fired: 0, _firing: 0, _cancelled: 0, _resolveChain: [], _rejectChain: [], _result: [], _isError: 0 }), t.resolve = t.fireSuccess = function(n) { return t._result[0] = n, e(), t }, t.reject = t.fireFail = function(n) { return t._result[1] = n, t._isError = 1, e(), t }, t.then = function(n, r) { return t._resolveChain.push(n), t._rejectChain.push(r), t._fired && e(), t }, t.success = function(e) { return t.then(e, o.fn.blank) }, t.fail = function(e) { return t.then(o.fn.blank, e) }, t.cancel = function() { t._cancelled = 1 } }, o.async.get = function(e) { var t = new o.async.Deferred; return o.ajax.request(e, { onsuccess: function(e, n) { t.resolve({ xhr: e, responseText: n }) }, onfailure: function(e) { t.reject({ xhr: e }) } }), t }, o.async.post = function(e, t) { var n = new o.async.Deferred; return o.ajax.request(e, { method: "POST", data: t, onsuccess: function(e, t) { n.resolve({ xhr: e, responseText: t }) }, onfailure: function(e) { n.reject({ xhr: e }) } }), n }, o.async.when = function(e, t, n) { if (o.async._isDeferred(e)) return e.then(t, n), e; var r = new o.async.Deferred; return r.then(t, n).resolve(e), r }, o.browser = o.browser || {}, o.browser.chrome = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1 : void 0, o.browser.firefox = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1 : void 0, o.browser.ie = o.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0, o.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), o.browser.isStrict = "CSS1Compat" == document.compatMode, o.browser.isWebkit = /webkit/i.test(navigator.userAgent);
    try { /(\d+\.\d+)/.test(external.max_version) && (o.browser.maxthon = +RegExp.$1) } catch (i) {} o.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0,
        function() { var e = navigator.userAgent;
            o.browser.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e) ? +(RegExp.$1 || RegExp.$2) : void 0 }(), o.cookie = o.cookie || {}, o.cookie._isValidKey = function(e) { return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e) }, o.cookie.getRaw = function(e) { if (o.cookie._isValidKey(e)) { var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    n = t.exec(document.cookie); if (n) return n[2] || null } return null }, o.cookie.get = function(e) { var t = o.cookie.getRaw(e); return "string" == typeof t ? t = decodeURIComponent(t) : null }, o.cookie.setRaw = function(e, t, n) { if (o.cookie._isValidKey(e)) { n = n || {}; var r = n.expires; "number" == typeof n.expires && (r = new Date, r.setTime(r.getTime() + n.expires)), document.cookie = e + "=" + t + (n.path ? "; path=" + n.path : "") + (r ? "; expires=" + r.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "") } }, o.cookie.remove = function(e, t) { t = t || {}, t.expires = new Date(0), o.cookie.setRaw(e, "", t) }, o.cookie.set = function(e, t, n) { o.cookie.setRaw(e, encodeURIComponent(t), n) }, o.date = o.date || {}, o.number = o.number || {}, o.number.pad = function(e, t) { var n = "",
                r = 0 > e,
                o = String(Math.abs(e)); return o.length < t && (n = new Array(t - o.length + 1).join("0")), (r ? "-" : "") + n + o }, o.date.format = function(e, t) {
            function n(e, n) { t = t.replace(e, n) } if ("string" != typeof t) return e.toString(); var r = o.number.pad,
                i = e.getFullYear(),
                a = e.getMonth() + 1,
                s = e.getDate(),
                l = e.getHours(),
                u = e.getMinutes(),
                c = e.getSeconds(); return n(/yyyy/g, r(i, 4)), n(/yy/g, r(parseInt(i.toString().slice(2), 10), 2)), n(/MM/g, r(a, 2)), n(/M/g, a), n(/dd/g, r(s, 2)), n(/d/g, s), n(/HH/g, r(l, 2)), n(/H/g, l), n(/hh/g, r(l % 12, 2)), n(/h/g, l % 12), n(/mm/g, r(u, 2)), n(/m/g, u), n(/ss/g, r(c, 2)), n(/s/g, c), t }, o.date.parse = function(e) { var t = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$"); if ("string" == typeof e) { if (t.test(e) || isNaN(Date.parse(e))) { var n = e.split(/ |T/),
                        r = n.length > 1 ? n[1].split(/[^\d]/) : [0, 0, 0],
                        o = n[0].split(/[^\d]/); return new Date(o[0] - 0, o[1] - 1, o[2] - 0, r[0] - 0, r[1] - 0, r[2] - 0) } return new Date(e) } return new Date }, o.dom = o.dom || {}, o.dom.g = function(e) { return e ? "string" == typeof e || e instanceof String ? document.getElementById(e) : !e.nodeName || 1 != e.nodeType && 9 != e.nodeType ? null : e : null }, o.g = o.G = o.dom.g, o.string = o.string || {},
        function() { var e = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            o.string.trim = function(t) { return String(t).replace(e, "") } }(), o.trim = o.string.trim, o.dom.addClass = function(e, t) { e = o.dom.g(e); for (var n = t.split(/\s+/), r = e.className, i = " " + r + " ", a = 0, s = n.length; s > a; a++) i.indexOf(" " + n[a] + " ") < 0 && (r += (r ? " " : "") + n[a]); return e.className = r, e }, o.addClass = o.dom.addClass, o.dom.children = function(e) { e = o.dom.g(e); for (var t = [], n = e.firstChild; n; n = n.nextSibling) 1 == n.nodeType && t.push(n); return t }, o.lang.isString = function(e) { return "[object String]" == Object.prototype.toString.call(e) }, o.isString = o.lang.isString, o.dom._g = function(e) { return o.lang.isString(e) ? document.getElementById(e) : e }, o._g = o.dom._g, o.dom.contains = function(e, t) { var n = o.dom._g; return e = n(e), t = n(t), e.contains ? e != t && e.contains(t) : !!(16 & e.compareDocumentPosition(t)) }, o.dom._NAME_ATTRS = function() { var e = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", rowspan: "rowSpan", valign: "vAlign", usemap: "useMap", frameborder: "frameBorder" }; return o.browser.ie < 8 ? (e["for"] = "htmlFor", e["class"] = "className") : (e.htmlFor = "for", e.className = "class"), e }(), o.dom.setAttr = function(e, t, n) { return e = o.dom.g(e), "style" == t ? e.style.cssText = n : (t = o.dom._NAME_ATTRS[t] || t, e.setAttribute(t, n)), e }, o.setAttr = o.dom.setAttr, o.dom.setAttrs = function(e, t) { e = o.dom.g(e); for (var n in t) o.dom.setAttr(e, n, t[n]); return e }, o.setAttrs = o.dom.setAttrs, o.dom.create = function(e, t) { var n = document.createElement(e),
                r = t || {}; return o.dom.setAttrs(n, r) }, o.lang.guid = function() { return "TANGRAM$" + o.$$._counter++ }, o.$$._counter = o.$$._counter || 1, o.lang.Class = function() { this.guid = o.lang.guid(), !this.__decontrolled && (o.$$._instances[this.guid] = this) }, o.$$._instances = o.$$._instances || {}, o.lang.Class.prototype.dispose = function() { delete o.$$._instances[this.guid]; for (var e in this) "function" != typeof this[e] && delete this[e];
            this.disposed = !0 }, o.lang.Class.prototype.toString = function() { return "[object " + (this.__type || this._className || "Object") + "]" }, window.baiduInstance = function(e) { return o.$$._instances[e] }, o.lang.Class.prototype.un = o.lang.Class.prototype.removeEventListener = function(e, t) { var n, r = this.__listeners; if (r)
                if ("undefined" != typeof e) { if (e.indexOf("on") && (e = "on" + e), "undefined" == typeof t) delete r[e];
                    else if (r[e])
                        for ("string" == typeof t && (t = r[e][t]) && delete r[e][t], n = r[e].length - 1; n >= 0; n--) r[e][n] === t && r[e].splice(n, 1) } else
                    for (n in r) delete r[n] }, o.lang.Event = function(e, t) { this.type = e, this.returnValue = !0, this.target = t || null, this.currentTarget = null }, o.lang.Class.prototype.fire = o.lang.Class.prototype.dispatchEvent = function(e, t) { o.lang.isString(e) && (e = new o.lang.Event(e)), !this.__listeners && (this.__listeners = {}), t = t || {}; for (var n in t) e[n] = t[n]; var n, r, i = this,
                a = i.__listeners,
                s = e.type; if (e.target = e.target || (e.currentTarget = i), s.indexOf("on") && (s = "on" + s), "function" == typeof i[s] && i[s].apply(i, arguments), "object" == typeof a[s])
                for (n = 0, r = a[s].length; r > n; n++) a[s][n] && a[s][n].apply(i, arguments); return e.returnValue }, o.lang.Class.prototype.on = o.lang.Class.prototype.addEventListener = function(e, t, n) { if ("function" == typeof t) {!this.__listeners && (this.__listeners = {}); var r, o = this.__listeners; for (e.indexOf("on") && (e = "on" + e), "object" != typeof o[e] && (o[e] = []), r = o[e].length - 1; r >= 0; r--)
                    if (o[e][r] === t) return t; return o[e].push(t), n && "string" == typeof n && (o[e][n] = t), t } }, o.lang.createSingle = function(e) { var t = new o.lang.Class; for (var n in e) t[n] = e[n]; return t }, o.dom.ddManager = o.lang.createSingle({ _targetsDroppingOver: {} }), o.dom.getDocument = function(e) { return e = o.dom.g(e), 9 == e.nodeType ? e : e.ownerDocument || e.document }, o.dom.getComputedStyle = function(e, t) { e = o.dom._g(e); var n, r = o.dom.getDocument(e); return r.defaultView && r.defaultView.getComputedStyle && (n = r.defaultView.getComputedStyle(e, null)) ? n[t] || n.getPropertyValue(t) : "" }, o.dom._styleFixer = o.dom._styleFixer || {}, o.dom._styleFilter = o.dom._styleFilter || [], o.dom._styleFilter.filter = function(e, t, n) { for (var r, i = 0, a = o.dom._styleFilter; r = a[i]; i++)(r = r[n]) && (t = r(e, t)); return t }, o.string.toCamelCase = function(e) { return e.indexOf("-") < 0 && e.indexOf("_") < 0 ? e : e.replace(/[-_][^-_]/g, function(e) { return e.charAt(1).toUpperCase() }) }, o.dom.getStyle = function(e, t) { var n = o.dom;
            e = n.g(e), t = o.string.toCamelCase(t); var r = e.style[t] || (e.currentStyle ? e.currentStyle[t] : "") || n.getComputedStyle(e, t); if (!r || "auto" == r) { var i = n._styleFixer[t];
                i && (r = i.get ? i.get(e, t, r) : o.dom.getStyle(e, i)) } return (i = n._styleFilter) && (r = i.filter(t, r, "get")), r }, o.getStyle = o.dom.getStyle, o.event = o.event || {}, o.event._listeners = o.event._listeners || [], o.event.on = function(e, t, n) { t = t.replace(/^on/i, ""), e = o.dom._g(e); var r, i = function(t) { n.call(e, t) },
                a = o.event._listeners,
                s = o.event._eventFilter,
                l = t; return t = t.toLowerCase(), s && s[t] && (r = s[t](e, t, i), l = r.type, i = r.listener), e.addEventListener ? e.addEventListener(l, i, !1) : e.attachEvent && e.attachEvent("on" + l, i), a[a.length] = [e, t, n, i, l], e }, o.on = o.event.on, o.page = o.page || {}, o.page.getScrollTop = function() { var e = document; return window.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop }, o.page.getScrollLeft = function() { var e = document; return window.pageXOffset || e.documentElement.scrollLeft || e.body.scrollLeft },
        function() { o.page.getMousePosition = function() { return { x: o.page.getScrollLeft() + e.x, y: o.page.getScrollTop() + e.y } }; var e = { x: 0, y: 0 };
            o.event.on(document, "onmousemove", function(t) { t = window.event || t, e.x = t.clientX, e.y = t.clientY }) }(), o.event.un = function(e, t, n) { e = o.dom._g(e), t = t.replace(/^on/i, "").toLowerCase(); for (var r, i, a, s = o.event._listeners, l = s.length, u = !n; l--;) r = s[l], r[1] !== t || r[0] !== e || !u && r[2] !== n || (i = r[4], a = r[3], e.removeEventListener ? e.removeEventListener(i, a, !1) : e.detachEvent && e.detachEvent("on" + i, a), s.splice(l, 1)); return e }, o.un = o.event.un, o.event.preventDefault = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }, o.lang.isObject = function(e) { return "function" == typeof e || !(!e || "object" != typeof e) }, o.isObject = o.lang.isObject,
        function() {
            function e() { clearInterval(l), i.capture && r.releaseCapture ? r.releaseCapture() : i.capture && window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), document.body.style.MozUserSelect = p, o.event.un(document, "selectstart", n), i.autoStop && o.event.un(document, "mouseup", e), o.lang.isFunction(i.ondragend) && i.ondragend(r, i, { left: f, top: d }) }

            function t() { var e = i.range || [],
                    t = o.page.getMousePosition(),
                    n = u + t.x - a,
                    l = c + t.y - s;
                o.lang.isObject(e) && 4 == e.length && (n = Math.max(e[3], n), n = Math.min(e[1] - r.offsetWidth, n), l = Math.max(e[0], l), l = Math.min(e[2] - r.offsetHeight, l)), r.style.left = n + "px", r.style.top = l + "px", f = n, d = l, o.lang.isFunction(i.ondrag) && i.ondrag(r, i, { left: f, top: d }) }

            function n(e) { return o.event.preventDefault(e, !1) } var r, i, a, s, l, u, c, f, d, p;
            o.dom.drag = function(g, m) { return (r = o.dom.g(g)) ? (i = o.object.extend({ autoStop: !0, capture: !0, interval: 16 }, m), f = u = parseInt(o.dom.getStyle(r, "left")) || 0, d = c = parseInt(o.dom.getStyle(r, "top")) || 0, setTimeout(function() { var e = o.page.getMousePosition();
                    a = i.mouseEvent ? o.page.getScrollLeft() + i.mouseEvent.clientX : e.x, s = i.mouseEvent ? o.page.getScrollTop() + i.mouseEvent.clientY : e.y, clearInterval(l), l = setInterval(t, i.interval) }, 1), i.autoStop && o.event.on(document, "mouseup", e), o.event.on(document, "selectstart", n), i.capture && r.setCapture ? r.setCapture() : i.capture && window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), p = document.body.style.MozUserSelect, document.body.style.MozUserSelect = "none", o.lang.isFunction(i.ondragstart) && i.ondragstart(r, i), { stop: e, dispose: e, update: function(e) { o.object.extend(i, e) } }) : !1 } }(), o.dom.setStyle = function(e, t, n) { var r, i = o.dom; return e = i.g(e), t = o.string.toCamelCase(t), (r = i._styleFilter) && (n = r.filter(t, n, "set")), r = i._styleFixer[t], r && r.set ? r.set(e, n, t) : e.style[r || t] = n, e }, o.setStyle = o.dom.setStyle, o.dom.draggable = function(e, t) {
            function n(n) { var r = t.mouseEvent = window.event || n;
                t.mouseEvent = { clientX: r.clientX, clientY: r.clientY }, r.button > 1 || o.lang.isFunction(t.toggle) && !t.toggle() || (o.lang.isFunction(t.onbeforedragstart) && t.onbeforedragstart(e), a = o.dom.drag(e, t), u.stop = a.stop, u.update = a.update, o.event.preventDefault(r)) } t = o.object.extend({ toggle: function() { return !0 } }, t), t.autoStop = !0, e = o.dom.g(e), t.handler = t.handler || e; var r, i, a, s = ["ondragstart", "ondrag", "ondragend"],
                l = s.length - 1,
                u = { dispose: function() { a && a.stop(), o.event.un(t.handler, "onmousedown", n), o.lang.Class.prototype.dispose.call(u) } },
                c = this; if (r = o.dom.ddManager)
                for (; l >= 0; l--) i = s[l], t[i] = function(n) { var i = t[n]; return function() { o.lang.isFunction(i) && i.apply(c, arguments), r.dispatchEvent(n, { DOM: e }) } }(i); return e && o.event.on(t.handler, "onmousedown", n), { cancel: function() { u.dispose() } } }, o.dom.getPosition = function(e) { e = o.dom.g(e); var t, n, r = o.dom.getDocument(e),
                i = o.browser,
                a = o.dom.getStyle,
                s = (i.isGecko > 0 && r.getBoxObjectFor && "absolute" == a(e, "position") && ("" === e.style.top || "" === e.style.left), { left: 0, top: 0 }),
                l = i.ie && !i.isStrict ? r.body : r.documentElement; if (e == l) return s; if (e.getBoundingClientRect) { n = e.getBoundingClientRect(), s.left = Math.floor(n.left) + Math.max(r.documentElement.scrollLeft, r.body.scrollLeft), s.top = Math.floor(n.top) + Math.max(r.documentElement.scrollTop, r.body.scrollTop), s.left -= r.documentElement.clientLeft, s.top -= r.documentElement.clientTop; var u = r.body,
                    c = parseInt(a(u, "borderLeftWidth")),
                    f = parseInt(a(u, "borderTopWidth"));
                i.ie && !i.isStrict && (s.left -= isNaN(c) ? 2 : c, s.top -= isNaN(f) ? 2 : f) } else { t = e;
                do { if (s.left += t.offsetLeft, s.top += t.offsetTop, i.isWebkit > 0 && "fixed" == a(t, "position")) { s.left += r.body.scrollLeft, s.top += r.body.scrollTop; break } t = t.offsetParent } while (t && t != e); for ((i.opera > 0 || i.isWebkit > 0 && "absolute" == a(e, "position")) && (s.top -= r.body.offsetTop), t = e.offsetParent; t && t != r.body;) s.left -= t.scrollLeft, i.opera && "TR" == t.tagName || (s.top -= t.scrollTop), t = t.offsetParent } return s }, o.dom.intersect = function(e, t) { var n = o.dom.g,
                r = o.dom.getPosition,
                i = Math.max,
                a = Math.min;
            e = n(e), t = n(t); var s = r(e),
                l = r(t); return i(s.left, l.left) <= a(s.left + e.offsetWidth, l.left + t.offsetWidth) && i(s.top, l.top) <= a(s.top + e.offsetHeight, l.top + t.offsetHeight) }, o.dom.droppable = function(e, t) { t = t || {}; var n = o.dom.ddManager,
                r = o.dom.g(e),
                i = o.lang.guid(),
                a = function(e) { var a = n._targetsDroppingOver,
                        s = { trigger: e.DOM, reciever: r };
                    o.dom.intersect(r, e.DOM) ? a[i] || ("function" == typeof t.ondropover && t.ondropover.call(r, s), n.dispatchEvent("ondropover", s), a[i] = !0) : (a[i] && ("function" == typeof t.ondropout && t.ondropout.call(r, s), n.dispatchEvent("ondropout", s)), delete a[i]) },
                s = function(e) { var a = { trigger: e.DOM, reciever: r };
                    o.dom.intersect(r, e.DOM) && ("function" == typeof t.ondrop && t.ondrop.call(r, a), n.dispatchEvent("ondrop", a)), delete n._targetsDroppingOver[i] }; return n.addEventListener("ondrag", a), n.addEventListener("ondragend", s), { cancel: function() { n.removeEventListener("ondrag", a), n.removeEventListener("ondragend", s) } } }, o.dom.empty = function(e) { for (e = o.dom.g(e); e.firstChild;) e.removeChild(e.firstChild); return e }, o.dom._matchNode = function(e, t, n) { e = o.dom.g(e); for (var r = e[n]; r; r = r[t])
                if (1 == r.nodeType) return r; return null }, o.dom.first = function(e) { return o.dom._matchNode(e, "nextSibling", "firstChild") }, o.dom.getAttr = function(e, t) { return e = o.dom.g(e), "style" == t ? e.style.cssText : (t = o.dom._NAME_ATTRS[t] || t, e.getAttribute(t)) }, o.getAttr = o.dom.getAttr, o.dom.setStyles = function(e, t) { e = o.dom.g(e); for (var n in t) o.dom.setStyle(e, n, t[n]); return e }, o.setStyles = o.dom.setStyles, o.page.getViewHeight = function() { var e = document,
                t = "BackCompat" == e.compatMode ? e.body : e.documentElement; return t.clientHeight }, o.page.getViewWidth = function() { var e = document,
                t = "BackCompat" == e.compatMode ? e.body : e.documentElement; return t.clientWidth }, o.dom._styleFilter[o.dom._styleFilter.length] = { set: function(e, t) { return t.constructor != Number || /zIndex|fontWeight|opacity|zoom|lineHeight/i.test(e) || (t += "px"), t } }, o.dom.fixable = function(e, t) {
            function n() { return { top: "top" == g ? f.y : o.page.getViewHeight() - f.y - c.height, left: "left" == m ? f.x : o.page.getViewWidth() - f.x - c.width } }

            function r() { var e = n();
                d.style.setExpression("left", "eval((document.body.scrollLeft || document.documentElement.scrollLeft) + " + e.left + ") + 'px'"), d.style.setExpression("top", "eval((document.body.scrollTop || document.documentElement.scrollTop) + " + e.top + ") + 'px'") }

            function i() { var e = { position: o.getStyle(d, "position"), height: function() { var e = o.getStyle(d, "height"); return "auto" != e ? /\d+/.exec(e)[0] : d.offsetHeight }(), width: function() { var e = o.getStyle(d, "width"); return "auto" != e ? /\d+/.exec(e)[0] : d.offsetWidth }() }; return a("top", e), a("left", e), a("bottom", e), a("right", e), e }

            function a(e, t) { var n; "static" == t.position ? t[e] = "" : (n = o.getStyle(d, e), t[e] = "auto" == n || "0px" == n ? "" : n) }

            function s() { if (!v) { if (o.setStyles(d, { top: "", left: "", bottom: "", right: "" }), p) o.setStyle(d, "position", "absolute"), r();
                    else { var e = { position: "fixed" };
                        e["top" == g ? "top" : "bottom"] = f.y + "px", e["left" == m ? "left" : "right"] = f.x + "px", o.setStyles(d, e) } y(), v = !0 } }

            function l() { if (v) { var e = { position: c.position, left: "" == c.left ? "auto" : c.left, top: "" == c.top ? "auto" : c.top, bottom: "" == c.bottom ? "auto" : c.bottom, right: "" == c.right ? "auto" : c.right };
                    p && (d.style.removeExpression("left"), d.style.removeExpression("top")), o.setStyles(d, e), w(), v = !1 } }

            function u(e) { e && (y = e.onrender || y, b = e.onupdate || b, w = e.onrelease || w, g = e.vertival || "top", m = e.horizontal || "left", o.extend(f, e.offset || {}), b()) } var c, f, d = o.g(e),
                p = o.browser.ie && o.browser.ie <= 7 ? !0 : !1,
                g = t.vertival || "top",
                m = t.horizontal || "left",
                h = "undefined" != typeof t.autofix ? t.autofix : !0,
                v = !1,
                y = t.onrender || new Function,
                b = t.onupdate || new Function,
                w = t.onrelease || new Function; if (d) return c = i(), f = { y: p ? "static" == c.position ? o.dom.getPosition(d).top : o.dom.getPosition(d).top - o.dom.getPosition(d.parentNode).top : d.offsetTop, x: p ? "static" == c.position ? o.dom.getPosition(d).left : o.dom.getPosition(d).left - o.dom.getPosition(d.parentNode).left : d.offsetLeft }, o.extend(f, t.offset || {}), h && s(), { render: s, update: u, release: l } }, o.dom.getAncestorBy = function(e, t) { for (e = o.dom.g(e);
                (e = e.parentNode) && 1 == e.nodeType;)
                if (t(e)) return e; return null }, o.dom.getAncestorByClass = function(e, t) { for (e = o.dom.g(e), t = new RegExp("(^|\\s)" + o.string.trim(t) + "(\\s|$)");
                (e = e.parentNode) && 1 == e.nodeType;)
                if (t.test(e.className)) return e; return null }, o.dom.getAncestorByTag = function(e, t) { for (e = o.dom.g(e), t = t.toUpperCase();
                (e = e.parentNode) && 1 == e.nodeType;)
                if (e.tagName == t) return e; return null }, o.dom.getCurrentStyle = function(e, t) { return e = o.dom.g(e), e.style[t] || (e.currentStyle ? e.currentStyle[t] : "") || o.dom.getComputedStyle(e, t) }, o.dom.getParent = function(e) { return e = o.dom._g(e), e.parentElement || e.parentNode || null }, o.dom.getText = function(e) { var t, n, r = "",
                i = 0; if (e = o._g(e), 3 === e.nodeType || 4 === e.nodeType) r += e.nodeValue;
            else if (8 !== e.nodeType)
                for (t = e.childNodes, n = t.length; n > i; i++) r += o.dom.getText(t[i]); return r }, o.dom.getWindow = function(e) { e = o.dom.g(e); var t = o.dom.getDocument(e); return t.parentWindow || t.defaultView || null }, o.dom.hasAttr = function(e, t) { e = o.g(e); var n = e.attributes.getNamedItem(t); return !(!n || !n.specified) }, o.dom.hasClass = function(e, t) { if (e = o.dom.g(e), !e || !e.className) return !1; var n = o.string.trim(t).split(/\s+/),
                r = n.length; for (t = e.className.split(/\s+/).join(" "); r--;)
                if (!new RegExp("(^| )" + n[r] + "( |$)").test(t)) return !1; return !0 }, o.dom.hide = function(e) { return e = o.dom.g(e), e.style.display = "none", e }, o.hide = o.dom.hide, o.dom.insertAfter = function(e, t) { var n, r; return n = o.dom._g, e = n(e), t = n(t), r = t.parentNode, r && r.insertBefore(e, t.nextSibling), e }, o.dom.insertBefore = function(e, t) { var n, r; return n = o.dom._g, e = n(e), t = n(t), r = t.parentNode, r && r.insertBefore(e, t), e }, o.dom.insertHTML = function(e, t, n) { e = o.dom.g(e); var r, i; return e.insertAdjacentHTML && !o.browser.opera ? e.insertAdjacentHTML(t, n) : (r = e.ownerDocument.createRange(), t = t.toUpperCase(), "AFTERBEGIN" == t || "BEFOREEND" == t ? (r.selectNodeContents(e), r.collapse("AFTERBEGIN" == t)) : (i = "BEFOREBEGIN" == t, r[i ? "setStartBefore" : "setEndAfter"](e), r.collapse(i)), r.insertNode(r.createContextualFragment(n))), e }, o.insertHTML = o.dom.insertHTML, o.dom.last = function(e) { return o.dom._matchNode(e, "previousSibling", "lastChild") }, o.dom.next = function(e) { return o.dom._matchNode(e, "nextSibling", "nextSibling") }, o.dom.opacity = function(e, t) { e = o.dom.g(e), o.browser.ie ? e.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(100 * t) + ")" : (e.style.opacity = t, e.style.KHTMLOpacity = t) }, o.dom.prev = function(e) { return o.dom._matchNode(e, "previousSibling", "previousSibling") }, o.string.escapeReg = function(e) { return String(e).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1") }, o.dom.q = function(e, t, n) { var r, i, a, s, l = [],
                u = o.string.trim; if (!(e = u(e))) return l; if ("undefined" == typeof t) t = document;
            else if (t = o.dom.g(t), !t) return l; if (n && (n = u(n).toUpperCase()), t.getElementsByClassName)
                for (a = t.getElementsByClassName(e), r = a.length, i = 0; r > i; i++) s = a[i], n && s.tagName != n || (l[l.length] = s);
            else
                for (e = new RegExp("(^|\\s)" + o.string.escapeReg(e) + "(\\s|$)"), a = n ? t.getElementsByTagName(n) : t.all || t.getElementsByTagName("*"), r = a.length, i = 0; r > i; i++) s = a[i], e.test(s.className) && (l[l.length] = s); return l }, o.q = o.Q = o.dom.q,
        function() {
            function e(e, t, n, o, i, a) { for (var s = 0, l = o.length; l > s; s++) { var u = o[s]; if (u) { var c = !1; for (u = u[e]; u;) { if (u[r] === n) { c = o[u.sizset]; break } if (1 !== u.nodeType || a || (u[r] = n, u.sizset = s), u.nodeName.toLowerCase() === t) { c = u; break } u = u[e] } o[s] = c } } }

            function t(e, t, n, o, i, a) { for (var s = 0, l = o.length; l > s; s++) { var u = o[s]; if (u) { var c = !1; for (u = u[e]; u;) { if (u[r] === n) { c = o[u.sizset]; break } if (1 === u.nodeType)
                                if (a || (u[r] = n, u.sizset = s), "string" != typeof t) { if (u === t) { c = !0; break } } else if (d.filter(t, [u]).length > 0) { c = u; break } u = u[e] } o[s] = c } } }
            var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                r = "sizcache" + (Math.random() + "").replace(".", ""),
                i = 0,
                a = Object.prototype.toString,
                s = !1,
                l = !0,
                u = /\\/g,
                c = /\r\n/g,
                f = /\W/;
            [0, 0].sort(function() { return l = !1, 0 });
            var d = function(e, t, r, o) { r = r || [], t = t || document; var i = t; if (1 !== t.nodeType && 9 !== t.nodeType) return []; if (!e || "string" != typeof e) return r; var s, l, u, c, f, p, h, v, b = !0,
                    w = d.isXML(t),
                    x = [],
                    S = e;
                do
                    if (n.exec(""), s = n.exec(S), s && (S = s[3], x.push(s[1]), s[2])) { c = s[3]; break } while (s);
                if (x.length > 1 && m.exec(e))
                    if (2 === x.length && g.relative[x[0]]) l = E(x[0] + x[1], t, o);
                    else
                        for (l = g.relative[x[0]] ? [t] : d(x.shift(), t); x.length;) e = x.shift(), g.relative[e] && (e += x.shift()), l = E(e, l, o);
                else if (!o && x.length > 1 && 9 === t.nodeType && !w && g.match.ID.test(x[0]) && !g.match.ID.test(x[x.length - 1]) && (f = d.find(x.shift(), t, w), t = f.expr ? d.filter(f.expr, f.set)[0] : f.set[0]), t)
                    for (f = o ? { expr: x.pop(), set: y(o) } : d.find(x.pop(), 1 !== x.length || "~" !== x[0] && "+" !== x[0] || !t.parentNode ? t : t.parentNode, w), l = f.expr ? d.filter(f.expr, f.set) : f.set, x.length > 0 ? u = y(l) : b = !1; x.length;) p = x.pop(), h = p, g.relative[p] ? h = x.pop() : p = "", null == h && (h = t), g.relative[p](u, h, w);
                else u = x = []; if (u || (u = l), u || d.error(p || e), "[object Array]" === a.call(u))
                    if (b)
                        if (t && 1 === t.nodeType)
                            for (v = 0; null != u[v]; v++) u[v] && (u[v] === !0 || 1 === u[v].nodeType && d.contains(t, u[v])) && r.push(l[v]);
                        else
                            for (v = 0; null != u[v]; v++) u[v] && 1 === u[v].nodeType && r.push(l[v]);
                else r.push.apply(r, u);
                else y(u, r); return c && (d(c, i, r, o), d.uniqueSort(r)), r };
            d.uniqueSort = function(e) { if (w && (s = l, e.sort(w), s))
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1); return e }, d.matches = function(e, t) { return d(e, null, null, t) }, d.matchesSelector = function(e, t) { return d(t, null, null, [e]).length > 0 }, d.find = function(e, t, n) { var r, o, i, a, s, l; if (!e) return []; for (o = 0, i = g.order.length; i > o; o++)
                    if (s = g.order[o], (a = g.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(u, ""), r = g.find[s](a, t, n), null != r))) { e = e.replace(g.match[s], ""); break }
                return r || (r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), { set: r, expr: e } }, d.filter = function(e, t, n, r) { for (var o, i, a, s, l, u, c, f, p, m = e, h = [], v = t, y = t && t[0] && d.isXML(t[0]); e && t.length;) { for (a in g.filter)
                        if (null != (o = g.leftMatch[a].exec(e)) && o[2]) { if (u = g.filter[a], c = o[1], i = !1, o.splice(1, 1), "\\" === c.substr(c.length - 1)) continue; if (v === h && (h = []), g.preFilter[a])
                                if (o = g.preFilter[a](o, v, n, h, r, y)) { if (o === !0) continue } else i = s = !0; if (o)
                                for (f = 0; null != (l = v[f]); f++) l && (s = u(l, o, f, v), p = r ^ s, n && null != s ? p ? i = !0 : v[f] = !1 : p && (h.push(l), i = !0)); if (void 0 !== s) { if (n || (v = h), e = e.replace(g.match[a], ""), !i) return []; break } }
                    if (e === m) { if (null != i) break;
                        d.error(e) } m = e } return v }, d.error = function(e) { throw "Syntax error, unrecognized expression: " + e };
            var p = d.getText = function(e) { var t, n, r = e.nodeType,
                        o = ""; if (r) { if (1 === r) { if ("string" == typeof e.textContent) return e.textContent; if ("string" == typeof e.innerText) return e.innerText.replace(c, ""); for (e = e.firstChild; e; e = e.nextSibling) o += p(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                        for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (o += p(n)); return o },
                g = d.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ },
                    leftMatch: {},
                    attrMap: { "class": "className", "for": "htmlFor" },
                    attrHandle: { href: function(e) { return e.getAttribute("href") }, type: function(e) { return e.getAttribute("type") } },
                    relative: { "+": function(e, t) { var n = "string" == typeof t,
                                r = n && !f.test(t),
                                o = n && !r;
                            r && (t = t.toLowerCase()); for (var i, a = 0, s = e.length; s > a; a++)
                                if (i = e[a]) { for (;
                                        (i = i.previousSibling) && 1 !== i.nodeType;);
                                    e[a] = o || i && i.nodeName.toLowerCase() === t ? i || !1 : i === t }
                            o && d.filter(t, e, !0) }, ">": function(e, t) { var n, r = "string" == typeof t,
                                o = 0,
                                i = e.length; if (r && !f.test(t)) { for (t = t.toLowerCase(); i > o; o++)
                                    if (n = e[o]) { var a = n.parentNode;
                                        e[o] = a.nodeName.toLowerCase() === t ? a : !1 } } else { for (; i > o; o++) n = e[o], n && (e[o] = r ? n.parentNode : n.parentNode === t);
                                r && d.filter(t, e, !0) } }, "": function(n, r, o) { var a, s = i++,
                                l = t; "string" != typeof r || f.test(r) || (r = r.toLowerCase(), a = r, l = e), l("parentNode", r, s, n, a, o) }, "~": function(n, r, o) { var a, s = i++,
                                l = t; "string" != typeof r || f.test(r) || (r = r.toLowerCase(), a = r, l = e), l("previousSibling", r, s, n, a, o) } },
                    find: { ID: function(e, t, n) { if ("undefined" != typeof t.getElementById && !n) { var r = t.getElementById(e[1]); return r && r.parentNode ? [r] : [] } }, NAME: function(e, t) { if ("undefined" != typeof t.getElementsByName) { for (var n = [], r = t.getElementsByName(e[1]), o = 0, i = r.length; i > o; o++) r[o].getAttribute("name") === e[1] && n.push(r[o]); return 0 === n.length ? null : n } }, TAG: function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0 } },
                    preFilter: {
                        CLASS: function(e, t, n, r, o, i) { if (e = " " + e[1].replace(u, "") + " ", i) return e; for (var a, s = 0; null != (a = t[s]); s++) a && (o ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1)); return !1 },
                        ID: function(e) { return e[1].replace(u, "") },
                        TAG: function(e) { return e[1].replace(u, "").toLowerCase() },
                        CHILD: function(e) {
                            if ("nth" === e[1]) {
                                e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                            } else e[2] && d.error(e[0]);
                            return e[0] = i++, e
                        },
                        ATTR: function(e, t, n, r, o, i) { var a = e[1] = e[1].replace(u, ""); return !i && g.attrMap[a] && (e[1] = g.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(u, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e },
                        PSEUDO: function(e, t, r, o, i) { if ("not" === e[1]) { if (!((n.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) { var a = d.filter(e[3], t, r, !0 ^ i); return r || o.push.apply(o, a), !1 } e[3] = d(e[3], null, null, t) } else if (g.match.POS.test(e[0]) || g.match.CHILD.test(e[0])) return !0; return e },
                        POS: function(e) { return e.unshift(!0), e }
                    },
                    filters: { enabled: function(e) { return e.disabled === !1 && "hidden" !== e.type }, disabled: function(e) { return e.disabled === !0 }, checked: function(e) { return e.checked === !0 }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, parent: function(e) { return !!e.firstChild }, empty: function(e) { return !e.firstChild }, has: function(e, t, n) { return !!d(n[3], e).length }, header: function(e) { return /h\d/i.test(e.nodeName) }, text: function(e) { var t = e.getAttribute("type"),
                                n = e.type; return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t) }, radio: function(e) { return "input" === e.nodeName.toLowerCase() && "radio" === e.type }, checkbox: function(e) { return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type }, file: function(e) { return "input" === e.nodeName.toLowerCase() && "file" === e.type }, password: function(e) { return "input" === e.nodeName.toLowerCase() && "password" === e.type }, submit: function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && "submit" === e.type }, image: function(e) { return "input" === e.nodeName.toLowerCase() && "image" === e.type }, reset: function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && "reset" === e.type }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, input: function(e) { return /input|select|textarea|button/i.test(e.nodeName) }, focus: function(e) { return e === e.ownerDocument.activeElement } },
                    setFilters: { first: function(e, t) { return 0 === t }, last: function(e, t, n, r) { return t === r.length - 1 }, even: function(e, t) { return t % 2 === 0 }, odd: function(e, t) { return t % 2 === 1 }, lt: function(e, t, n) { return t < n[3] - 0 }, gt: function(e, t, n) { return t > n[3] - 0 }, nth: function(e, t, n) { return n[3] - 0 === t }, eq: function(e, t, n) { return n[3] - 0 === t } },
                    filter: { PSEUDO: function(e, t, n, r) { var o = t[1],
                                i = g.filters[o]; if (i) return i(e, n, t, r); if ("contains" === o) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0; if ("not" === o) { for (var a = t[3], s = 0, l = a.length; l > s; s++)
                                    if (a[s] === e) return !1; return !0 } d.error(o) }, CHILD: function(e, t) { var n, o, i, a, s, l, u = t[1],
                                c = e; switch (u) {
                                case "only":
                                case "first":
                                    for (; c = c.previousSibling;)
                                        if (1 === c.nodeType) return !1; if ("first" === u) return !0;
                                    c = e;
                                case "last":
                                    for (; c = c.nextSibling;)
                                        if (1 === c.nodeType) return !1; return !0;
                                case "nth":
                                    if (n = t[2], o = t[3], 1 === n && 0 === o) return !0; if (i = t[0], a = e.parentNode, a && (a[r] !== i || !e.nodeIndex)) { for (s = 0, c = a.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++s);
                                        a[r] = i } return l = e.nodeIndex - o, 0 === n ? 0 === l : l % n === 0 && l / n >= 0 } }, ID: function(e, t) { return 1 === e.nodeType && e.getAttribute("id") === t }, TAG: function(e, t) { return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t }, CLASS: function(e, t) { return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1 }, ATTR: function(e, t) { var n = t[1],
                                r = d.attr ? d.attr(e, n) : g.attrHandle[n] ? g.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                o = r + "",
                                i = t[2],
                                a = t[4]; return null == r ? "!=" === i : !i && d.attr ? null != r : "=" === i ? o === a : "*=" === i ? o.indexOf(a) >= 0 : "~=" === i ? (" " + o + " ").indexOf(a) >= 0 : a ? "!=" === i ? o !== a : "^=" === i ? 0 === o.indexOf(a) : "$=" === i ? o.substr(o.length - a.length) === a : "|=" === i ? o === a || o.substr(0, a.length + 1) === a + "-" : !1 : o && r !== !1 }, POS: function(e, t, n, r) { var o = t[2],
                                i = g.setFilters[o]; return i ? i(e, n, t, r) : void 0 } }
                },
                m = g.match.POS,
                h = function(e, t) { return "\\" + (t - 0 + 1) };
            for (var v in g.match) g.match[v] = new RegExp(g.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), g.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + g.match[v].source.replace(/\\(\d+)/g, h));
            var y = function(e, t) { return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e };
            try { Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType } catch (b) { y = function(e, t) { var n = 0,
                        r = t || []; if ("[object Array]" === a.call(e)) Array.prototype.push.apply(r, e);
                    else if ("number" == typeof e.length)
                        for (var o = e.length; o > n; n++) r.push(e[n]);
                    else
                        for (; e[n]; n++) r.push(e[n]); return r } }
            var w, x;
            document.documentElement.compareDocumentPosition ? w = function(e, t) { return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : (w = function(e, t) { if (e === t) return s = !0, 0; if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex; var n, r, o = [],
                        i = [],
                        a = e.parentNode,
                        l = t.parentNode,
                        u = a; if (a === l) return x(e, t); if (!a) return -1; if (!l) return 1; for (; u;) o.unshift(u), u = u.parentNode; for (u = l; u;) i.unshift(u), u = u.parentNode;
                    n = o.length, r = i.length; for (var c = 0; n > c && r > c; c++)
                        if (o[c] !== i[c]) return x(o[c], i[c]); return c === n ? x(e, i[c], -1) : x(o[c], t, 1) }, x = function(e, t, n) { if (e === t) return n; for (var r = e.nextSibling; r;) { if (r === t) return -1;
                        r = r.nextSibling } return 1 }),
                function() { var e = document.createElement("div"),
                        t = "script" + (new Date).getTime(),
                        n = document.documentElement;
                    e.innerHTML = "<a name='" + t + "'/>", n.insertBefore(e, n.firstChild), document.getElementById(t) && (g.find.ID = function(e, t, n) { if ("undefined" != typeof t.getElementById && !n) { var r = t.getElementById(e[1]); return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : void 0 : [] } }, g.filter.ID = function(e, t) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return 1 === e.nodeType && n && n.nodeValue === t }), n.removeChild(e), n = e = null }(),
                function() { var e = document.createElement("div");
                    e.appendChild(document.createComment("")), e.getElementsByTagName("*").length > 0 && (g.find.TAG = function(e, t) { var n = t.getElementsByTagName(e[1]); if ("*" === e[1]) { for (var r = [], o = 0; n[o]; o++) 1 === n[o].nodeType && r.push(n[o]);
                            n = r } return n }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (g.attrHandle.href = function(e) { return e.getAttribute("href", 2) }), e = null }(), document.querySelectorAll && ! function() { var e = d,
                        t = document.createElement("div"),
                        n = "__sizzle__"; if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) { d = function(t, r, o, i) { if (r = r || document, !i && !d.isXML(r)) { var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t); if (a && (1 === r.nodeType || 9 === r.nodeType)) { if (a[1]) return y(r.getElementsByTagName(t), o); if (a[2] && g.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(a[2]), o) } if (9 === r.nodeType) { if ("body" === t && r.body) return y([r.body], o); if (a && a[3]) { var s = r.getElementById(a[3]); if (!s || !s.parentNode) return y([], o); if (s.id === a[3]) return y([s], o) } try { return y(r.querySelectorAll(t), o) } catch (l) {} } else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) { var u = r,
                                        c = r.getAttribute("id"),
                                        f = c || n,
                                        p = r.parentNode,
                                        m = /^\s*[+~]/.test(t);
                                    c ? f = f.replace(/'/g, "\\$&") : r.setAttribute("id", f), m && p && (r = r.parentNode); try { if (!m || p) return y(r.querySelectorAll("[id='" + f + "'] " + t), o) } catch (h) {} finally { c || u.removeAttribute("id") } } } return e(t, r, o, i) }; for (var r in e) d[r] = e[r];
                        t = null } }(),
                function() { var e = document.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector; if (t) { var n = !t.call(document.createElement("div"), "div"),
                            r = !1; try { t.call(document.documentElement, "[test!='']:sizzle") } catch (o) { r = !0 } d.matchesSelector = function(e, o) { if (o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try { if (r || !g.match.PSEUDO.test(o) && !/!=/.test(o)) { var i = t.call(e, o); if (i || !n || e.document && 11 !== e.document.nodeType) return i } } catch (a) {}
                            return d(o, null, null, [e]).length > 0 } } }(),
                function() { var e = document.createElement("div");
                    e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (g.order.splice(1, 0, "CLASS"), g.find.CLASS = function(e, t, n) { return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1]) }, e = null)) }(), d.contains = document.documentElement.contains ? function(e, t) { return e !== t && (e.contains ? e.contains(t) : !0) } : document.documentElement.compareDocumentPosition ? function(e, t) { return !!(16 & e.compareDocumentPosition(t)) } : function() { return !1 }, d.isXML = function(e) { var t = (e ? e.ownerDocument || e : 0).documentElement; return t ? "HTML" !== t.nodeName : !1 };
            var E = function(e, t, n) { for (var r, o = [], i = "", a = t.nodeType ? [t] : t; r = g.match.PSEUDO.exec(e);) i += r[0], e = e.replace(g.match.PSEUDO, "");
                e = g.relative[e] ? e + "*" : e; for (var s = 0, l = a.length; l > s; s++) d(e, a[s], o, n); return d.filter(i, o) };
            o.dom.query = d
        }(),
        function() { var e = o.dom.ready = function() {
                function e() { if (!e.isReady) { e.isReady = !0; for (var t = 0, n = i.length; n > t; t++) i[t]() } }

                function t() { try { document.documentElement.doScroll("left") } catch (n) { return void setTimeout(t, 1) } e() }

                function n() { if (!o)
                        if (o = !0, "complete" === document.readyState) e.isReady = !0;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", e, !1);
                    else if (document.attachEvent) { document.attachEvent("onreadystatechange", r), window.attachEvent("onload", e); var n = !1; try { n = null == window.frameElement } catch (i) {} document.documentElement.doScroll && n && t() } } var r, o = !1,
                    i = []; return document.addEventListener ? r = function() { document.removeEventListener("DOMContentLoaded", r, !1), e() } : document.attachEvent && (r = function() { "complete" === document.readyState && (document.detachEvent("onreadystatechange", r), e()) }), n(),
                    function(t) { e.isReady ? t() : i.push(t) } }();
            e.isReady = !1 }(), o.dom.remove = function(e) { e = o.dom._g(e); var t = e.parentNode;
            t && t.removeChild(e) }, o.dom.removeClass = function(e, t) { e = o.dom.g(e); for (var n, r, i = e.className.split(/\s+/), a = t.split(/\s+/), s = a.length, l = 0; s > l; ++l)
                for (r = 0, n = i.length; n > r; ++r)
                    if (i[r] == a[l]) { i.splice(r, 1); break }
            return e.className = i.join(" "), e }, o.removeClass = o.dom.removeClass, o.dom.removeStyle = function() { var e, t = document.createElement("DIV"),
                n = o.dom._g; return t.style.removeProperty ? e = function(e, t) { return e = n(e), e.style.removeProperty(t), e } : t.style.removeAttribute && (e = function(e, t) { return e = n(e), e.style.removeAttribute(o.string.toCamelCase(t)), e }), t = null, e }(), o.object.each = function(e, t) { var n, r, o; if ("function" == typeof t)
                for (r in e)
                    if (e.hasOwnProperty(r) && (o = e[r], n = t.call(e, o, r), n === !1)) break; return e }, o.lang.isNumber = function(e) { return "[object Number]" == Object.prototype.toString.call(e) && isFinite(e) }, o.event.getTarget = function(e) { return e.target || e.srcElement }, o.dom.setBorderBoxSize = function(e, t) {
            function n(e, t) { return parseFloat(o.getStyle(e, t)) || 0 } var r = {}; return t.width && (r.width = parseFloat(t.width)), t.height && (r.height = parseFloat(t.height)), o.browser.isStrict && (t.width && (r.width = parseFloat(t.width) - n(e, "paddingLeft") - n(e, "paddingRight") - n(e, "borderLeftWidth") - n(e, "borderRightWidth"), r.width < 0 && (r.width = 0)), t.height && (r.height = parseFloat(t.height) - n(e, "paddingTop") - n(e, "paddingBottom") - n(e, "borderTopWidth") - n(e, "borderBottomWidth"), r.height < 0 && (r.height = 0))), o.dom.setStyles(e, r) }, o.dom.setOuterHeight = o.dom.setBorderBoxHeight = function(e, t) { return o.dom.setBorderBoxSize(e, { height: t }) }, o.dom.setOuterWidth = o.dom.setBorderBoxWidth = function(e, t) { return o.dom.setBorderBoxSize(e, { width: t }) }, o.dom.resizable = function(e, t) {
            function n() { y = o.extend({ e: { right: "-5px", top: "0px", width: "7px", height: f.offsetHeight }, s: { left: "0px", bottom: "-5px", height: "7px", width: f.offsetWidth }, n: { left: "0px", top: "-5px", height: "7px", width: f.offsetWidth }, w: { left: "-5px", top: "0px", height: f.offsetHeight, width: "7px" }, se: { right: "1px", bottom: "1px", height: "16px", width: "16px" }, sw: { left: "1px", bottom: "1px", height: "16px", width: "16px" }, ne: { right: "1px", top: "1px", height: "16px", width: "16px" }, nw: { left: "1px", top: "1px", height: "16px", width: "16px" } }, d.directionHandlePosition), o.each(d.direction, function(e) { var t = d.classPrefix.split(" ");
                    t[0] = t[0] + "-resizable-" + e; var n = o.dom.create("div", { className: t.join(" ") }),
                        r = y[e];
                    r.cursor = e + "-resize", r.position = "absolute", o.setStyles(n, r), n.key = e, n.style.MozUserSelect = "none", f.appendChild(n), w[e] = n, o.on(n, "mousedown", a) }), E = !1 }

            function r() { v && s(), o.object.each(w, function(e) { o.un(e, "mousedown", a), o.dom.remove(e) }), E = !0 }

            function i(e) { E || (d = o.extend(d, e || {}), r(), n()) }

            function a(e) { S && s(); var t = o.event.getTarget(e),
                    n = t.key;
                v = t, S = !0, t.setCapture ? t.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), m = o.getStyle(document.body, "cursor"), o.setStyle(document.body, "cursor", n + "-resize"), o.on(document.body, "mouseup", s), o.on(document.body, "selectstart", u), g = document.body.style.MozUserSelect, document.body.style.MozUserSelect = "none"; var r = o.page.getMousePosition();
                x = c(), b = setInterval(function() { l(n, r) }, 20), o.lang.isFunction(d.onresizestart) && d.onresizestart(), o.event.preventDefault(e) }

            function s() { v && v.releaseCapture ? v.releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP), o.un(document.body, "mouseup", s), o.un(document, "selectstart", u), document.body.style.MozUserSelect = g, o.un(document.body, "selectstart", u), clearInterval(b), o.setStyle(document.body, "cursor", m), v = null, S = !1, o.lang.isFunction(d.onresizeend) && d.onresizeend() }

            function l(e, t) { var n, r = o.page.getMousePosition(),
                    i = x.width,
                    a = x.height,
                    s = x.top,
                    l = x.left;
                e.indexOf("e") >= 0 ? (i = Math.max(r.x - t.x + x.width, p[0]), i = Math.min(i, p[1])) : e.indexOf("w") >= 0 && (i = Math.max(t.x - r.x + x.width, p[0]), i = Math.min(i, p[1]), l -= i - x.width), e.indexOf("s") >= 0 ? (a = Math.max(r.y - t.y + x.height, p[2]), a = Math.min(a, p[3])) : e.indexOf("n") >= 0 && (a = Math.max(t.y - r.y + x.height, p[2]), a = Math.min(a, p[3]), s -= a - x.height), n = { width: i, height: a, top: s, left: l }, o.dom.setOuterHeight(f, a), o.dom.setOuterWidth(f, i), o.setStyles(f, { top: s, left: l }), w.n && o.setStyle(w.n, "width", i), w.s && o.setStyle(w.s, "width", i), w.e && o.setStyle(w.e, "height", a), w.w && o.setStyle(w.w, "height", a), o.lang.isFunction(d.onresize) && d.onresize({ current: n, original: x }) }

            function u(e) { return o.event.preventDefault(e, !1) }

            function c() { var e, t, n = o.dom.getPosition(f.offsetParent),
                    r = o.dom.getPosition(f); return "absolute" == T ? (e = r.top - (f.offsetParent == document.body ? 0 : n.top), t = r.left - (f.offsetParent == document.body ? 0 : n.left)) : (e = parseFloat(o.getStyle(f, "top")) || -parseFloat(o.getStyle(f, "bottom")) || 0, t = parseFloat(o.getStyle(f, "left")) || -parseFloat(o.getStyle(f, "right")) || 0), o.setStyles(f, { top: e, left: t }), { width: f.offsetWidth, height: f.offsetHeight, top: e, left: t } } var f, d, p, g, m, h, v, y, b, w = {},
                x = {},
                E = !1,
                S = !1,
                C = { direction: ["e", "s", "se"], minWidth: 16, minHeight: 16, classPrefix: "tangram", directionHandlePosition: {} }; if (!(f = o.dom.g(e)) && "static" == o.getStyle(f, "position")) return !1;
            h = f.offsetParent; var T = o.getStyle(f, "position"); return d = o.extend(C, t), o.each(["minHeight", "minWidth", "maxHeight", "maxWidth"], function(e) { d[e] && (d[e] = parseFloat(d[e])) }), p = [d.minWidth || 0, d.maxWidth || Number.MAX_VALUE, d.minHeight || 0, d.maxHeight || Number.MAX_VALUE], n(), { cancel: r, update: i, enable: n } }, o.dom.setPixel = function(e, t, n) { "undefined" != typeof n && (o.dom.g(e).style[t] = n + (isNaN(n) ? "" : "px")) }, o.dom.setPosition = function(e, t) { return o.dom.setStyles(e, { left: t.left - (parseFloat(o.dom.getStyle(e, "margin-left")) || 0), top: t.top - (parseFloat(o.dom.getStyle(e, "margin-top")) || 0) }) }, o.dom.show = function(e) { return e = o.dom.g(e), e.style.display = "", e }, o.show = o.dom.show, o.dom.toggle = function(e) { return e = o.dom.g(e), e.style.display = "none" == e.style.display ? "" : "none", e }, o.dom.toggleClass = function(e, t) { o.dom.hasClass(e, t) ? o.dom.removeClass(e, t) : o.dom.addClass(e, t) }, o.dom._styleFilter[o.dom._styleFilter.length] = { get: function(e, t) { if (/color/i.test(e) && -1 != t.indexOf("rgb(")) { var n = t.split(",");
                    t = "#"; for (var r, o = 0; r = n[o]; o++) r = parseInt(r.replace(/[^\d]/gi, ""), 10).toString(16), t += 1 == r.length ? "0" + r : r;
                    t = t.toUpperCase() } return t } }, o.dom._styleFixer.display = o.browser.ie && o.browser.ie < 8 ? { set: function(e, t) { e = e.style, "inline-block" == t ? (e.display = "inline", e.zoom = 1) : e.display = t } } : o.browser.firefox && o.browser.firefox < 3 ? { set: function(e, t) { e.style.display = "inline-block" == t ? "-moz-inline-box" : t } } : null, o.dom._styleFixer["float"] = o.browser.ie ? "styleFloat" : "cssFloat", o.dom._styleFixer.opacity = o.browser.ie ? { get: function(e) { var t = e.style.filter; return t && t.indexOf("opacity=") >= 0 ? parseFloat(t.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" }, set: function(e, t) { var n = e.style;
                n.filter = (n.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (1 == t ? "" : "alpha(opacity=" + 100 * t + ")"), n.zoom = 1 } } : null, o.dom._styleFixer.width = o.dom._styleFixer.height = { get: function(e, t, n) { var t = t.replace(/^[a-z]/, function(e) { return e.toUpperCase() }),
                    r = e["client" + t] || e["offset" + t]; return r > 0 ? r + "px" : n && "auto" != n ? r : "0px" }, set: function(e, t, n) { e.style[n] = t } }, o.dom._styleFixer.textOverflow = function() {
            function e(e) { var t = e.length; return t > 0 ? (t = e[t - 1], e.length--) : t = null, t }

            function t(e, t) { e[o.browser.firefox ? "textContent" : "innerText"] = t }

            function n(i, a, s) { var l = o.browser.ie ? i.currentStyle || i.style : getComputedStyle(i, null),
                    u = l.fontWeight,
                    c = "font-family:" + l.fontFamily + ";font-size:" + l.fontSize + ";word-spacing:" + l.wordSpacing + ";font-weight:" + (401 == (parseInt(u) || 0) ? 700 : u) + ";font-style:" + l.fontStyle + ";font-variant:" + l.fontVariant,
                    f = r[c]; if (!f) { l = i.appendChild(document.createElement("div")), l.style.cssText = "float:left;" + c, f = r[c] = []; for (var d = 0; 256 > d; d++) 32 == d ? l.innerHTML = "&nbsp;" : t(l, String.fromCharCode(d)), f[d] = l.offsetWidth;
                    t(l, "一"), f[256] = l.offsetWidth, t(l, "一一"), f[257] = l.offsetWidth - 2 * f[256], f[258] = 3 * f[".".charCodeAt(0)] + 3 * f[257], i.removeChild(l) } for (var p = i.firstChild, g = f[256], m = f[257], h = f[258], v = [], s = s ? h : 0; p; p = p.nextSibling)
                    if (s > a) i.removeChild(p);
                    else if (3 == p.nodeType)
                    for (var d = 0, y = p.nodeValue, b = y.length; b > d && (l = y.charCodeAt(d), v[v.length] = [a, p, d], a -= (d ? m : 0) + (256 > l ? f[l] : g), !(s > a)); d++);
                else l = p.tagName, "IMG" == l || "TABLE" == l ? (l = p, p = p.previousSibling, i.removeChild(l)) : (v[v.length] = [a, p], a -= p.offsetWidth); if (s > a) { for (; l = e(v);)
                        if (a = l[0], p = l[1], l = l[2], 3 == p.nodeType) { if (a >= h) return p.nodeValue = p.nodeValue.substring(0, l) + "...", !0;
                            l || i.removeChild(p) } else { if (n(p, a, !0)) return !0;
                            i.removeChild(p) }
                    i.innerHTML = "" } } var r = {}; return { get: function(e) { var t = o.browser,
                        n = dom.getStyle; return (t.opera ? n("OTextOverflow") : t.firefox ? e._baiduOverflow : n("textOverflow")) || "clip" }, set: function(e, t) { var r = o.browser; if ("TD" == e.tagName || "TH" == e.tagName || r.firefox)
                        if (e._baiduHTML && (e.innerHTML = e._baiduHTML), "ellipsis" == t) { e._baiduHTML = e.innerHTML; var i = document.createElement("div"),
                                a = e.appendChild(i).offsetWidth;
                            e.removeChild(i), n(e, a) } else e._baiduHTML = "";
                    i = e.style, r.opera ? i.OTextOverflow = t : r.firefox ? e._baiduOverflow = t : i.textOverflow = t } } }(), o.lang.isArray = function(e) { return "[object Array]" == Object.prototype.toString.call(e) }, o.lang.toArray = function(e) { if (null === e || void 0 === e) return []; if (o.lang.isArray(e)) return e; if ("number" != typeof e.length || "string" == typeof e || o.lang.isFunction(e)) return [e]; if (e.item) { for (var t = e.length, n = new Array(t); t--;) n[t] = e[t]; return n } return [].slice.call(e) }, o.fn.methodize = function(e, t) { return function() { return e.apply(this, [t ? this[t] : this].concat([].slice.call(arguments))) } }, o.fn.wrapReturnValue = function(e, t, n) { return n = 0 | n,
                function() { var r = e.apply(this, arguments); return n ? n > 0 ? new t(arguments[n - 1]) : r : new t(r) } }, o.fn.multize = function(e, t, n) { var r = function() { var o, i, a = arguments[0],
                    s = t ? r : e,
                    l = [],
                    u = [].slice.call(arguments, 0),
                    c = 0; if (a instanceof Array) { for (o = a.length; o > c; c++) u[0] = a[c], i = s.apply(this, u), n ? i && (l = l.concat(i)) : l.push(i); return l } return e.apply(this, arguments) }; return r }, o.element = function(e) { var t = o._g(e); return !t && o.dom.query && (t = o.dom.query(e)), new o.element.Element(t) }, o.e = o.element, o.element.Element = function(e) { o.element._init || (o.element._makeChain(), o.element._init = !0), this._dom = "select" == (e.tagName || "").toLowerCase() ? [e] : o.lang.toArray(e) }, o.element.Element.prototype.each = function(e) { o.array.each(this._dom, function(t, n) { e.call(t, t, n) }) }, o.element._toChainFunction = function(e, t) { return o.fn.methodize(o.fn.wrapReturnValue(o.fn.multize(e, 0, 1), o.element.Element, t), "_dom") }, o.element._makeChain = function() {
            function e(e) { return e.charAt(3).toLowerCase() } var t = o.element.Element.prototype,
                n = o.element._toChainFunction;
            o.each("draggable droppable resizable fixable".split(" "), function(e) { t[e] = n(o.dom[e], 1) }), o.each("remove getText contains getAttr getPosition getStyle hasClass intersect hasAttr getComputedStyle".split(" "), function(r) { t[r] = t[r.replace(/^get[A-Z]/g, e)] = n(o.dom[r], -1) }), o.each("addClass empty hide show insertAfter insertBefore insertHTML removeClass setAttr setAttrs setStyle setStyles show toggleClass toggle next first getAncestorByClass getAncestorBy getAncestorByTag getDocument getParent getWindow last next prev g removeStyle setBorderBoxSize setOuterWidth setOuterHeight setBorderBoxWidth setBorderBoxHeight setPosition children query".split(" "), function(r) { t[r] = t[r.replace(/^get[A-Z]/g, e)] = n(o.dom[r], 0) }), t.q = t.Q = n(function(e, t) { return o.dom.q.apply(this, [t, e].concat([].slice.call(arguments, 2))) }, 0), o.each("on un".split(" "), function(e) { t[e] = n(o.event[e], 0) }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(e) { t[e] = function(t) { return this.on(e, t) } }) }, o.element.extend = function(e) { var t = o.element;
            o.object.each(e, function(e, n) { t.Element.prototype[n] = o.element._toChainFunction(e, -1) }) }, o.event.EventArg = function(e, t) { t = t || window, e = e || t.event; var n = t.document;
            this.target = e.target || e.srcElement, this.keyCode = e.which || e.keyCode; for (var r in e) { var o = e[r]; "function" != typeof o && (this[r] = o) } this.pageX || 0 === this.pageX || (this.pageX = (e.clientX || 0) + (n.documentElement.scrollLeft || n.body.scrollLeft), this.pageY = (e.clientY || 0) + (n.documentElement.scrollTop || n.body.scrollTop)), this._event = e }, o.event.EventArg.prototype.preventDefault = function() { return this._event.preventDefault ? this._event.preventDefault() : this._event.returnValue = !1, this }, o.event.EventArg.prototype.stopPropagation = function() { return this._event.stopPropagation ? this._event.stopPropagation() : this._event.cancelBubble = !0, this }, o.event.EventArg.prototype.stop = function() { return this.stopPropagation().preventDefault() }, o.object.values = function(e) { var t, n = [],
                r = 0; for (t in e) e.hasOwnProperty(t) && (n[r++] = e[t]); return n },
        function() {
            function e(e, t) { for (var n = 0, r = e.length, o = {}; r > n; n++) o[e[n]] = t[e[n]], delete t[e[n]]; return o }

            function t(t, n, r) { r = o.object.extend({}, r); var i = o.object.values(e(d[n], r)),
                    a = document.createEvent(n); return i.unshift(t), "KeyEvents" == n ? a.initKeyEvent.apply(a, i) : "MouseEvents" == n ? a.initMouseEvent.apply(a, i) : "UIEvents" == n ? a.initUIEvent.apply(a, i) : a.initEvent.apply(a, i), o.object.extend(a, r), a }

            function n(e) { var t; return document.createEventObject && (t = document.createEventObject(), o.object.extend(t, e)), t }

            function r(r, o) { o = e(d.KeyEvents, o); var i; if (document.createEvent) try { i = t(r, "KeyEvents", o) } catch (a) { try { i = t(r, "Events", o) } catch (s) { i = t(r, "UIEvents", o) } } else o.keyCode = o.charCode > 0 ? o.charCode : o.keyCode, i = n(o); return i }

            function i(r, i) { i = e(d.MouseEvents, i); var a; return document.createEvent ? (a = t(r, "MouseEvents", i), i.relatedTarget && !a.relatedTarget && ("mouseout" == r.toLowerCase() ? a.toElement = i.relatedTarget : "mouseover" == r.toLowerCase() && (a.fromElement = i.relatedTarget))) : (i.button = 0 == i.button ? 1 : 1 == i.button ? 4 : o.lang.isNumber(i.button) ? i.button : 0, a = n(i)), a }

            function a(r, o) { o.bubbles = f.hasOwnProperty(r), o = e(d.HTMLEvents, o); var i; if (document.createEvent) try { i = t(r, "HTMLEvents", o) } catch (a) { try { i = t(r, "UIEvents", o) } catch (s) { i = t(r, "Events", o) } } else i = n(o); return i } var s = o.browser,
                l = { keydown: 1, keyup: 1, keypress: 1 },
                u = { click: 1, dblclick: 1, mousedown: 1, mousemove: 1, mouseup: 1, mouseover: 1, mouseout: 1 },
                c = { abort: 1, blur: 1, change: 1, error: 1, focus: 1, load: s.ie ? 0 : 1, reset: 1, resize: 1, scroll: 1, select: 1, submit: 1, unload: s.ie ? 0 : 1 },
                f = { scroll: 1, resize: 1, reset: 1, submit: 1, change: 1, select: 1, error: 1, abort: 1 },
                d = { KeyEvents: ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"], MouseEvents: ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"], HTMLEvents: ["bubbles", "cancelable"], UIEvents: ["bubbles", "cancelable", "view", "detail"], Events: ["bubbles", "cancelable"] };
            o.object.extend(f, l), o.object.extend(f, u), o.event.fire = function(e, t, n) { var s; if (t = t.replace(/^on/i, ""), e = o.dom._g(e), n = o.object.extend({ bubbles: !0, cancelable: !0, view: window, detail: 1, screenX: 0, screenY: 0, clientX: 0, clientY: 0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: 0, charCode: 0, button: 0, relatedTarget: null }, n), l[t]) s = r(t, n);
                else if (u[t]) s = i(t, n);
                else { if (!c[t]) throw new Error(t + " is not support!");
                    s = a(t, n) } s && (e.dispatchEvent ? e.dispatchEvent(s) : e.fireEvent && e.fireEvent("on" + t, s)) } }(), o.event.get = function(e, t) { return new o.event.EventArg(e, t) }, o.event.getEvent = function() { if (window.event) return window.event; var e = arguments.callee;
            do
                if (/Event/.test(e.arguments[0])) return e.arguments[0]; while (e = e.caller); return null }, o.event.getKeyCode = function(e) { return e.which || e.keyCode }, o.event.getPageX = function(e) { var t = e.pageX,
                n = document; return t || 0 === t || (t = (e.clientX || 0) + (n.documentElement.scrollLeft || n.body.scrollLeft)), t }, o.event.getPageY = function(e) { var t = e.pageY,
                n = document; return t || 0 === t || (t = (e.clientY || 0) + (n.documentElement.scrollTop || n.body.scrollTop)), t }, o.event.once = function(e, t, n) {
            function r(i) { n.call(e, i), o.event.un(e, t, r) } return e = o.dom._g(e), o.event.on(e, t, r), e }, o.event.stopPropagation = function(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0 }, o.event.stop = function(e) { var t = o.event;
            t.stopPropagation(e), t.preventDefault(e) }, o.event._eventFilter = o.event._eventFilter || {}, o.event._eventFilter._crossElementBoundary = function(e, t) { var n = t.relatedTarget,
                r = t.currentTarget; if (n !== !1 && r != n && (!n || "xul" != n.prefix && !o.dom.contains(r, n))) return e.call(r, t) }, o.fn.bind = function(e, t) { var n = arguments.length > 2 ? [].slice.call(arguments, 2) : null; return function() { var r = o.lang.isString(e) ? t[e] : e,
                    i = n ? n.concat([].slice.call(arguments, 0)) : arguments; return r.apply(t || r, i) } }, o.event._eventFilter.mouseenter = window.attachEvent ? null : function(e, t, n) { return { type: "mouseover", listener: o.fn.bind(o.event._eventFilter._crossElementBoundary, this, n) } }, o.event._eventFilter.mouseleave = window.attachEvent ? null : function(e, t, n) { return { type: "mouseout", listener: o.fn.bind(o.event._eventFilter._crossElementBoundary, this, n) } }, o.event._unload = function() { for (var e, t, n = o.event._listeners, r = n.length, i = !!window.removeEventListener; r--;) e = n[r], "unload" != e[1] && (t = e[0]) && (t.removeEventListener ? t.removeEventListener(e[1], e[3], !1) : t.detachEvent && t.detachEvent("on" + e[1], e[3]));
            i ? window.removeEventListener("unload", o.event._unload, !1) : window.detachEvent("onunload", o.event._unload) }, window.attachEvent ? window.attachEvent("onunload", o.event._unload) : window.addEventListener("unload", o.event._unload, !1), o.fn.abstractMethod = function() { throw Error("unimplemented abstract method") }, o.form = o.form || {}, o.form.json = function(e, t) {
            function n(e, t) { var n = p[e];
                n ? (n.push || (p[e] = [n]), p[e].push(t)) : p[e] = t } for (var r, i, a, s, l, u, c, f, d = e.elements, t = t || function(e) { return e }, p = {}, g = 0, m = d.length; m > g; g++)
                if (r = d[g], a = r.name, !r.disabled && a) switch (i = r.type, s = o.url.escapeSymbol(r.value), i) {
                    case "radio":
                    case "checkbox":
                        if (!r.checked) break;
                    case "textarea":
                    case "text":
                    case "password":
                    case "hidden":
                    case "file":
                    case "select-one":
                        n(a, t(s, a)); break;
                    case "select-multiple":
                        for (l = r.options, c = l.length, u = 0; c > u; u++) f = l[u], f.selected && n(a, t(f.value, a)) }
            return p }, o.form.serialize = function(e, t) {
            function n(e, t) { p.push(e + "=" + t) } for (var r, i, a, s, l, u, c, f, d = e.elements, t = t || function(e) { return e }, p = [], g = 0, m = d.length; m > g; g++)
                if (r = d[g], a = r.name, !r.disabled && a) switch (i = r.type, s = o.url.escapeSymbol(r.value), i) {
                    case "radio":
                    case "checkbox":
                        if (!r.checked) break;
                    case "textarea":
                    case "text":
                    case "password":
                    case "hidden":
                    case "file":
                    case "select-one":
                        n(a, t(s, a)); break;
                    case "select-multiple":
                        for (l = r.options, c = l.length, u = 0; c > u; u++) f = l[u], f.selected && n(a, t(f.value, a)) }
            return p }, o.global = o.global || {}, window[o.guid].global = window[o.guid].global || {},
        function() { var e = window[o.guid].global;
            o.global.get = function(t) { return e[t] } }(),
        function() { var e = window[o.guid].global;
            o.global.set = function(t, n, r) { var o = !r || r && "undefined" == typeof e[t]; return o && (e[t] = n), e[t] } }(), o.global.getZIndex = function(e, t) { var n = o.global.get("zIndex"); return e && (n[e] = n[e] + (t || 1)), n[e] }, o.global.set("zIndex", { popup: 5e4, dialog: 1e3 }, !0), o.json = o.json || {}, o.json.parse = function(e) { return new Function("return (" + e + ")")() }, o.json.decode = o.json.parse, o.json.stringify = function() {
            function e(e) { return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) { var t = i[e]; return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16)) })), '"' + e + '"' }

            function t(e) { var t, n, r, i = ["["],
                    a = e.length; for (n = 0; a > n; n++) switch (r = e[n], typeof r) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        t && i.push(","), i.push(o.json.stringify(r)), t = 1 }
                return i.push("]"), i.join("") }

            function n(e) { return 10 > e ? "0" + e : e }

            function r(e) { return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"' } var i = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }; return function(n) { switch (typeof n) {
                    case "undefined":
                        return "undefined";
                    case "number":
                        return isFinite(n) ? String(n) : "null";
                    case "string":
                        return e(n);
                    case "boolean":
                        return String(n);
                    default:
                        if (null === n) return "null"; if (n instanceof Array) return t(n); if (n instanceof Date) return r(n); var i, a, s = ["{"],
                            l = o.json.stringify; for (var u in n)
                            if (Object.prototype.hasOwnProperty.call(n, u)) switch (a = n[u], typeof a) {
                                case "undefined":
                                case "unknown":
                                case "function":
                                    break;
                                default:
                                    i && s.push(","), i = 1, s.push(l(u) + ":" + l(a)) }
                        return s.push("}"), s.join("") } } }(), o.json.encode = o.json.stringify, o.lang.Class.prototype.addEventListeners = function(e, t) { if ("undefined" == typeof t)
                for (var n in e) this.addEventListener(n, e[n]);
            else { e = e.split(","); for (var n = 0, r = e.length; r > n; n++) this.addEventListener(o.trim(e[n]), t) } }, o.lang.createClass = function(e, t) { t = t || {}; var n = t.superClass || o.lang.Class,
                r = function() { var o = this;
                    t.decontrolled && (o.__decontrolled = !0), n.apply(o, arguments); for (i in r.options) o[i] = r.options[i];
                    e.apply(o, arguments); for (var i = 0, a = r["r"]; a && i < a.length; i++) a[i].apply(o, arguments) };
            r.options = t.options || {}; var i = function() {},
                a = e.prototype;
            i.prototype = n.prototype; var s = r.prototype = new i; for (var l in a) s[l] = a[l]; var u = t.className || t.type; return "string" == typeof u && (s.__type = u), s.constructor = a.constructor, r.extend = function(e) { for (var t in e) r.prototype[t] = e[t]; return r }, r }, window[o.guid]._instances = window[o.guid]._instances || {}, o.lang.decontrol = function(e) { var t = window[o.guid];
            t._instances && delete t._instances[e] }, o.lang.eventCenter = o.lang.eventCenter || o.lang.createSingle(), o.lang.getModule = function(e, t) { for (var n, r = e.split("."), o = t || window; n = r.shift();) { if (null == o[n]) return null;
                o = o[n] } return o }, o.lang.inherits = function(e, t, n) { var r, o, i = e.prototype,
                a = new Function;
            a.prototype = t.prototype, o = e.prototype = new a; for (r in i) o[r] = i[r]; return e.prototype.constructor = e, e.superClass = t.prototype, "string" == typeof n && (o.__type = n), e.extend = function(t) { for (var n in t) o[n] = t[n]; return e }, e }, o.inherits = o.lang.inherits, o.lang.instance = function(e) { return window[o.guid]._instances[e] || null }, o.lang.isBoolean = function(e) { return "boolean" == typeof e }, o.lang.isDate = function(e) { return "[object Date]" === {}.toString.call(e) && "Invalid Date" !== e.toString() && !isNaN(e) }, o.lang.isElement = function(e) { return !(!e || !e.nodeName || 1 != e.nodeType) }, o.lang.module = function(e, t, n) { var r, o = e.split("."),
                i = o.length - 1,
                a = 0; if (!n) try { if (!new RegExp("^[a-zA-Z_$][a-zA-Z0-9_$]*$").test(o[0])) throw "";
                n = window.eval(o[0]), a = 1 } catch (s) { n = window }
            for (; i > a; a++) r = o[a], n[r] || (n[r] = {}), n = n[r];
            n[o[i]] || (n[o[i]] = t) }, o.lang.register = function(e, t, n) { var r = e["r"] || (e["r"] = []);
            r[r.length] = t; for (var o in n) e.prototype[o] = n[o] }, o.number.comma = function(e, t) { return (!t || 1 > t) && (t = 3), e = String(e).split("."), e[0] = e[0].replace(new RegExp("(\\d)(?=(\\d{" + t + "})+$)", "ig"), "$1,"), e.join(".") }, o.number.randomInt = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e)
        }, o.object.isPlain = function(e) { var t, n = Object.prototype.hasOwnProperty; if (!(e && "[object Object]" === Object.prototype.toString.call(e) && "isPrototypeOf" in e)) return !1; if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1; for (t in e); return void 0 === t || n.call(e, t) }, o.object.clone = function(e) { var t, n, r = e; if (!e || e instanceof Number || e instanceof String || e instanceof Boolean) return r; if (o.lang.isArray(e)) { r = []; var i = 0; for (t = 0, n = e.length; n > t; t++) r[i++] = o.object.clone(e[t]) } else if (o.object.isPlain(e)) { r = {}; for (t in e) e.hasOwnProperty(t) && (r[t] = o.object.clone(e[t])) } return r }, o.object.isEmpty = function(e) { for (var t in e) return !1; return !0 }, o.object.keys = function(e) { var t, n = [],
                r = 0; for (t in e) e.hasOwnProperty(t) && (n[r++] = t); return n }, o.object.map = function(e, t) { var n = {}; for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r], r)); return n },
        function() {
            function e(e, n, r, i, a) { n.hasOwnProperty(r) && (a && t(e[r]) ? o.object.merge(e[r], n[r], { overwrite: i, recursive: a }) : !i && r in e || (e[r] = n[r])) } var t = function(e) { return o.lang.isObject(e) && !o.lang.isFunction(e) };
            o.object.merge = function(t, n, r) { var o, i = 0,
                    a = r || {},
                    s = a.overwrite,
                    l = a.whiteList,
                    u = a.recursive; if (l && l.length)
                    for (o = l.length; o > i; ++i) e(t, n, l[i], s, u);
                else
                    for (i in n) e(t, n, i, s, u); return t } }(), o.page.createStyleSheet = function(e) { var t, n = e || {},
                r = n.document || document; if (o.browser.ie) return n.url || (n.url = ""), r.createStyleSheet(n.url, n.index); if (t = "<style type='text/css'></style>", n.url && (t = "<link type='text/css' rel='stylesheet' href='" + n.url + "'/>"), o.dom.insertHTML(r.getElementsByTagName("HEAD")[0], "beforeEnd", t), n.url) return null; var i = r.styleSheets[r.styleSheets.length - 1],
                a = i.rules || i.cssRules; return { self: i, rules: i.rules || i.cssRules, addRule: function(e, t, n) { return i.addRule ? i.addRule(e, t, n) : i.insertRule ? (isNaN(n) && (n = a.length), i.insertRule(e + "{" + t + "}", n)) : void 0 }, removeRule: function(e) { i.removeRule ? i.removeRule(e) : i.deleteRule && (isNaN(e) && (e = 0), i.deleteRule(e)) } } }, o.page.getHeight = function() { var e = document,
                t = e.body,
                n = e.documentElement,
                r = "BackCompat" == e.compatMode ? t : e.documentElement; return Math.max(n.scrollHeight, t.scrollHeight, r.clientHeight) }, o.page.getWidth = function() { var e = document,
                t = e.body,
                n = e.documentElement,
                r = "BackCompat" == e.compatMode ? t : e.documentElement; return Math.max(n.scrollWidth, t.scrollWidth, r.clientWidth) }, o.page.lazyLoadImage = function(e) { e = e || {}, e.preloadHeight = e.preloadHeight || 0, o.dom.ready(function() {
                function t() { return o.page.getScrollTop() + o.page.getViewHeight() + e.preloadHeight } var n, r = document.getElementsByTagName("IMG"),
                    i = r,
                    a = r.length,
                    s = 0,
                    l = t(),
                    u = "data-tangram-ori-src"; if (e.className)
                    for (i = []; a > s; ++s) o.dom.hasClass(r[s], e.className) && i.push(r[s]); for (s = 0, a = i.length; a > s; ++s) n = i[s], o.dom.getPosition(n).top > l && (n.setAttribute(u, n.src), e.placeHolder ? n.src = e.placeHolder : n.removeAttribute("src")); var c = function() { for (var r, a = t(), s = !0, l = 0, f = i.length; f > l; ++l) n = i[l], r = n.getAttribute(u), r && (s = !1), o.dom.getPosition(n).top < a && r && (n.src = r, n.removeAttribute(u), o.lang.isFunction(e.onlazyload) && e.onlazyload(n));
                    s && o.un(window, "scroll", c) };
                o.on(window, "scroll", c) }) }, o.page.load = function(e, t, n) {
            function r() { for (var n = 0, r = e.length; r > n; ++n)
                    if (!l[e[n].url]) return void setTimeout(arguments.callee, 10);
                t.onload() }

            function i(e, t) { var n, r, i; switch (e.type.toLowerCase()) {
                    case "css":
                        n = document.createElement("link"), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"); break;
                    case "js":
                        n = document.createElement("script"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", e.charset || s.charset); break;
                    case "html":
                        n = document.createElement("iframe"), n.frameBorder = "none"; break;
                    default:
                        return } i = function() { r || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (r = !0, o.un(n, "load", i), o.un(n, "readystatechange", i), t.call(window, n)) }, o.on(n, "load", i), o.on(n, "readystatechange", i), "css" == e.type && ! function() { if (!r) { try { n.sheet.cssRule } catch (e) { return void setTimeout(arguments.callee, 20) } r = !0, t.call(window, n) } }(), n.href = n.src = e.url, document.getElementsByTagName("head")[0].appendChild(n) }

            function a(f) { var d, p = f.url,
                    g = !!c,
                    m = function(i) { l[f.url] = i, delete u[f.url], o.lang.isFunction(f.onload) && !1 === f.onload.call(window, i) || (!c && s(e.slice(1), t, !0), !n && o.lang.isFunction(t.onload) && r()) }; return f.type = f.type || p.replace(/^[^\?#]+\.(css|js|html)(\?|#| |$)[^\?#]*/i, "$1"), f.requestType = f.requestType || ("html" == f.type ? "ajax" : "dom"), (d = l[f.url]) ? (m(d), g) : !t.refresh && u[f.url] ? (setTimeout(function() { a(f) }, 10), g) : (u[f.url] = !0, "dom" == f.requestType.toLowerCase() ? i(f, m) : o.ajax.get(f.url, function(e, t) { m(t) }), g) } t = t || {}; var s = o.page.load,
                l = s._cache = s._cache || {},
                u = s._loadingCache = s._loadingCache || {},
                c = t.parallel;
            o.lang.isString(e) && (e = [{ url: e }]), e && e.length && o.each(e, a) }, o.page.load.charset = "UTF8", o.page.loadCssFile = function(e) { var t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(t) }, o.page.loadJsFile = function(e) { var t = document.createElement("script");
            t.setAttribute("type", "text/javascript"), t.setAttribute("src", e), t.setAttribute("defer", "defer"), document.getElementsByTagName("head")[0].appendChild(t) }, o.platform = o.platform || {}, o.platform.isAndroid = /android/i.test(navigator.userAgent), o.platform.isIpad = /ipad/i.test(navigator.userAgent), o.platform.isIphone = /iphone/i.test(navigator.userAgent), o.platform.isMacintosh = /macintosh/i.test(navigator.userAgent), o.platform.isWindows = /windows/i.test(navigator.userAgent), o.platform.isX11 = /x11/i.test(navigator.userAgent), o.sio = o.sio || {}, o.sio._createScriptTag = function(e, t, n) { e.setAttribute("type", "text/javascript"), n && e.setAttribute("charset", n), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e) }, o.sio._removeScriptTag = function(e) { if (e.clearAttributes) e.clearAttributes();
            else
                for (var t in e) e.hasOwnProperty(t) && delete e[t];
            e && e.parentNode && e.parentNode.removeChild(e), e = null }, o.sio.callByBrowser = function(e, t, n) { var r, i = document.createElement("SCRIPT"),
                a = 0,
                s = n || {},
                l = s.charset,
                u = t || function() {},
                c = s.timeOut || 0;
            i.onload = i.onreadystatechange = function() { if (!a) { var e = i.readyState; if ("undefined" == typeof e || "loaded" == e || "complete" == e) { a = 1; try { u(), clearTimeout(r) } finally { i.onload = i.onreadystatechange = null, o.sio._removeScriptTag(i) } } } }, c && (r = setTimeout(function() { i.onload = i.onreadystatechange = null, o.sio._removeScriptTag(i), s.onfailure && s.onfailure() }, c)), o.sio._createScriptTag(i, e, l) }, o.sio.callByServer = function(e, t, n) {
            function r(e) { return function() { try { e ? c.onfailure && c.onfailure() : (t.apply(window, arguments), clearTimeout(a)), window[i] = null, delete window[i] } catch (n) {} finally { o.sio._removeScriptTag(l) } } } var i, a, s, l = document.createElement("SCRIPT"),
                u = "bd__cbs__",
                c = n || {},
                f = c.charset,
                d = c.queryField || "callback",
                p = c.timeOut || 0,
                g = new RegExp("(\\?|&)" + d + "=([^&]*)");
            o.lang.isFunction(t) ? (i = u + Math.floor(2147483648 * Math.random()).toString(36), window[i] = r(0)) : o.lang.isString(t) ? i = t : (s = g.exec(e)) && (i = s[2]), p && (a = setTimeout(r(1), p)), e = e.replace(g, "$1" + d + "=" + i), e.search(g) < 0 && (e += (e.indexOf("?") < 0 ? "?" : "&") + d + "=" + i), o.sio._createScriptTag(l, e, f) }, o.sio.log = function(e) { var t = new Image,
                n = "tangram_sio_log_" + Math.floor(2147483648 * Math.random()).toString(36);
            window[n] = t, t.onload = t.onerror = t.onabort = function() { t.onload = t.onerror = t.onabort = null, window[n] = null, t = null }, t.src = e }, o.string.decodeHTML = function(e) { var t = String(e).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); return t.replace(/&#([\d]+);/g, function(e, t) { return String.fromCharCode(parseInt(t, 10)) }) }, o.decodeHTML = o.string.decodeHTML, o.string.encodeHTML = function(e) { return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") }, o.encodeHTML = o.string.encodeHTML, o.string.filterFormat = function(e, t) { var n = Array.prototype.slice.call(arguments, 1),
                r = Object.prototype.toString; return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(r.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function(e, t) { var i, a, s, l, u; if (!n) return ""; for (i = t.split("|"), a = n[i[0]], "[object Function]" == r.call(a) && (a = a(i[0])), s = 1, l = i.length; l > s; ++s) u = o.string.filterFormat[i[s]], "[object Function]" == r.call(u) && (a = u(a)); return "undefined" == typeof a || null === a ? "" : a })) : e }, o.string.filterFormat.escapeJs = function(e) { if (!e || "string" != typeof e) return e; var t, n, r, o = []; for (t = 0, n = e.length; n > t; ++t) r = e.charCodeAt(t), o.push(r > 255 ? e.charAt(t) : "\\x" + r.toString(16)); return o.join("") }, o.string.filterFormat.js = o.string.filterFormat.escapeJs, o.string.filterFormat.escapeString = function(e) { return e && "string" == typeof e ? e.replace(/["'<>\\\/`]/g, function(e) { return "&#" + e.charCodeAt(0) + ";" }) : e }, o.string.filterFormat.e = o.string.filterFormat.escapeString, o.string.filterFormat.toInt = function(e) { return parseInt(e, 10) || 0 }, o.string.filterFormat.i = o.string.filterFormat.toInt, o.string.format = function(e, t) { e = String(e); var n = Array.prototype.slice.call(arguments, 1),
                r = Object.prototype.toString; return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(r.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function(e, t) { var o = n[t]; return "[object Function]" == r.call(o) && (o = o(t)), "undefined" == typeof o ? "" : o })) : e }, o.format = o.string.format,
        function() { var e = /^\#[\da-f]{6}$/i,
                t = /^rgb\((\d+), (\d+), (\d+)\)$/,
                n = { black: "#000000", silver: "#c0c0c0", gray: "#808080", white: "#ffffff", maroon: "#800000", red: "#ff0000", purple: "#800080", fuchsia: "#ff00ff", green: "#008000", lime: "#00ff00", olive: "#808000", yellow: "#ffff0", navy: "#000080", blue: "#0000ff", teal: "#008080", aqua: "#00ffff" };
            o.string.formatColor = function(r) { if (e.test(r)) return r; if (t.test(r)) { for (var o, i = 1, r = "#"; 4 > i; i++) o = parseInt(RegExp["$" + i]).toString(16), r += ("00" + o).substr(o.length); return r } if (/^\#[\da-f]{3}$/.test(r)) { var a = r.charAt(1),
                        s = r.charAt(2),
                        l = r.charAt(3); return "#" + a + a + s + s + l + l } return n[r] ? n[r] : "" } }(), o.string.getByteLength = function(e) { return String(e).replace(/[^\x00-\xff]/g, "ci").length }, o.string.stripTags = function(e) { return String(e || "").replace(/<[^>]+>/g, "") }, o.string.subByte = function(e, t, n) { return e = String(e), n = n || "", 0 > t || o.string.getByteLength(e) <= t ? e + n : (e = e.substr(0, t).replace(/([^\x00-\xff])/g, "$1 ").substr(0, t).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1"), e + n) }, o.string.toHalfWidth = function(e) { return String(e).replace(/[\uFF01-\uFF5E]/g, function(e) { return String.fromCharCode(e.charCodeAt(0) - 65248) }).replace(/\u3000/g, " ") }, o.string.wbr = function(e) { return String(e).replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">") }, o.swf = o.swf || {}, o.swf.version = function() { var e = navigator; if (e.plugins && e.mimeTypes.length) { var t = e.plugins["Shockwave Flash"]; if (t && t.description) return t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0" } else if (window.ActiveXObject && !window.opera)
                for (var n = 12; n >= 2; n--) try { var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n); if (r) { var o = r.GetVariable("$version"); return o.replace(/WIN/g, "").replace(/,/g, ".") } } catch (i) {} }(), o.swf.createHTML = function(e) { e = e || {}; var t, n, r, i, a, s, l = o.swf.version,
                u = e.ver || "6.0.0",
                c = {},
                f = o.string.encodeHTML; for (i in e) c[i] = e[i]; if (e = c, !l) return ""; for (l = l.split("."), u = u.split("."), r = 0; 3 > r && (t = parseInt(l[r], 10), n = parseInt(u[r], 10), !(t > n)); r++)
                if (n > t) return ""; var d = e.vars,
                p = ["classid", "codebase", "id", "width", "height", "align"]; if (e.align = e.align || "middle", e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", e.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", e.movie = e.url || "", delete e.vars, delete e.url, "string" == typeof d) e.flashvars = d;
            else { var g = []; for (i in d) s = d[i], g.push(i + "=" + encodeURIComponent(s));
                e.flashvars = g.join("&") } var m = ["<object "]; for (r = 0, a = p.length; a > r; r++) s = p[r], m.push(" ", s, '="', f(e[s]), '"');
            m.push(">"); var h = { wmode: 1, scale: 1, quality: 1, play: 1, loop: 1, menu: 1, salign: 1, bgcolor: 1, base: 1, allowscriptaccess: 1, allownetworking: 1, allowfullscreen: 1, seamlesstabbing: 1, devicefont: 1, swliveconnect: 1, flashvars: 1, movie: 1 }; for (i in e) s = e[i], i = i.toLowerCase(), h[i] && (s || s === !1 || 0 === s) && m.push('<param name="' + i + '" value="' + f(s) + '" />');
            e.src = e.movie, e.name = e.id, delete e.id, delete e.movie, delete e.classid, delete e.codebase, e.type = "application/x-shockwave-flash", e.pluginspage = "http://www.macromedia.com/go/getflashplayer", m.push("<embed"); var v; for (i in e)
                if (s = e[i], s || s === !1 || 0 === s) { if (new RegExp("^salign$", "i").test(i)) { v = s; continue } m.push(" ", i, '="', f(s), '"') }
            return v && m.push(' salign="', f(v), '"'), m.push("></embed></object>"), m.join("") }, o.swf.create = function(e, t) { e = e || {}; var n = o.swf.createHTML(e) || e.errorMessage || "";
            t && "string" == typeof t && (t = document.getElementById(t)), o.dom.insertHTML(t || document.body, "beforeEnd", n) }, o.swf.getMovie = function(e) { var t, n = document[e]; return 9 == o.browser.ie ? n && n.length ? 1 == (t = o.array.remove(o.lang.toArray(n), function(e) { return "embed" != e.tagName.toLowerCase() })).length ? t[0] : t : n : n || window[e] }, o.swf.Proxy = function(e, t, n) { var r, i = this,
                a = this._flash = o.swf.getMovie(e); return t ? void(r = setInterval(function() { try { a[t] && (i._initialized = !0, clearInterval(r), n && n()) } catch (e) {} }, 100)) : this }, o.swf.Proxy.prototype.getFlash = function() { return this._flash }, o.swf.Proxy.prototype.isReady = function() { return !!this._initialized }, o.swf.Proxy.prototype.call = function(e) { try { var t = this.getFlash(),
                    n = Array.prototype.slice.call(arguments);
                n.shift(), t[e] && t[e].apply(t, n) } catch (r) {} }, o.url.getQueryValue = function(e, t) { var n = new RegExp("(^|&|\\?|#)" + o.string.escapeReg(t) + "=([^&#]*)(&|$|#)", ""),
                r = e.match(n); return r ? r[2] : null }, o.url.jsonToQuery = function(e, t) { var n, r = [],
                i = t || function(e) { return o.url.escapeSymbol(e) }; return o.object.each(e, function(e, t) { if (o.lang.isArray(e))
                    for (n = e.length; n--;) r.push(t + "=" + i(e[n], t));
                else r.push(t + "=" + i(e, t)) }), r.join("&") }, o.url.queryToJson = function(e) { for (var t, n, r, i, a = e.substr(e.lastIndexOf("?") + 1), s = a.split("&"), l = s.length, u = {}, c = 0; l > c; c++) s[c] && (i = s[c].split("="), t = i[0], n = i[1], r = u[t], "undefined" == typeof r ? u[t] = n : o.lang.isArray(r) ? r.push(n) : u[t] = [r, n]); return u }, n.exports = o
});;
define("common:widget/lib/tangram/fx/fx.js", function(a, e, f) { var n = a("common:widget/lib/tangram/base/base.js");
    n.fx = n.fx || {}, f.exports = n.fx });;
define("common:widget/lib/tangram/i18n/i18n.js", function(n, i, a) { var e = n("common:widget/lib/tangram/base/base.js");
    e.i18n = e.i18n || {}, a.exports = e.i18n });;
define("common:widget/lib/tangram/i18n/string/string.js", function(n, i, r) { var t = n("common:widget/lib/tangram/base/base.js");
    n("common:widget/lib/tangram/i18n/i18n.js"), t.i18n.string = t.i18n.string || { trim: function(n, i) { var r = t.i18n.cultures[i || t.i18n.currentLocale].whitespace; return String(n).replace(r, "") }, translation: function(n, i) { var r = t.i18n.cultures[i || t.i18n.currentLocale].language; return r[n] || "" } }, r.exports = t.i18n.string });;
define("common:widget/lib/tangram/uiBase/uiBase.js", function(e, t, n) { var i = e("common:widget/lib/tangram/base/base.js");
    i.ui = i.ui || { version: "1.3.9" }, i.ui.getUI = function(e) { for (var e = e.split("-"), t = i.ui, n = e.length, a = 0; n > a; a++) t = t[e[a].charAt(0).toUpperCase() + e[a].slice(1)]; return t }, i.ui.create = function(e, t) { return i.lang.isString(e) && (e = i.ui.getUI(e)), new e(t) }, i.ui.Base = { id: "", getId: function(e) { var t, n = this; return t = "tangram-" + n.uiType + "--" + (n.id ? n.id : n.guid), e ? t + "-" + e : t }, getClass: function(e) { var t = this,
                n = t.classPrefix,
                i = t.skin; return e && (n += "-" + e, i += "-" + e), t.skin && (n += " " + i), n }, getMain: function() { return i.g(this.mainId) }, getBody: function() { return i.g(this.getId()) }, uiType: "", getCallRef: function() { return "window['$BAIDU$']._instances['" + this.guid + "']" }, getCallString: function(e) { for (var t = 0, n = Array.prototype.slice.call(arguments, 1), i = n.length; i > t; t++) "string" == typeof n[t] && (n[t] = "'" + n[t] + "'"); return this.getCallRef() + "." + e + "(" + n.join(",") + ");" }, on: function(e, t, n) { i.on(e, t, n), this.addEventListener("ondispose", function() { i.un(e, t, n) }) }, renderMain: function(e) { var t = this; if (!t.getMain()) return e = i.g(e), e || (e = document.createElement("div"), document.body.appendChild(e), e.style.position = "absolute", e.className = t.getClass("main")), e.id || (e.id = t.getId("main")), t.mainId = e.id, e.setAttribute("data-guid", t.guid), e }, dispose: function() { this.dispatchEvent("dispose"), i.lang.Class.prototype.dispose.call(this) } }, i.ui.Base.getParent = function() { return this._parent || null }, i.ui.Base.setParent = function(e) { var t = this,
            n = t._parent;
        n && n.dispatchEvent("removechild"), e.dispatchEvent("appendchild", { child: t }) && (t._parent = e) }, i.ui.createUI = function(e, t) { t = t || {}; var n, a, r = t.superClass || i.lang.Class,
            s = r == i.lang.Class ? 1 : 0,
            o = function(t, u) { var d = this;
                t = t || {}, r.call(d, s ? t.guid || "" : t, !0), i.object.extend(d, o.options), i.object.extend(d, t), d.classPrefix = d.classPrefix || "tangram-" + d.uiType.toLowerCase(); for (n in i.ui.behavior) "undefined" != typeof d[n] && d[n] && (i.object.extend(d, i.ui.behavior[n]), i.lang.isFunction(d[n]) ? d.addEventListener("onload", function() { i.ui.behavior[n].call(d[n].apply(d)) }) : i.ui.behavior[n].call(d)); for (e.apply(d, arguments), n = 0, a = o._addons.length; a > n; n++) o._addons[n](d);
                t.parent && d.setParent && d.setParent(t.parent), !u && t.autoRender && d.render(t.element) },
            u = function() {};
        u.prototype = r.prototype; var d = o.prototype = new u; for (n in i.ui.Base) d[n] = i.ui.Base[n]; return o.extend = function(e) { for (n in e) o.prototype[n] = e[n]; return o }, o._addons = [], o.register = function(e) { "function" == typeof e && o._addons.push(e) }, o.options = {}, o }, n.exports = i });;
define("common:widget/ui/cookie/cookie.js", function(e, o, t) { var i = e("common:widget/lib/tangram/base/base.js"),
        n = { path: "/", expires: new Date(2026, 1, 1), domain: location.host.replace(/:\d+/, ""), secure: !1 };
    t.exports.set = function(e, o, t) { i.object.extend(n, t ? null : t), t && t.expires && (n.expires = t.expires), i.cookie.set(e, o, n) }, t.exports.get = function(e) { return i.cookie.get(e) }, t.exports.del = function(e) { i.cookie.remove(e) } });;
define("common:widget/ui/log/log.js", function(e, t, n) {
    function o(e) { var t = "explog_" + (new Date).getTime(),
            n = window[t] = new Image;
        n.onload = n.onerror = function() { window[t] = null }, n.src = e, n = null }

    function r(e) { for (var t = e.split(","), n = {}, o = 0; o < t.length; o++) { var r = t[o].split(":");
            n[i.string.trim(r[0])] = i.string.trim(r[1]) } return n } var i = e("common:widget/lib/tangram/base/base.js"),
        a = {};
    n.exports.init = function(e) { var t = { query: "a", evtType: "mousedown" }; for (var o in e) t[o] = e[o]; var c = i.dom.query(t.query);
        delete t.query, i.object.extend(a, t), i.each(c, function(e) { i.dom.getAttr(e, "log") && i.on(e, t.evtType, function() { var o = i.dom.getAttr(e, "log"),
                    a = location.href; "a" === e.tagName.toLowerCase() && (a = encodeURIComponent(e.href)), i.object.extend(t, r(o)); var c = t.type; return delete t.type, n.exports.send(a, c, t), t }) }) }, t.addKey = function(e) { i.object.extend(a, e) }, n.exports.send = function(e, t, n) { var r = "//kstj.baidu.com/v.gif?",
            c = { pid: 180, url: encodeURIComponent(e), type: t, t: (new Date).getTime() };
        i.object.extend(c, a), i.object.extend(c, n); var d = []; return i.object.each(c, function(e, t) { d.push(t + "=" + e) }), o(r + d.join("&")), e + d.join("&").replace(/&t=\d+/, "") }, t.imageReq = o });;
define("common:widget/ui/util/fixable/fixable.js", function(e, t, o) {
    function i(e) { var t = l.page.getScrollTop(); return t > e ? !0 : !1 } var l = e("common:widget/lib/tangram/base/base.js");
    o.exports.fixable = function(e, t) { var e = l.g(e); if (e) { { l.page.getHeight() } if (l.ie && l.ie < 7) { l.setStyle(e, "position", "absolute"), t.defTop = t.defTop || 0, t.defLeft = t.defLeft || 0; var o = "undefined" != typeof t.top ? t.top : l.page.getViewHeight();
                e.style.setExpression("top", "eval((document.documentElement||document.body).scrollTop+" + (o - t.defTop) + ") + 'px'"), l.setStyle(e, "left", t.left - t.defLeft) } else l.setStyle(e, "position", "fixed"), l.setStyles(e, t) } }, o.exports.scroll = function(e) { var t = l.g("aside"),
            f = l.g("sidebar"); if (null != t && null != f) { var s = l.dom.getPosition(t);
            o.exports.fixable(f, { top: l.page.getViewHeight() - 41, left: s.left }), i(e) ? l.show(f) : l.hide(f) } } });;
define("common:widget/ui/util/tool/tool.js", function(e, t, r) {
    function n(e, t, r) { var i = parseInt(e.height),
            o = parseInt(e.width); if (i > 0 && o > 0) { var a = Math.min(t / o, r / i);
            1 > a && (e.style.width = o * a + "px", e.style.height = i * a + "px") } else setTimeout(function() { n(e, t, r) }, 1e3) } var i = e("common:widget/lib/tangram/base/base.js"),
        o = window.parent.__T || i;
    r.exports.proxy = function() { for (var e = [], t = 0, r = arguments.length; r > t; t++) e[t] = arguments[t]; var n = e[0]; return e.shift(),
            function() { n.apply(null, e) } }, r.exports.limitLength = function(e, t, r) { var n = e.replace(/[^\x00-\xff]/g, "**"),
            o = n.length; if (!(1 * t >= 1 * o)) { for (var a = n.substr(0, t), s = 0, l = "", u = 0; u < a.length; u++) { var c = a.substr(u, 1); "*" == c && s++ } { var p = 0;
                n.substr(1 * t - 1, 1) } s % 2 == 0 ? (p = s / 2 + (1 * t - s), l = e.substr(0, p)) : (p = (s - 1) / 2 + (1 * t - s), l = e.substr(0, p)), i.g(r).value = l } }, r.exports.resizeImg = function(e, t, r) { n(e, t, r) }, r.exports.cutTextByHeight = function(e, t) { for (var r = e.innerHTML; e.offsetHeight > t;) r = r.substr(0, r.length - 4) + "...", e.innerHTML = r }, r.exports.cutTextByWidth = function(e, t) { for (var r = e.innerHTML; e.scrollWidth > t;) r = r.substr(0, r.length - 4) + "...", e.innerHTML = r }, r.exports.truncate = function(e, t, r) { var n = r || "...",
            o = i.string.getByteLength(e); return t >= o ? e : i.string.encodeHTML(i.string.subByte(e, t)) + n }, r.exports.filterWhiteSpace = function(e) { if (e = i.trim(e), e = e.replace(/\s+/gi, " "), "" == e) return "";
        arrStr = e.split(" "); var t = 0,
            r = arrStr[0]; for (t = 1; t < arrStr.length; ++t) { var n = arrStr[t - 1].length;
            arrStr[t - 1].charCodeAt(n - 1) <= 160 && arrStr[t].charCodeAt(0) <= 160 && (r += " "), r += arrStr[t] } return r }, r.exports.cursorToEnd = function(e) { var t = i.g(e); if (t.createTextRange) { var r = t.createTextRange();
            r.moveStart("character", t.value.length), r.collapse(!0), r.select() } else t.setSelectionRange(t.value.length, t.value.length), t.focus() }, r.exports.dynCreateForm = function(e, t, r, n) { var i = document.createElement("form");
        i.method = e, i.action = t, arguments[3] && (i.target = n); for (option in r) { var o = document.createElement("input");
            o.type = "hidden", o.name = option, o.value = r[option], i.appendChild(o) } return document.body.appendChild(i), i }, r.exports.stampToTime = function(e, t) { var r = new Date(1e3 * e); return t = t.replace("yy", r.getFullYear()), t = t.replace("M", ("0" + (r.getMonth() + 1)).slice(-2)), t = t.replace("d", ("0" + r.getDate()).slice(-2)), t = t.replace("h", ("0" + r.getHours()).slice(-2)), t = t.replace("m", ("0" + r.getMinutes()).slice(-2)), t = t.replace("s", ("0" + r.getSeconds()).slice(-2)) }, r.exports.filterCRAndSpace = function(e) { return e = e.replace(/(\n)+/gi, "<br/>"), e = e.replace(/(\s)+/gi, "&nbsp;") }, r.exports.inputTip = function(e, t) { var r = { inputId: "self-textarea-e", tipColor: "#999999", inputColor: "#000" };
        i.object.extend(r, e); var n = function() {
            function e(e) { e = e || window.event; var t = e.srcElement || e.target; "" == i.string.trim(t.value) && (t.value = s, t.style.color = n, a = !0) }

            function t(e) { e = e || window.event; var t = e.srcElement || e.target;
                a && (s = t.value, t.value = "", t.style.color = o, a = !1) } var n = r.tipColor,
                o = r.inputColor,
                a = !0,
                s = ""; return { blur: e, focus: t } }(); if (t) var a = i.g(r.inputId);
        else var a = o.g(r.inputId);
        i.event.on(a, "focus", n.focus) }, r.exports.limitWords = function(e) { var t = { inputId: "", tipId: "", tipMessage: "", maxWords: 100, inputHandler: function() { var e = i.g(t.inputId).value,
                    r = i.string.getByteLength(i.trim(e).replace(/\s/gi, ""));
                i.g(t.tipId).innerHTML = r > t.maxWords ? "已超出  " + Math.floor((r - t.maxWords + 1) / 2) + " 字" : "" } };
        i.object.extend(t, e), i.event.on(t.inputId, "keyup", function() { t.inputHandler() }), i.event.on(t.inputId, "paste", function() { setTimeout(t.inputHandler, 10) }) }, r.exports.setMainAsideHeight = function() { var e = i.g("main-block") || i.Q("l-main-col", "body", "div")[0],
            t = i.g("aside");
        e.offsetHeight > t.offsetHeight ? t.style.height = e.offsetHeight + "px" : e.style.height = t.offsetHeight + "px" }, r.exports.adjustHeight = { minBodyHeight: "", mainBlock: null, mainBlockWrapper: null, aside: null, adjust: function() { var e = this; "" == e.minBodyHeight && (e.mainBlock = i.g("main-block") || i.Q("l-main-col", "body", "div")[0], e.mainBlockWrapper = i.q("main-block-wrapper", "body", "div")[0] || i.q("l-main-wrap", "body", "div")[0], e.aside = i.g("aside"), e.minBodyHeight = parseInt(i.dom.getStyle(aside, "height"))); var t = e.mainBlockWrapper.offsetHeight > e.minBodyHeight ? e.mainBlockWrapper.offsetHeight : e.minBodyHeight;
            i.dom.setStyle(e.mainBlock, "height", t + "px"), i.dom.setStyle(e.aside, "height", t + "px") } } });;
define("common:widget/baidu-tongji/baidu-tongji.js", function(a, t, e) { var r = a("common:widget/lib/tangram/base/base.js"),
        s = { init: function(a) { var t = this;
                t.parseData = t.parseStr(a); var e = t.parseData.logid % t.parseData.key,
                    s = t.cal(e),
                    n = "/asyncreq/log?method=getLog",
                    i = "&likeNum=" + a + "&type" + t.parseData.type + "=" + s;
                r.ajax.get(n + i, function() {}) }, parseData: {}, parseStr: function(a) { var t = a.substr(0, 10),
                    e = a.substr(10, 4),
                    r = a.substr(14),
                    s = { logid: t, type: e, key: r }; return s }, cal: function(a) { var t = this,
                    e = t.parseData.type.split(""),
                    s = a; return r.array.each(e, function(a) { s = t.count(s, a) }), s }, count: function(a, t) { var e, r = this; switch (e = 1 == t || 3 == t ? r.parseData.type : r.parseData.key, e = parseInt(e), t = parseInt(t)) {
                    case 1:
                        a += e; break;
                    case 3:
                        a *= e; break;
                    case 2:
                        a = Math.abs(a - e); break;
                    case 4:
                        a %= e } return a } };
    e.exports = s });;
define("common:widget/lib/fis/event/event.js", function(e, n, t) { var i = e("common:widget/lib/tangram/base/base.js");
    i.lang.Class.prototype.once = function(e, n, t) {
        function i() { n.apply(o, arguments), o.removeEventListener(e, i, t) } var o = this;
        this.addEventListener(e, i, t) }; var o = i.lang.eventCenter;
    o.once = o.once, o.on = o.addEventListener, o.un = o.removeEventListener, o.fire = o.dispatchEvent, t.exports.eventCenter = o });;
define("common:widget/lib/tangram/fx/Timeline/Timeline.js", function(e, i, t) { var n = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/fx/fx.js"), n.fx.Timeline = function(e) { n.lang.Class.call(this), this.interval = 16, this.duration = 500, this.dynamic = !0, n.object.extend(this, e) }, n.lang.inherits(n.fx.Timeline, n.lang.Class, "baidu.fx.Timeline").extend({ launch: function() { var e = this; return e.dispatchEvent("onbeforestart"), "function" == typeof e.initialize && e.initialize(), e["btime"] = (new Date).getTime(), e["etime"] = e["btime"] + (e.dynamic ? e.duration : 0), e["pulsed"](), e }, "pulsed": function() { var e = this,
                i = (new Date).getTime(); return e.percent = (i - e["btime"]) / e.duration, e.dispatchEvent("onbeforeupdate"), i >= e["etime"] ? ("function" == typeof e.render && e.render(e.transition(e.percent = 1)), "function" == typeof e.finish && e.finish(), e.dispatchEvent("onafterfinish"), void e.dispose()) : ("function" == typeof e.render && e.render(e.transition(e.percent)), e.dispatchEvent("onafterupdate"), void(e["timer"] = setTimeout(function() { e["pulsed"]() }, e.interval))) }, transition: function(e) { return e }, cancel: function() { this["timer"] && clearTimeout(this["timer"]), this["etime"] = this["btime"], "function" == typeof this.restore && this.restore(), this.dispatchEvent("oncancel"), this.dispose() }, end: function() { this["timer"] && clearTimeout(this["timer"]), this["etime"] = this["btime"], this["pulsed"]() } }), t.exports = n.fx.Timeline });;
define("common:widget/lib/tangram/fx/create/create.js", function(e, t, i) { var r = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/fx/Timeline/Timeline.js"), r.fx.create = function(e, t, i) { var n = new r.fx.Timeline(t);
        n.element = e, n.__type = i || n.__type, n["original"] = {}; var a = "baidu_current_effect"; return n.addEventListener("onbeforestart", function() { var e, t = this;
            t.attribName = "att_" + t.__type.replace(/\W/g, "_"), e = t.element.getAttribute(a), t.element.setAttribute(a, (e || "") + "|" + t.guid + "|", 0), t.overlapping || ((e = t.element.getAttribute(t.attribName)) && window[r.guid]._instances[e].cancel(), t.element.setAttribute(t.attribName, t.guid, 0)) }), n["clean"] = function(e) { var t, i = this;
            (e = i.element) && (e.removeAttribute(i.attribName), t = e.getAttribute(a), t = t.replace("|" + i.guid + "|", ""), t ? e.setAttribute(a, t, 0) : e.removeAttribute(a)) }, n.addEventListener("oncancel", function() { this["clean"](), this["restore"]() }), n.addEventListener("onafterfinish", function() { this["clean"](), this.restoreAfterFinish && this["restore"]() }), n.protect = function(e) { this["original"][e] = this.element.style[e] }, n["restore"] = function() { var e, t = this["original"],
                i = this.element.style; for (var r in t) e = t[r], "undefined" != typeof e && (i[r] = e, !e && i.removeAttribute ? i.removeAttribute(r) : !e && i.removeProperty && i.removeProperty(r)) }, n }, i.exports = r.fx.create });;
define("common:widget/lib/tangram/fx/opacity/opacity.js", function(t, i, e) { var o = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/fx/create/create.js"), o.fx.opacity = function(t, i) { if (!(t = o.dom.g(t))) return null;
        i = o.object.extend({ from: 0, to: 1 }, i || {}); var e = t,
            a = o.fx.create(e, o.object.extend({ initialize: function() { o.dom.show(t), o.browser.ie < 9 ? this.protect("filter") : (this.protect("opacity"), this.protect("KHTMLOpacity")), this.distance = this.to - this.from }, render: function(t) { var i = this.distance * t + this.from;
                    o.browser.ie < 9 ? e.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(100 * i) + ")" : (e.style.opacity = i, e.style.KHTMLOpacity = i) } }, i), "baidu.fx.opacity"); return a.launch() }, e.exports = o.fx.opacity });;
define("common:widget/lib/tangram/i18n/cultures/cultures.js", function(n, i, e) { var t = n("common:widget/lib/tangram/base/base.js");
    n("common:widget/lib/tangram/i18n/i18n.js"), t.i18n.cultures = t.i18n.cultures || {}, e.exports = t.i18n.cultures });;
define("common:widget/lib/tangram/i18n/cultures/zh-CN/zh-CN.js", function(e, t, n) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/i18n/cultures/cultures.js"), i.i18n.cultures["zh-CN"] = i.object.extend(i.i18n.cultures["zh-CN"] || {}, { calendar: { dateFormat: "yyyy-MM-dd", titleNames: "#{yyyy}年&nbsp;#{MM}月", monthNames: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], monthNamesShort: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], dayNames: { mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六", sun: "日" } }, timeZone: 8, whitespace: new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g"), number: { group: ",", groupLength: 3, decimal: ".", positive: "", negative: "-", _format: function(e, t) { return i.i18n.number._format(e, { group: this.group, groupLength: this.groupLength, decimal: this.decimal, symbol: t ? this.negative : this.positive }) } }, currency: { symbol: "￥" }, language: { ok: "确定", cancel: "取消", signin: "注册", signup: "登录" } }), i.i18n.currentLocale = "zh-CN", n.exports = i.i18n.cultures["zh-CN"] });;
define("common:widget/lib/tangram/ui/Dialog/Dialog.js", function(t, e, n) { var i = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/uiBase/uiBase.js"), i.ui.Dialog = i.ui.createUI(function() { var t = this;
        t._content = "initElement", t.content = t.content || null, t._contentText = "initText", t.contentText = t.contentText || "", t._titleText = "initText", t.titleText = t.titleText || "" }).extend({ uiType: "dialog", width: "", height: "", top: "auto", left: "auto", zIndex: 1e3, tplDOM: "<div id='#{id}' class='#{class}' style='position:relative'>#{title}#{content}#{footer}</div>", tplTitle: "<div id='#{id}' class='#{class}'><span id='#{inner-id}' class='#{inner-class}'>#{content}</span></div>", tplContent: "<div id='#{id}' class='#{class}' style='overflow:hidden; position:relative'>#{content}</div>", tplFooter: "<div id='#{id}' class='#{class}'></div>", isShown: function() { return "show" == i.ui.Dialog.instances[this.guid] }, getString: function() { var t = this,
                e = "title",
                n = "title-inner",
                o = "content",
                a = "footer"; return i.format(t.tplDOM, { id: t.getId(), "class": t.getClass(), title: i.format(t.tplTitle, { id: t.getId(e), "class": t.getClass(e), "inner-id": t.getId(n), "inner-class": t.getClass(n), content: t.titleText || "" }), content: i.format(t.tplContent, { id: t.getId(o), "class": t.getClass(o), content: t.contentText || "" }), footer: i.format(t.tplFooter, { id: t.getId(a), "class": t.getClass(a) }) }) }, render: function() { var t, e = this; if (!e.getMain()) return t = e.renderMain(), t.innerHTML = e.getString(), e._update(), e._updatePosition(), i.dom.setStyles(e.getMain(), { position: "absolute", zIndex: e.zIndex, marginLeft: "-100000px" }), e.windowResizeHandler = e.getWindowResizeHandler(), e.on(window, "resize", e.windowResizeHandler), e.dispatchEvent("onload"), t }, _update: function(t) { var e = this,
                n = e.getContent(),
                t = t || {},
                o = e.getTitleInner(),
                a = !1; if ("undefined" != typeof t.titleText ? (o.innerHTML = t.titleText, e.titleText = e._titleText = t.titleText) : e.titleText != e._titleText && (o.innerHTML = e.titleText, e._titleText = e.titleText), "undefined" != typeof t.content) { if (n.innerHTML = "", e.content = t.content, null !== t.content) return n.appendChild(t.content), e.content = e._content = n.firstChild, void(e.contentText = e._contentText = n.innerHTML);
                a = !0 } else if (e.content !== e._content) { if (n.innerHTML = "", null !== e.content) return n.appendChild(e.content), e.content = e._content = n.firstChild, void(e.contentText = e._contentText = n.innerHTML);
                a = !0 } "undefined" != typeof t.contentText ? (n.innerHTML = t.contentText, e.contentText = e._contentText = t.contentText, e.content = e._content = n.firstChild) : (e.contentText != e._contentText || a) && (n.innerHTML = e.contentText, e._contentText = e.contentText, e.content = e._content = n.firstChild), delete t.content, delete t.contentText, delete t.titleText, i.extend(e, t) }, getWindowResizeHandler: function() { var t = this; return function() { t._updatePosition() } }, open: function() { var t = this;
            t._updatePosition(), t.getMain().style.marginLeft = "auto", i.ui.Dialog.instances[t.guid] = "show", t.dispatchEvent("onopen") }, close: function() { var t = this;
            t.dispatchEvent("onbeforeclose") && (t.getMain().style.marginLeft = "-100000px", i.ui.Dialog.instances[t.guid] = "hide", t.dispatchEvent("onclose")) }, update: function(t) { var e = this;
            e._update(t), e._updatePosition(), e.dispatchEvent("onupdate") }, _getBodyOffset: function() {
            function t(t, e) { var n = parseFloat(i.getStyle(t, e)); return n = isNaN(n) ? 0 : n, n = i.lang.isNumber(n) ? n : 0 } var e, n = this,
                o = (n.getBody(), n.getContent()),
                a = n.getTitle(),
                s = n.getFooter();
            e = { width: 0, height: 0 }, i.each(["marginLeft", "marginRight"], function(n) { e.width += t(o, n) }), e.height += a.offsetHeight + t(a, "marginTop"), e.height += s.offsetHeight + t(s, "marginBottom"); var l = t(o, "marginTop"),
                d = t(a, "marginBottom"); return e.height += l >= d ? l : d, l = t(s, "marginTop"), d = t(o, "marginBottom"), e.height += l >= d ? l : d, e }, _updatePosition: function() { var t, e, n, o = this,
                a = "",
                s = "",
                l = "",
                d = "",
                r = o.getContent(),
                g = o.getBody();
            e = parseFloat(o.width), n = parseFloat(o.height), t = o._getBodyOffset(), i.lang.isNumber(e) && i.dom.setOuterWidth(r, e), i.lang.isNumber(n) && i.dom.setOuterHeight(r, n), t.width += r.offsetWidth, t.height += r.offsetHeight, o.width && i.setStyle(g, "width", t.width), o.height && i.setStyle(g, "height", t.height), o.left && "auto" != o.left || o.right && "auto" != o.right ? (d = o.left || "", s = o.right || "") : d = Math.max((i.page.getViewWidth() - parseFloat(o.getMain().offsetWidth)) / 2 + i.page.getScrollLeft(), 0), o.top && "auto" != o.top || o.bottom && "auto" != o.bottom ? (a = o.top || "", l = o.bottom || "") : a = Math.max((i.page.getViewHeight() - parseFloat(o.getMain().offsetHeight)) / 2 + i.page.getScrollTop(), 0), i.dom.setStyles(o.getMain(), { top: a, right: s, bottom: l, left: d }) }, getTitle: function() { return i.g(this.getId("title")) }, getTitleInner: function() { return i.g(this.getId("title-inner")) }, getContent: function() { return i.g(this.getId("content")) }, getFooter: function() { return i.g(this.getId("footer")) }, dispose: function() { var t = this;
            delete i.ui.Dialog.instances[t.guid], t.dispatchEvent("dispose"), i.dom.remove(t.getMain()), i.lang.Class.prototype.dispose.call(t) } }), i.ui.Dialog.instances = i.ui.Dialog.instances || {}, n.exports = i.ui.Dialog });;
define("common:widget/lib/tangram/ui/Dialog/autoDispose/autoDispose.js", function(o, i, e) { var a = o("common:widget/lib/tangram/base/base.js");
    o("common:widget/lib/tangram/uiBase/uiBase.js"), o("common:widget/lib/tangram/ui/Dialog/Dialog.js"), a.extend(a.ui.Dialog.prototype, { autoDispose: !0 }), a.ui.Dialog.register(function(o) { o.autoDispose && o.addEventListener("onload", function() {
            ("undefined" == typeof o.autoDispose || o.autoDispose) && o.addEventListener("onclose", function() { o.dispose() }) }) }), e.exports = a.ui.Dialog.autoDispose });;
define("common:widget/lib/tangram/ui/Dialog/iframe/iframe.js", function(e, a, t) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Dialog/Dialog.js"), i.ui.Dialog.register(function(e) { if ("iframe" == e.type) { i.extend(e, { autoRender: !0, tplIframe: "<iframe width='100%' height='97%' frameborder='0' scrolling='no' #{transparent} name='#{name}' id='#{id}' class='#{class}'></iframe>", getIframe: function() { return i.g(this.getId("iframe")) }, updateIframe: function(a) { i.setStyles(this.getId("iframe"), a), e._updatePosition(), e.dispatchEvent("onupdate") } }); var a, t, n = e.getId("iframe"),
                r = e.iframeName || n,
                o = e.transparent ? 'allowtransparency="true"' : "",
                a = i.format(e.tplIframe, { name: r, id: n, transparent: o, "class": e.getClass("iframe") });
            e.addEventListener("onload", function() { e._update({ contentText: a }), e._updatePosition(), t = i.g(n), e.on(t, "onload", function() { e._updatePosition(), e.dispatchEvent("onupdate") }), t.src = e.iframeSrc }) } }), t.exports = i.ui.Dialog.iframe });;
define("common:widget/lib/tangram/ui/Dialog/keyboard/keyboard.js", function(e, a, o) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Dialog/Dialog.js"), i.extend(i.ui.Dialog.prototype, { enableKeyboard: !0, closeOnEscape: !0 }), i.ui.Dialog.register(function(e) { i.ui.Dialog.keyboardHandler = i.ui.Dialog.keyboardHandler || function(e) { e = window.event || e; var a, o, n = e.keyCode || e.which; if (i.object.each(i.ui.Dialog.instances, function(e, n) { "show" == e && (o = i.lang.instance(n), (!a || o.zIndex > a.zIndex) && (a = o)) }), a) switch (n) {
                case 27:
                    a.closeOnEscape && a.close(); break;
                case 13:
                    a.dispatchEvent("onenter") } }, e.enableKeyboard && !i.ui.Dialog.keyboardEventReady && (i.on(document, "keyup", i.ui.Dialog.keyboardHandler), i.ui.Dialog.keyboardEventReady = !0), e.addEventListener("ondispose", function() { var e = !0;
            i.object.each(i.ui.Dialog.instances, function() { return e = !1, !1 }), e && (i.event.un(document, "keyup", i.ui.Dialog.keyboardHandler), i.ui.Dialog.keyboardEventReady = !1) }) }), o.exports = i.ui.Dialog.keyboard });;
define("common:widget/lib/tangram/ui/Modal/Modal.js", function(e, t, n) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), i.ui.Modal = i.ui.createUI(function(e) { var t = this,
            n = e && e.container ? i.g(e.container) : null;!n && (n = document.body), n.id || (n.id = t.getId("container")), t.containerId = n.id, t.styles = { color: "#000000", opacity: .6, zIndex: 1e3 } }).extend({ uiType: "modal", _showing: !1, getContainer: function() { var e = this; return i.g(e.containerId) }, render: function() { var e, t, n, o = this,
                a = o.containerId,
                s = i.g(o.containerId);
            (e = i.ui.Modal.collection[a]) ? (o.mainId = e.mainId, n = o.getMain()) : (n = o.renderMain(), s !== document.body ? s.appendChild(n) : t = i.dom.fixable(n, { autofix: !1, vertival: "top", horizontal: "left", offset: { x: 0, y: 0 } }), i.ui.Modal.collection[a] = { mainId: o.mainId, instance: [], flash: {}, fixableInstance: t }), o.dispatchEvent("onload") }, show: function(e) { var t, n = this,
                o = (n.getContainer(), n.getMain()),
                a = n.containerId,
                s = i.ui.Modal.collection[a],
                d = s.fixableInstance,
                l = s.instance.length;
            n._showing || (l > 0 && (t = i.lang.instance(s.instance[l - 1]), t && t._removeHandler()), e = e || {}, n._show(e.styles || {}), d && d.render(), o.style.display = "block", s.flash[n.guid] = n._hideFlash(), s.instance.push(n.guid), n._showing = !0, n.dispatchEvent("onshow")) }, _show: function(e) { var t = this;
            t._getModalStyles(e || {}), t._update(), t.getContainer() === document.body && i.browser.ie && i.browser.ie <= 7 && (t.windowHandler = t.getWindowHandle(), i.on(window, "resize", t.windowHandler)) }, hide: function() { var e = this;
            e._hide(), e.dispatchEvent("onhide") }, _hide: function() { var e, t = this,
                n = t.containerId,
                o = i.ui.Modal.collection[n],
                a = o.flash[t.guid],
                s = t.getMain(),
                d = o.instance.length; if (t._showing) { for (var l = 0; d > l; l++)
                    if (o.instance[l] == t.guid) { o.instance.splice(l, 1); break }
                d = o.instance.length, l == d ? (t._removeHandler(), d > 0 ? (e = i.lang.instance(o.instance[d - 1]), e && e._show()) : s.style.display = "none", t._restoreFlash(a)) : (e = i.lang.instance(o.instance[d - 1]), o.flash[e.guid] = o.flash[e.guid].concat(a)), o.flash[t.guid] = [], t._showing = !1 } }, _removeHandler: function() { var e = this;
            e.getContainer() === document.body && i.browser.ie && i.browser.ie <= 7 && i.un(window, "resize", e.windowHandler) }, getWindowHandle: function() { var e = this,
                t = e.getMain(); return function() { i.setStyles(t, { width: i.page.getViewWidth(), height: i.page.getViewHeight() }), e.getContainer() === document.body && i.browser.ie && i.browser.ie <= 7 && window.top !== window.self && setTimeout(function() { e._getModalStyles({}), e._update() }, 16) } }, update: function(e) { e = e || {}; { var t = this;
                t.getMain(), i.ui.Modal.collection[t.containerId] } e = e || {}, i.extend(t, e), t._getModalStyles(e.styles || {}), t._update(), delete e.styles, i.extend(t, e), t.dispatchEvent("onupdate") }, _update: function() { var e = this,
                t = e.getMain();
            i.dom.setStyles(t, e.styles) }, _getModalStyles: function(e) {
            function t(e, t) { var n = parseInt(i.getStyle(e, t)); return n = isNaN(n) ? 0 : n, n = i.lang.isNumber(n) ? n : 0 } var n, o, a, s = this,
                d = s.getMain(),
                l = s.getContainer();
            l !== document.body ? (e.width = l.offsetWidth, e.height = l.offsetHeight, "static" == i.getStyle(l, "position") && (a = d.offsetParent || document.body, n = i.dom.getPosition(a), o = i.dom.getPosition(l), e.top = o.top - n.top + t(a, "marginTop"), e.left = o.left - n.left + t(a, "marginLeft"))) : i.browser.ie > 7 || !i.browser.ie ? (e.width = "100%", e.height = "100%") : (e.width = i.page.getViewWidth(), e.height = i.page.getViewHeight()), i.extend(s.styles, e), s.styles.backgroundColor = s.styles.color || s.styles.backgroundColor, delete s.styles.color }, _hideFlash: function() { var e = this,
                t = e.getContainer(),
                n = t.getElementsByTagName("object"),
                o = []; return i.each(n, function(t) { var n = !0;
                i.dom.getAncestorBy(t, function(t) { return i.getStyle(t, "zIndex") > e.styles.zIndex ? !0 : !1 }) || (i.each(i.dom.children(t), function(e) { "wmode" == i.getAttr(e, "name") && "window" != i.getAttr(e, "value") && (n = !1) }), n && (o.push([t, i.getStyle(t, "visibility")]), t.style.visibility = "hidden")) }), o }, _restoreFlash: function(e) { i.each(e, function(e) { null != e[0] && (e[0].style.visibility = e[1]) }) }, dispose: function() { var e = this;
            e._hide(), e.dispatchEvent("ondispose"), i.lang.Class.prototype.dispose.call(e) } }), i.ui.Modal.collection = {}, n.exports = i.ui.Modal });;
define("common:widget/lib/tangram/ui/behavior/behavior.js", function(i, a, e) { var o = i("common:widget/lib/tangram/base/base.js");
    i("common:widget/lib/tangram/uiBase/uiBase.js"), o.ui.behavior = o.ui.behavior || {}, e.exports = o.ui.behavior });;
define("common:widget/lib/tangram/ui/behavior/coverable/coverable.js", function(e, o, i) { var r = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/behavior/behavior.js"),
        function() { var e = r.ui.behavior.coverable = function() {};
            e.Coverable_isShowing = !1, e.Coverable_iframe, e.Coverable_container, e.Coverable_iframeContainer, e.Coverable_show = function() { var e = this; if (e.Coverable_iframe) return e.Coverable_update(), void r.setStyle(e.Coverable_iframe, "display", "block"); var o = e.coverableOptions || {},
                    i = e.Coverable_container = o.container || e.getMain(),
                    a = o.opacity || "0",
                    t = o.color || "",
                    n = e.Coverable_iframe = document.createElement("iframe"),
                    l = e.Coverable_iframeContainer = document.createElement("div");
                r.dom.children(i).length > 0 ? r.dom.insertBefore(l, i.firstChild) : i.appendChild(l), r.setStyles(l, { position: "absolute", top: "0px", left: "0px" }), r.dom.setBorderBoxSize(l, { width: i.offsetWidth, height: i.offsetHeight }), r.dom.setBorderBoxSize(n, { width: l.offsetWidth }), r.dom.setStyles(n, { zIndex: -1, display: "block", border: 0, backgroundColor: t, filter: "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=" + a + ")" }), l.appendChild(n), n.src = "javascript:void(0)", n.frameBorder = "0", n.scrolling = "no", n.height = "97%", e.Coverable_isShowing = !0 }, e.Coverable_hide = function() { var e = this,
                    o = e.Coverable_iframe;
                e.Coverable_isShowing && (r.setStyle(o, "display", "none"), e.Coverable_isShowing = !1) }, e.Coverable_update = function(e) { var o = this,
                    e = e || {},
                    i = o.Coverable_container,
                    a = o.Coverable_iframeContainer,
                    t = o.Coverable_iframe;
                r.dom.setBorderBoxSize(a, { width: i.offsetWidth, height: i.offsetHeight }), r.dom.setBorderBoxSize(t, r.extend({ width: r.getStyle(a, "width") }, e)) } }(), i.exports = r.ui.behavior.coverable });;
define("common:widget/lib/tangram/ui/behavior/draggable/draggable.js", function(a, n, r) { var d = a("common:widget/lib/tangram/base/base.js");
    a("common:widget/lib/tangram/uiBase/uiBase.js"), a("common:widget/lib/tangram/ui/behavior/behavior.js"),
        function() { var a = d.ui.behavior.draggable = function() { this.addEventListener("onload", function() { var a = this;
                    a.dragUpdate() }), this.addEventListener("ondispose", function() { var a = this;
                    d.un(a._dragOption.handler, "mousedown", a._dragFn), a._dragOption.handler = a.dragHandler = a._lastDragHandler = null }) };
            a.dragUpdate = function(a) { var n = this;
                a = a || {}, n.draggable && (n._lastDragHandler && n._dragFn && d.event.un(n._lastDragHandler, "onmousedown", n._dragFn), d.object.extend(n, a), n._dragOption = { ondragstart: function() { n.dispatchEvent("ondragstart") }, ondrag: function() { n.dispatchEvent("ondrag") }, ondragend: function() { n.dispatchEvent("ondragend") }, autoStop: !0 }, n._dragOption.range = n.dragRange || [], n._dragOption.handler = n._lastDragHandler = n.dragHandler || n.getMain(), n._dragOption.handler && d.event.on(n._dragOption.handler, "onmousedown", n._dragFn = function() { d.dom.drag(n.dragTarget || n.getMain(), n._dragOption) })) } }(), r.exports = d.ui.behavior.draggable });;
define("common:widget/lib/tangram/ui/behavior/posable/posable.js", function(t, e, i) { var o = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/uiBase/uiBase.js"), t("common:widget/lib/tangram/ui/behavior/behavior.js"),
        function() {
            function t(t) { return t.x = t[0] || t.x || t.left || 0, t.y = t[1] || t.y || t.top || 0, t } var e = o.ui.behavior.posable = function() {};
            e.setPosition = function(t, e, i) { e = o.g(e) || this.getMain(), i = i || {}; var n = this,
                    a = [e, t, i];
                n.__execPosFn(e, "_positionByCoordinate", i.once, a) }, e._positionByCoordinate = function(e, i, n, a) { i = i || [0, 0], n = n || {}; var h = this,
                    s = {},
                    p = o.page.getViewHeight(),
                    g = o.page.getViewWidth(),
                    f = o.page.getScrollLeft(),
                    d = o.page.getScrollTop(),
                    r = e.offsetWidth,
                    l = e.offsetHeight,
                    m = e.offsetParent,
                    c = m && m != document.body ? o.dom.getPosition(m) : { left: 0, top: 0 }; switch (n.position = "undefined" != typeof n.position ? n.position.toLowerCase() : "bottomright", i = t(i || [0, 0]), n.offset = t(n.offset || [0, 0]), i.x += n.position.indexOf("right") >= 0 ? i.width || 0 : 0, i.y += n.position.indexOf("bottom") >= 0 ? i.height || 0 : 0, s.left = i.x + n.offset.x - c.left, s.top = i.y + n.offset.y - c.top, n.insideScreen) {
                    case "surround":
                        s.left += s.left < f ? r + (i.width || 0) : s.left + r > f + g ? -r - (i.width || 0) : 0, s.top += s.top < d ? l + (i.height || 0) : s.top + l > d + p ? -l - (i.height || 0) : 0; break;
                    case "fix":
                        s.left = Math.max(0 - parseFloat(o.dom.getStyle(e, "marginLeft")) || 0, Math.min(s.left, o.page.getViewWidth() - r - c.left)), s.top = Math.max(0 - parseFloat(o.dom.getStyle(e, "marginTop")) || 0, Math.min(s.top, o.page.getViewHeight() - l - c.top)); break;
                    case "verge":
                        var b = { width: n.position.indexOf("right") > -1 ? i.width : 0, height: n.position.indexOf("bottom") > -1 ? i.height : 0 },
                            w = { width: n.position.indexOf("bottom") > -1 ? i.width : 0, height: n.position.indexOf("right") > -1 ? i.height : 0 };
                        s.left -= n.position.indexOf("right") >= 0 ? i.width || 0 : 0, s.top -= n.position.indexOf("bottom") >= 0 ? i.height || 0 : 0, s.left += s.left + b.width + r - f > g - c.left ? w.width - r : b.width, s.top += s.top + b.height + l - d > p - c.top ? w.height - l : b.height } o.dom.setPosition(e, s), a || p == o.page.getViewHeight() && g == o.page.getViewWidth() || h._positionByCoordinate(e, i, {}, !0), a || h.dispatchEvent("onpositionupdate") }, e.__execPosFn = function(t, e, i, n) { var a = this; "undefined" != typeof i && i || o.event.on(o.dom.getWindow(t), "resize", o.fn.bind.apply(a, [e, a].concat([].slice.call(n)))), a[e].apply(a, n) } }(), i.exports = o.ui.behavior.posable });;
define("common:widget/lib/tangram/ui/behavior/statable/statable.js", function(e, t, a) { var s = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/behavior/behavior.js"),
        function() { var e = s.ui.behavior.statable = function() { var e = this;
                e.addEventListeners("ondisable,onenable", function(t, a) { var s, a = a || {},
                        n = (a.element || e.getMain()).id,
                        s = a.group; "ondisable" != t.type || e.getState(n, s).disabled ? "onenable" == t.type && e.getState(n, s).disabled && e.removeState("disabled", n, s) : (e.removeState("press", n, s), e.removeState("hover", n, s), e.setState("disabled", n, s)) }) };
            e._states = {}, e._allStates = ["hover", "press", "disabled"], e._allEventsName = ["mouseover", "mouseout", "mousedown", "mouseup"], e._eventsHandler = { mouseover: function(e, t) { var a = this; return a.getState(e, t).disabled ? void 0 : (a.setState("hover", e, t), !0) }, mouseout: function(e, t) { var a = this; return a.getState(e, t).disabled ? void 0 : (a.removeState("hover", e, t), a.removeState("press", e, t), !0) }, mousedown: function(e, t) { var a = this; return a.getState(e, t).disabled ? void 0 : (a.setState("press", e, t), !0) }, mouseup: function(e, t) { var a = this; return a.getState(e, t).disabled ? void 0 : (a.removeState("press", e, t), !0) } }, e._getStateHandlerString = function(e, t) { var a, s = this,
                    n = 0,
                    i = s._allEventsName.length,
                    o = []; for ("undefined" == typeof e && (e = t = ""); i > n; n++) a = s._allEventsName[n], o[n] = "on" + a + '="' + s.getCallRef() + "._fireEvent('" + a + "', '" + e + "', '" + t + "', event)\""; return o.join(" ") }, e._fireEvent = function(e, t, a, s) { var n = this,
                    i = n.getId(t + a);
                n._eventsHandler[e].call(n, i, t) && n.dispatchEvent(e, { element: i, group: t, key: a, DOMEvent: s }) }, e.addState = function(e, t, a) { var s = this;
                s._allStates.push(e), t && (s._allEventsName.push(t), a || (a = function() { return !0 }), s._eventsHandler[t] = a) }, e.getState = function(e, t) { var a, s = this; return t = t ? t + "-" : "", e = e ? e : s.getId(), a = s._states[t + e], a ? a : {} }, e.setState = function(e, t, a) { var n, i, o = this;
                a = a ? a + "-" : "", t = t ? t : o.getId(), n = a + t, o._states[n] = o._states[n] || {}, i = o._states[n][e], i || (o._states[n][e] = 1, s.addClass(t, o.getClass(a + e))) }, e.removeState = function(e, t, a) { var n, i = this;
                a = a ? a + "-" : "", t = t ? t : i.getId(), n = a + t, i._states[n] && (i._states[n][e] = 0, s.removeClass(t, i.getClass(a + e))) } }(), a.exports = s.ui.behavior.statable });;
define("common:widget/lib/tangram/ui/get/get.js", function(e, n, t) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), i.ui.get = function(e) { var n; if (i.lang.isString(e)) return i.lang.instance(e);
        do { if (!e || 9 == e.nodeType) return null; if (n = i.dom.getAttr(e, "data-guid")) return i.lang.instance(n) } while ((e = e.parentNode) != document.body) }, t.exports = i.ui.get });;
define("common:widget/lib/tangram/fx/fadeOut/fadeOut.js", function(t, e, n) { var i = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/fx/opacity/opacity.js"), i.fx.fadeOut = function(t, e) { if (!(t = i.dom.g(t))) return null; var n = i.fx.opacity(t, i.object.extend({ from: 1, to: 0, restoreAfterFinish: !0 }, e || {})); return n.addEventListener("onafterfinish", function() { i.dom.hide(this.element) }), n.__type = "baidu.fx.fadeOut", n }, n.exports = i.fx.fadeOut });;
define("common:widget/lib/tangram/ui/Button/Button.js", function(t, e, n) { var i = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/uiBase/uiBase.js"), t("common:widget/lib/tangram/ui/behavior/statable/statable.js"), i.ui.Button = i.ui.createUI(new Function).extend({ uiType: "button", tplBody: '<div id="#{id}" #{statable} class="#{class}">#{content}</div>', disabled: !1, statable: !0, _getString: function() { var t = this; return i.format(t.tplBody, { id: t.getId(), statable: t._getStateHandlerString(), "class": t.getClass(), content: t.content }) }, render: function(t) { var e, n = this;
            n.addState("click", "click", function(t, e) { var n = this; return n.getState(t, e).disabled ? void 0 : !0 }), i.dom.insertHTML(n.renderMain(t), "beforeEnd", n._getString()), e = i.g(t).lastChild, n.title && (e.title = n.title), n.disabled && n.setState("disabled"), n.dispatchEvent("onload") }, isDisabled: function() { { var t = this;
                t.getId() } return t.getState().disabled }, dispose: function() { var t = this,
                e = t.getBody();
            t.dispatchEvent("dispose"), i.each(t._allEventsName, function(t) { e["on" + t] = null }), i.dom.remove(e), t.dispatchEvent("ondispose"), i.lang.Class.prototype.dispose.call(t) }, disable: function() { var t = this,
                e = t.getBody();
            t.dispatchEvent("ondisable", { element: e }) }, enable: function() { var t = this;
            body = t.getBody(), t.dispatchEvent("onenable", { element: body }) }, fire: function(t, e) { var n = this,
                t = t.toLowerCase();
            n.getState().disabled || n._fireEvent(t, null, null, e) }, update: function(t) { var e = this;
            i.extend(e, t), t.content && (e.getBody().innerHTML = t.content), e.dispatchEvent("onupdate") } }), n.exports = i.ui.Button });;
define("common:widget/lib/tangram/ui/Dialog/button/button.js", function(t, n, e) { var o = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/uiBase/uiBase.js"), t("common:widget/lib/tangram/ui/Dialog/Dialog.js"), t("common:widget/lib/tangram/ui/Button/Button.js"), t("common:widget/lib/tangram/ui/Dialog/autoDispose/autoDispose.js"), t("common:widget/lib/tangram/i18n/i18n.js"), t("common:widget/lib/tangram/i18n/string/string.js"), t("common:widget/lib/tangram/i18n/cultures/zh-CN/zh-CN.js"), o.extend(o.ui.Dialog.prototype, { createButton: function(t, n) { var e = this;
            o.extend(t, { classPrefix: e.classPrefix + "-" + n, skin: e.skin ? e.skin + "-" + n : "", element: e.getFooter(), autoRender: !0, parent: e }); var i = new o.ui.Button(t);
            e.buttonInstances[n] = i }, removeButton: function(t) { var n = this,
                e = n.buttonInstances[t];
            e && (e.dispose(), delete n.buttonInstances[t], delete n.buttons[t]) } }), o.ui.Dialog.register(function(t) { t.buttonInstances = {}, t.language = t.language || "zh-CN"; var n, e, i = {},
            a = o.i18n.cultures[t.language].language;
        n = { content: a.ok, onclick: function() { var t = this,
                    n = t.getParent();
                n.dispatchEvent("onaccept") && n.close() } }, e = { content: a.cancel, onclick: function() { var t = this,
                    n = t.getParent();
                n.dispatchEvent("oncancel") && n.close() } }, t.addEventListener("onload", function() { switch (t.type) {
                case "alert":
                    t.submitOnEnter = t.submitOnEnter || !0, i = { accept: n }; break;
                case "confirm":
                    t.submitOnEnter = t.submitOnEnter || !0, i = { accept: n, cancel: e } } t.buttons = o.extend(i, t.buttons || {}), o.object.each(t.buttons, function(n, e) { t.createButton(n, e) }), t.submitOnEnter && t.addEventListener("onenter", function(n) { t.buttonInstances.accept.fire("click", n) }) }), t.addEventListener("ondispose", function() { o.object.each(t.buttons, function(n, e) { t.removeButton(e) }) }), t.addEventListener("onupdate", function() { o.object.each(t.buttons, function(n, e) { t.buttonInstances[e] ? t.buttonInstances[e].update(n) : t.createButton(n, e) }) }) }), e.exports = o.ui.Dialog.button });;
define("common:widget/lib/tangram/ui/Dialog/closeButton/closeButton.js", function(o, n, t) { var e = o("common:widget/lib/tangram/base/base.js");
    o("common:widget/lib/tangram/uiBase/uiBase.js"), o("common:widget/lib/tangram/ui/Dialog/Dialog.js"), o("common:widget/lib/tangram/ui/Button/Button.js"), e.extend(e.ui.Dialog.prototype, { closeText: "", closeButton: !0 }), e.ui.Dialog.register(function(o) { o.closeButton && o.addEventListener("onload", function() { var n = new e.ui.Button({ parent: o, classPrefix: o.classPrefix + "-close", skin: o.skin ? o.skin + "-close" : "", onclick: function() { o.close() }, onmousedown: function(o) { e.event.stopPropagation(o.DOMEvent) }, element: o.getTitle(), autoRender: !0 });
            o.closeButtonInstance = n, o.addEventListener("ondispose", function() { n.dispose() }) }) }), t.exports = e.ui.Dialog.closeButton });;
define("common:widget/lib/tangram/ui/Dialog/coverable/coverable.js", function(e, o, a) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Dialog/Dialog.js"), e("common:widget/lib/tangram/ui/behavior/coverable/coverable.js"), i.extend(i.ui.Dialog.prototype, { coverable: !0, coverableOptions: {} }), i.ui.Dialog.register(function(e) { e.coverable && (e.addEventListeners("onopen,onload", function() { e.Coverable_show() }), e.addEventListener("onclose", function() { e.Coverable_hide() }), e.addEventListener("onupdate", function() { e.Coverable_update() })) }), a.exports = i.ui.Dialog.coverable });;
define("common:widget/lib/tangram/ui/Dialog/draggable/draggable.js", function(a, e, g) { var i = a("common:widget/lib/tangram/base/base.js");
    a("common:widget/lib/tangram/uiBase/uiBase.js"), a("common:widget/lib/tangram/ui/Dialog/Dialog.js"), a("common:widget/lib/tangram/ui/behavior/draggable/draggable.js"), i.ui.Dialog.prototype.draggable = !0, i.ui.Dialog.register(function(a) {
        function e() { a.dragRange = [0, i.page.getWidth(), i.page.getHeight(), 0], a.dragUpdate() } a.draggable && (a.addEventListener("onload", function() { a.dragHandler = a.dragHandler || a.getTitle(), a.dragRange ? a.dragUpdate() : (e(), a.on(window, "resize", e)) }), a.addEventListener("ondragend", function() { a.left = i.dom.getStyle(a.getMain(), "left"), a.top = i.dom.getStyle(a.getMain(), "top") })) }), g.exports = i.ui.Dialog.draggable });;
define("common:widget/lib/tangram/ui/Modal/coverable/coverable.js", function(e, o, a) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Modal/Modal.js"), e("common:widget/lib/tangram/ui/behavior/coverable/coverable.js"), i.extend(i.ui.Modal.prototype, { coverable: !0, coverableOptions: {} }), i.ui.Modal.register(function(e) { e.coverable && (i.browser.isWebkit || i.browser.isGecko || (e.addEventListener("onload", function() { e.Coverable_show() }), e.addEventListeners("onshow,onupdate", function() { e.Coverable_update() }), e.addEventListener("onhide", function() { e.Coverable_hide() }))) }), a.exports = i.ui.Modal.coverable });;
define("common:widget/lib/tangram/ui/Suggestion/Suggestion.js", function(e, n, t) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/get/get.js"), i.ui.Suggestion = i.ui.createUI(function() { var e = this;
        e.addEventListener("onload", function() { e.on(document, "mousedown", e.documentMousedownHandler), e.on(window, "blur", e.windowBlurHandler) }), e.documentMousedownHandler = e._getDocumentMousedownHandler(), e.windowBlurHandler = e._getWindowBlurHandler(), e.enableIndex = [], e.currentIndex = -1, e.chineseType = !1 }).extend({ uiType: "suggestion", onbeforepick: new Function, onpick: new Function, onconfirm: new Function, onhighlight: new Function, onshow: new Function, onhide: new Function, getData: function() { return [] }, prependHTML: "", appendHTML: "", currentData: {}, tplDOM: "<div id='#{0}' class='#{1}' style='position:relative; top:0px; left:0px'></div>", tplPrependAppend: "<div id='#{0}' class='#{1}'>#{2}</div>", tplBody: '<table cellspacing="0" cellpadding="2"><tbody>#{0}</tbody></table>', tplRow: '<tr><td id="#{0}" onmouseover="#{2}" onmouseout="#{3}" onmousedown="#{4}" onclick="#{5}" class="#{6}">#{1}</td></tr>', getString: function() { var e = this; return i.format(e.tplDOM, e.getId(), e.getClass(), e.guid) }, render: function(e) { var n, t = this,
                e = i.g(e);!t.getMain() && e && (t.targetId = e.id ? e.id : e.id = t.getId("input"), n = t.renderMain(), i.event.on(e, "compositionstart", function() { t.chineseType = !0 }), i.event.on(e, "compositionend", function() { t.chineseType = !1 }), n.style.display = "none", n.innerHTML = t.getString(), this.dispatchEvent("onload")) }, _isShowing: function() { var e = this,
                n = e.getMain(); return n && "none" != n.style.display }, pick: function(e) { var n = this,
                t = n.currentData,
                i = t && "number" == typeof e && "undefined" != typeof t[e] ? t[e].value : e,
                a = { data: { item: i == e ? { value: e, content: e } : t[e], index: e } };
            n.dispatchEvent("onbeforepick", a) && n.dispatchEvent("onpick", a) }, show: function(e, n, t) { var i = 0,
                a = n.length,
                o = this; if (!o.chineseType && e == o.getTargetValue())
                if (o.enableIndex = [], o.currentIndex = -1, 0 != a || t) { for (o.currentData = []; a > i; i++) o.currentData.push("undefined" != typeof n[i].value ? n[i] : { value: n[i], content: n[i] }), ("undefined" == typeof n[i].disable || 0 == n[i].disable) && o.enableIndex.push(i);
                    o.getBody().innerHTML = o._getBodyString(), o.getMain().style.display = "block", o.dispatchEvent("onshow") } else o.hide() }, hide: function() { var e = this; if (e._isShowing()) { if (e.currentIndex >= 0 && e.holdHighLight)
                    for (var n = e.currentData, t = -1, i = 0, a = n.length; a > i; i++)("undefined" == typeof n[i].disable || 0 == n[i].disable) && (t++, t == e.currentIndex && e.pick(i));
                e.getMain().style.display = "none", e.dispatchEvent("onhide") } }, highLight: function(e) { var n = this,
                t = n.enableIndex,
                a = null;
            n._isEnable(e) && (n.currentIndex >= 0 && n._clearHighLight(), a = n._getItem(e), i.addClass(a, n.getClass("current")), n.currentIndex = i.array.indexOf(t, e), n.dispatchEvent("onhighlight", { index: e, data: n.getDataByIndex(e) })) }, clearHighLight: function() { var e = this,
                n = e.currentIndex,
                t = e.enableIndex[n];
            e._clearHighLight() && e.dispatchEvent("onclearhighlight", { index: t, data: e.getDataByIndex(t) }) }, _clearHighLight: function() { var e = this,
                n = e.currentIndex,
                t = e.enableIndex,
                a = null; return n >= 0 ? (a = e._getItem(t[n]), i.removeClass(a, e.getClass("current")), e.currentIndex = -1, !0) : !1 }, confirm: function(e, n) { var t = this;
            ("keyboard" == n || t._isEnable(e)) && (t.pick(e), t.dispatchEvent("onconfirm", { data: t.getDataByIndex(e) || e, source: n }), t.currentIndex = -1, t.hide()) }, getDataByIndex: function(e) { return { item: this.currentData[e], index: e } }, getTargetValue: function() { return this.getTarget().value }, getTarget: function() { return i.g(this.targetId) }, _getItem: function(e) { return i.g(this.getId("item" + e)) }, _getBodyString: function() {
            function e(e) { return i.format(n.tplPrependAppend, n.getId(e), n.getClass(e), n[e + "HTML"]) } var n = this,
                t = "",
                a = [],
                o = n.currentData,
                d = o.length,
                r = 0; for (t += e("prepend"); d > r; r++) a.push(i.format(n.tplRow, n.getId("item" + r), o[r].content, n.getCallRef() + "._itemOver(event, " + r + ")", n.getCallRef() + "._itemOut(event, " + r + ")", n.getCallRef() + "._itemDown(event, " + r + ")", n.getCallRef() + "._itemClick(event, " + r + ")", "undefined" == typeof o[r].disable || 0 == o[r].disable ? "" : n.getClass("disable"))); return t += i.format(n.tplBody, a.join("")), t += e("append") }, _itemOver: function(e, n) { var t = this;
            i.event.stop(e || window.event), t._isEnable(n) && t.highLight(n), t.dispatchEvent("onmouseoveritem", { index: n, data: t.getDataByIndex(n) }) }, _itemOut: function(e, n) { var t = this;
            i.event.stop(e || window.event), t.holdHighLight || t._isEnable(n) && t.clearHighLight(), t.dispatchEvent("onmouseoutitem", { index: n, data: t.getDataByIndex(n) }) }, _itemDown: function(e, n) { var t = this;
            i.event.stop(e || window.event), t.dispatchEvent("onmousedownitem", { index: n, data: t.getDataByIndex(n) }) }, _itemClick: function(e, n) { var t = this;
            i.event.stop(e || window.event), t.dispatchEvent("onitemclick", { index: n, data: t.getDataByIndex(n) }), t._isEnable(n) && t.confirm(n, "mouse") }, _isEnable: function(e) { var n = this; return i.array.contains(n.enableIndex, e) }, _getDocumentMousedownHandler: function() { var e = this; return function(n) { n = n || window.event; var t = n.target || n.srcElement,
                    a = i.ui.get(t);
                t == e.getTarget() || a && a.uiType == e.uiType || e.hide() } }, _getWindowBlurHandler: function() { var e = this; return function() { e.hide() } }, dispose: function() { var e = this;
            e.dispatchEvent("dispose"), i.dom.remove(e.mainId), i.lang.Class.prototype.dispose.call(this) } }), t.exports = i.ui.Suggestion });;
define("common:widget/lib/tangram/ui/Suggestion/coverable/coverable.js", function(e, o, i) { var n = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Suggestion/Suggestion.js"), e("common:widget/lib/tangram/ui/behavior/coverable/coverable.js"), n.extend(n.ui.Suggestion.prototype, { coverable: !0, coverableOptions: {} }), n.ui.Suggestion.register(function(e) { e.coverable && (e.addEventListener("onshow", function() { e.Coverable_show() }), e.addEventListener("onhide", function() { e.Coverable_hide() })) }), i.exports = n.ui.Suggestion.coverable });;
define("common:widget/lib/tangram/ui/Suggestion/data/data.js", function(a, t, e) { var i = a("common:widget/lib/tangram/base/base.js");
    a("common:widget/lib/tangram/uiBase/uiBase.js"), a("common:widget/lib/tangram/ui/Suggestion/Suggestion.js"), i.ui.Suggestion.extend({ setData: function(a, t, e) { var i = this;
            i.dataCache[a] = t, e || i.show(a, i.dataCache[a]) } }), i.ui.Suggestion.register(function(a) { a.dataCache = {}, a.addEventListener("onneeddata", function(t, e) { var i = a.dataCache; "undefined" == typeof i[e] ? a.getData(e) : a.show(e, i[e]) }) }), e.exports = i.ui.Suggestion.data });;
define("common:widget/lib/tangram/ui/Suggestion/fixWidth/fixWidth.js", function(i, t, e) { var n = i("common:widget/lib/tangram/base/base.js");
    i("common:widget/lib/tangram/uiBase/uiBase.js"), i("common:widget/lib/tangram/ui/Suggestion/Suggestion.js"), i("common:widget/lib/tangram/ui/behavior/posable/posable.js"), n.ui.Suggestion.extend({ posable: !0, fixWidth: !0, getWindowResizeHandler: function() { var i = this; return function() { i.adjustPosition(!0) } }, adjustPosition: function(i) { var t, e, o = this,
                s = o.getTarget(),
                d = o.getMain();
            (o._isShowing() || !i) && (t = n.dom.getPosition(s), e = { top: t.top + s.offsetHeight - 1, left: t.left, width: s.offsetWidth }, e = "function" == typeof o.view ? o.view(e) : e, o.setPosition([e.left, e.top], null, { once: !0 }), n.dom.setOuterWidth(d, e.width)) } }), n.ui.Suggestion.register(function(i) { i.windowResizeHandler = i.getWindowResizeHandler(), i.addEventListener("onload", function() { i.adjustPosition(), i.fixWidth && (i.fixWidthTimer = setInterval(function() { var t = i.getMain(),
                    e = i.getTarget();
                0 != t.offsetWidth && e && e.offsetWidth != t.offsetWidth && (i.adjustPosition(), t.style.display = "block") }, 100)), i.on(window, "resize", i.windowResizeHandler) }), i.addEventListener("onshow", function() { i.adjustPosition() }), i.addEventListener("ondispose", function() { clearInterval(i.fixWidthTimer) }) }), e.exports = n.ui.Suggestion.fixWidth });;
define("common:widget/lib/tangram/ui/Suggestion/input/input.js", function(e, t, n) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Suggestion/Suggestion.js"), i.ui.Suggestion.register(function(e) {
        function t() { setTimeout(function() { e.disposed || (a = e.getTarget().value) }, 20) } var n, a, r, u = "",
            o = !1,
            d = !1;
        e.addEventListener("onload", function() { n = this.getTarget(), t(), e.on(window, "onload", t), e.targetKeydownHandler = e.getTargetKeydownHandler(), e.on(n, "keydown", e.targetKeydownHandler), n.setAttribute("autocomplete", "off"), e.circleTimer = setInterval(function() { if (!d) { null == i.g(n) && e.dispose(); var t = n.value;
                    t == u && "" != t && t != a && t != r ? 0 == e.requestTimer && (e.requestTimer = setTimeout(function() { e.dispatchEvent("onneeddata", t) }, 100)) : (clearTimeout(e.requestTimer), e.requestTimer = 0, "" == t && "" != u && (r = "", e.hide()), u = t, t != r && (e.defaultIptValue = t), a != n.value && (a = "")) } }, 10), e.on(n, "beforedeactivate", e.beforedeactivateHandler) }), e.addEventListener("onitemclick", function() { d = !1, e.defaultIptValue = u = e.getTargetValue() }), e.addEventListener("onpick", function(e) { o && n.blur(), n.value = r = e.data.item.value, o && n.focus() }), e.addEventListener("onmousedownitem", function() { o = !0, d = !0, setTimeout(function() { d = !1, o = !1 }, 500) }), e.addEventListener("ondispose", function() { clearInterval(e.circleTimer) }) }), i.ui.Suggestion.extend({ beforedeactivateHandler: function() { return function() { mousedownView && (window.event.cancelBubble = !0, window.event.returnValue = !1) } }, getTargetKeydownHandler: function() {
            function e(e) { if (!t._isShowing()) return void t.dispatchEvent("onneeddata", t.getTargetValue()); var n = t.enableIndex,
                    i = t.currentIndex; if (0 != n.length) { if (e) switch (i) {
                        case -1:
                            i = n.length - 1, t.pick(n[i]), t.highLight(n[i]); break;
                        case 0:
                            i = -1, t.pick(t.defaultIptValue), t.clearHighLight(); break;
                        default:
                            i--, t.pick(n[i]), t.highLight(n[i]) } else switch (i) {
                        case -1:
                            i = 0, t.pick(n[i]), t.highLight(n[i]); break;
                        case n.length - 1:
                            i = -1, t.pick(t.defaultIptValue), t.clearHighLight(); break;
                        default:
                            i++, t.pick(n[i]), t.highLight(n[i]) } t.currentIndex = i } } var t = this; return function(n) { var a = !1; switch (n = n || window.event, n.keyCode) {
                    case 9:
                    case 27:
                        t.hide(); break;
                    case 13:
                        i.event.stop(n), t.confirm(-1 == t.currentIndex ? t.getTarget().value : t.enableIndex[t.currentIndex], "keyboard"); break;
                    case 38:
                        a = !0;
                    case 40:
                        i.event.stop(n), e(a); break;
                    default:
                        t.currentIndex = -1 } } }, defaultIptValue: "" }), n.exports = i.ui.Suggestion.input });;
define("common:widget/lib/tangram/ui/Dialog/modal/modal.js", function(o, a, e) { var d = o("common:widget/lib/tangram/base/base.js");
    o("common:widget/lib/tangram/uiBase/uiBase.js"), o("common:widget/lib/tangram/ui/Dialog/Dialog.js"), o("common:widget/lib/tangram/ui/Modal/Modal.js"), o("common:widget/lib/tangram/ui/Modal/coverable/coverable.js"), d.extend(d.ui.Dialog.prototype, { modal: !0, modalColor: "#000000", modalOpacity: .4, hideModal: function() { var o = this;
            o.modal && o.modalInstance && o.modalInstance.hide() } }), d.ui.Dialog.register(function(o) { o.modal && (o.addEventListener("onopen", function() { o.modalInstance || (o.modalInstance = new d.ui.Modal({ autoRender: !0 })), o.modalInstance.show({ targetUI: o, styles: { color: o.modalColor, opacity: o.modalOpacity, zIndex: o.modalZIndex ? o.modalZIndex : o.zIndex - 1 } }) }), o.addEventListener("onclose", o.hideModal), o.addEventListener("ondispose", o.hideModal)) }), e.exports = d.ui.Dialog.modal });;
define("common:widget/ui/dialog/dialog.js", function(n, t, o) { var e = n("common:widget/lib/tangram/base/base.js"),
        a = n("common:widget/lib/tangram/ui/Dialog/Dialog.js");
    n("common:widget/lib/tangram/ui/Dialog/button/button.js"), n("common:widget/lib/tangram/ui/Dialog/modal/modal.js"), n("common:widget/lib/tangram/ui/Dialog/draggable/draggable.js"), n("common:widget/lib/tangram/ui/Dialog/autoDispose/autoDispose.js"), n("common:widget/lib/tangram/ui/Dialog/iframe/iframe.js"), n("common:widget/lib/tangram/ui/Dialog/coverable/coverable.js"), n("common:widget/lib/tangram/ui/Dialog/keyboard/keyboard.js"), n("common:widget/lib/tangram/ui/Dialog/closeButton/closeButton.js"), n("common:widget/lib/tangram/fx/fadeOut/fadeOut.js"); var i = { skin: "tangram-dialog-alert", zIndex: 1e5, modalZIndex: 99999, modalColor: "#000", modalOpacity: .25, closeButton: !0, coverable: !0, autoRender: !0, autoDispose: !1, width: 400, height: 300 },
        c = null,
        s = null,
        l = !0,
        r = function(n, t, l) { if (p(), t) { switch (s = i, s.skin = "tangram-dialog-alert", e.object.extend(s, l), s.onopen = s.onopen || function() {}, s.onclose = s.onclose || p, s.onconfirm = s.onconfirm || function() {}, s.oncancel = s.oncancel || function() {}, s.titleText = t, s.classPrefix = s.classPrefix || "", n) {
                    case "tip":
                        s.contentText = '<div class="pop-confirm-info">' + s.info + "</div>"; break;
                    case "show":
                        s.contentText = s.info; break;
                    case "alert":
                        s.contentText = '<div class="pop-alert-info">' + s.info + "</div>", s.buttons = { accept: { content: '<p class="pop-alert-btn"><input class="g-btn-com" type="button" value="确定" /></p>', onclick: function() { s.onconfirm(), s.onclose(), p() } } }; break;
                    case "confirm":
                        s.contentText = '<div class="pop-confirm-info">' + s.info + "</div>", s.buttons = { accept: { content: '<span class="pop-confirm-btn"><input type="button" class="g-btn-com pop-btn-accept" value="确定" /></span>', onclick: function() { s.onconfirm(), o.exports.getConfirmStatus() && (s.onclose(), p()) } }, cancel: { content: '<span class="pop-cancel-btn"><input type="button" class="g-btn-com pop-btn-cancel" value="取消" /></span>', onclick: function() { s.oncancel(), s.onclose(), p() } } }; break;
                    case "iframe":
                        if (s.type = "iframe", s.iframeSrc = s.url, "undefined" != typeof s.iframeButtons && s.iframeButtons) { var r = "",
                                u = "";
                            r = s.acceptBtn ? '<span class="pop-confirm-btn ' + (s.acceptBtn.klass ? s.acceptBtn.klass : "") + '"><input type="button" class="g-btn-com pop-btn-accept" value="' + (s.acceptBtn.val ? s.acceptBtn.val : "确定") + '" /></span>' : '<span class="pop-confirm-btn"><input type="button" class="g-btn-com pop-btn-accept" value="确定" /></span>', u = '<span class="pop-cancel-btn ' + (s.cancelBtn && s.cancelBtn.klass ? s.cancelBtn.klass : "") + '"><input type="button" class="g-btn-com pop-btn-cancel" value="取消" /></span>', s.buttons = { accept: { content: r, onclick: function() { s.onconfirm(), o.exports.getConfirmStatus() && (s.onclose(), p()) } }, cancel: { content: '<span class="pop-cancel-btn"><input type="button" class="g-btn-com pop-btn-cancel" value="取消" /></span>', onclick: function() { s.oncancel(), s.onclose(), p() } } } } break;
                    default:
                        s.contentText = s.info } c = new a(s), c.render(), c.open(), s.fadeOut && (c.Coverable_hide && c.Coverable_hide(), setTimeout(function() { e.fx.fadeOut(c.getMain(), { duration: 400 }), setTimeout(function() { p() }, 500) }, 1e3)) } },
        p = function() { c && (c.dispose(), s.buttons = null, s.onconfirm = null, s.oncancel = null, s.onopen = null, s.onclose = null, s.classPrefix = null, s.type = null, s.iframeSrc = null, s.fadeOut = !1, s.modal = !0, "undefined" != typeof s.iframeButtons && (s.iframeButtons = null), s = null, c = null) };
    o.exports.tip = function(n) { r("tip", " ", n) }, o.exports.show = function(n, t) { r("show", n, t) }, o.exports.alert = function(n, t) { t.width = t.width || 300, t.height = t.height || 100, r("alert", n, t) }, o.exports.confirm = function(n, t) { t.width = t.width || 300, t.height = t.height || 100, r("confirm", n, t) }, o.exports.expConfirm = function(n) { var t = { type: n.type || "warn", width: 514, height: 224, _skin: "exp-dialog" }; switch (t.type) {
            case "warn":
                t.title = "确认提示"; break;
            case "error":
                t.title = "错误提示"; break;
            case "success":
                t.title = "成功提示" } e.object.extend(t, n), t.info = t.finalContent ? t.finalContent : ['<div class="exp-content clearfix">', '<div class="bear left">', '<div class="i-' + t.type + '"></div>', "</div>", '<div class="content-text left">', t.info, "</div>", "</div>"].join(""), t.skin && (t._skin = t.skin + " " + t._skin), t.noFooter && (t._skin = "no-footer " + t._skin), t.skin = t._skin, r("confirm", t.title, t) }, o.exports.iframe = function(n, t) { r("iframe", n, t) }, o.exports.resize = function() { var n = arguments[0],
            t = arguments[1];
        3 == arguments.length && (n = arguments[1], t = arguments[2]), c.update({ width: n, height: t }) }, o.exports.hide = function() { c && (c.close(), c = null) }, o.exports.dispose = p, o.exports.enableOnConfirm = function() { l = !0 }, o.exports.diableOnConfirm = function() { l = !1 }, o.exports.getConfirmStatus = function() { return l }, o.exports.getInstance = function() { return c } });;
define("common:widget/ui/login/login.js", function(require, exports, module) { var T = require("common:widget/lib/tangram/base/base.js"),
        ec = require("common:widget/lib/fis/event/event.js").eventCenter,
        dialog = require("common:widget/ui/dialog/dialog.js"),
        locationOrigin = location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + window.location.port : ""),
        _passport = null,
        _isloaded = !1,
        passaddr = "https://passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + (new Date).getTime(),
        options = { patch: "", isLogin: function() { window.location.reload(!0) }, notLogin: function() { ec.fire("login.log", { patch: options.patch, onLoginSuccess: options.isLogin }) }, submitErr: function() {} },
        defaultOptions = { registerLink: "https://passport.baidu.com/v2/?reg&tpl=exp&u=" + encodeURIComponent(top.location.href), onLoginSuccess: options.isLogin, onLoginFailure: options.notLogin, onSubmitedErr: options.submitErr, cache: !1, tangram: !0, apiOpt: { product: "exp", u: window.top.location.href, staticPage: locationOrigin + "/static/common/html/v3Jump.html", loginType: 1, safeFlag: 0, is_voice_sms: 1, qrcode: 2, makeText: "您还没有登录，皮肤只能保留3天哦，登陆后就可以永久保留您喜爱的皮肤啦", qrcode_animatin: 1, overseas: 0 }, authsite: ["tsina", "weixin", "qzone"], authsiteCfg: { tpl: "exp", display: "popup", u: window.top.location.href, jumpUrl: "http://jingyan.baidu.com/static/common/html/xd.html", onBindSuccess: function() { return defaultOptions.onLoginSuccess(), !1 }, onBindFailure: function() { return defaultOptions.onSubmitedErr(), !1 } }, onshow: function() {} };
    ec.on("login.check", function(obj) { T.object.extend(options, obj), T.ajax.post(F.context("common_isLogin"), "_t=" + (new Date).getTime(), function(req, responseText) { var res = eval("(" + responseText + ")"); return 0 == res.errno ? (res.userType > 0 ? ec.fire("login.setUsername", { onSetSuccess: options.isLogin, from: "check" }) : ec.fire("login._setUsernameSuccess"), !0) : (options.notLogin(), !1) }) }), ec.on("login.log", function(o) { o = o || {}, o.onLoginSuccess || (o.onLoginSuccess = function() { window.location.reload(!0) }), options.isLogin = o.onLoginSuccess, defaultOptions.onLoginSuccess = function(o) { ec.fire("dialog.close"), ec.fire("login._success"), o.returnValue = !1 }, _isloaded ? _passport && _passport.show() : (T.sio.callByBrowser(passaddr, function() { _passport = passport.pop.init(defaultOptions), _passport.show(), T.extend(module.exports, _passport) }), _isloaded = !0) }), ec.on("login._success", function() { ec.fire("login.setUsername", { onSetSuccess: options.isLogin }) }), ec.on("login.setUsername", function(obj) { var setUsername = function() { dialog.iframe("填写用户名", { url: "/z/exp-common/fillname.html?t=" + (new Date).getTime(), width: 560, height: 250, onclose: function() { window.Geditorframe && window.Geditorframe.onDialogClose(), dialog.dispose() } }) };
        obj.onSetSuccess || (obj.onSetSuccess = function() { window.location.reload(!0) }), options.isLogin = obj.onSetSuccess, obj.from && "check" == obj.from ? setUsername() : T.ajax.post(F.context("common_isLogin"), "_t=" + (new Date).getTime(), function(req, responseText) { var res = eval("(" + responseText + ")"); return 0 == res.errno ? (res.userType > 0 ? setUsername() : ec.fire("login._setUsernameSuccess"), !0) : void 0 }) }), ec.on("login._setUsernameSuccess", function() { void 0 != options.userFormerLoginStatus ? options.isLogin(options.userFormerLoginStatus) : options.isLogin() }), ec.on("login._bindWeibosuccess", function(o) { var e = "微博";
        o && o.fromWeibo && (e = o.fromWeibo), alert("您已经成功绑定" + e + "。若您的经验文章被分享到新浪微博，将会@您。感谢您的热心参与！"), location.reload() }), ec.on("dialog.close", function() { _passport && _passport.hide && _passport.hide() }) });;
define("common:widget/ui/msg/msg.js", function(e, i, o) {
    function t(e, i, o) { var t = "method=userReadSystemNotice&";
        t += "maintype=" + e, t += "&mid=" + i, d.ajax.post("/submit/notice", t, function() { o && o() }) }

    function s(e, i) { u = d.g("exp-msgbox-wrapper"), u ? u.innerHTML = "" : u = d.dom.create("div", { id: "exp-msgbox-wrapper" }); var o = d.dom.create("div", { id: "exp-msgbox", className: "exp-msgbox" }),
            t = d.dom.create("div", { id: "msg-arrow", className: "arrow" }); if (t.innerHTML = "<em>◆</em><span>◆</span>", e) { if (i > 2 && (e = '<div class="n-title clearfix"><span class="notice-close" id="notice-close"></span></div>' + e), i > 1) { var s = d.dom.create("div", { id: "exp-msgbox-tip", className: "exp-msgbox-tip" }),
                    a = d.dom.create("div", { id: "exp-msgbox-content", className: "exp-msgbox-content" });
                s.innerHTML = "你有 <b>" + i + "</b> 条未读消息", a.innerHTML = e, o.appendChild(s), o.appendChild(a) } else o.innerHTML = e;
            u.appendChild(t), u.appendChild(o), d.on(o, "click", function(e) { var i = d.event.getTarget(e),
                    o = (d.dom.getParent(i), d.dom.getAttr(i, "log")); if (o > -1) { var t = i.href,
                        s = 3009;
                    x.send(t, s, { evtType: "click", msg: o }) } n(i) }); var r = null;
            d.on(o, "mouseover", function(e) { var i = d.event.getTarget(e); "A" === i.tagName || "SPAN" === i.tagName && !d.dom.hasClass(i, "notice-close") ? d.dom.addClass(d.dom.getParent(i), "itemhover") : d.dom.hasClass(i, "n-item") && d.dom.addClass(i, "itemhover"), r && (clearTimeout(r), r = null), d.dom.addClass(o, "msg-mouse-over") }), d.on(o, "mouseout", function(e) { var i = d.event.getTarget(e); "A" === i.tagName || "SPAN" === i.tagName && !d.dom.hasClass(i, "notice-close") ? d.dom.removeClass(d.dom.getParent(i), "itemhover") : d.dom.hasClass(i, "n-item") && d.dom.removeClass(i, "itemhover"), r && (clearTimeout(r), r = null), r = setTimeout(function() { d.dom.removeClass(o, "msg-mouse-over") }, 500) }), document.body.appendChild(u), v ? (f = !1, c()) : (d.hide(u), b = !0) } }

    function a() { var e = location.href; return -1 !== e.indexOf("/user/nuc") ? -1 !== e.indexOf("followed") ? 2 : -1 !== e.indexOf("comment") ? 3 : -1 !== e.indexOf("message") ? 4 : -1 : -1 }

    function n(e) { var i = d.dom.getAttr(e, "id"),
            o = 0,
            t = "exp-msgbox-wrapper"; if ("notice-close" !== i) { var s = d.dom.getAttr(e, "id"); if (!s) return; var a = s.split("-"); if (3 !== a.length) return;
            t = d.dom.getParent(e), o = a[2] } if (-1 !== d.array.indexOf(_, o)) { if ("cms" === o) l.set("EXP_CMSINCOME", F.context("msg_income").stamp);
            else if ("sfr" === o) l.set("EXP_XINRUIW", 1);
            else if ("msg" === o) { var n = d.dom.getAttr(e, "cn"),
                    c = d.dom.getAttr(e, "st");
                l.set(n, c) } var g = d.dom.getParent(t);
            d.dom.remove(t), 3 === E && d.dom.remove(d.dom.first(g)), E--; var p = d.dom.q("n-item"); if (p) { var f = p.length;
                f > 0 && d.dom.addClass(p[0], "first") } return 1 > E && d.dom.remove("exp-msgbox-wrapper"), void r(E) } m(o, function() { var e = d.dom.getParent(t); if (d.dom.remove(t), "exp-msgbox-wrapper" !== t) { 3 === E && d.dom.remove(d.dom.first(e)), E--; var i = d.dom.q("n-item"); if (i) { var o = i.length;
                    o > 0 && d.dom.addClass(i[0], "first") } 1 > E && d.dom.remove("exp-msgbox-wrapper") } else E--;
            r(E) }) }

    function r(e) { if (document.getElementById("exp-msgbox-tip")) { var i = document.getElementById("exp-msgbox-tip").getElementsByTagName("b")[0];
            i.innerHTML = e } }

    function m(e, i, o) { var t = "method=userReadSystemNotice&";
        t += "4" === e ? "group=1" : "maintype=" + e, o && (t += o), d.ajax.post("/submit/notice", t, function() { i && i() }) }

    function c() { var e = d.g("exp-msgbox-wrapper");
        e && (d.page.getScrollTop() >= 25 && !f ? (g.fixable(e, { top: 1, left: d.dom.getPosition(e).left }), d.dom.removeStyle(e, "left"), d.dom.setStyle("msg-arrow", "display", "none"), f = !0) : d.page.getScrollTop() < 25 && f && (d.dom.removeStyle(e, "position"), d.dom.removeStyle(e, "top"), d.dom.setStyle("msg-arrow", "display", "block"), d.ie && d.ie < 7 && e.style.removeExpression("top"), f = !1), F.context("COMMENT_MAX_LEN") && (d.page.getScrollTop() >= 162 && !A ? (g.fixable(e, { top: 51 }), d.dom.setStyle("msg-arrow", "display", "block"), A = !0) : d.page.getScrollTop() < 162 && A && (g.fixable(e, { top: 1 }), d.dom.setStyle("msg-arrow", "display", "none"), A = !1))) } var d = e("common:widget/lib/tangram/base/base.js"),
        l = e("common:widget/ui/cookie/cookie.js"),
        g = e("common:widget/ui/util/fixable/fixable.js");
    e("common:widget/ui/login/login.js"); var p = e("common:widget/lib/fis/event/event.js").eventCenter,
        f = !1,
        u = null,
        v = !1,
        b = !1,
        x = e("common:widget/ui/log/log.js"),
        h = e("common:widget/ui/dialog/dialog.js"),
        j = e("common:widget/ui/red-bao/red-bao.js"),
        w = e("activity:widget/ui/redbox/redbox.js"),
        y = e("common-jquery:widget/js/logic/msg/badge/badge.js"),
        k = e("common-jquery:widget/js/logic/msg/income-share/income-share.js"),
        C = e("common-jquery:widget/js/logic/msg/dubangbang/dubangbang.js"),
        N = e("common-jquery:widget/js/logic/msg/amazing-2016/amazing-2016.js"),
        T = e("common-jquery:widget/js/logic/msg/school2016/school2016.js"),
        S = e("common-jquery:widget/js/logic/msg/super-2016/super-2016.js"),
        q = e("common-jquery:widget/js/logic/msg/marathon/marathon.js"),
        M = e("common-jquery:widget/js/logic/msg/redbox-video/redbox-video.js"),
        P = e("common-jquery:widget/js/logic/msg/prize2017/prize2017.js");
    o.exports.init = function() { if (F.context("isLogin") && location.href === top.location.href) { var e = a(); - 1 === e ? this.get() : (m(e), setTimeout(o.exports.get, 1e3)), d.on(window, "scroll", c), d.on(window, "resize", c) } }; var E = 0,
        _ = ["cms", "sfr", "msg", "rs1", "rs2"];
    o.exports.get = function() { var e = new Date,
            i = location.pathname;
        d.ajax.get("/notice/getSystemNoticeCount?t=" + e.getTime(), function(e, o) { if ("" !== d.trim(o)) { var a = d.json.parse(d.trim(o)),
                    n = "";
                a && a.msg && (d.object.each(a.msg, function(e) { if (0 !== e.count) switch (e.maintype) {
                        case 1:
                            break;
                        case 2:
                            n += ['<div class="n-item clearfix">', '<a href="/user/nuc/interact?tab=followed">有<b>' + e.count + "</b>个新粉丝</a>", '<span id="item-close-2"></span>', "</div>"].join(""), E += 1; break;
                        case 3:
                            n += ['<div class="n-item clearfix">', '<a href="/user/nuc/interact?tab=comment">有<b>' + e.count + "</b>条新评论</a>", '<span id="item-close-3"></span>', "</div>"].join(""), E += 1; break;
                        case 0:
                            n += ['<div class="n-item clearfix">', '<a href="/user/nuc/message">有<b>' + e.count + "</b>条系统通知</a>", '<span id="item-close-4"></span>', "</div>"].join(""), E += 1; break;
                        case 13:
                            if (n += ['<div class="n-item clearfix">', '<a href="/user/nuc/message">有<b>' + e.count + "</b>条有得通知</a>", '<span id="item-close-13"></span>', "</div>"].join(""), E += 1, "/edit/success" === i) break; if (e.question) { var o = [],
                                    s = e.question[0];
                                d.each(e.question, function(e) { o.push(e.messageid) }), h.show("经验提示", { info: ['<div class="que-rol-pop">', "<h3>疑问解决！</h3>", "<p>感谢你的耐心答复！</p>", "<p>用户对你的经验《", '<a target="_blank" ', 'href="/article/' + s.eidEnc + '.html">', s.content, "</a>", "》疑问已解决。", "</p>", "</div>"].join(""), width: 400, height: 200, onclose: function() { t(13, o) }, onconfirm: function() { t(13, o) } }) } break;
                        case 12:
                            if ("/edit/success" === i) break;
                            j.init(e.redbox); break;
                        case 31:
                            if ("/edit/success" === i) break;
                            w.init(); break;
                        case 10:
                            if ("/edit/success" === i) break;
                            k.init(e.withdraw[0], e.maintype); break;
                        case 21:
                            if ("/edit/success" === i) break;
                            C.init(e); break;
                        case 22:
                            if ("/edit/success" === i) break;
                            N.init(e); break;
                        case 40:
                            if ("/edit/success" === i) break;
                            T.init(e); break;
                        case 42:
                            q.init(e); break;
                        case 50:
                            if ("[object Null]" === Object.prototype.toString.call(e.other)) break;
                            e.other.actName && "super2016" === e.other.actName ? S.init(e) : y.init(e); break;
                        case 70:
                            var a = e.other && e.other.prizeValue;
                            a && (e.other.prizeValue = e.other.prizeValue * e.count), M.init(e); break;
                        case 60:
                            P.init(e) } }), d.each(a.msg, function(e) { if (8 === e.maintype) { var i = F.context("msg_income"); if (i) { var o = l.get("EXP_CMSINCOME"),
                                t = i.stamp,
                                s = i.msg,
                                a = i.link,
                                r = null === o || o !== t; if (t > 0 && r && "" !== s) { var m = s; "" !== a && (m = '<a href="' + a + '">' + m + "</a>"), E += 1, n += 1 === E ? ['<div style="border:none;" class="n-item n-cms-in clearfix">', m, '<span id="i-close-cms"></span>', "</div>"].join("") : ['<div class="n-item n-cms-in clearfix">', m, '<span id="i-close-cms"></span>', "</div>"].join("") } } } else if (9 === e.maintype) { var c = l.get("EXP_XINRUIW"); if (1 === c) return; var g = d.url.getQueryValue(location.href, "sfr"); if (g === F.context("sfr")) return;
                        E += 1, n += 1 === E ? ['<div style="border:none;" class="n-item n-cms-in clearfix">', '<a href="http://jingyan.baidu.com/user/income?sfr=', F.context("sfr"), '">《6大主题乐园》邀请码请查收</a>', '<span id="i-close-sfr"></span>', "</div>"].join("") : ['<div class="n-item n-cms-in clearfix">', '<a href="http://jingyan.baidu.com/user/income?sfr=', F.context("sfr"), '">《6大主题乐园》邀请码请查收</a>', '<span id="i-close-sfr"></span>', "</div>"].join("") } })), d.each(F.context("msg_topic"), function(e, i) { var o = "EXP_TOPMSG" + i,
                        t = l.get(o),
                        s = e.stamp; if (s > 0 && (null === t || t !== s)) { var a = e.msg,
                            r = e.link; "" !== r && (a = '<a log="' + e.log + '" href="' + r + '" target="_blank">' + a + "</a>"), E += 1; var m = 0 === i ? " n-cms-first" : "";
                        n += 1 === E ? ['<div style="border:none;" class="n-item n-cms' + m + ' clearfix">', a, '<span id="i-close-msg" cn="', o, '" st="', s, '"></span>', "</div>"].join("") : ['<div class="n-item n-cms' + m + ' clearfix">', a, '<span id="i-close-msg" cn="', o, '" st="', s, '"></span>', "</div>"].join("") } }), "" !== n && s(n, E) } }) }, p.on("msg.resize", function() { v = !0, b && (d.show(u), f = !1, c()) }), o.exports.readMessage = m; var A = !1 });;
define("common:widget/userbar/userbar.js", function(e, n, t) { var a = e("common:widget/lib/tangram/base/base.js"),
        s = e("common:widget/lib/fis/event/event.js").eventCenter,
        i = (e("common:widget/ui/msg/msg.js"), e("common-jquery:widget/js/util/ajax/ajax.es").ajax);
    t.exports.statusMsg = function() { var e = "/notice/getSystemNoticeCount?t=" + (new Date).getTime();
        i({ url: e, dataType: "jsonp" }).then(function(e) { var n = e.unread_msg.count;
            n >= 0 && n >= 100 && (n = "99+"); var t = "<a href='http://jingyan.baidu.com/msg' class='bluelink' target='_blank'>私信</a>(" + n + ")";
            a.g("mnum").innerHTML = t, s.fire("msg.resize") }, function() {}) } });;
define("common:widget/footer/footer.js", function(e, t, o) { var n = e("common-jquery:widget/lib/jquery/jquery.js"),
        a = e("common-jquery:widget/js/logic/log/log.js"),
        i = { init: function() { n(".feedback").on("click", "#freshhelp, #feedback, #complaint", function(e) { var t = e.target.id;
                    a.send(window.location.href, "", { pos: "footer-" + t, action: "click" }) }), this.initFeedbackPlugin() }, initFeedbackPlugin: function() {
                function e() { if (bds && bds.qa && bds.qa.ShortCut && bds.qa.ShortCut.initRightBar) { var e = { needImage: !0, upload_file: !0, appid: 222561, productLine: 90599, wenjuanTitle: "", wenjuanURL: "", issuePlaceholder: "请输入问题描述", contactPlaceholder: "请输入邮箱地址，便于及时处理您的问题", showPosition: "center", contactWayType: "email", needContactWay: !0, needHotQuestion: !0, needQuestionnaire: !1, needFeedbackType: !1, needProductType: !1, needEvaluate: !0, typeArray: [], titleBgColor: "#F5F5F5", buttonColor: "#3582FA", mainFontColor: "#151515", secondaryFontColor: "#999999", titleColor: "#333333", hotQuestionArray: [] };
                        bds.qa.ShortCut.initRightBar(e); var t = { extend_feedback_channel: 32964 };
                        bds.qa.ShortCut._getProData(t) } }

                function t() { return window.bds && window.bds.qa && window.bds.qa.ShortCut ? e() : o("https://ufosdk.baidu.com/Public/feedback/js/dist/feedback_plugin_2.0.js", function() { e() }, { charset: "utf-8", id: "feedback_script" }), !1 }

                function o(e, t, o) { var n = document.createElement("script"),
                        o = o || {};
                    n.type = "text/javascript", o.charset && (n.charset = o.charset), o.id && (n.id = o.id), n.readyState ? n.onreadystatechange = function() {
                        ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = null, t()) } : n.onload = function() { t() }, n.src = e, document.body.appendChild(n) } document.getElementById("feedback").onclick = t } };
    o.exports = i });