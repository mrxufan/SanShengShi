define("activity:widget/ui/redbox/redbox.js", function(o, e, i) {
    function a(o) { var e = "method=userReadSystemNotice&";
        e += "maintype=" + o, c.ajax.post("/submit/notice", e, function() { callback && callback() }) } var c = o("common:widget/lib/tangram/base/base.js"),
        t = o("common:widget/ui/dialog/dialog.js");
    i.exports.init = function() { var o = '<a hidefocus="true" href="javascript:void(0)" id="redbox-close" class="redbox-close"></a><p class="redbox-title">恭喜！得到一个现金红包！</p><p class="redbox-div-bg"></p><p class="redbox-img-bg"></p><a href="/activity/return" target="_blank" id="draw-redbox" class="draw-redbox"></a>';
        t.show("&nbsp", { skin: "redbox-dialog", width: 450, height: 350, coverable: !1, info: o, onclose: function() {}, onopen: function() { c.on("redbox-close", "click", function() { t.dispose(), a(31) }), c.on("draw-redbox", "click", function() { t.dispose(), a(31) }) } }) } });;
define("activity:widget/ui/red-box/red-box.js", function(n, e, t) {
    function a(n) { if (0 == n.total || n.current < 0) return !1; var e = n.current,
            t = n.total,
            a = n.rn ? n.rn : 25,
            r = n.url.indexOf("?") ? n.url + "&" : n.url + "?",
            i = 4,
            o = 5,
            s = 10,
            l = '<div id="pg" class="pg">'; if (!(a >= t)) { var c = parseInt(e / a),
                d = parseInt(t / a); if (t > d * a && d++, 1 == n.currentPageShow) { var u = 0 == c ? null : "(第" + (c + 1) + "页)"; return u } if (s >= d) var p = 0,
                m = d;
            else { if (i >= c) var p = 0,
                    m = s;
                else c + o >= d ? (p = d - s, m = d) : (p = c - i, m = p + s);
                c > i && (l += '<a pn="0" class="padding8 pg-btn" href="' + r + 'pn=0">首页</a>') } p != c && (l += '<a pn="' + (e - a) + '" class="padding8 pg-btn" href="' + r + "pn=" + (e - a) + '"><上一页</a>'); for (var g = p; m > g; g++) disp_num = g >= 999 ? substr(g + 1, 0, 2) + ".." : g + 1, l += g == c ? "<b>" + disp_num + "</b>" : g >= 999 ? '<a class="pg-btn" pn="' + g * a + '" href="' + r + "pn=" + g * a + '" title="' + (g + 1) + '">' + disp_num + "</a>" : '<a class="pg-btn" pn="' + g * a + '" href="' + r + "pn=" + g * a + '">' + disp_num + "</a>"; return c + 1 != d && (l += '<a pn="' + (e + a) + '" class="padding8 pg-btn" href="' + r + "pn=" + (e + a) + '">下一页></a>'), d > s && d > c + o + 1 && (l += '<a pn="' + (d - 1) * a + '" class="padding8 pg-btn" href="' + r + "pn=" + (d - 1) * a + '">尾页</a>'), l += "</div>" } }

    function r(n) { n = parseInt(n) || 0; var e = g.length,
            t = g.slice(n, Math.min(n + 10, e)),
            r = s.g("rank-bd");
        r.innerHTML = o(t, n); var i = s.g("rank-pg"),
            l = a({ current: n, total: e, rn: 10, url: "#" });
        l && (i.innerHTML = l) }

    function o(n, e) { var t = ["<ul>"]; return s.each(n, function(n, a) { var r = parseInt(e) + parseInt(a) + 1;
            t.push("<li>"), t.push('<span class="r-numb">' + r + "</span>"), t.push('<span class="r-auth"><a target="_blank" href="/user/npublic/expList?un=' + n.uname + '" title="' + n.uname + '">' + s.string.subByte(n.uname, 10) + "</a></span>"), t.push('<span class="r-reds">' + n.amount + "</span>"), t.push('<span class="r-piece">' + n.money_sum + "</span>"), t.push("</li>") }), t.push("</ul>"), t.join("") } var s = n("common:widget/lib/tangram/base/base.js");
    n("common:widget/lib/tangram/ui/Carousel/Carousel.js"), n("common:widget/lib/tangram/ui/Carousel/fx/fx.js"); var l = n("common:widget/lib/tangram/fx/move/move.js"),
        c = n("common:widget/ui/red-bao/red-bao.js"),
        d = n("common:widget/ui/dialog/dialog.js"),
        u = function() { var n = 5,
                e = 0,
                t = s.dom.children("red-box-list"),
                a = [],
                r = s.dom.children("red-box-slider"); for (i = 0; i < t.length; i++) a.push({ content: t[i].outerHTML }); if (6 > i) return void(s.g("red-box-list").style.display = "block"); var o = (Math.ceil(i / n), new s.ui.Carousel({ contentText: a, pageSize: n, orientation: "horizontal", supportTable: !1, flip: "page", enableFx: !0, isCycle: !1, direction: "right", showButton: !1, autoScroll: !1, onbeforescroll: function(n) { r[Math.ceil(e / 5)] && s.dom.removeClass(r[Math.ceil(e / 5)], "on"), r[Math.ceil(n.index / 5)] && s.dom.addClass(r[Math.ceil(n.index / 5)], "on"), e = n.index }, btnLabel: { prev: "&nbsp;", next: "&nbsp;" } }));
            o.render("redbox-c-wrap"), o.scrollTo(i - 5), window.carousel = o, s.g("prev-slider-btn").style.display = "block", s.g("next-slider-btn").style.display = "block", s.on("prev-slider-btn", "click", function() { 1 > e || o.scrollTo(Math.max(e - 5, 0)) }), s.on("next-slider-btn", "click", function() { e > i || o.scrollTo(Math.min(e + 5, i - 5)) }), s.array.each(r, function(n, e) { s.on(n, "click", function() { o.scrollTo(Math.min(5 * e, i - 5)) }) }), window.carousel = o },
        p = function() { var n = arguments,
                e = s.g("rex-exp-list");
            e && (s.dom.children(e).length < 7 || setTimeout(function() { var t = s.dom.children(e);
                l(e, { y: "-41", onafterfinish: function() { for (var n = 0; 1 > n; n++) e.appendChild(t[n]);
                        s.dom.setStyle(e, "top", 0) } }), n.callee() }, 2e3)) },
        m = function() { var n = arguments,
                e = s.g("red-flow-list");
            e && (s.dom.children(e).length < 14 || setTimeout(function() { var t = s.dom.children(e);
                l(e, { y: "-35", onafterfinish: function() { for (var n = 0; 1 > n; n++) e.appendChild(t[n]);
                        s.dom.setStyle(e, "top", 0) } }), n.callee() }, 2500)) };
    s.on("red-rank-table", "click", function(n) { var e = s.event.getTarget(n); if (s.dom.hasClass(e, "pg-btn")) { var t = s.dom.getAttr(e, "pn");
            setTimeout(function() { r(t) }, 200), s.event.stop(n) } }); var g = s.json.parse(F.context("red_rank_data"));
    r();
    t.exports.init = function() { u(), p(), m(), s.on("redbox-c-wrap", "click", function(n) { var e = s.event.getTarget(n); if (s.dom.hasClass(e, "open-red-box")) { { var t = s.dom.getAttr(e, "cs");
                    s.dom.getParent(e) } s.ajax.get("/activityasyn?activity=return&method=open_hongbao&checksum=" + t, function(n, e) { if ("" !== e) { var t = s.json.parse(e);
                        0 == t.errno ? c.redbox([{ amount: t.money }], function() { window.location.reload() }) : d.alert("经验提示", { skin: "redbox-dialog", info: "开启红包出错啦，请重试!", width: 340, height: 150 }) } }), s.event.stop(n) } }) } });