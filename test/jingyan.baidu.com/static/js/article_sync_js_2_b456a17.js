define("article:widget/tag-explist/add-tags/add-tags.js", function(t, a, i) { var e = t("common:widget/lib/tangram/base/base.js"),
        d = t("common:widget/ui/dialog/dialog.js"),
        n = (t("common:widget/ui/login/login.js"), t("common:widget/lib/fis/event/event.js").eventCenter),
        s = "/submit/tag",
        o = e.q("add-tags")[0],
        l = (e.q("exp-tag")[0], []),
        r = function(t, a) { var a = $.extend({ className: "tag-item" }, a || {}),
                i = ['<div class="' + a.className + '" tagname="' + t + '">', '<div class="t-hd">', '<div class="t-hd-l"></div>', '<div class="t-hd-m"></div>', '<div class="t-hd-r"></div>', "</div>", '<div class="t-md">' + t]; return a.noDel || i.push('<span class="red-del"></span>'), i.push(["</div>", '<div class="t-ft">', '<div class="t-ft-l"></div>', '<div class="t-ft-m"></div>', '<div class="t-ft-r"></div>', "</div>", "</div>"].join("")), i.join("") },
        c = function() { var t = F.context("tags"); if (!t) return ""; var a = []; return l = [], e.each(t, function(t) { "" !== t && (a.push(r(t)), l.push(t)) }), a.join("") },
        g = function(t) { var a = []; return e.each(t, function(t) { a.push('<a href="/search?word=' + t + '" target="_blank">' + t + "</a>") }), a.join("&nbsp;") },
        u = function() { var t = F.context("title"); if (!t) return "添加经验标签"; var a = Math.ceil(e.string.getByteLength(t)),
                i = 34; return a > i && (t = e.string.subByte(t, i) + "..."), "为经验《" + t + "》添加标签" },
        v = function(t) { t ? (e.q("added-tags-wrap")[0].style.display = "block", e.q("pls-add-tag")[0].style.display = "none") : (e.q("added-tags-wrap")[0].style.display = "none", e.q("pls-add-tag")[0].style.display = "block") },
        p = function(t) { var a = $("#add-tag-body").height();
            t.resize(514, a + 50) };
    e.on(o, "click", function() { var t = ['<div id="add-tag-body" class="add-tag-body">', '<div class="added-tags-wrap">', '<div class="title">已添加：</div>', '<div id="add2list" class="add2list clearfix">' + c() + "</div>", "</div>", '<p class="pls-add-tag">为该经验添加标签</p>', '<div class="added-tags-inpt clearfix">', '<input id="add-tag-ipt" type="text" value="" placeholder="请输入标签(不超过7个中文字符)" class="add-tag-ipt" /> ', '<button class="add-tag-btn" id="add-tag-btn">添加</button>', "</div>", '<div class="push-tag-wrap" id="push-tag-wrap"></div>', '<p class="tag-tip-wrap"><span id="add-tag-tip"></span></p>', "</div>"].join("");
        d.confirm(u(), { skin: "add-tag-dialog", info: t, width: 514, height: 300, onopen: function() { var t;
                F.context("push-tag-title") ? t = encodeURIComponent(F.context("push-tag-title")) : F.context("isEditor") === !0 && (t = e.dom.query(".main-title")[0].value), e.ajax.get("/ajax/exp/AutoTag?title=" + t, function(t, a) { if ("" !== a) { var i = e.json.parse(a); if (!i.errno) { var n = ["<h3>推荐标签：</h3>", '<ul id="push-tag-list" class="clearfix push-tag-list">'];
                            e.each(i.tagList, function(t) { n.push("<li>", r(t, { noDel: 1, className: "tag-item push-tag-item" }), "</li>") }), n.push(["</ul>"].join("")), e.g("push-tag-wrap").innerHTML = n.join(""); var s = e.dom.query(".push-tag-item");
                            e.each(s, function(t) { e.event.on(t, "click", function() { var a = e.dom.getAttr(t, "tagname");
                                    e.g("add-tag-ipt").value = a, e.g("add-tag-btn").click() }) }); var o = -1 === l.indexOf(i.tagList[0]);
                            e.dom.query(".red-del").length < 5 && o && s[0].click(), p(d) } } }); var a, i = function(t) { var i = e.g("add-tag-tip"),
                        d = e.g("add-tag-ipt");
                    d.value = "", i.innerHTML = t || "网络错误，请稍后重试", clearTimeout(a), e.dom.setStyle(i, "display", "block"), a = setTimeout(function() { e.dom.setStyle(i, "display", "none") }, 1e3) };
                e.event.on("add-tag-body", "click", function(t) { var a = e.event.getTarget(t); if (e.dom.hasClass(a, "add-tag-btn")) { var n = e.g("add-tag-ipt"),
                            s = (e.g("add2list"), e.trim(n.value)); if ("" === s) return void n.focus(); var o = e.string.getByteLength(s); if (o > 14) return i("不能超过7个中文字符"), void n.focus(); if (l.length > 4) return void i("每篇经验不能超过5个标签"); if (-1 === l.indexOf(s)) { l.push(s), $("#add2list").append(r(s)), n.value = ""; var c = l.length;
                            v(c > 0), p(d), n.focus() } else i("该标签已经存在") } else if (e.dom.hasClass(a, "red-del")) { var g = e.dom.getAncestorByClass(a, "tag-item"),
                            s = e.dom.getAttr(g, "tagname");
                        e.array.remove(l, s), e.dom.remove(g); var c = l.length;
                        v(c > 0), p(d) } }), e.event.on("add-tag-ipt", "keydown", function(t) { 13 === t.keyCode && $(".add-tag-btn").click() }); var n = l.length;
                v(n > 0), setTimeout(function() { p(d) }, 100) }, onconfirm: function() { return F.context("isEditor") === !0 ? (F.context("tags", l), void $(".exp-tag").html(g(l))) : void n.fire("login.check", { isLogin: function() { e.ajax.post(s, e.url.jsonToQuery({ method: "modifyExpTags", tags: l.join(","), eid: F.context("eid") }), function(t, a) { if (d.diableOnConfirm(), "" !== a) { var i = e.json.parse(a);
                                0 === i.errno && (d.enableOnConfirm(), F.context("tags", l), $(".exp-tag").html(g(l))) } }) } }) }, onclose: function() { F.context("isEditor") === !0 && (l = F.context("tags") || []) } }) }), i.exports.init = function() {} });