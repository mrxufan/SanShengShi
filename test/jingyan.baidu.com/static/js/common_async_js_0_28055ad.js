define("common:widget/ui/income-share/income-share.js", function(require, exports, module) { var dialog = (require("common:widget/lib/tangram/base/base.js"), require("common:widget/ui/dialog/dialog.js")),
        msg = require("common:widget/ui/msg/msg.js"),
        incomeShare = { init: function(data, type) { var money = parseInt(data.amount) + "+",
                    msgId = data.messageid,
                    content = ['<div class="sun"></div>', '<p class="money">恭喜你本月成功提现<span>' + money + "</span>元现金稿酬！", '<div class="share-container">', '<div class="bdsharebuttonbox" data-tag="share_1">', '<a class="bds_weixin" data-cmd="weixin"></a>', '<a class="bds_tsina" data-cmd="tsina"></a>', '<a class="bds_qzone" data-cmd="qzone" href="#"></a>', '<a class="bds_tqq" data-cmd="tqq"></a>', "</div>", '<p class="desc">成功分享至站外还有额外的福利分成哦！<a href="" target="_blank">详情>></a></p>', "</div>"].join("");
                dialog.show("提现成功", { skin: "income-share-dialog", width: 500, height: 305, coverable: !1, info: content, onclose: function() {}, onopen: function() { with(msg.readMessage(type, null, "&mid=" + msgId), window._bd_share_config = { common: { bdUrl: "http://jingyan.baidu.com/user/income", bdSnsKey: {}, bdText: "写经验，有钱赚！我刚刚在百度经验提现了" + money + "元现金！赶快来看看吧！", bdMini: "2", bdMiniList: !1, bdPic: "", bdStyle: "0", bdSize: "32" }, share: {} }, document) 0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=86835285.js?cdnversion=" + ~(-new Date / 36e5)] } }) } };
    module.exports = incomeShare });;
define("common:widget/ui/may-medal/may-medal.js", function(require, exports, module) { var T = require("common:widget/lib/tangram/base/base.js"),
        dialog = require("common:widget/ui/dialog/dialog.js"),
        msg = require("common:widget/ui/msg/msg.js"),
        Medal = { init: function(a, e) { var s = this;
                s.type = a, s.mid = e.mid, e.since = s.dateParse(e.since), e.uname = e.uname || "经验小伙伴", s.showDialog(e) }, dateParse: function(a) { var e = new Date(1e3 * a),
                    s = ""; return s += e.getUTCFullYear() + "年", s += e.getUTCMonth() + 1 + "月", s += e.getUTCDate() + "日" }, hasRead: function() { var a = this;
                msg.readMessage(a.type, null, "&mid=" + a.mid) }, showDialog: function(options) { var desc, medalClass, sharePic, me = this; switch (+options.medal) {
                    case 1:
                        desc = ["简直太厉害了！劳动楷模非你莫属~", 'So~特授予您<span class="f-red">金牌劳模</span>光荣称号', "请接受众生膜拜吧！"].join("<br/>"), medalClass = "gold", sharePic = "http://jingyan.baidu.com/event/may/gold.png"; break;
                    case 2:
                        desc = ["真的很赞！劳模勋章双手奉上~", 'So~特授予您<span class="f-red">银牌劳模</span>光荣称号', "与金牌只有一步之遥了呢，继续加油吧！"].join("<br/>"), medalClass = "silver", sharePic = "http://jingyan.baidu.com/event/may/silver.png"; break;
                    default:
                        desc = ["有点小酷！堪称劳动楷模~", 'So~特授予您<span class="f-red">铜牌劳模</span>光荣称号', "路还很长，一起努力吧！"].join("<br/>"), medalClass = "bronze", sharePic = "http://jingyan.baidu.com/event/may/bronze.png" } var info = ['<div class="may-medal-container">', '<div class="pos-abs border-top-left"></div>', '<div class="pos-abs border-top-right"></div>', '<div class="pos-abs border-bottom-left"></div>', '<div class="pos-abs border-bottom-right"></div>', '<div class="content">', '<div class="pos-abs medal-elem ' + medalClass + '"></div>', '<div class="pos-abs exp-sign"></div>', '<div class="content-inner">', '<div class="content-text">', "<h1>劳动最光荣</h1>", '<p>Hi，全宇宙最勤劳的<span class="f-green">' + options.uname + "</span>：</p>", '<h2>您自从<span class="f-green">' + options.since + '</span>加入经验以来，坚持不懈的贡献了<span class="f-green">' + options.exp + '</span>篇经验，帮助了<span class="f-green">' + options.help + "</span>人次！</h2>", "<p>" + desc + '<br/>小贴士：劳动勋章<a href="/user/nuc" target="_blank" class="f-blue">个人中心</a>可随时查看</p>', '<div class="share-box">', '<span class="guide-text">做人不要太低调，分享你的光荣事迹：</span>', '<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a></div>', "</div>", "</div>", "</div>", "</div>", '<div class="pos-abs may-x-layer" id="may-x-layer"></div>', "</div>"].join("");
                dialog.show("&nbsp", { skin: "may-medal-dialog", width: 842, height: 550, coverable: !1, info: info, onopen: function() { with(window._bd_share_config = { common: { bdSnsKey: {}, bdText: "天道酬勤呀！我在百度经验分享了" + options.exp + "篇经验，帮助了" + options.help + "人次，获得“劳动楷模“的光荣称号，太开心！@百度经验 么么哒～", bdMini: "2", bdMiniList: !1, bdPic: sharePic, bdStyle: "0", bdSize: "32" }, share: {}, selectShare: { bdContainerClass: null, bdSelectMiniList: ["tsina", "weixin", "douban", "qzone"] } }, document) 0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" + ~(-new Date / 36e5)];
                        T.on("may-x-layer", "click", function() { dialog.dispose() }), me.hasRead() } }) } };
    module.exports = Medal });;
define("common:widget/ui/red-bao/red-bao.js", function(o, e, i) {
    function n(o, e) { var i = "method=userReadSystemNotice&";
        i += "maintype=" + o, i += "&mid=" + e, s.ajax.post("/submit/notice", i, function() { "undefined" != typeof callback && callback() }) }

    function a(o) { s.ajax.post("/activity/asyncreq?method=box&ref=exp&click=openRedBox", "itemID=" + o, function(o, e) { if ("" !== e) { s.json.parse(e) } }) } var s = o("common:widget/lib/tangram/base/base.js"),
        c = o("common:widget/ui/dialog/dialog.js");
    i.exports.redbox = function(o, e) { var i = o[0].amount;
        i += "", i = i.split(""); var t = '<div class="num-wrap">',
            d = 0;
        s.each(i, function(o) { return d > 1 ? !1 : void("." == o ? t += '<div class="num-dot"></div>' : (t += '<div class="number rnum' + o + '"></div>', d++)) }), t += "</div>"; var r = '<a hidefocus="true" href="javascript:void(0)" id="red-bao-close" class="red-bao-close"></a><div class="red-bao-desc"><p>红包内的现金奖励</p><p>只有<span>回享作者</span>可提现</p></div>' + t;
        c.show("&nbsp", { skin: "red-bao-dialog", width: 573, height: 571, coverable: !1, info: r, onclose: function() {}, onopen: function() { var i = [];
                o[0].boxID && s.each(o, function(o) { i.push(o.messageid), a(o.boxID) }), s.on("red-bao-close", "click", function() { c.dispose(), o[0].boxID && n(12, i), e && e() }) } }) }, i.exports.init = function(o) { i.exports.redbox(o) } });;
define("common:widget/ui/top-search-box/top-search-box.js", function(e, t, a) {
    function n() { for (var e = ["top-search-form", "bottom-search-form"], t = 0; t < e.length; t++) r.g(e[t]) && r.on(r.g(e[t]), "submit", function(e) { "" == r.trim(document[this.name].word.value) ? window.location.reload(!0) : this.submit(), r.event.preventDefault(e) }) }

    function o(e) { var t = r.g("kw"); if (t.value.length > 0) { var a = (e.href, encodeURIComponent(t.value)),
                n = ""; switch (e.getAttribute("index")) {
                case "0":
                    n = "ns?cl=2&rn=20&tn=news&t=1&word=" + a + "&t=1&ie=utf-8"; break;
                case "1":
                    n = "s?cl=3&wd=" + a + "&t=1&ie=utf-8"; break;
                case "2":
                    n = "f?kw=" + a + "&ie=utf-8"; break;
                case "3":
                    n = "q?ct=17&pn=0&tn=ikaslist&rn=10&word=" + a + "&ie=utf-8"; break;
                case "4":
                    n = "search?key=" + a; break;
                case "5":
                    n = "search/index?tn=baiduimage&ct=201326592&ie=utf-8&lm=-1&cl=2&word=" + a; break;
                case "6":
                    n = "v?ct=301989888&s=25&word=" + a + "&ie=utf-8"; break;
                case "7":
                    n = "?newmap=1&ie=utf-8&s=s%26wd%3D" + a; break;
                case "8":
                    n = "search/word?pic=1&word=" + a + "&enc=utf8"; break;
                case "9":
                    n = "search?lm=0&od=0&word=" + a + "&ie=utf-8"; break;
                default:
                    n = "" } e.href = e.href + n } }

    function i() { var e = r.dom.query("#top-search-box .channel li a");
        r.object.each(e, function(e, t) { e.setAttribute("index", t), r.on(e, "click", function() { o(e) }) }) }

    function c() { var e = r.g("right-logo-id");
        null != e && ("/" == location.pathname || location.pathname.indexOf("/article") > -1) && r.dom.setStyle(e, "display", "block") } var r = e("common:widget/lib/tangram/base/base.js");
    a.exports.init = function() { n(), i(), c() } });;
define("common:widget/ui/user/introduction/introduction.js", function(t, o, i) { var e = t("common:widget/lib/tangram/base/base.js"),
        n = t("common:widget/ui/dialog/dialog.js"),
        r = t("common:widget/ui/ajax/ajax.js"),
        d = t("common:widget/ui/util/tool/tool.js");
    i.exports.init = function() { e.on("modify-introduction-e", "click", function() { a() }) }; var a = function() { var t = !1; "" == F.context("introduction") || "该用户暂未添加个性签名" == F.context("introduction") ? tip = "请用一两句话介绍一下自己，请不要超过14个字。" : (tip = F.context("introduction"), t = !0); var o = ['<div class="intro-self" id="intro-self-e">', '<textarea id="self-textarea-e">', tip, "</textarea>", '<div id="self-prompt-e" class="self-prompt"></div>', "</div>"].join(""); if (n.expConfirm({ title: "个性签名", finalContent: o, height: 170, onconfirm: function() { var o = e.dom.g("self-textarea-e").value,
                        r = e.string.getByteLength(e.trim(o).replace(/\s/gi, ""));
                    t && 0 == r && (o = "该用户暂未添加个性签名"), r > 28 ? (e.dom.g("self-prompt-e").innerHTML = "您提交的内容超过14字，请删减后再次提交。", n.diableOnConfirm()) : 0 != r || t ? i.exports.modifyInfo(o) : (e.dom.g("self-prompt-e").innerHTML = "您提交的内容为空，请介绍下自己。", n.diableOnConfirm()) } }), "" == F.context("introduction") || "该用户暂未添加个性签名" == F.context("introduction")) { var r = { inputId: "self-textarea-e", tipColor: "#999999", inputColor: "#000" };
            d.inputTip(r) } else e.g("self-textarea-e").style.color = "#000"; var a = { inputId: "self-textarea-e", tipId: "self-prompt-e", maxWords: 28 };
        d.limitWords(a) };
    i.exports.modifyInfo = function(t) { r.post("/submit/user", { method: "setUserInfo", introduction: t }, function() { var o = t;
            e.dom.setAttr("introduction-e", "title", ""), e.dom.g("introduction-e").innerHTML = e.string.encodeHTML(o), F.context({ introduction: t }) }) } });;
define("common:widget/ui/user/resume/resume.js", function(e, t, o) { var i = e("common:widget/lib/tangram/base/base.js"),
        r = e("common:widget/ui/dialog/dialog.js"),
        n = e("common:widget/ui/ajax/ajax.js"),
        s = e("common:widget/ui/util/tool/tool.js");
    o.exports.init = function(e) { null != e && "" != e && i.on(e, "click", function() { m() }) }; var m = function() { var e = !1; "" == F.context("resume") || "该用户尚未填写个人简介" == F.context("resume") ? tip = "请输入您真实的身份、头衔、职业等，将有助于读者对您的经验加深理解。" : (tip = F.context("resume"), e = !0); var t = ['<p id="resume-line-e">', '<textarea id="resume-area">', tip, "</textarea>", "</p>", '<p id="resume-prompt-e" class="resume-prompt"></p>', '<div id="self-prompt-e" class="self-prompt"></div>', "</div>"].join(""); if (r.confirm("个人简历", { info: t, width: 580, height: 260, onconfirm: function() { var t = i.dom.g("resume-area").value,
                        n = i.string.getByteLength(i.trim(t).replace(/\s/gi, ""));
                    e && 0 == n && (t = "该用户尚未填写个人简介"), n > 400 ? (i.dom.g("self-prompt-e").innerHTML = "您提交的内容超过400字，请删减后再次提交。", r.diableOnConfirm()) : 0 != n || e ? o.exports.modifyInfo(t) : (i.dom.g("self-prompt-e").innerHTML = "您提交的内容为空，请介绍下自己。", r.diableOnConfirm()) }, onclose: function() {} }), "" == F.context("resume") || "该用户暂未添加个性签名" == F.context("resume")) { var n = { inputId: "resume-area", tipColor: "#999999", inputColor: "#000" };
            s.inputTip(n) } else i.g("resume-area").style.color = "#000"; var m = { inputId: "resume-area", tipId: "self-prompt-e", maxWords: 400 };
        s.limitWords(m) };
    o.exports.modifyInfo = function(e) { n.post("/submit/user", { method: "setUserInfo", resume: e }, function() { var t = e;
            i.dom.setAttr("userResume", "title", ""), i.dom.g("userResume").innerHTML = i.string.encodeHTML(t), F.context({ resume: e }), r.alert("提示", { info: "<p>编辑个人简历成功</p>", width: 300, height: 80 }) }) } });