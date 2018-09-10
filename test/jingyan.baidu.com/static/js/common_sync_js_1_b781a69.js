define("common:widget/lib/tangram/flash/flash.js", function(a, s, e) { var f = a("common:widget/lib/tangram/base/base.js");
    f.flash = f.flash || {}, e.exports = f.flash });;
define("common:widget/lib/tangram/fx/collapse/collapse.js", function(t, e, o) { var i = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/fx/create/create.js"), i.fx.collapse = function(t, e) { if (!(t = i.dom.g(t))) return null; var o, n, a = t,
            r = { vertical: { value: "height", offset: "offsetHeight", stylesValue: ["paddingBottom", "paddingTop", "borderTopWidth", "borderBottomWidth"] }, horizontal: { value: "width", offset: "offsetWidth", stylesValue: ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"] } },
            l = i.fx.create(a, i.object.extend({ orientation: "vertical", initialize: function() { n = r[this.orientation], this.protect(n.value), this.protect("overflow"), this.restoreAfterFinish = !0, o = a[n.offset], a.style.overflow = "hidden" }, transition: function(t) { return Math.pow(1 - t, 2) }, render: function(t) { a.style[n.value] = Math.floor(t * o) + "px" }, finish: function() { i.dom.hide(a) } }, e || {}), "baidu.fx.expand_collapse"); return l.launch() }, o.exports = i.fx.collapse });;
define("common:widget/lib/tangram/fx/expand/expand.js", function(t, e, i) { var n = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/fx/create/create.js"), n.fx.expand = function(t, e) { if (!(t = n.dom.g(t))) return null; var i, o, a = t,
            r = { vertical: { value: "height", offset: "offsetHeight", stylesValue: ["paddingBottom", "paddingTop", "borderTopWidth", "borderBottomWidth"] }, horizontal: { value: "width", offset: "offsetWidth", stylesValue: ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"] } },
            d = n.fx.create(a, n.object.extend({ orientation: "vertical", initialize: function() {
                    function t(t, e) { var i = parseInt(n.getStyle(t, e)); return i = isNaN(i) ? 0 : i, i = n.lang.isNumber(i) ? i : 0 } o = r[this.orientation], n.dom.show(a), this.protect(o.value), this.protect("overflow"), this.restoreAfterFinish = !0, i = a[o.offset], n.each(o.stylesValue, function(e) { i -= t(a, e) }), a.style.overflow = "hidden", a.style[o.value] = "1px" }, transition: function(t) { return Math.sqrt(t) }, render: function(t) { a.style[o.value] = Math.floor(t * i) + "px" } }, e || {}), "baidu.fx.expand_collapse"); return d.launch() }, i.exports = n.fx.expand });;
define("common:widget/lib/tangram/fx/fadeIn/fadeIn.js", function(e, n, t) { var a = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/fx/opacity/opacity.js"), a.fx.fadeIn = function(e, n) { if (!(e = a.dom.g(e))) return null; var t = a.fx.opacity(e, a.object.extend({ from: 0, to: 1, restoreAfterFinish: !0 }, n || {})); return t.__type = "baidu.fx.fadeIn", t }, t.exports = a.fx.fadeIn });;
define("common:widget/lib/tangram/fx/move/move.js", function(t, e, i) { var n = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/fx/create/create.js"), n.fx.move = function(t, e) { if (!(t = n.dom.g(t)) || "static" == n.dom.getStyle(t, "position")) return null; if (e = n.object.extend({ x: 0, y: 0 }, e || {}), 0 == e.x && 0 == e.y) return null; var i = n.fx.create(t, n.object.extend({ initialize: function() { this.protect("top"), this.protect("left"), this.originX = parseInt(n.dom.getStyle(t, "left")) || 0, this.originY = parseInt(n.dom.getStyle(t, "top")) || 0 }, transition: function(t) { return 1 - Math.pow(1 - t, 2) }, render: function(e) { t.style.top = this.y * e + this.originY + "px", t.style.left = this.x * e + this.originX + "px" } }, e), "baidu.fx.move"); return i.launch() }, i.exports = n.fx.move });;
define("common:widget/lib/tangram/fx/moveBy/moveBy.js", function(e, o, t) { var m = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/fx/move/move.js"), m.fx.moveBy = function(e, o, t) { if (!(e = m.dom.g(e)) || "static" == m.dom.getStyle(e, "position") || "object" != typeof o) return null; var n = {};
        n.x = o[0] || o.x || 0, n.y = o[1] || o.y || 0; var i = m.fx.move(e, m.object.extend(n, t || {})); return i }, t.exports = m.fx.moveBy });;
define("common:widget/lib/tangram/fx/scrollBy/scrollBy.js", function(t, o, e) { var l = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/fx/create/create.js"), l.fx.scrollBy = function(t, o, e) { if (!(t = l.dom.g(t)) || "object" != typeof o) return null; var r = {},
            n = {};
        r.x = o[0] || o.x || 0, r.y = o[1] || o.y || 0; var s = l.fx.create(t, l.object.extend({ initialize: function() { var o = n.sTop = t.scrollTop,
                    e = n.sLeft = t.scrollLeft;
                n.sx = Math.min(t.scrollWidth - t.clientWidth - e, r.x), n.sy = Math.min(t.scrollHeight - t.clientHeight - o, r.y) }, transition: function(t) { return 1 - Math.pow(1 - t, 2) }, render: function(o) { t.scrollTop = n.sy * o + n.sTop, t.scrollLeft = n.sx * o + n.sLeft }, restore: function() { t.scrollTop = n.sTop, t.scrollLeft = n.sLeft } }, e), "baidu.fx.scroll"); return s.launch() }, e.exports = l.fx.scrollBy });;
define("common:widget/lib/tangram/fx/scrollTo/scrollTo.js", function(o, l, r) { var c = o("common:widget/lib/tangram/base/base.js");
    o("common:widget/lib/tangram/fx/scrollBy/scrollBy.js"), c.fx.scrollTo = function(o, l, r) { if (!(o = c.dom.g(o)) || "object" != typeof l) return null; var s = {}; return s.x = (l[0] || l.x || 0) - o.scrollLeft, s.y = (l[1] || l.y || 0) - o.scrollTop, c.fx.scrollBy(o, s, r) }, r.exports = c.fx.scrollTo });;
define("common:widget/lib/tangram/ui/Button/capture/capture.js", function(t, e, n) { var o = t("common:widget/lib/tangram/base/base.js");
    t("common:widget/lib/tangram/uiBase/uiBase.js"), t("common:widget/lib/tangram/ui/Button/Button.js"), o.ui.Button.register(function(t) { t.capture && t.addEventListener("load", function() { var e = t.getBody(),
                n = o.fn.bind(function(n) { var u = o.event.getTarget(n);
                    u != e && !o.dom.contains(e, u) && t.getState().press && t.fire("mouseout", n) }),
                u = function(e) { t.getState().press || t.fire("mouseout", e) };
            e.onmouseout = null, t.on(e, "mouseout", u), t.on(document, "mouseup", n) }) }), n.exports = o.ui.Button.capture });;
define("common:widget/lib/tangram/ui/Button/poll/poll.js", function(o, t, e) { var n = o("common:widget/lib/tangram/base/base.js");
    o("common:widget/lib/tangram/uiBase/uiBase.js"), o("common:widget/lib/tangram/ui/Button/Button.js"), n.ui.Button.register(function(o) { o.poll && (n.lang.isBoolean(o.poll) && (o.poll = {}), o.addEventListener("mousedown", function() { var t = 0,
                e = o.poll.interval || 100,
                n = o.poll.time || 0;! function() { o.getState().press && (t++ > n && o.onmousedown && o.onmousedown(), o.poll.timeOut = setTimeout(arguments.callee, e)) }() }), o.addEventListener("dispose", function() { o.poll.timeOut && (o.disable(), window.clearTimeout(o.poll.timeOut)) })) }), e.exports = n.ui.Button.poll });;
define("common:widget/lib/tangram/ui/Slider/Slider.js", function(e, t, a) { var i = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), i.ui.Slider = i.ui.createUI(function() { var e = this;
        e.range = e.range || [e.min, e.max] }).extend({ layout: "horizontal", uiType: "slider", tplBody: '<div id="#{id}" class="#{class}" onmousedown="#{mousedown}" style="position:relative;">#{thumb}</div>', tplThumb: '<div id="#{thumbId}" class="#{thumbClass}" style="position:absolute;"></div>', value: 0, min: 0, max: 100, disabled: !1, _dragOpt: {}, _axis: { horizontal: { mousePos: "x", pos: "left", size: "width", clientSize: "clientWidth", offsetSize: "offsetWidth" }, vertical: { mousePos: "y", pos: "top", size: "height", clientSize: "clientHeight", offsetSize: "offsetHeight" } }, getString: function() { var e = this; return i.format(e.tplBody, { id: e.getId(), "class": e.getClass(), mousedown: e.getCallRef() + "._mouseDown(event)", thumb: i.format(e.tplThumb, { thumbId: e.getId("thumb"), thumbClass: e.getClass("thumb") }) }) }, _mouseDown: function(e) { var t = this,
                a = t._axis[t.layout],
                n = i.page.getMousePosition(),
                s = i.dom.getPosition(t.getBody()),
                o = t.getThumb(),
                u = i.event.getTarget(e);
            u == o || i.dom.contains(o, u) || t.disabled || (t._calcValue(n[a.mousePos] - s[a.pos] - o[a.offsetSize] / 2), t.update(), t.dispatchEvent("slideclick")) }, render: function(e) { var t = this;
            e && (i.dom.insertHTML(t.renderMain(e), "beforeEnd", t.getString()), t._createThumb(), t.update(), t.dispatchEvent("onload")) }, _createThumb: function() { var e, t = this;
            t._dragOpt = { ondragend: function() { t.dispatchEvent("slidestop") }, ondragstart: function() { t.dispatchEvent("slidestart") }, ondrag: function() { var e = t._axis[t.layout],
                        a = t.getThumb().style[e.pos];
                    t._calcValue(parseInt(a)), t.dispatchEvent("slide") }, range: [0, 0, 0, 0] }, t._updateDragRange(), e = i.dom.draggable(t.getThumb(), t._dragOpt), t.addEventListener("dispose", function() { e.cancel() }) }, _updateDragRange: function(e) { var t = this,
                a = t._axis[t.layout],
                i = e || t.range,
                n = t._dragOpt.range,
                s = t.getThumb();
            i = [Math.max(Math.min(i[0], t.max), t.min), Math.max(Math.min(i[1], t.max), t.min)], "horizontal" == t.layout.toLowerCase() ? (n[1] = t._parseValue(i[1], "fix") + s[a.offsetSize], n[3] = t._parseValue(i[0], "fix"), n[2] = s.clientHeight) : (n[0] = t._parseValue(i[0], "fix"), n[2] = t._parseValue(i[1], "fix") + s[a.offsetSize], n[1] = s.clientWidth) }, update: function(e) { { var t = this,
                    a = t._axis[t.layout];
                t.getBody() } e = e || {}, i.object.extend(t, e), t._updateDragRange(), t._adjustValue(), t.dispatchEvent("beforesliderto", { drop: e.drop }) && (t.getThumb().style[a.pos] = t._parseValue(t.value, "pix") + "px", t.dispatchEvent("update")) }, _adjustValue: function() { var e = this,
                t = e.range;
            e.value = Math.max(Math.min(e.value, t[1]), t[0]) }, _calcValue: function(e) { var t = this;
            t.value = t._parseValue(e, "value"), t._adjustValue() }, _parseValue: function(e, t) { var a = this,
                i = a._axis[a.layout],
                n = a.getBody()[i.clientSize] - a.getThumb()[i.offsetSize]; return e = "value" == t ? (a.max - a.min) / n * e + a.min : Math.round(n / (a.max - a.min) * (e - a.min)) }, getValue: function() { return this.value }, getTarget: function() { return i.g(this.targetId) }, getThumb: function() { return i.g(this.getId("thumb")) }, disable: function() { var e = this;
            e.disabled = !0, e._updateDragRange([e.value, e.value]) }, enable: function() { var e = this;
            e.disabled = !1, e._updateDragRange(e.range) }, dispose: function() { var e = this;
            e.dispatchEvent("dispose"), i.dom.remove(e.getId()), e.dispatchEvent("ondispose"), i.lang.Class.prototype.dispose.call(e) } }), a.exports = i.ui.Slider });;
define("common:widget/nav/nav.js", function(e, n, o) { var a = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/fx/expand/expand.js"), e("common:widget/lib/tangram/fx/collapse/collapse.js"); var i = { init: function() { var e = a.dom.query("#nav-wrap div.sub-menu");
            a.object.each(e, function(e) { var n = a.dom.getParent(e),
                    o = a.dom.query(".dir-icon", n)[0];
                a.on(n, "mouseenter", function() { a.dom.addClass(o, "dir-icon-hover"), a.fx.expand(e, { duration: 50 }) }), a.on(n, "mouseleave", function() { a.dom.removeClass(o, "dir-icon-hover"), a.fx.collapse(e, { duration: 50, interval: 15 }) }) }); var n = a.dom.query("#nav-wrap .sub-menu-item");
            a.object.each(n, function(e) { a.on(e, "click", function() { var n = a.dom.getAncestorByClass(e, "main-menu-item"),
                        o = a.dom.query(".dir-icon", n)[0],
                        i = a.dom.query(".sub-menu", n)[0];
                    a.dom.removeClass(o, "dir-icon-hover"), a.hide(i) }) }) } };
    o.exports = i });;
define("common:widget/ui/captcha/captcha.js", function(t, i, o) { var e = t("common:widget/lib/tangram/base/base.js");
    o.exports = e.lang.createClass(function(i) { var o = { title: "经验提示", textTip: "点击以下文字输入验证码", errorTip: "验证码不正确，请重新输入", host: "/captcha/genimage?codestr=", asyn: "/asyncreq?method=getAuthCode", callback: function() {}, error: function() {} },
            i = e.object.extend(o, i);
        this.codestr = "", this.codeipt = "", this.dialog = window.parent.__dialog || t("common:widget/ui/dialog/dialog.js"), this.option = function(t) { return i[t] } }, { type: "Captcha" }).extend({ init: function() {}, update: function() {}, error: function() {}, destroy: function() { this.dialog && this.dialog.dispose && this.dialog.dispose() } }) });;
define("common:widget/ui/captcha/sudoku/sudoku.js", function(t, a, i) { var e = t("common:widget/lib/tangram/base/base.js");
    e = top.__T || e, i.exports = e.lang.createClass(function() { this.codestr = "", this.codeipt = [], this.iptspos = ["-6px -36px", "-53px -39px", "-96px -38px", "0px -83px", "-53px -85px", "-96px -86px", "-2px -135px", "-53px -135px", "-96px -135px"], this.timer = null, this.init() }, { type: "Sudoku", superClass: t("common:widget/ui/captcha/captcha.js") }).extend({ init: function() { var t = this,
                a = ['<div class="captcha-box">', '<div class="captcha-input">', '<div class="captcha-input-title">验证码</div>', '<dl class="ml-5"><dt class="captcha-backspace"></dt><dd></dd><dd></dd><dd></dd><dd></dd></dl>', "</div>", '<div class="captcha-content">', '<div><a href="javascript:void(0)" class="captcha-img-wrap mt-5"></a><a href="javascript:void(0)" class="captcha-img-change">看不清?</a></div>', '<p class="captcha-content-tip f-12">#{tip}</p>', '<div class="captcha-grid-buttons">', '<a href="javascript:void(0)"><div class="captcha-btn-1"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-2"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-3"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-4"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-5"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-6"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-7"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-8"></div></a>', '<a href="javascript:void(0)"><div class="captcha-btn-9"></div></a>', "</div>", "</div>", "</div>"].join("");
            t.dialog.show(this.option("title"), { width: 345, height: 290, info: e.string.format(a, { tip: t.option("textTip") }), onopen: function() { var a = e.q("captcha-backspace")[0],
                        i = (e.q("captcha-img-wrap")[0], e.q("captcha-img-change")[0]),
                        c = e.q("captcha-content-tip")[0],
                        s = e.dom.query(".captcha-input dd"),
                        p = e.dom.query(".captcha-grid-buttons a");
                    e.extend(t, { captchaInputs: s, captchaErrTip: c }), e.on(a, "click", function(a) { var i = t.codeipt.length;
                        i > 0 && (e.dom.setAttr(s[i - 1], "style", ""), t.codeipt.pop()), e.event.stop(a) }), e.on(i, "click", function(a) { t.update(), e.event.stop(a) }), e.each(p, function(a, i) { e.on(a, "click", function(a) { var c = t.codeipt.length;
                            4 > c && (t.codeipt.push(i + 1), e.dom.setStyle(s[c], "background-position", t.iptspos[i])), 3 == c && t.option("callback")(t.codeipt.join(""), t.codestr), e.event.stop(a) }) }), t.update() } }) }, update: function() { var t = this;
            t.codeipt.length = 0, e.each(t.captchaInputs, function(t) { e.dom.setAttr(t, "style", "") }), e.ajax.get(t.option("asyn") + "&t=" + (new Date).getTime(), function(a, i) { var c = e.json.parse(i); if (0 == c.errno) { t.codestr = c.vcode; var s = t.option("host") + t.codestr;
                    t.setStylesheet(s) } }) }, setStylesheet: function(t) { var a = ".captcha-grid-buttons a div, .captcha-img-wrap, .captcha-input dd{background:url(#{codeimg}&t=#{t}) no-repeat;}"; if (this.styleSheetEle = e.g("captcha-sheet"), !this.styleSheetEle) { this.styleSheetEle = e.dom.create("style", { id: "captcha-sheet", type: "text/css" }); var i = e.dom.query("head")[0];
                i.appendChild(this.styleSheetEle) } var c = e.string.format(a, { codeimg: t, t: (new Date).getTime() });
            this.styleSheetEle.styleSheet ? this.styleSheetEle.styleSheet.cssText = c : this.styleSheetEle.innerHTML = c }, error: function(t) { var a = this,
                i = t || a.option("errorTip");
            this.update(); var c = this.captchaErrTip;
            c.innerHTML = i, e.dom.addClass(c, "error"), clearTimeout(this.timer), this.timer = setTimeout(function() { c.innerHTML = a.option("textTip"), e.dom.removeClass(c, "error") }, 500) } }) });;
define("common:widget/ui/check-bluebook-upgrade/check-bluebook-upgrade.js", function(o, a, e) { var t = o("common:widget/lib/tangram/base/base.js"),
        n = o("common:widget/ui/dialog/dialog.js"),
        i = function() { t.ajax.post("/taskbookasyn?act=get_user_info", null, function(o, a) { a = t.json.parse(a); var e = "income" == a.taskbook.name; if (!a.grade.is_know && !t.dom.hasClass("blue-book-ads", "blue-book-upgrade")) { var i = "blue-book-dialog",
                        s = ['<div class="dialog-content">', '<p class="upgrade-tip">恭喜你，你的' + a.taskbook.title + "升级了！</p>", "</div>"].join("");
                    e && (i = "income-book-dialog"), n.alert("升级啦", { info: s, skin: i, width: 400, height: 240, onconfirm: function() { setTimeout(function() { n.iframe(a.taskbook.title, { skin: "blue-book-task", url: "/taskbook?page=taskbook&name=" + a.taskbook.name, width: 912, transparent: 1, height: 600 }) }, 500); var o = "/taskbookasyn?act=confirm_promotion",
                                e = "name=" + a.taskbook.name + "&grade=" + a.grade.grade;
                            t.ajax.post(o, e, function() {}) } }), t.dom.query("." + i + " .tangram-dialog-footer")[0].getElementsByTagName("input")[0].value = "赶快前往查看" } }) };
    e.exports = i });;
define("common:widget/ui/error/error.js", function(require, exports, module) { var T = require("common:widget/lib/tangram/base/base.js"),
        dialog = require("common:widget/ui/dialog/dialog.js"),
        login = require("common:widget/ui/login/login.js"),
        ec = require("common:widget/lib/fis/event/event.js").eventCenter,
        msg = require("common:widget/ui/msg/msg.js"),
        errorHandle;
    require("common:widget/lib/tangram/fx/fadeOut/fadeOut.js"), require("common:widget/lib/tangram/fx/moveBy/moveBy.js"); var shimingAct = require("common-jquery:widget/js/logic/shimingzhi/shimingzhi.js").shimingAct;
    dialog = window.parent.__dialog || dialog; var errorMap = { 1: { errName: "OTHER_ERR", errMsg: "未知错误", handler: null }, 10: { errName: "FEED_TOO_SHORT_ERR", errMsg: "经验有得内容太短", handler: null }, 11: { errName: "FEED_TOO_LONG_ERR", errMsg: "经验有得内容太长", handler: null }, 12: { errName: "QUESTION_TOO_SHORT_ERR", errMsg: "经验疑问内容太短", handler: null }, 13: { errName: "QUESTION_TOO_LONG_ERR", errMsg: "经验疑问内容太长", handler: null }, 14: { errName: "QUESTION_TOO_SHORT_ERR", errMsg: "有得图片太多", handler: null }, 15: { errName: "INVALID_QID_ERR", errMsg: "非法疑问qid", handler: null }, 16: { errName: "INVALID_FID_ERR", errMsg: "非法有得fid", handler: null }, 17: { errName: "MAX_REPLY_NUM_ERR", errMsg: "我的疑问最多允许回复10条", handler: null }, 18: { errName: "INVALID_USER_ERR", errMsg: "非法用户，提交失败", handler: null }, 19: { errName: "IS_SELF_USER_ERR", errMsg: "我的疑问最多允许回复10条", handler: null }, 20: { errName: "INVALID_RFID_ERR", errMsg: "非法有得rfid", handler: null }, 21: { errName: "NOT_PROMO_USER_ERR", errMsg: "非签约用户不能发布经验“有得”", handler: null }, 2001: { errName: "HAS_FEEDBACK_ERR", errMsg: "您已反馈，谢谢", handler: function() { var e = T.g(arguments[0][0]);
                e.innerHTML = "您已反馈，谢谢", e.style.top = "-5px", T.setStyle(e, "top", "-5px"), T.fx.moveBy(e, 0, -25), T.fx.fadeOut(e) } }, 2002: { errName: "INVALID_EID_ERR", errMsg: "无效经验", handler: function() { errorHandle(2002), setTimeout(function() { window.location = "http://jingyan.baidu.com" }, 1e3) } }, 2003: { errName: "NOT_LOGIN_ERR", errMsg: "用户未登录", handler: function() { ec.fire("login.check", {}) } }, 507: { errName: "NOT_UNAME_ERR", errMsg: "无uname用户", handler: function() { ec.fire("login.setUsername", {}) } }, 2004: { errName: "SUBMIT_FREQ_ERR", errMsg: "提交过于频繁，请稍后再进行提交", handler: null }, 2005: { errName: "TITLE_TOO_SHORT_ERR", errMsg: "标题过于简略，请具体描述经验将达到的目的", handler: function() { var e = T.g("ti-numError"),
                    r = T.g("ti-numRight");
                e.innerHTML = "标题过于简略，请具体描述经验将达到的目的", e.style.display = "inline-block", r.style.display = "none" } }, 2006: { errName: "TITLE_TOO_LONG_ERR", errMsg: "暂时无法进行操作，请稍后再尝试提交", handler: function() { var e = T.g("ti-numError"),
                    r = T.g("ti-numRight");
                e.innerHTML = "标题字数过长，请酌情删减", e.style.display = "inline-block", r.style.display = "none" } }, 2007: { errName: "CONTENT_EMPTY_ERR", errMsg: "空白经验无法发布", handler: null }, 2008: { errName: "CONTENT_TOO_SHORT_ERR", errMsg: "经验过短无法发布，请详细描述", handler: null }, 2009: { errName: "CONTENT_TOO_LONG_ERR", errMsg: "超过15000字的经验无法发布，请删改", handler: null }, 2010: { errName: "PIC_NUM_OVERFLOW_ERR", errMsg: "每篇经验最多上传20张图片，超过请删改", handler: null }, 2011: { errName: "REFERENCE_TOO_LONG_ERR", errMsg: "参考资料超过500字，请删改", handler: null }, 2012: { errName: "TITLE_EXIST_ERR", errMsg: "标题已存在", handler: function() { T.g("exist-prompt").innerHTML = "很抱歉，已经存在同名经验，建议您对现有标题进行修改或细化。", T.g("exist-prompt").style.display = "inline-block" } }, 2013: { errName: "HIT_REJECT_WORD_ERR", errMsg: "呃……你踩到用词雷区啦，赶紧排查一下！", handler: function() { var e = T.g("ti-numError"),
                    r = T.g("ti-numRight");
                e.innerHTML = "呃……你踩到用词雷区啦，赶紧排查一下！", e.style.display = "inline-block", r.style.display = "none" } }, 2014: { errName: "PIC_TOO_LARGE_ERR", errMsg: "对不起，图片尺寸过大", handler: null }, 2015: { errName: "INVALID_PIC_FORMAT_ERR", errMsg: "对不起，图片格式不正确", handler: null }, 2016: { errName: "DRAFT_BOX_FULL_ERR", errMsg: "草稿箱满", handler: null }, 2017: { errName: "INVALID_DID_ERR", errMsg: "该草稿已被提交后删除", handler: null }, 2018: { errName: "NOT_AUTHOR_ERR", errMsg: "非原作者操作", handler: null }, 2019: { errName: "VERSION_EXIST_ERR", errMsg: "之前您修改的版本还在提交过程中，请稍后编辑", handler: null }, 2020: { errName: "NO_POWER_ERR", errMsg: "您没有相应权限，请使用有权限的账号登录", handler: null }, 2021: { errName: "INVALID_CID_ERR", errMsg: "经验分类无效", handler: null }, 2022: { errName: "ILLEGAL_TITLE_ERR", errMsg: "标题不规范导致未通过", handler: null }, 2023: { errName: "ORIGIN_AUTHOR_TOO_LONG_ERR", errMsg: "原作者字数过多，请酌情删减", handler: null }, 2024: { errName: "INVALID_USERNAME", errMsg: "对不起，用户名不存在", handler: null }, 2025: { errName: "CONTENT_NO_CHANGE_ERR", errMsg: "您并未做任何改动，不需提交", handler: function() { var e = 300,
                    r = 80,
                    l = "提示",
                    n = "<p>您并未做任何改动，不需提交</p>";
                dialog.alert(l, { info: n, width: e, height: r }) } }, 2026: { errName: "INVALID_VIDEO_URL", errMsg: "视频url地址无效", handler: null }, 2027: { errName: "VIDEO_NUM_OVERFLOW_ERR", errMsg: "每篇经验最多使用5个视频，超过请删改", handler: null }, 2028: { errName: "COMMENT_NOT_EXIST", errMsg: "对不起，评论可能已被删除", handler: null }, 2029: { errName: "REPLY_NOT_EXIST", errMsg: "对不起，回复可能已被删除", handler: null }, 2030: { errName: "HIT_SENSITIVE_WORD", errMsg: "评论或回复命中敏感词", handler: null }, 2031: { errName: "COMMENT_TOO_SHORT_ERR", errMsg: "评论字数过少", handler: null }, 2032: { errName: "COMMENT_TOO_LONG_ERR", errMsg: "评论字数过多", handler: null }, 2033: { errName: "REPLY_TOO_SHORT_ERR", errMsg: "回复字数过少", handler: null }, 2034: { errName: "REPLY_TOO_LONG_ERR", errMsg: "回复字数过多", handler: null }, 2036: { errName: "ADMIN_REPEAT_OPERATION", errMsg: "该条记录不存在", handler: null }, 2037: { errName: "USER_BANNED", errMsg: "对不起，您的账号已被封禁", handler: null }, 2038: { errName: "USER_HAS_FOLLOWED", errMsg: "您已关注这位作者！", handler: function() { var e = F.context("followedNum"),
                    r = 360,
                    l = 175,
                    n = "提示",
                    a = ['<div class="followed-vote-pop"><p class="mark">您已关注这位作者！</p><p class="ml30">进入  <a href="', F.context("ucFollowing"), '" target="_blank">关注</a>  可以取消对此人的关注。</p></div>'].join("");
                e && (a = ['<div class="followed-vote-pop"><p class="mark">您已关注这位作者！</p><p class="ml30">进入  <a href="', F.context("ucFollowing"), '" target="_blank">关注</a>  可以取消对此人的关注。</p><p class="ml30">已有 <b class="gray">', e, "</b> 人关注这位作者</p></div>"].join("")), dialog.alert(n, { info: a, width: r, height: l, onconfirm: function() { F.context("isLogin") || window.location.reload(!0) } }) } }, 2039: { errName: "HAS_NO_FREE_VOTE", errMsg: "已达到免费投票次数", handler: function() { var width = 360,
                    height = 175,
                    title = "提示",
                    username = F.context("username"),
                    writerId = F.context("writerId"),
                    numTrue = F.context("votedNum"),
                    numTrueTotal = F.context("totalVotedNum"),
                    maxVote = F.context("maxFollowVote"),
                    info = ['<div class="followed-vote-pop">', '<p class="mark">今天您的免费投票额度已经用完。</p>', '<p class="ml30">当天内再次投票将花费您<span class="i-score f12">10</span>个财富值，确定投票给这位作者吗？</p>', "</div>"].join("");
                dialog.confirm(title, { info: info, width: width, height: height, onconfirm: function() { var url = F.context("submit_vote"),
                            params = "method=voteAuthor&isFreeVote=0&un=" + encodeURIComponent(writerId);
                        T.ajax.post(url, params, function(req, responseText) { var data = eval("(" + responseText + ")"),
                                width = 350,
                                height = 120,
                                title = "提示",
                                voteNum = numTrue + 1,
                                totalVoteNum = numTrueTotal + 1,
                                infoFix = "";
                            F.context({ votedNum: F.context("votedNum") + 1, totalVotedNum: F.context("totalVotedNum") + 1 }), data.hasFollowed || (infoFix = ['<p class="ml54">', '<input type="checkbox" id="follow-check-e" checked="checked" />', "同时关注这名经验作者</p>"].join("")); var info = ['<div class="followed-vote-pop">', '<p class="tick">投票成功！</p>', '<p class="mlt54">作者  <a href="/user/npublic?un=', writerId, '" target="_blank">', writerId, '</a>  本月获得 <b class="f-red">', voteNum, "</b> 票。</p></div>"].join("");
                            dialog.alert(title, { info: info, width: width, height: height, onconfirm: function() { T.g("follow-check-e") && T.g("follow-check-e").checked && ec.fire("follow-user-e", "click"), "" === username && window.location.reload(!0) } }), parseInt(T.g("vote-user-num-e").innerHTML, 10) >= maxVote ? (T.g("vote-user-num-e").innerHTML = maxVote, T.g("vote-user-e").title = "当月票数：" + maxVote + "\n历史票数：" + totalVoteNum) : (T.g("vote-user-num-e").innerHTML = parseInt(T.g("vote-user-num-e").innerHTML, 10) + 1, T.g("vote-user-e").title = "当月票数：" + voteNum + "\n历史票数：" + totalVoteNum), msg.get() }) } }) } }, 2040: { errName: "HAS_NO_MORE_WEALTH", errMsg: "对不起，您的财富值不足。", handler: function() { var e = 410,
                    r = 140,
                    l = "提示",
                    n = '<div class="followed-vote-pop"><p class="mark">对不起，您的财富值不足。</p><p class="ml30"><a href="http://jingyan.baidu.com/edit/content" target="_blank">分享经验</a>或<a href="http://hi.baidu.com/du%E5%B0%8F%E7%AD%96/blog/item/bc9d56ee4b8d48c1d539c9e7.html?timeStamp=1294201719611" target="_blank">发表评论</a>  可以帮助您获得财富值。</p></div>';
                dialog.alert(l, { info: n, width: e, height: r, onconfirm: function() { F.context("isLogin") || window.location.reload(!0) } }) } }, 2041: { errName: "CANNOT_FOLLOWED_SELF", errMsg: "请不要关注自己", handler: function() { var e = 300,
                    r = 80,
                    l = "提示",
                    n = (F.context("username"), '<div class="followed-vote-pop"><p class="mark">请不要关注自己</p></div>');
                dialog.alert(l, { info: n, width: e, height: r, onconfirm: function() { F.context("isLogin") || window.location.reload(!0) } }) } }, 2042: { errName: "POST_TOO_LONG_ERR", errMsg: "对不起，您提交的内容字数超限", handler: null }, 2043: { errName: "EMPTY_POST_ERR", errMsg: "提交的内容为空", handler: function(e) { var r = 300,
                    l = 80,
                    n = "提示",
                    a = "<p>对不起，您提交的内容为空</p>"; "setfavor" === e && (a = "<p>对不起，您提交的感兴趣的分类描述为空</p>"), dialog.alert(n, { info: a, width: r, height: l }) } }, 2044: { errName: "INVALID_LOCATION_ID", errMsg: "对不起，您选择的地区ID无效", handler: null }, 2045: { errName: "INVALID_SITE_URL", errMsg: "对不起，您填写的网址无效", handler: null }, 2046: { errName: "CID_WAS_REMOVED", errMsg: "对不起，这个分类已被删除", handler: null }, 2047: { errName: "USER_IN_BLACKLIST", errMsg: '对不起，您的账号因为违规操作而被封禁。<a href="http://hi.baidu.com/du%E5%B0%8F%E7%AD%96/blog/item/7e0d2335fab34db15fdf0e7e.html" target="_blank">查看详情</a>', handler: null }, 2051: { errName: "TASK_BEING", errMsg: "你已经领了一个任务还没写完呢！<br/>赶紧去完成拿悬赏吧！", handler: null }, 2052: { errName: "TASK_RECEIVED", errMsg: "任务已经被他人领取，无法继续领取！", handler: null }, 2053: { errName: "TASK_FINISHED", errMsg: "该任务已经结束，无法继续领取！", handler: null }, 2055: { errName: "AUTHOR_APPLY_REPEAT", errMsg: "您已经是经验的签约作者了，请不要重复申请", handler: function() { dialog.alert("错误信息", { info: '<p style="text-align:center;padding-top:30px;">您已经是经验的签约作者了，请不要重复申请</p>', width: 260, height: 160 }) } }, 2056: { errName: "AUTHOR_APPLY_ACTION", errMsg: "您的申请尚在受理中，请耐心等候", handler: function() { dialog.alert("错误信息", { info: '<p style="text-align:center;padding-top:30px;">您的申请尚在受理中，请耐心等候</p>', width: 260, height: 160 }) } }, 2058: { errName: "COMMENT_MAX_TIMES_PER_DAY", errMsg: "当天评论已到达最高次数<br/>用户每天可评论20次", handler: function() { dialog.alert("错误信息", { info: '<p style="text-align:center;padding-top:30px;">当天评论已到达最高次数<br/>用户每天可评论20次</p>', width: 260, height: 160 }) } }, 2060: { errName: "OVER_SERIES_NUM", errMsg: "系列经验超过上限(1-99)，无法添加", handler: null }, 2061: { errName: "SERIES_MAINTITLE_REPEAT", errMsg: "系列经验主标题重复", handler: null }, 2062: { errName: "SERIES_NUM_REPEAT", errMsg: "系列经验序号重复", handler: null }, 2100: { errName: "COMMENT_CONTENT_REPEAT", errMsg: "提交的评论存在相同内容，请修改后再尝试提交", handler: null }, 2101: { errName: "REPLY_CONTENT_REPEAT", errMsg: "提交的回复存在相同内容，请修改后再尝试提交", handler: null }, 2070: { errName: "MAGAZINE_TITLE_LENGTH_MIN", errMsg: "杂志标题过短", handler: null }, 2071: { errName: "MAGAZINE_TITLE_LENGTH_MAX", errMsg: "杂志标题过长", handler: null }, 2072: { errName: "MAGAZINE_ABSTRACT_LENGTH_MIN", errMsg: "杂志简介过短", handler: null }, 2073: { errName: "MAGAZINE_ABSTRACT_LENGTH_MAX", errMsg: "杂志简介过长", handler: null }, 2074: { errName: "MAGAZINE_MID_INVILID", errMsg: "mid无效", handler: null }, 2075: { errName: "MAGAZINE_ONLE_ADVANCEDEDITOR_EXP_ALLOWED", errMsg: "只有高级编辑器产生的经验可以加入杂志", handler: null }, 2076: { errName: "REPLY_CONTENT_REPEAT", errMsg: "该经验已被收录", handler: null }, 2077: { errName: "MAGAZINE_INCLUDE_MAX_EXP", errMsg: "杂志最多含有20篇经验", handler: null }, 2078: { errName: "MAGEZINE_RELEASE_MIN_EXP_COUNT", errMsg: "发布杂志最少需含有10篇经验", handler: null }, 2079: { errName: "MAGAZINE_ALREADY_RECOMMENDED", errMsg: "杂志已被自荐", handler: null }, 2080: { errName: "MAGAZINE_NOT_INCOMEUSER", errMsg: "非回享计划用户不能自荐", handler: null }, 2081: { errName: "MAGAZINE_ALREADY_RELEASE", errMsg: "杂志已被发布", handler: null }, 2082: { errName: "MAGAZINE_DELETE_ERROR", errMsg: "杂志删除错误", handler: null }, 2083: { errName: "MAGAZINE_DIFF_EXP_COUNT", errMsg: "杂志存储的经验数与提交的经验数不一致", handler: null }, 2084: { errName: "MAGAZINE_ALREADY_DELETE", errMsg: "杂志已被删除", handler: null }, 2085: { errName: "MAGAZINE_COVER_EMPTY_ERROR", errMsg: "发布的杂志封面不能为空", handler: null }, 2086: { errName: "MAGAZINE_PICTURE_EMPTY_ERROR", errMsg: "发布的杂志头图不能为空", handler: null }, 2087: { errName: "MAGAZINE_NOT_INCOMEUSER_CREATEMAG_ERROR", errMsg: "非回享计划用户不能创建杂志", handler: null }, 2088: { errName: "MAGAZINE_CREATEMAG_FREQUENCY", errMsg: "每天只能创建1篇杂志，<a target='_blank' href='/help?page=magazine-editor'>查看详情</a>", handler: null }, 2089: { errName: "MAGAZINE_CREATEMAGAZINE_USER_ERROR", errMsg: "只有回享用户才能创建杂志", handler: null }, 2090: { errName: "MAGAZINE_PREVIEW_STATUS_ERROR", errMsg: "只有未发布的杂志才能预览", handler: null }, 2091: { errName: "MAGAZINE_SEASON_RENEWAL_DAILY", errMsg: "同主题杂志每天只能续一期，<a target='_blank' href='/help?page=magazine-editor'>查看详情</a>", handler: null }, 2092: { errName: "MAGAZINE_SEASON_TITLE_NO_REPEAT", errMsg: "同用户主题不能重复", handler: null }, 2093: { errName: "MAGAZINE_MODIFY_ERROR", errMsg: "已发布的杂志不能编辑", handler: null }, 2094: { errName: "MAGAZINE_FIRST_CAN_BE_DELETE", errMsg: "只有最新一期杂志才能删除", handler: null }, 2095: { errName: "MAGAZINE_RELEASEED_BY_ORDER", errMsg: "杂志必须按期发布", handler: null }, 2096: { errName: "MAGAZINE_RECOMMEND_LEAST_VIEWNUM", errMsg: "杂志浏览量需超过<font color='red'>1000</font>次才可以自荐，自荐成功后会获得现金收益。去<a href=''>把杂志分享给朋友们</a>吧！", handler: function() { var e = 300,
                    r = 130,
                    l = "提示",
                    n = ["<p>杂志浏览量需超过", "<font color='#c00'>1000</font>", "次才可以自荐，自荐成功后会获得现金收益。去", "<a href='/magazine/'>把杂志分享给朋友们</a>吧！", "</p>"].join("");
                dialog.alert(l, { info: n, width: e, height: r }) } }, 702: { errName: "SUBMIT_EXP_VCODE_UNINPUT", errMsg: "请输入验证码", handler: null }, 4301040101: { errName: "SUBMIT_EXP_VCODE_UNCORRECT", errMsg: "您输入的验证码不正确", handler: null }, 4301040102: { errName: "SUBMIT_EXP_VCODE_EXPIRED", errMsg: "验证码已过期失效，请重新输入", handler: null }, 4301040103: { errName: "SUBMIT_EXP_VCODE_ISUSED", errMsg: "验证码已被使用，请重新输入", handler: null }, 8001: { errName: "VERIFY", errMsg: "实名验证", handler: function() {} } };
    module.exports.errorMap = errorMap, errorHandle = function(e) { var r = 300,
            l = 80,
            n = "提示",
            a = "<p>" + errorMap[e].errMsg + "</p>";
        dialog.alert(n, { info: a, width: r, height: l, onclose: function() { F.context("isLogin") || location.reload() } }) }, module.exports.feedbackError = function(e, r) { var l = T.g(e);
        l.innerHTML = r.html, l.style.top = r.top, l.style.left = r.left, T.fx.moveBy(l, 0, -25), T.fx.fadeOut(l, { duration: 1e3 }) }, module.exports.updateErrMsg = function(e, r) { for (var l in errorMap)
            if (errorMap[l].errName === e) { errorMap[l] = r; break } }, module.exports.directHandle = function(e, r) { if (null !== e && "" !== e) { var l = null; for (var n in errorMap)
                if (errorMap.hasOwnProperty(n) && (l = errorMap[n], l.errName === e)) break;
            null !== l && l.handler(r) } }, module.exports.handle = function(e, r, l) { var n = errorMap[e];
        r && r[n.errName] && (n.handler = r[n.errName]), r && r.FINAL_ERR_HANDLER && "function" == typeof r.FINAL_ERR_HANDLER && r.FINAL_ERR_HANDLER.call(this, arguments), n.handler ? n.handler(l && l[n.errName] ? l[n.errName] : n.errMsg) : errorHandle(e) } });;
define("common:widget/ui/note-tip/note-tip.js", function(e, a, t) { var i = e("common:widget/lib/tangram/base/base.js"),
        d = { getNoteTip: function(e) { if (e.target) { var a = e.conf.left || 0,
                        t = e.conf.right || 0,
                        d = e.conf.top || 0,
                        c = e.conf.type || "side",
                        n = e.conf.rc || !1,
                        r = e.info || "",
                        o = i.dom.create("div");
                    o.className = "ui-rc-block ui-note"; var s = e.conf.width || 200;
                    o.style.width = s + ("auto" === s || (s + "").indexOf("%") > -1 ? "" : "px"), o.style.height = "auto" === e.conf.height ? "auto" : e.conf.height + "px"; var p = null; switch (c) {
                        case "side":
                            p = i.dom.create("div"), p.className = "side", o.appendChild(p); break;
                        case "up":
                            p = i.dom.create("div"), p.className = "up", o.appendChild(p); break;
                        case "down":
                            p = i.dom.create("div"), p.className = "down", o.appendChild(p) } if (a && (p.style.left = a + "px"), t && (p.style.right = t + "px"), p.style.top = d + "px", n === !0) { var l = i.dom.create("b");
                        l.className = "tl"; var m = i.dom.create("b");
                        m.className = "tr", o.appendChild(l), o.appendChild(m) } var h = i.dom.create("div");
                    h.className = "ui-rc-outer"; var f = i.dom.create("div"); if (f.className = "ui-rc-inner", f.innerHTML = r, h.appendChild(f), o.appendChild(h), n === !0) { var v = i.dom.create("b");
                        v.className = "bl"; var u = i.dom.create("b");
                        u.className = "br", o.appendChild(v), o.appendChild(u) } return i.g(e.target).appendChild(o), { inner: f } } } };
    t.exports = d });;
define("common:widget/lib/tangram/flash/_Base/_Base.js", function(n, e, a) { var t = n("common:widget/lib/tangram/base/base.js");
    n("common:widget/lib/tangram/flash/flash.js"), t.flash._Base = function() {
        function n() { return o + Math.floor(2147483648 * Math.random()).toString(36) }

        function e(n) { return "undefined" != typeof n && "undefined" != typeof n.flashInit && n.flashInit() ? !0 : !1 }

        function a(n, e) { var a = null;
            n = n.reverse(), t.each(n, function(n) { a = e.call(n.fnName, n.params), n.callBack(a) }) }

        function i(e) { var a = ""; return t.lang.isFunction(e) ? (a = n(), window[a] = function() { e.apply(window, arguments) }, a) : t.lang.isString ? e : void 0 }

        function r(e) { e.id || (e.id = n()); var a = e.container || ""; return delete e.container, t.swf.create(e, a), t.swf.getMovie(e.id) } var o = "bd__flash__"; return function(n, o) {
            function l() { e(d) && (clearInterval(g), g = null, u(), m = !0) }

            function u() { a(h, d), h = [] } var c = this,
                f = "undefined" != typeof n.autoRender ? n.autoRender : !0,
                s = n.createOptions || {},
                d = null,
                m = !1,
                h = [],
                g = null,
                o = o || [];
            c.render = function() { d = r(s), o.length > 0 && t.each(o, function(e, a) { o[a] = i(n[e] || new Function) }), c.call("setJSFuncName", [o]) }, c.isReady = function() { return m }, c.call = function(n, e, a) { if (n) { a = a || new Function; var t = null;
                    m ? (t = d.call(n, e), a(t)) : (h.push({ fnName: n, params: e, callBack: a }), !g && (g = setInterval(l, 200))) } }, c.createFunName = function(n) { return i(n) }, f && c.render() } }(), a.exports = t.flash._Base });;
define("common:widget/lib/tangram/flash/fileUploader/fileUploader.js", function(e, l, a) { var t = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/flash/flash.js"), e("common:widget/lib/tangram/flash/_Base/_Base.js"), t.flash.fileUploader = t.flash.fileUploader || function(e) { var l = this,
            e = e || {};
        e.createOptions = t.extend({ wmod: "transparent" }, e.createOptions || {}); var a = new t.flash._Base(e, ["selectFile", "exceedMaxSize", "deleteFile", "uploadStart", "uploadComplete", "uploadError", "uploadProgress"]);
        a.call("setMaxNum", e.maxNum ? [e.maxNum] : [1]), l.setHandCursor = function(e) { a.call("setHandCursor", [e || !1]) }, l.setMSFunName = function(e) { a.call("setMSFunName", [a.createFunName(e)]) }, l.upload = function(e, l, t, n) { "string" == typeof e && "string" == typeof l && ("undefined" == typeof n && (n = -1), a.call("upload", [e, l, t, n])) }, l.cancel = function(e) { "undefined" == typeof e && (e = -1), a.call("cancel", [e]) }, l.deleteFile = function(e, l) { var n = function(e) { l && l(e) }; return "undefined" == typeof e ? void a.call("deleteFilesAll", [], n) : ("Number" == typeof e && (e = [e]), e.sort(function(e, l) { return l - e }), void t.each(e, function(e) { a.call("deleteFileBy", e, n) })) }, l.addFileType = function(e) { var e = e || [
                []
            ];
            e = e instanceof Array ? [e] : [
                [e]
            ], a.call("addFileTypes", e) }, l.setFileType = function(e) { var e = e || [
                []
            ];
            e = e instanceof Array ? [e] : [
                [e]
            ], a.call("setFileTypes", e) }, l.setMaxNum = function(e) { a.call("setMaxNum", [e]) }, l.setMaxSize = function(e) { a.call("setMaxSize", [e]) }, l.getFileAll = function(e) { a.call("getFilesAll", [], e) }, l.getFileByIndex = function(e, l) { a.call("getFileByIndex", [], l) }, l.getStatusByIndex = function(e, l) { a.call("getStatusByIndex", [], l) } }, a.exports = t.flash.fileUploader });;
define("common:widget/lib/tangram/ui/ScrollBar/ScrollBar.js", function(e, t, i) { var n = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/Button/capture/capture.js"), e("common:widget/lib/tangram/ui/Button/poll/poll.js"), e("common:widget/lib/tangram/ui/Slider/Slider.js"), n.ui.ScrollBar = n.ui.createUI(function() { var e = this;
        e._scrollBarSize = { width: 0, height: 0 } }).extend({ uiType: "scrollbar", tplDOM: '<div id="#{id}" class="#{class}"></div>', tplThumb: '<div class="#{prev}"></div><div class="#{track}"></div><div class="#{next}"></div>', value: 0, dimension: 10, orientation: "vertical", step: 5, _axis: { horizontal: { size: "width", unSize: "height", offsetSize: "offsetWidth", unOffsetSize: "offsetHeight", clientSize: "clientWidth", scrollPos: "scrollLeft", scrollSize: "scrollWidth" }, vertical: { size: "height", unSize: "width", offsetSize: "offsetHeight", unOffsetSize: "offsetWidth", clientSize: "clientHeight", scrollPos: "scrollTop", scrollSize: "scrollHeight" } }, getThumbString: function() { var e = this; return n.string.format(e.tplThumb, { prev: e.getClass("thumb-prev"), track: e.getClass("thumb-track"), next: e.getClass("thumb-next") }) }, render: function(e) { var t = this;
            e && !t.getMain() && (n.dom.insertHTML(t.renderMain(e), "beforeEnd", n.string.format(t.tplDOM, { id: t.getId(), "class": t.getClass() })), t._renderUI(), t.dispatchEvent("load")) }, _renderUI: function() {
            function e(e) { return { classPrefix: o.classPrefix + "-" + e, skin: o.skin ? o.skin + "-" + e : "", poll: { time: 4 }, onmousedown: function() { o._basicScroll(e) }, element: a, autoRender: !0 } }

            function t(e) { o.dispatchEvent("scroll", { value: Math.round(e.target.getValue()) }) } var i, s, l, o = this,
                r = o._axis[o.orientation],
                a = o.getBody();
            i = o._prev = new n.ui.Button(e("prev")), n.dom.insertHTML(a, "beforeEnd", n.string.format(o.tplDOM, { id: o.getId("track"), "class": o.getClass("track") })), l = o._next = new n.ui.Button(e("next")), s = o._slider = new n.ui.Slider({ classPrefix: o.classPrefix + "-slider", skin: o.skin ? o.skin + "-slider" : "", layout: o.orientation, onslide: t, onslideclick: t, element: n.dom.g(o.getId("track")), autoRender: !0 }), o._scrollBarSize[r.unSize] = l.getBody()[r.unOffsetSize], o._thumbButton = new n.ui.Button({ classPrefix: o.classPrefix + "-thumb-btn", skin: o.skin ? o.skin + "-thumb-btn" : "", content: o.getThumbString(), capture: !0, element: s.getThumb(), autoRender: !0 }), o.flushUI(o.value, o.dimension), o._registMouseWheelEvt(o.getMain()) }, flushUI: function(e, t) { var i, s = this,
                l = s._axis[s.orientation],
                o = s._prev.getBody()[l.offsetSize] + s._next.getBody()[l.offsetSize],
                r = s.getBody(),
                a = s._slider,
                c = a.getThumb();
            n.dom.hide(r), i = s.getMain()[l.clientSize], s._scrollBarSize[l.size] = 0 >= i ? o : i, a.getMain().style[l.size] = (0 >= i ? 0 : i - o) + "px", c.style[l.size] = Math.max(Math.min(t, 100), 0) + "%", n.dom.show(r), s._scrollTo(e) }, _scrollTo: function(e) { this._slider.update({ value: e }) }, scrollTo: function(e) { var t = this;
            t._scrollTo(e), t.dispatchEvent("scroll", { value: e }) }, _basicScroll: function(e) { var t = this;
            t.scrollTo(Math.round(t._slider.getValue()) + ("prev" == e ? -t.step : t.step)) }, _onMouseWheelHandler: function(e) { var t = this,
                e = (t.target, e || window.event),
                i = e.detail || -e.wheelDelta;
            n.event.preventDefault(e), t._basicScroll(i > 0 ? "next" : "prev") }, _registMouseWheelEvt: function(e) { var t = this,
                i = function() { var e = navigator.userAgent.toLowerCase(),
                        t = /(webkit)/.exec(e) || /(opera)/.exec(e) || /(msie)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)/.exec(e) || []; return "mozilla" == t[1] ? "DOMMouseScroll" : "mousewheel" },
                s = t._mouseWheelEvent = { target: e, evtName: i(), handler: n.fn.bind("_onMouseWheelHandler", t) };
            n.event.on(s.target, s.evtName, s.handler) }, _cancelMouseWheelEvt: function() { var e = this._mouseWheelEvent;
            e && (n.event.un(e.target, e.evtName, e.handler), this._mouseWheelEvent = null) }, setVisible: function(e) { this.getMain().style.display = e ? "" : "none" }, isVisible: function() { return "none" != this.getMain().style.display }, getSize: function() { return this._scrollBarSize }, update: function(e) { var t = this;
            t.dispatchEvent("beforeupdate"), n.object.extend(t, e), t.flushUI(t.value, t.dimension), t.dispatchEvent("update") }, dispose: function() { var e = this;
            e.dispatchEvent("dispose"), e._cancelMouseWheelEvt(), e._prev.dispose(), e._thumbButton.dispose(), e._slider.dispose(), e._next.dispose(), n.dom.remove(e.getMain()), n.lang.Class.prototype.dispose.call(e) } }), i.exports = n.ui.ScrollBar });;
define("common:widget/lib/tangram/ui/ScrollBar/container/container.js", function(e, i, n) { var o = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/ScrollBar/ScrollBar.js"), o.ui.ScrollBar.register(function(e) { e.container && e.addEventListeners({ load: function() { e.update(), "vertical" == e.orientation && e._registMouseWheelEvt(e.getContainer()) }, beforeupdate: function() { var e = this,
                    i = e._axis[e.orientation],
                    n = e.getContainer();
                n && (e.dimension = Math.round(n[i.clientSize] / n[i.scrollSize] * 100), e.value = n[i.scrollSize] - n[i.clientSize], e.value > 0 && (e.value = Math.round(n[i.scrollPos] / (n[i.scrollSize] - n[i.clientSize]) * 100))) }, scroll: function(i) { var n = e.getContainer(),
                    o = e._axis[e.orientation];
                n[o.scrollPos] = i.value / 100 * (n[o.scrollSize] - n[o.clientSize]) } }) }), o.object.extend(o.ui.ScrollBar.prototype, { getContainer: function() { return o.dom.g(this.container) } }), n.exports = o.ui.ScrollBar.container });;
define("common:widget/lib/tangram/ui/ScrollPanel/ScrollPanel.js", function(e, i, t) { var l = e("common:widget/lib/tangram/base/base.js");
    e("common:widget/lib/tangram/uiBase/uiBase.js"), e("common:widget/lib/tangram/ui/ScrollBar/ScrollBar.js"), e("common:widget/lib/tangram/ui/ScrollBar/container/container.js"), l.ui.ScrollPanel = l.ui.createUI(function() {}).extend({ uiType: "scrollpanel", tplDOM: '<div id="#{id}" class="#{class}">#{body}</div>', overflow: "auto", _scrollBarSize: 0, _yVisible: !1, _xVisible: !1, _axis: { y: { size: "height", unSize: "width", unScrollSize: "scrollWidth", unClientSize: "clientWidth", offsetSize: "offsetHeight", unOffsetSize: "offsetWidth" }, x: { size: "width", unSize: "height", unScrollSize: "scrollHeight", unClientSize: "clientHeight", offsetSize: "offsetWidth", unOffsetSize: "offsetHeight" } }, getString: function() { var e = this,
                i = l.string.format(e.tplDOM, { id: e.getId("panel"), "class": e.getClass("panel") }); return i = l.string.format(e.tplDOM, { id: e.getId(), "class": e.getClass(), body: i }), l.string.format(e.tplDOM, { id: e.getId("main"), "class": e.getClass("main"), body: i }) }, render: function(e) { var i = this;
            i.target = e, e && !i.getMain() && (l.dom.insertHTML(i.getTarget(), "afterEnd", i.getString()), i.renderMain(i.getId("main")), i._renderUI(), i.dispatchEvent("onload")) }, _renderUI: function() {
            function e(e) { var t, r = i.getId("overflow-" + e),
                    o = i._axis[e],
                    s = i.getPanel();
                l.dom.insertHTML(s, "y" == e ? "afterEnd" : "beforeEnd", l.string.format(i.tplDOM, { id: r, "class": i.getClass("overflow-" + e) })), r = l.dom.g(r), "y" == e && (l.dom.setStyle(s, "float", "left"), l.dom.setStyle(r, "float", "left")), i["_" + e + "Visible"] = !0, t = i["_" + e + "Scrollbar"] = new l.ui.ScrollBar({ skin: n + "scrollbar-" + e, orientation: "y" == e ? "vertical" : "horizontal", container: i.container, element: r, autoRender: !0 }), r.style[o.unSize] = t.getSize()[o.unSize] + "px", i._scrollBarSize = t.getSize()[o.unSize], t.setVisible(!1) } var i = this,
                t = i.getMain(),
                r = i.getPanel(),
                o = i.getTarget(),
                n = i.skin || "";
            t.style.width = o.offsetWidth + "px", t.style.height = o.offsetHeight + "px", r.appendChild(o), ("overflow-y" == i.overflow || "auto" == i.overflow) && e("y"), ("overflow-x" == i.overflow || "auto" == i.overflow) && e("x"), i._smartVisible() }, _smartVisible: function() {
            function e(e) { var i = r._axis[e],
                    t = r["_" + e + "Scrollbar"],
                    l = r.getContainer(),
                    o = {}; return t && t.isVisible() || (l.style[i.unSize] = l[i.unClientSize] - r._scrollBarSize + "px"), o[i.unSize] = l[i.unClientSize], o["scroll" + i.unSize] = l[i.unScrollSize], o }

            function i(e, i) { var t = r._axis[e],
                    l = r.getContainer();
                r["_" + e + "Visible"] && i[e + "show"] && r["_" + e + "Scrollbar"] || (l.style[t.unSize] = l[t.unClientSize] + r._scrollBarSize + "px") }

            function t(e, i) { var t = r._axis[e],
                    l = r.getContainer(),
                    o = r["_" + e + "Scrollbar"],
                    n = i[e + "show"];
                o && (o.getMain().style[t.size] = l[t.offsetSize] + "px", o.setVisible(r["_" + e + "Visible"] ? n : !1), o.update()) } var r = this,
                o = { yshow: !1, xshow: !1 };
            r.getContainer() && (l.object.extend(o, e("y")), l.object.extend(o, e("x")), o.scrollwidth <= o.width + r._scrollBarSize && o.scrollheight <= o.height + r._scrollBarSize ? o.yshow = o.xshow = !1 : o.scrollwidth <= o.width && o.scrollheight > o.height + r._scrollBarSize ? (o.yshow = !0, o.xshow = !1) : o.scrollwidth > o.width + r._scrollBarSize && o.scrollheight <= o.height ? (o.yshow = !1, o.xshow = !0) : o.yshow = o.xshow = !0, i("y", o), i("x", o), t("y", o), t("x", o)) }, setVisible: function(e, i) { var t = this;
            i ? t["_" + i + "Visible"] = e : t._yVisible = t._xVisible = e, t._smartVisible() }, isVisible: function(e) { var i = this; return i["_" + e + "Visible"] }, getScrollBar: function(e) { var i = this,
                t = e ? i["_" + e + "Scrollbar"] : null; return t || (t = i._yScrollbar && i._xScrollbar ? [i._yScrollbar, i._xScrollbar] : i._yScrollbar || i._xScrollbar), t }, update: function(e) { var i = this;
            l.object.extend(i, e), i._smartVisible() }, getPanel: function() { return l.dom.g(this.getId("panel")) }, getTarget: function() { return l.dom.g(this.target) }, getContainer: function() { return l.dom.g(this.container) }, dispose: function() { var e = this,
                i = e._yScrollbar,
                t = e._xScrollbar;
            e.dispatchEvent("dispose"), e.setVisible(!1), e.getMain().parentNode.insertBefore(e.getTarget(), e.getMain()), i && i.dispose(), t && t.dispose(), l.dom.remove(e.getMain()), l.lang.Class.prototype.dispose.call(e) } }), t.exports = l.ui.ScrollPanel });;
define("common:widget/ui/ajax/ajax.js", function(require, exports, module) { var T = require("common:widget/lib/tangram/base/base.js"),
        error = require("common:widget/ui/error/error.js"),
        paramsHandler = function(r) { if (!r) return ""; if ("string" == typeof r) return r; var e = []; return T.object.each(r, function(r, o) { e.push(o + "=" + encodeURIComponent(r)) }), e.join("&") },
        defaultSuccessHandler = function() { setTimeout(function() { window.location.reload(!0) }, 500) },
        shimingAct = require("common-jquery:widget/js/logic/shimingzhi/shimingzhi.js").shimingAct;
    module.exports.post = function(url, params, onSuccess, onFailure, options) { T.ajax.post(url, paramsHandler(params), function(xhr, responseText) { var result = eval("(" + responseText + ")"),
                errno = result.errno;
            0 == errno || 2035 == errno ? onSuccess ? onSuccess(result) : defaultSuccessHandler() : (error.handle(errno, onFailure, options), options && options.onErrorFunc && options.onErrorFunc()) }) } });;
define("common:widget/ui/favor/favor.js", function(e, o, t) { var n = e("common:widget/lib/tangram/base/base.js");
    n = n.object.extend(n, window.baidu), window.baidu = n; var a = e("common:widget/ui/dialog/dialog.js"),
        i = e("common:widget/ui/log/log.js"),
        s = (e("common:widget/ui/login/login.js"), e("common:widget/lib/fis/event/event.js").eventCenter),
        r = e("common:widget/ui/ajax/ajax.js");
    a = window.parent.__dialog || a; var c = { init: function() {}, favor: function(e, o, t) { var n = this;
            s.fire("login.check", { isLogin: function() { r.post(F.context("submit_favor"), { method: "addFavorExp", eidEnc: e }, function(e) { n.hasFavored(e, t), o && o(e) }) } }) }, hasFavored: function(e, o) { var t = F.context("expFavorNum") + 1;
            o && void 0 !== o.favorNum && (t = o.favorNum + 1); var s = parseInt(e.myFavorNum),
                r = s ? s + 1 : 1,
                c = '<div class="fav-exp-pop"><h3>收藏成功！</h3><p>已有<span class="red">' + t + '</span>人收藏此篇经验</p><p>您已收藏<span class="black">' + r + '</span>篇经验，请到 <a class="my-exp" href="/user/nuc/content?tab=favor" title="我的收藏" target="blank">我的收藏</a> 中查看</p><div id="pop-share"><span>可能对你的好友也有用？马上分享到</span><br/><a title="人人网" class="to-renren to-renren-e" href="#" target="_blank"></a><a title="新浪微博" class="to-sina to-sina-e" href="#" target="_blank"></a><a title="腾讯微博" class="to-tencent to-tencent-e" href="#" target="_blank"></a><a title="搜狐微博" class="to-sohu to-sohu-e" href="#" target="_blank"></a><a title="网易微博" class="to-163 to-163-e" href="#" target="_blank"></a></div></div>';
            a.expConfirm({ type: "success", info: c, onclose: function() { F.context("isLogin") || window.location.reload(!0) } }), baidu.on("pop-share", "click", function(e) { var o = baidu.event.getTarget(e); if (baidu.dom.hasClass(o, "to-renren-e")) { var t = "http://share.renren.com/share/buttonshare.do?link=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent("我发现有一篇经验很有用：" + F.context("title") + "(分享自@百度经验)");
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "renren" }) } else if (baidu.dom.hasClass(o, "to-qqzone-e")) { var t = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(location.href);
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "qqzone" }) } else if (baidu.dom.hasClass(o, "to-kaixin-e")) { var t = "http://www.kaixin001.com/repaste/share.php?rtitle=" + encodeURIComponent("我发现有一篇经验很有用") + "&rurl=" + encodeURIComponent(location.href) + "&rcontent=" + F.context("title") + "(分享自@百度经验)";
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "kaixin" }) } else if (baidu.dom.hasClass(o, "to-sina-e")) { var a = "1214333208",
                        s = "utf8",
                        r = F.context("logo"),
                        c = n.dom.g("exp-detail"); if (c) { var l = c.getElementsByTagName("img")[0];
                        null != l && (r = l.src) } var t = "http://v.t.sina.com.cn/share/share.php?appkey=" + a + "&url=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent("我发现有一篇经验很有用： " + F.context("title")) + "&content=" + encodeURIComponent(s) + "&source=BAIDUJINGYAN&sourceUrl=" + encodeURIComponent("http://jingyan.baidu.com") + "&pic=" + encodeURIComponent(r) + "&ralateUid=1827614017";
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "sina" }) } else if (baidu.dom.hasClass(o, "to-tencent-e")) { var r = F.context("logo"),
                        c = n.dom.g("exp-detail"); if (c) { var l = c.getElementsByTagName("img")[0];
                        null != l && (r = l.src) } var t = "http://v.t.qq.com/share/share.php?url=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent("我发现有一篇经验很有用： " + F.context("title") + "(分享自@百度经验)") + "&site=" + encodeURIComponent("http://jingyan.baidu.com/") + "&pic=" + encodeURIComponent(r);
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "tencent" }) } else if (baidu.dom.hasClass(o, "to-sohu-e")) { var s = "utf8",
                        r = F.context("logo"),
                        t = "http://t.sohu.com/third/post.jsp?url=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent("我发现有一篇经验很有用： " + F.context("title") + "(分享自@百度经验)") + "&content=" + encodeURIComponent(s) + "&pic=" + encodeURIComponent(r);
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "sohu" }) } else if (baidu.dom.hasClass(o, "to-163-e")) { var t = "http://t.163.com/article/user/checkLogin.do?source=" + encodeURIComponent("网易微博") + "&info=" + encodeURIComponent("我发现有一篇经验很有用： " + F.context("title") + "(分享自@百度经验) " + location.href);
                    o.href = t, i.send(location.href, 1e3, { pos: "share", shareto: "163" }) } }) }, unfavor: function(e) { s.fire("login.check", { isLogin: function() { a.confirm("取消收藏", { info: "<p class='cancel-fav'>您确定取消收藏这篇经验吗？</p>", width: 300, height: 150, onconfirm: function() { r.post(F.context("submit_favor"), { method: "cancelFavorExp", eidEnc: e }, function() { setTimeout(function() { window.location.reload(!0) }, 500) }) } }) } }) } };
    t.exports = c });;
define("common:widget/ui/follow/follow.js", function(o, e, n) { { var t = o("common:widget/lib/tangram/base/base.js"),
            l = o("common:widget/ui/ajax/ajax.js"),
            i = o("common:widget/ui/dialog/dialog.js"),
            c = (o("common:widget/ui/util/tool/tool.js"), o("common:widget/ui/login/login.js"), o("common:widget/lib/fis/event/event.js").eventCenter);
        o("common:widget/ui/error/error.js") } i = window.parent.__dialog || i; var d = { init: function(o) { null != o && null != o.followId && null != o.uname && t.event.on(o.followId, "click", function() { n.exports.follow(o) }) }, follow: function(o) { t.dom.g(o.followId) && "true" == t.dom.getAttr(o.followId, "isFollowed") || c.fire("login.check", { isLogin: function() { l.post(F.context("submit_follow"), { method: "addFollow", un: o.uname, BdStoken: o.BdStoken || "", bdstt: o.bdstt || "" }, function(e) { var n = "";!e.hasVoted && o.vote && (n = '<p class="ml54"><input type="checkbox" id="vote-check-e" checked="checked" />同时投票给这名经验作者</p>'); var l = ['<div class="followed-vote-pop"><p class="tick">关注成功！</p>', n, "</div>"].join("");
                        i.expConfirm({ type: "success", info: l, onconfirm: function() { t.dom.g("vote-check-e") && t.dom.g("vote-check-e").checked && o.vote.vote(o), F.context("isLogin") || window.location.reload(!0), t.q("btnTitle", o.followId).length > 0 && (t.q("btnTitle", o.followId)[0].innerHTML = "已关注") } }), t.dom.setAttr(o.followId, "isFollowed", "true"), o.followCallback && o.followCallback(o.followId) }, null, { USER_HAS_FOLLOWED: [F.context("username"), F.context("followedNum")] }, { CANNOT_FOLLOWED_SELF: [F.context("username")] }) } }) }, unfollow: function(o) { i.confirm("提示", { info: "确定取消对该作者的关注？", width: 350, height: 80, onconfirm: function() { c.fire("login.check", { isLogin: function() { l.post(F.context("submit_follow"), { method: "cancelFollow", un: o.uname }, function() { var o = '<div class="followed-vote-pop"><p class="tick">取消关注成功！</p></div>';
                                i.alert("提示", { info: o, width: 350, height: 80, onconfirm: function() { setTimeout(function() { window.location.reload(!0) }, 500) } }) }) } }) } }) } };
    n.exports = d });;
define("common:widget/ui/scrollbar/scrollbar.js", function(l, o, r) { var n = l("common:widget/lib/tangram/ui/ScrollPanel/ScrollPanel.js");
    r.exports = n });;
define("common:widget/ui/album/album.js", function(e, t, o) { var i = e("common:widget/lib/tangram/base/base.js"),
        a = e("common:widget/ui/log/log.js"),
        l = e("common:widget/ui/scrollbar/scrollbar.js");
    o.exports = function() { var e, t, o, r, s, n, d = 0,
            m = 0,
            c = 0,
            u = 5,
            g = -1,
            b = 0,
            h = [],
            p = [],
            v = {},
            f = function(a) { a = i.extend({ isManual: F.context("isManual"), hasDownUrl: F.context("hasDownUrl"), nextSeries: F.context("nextSeries") }, a), e = a.isManual, t = a.hasDownUrl, o = F.context("downUrl"), r = a.nextSeries, n = e ? 40 : 66, isIE6 = i.browser.ie && i.browser.ie < 7, x(), S() },
            w = function() { if (i.array.each(p[d], function(e, t) { i.dom.getAttr(e, "src");
                        i.on(e, "click", function() { "current" != i.getAttr(e, "class") && y(t) }) }), i.event.on("left-area" + d, "click", function(e) { i.event.stopPropagation(e), m > 0 ? (v["album-left-click"] = 1, y(m - 1)) : i.g("first-last-tip" + d) || (i.dom.insertHTML("album-box" + d, "afterBegin", '<div id="first-last-tip' + d + '" class="first-last-tip first-tip"></div>'), i.dom.setStyles("first-last-tip" + d, { top: (i.page.getViewHeight() - n) / 2 - 25, left: i.page.getViewWidth() / 2 - 90 })) }), i.event.on("right-area" + d, "click", function(e) { i.event.stopPropagation(e), c - 1 > m ? (v["album-right-click"] = 1, y(m + 1)) : i.g("first-last-tip" + d) || (r ? i.dom.insertHTML("album-box" + d, "afterBegin", '<div id="first-last-tip' + d + '" class="first-last-tip next-series">该系列经验的 <a href="/article/' + r + '.html">下一篇</a></div>') : i.dom.insertHTML("album-box" + d, "afterBegin", '<div id="first-last-tip' + d + '" class="first-last-tip last-tip"></div>'), i.dom.setStyles("first-last-tip" + d, { top: (i.page.getViewHeight() - n) / 2 - 25, left: i.page.getViewWidth() / 2 - 90 })) }), i.on(document, "keydown", function(e) { i.event.stopPropagation(e), 27 === e.keyCode && C(d) }), i.on(i.q("close-btn", "album-box" + d)[0], "click", function() { C(d) }), i.on(window, "resize", S), e) { for (var t = i.q("manual-download")[0], o = i.q("manual-zoom-lager")[0], a = i.q("manual-zoom-smaller")[0], l = [t, o, a], s = 0; s < l.length; s++) l[s] && i.on(l[s], "mouseover", function() { i.dom.addClass(this, "bg-hover") }), l[s] && i.on(l[s], "mouseout", function() { i.dom.removeClass(this, "bg-hover") });
                    i.event.on(a, "click", function() { A() }), i.event.on(o, "click", function() { k() }), i.event.on("m-pager", "mouseover", function() { i.dom.addClass(this, "border-hover") }), i.event.on("m-pager", "mouseout", function() { i.dom.removeClass(this, "border-hover") }), i.event.on("m-pager", "click", function() { i.dom.setStyle(this, "border", "1px solid #e1e1e1") }), i.event.on("m-pager", "blur", function() { i.dom.setStyle(this, "border", "") }), i.event.on("m-pager", "keydown", function(e) { if (i.event.stopPropagation(e), 13 === e.keyCode) { var t = parseInt(i.g("m-pager").value); if (1 > t || t > c || isNaN(t)) return void alert("请输入合法页码");
                            y(t - 1) } }), i.event.on(document, "keydown", function(e) { i.event.stopPropagation(e), 37 === e.keyCode && i.event.fire("left-area" + d, "click"), 39 === e.keyCode && i.event.fire("right-area" + d, "click") }) } },
            y = function(t) { m = t; var o = i.g("currentAlbumImg" + d),
                    l = new Image,
                    r = p[d][t];
                l.onload = function() { i.dom.hasAttr(r, "loaded") || (i.dom.setAttr(r, "_width", parseInt(l.width)), i.dom.setAttr(r, "_height", parseInt(l.height)), i.dom.setAttr(r, "loaded", 1)), o.src = l.src, l.onload = null, l = null, e && isIE6 || I() }, l.src = r.src; var s = i.dom.query("#album-box-bottom" + d + " .current");
                s.length && i.dom.removeClass(s[0], "current"), i.dom.addClass(r, "current"), i.g("first-last-tip" + d) && i.dom.remove("first-last-tip" + d), v.page_request = 1, location.pathname.indexOf("album") > -1 && (v.page_from_step = 1), a.send(location.href, 1110, v), v = {}; var n = Math.floor(m / u) + 1; if (g !== n) { g = n; for (var b = 0; c > b; b++) i.hide(p[d][b]); var h = (g - 1) * u,
                        f = Math.min(h + u, c); for (b = h; f > b; b++) i.show(p[d][b]) } e && (i.g("m-pager").value = m + 1) },
            x = function() { var a = '<div id="album-box-layer' + d + '" class="album-box-layer" hasShown="shown"></div>',
                    l = [],
                    r = 385;
                5 > c && (r = 77 * c); for (var s = 0; c > s; s++) l.push('<img src="' + h[s].src + '" />'); if (e) { if (t) var n = '<a class="manual-download" href="' + o + '" target="_blank">下载</a>';
                    else var n = "";
                    a += '<div id="album-box' + d + '" class="album-box"><a class="close-btn" title="关闭相册"></a><div id="album-box-content' + d + '" class="album-box-content"><div class="img-wrap"><div id="img-scroll' + d + '"><img id="currentAlbumImg' + d + '" src="' + h[m].src + '" /></div></div></div><div id="left-area' + d + '" class="left-area"></div><div id="right-area' + d + '" class="right-area"></div><div id="album-box-bottom' + d + '" class="album-box-bottom manual-box"><div class="album-playlist-container" id="album-playlist-container' + d + '" style="width:' + r + 'px;display:none;"><div class="album-playlist">' + l.join("") + '</div></div><div class="manual-box-wrap clearfix">' + n + '<div class="manual-zoom"><b class="manual-zoom-lager"></b><b class="manual-zoom-smaller"></b></div><div class="manual-pager"><div class="m-p-inner"><span><input id="m-pager" value="' + m + '1"></span><span class="m-p-i">/</span>' + c + "</div></div></div></div></div>" } else a += '<div id="album-box' + d + '" class="album-box"><a class="close-btn" title="关闭相册"></a><div id="album-box-content' + d + '" class="album-box-content"><img id="currentAlbumImg' + d + '" src="' + h[m].src + '" /></div><div id="left-area' + d + '" class="left-area"></div><div id="right-area' + d + '" class="right-area"></div><div id="album-box-bottom' + d + '" class="album-box-bottom"><div class="album-playlist-container" id="album-playlist-container' + d + '" style="width:' + r + 'px"><div class="album-playlist">' + l.join("") + "</div></div></div></div>";
                i.dom.insertHTML(i.dom.query("body")[0], "beforeEnd", a), p[d] = i.dom.query("#album-box-bottom" + d + " img") },
            S = function() { var t = i.page.getViewHeight(),
                    o = i.page.getScrollTop(),
                    a = t - n; if (i.browser.ie && 6 == i.browser.ie && (i.dom.setStyle("album-box-layer" + d, "height", t), i.dom.setStyles("album-box" + d, { height: t, background: "#333" })), i.dom.setStyles(document.body.parentNode, { overflow: "hidden" }), i.dom.setStyles("album-box" + d, { top: o }), I(), e) { var l = parseInt(i.dom.getStyle("currentAlbumImg" + d, "width")),
                        r = 890 > l ? l : 890,
                        s = i.page.getViewWidth();
                    i.dom.setStyles("left-area" + d, { width: (s - r) / 2 + "px", height: a }), i.dom.setStyles("right-area" + d, { width: (s - r) / 2 + "px", height: a }), i.dom.setStyles("album-box-content" + d, { height: a }) } else i.dom.setStyles("left-area" + d, { width: "50%", height: a }), i.dom.setStyles("right-area" + d, { width: "50%", height: a }) },
            I = function() { var t = p[d]; if (i.dom.hasAttr(t[m], "loaded")) { s && (s.dispose(), s = null); var o = i.page.getViewHeight() - n,
                        a = i.g("currentAlbumImg" + d);
                    currentImgWrap = i.q("img-wrap", "album-box-content" + d)[0]; var r = i.dom.getAttr(t[m], "_height"),
                        c = i.dom.getAttr(t[m], "_width"),
                        u = (o - r) / 2; if (e && (o = i.page.getViewHeight(), i.dom.setStyle(i.q("img-wrap", "album-box-content" + d)[0], "margin-left", i.page.getViewWidth() / 2 - 450 + "px")), i.dom.setStyle(a, "margin-top", 0 > u ? 0 : u), e) { var g = parseInt(r / c * 890); if (g > o) { var b = i.g("img-scroll" + d);
                            i.dom.setStyles(b, { width: 890, height: o + 5, overflow: "hidden" }), i.dom.setStyles(a, { width: 890 }), i.dom.setStyles(currentImgWrap, { width: 890, marginTop: 0, backgroundColor: "#fff" }), s = new l({ container: b, element: b, overflow: "overflow-y", backgroundColor: "#fff" }), s.render(b) } else { var h = (i.page.getViewHeight() - g - n) / 2;
                            i.dom.setStyles(a, { width: 890 }), i.dom.setStyles(currentImgWrap, { width: 890, marginTop: h, backgroundColor: "transparent" }) } } else r > o ? (i.dom.setStyles(a, { width: o / r * c }), i.browser.ie && i.browser.ie <= 8 && i.dom.setStyles(a, { height: o })) : (i.dom.setStyles(a, { width: c, height: r }), i.dom.setStyles("album-box-content" + d, { textAlign: "center" })) } },
            A = function() { if (s) { var e = parseInt(i.dom.getStyle("currentAlbumImg" + d, "width")),
                        t = parseInt(i.dom.getStyle("currentAlbumImg" + d, "height")),
                        o = parseInt(e - 100),
                        a = parseInt(t - 100),
                        l = i.page.getViewHeight();
                    l > a && (a = l, o = parseInt(e / t * a), i.dom.q("scrollbar-y-slider-thumb")[0] && i.dom.hide(i.dom.q("scrollbar-y-slider-thumb")[0])), i.dom.setStyle(i.dom.g("currentAlbumImg" + d), "width", o), i.dom.setStyle(i.dom.q("img-wrap", "album-box-content" + d)[0], "width", o), i.dom.g("img-scroll" + d) && i.dom.setStyle(i.dom.g("img-scroll" + d), "width", o - 9), i.dom.setStyle(i.q("img-wrap", "album-box-content" + d)[0], "margin-left", i.page.getViewWidth() / 2 - o / 2) } },
            k = function() { if (s) { var e = parseInt(i.dom.getStyle("currentAlbumImg" + d, "width")),
                        t = parseInt(e + 100);
                    i.dom.q("scrollbar-y-slider-thumb")[0] && i.dom.show(i.dom.q("scrollbar-y-slider-thumb")[0]), t > 890 && (t = 890), i.dom.setStyle(i.dom.g("currentAlbumImg" + d), "width", t), i.dom.setStyle(i.dom.q("img-wrap", "album-box-content" + d)[0], "width", t), i.dom.g("img-scroll" + d) && i.dom.setStyle(i.dom.g("img-scroll" + d), "width", t - 9), i.dom.setStyle(i.q("img-wrap", "album-box-content" + d)[0], "margin-left", i.page.getViewWidth() / 2 - t / 2 - 5) } },
            q = function(e) { i.show("album-box-layer" + d), y(e), i.show("album-box" + d), S(), i.on(window, "resize", S), i.dom.setAttr("album-box-layer" + d, "hasShown", "shown") },
            C = function() { i.hide("album-box-layer" + d), i.hide("album-box" + d), i.dom.setStyles(document.body.parentNode, { overflow: "", paddingRight: "" }), i.event.un(window, "resize", S), i.dom.setAttr("album-box-layer" + d, "hasShown", "hidden") }; return { initAlbum: function(e, t, o, a) { if (!(t.amount < 1)) { if (d = a, i.g("album-box-layer" + d) && "hidden" == i.dom.getAttr("album-box-layer" + d, "hasShown")) return q(e), !1;
                    m = e, h = t.stepPic, c = h.length, b = Math.ceil(c / u), f(o, a), w(), y(m), isIE6 && (I(), i.dom.setStyles("album-box-bottom" + d, { position: "absolute", bottom: 0 })) } } } }() });