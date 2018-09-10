UMEDITOR_CONFIG = window.UMEDITOR_CONFIG || {}, window.UM = { plugins: {}, commands: {}, I18N: {}, version: "1.2.2" };
var dom = UM.dom = {};;
! function() { var t = window.UMEDITOR_HOME_URL || function() {
        function t() { this.documentURL = self.document.URL || self.location.href, this.separator = "/", this.separatorPattern = /\\|\//g, this.currentDir = "./", this.currentDirPattern = /^[.]\/]/, this.path = this.documentURL, this.stack = [], this.push(this.documentURL) }

        function e() { var e = t.getProtocol(this.path || "");
            e ? (this.protocol = e, this.localSeparator = /\\|\//.exec(this.path.replace(e, ""))[0], this.stack = []) : (e = /\\|\//.exec(this.path), e && (this.localSeparator = e[0])) }

        function i() { var e = this.path.replace(this.currentDirPattern, "");
            t.hasProtocol(this.path) && (e = e.replace(this.protocol, "")), e = e.split(this.localSeparator), e.length = e.length - 1; for (var i, r = 0, a = e.length, n = this.stack; a > r; r++) i = e[r], i && (t.isParentPath(i) ? n.pop() : n.push(i)) } t.isParentPath = function(t) { return ".." === t }, t.hasProtocol = function(e) { return !!t.getProtocol(e) }, t.getProtocol = function(t) { var e = /^[^:]*:\/*/.exec(t); return e ? e[0] : null }, t.prototype = { push: function(t) { return this.path = t, e.call(this), i.call(this), this }, getPath: function() { return this + "" }, toString: function() { return this.protocol + this.stack.concat([""]).join(this.separator) } }; var r = document.getElementsByTagName("script"); return r = r[r.length - 1].src, (new t).push(r) + "" }();
    window.UMEDITOR_CONFIG = { UMEDITOR_HOME_URL: t, imageUrl: t + "php/imageUp.php", imagePath: t + "php/", imageFieldName: "upfile", toolbar: ["bold italic"], initialFrameHeight: 100, elementPathEnabled: !1, wordCount: !1, autoClearinitialContent: !0, filterRules: function() {
            function t(t) { t.tagName = "p", t.setStyle() } return { "-": "script style object iframe embed input select", p: { $: {} }, br: { $: {} }, div: t, dl: t, dd: t, dt: t, li: t, caption: t, th: t, tr: t, h1: t, h2: t, h3: t, h4: t, h5: t, h6: t, td: function(t) { t.tagName = "span", t.setStyle() } } }() } }();;
UM.I18N["zh-cn"] = { labelMap: { anchor: "锚点", undo: "撤销", redo: "重做", bold: "加粗", indent: "首行缩进", snapscreen: "截图", italic: "斜体", underline: "下划线", strikethrough: "删除线", subscript: "下标", fontborder: "字符边框", superscript: "上标", formatmatch: "格式刷", source: "源代码", blockquote: "引用", pasteplain: "纯文本粘贴模式", selectall: "全选", print: "打印", preview: "预览", horizontal: "分隔线", removeformat: "清除格式", time: "时间", date: "日期", unlink: "取消链接", insertrow: "前插入行", insertcol: "前插入列", mergeright: "右合并单元格", mergedown: "下合并单元格", deleterow: "删除行", deletecol: "删除列", splittorows: "拆分成行", splittocols: "拆分成列", splittocells: "完全拆分单元格", mergecells: "合并多个单元格", deletetable: "删除表格", cleardoc: "清空文档", insertparagraphbeforetable: "表格前插入行", insertcode: "代码语言", fontfamily: "字体", fontsize: "字号", paragraph: "段落格式", image: "图片", edittable: "表格属性", edittd: "单元格属性", link: "超链接", emotion: "表情", spechars: "特殊字符", searchreplace: "查询替换", map: "百度地图", gmap: "Google地图", video: "视频", help: "帮助", justifyleft: "居左对齐", justifyright: "居右对齐", justifycenter: "居中对齐", justifyjustify: "两端对齐", forecolor: "字体颜色", backcolor: "背景色", insertorderedlist: "有序列表", insertunorderedlist: "无序列表", fullscreen: "全屏", directionalityltr: "从左向右输入", directionalityrtl: "从右向左输入", rowspacingtop: "段前距", rowspacingbottom: "段后距", highlightcode: "插入代码", pagebreak: "分页", insertframe: "插入Iframe", imagenone: "默认", imageleft: "左浮动", imageright: "右浮动", attachment: "附件", imagecenter: "居中", wordimage: "图片转存", lineheight: "行间距", edittip: "编辑提示", customstyle: "自定义标题", autotypeset: "自动排版", webapp: "百度应用", touppercase: "字母大写", tolowercase: "字母小写", background: "背景", template: "模板", scrawl: "涂鸦", music: "音乐", inserttable: "插入表格", drafts: "草稿箱", formula: "数学公式" }, paragraph: { p: "段落", h1: "标题 1", h2: "标题 2", h3: "标题 3", h4: "标题 4", h5: "标题 5", h6: "标题 6" }, fontfamily: { songti: "宋体", kaiti: "楷体", heiti: "黑体", lishu: "隶书", yahei: "微软雅黑", andaleMono: "andale mono", arial: "arial", arialBlack: "arial black", comicSansMs: "comic sans ms", impact: "impact", timesNewRoman: "times new roman" }, ok: "确认", cancel: "取消", closeDialog: "关闭对话框", tableDrag: "表格拖动必须引入uiUtils.js文件！", autofloatMsg: "工具栏浮动依赖编辑器UI，您首先需要引入UI文件!", anthorMsg: "链接", clearColor: "清空颜色", standardColor: "标准颜色", themeColor: "主题颜色", property: "属性", "default": "默认", modify: "修改", justifyleft: "左对齐", justifyright: "右对齐", justifycenter: "居中", justify: "默认", clear: "清除", anchorMsg: "锚点", "delete": "删除", clickToUpload: "点击上传", unset: "尚未设置语言文件", t_row: "行", t_col: "列", more: "更多", pasteOpt: "粘贴选项", pasteSourceFormat: "保留源格式", tagFormat: "只保留标签", pasteTextFormat: "只保留文本", image: { "static": { lang_tab_local: "本地上传", lang_tab_imgSearch: "网络图片", lang_input_dragTip: "支持图片拖拽上传", lang_btn_add: "添加" }, uploadError: "上传出错" }, emotion: { "static": { lang_input_choice: "精选", lang_input_Tuzki: "兔斯基", lang_input_BOBO: "BOBO", lang_input_lvdouwa: "绿豆蛙", lang_input_babyCat: "baby猫", lang_input_bubble: "泡泡", lang_input_youa: "有啊" } }, gmap: { "static": { lang_input_address: "地址", lang_input_search: "搜索", address: { value: "北京" } }, searchError: "无法定位到该地址!" }, link: { "static": { lang_input_text: "文本内容：", lang_input_url: "链接地址：", lang_input_title: "标题：", lang_input_target: "是否在新窗口打开：" }, validLink: "只支持选中一个链接时生效", httpPrompt: "您输入的超链接中不包含http等协议名称，默认将为您添加http://前缀" }, map: { "static": { lang_city: "城市", lang_address: "地址", city: { value: "北京" }, lang_search: "搜索", lang_dynamicmap: "插入动态地图" }, cityMsg: "请选择城市", errorMsg: "抱歉，找不到该位置！" }, video: { "static": { lang_tab_insertV: "插入视频", lang_video_url: "视频网址", lang_video_size: "视频尺寸", lang_videoW: "宽度", lang_videoH: "高度", lang_alignment: "对齐方式", videoSearchTxt: { value: "请输入搜索关键字！" }, videoType: { options: ["全部", "热门", "娱乐", "搞笑", "体育", "科技", "综艺"] }, videoSearchBtn: { value: "百度一下" }, videoSearchReset: { value: "清空结果" } }, numError: "请输入正确的数值，如123,400", floatLeft: "左浮动", floatRight: "右浮动", "default": "默认", block: "独占一行", urlError: "输入的视频地址有误，请检查后再试！", loading: " &nbsp;视频加载中，请等待……", clickToSelect: "点击选中", goToSource: "访问源视频", noVideo: " &nbsp; &nbsp;抱歉，找不到对应的视频，请重试！" }, formula: { "static": { lang_tab_common: "常用公式", lang_tab_symbol: "符号", lang_tab_letter: "字母" } } };;
var browser = UM.browser = function() { var e = navigator.userAgent.toLowerCase(),
            o = window.opera,
            t = { ie: /(msie\s|trident.*rv:)([\w.]+)/.test(e), opera: !!o && o.version, webkit: e.indexOf(" applewebkit/") > -1, mac: e.indexOf("macintosh") > -1, quirks: "BackCompat" == document.compatMode };
        t.gecko = "Gecko" == navigator.product && !t.webkit && !t.opera && !t.ie; var i = 0; if (t.ie) { var r = e.match(/(?:msie\s([\w.]+))/),
                a = e.match(/(?:trident.*rv:([\w.]+))/);
            i = r && a && r[1] && a[1] ? Math.max(1 * r[1], 1 * a[1]) : r && r[1] ? 1 * r[1] : a && a[1] ? 1 * a[1] : 0, t.ie11Compat = 11 == document.documentMode, t.ie9Compat = 9 == document.documentMode, t.ie8 = !!document.documentMode, t.ie8Compat = 8 == document.documentMode, t.ie7Compat = 7 == i && !document.documentMode || 7 == document.documentMode, t.ie6Compat = 7 > i || t.quirks, t.ie9above = i > 8, t.ie9below = 9 > i } if (t.gecko) { var d = e.match(/rv:([\d\.]+)/);
            d && (d = d[1].split("."), i = 1e4 * d[0] + 100 * (d[1] || 0) + 1 * (d[2] || 0)) } return /chrome\/(\d+\.\d)/i.test(e) && (t.chrome = +RegExp.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e) && (t.safari = +(RegExp.$1 || RegExp.$2)), t.opera && (i = parseFloat(o.version())), t.webkit && (i = parseFloat(e.match(/ applewebkit\/(\d+)/)[1])), t.version = i, t.isCompatible = !t.mobile && (t.ie && i >= 6 || t.gecko && i >= 10801 || t.opera && i >= 9.5 || t.air && i >= 1 || t.webkit && i >= 522 || !1), t }(),
    ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;;
var utils = UM.utils = { each: function(t, e, r) { if (null != t)
            if (t.length === +t.length) { for (var n = 0, o = t.length; o > n; n++)
                    if (e.call(r, t[n], n, t) === !1) return !1 } else
                for (var i in t)
                    if (t.hasOwnProperty(i) && e.call(r, t[i], i, t) === !1) return !1 }, makeInstance: function(t) { var e = new Function; return e.prototype = t, t = new e, e.prototype = null, t }, extend: function(t, e, r) { if (e)
            for (var n in e) r && t.hasOwnProperty(n) || (t[n] = e[n]); return t }, extend2: function(t) { for (var e = arguments, r = 1; r < e.length; r++) { var n = e[r]; for (var o in n) t.hasOwnProperty(o) || (t[o] = n[o]) } return t }, inherits: function(t, e) { var r = t.prototype,
            n = utils.makeInstance(e.prototype); return utils.extend(n, r, !0), t.prototype = n, n.constructor = t }, bind: function(t, e) { return function() { return t.apply(e, arguments) } }, defer: function(t, e, r) { var n; return function() { r && clearTimeout(n), n = setTimeout(t, e) } }, indexOf: function(t, e, r) { var n = -1; return r = this.isNumber(r) ? r : 0, this.each(t, function(t, o) { return o >= r && t === e ? (n = o, !1) : void 0 }), n }, removeItem: function(t, e) { for (var r = 0, n = t.length; n > r; r++) t[r] === e && (t.splice(r, 1), r--) }, trim: function(t) { return t.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "") }, listToMap: function(t) { if (!t) return {};
        t = utils.isArray(t) ? t : t.split(","); for (var e, r = 0, n = {}; e = t[r++];) n[e.toUpperCase()] = n[e] = 1; return n }, unhtml: function(t, e) { return t ? t.replace(e || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(t, e) { return e ? t : { "<": "&lt;", "&": "&amp;", '"': "&quot;", ">": "&gt;", "'": "&#39;" }[t] }) : "" }, html: function(t) { return t ? t.replace(/&((g|l|quo)t|amp|#39);/g, function(t) { return { "&lt;": "<", "&amp;": "&", "&quot;": '"', "&gt;": ">", "&#39;": "'" }[t] }) : "" }, cssStyleToDomStyle: function() { var t = document.createElement("div").style,
            e = { "float": void 0 != t.cssFloat ? "cssFloat" : void 0 != t.styleFloat ? "styleFloat" : "float" }; return function(t) { return e[t] || (e[t] = t.toLowerCase().replace(/-./g, function(t) { return t.charAt(1).toUpperCase() })) } }(), loadFile: function() {
        function t(t, r) { try { for (var n, o = 0; n = e[o++];)
                    if (n.doc === t && n.url == (r.src || r.href)) return n } catch (i) { return null } } var e = []; return function(r, n, o) { var i = t(r, n); if (i) return void(i.ready ? o && o() : i.funs.push(o)); if (e.push({ doc: r, url: n.src || n.href, funs: [o] }), !r.body) { var a = []; for (var u in n) "tag" != u && a.push(u + '="' + n[u] + '"'); return void r.write("<" + n.tag + " " + a.join(" ") + " ></" + n.tag + ">") } if (!n.id || !r.getElementById(n.id)) { var s = r.createElement(n.tag);
                delete n.tag; for (var u in n) s.setAttribute(u, n[u]);
                s.onload = s.onreadystatechange = function() { if (!this.readyState || /loaded|complete/.test(this.readyState)) { if (i = t(r, n), i.funs.length > 0) { i.ready = 1; for (var e; e = i.funs.pop();) e() } s.onload = s.onreadystatechange = null } }, s.onerror = function() { throw Error("The load " + (n.href || n.src) + " fails,check the url settings of file umeditor.config.js ") }, r.getElementsByTagName("head")[0].appendChild(s) } } }(), isEmptyObject: function(t) { if (null == t) return !0; if (this.isArray(t) || this.isString(t)) return 0 === t.length; for (var e in t)
            if (t.hasOwnProperty(e)) return !1; return !0 }, fixColor: function(t, e) { if (/color/i.test(t) && /rgba?/.test(e)) { var r = e.split(","); if (r.length > 3) return "";
            e = "#"; for (var n, o = 0; n = r[o++];) n = parseInt(n.replace(/[^\d]/gi, ""), 10).toString(16), e += 1 == n.length ? "0" + n : n;
            e = e.toUpperCase() } return e }, clone: function(t, e) { var r;
        e = e || {}; for (var n in t) t.hasOwnProperty(n) && (r = t[n], "object" == typeof r ? (e[n] = utils.isArray(r) ? [] : {}, utils.clone(t[n], e[n])) : e[n] = r); return e }, transUnitToPx: function(t) { if (!/(pt|cm)/.test(t)) return t; var e; switch (t.replace(/([\d.]+)(\w+)/, function(r, n, o) { t = n, e = o }), e) {
            case "cm":
                t = 25 * parseFloat(t); break;
            case "pt":
                t = Math.round(96 * parseFloat(t) / 72) } return t + (t ? "px" : "") }, cssRule: browser.ie && 11 != browser.version ? function(t, e, r) { var n, o;
        r = r || document, n = r.indexList ? r.indexList : r.indexList = {}; var i; if (n[t]) i = r.styleSheets[n[t]];
        else { if (void 0 === e) return "";
            i = r.createStyleSheet("", o = r.styleSheets.length), n[t] = o } return void 0 === e ? i.cssText : void(i.cssText = e || "") } : function(t, e, r) { r = r || document; var n, o = r.getElementsByTagName("head")[0]; if (!(n = r.getElementById(t))) { if (void 0 === e) return "";
            n = r.createElement("style"), n.id = t, o.appendChild(n) } return void 0 === e ? n.innerHTML : void("" !== e ? n.innerHTML = e : o.removeChild(n)) } };
utils.each(["String", "Function", "Array", "Number", "RegExp", "Object"], function(t) { UM.utils["is" + t] = function(e) { return Object.prototype.toString.apply(e) == "[object " + t + "]" } });;

function getListener(t, e, r) { var i; return e = e.toLowerCase(), (i = t.__allListeners || r && (t.__allListeners = {})) && (i[e] || r && (i[e] = [])) }
var EventBase = UM.EventBase = function() {};
EventBase.prototype = { addListener: function(t, e) { t = utils.trim(t).split(" "); for (var r, i = 0; r = t[i++];) getListener(this, r, !0).push(e) }, removeListener: function(t, e) { t = utils.trim(t).split(" "); for (var r, i = 0; r = t[i++];) utils.removeItem(getListener(this, r) || [], e) }, fireEvent: function() { var t = arguments[0];
        t = utils.trim(t).split(" "); for (var e, r = 0; e = t[r++];) { var i, s, n, a = getListener(this, e); if (a)
                for (n = a.length; n--;)
                    if (a[n]) { if (s = a[n].apply(this, arguments), s === !0) return s;
                        void 0 !== s && (i = s) }(s = this["on" + e.toLowerCase()]) && (i = s.apply(this, arguments)) } return i } };;
var dtd = dom.dtd = function() {
    function t(t) { for (var e in t) t[e.toUpperCase()] = t[e]; return t } var e = utils.extend2,
        a = t({ isindex: 1, fieldset: 1 }),
        o = t({ input: 1, button: 1, select: 1, textarea: 1, label: 1 }),
        r = e(t({ a: 1 }), o),
        i = e({ iframe: 1 }, r),
        d = t({ hr: 1, ul: 1, menu: 1, div: 1, blockquote: 1, noscript: 1, table: 1, center: 1, address: 1, dir: 1, pre: 1, h5: 1, dl: 1, h4: 1, noframes: 1, h6: 1, ol: 1, h1: 1, h3: 1, h2: 1 }),
        l = t({ ins: 1, del: 1, script: 1, style: 1 }),
        s = e(t({ b: 1, acronym: 1, bdo: 1, "var": 1, "#": 1, abbr: 1, code: 1, br: 1, i: 1, cite: 1, kbd: 1, u: 1, strike: 1, s: 1, tt: 1, strong: 1, q: 1, samp: 1, em: 1, dfn: 1, span: 1 }), l),
        n = e(t({ sub: 1, img: 1, embed: 1, object: 1, sup: 1, basefont: 1, map: 1, applet: 1, font: 1, big: 1, small: 1 }), s),
        b = e(t({ p: 1 }), n),
        p = e(t({ iframe: 1 }), n, o),
        m = t({ img: 1, embed: 1, noscript: 1, br: 1, kbd: 1, center: 1, button: 1, basefont: 1, h5: 1, h4: 1, samp: 1, h6: 1, ol: 1, h1: 1, h3: 1, h2: 1, form: 1, font: 1, "#": 1, select: 1, menu: 1, ins: 1, abbr: 1, label: 1, code: 1, table: 1, script: 1, cite: 1, input: 1, iframe: 1, strong: 1, textarea: 1, noframes: 1, big: 1, small: 1, span: 1, hr: 1, sub: 1, bdo: 1, "var": 1, div: 1, object: 1, sup: 1, strike: 1, dir: 1, map: 1, dl: 1, applet: 1, del: 1, isindex: 1, fieldset: 1, ul: 1, b: 1, acronym: 1, a: 1, blockquote: 1, i: 1, u: 1, s: 1, tt: 1, address: 1, q: 1, pre: 1, p: 1, em: 1, dfn: 1 }),
        c = e(t({ a: 0 }), p),
        h = t({ tr: 1 }),
        u = t({ "#": 1 }),
        f = e(t({ param: 1 }), m),
        y = e(t({ form: 1 }), a, i, d, b),
        g = t({ li: 1, ol: 1, ul: 1 }),
        k = t({ style: 1, script: 1 }),
        $ = t({ base: 1, link: 1, meta: 1, title: 1 }),
        v = e($, k),
        x = t({ head: 1, body: 1 }),
        q = t({ html: 1 }),
        C = t({ address: 1, blockquote: 1, center: 1, dir: 1, div: 1, dl: 1, fieldset: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, hr: 1, isindex: 1, menu: 1, noframes: 1, ol: 1, p: 1, pre: 1, table: 1, ul: 1 }),
        j = t({ area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1, input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1, track: 1, wbr: 1 }); return t({ $nonBodyContent: e(q, x, $), $block: C, $inline: c, $inlineWithA: e(t({ a: 1 }), c), $body: e(t({ script: 1, style: 1 }), C), $cdata: t({ script: 1, style: 1 }), $empty: j, $nonChild: t({ iframe: 1, textarea: 1 }), $listItem: t({ dd: 1, dt: 1, li: 1 }), $list: t({ ul: 1, ol: 1, dl: 1 }), $isNotEmpty: t({ table: 1, ul: 1, ol: 1, dl: 1, iframe: 1, area: 1, base: 1, col: 1, hr: 1, img: 1, embed: 1, input: 1, link: 1, meta: 1, param: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }), $removeEmpty: t({ a: 1, abbr: 1, acronym: 1, address: 1, b: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, q: 1, s: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, tt: 1, u: 1, "var": 1 }), $removeEmptyBlock: t({ p: 1, div: 1 }), $tableContent: t({ caption: 1, col: 1, colgroup: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1, table: 1 }), $notTransContent: t({ pre: 1, script: 1, style: 1, textarea: 1 }), html: x, head: v, style: u, script: u, body: y, base: {}, link: {}, meta: {}, title: u, col: {}, tr: t({ td: 1, th: 1 }), img: {}, embed: {}, colgroup: t({ thead: 1, col: 1, tbody: 1, tr: 1, tfoot: 1 }), noscript: y, td: y, br: {}, th: y, center: y, kbd: c, button: e(b, d), basefont: {}, h5: c, h4: c, samp: c, h6: c, ol: g, h1: c, h3: c, option: u, h2: c, form: e(a, i, d, b), select: t({ optgroup: 1, option: 1 }), font: c, ins: c, menu: g, abbr: c, label: c, table: t({ thead: 1, col: 1, tbody: 1, tr: 1, colgroup: 1, caption: 1, tfoot: 1 }), code: c, tfoot: h, cite: c, li: y, input: {}, iframe: y, strong: c, textarea: u, noframes: y, big: c, small: c, span: t({ "#": 1, br: 1, b: 1, strong: 1, u: 1, i: 1, em: 1, sub: 1, sup: 1, strike: 1, span: 1 }), hr: c, dt: c, sub: c, optgroup: t({ option: 1 }), param: {}, bdo: c, "var": c, div: y, object: f, sup: c, dd: y, strike: c, area: {}, dir: g, map: e(t({ area: 1, form: 1, p: 1 }), a, l, d), applet: f, dl: t({ dt: 1, dd: 1 }), del: c, isindex: {}, fieldset: e(t({ legend: 1 }), m), thead: h, ul: g, acronym: c, b: c, a: e(t({ a: 1 }), p), blockquote: e(t({ td: 1, tr: 1, tbody: 1, li: 1 }), y), caption: c, i: c, u: c, tbody: h, s: c, address: e(i, b), tt: c, legend: c, q: c, pre: e(s, r), p: e(t({ a: 1 }), c), em: c, dfn: c }) }();;

function getDomNode(e, t, r, n, i, o) { var l, s = n && e[t]; for (!s && (s = e[r]); !s && (l = (l || e).parentNode);) { if ("BODY" == l.tagName || o && !o(l)) return null;
        s = l[r] } return s && i && !i(s) ? getDomNode(s, t, r, !1, i) : s }
var attrFix = ie && browser.version < 9 ? { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder" } : { tabindex: "tabIndex", readonly: "readOnly" },
    styleBlock = utils.listToMap(["-webkit-box", "-moz-box", "block", "list-item", "table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption"]),
    domUtils = dom.domUtils = { NODE_ELEMENT: 1, NODE_DOCUMENT: 9, NODE_TEXT: 3, NODE_COMMENT: 8, NODE_DOCUMENT_FRAGMENT: 11, POSITION_IDENTICAL: 0, POSITION_DISCONNECTED: 1, POSITION_FOLLOWING: 2, POSITION_PRECEDING: 4, POSITION_IS_CONTAINED: 8, POSITION_CONTAINS: 16, fillChar: ie && "6" == browser.version ? "﻿" : "​", keys: { 8: 1, 46: 1, 16: 1, 17: 1, 18: 1, 37: 1, 38: 1, 39: 1, 40: 1, 13: 1 }, breakParent: function(e, t) { var r, n, i, o = e,
                l = e;
            do { for (o = o.parentNode, n ? (r = o.cloneNode(!1), r.appendChild(n), n = r, r = o.cloneNode(!1), r.appendChild(i), i = r) : (n = o.cloneNode(!1), i = n.cloneNode(!1)); r = l.previousSibling;) n.insertBefore(r, n.firstChild); for (; r = l.nextSibling;) i.appendChild(r);
                l = o } while (t !== o); return r = t.parentNode, r.insertBefore(n, t), r.insertBefore(i, t), r.insertBefore(e, i), domUtils.remove(t), e }, trimWhiteTextNode: function(e) {
            function t(t) { for (var r;
                    (r = e[t]) && 3 == r.nodeType && domUtils.isWhitespace(r);) e.removeChild(r) } t("firstChild"), t("lastChild") }, getPosition: function(e, t) { if (e === t) return 0; var r, n = [e],
                i = [t]; for (r = e; r = r.parentNode;) { if (r === t) return 10;
                n.push(r) } for (r = t; r = r.parentNode;) { if (r === e) return 20;
                i.push(r) } if (n.reverse(), i.reverse(), n[0] !== i[0]) return 1; for (var o = -1; o++, n[o] === i[o];); for (e = n[o], t = i[o]; e = e.nextSibling;)
                if (e === t) return 4; return 2 }, getNodeIndex: function(e, t) { for (var r = e, n = 0; r = r.previousSibling;) t && 3 == r.nodeType ? r.nodeType != r.nextSibling.nodeType && n++ : n++; return n }, inDoc: function(e, t) { return 10 == domUtils.getPosition(e, t) }, findParent: function(e, t, r) { if (e && !domUtils.isBody(e))
                for (e = r ? e : e.parentNode; e;) { if (!t || t(e) || domUtils.isBody(e)) return t && !t(e) && domUtils.isBody(e) ? null : e;
                    e = e.parentNode }
            return null }, findParentByTagName: function(e, t, r, n) { return t = utils.listToMap(utils.isArray(t) ? t : [t]), domUtils.findParent(e, function(e) { return t[e.tagName] && !(n && n(e)) }, r) }, findParents: function(e, t, r, n) { for (var i = t && (r && r(e) || !r) ? [e] : []; e = domUtils.findParent(e, r);) i.push(e); return n ? i : i.reverse() }, insertAfter: function(e, t) { return e.parentNode.insertBefore(t, e.nextSibling) }, remove: function(e, t) { var r, n = e.parentNode; if (n) { if (t && e.hasChildNodes())
                    for (; r = e.firstChild;) n.insertBefore(r, e);
                n.removeChild(e) } return e }, getNextDomNode: function(e, t, r, n) { return getDomNode(e, "firstChild", "nextSibling", t, r, n) }, getPreDomNode: function(e, t, r, n) { return getDomNode(e, "lastChild", "previousSibling", t, r, n) }, isBookmarkNode: function(e) { return 1 == e.nodeType && e.id && /^_baidu_bookmark_/i.test(e.id) }, getWindow: function(e) { var t = e.ownerDocument || e; return t.defaultView || t.parentWindow }, getCommonAncestor: function(e, t) { if (e === t) return e; for (var r = [e], n = [t], i = e, o = -1; i = i.parentNode;) { if (i === t) return i;
                r.push(i) } for (i = t; i = i.parentNode;) { if (i === e) return i;
                n.push(i) } for (r.reverse(), n.reverse(); o++, r[o] === n[o];); return 0 == o ? null : r[o - 1] }, clearEmptySibling: function(e, t, r) {
            function n(e, t) { for (var r; e && !domUtils.isBookmarkNode(e) && (domUtils.isEmptyInlineElement(e) || !new RegExp("[^	\n\r" + domUtils.fillChar + "]").test(e.nodeValue));) r = e[t], domUtils.remove(e), e = r }!t && n(e.nextSibling, "nextSibling"), !r && n(e.previousSibling, "previousSibling") }, split: function(e, t) { var r = e.ownerDocument; if (browser.ie && t == e.nodeValue.length) { var n = r.createTextNode(""); return domUtils.insertAfter(e, n) } var i = e.splitText(t); if (browser.ie8) { var o = r.createTextNode("");
                domUtils.insertAfter(i, o), domUtils.remove(o) } return i }, isWhitespace: function(e) { return !new RegExp("[^ 	\n\r" + domUtils.fillChar + "]").test(e.nodeValue) }, getXY: function(e) { for (var t = 0, r = 0; e.offsetParent;) r += e.offsetTop, t += e.offsetLeft, e = e.offsetParent; return { x: t, y: r } }, isEmptyInlineElement: function(e) { if (1 != e.nodeType || !dtd.$removeEmpty[e.tagName]) return 0; for (e = e.firstChild; e;) { if (domUtils.isBookmarkNode(e)) return 0; if (1 == e.nodeType && !domUtils.isEmptyInlineElement(e) || 3 == e.nodeType && !domUtils.isWhitespace(e)) return 0;
                e = e.nextSibling } return 1 }, isBlockElm: function(e) { return 1 == e.nodeType && (dtd.$block[e.tagName] || styleBlock[domUtils.getComputedStyle(e, "display")]) && !dtd.$nonChild[e.tagName] }, getElementsByTagName: function(e, t, r) { if (r && utils.isString(r)) { var n = r;
                r = function(e) { var t = !1; return $.each(utils.trim(n).replace(/[ ]{2,}/g, " ").split(" "), function(r, n) { return $(e).hasClass(n) ? (t = !0, !1) : void 0 }), t } } t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" "); for (var i, o = [], l = 0; i = t[l++];)
                for (var s, a = e.getElementsByTagName(i), u = 0; s = a[u++];)(!r || r(s)) && o.push(s); return o }, unSelectable: ie && browser.ie9below || browser.opera ? function(e) { e.onselectstart = function() { return !1 }, e.onclick = e.onkeyup = e.onkeydown = function() { return !1 }, e.unselectable = "on", e.setAttribute("unselectable", "on"); for (var t, r = 0; t = e.all[r++];) switch (t.tagName.toLowerCase()) {
                case "iframe":
                case "textarea":
                case "input":
                case "select":
                    break;
                default:
                    t.unselectable = "on", e.setAttribute("unselectable", "on") } } : function(e) { e.style.MozUserSelect = e.style.webkitUserSelect = e.style.msUserSelect = e.style.KhtmlUserSelect = "none" }, removeAttributes: function(e, t) { t = utils.isArray(t) ? t : utils.trim(t).replace(/[ ]{2,}/g, " ").split(" "); for (var r, n = 0; r = t[n++];) { switch (r = attrFix[r] || r) {
                    case "className":
                        e[r] = ""; break;
                    case "style":
                        e.style.cssText = "", !browser.ie && e.removeAttributeNode(e.getAttributeNode("style")) } e.removeAttribute(r) } }, createElement: function(e, t, r) { return domUtils.setAttributes(e.createElement(t), r) }, setAttributes: function(e, t) { for (var r in t)
                if (t.hasOwnProperty(r)) { var n = t[r]; switch (r) {
                        case "class":
                            e.className = n; break;
                        case "style":
                            e.style.cssText = e.style.cssText + ";" + n; break;
                        case "innerHTML":
                            e[r] = n; break;
                        case "value":
                            e.value = n; break;
                        default:
                            e.setAttribute(attrFix[r] || r, n) } }
            return e }, getComputedStyle: function(e, t) { return utils.transUnitToPx(utils.fixColor(t, $(e).css(t))) }, preventDefault: function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }, removeStyle: function(e, t) { browser.ie ? ("color" == t && (t = "(^|;)" + t), e.style.cssText = e.style.cssText.replace(new RegExp(t + "[^:]*:[^;]+;?", "ig"), "")) : e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(utils.cssStyleToDomStyle(t)), e.style.cssText || domUtils.removeAttributes(e, ["style"]) }, getStyle: function(e, t) { var r = e.style[utils.cssStyleToDomStyle(t)]; return utils.fixColor(t, r) }, setStyle: function(e, t, r) { e.style[utils.cssStyleToDomStyle(t)] = r, utils.trim(e.style.cssText) || this.removeAttributes(e, "style") }, removeDirtyAttr: function(e) { for (var t, r = 0, n = e.getElementsByTagName("*"); t = n[r++];) t.removeAttribute("_moz_dirty");
            e.removeAttribute("_moz_dirty") }, getChildCount: function(e, t) { var r = 0,
                n = e.firstChild; for (t = t || function() { return 1 }; n;) t(n) && r++, n = n.nextSibling; return r }, isEmptyNode: function(e) { return !e.firstChild || 0 == domUtils.getChildCount(e, function(e) { return !domUtils.isBr(e) && !domUtils.isBookmarkNode(e) && !domUtils.isWhitespace(e) }) }, isBr: function(e) { return 1 == e.nodeType && "BR" == e.tagName }, isFillChar: function(e, t) { return 3 == e.nodeType && !e.nodeValue.replace(new RegExp((t ? "^" : "") + domUtils.fillChar), "").length }, isEmptyBlock: function(e, t) { if (1 != e.nodeType) return 0; if (t = t || new RegExp("[ 	\r\n" + domUtils.fillChar + "]", "g"), e[browser.ie ? "innerText" : "textContent"].replace(t, "").length > 0) return 0; for (var r in dtd.$isNotEmpty)
                if (e.getElementsByTagName(r).length) return 0; return 1 }, isCustomeNode: function(e) { return 1 == e.nodeType && e.getAttribute("_ue_custom_node_") }, fillNode: function(e, t) { var r = browser.ie ? e.createTextNode(domUtils.fillChar) : e.createElement("br");
            t.innerHTML = "", t.appendChild(r) }, isBoundaryNode: function(e, t) { for (var r; !domUtils.isBody(e);)
                if (r = e, e = e.parentNode, r !== e[t]) return !1; return !0 }, isFillChar: function(e, t) { return 3 == e.nodeType && !e.nodeValue.replace(new RegExp((t ? "^" : "") + domUtils.fillChar), "").length }, isBody: function(e) { return $(e).hasClass("edui-body-container") } },
    fillCharReg = new RegExp(domUtils.fillChar, "g");;
! function() {
    function e(e) { e.collapsed = e.startContainer && e.endContainer && e.startContainer === e.endContainer && e.startOffset == e.endOffset }

    function t(e) { return !e.collapsed && 1 == e.startContainer.nodeType && e.startContainer === e.endContainer && e.endOffset - e.startOffset == 1 }

    function n(t, n, s, r) { return 1 == n.nodeType && (dtd.$empty[n.tagName] || dtd.$nonChild[n.tagName]) && (s = domUtils.getNodeIndex(n) + (t ? 0 : 1), n = n.parentNode), t ? (r.startContainer = n, r.startOffset = s, r.endContainer || r.collapse(!0)) : (r.endContainer = n, r.endOffset = s, r.startContainer || r.collapse(!1)), e(r), r }

    function s(e, t) { try { if (i && domUtils.inDoc(i, e))
                if (i.nodeValue.replace(fillCharReg, "").length) i.nodeValue = i.nodeValue.replace(fillCharReg, "");
                else { var n = i.parentNode; for (domUtils.remove(i); n && domUtils.isEmptyInlineElement(n) && (browser.safari ? !(domUtils.getPosition(n, t) & domUtils.POSITION_CONTAINS) : !n.contains(t));) i = n.parentNode, domUtils.remove(n), n = i } } catch (s) {} }

    function r(e, t) { var n; for (e = e[t]; e && domUtils.isFillChar(e);) n = e[t], domUtils.remove(e), e = n }

    function o(e, t) { var n, s, r = e.startContainer,
            o = e.endContainer,
            i = e.startOffset,
            d = e.endOffset,
            a = e.document,
            l = a.createDocumentFragment(); if (1 == r.nodeType && (r = r.childNodes[i] || (n = r.appendChild(a.createTextNode("")))), 1 == o.nodeType && (o = o.childNodes[d] || (s = o.appendChild(a.createTextNode("")))), r === o && 3 == r.nodeType) return l.appendChild(a.createTextNode(r.substringData(i, d - i))), t && (r.deleteData(i, d - i), e.collapse(!0)), l; for (var f, h, c = l, u = domUtils.findParents(r, !0), p = domUtils.findParents(o, !0), m = 0; u[m] == p[m];) m++; for (var C, g = m; C = u[g]; g++) { for (f = C.nextSibling, C == r ? n || (3 == e.startContainer.nodeType ? (c.appendChild(a.createTextNode(r.nodeValue.slice(i))), t && r.deleteData(i, r.nodeValue.length - i)) : c.appendChild(t ? r : r.cloneNode(!0))) : (h = C.cloneNode(!1), c.appendChild(h)); f && f !== o && f !== p[g];) C = f.nextSibling, c.appendChild(t ? f : f.cloneNode(!0)), f = C;
            c = h } c = l, u[m] || (c.appendChild(u[m - 1].cloneNode(!1)), c = c.firstChild); for (var N, g = m; N = p[g]; g++) { if (f = N.previousSibling, N == o ? s || 3 != e.endContainer.nodeType || (c.appendChild(a.createTextNode(o.substringData(0, d))), t && o.deleteData(0, d)) : (h = N.cloneNode(!1), c.appendChild(h)), g != m || !u[m])
                for (; f && f !== r;) N = f.previousSibling, c.insertBefore(t ? f : f.cloneNode(!0), c.firstChild), f = N;
            c = h } return t && e.setStartBefore(p[m] ? u[m] ? p[m] : u[m - 1] : p[m - 1]).collapse(!0), n && domUtils.remove(n), s && domUtils.remove(s), l } var i, d = 0,
        a = domUtils.fillChar,
        l = dom.Range = function(e, t) { var n = this;
            n.startContainer = n.startOffset = n.endContainer = n.endOffset = null, n.document = e, n.collapsed = !0, n.body = t };
    l.prototype = { deleteContents: function() { var e; return this.collapsed || o(this, 1), browser.webkit && (e = this.startContainer, 3 != e.nodeType || e.nodeValue.length || (this.setStartBefore(e).collapse(!0), domUtils.remove(e))), this }, inFillChar: function() { var e = this.startContainer; return this.collapsed && 3 == e.nodeType && e.nodeValue.replace(new RegExp("^" + domUtils.fillChar), "").length + 1 == e.nodeValue.length ? !0 : !1 }, setStart: function(e, t) { return n(!0, e, t, this) }, setEnd: function(e, t) { return n(!1, e, t, this) }, setStartAfter: function(e) { return this.setStart(e.parentNode, domUtils.getNodeIndex(e) + 1) }, setStartBefore: function(e) { return this.setStart(e.parentNode, domUtils.getNodeIndex(e)) }, setEndAfter: function(e) { return this.setEnd(e.parentNode, domUtils.getNodeIndex(e) + 1) }, setEndBefore: function(e) { return this.setEnd(e.parentNode, domUtils.getNodeIndex(e)) }, setStartAtFirst: function(e) { return this.setStart(e, 0) }, setStartAtLast: function(e) { return this.setStart(e, 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length) }, setEndAtFirst: function(e) { return this.setEnd(e, 0) }, setEndAtLast: function(e) { return this.setEnd(e, 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length) }, selectNode: function(e) { return this.setStartBefore(e).setEndAfter(e) }, selectNodeContents: function(e) { return this.setStart(e, 0).setEndAtLast(e) }, cloneRange: function() { var e = this; return new l(e.document).setStart(e.startContainer, e.startOffset).setEnd(e.endContainer, e.endOffset) }, collapse: function(e) { var t = this; return e ? (t.endContainer = t.startContainer, t.endOffset = t.startOffset) : (t.startContainer = t.endContainer, t.startOffset = t.endOffset), t.collapsed = !0, t }, shrinkBoundary: function(e) {
            function t(e) { return 1 == e.nodeType && !domUtils.isBookmarkNode(e) && !dtd.$empty[e.tagName] && !dtd.$nonChild[e.tagName] } for (var n, s = this, r = s.collapsed; 1 == s.startContainer.nodeType && (n = s.startContainer.childNodes[s.startOffset]) && t(n);) s.setStart(n, 0); if (r) return s.collapse(!0); if (!e)
                for (; 1 == s.endContainer.nodeType && s.endOffset > 0 && (n = s.endContainer.childNodes[s.endOffset - 1]) && t(n);) s.setEnd(n, n.childNodes.length); return s }, trimBoundary: function(e) { this.txtToElmBoundary(); var t = this.startContainer,
                n = this.startOffset,
                s = this.collapsed,
                r = this.endContainer; if (3 == t.nodeType) { if (0 == n) this.setStartBefore(t);
                else if (n >= t.nodeValue.length) this.setStartAfter(t);
                else { var o = domUtils.split(t, n);
                    t === r ? this.setEnd(o, this.endOffset - n) : t.parentNode === r && (this.endOffset += 1), this.setStartBefore(o) } if (s) return this.collapse(!0) } return e || (n = this.endOffset, r = this.endContainer, 3 == r.nodeType && (0 == n ? this.setEndBefore(r) : (n < r.nodeValue.length && domUtils.split(r, n), this.setEndAfter(r)))), this }, txtToElmBoundary: function(e) {
            function t(e, t) { var n = e[t + "Container"],
                    s = e[t + "Offset"];
                3 == n.nodeType && (s ? s >= n.nodeValue.length && e["set" + t.replace(/(\w)/, function(e) { return e.toUpperCase() }) + "After"](n) : e["set" + t.replace(/(\w)/, function(e) { return e.toUpperCase() }) + "Before"](n)) } return (e || !this.collapsed) && (t(this, "start"), t(this, "end")), this }, insertNode: function(e) { var t = e,
                n = 1;
            11 == e.nodeType && (t = e.firstChild, n = e.childNodes.length), this.trimBoundary(!0); var s = this.startContainer,
                r = this.startOffset,
                o = s.childNodes[r]; return o ? s.insertBefore(e, o) : s.appendChild(e), t.parentNode === this.endContainer && (this.endOffset = this.endOffset + n), this.setStartBefore(t) }, setCursor: function(e, t) { return this.collapse(!e).select(t) }, createBookmark: function(e, t) { var n, s = this.document.createElement("span"); return s.style.cssText = "display:none;line-height:0px;", s.appendChild(this.document.createTextNode("‍")), s.id = "_baidu_bookmark_start_" + (t ? "" : d++), this.collapsed || (n = s.cloneNode(!0), n.id = "_baidu_bookmark_end_" + (t ? "" : d++)), this.insertNode(s), n && this.collapse().insertNode(n).setEndBefore(n), this.setStartAfter(s), { start: e ? s.id : s, end: n ? e ? n.id : n : null, id: e } }, moveToBookmark: function(e) { var t = e.id ? this.document.getElementById(e.start) : e.start,
                n = e.end && e.id ? this.document.getElementById(e.end) : e.end; return this.setStartBefore(t), domUtils.remove(t), n ? (this.setEndBefore(n), domUtils.remove(n)) : this.collapse(!0), this }, adjustmentBoundary: function() { if (!this.collapsed) { for (; !domUtils.isBody(this.startContainer) && this.startOffset == this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length && this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setStartAfter(this.startContainer); for (; !domUtils.isBody(this.endContainer) && !this.endOffset && this.endContainer[3 == this.endContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setEndBefore(this.endContainer) } return this }, getClosedNode: function() { var e; if (!this.collapsed) { var n = this.cloneRange().adjustmentBoundary().shrinkBoundary(); if (t(n)) { var s = n.startContainer.childNodes[n.startOffset];
                    s && 1 == s.nodeType && (dtd.$empty[s.tagName] || dtd.$nonChild[s.tagName]) && (e = s) } } return e }, select: browser.ie ? function(e, t) { var n;
            this.collapsed || this.shrinkBoundary(); var o = this.getClosedNode(); if (o && !t) { try { n = this.document.body.createControlRange(), n.addElement(o), n.select() } catch (d) {} return this } var l, f = this.createBookmark(),
                h = f.start; if (n = this.document.body.createTextRange(), n.moveToElementText(h), n.moveStart("character", 1), this.collapsed) { if (!e && 3 != this.startContainer.nodeType) { var c = this.document.createTextNode(a),
                        u = this.document.createElement("span");
                    u.appendChild(this.document.createTextNode(a)), h.parentNode.insertBefore(u, h), h.parentNode.insertBefore(c, h), s(this.document, c), i = c, r(u, "previousSibling"), r(h, "nextSibling"), n.moveStart("character", -1), n.collapse(!0) } } else { var p = this.document.body.createTextRange();
                l = f.end, p.moveToElementText(l), n.setEndPoint("EndToEnd", p) } this.moveToBookmark(f), u && domUtils.remove(u); try { n.select() } catch (d) {} return this } : function(e) {
            function t(e) {
                function t(t, n, s) { 3 == t.nodeType && t.nodeValue.length < n && (e[s + "Offset"] = t.nodeValue.length) } t(e.startContainer, e.startOffset, "start"), t(e.endContainer, e.endOffset, "end") } var n, o = domUtils.getWindow(this.document),
                d = o.getSelection(); if (browser.gecko ? this.body.focus() : o.focus(), d) { if (d.removeAllRanges(), this.collapsed && !e) { var l = this.startContainer,
                        f = l;
                    1 == l.nodeType && (f = l.childNodes[this.startOffset]), 3 == l.nodeType && this.startOffset || (f ? f.previousSibling && 3 == f.previousSibling.nodeType : l.lastChild && 3 == l.lastChild.nodeType) || (n = this.document.createTextNode(a), this.insertNode(n), s(this.document, n), r(n, "previousSibling"), r(n, "nextSibling"), i = n, this.setStart(n, browser.webkit ? 1 : 0).collapse(!0)) } var h = this.document.createRange(); if (this.collapsed && browser.opera && 1 == this.startContainer.nodeType) { var f = this.startContainer.childNodes[this.startOffset]; if (f) { for (; f && domUtils.isBlockElm(f) && 1 == f.nodeType && f.childNodes[0];) f = f.childNodes[0];
                        f && this.setStartBefore(f).collapse(!0) } else f = this.startContainer.lastChild, f && domUtils.isBr(f) && this.setStartBefore(f).collapse(!0) } t(this), h.setStart(this.startContainer, this.startOffset), h.setEnd(this.endContainer, this.endOffset), d.addRange(h) } return this }, createAddress: function(e, t) {
            function n(e) { for (var n, s = e ? r.startContainer : r.endContainer, o = domUtils.findParents(s, !0, function(e) { return !domUtils.isBody(e) }), i = [], d = 0; n = o[d++];) i.push(domUtils.getNodeIndex(n, t)); var a = 0; if (t)
                    if (3 == s.nodeType) { for (var l = s.previousSibling; l && 3 == l.nodeType;) a += l.nodeValue.replace(fillCharReg, "").length, l = l.previousSibling;
                        a += e ? r.startOffset : r.endOffset } else if (s = s.childNodes[e ? r.startOffset : r.endOffset]) a = domUtils.getNodeIndex(s, t);
                else { s = e ? r.startContainer : r.endContainer; for (var f = s.firstChild; f;)
                        if (domUtils.isFillChar(f)) f = f.nextSibling;
                        else if (a++, 3 == f.nodeType)
                        for (; f && 3 == f.nodeType;) f = f.nextSibling;
                    else f = f.nextSibling } else a = e ? domUtils.isFillChar(s) ? 0 : r.startOffset : r.endOffset; return 0 > a && (a = 0), i.push(a), i } var s = {},
                r = this; return s.startAddress = n(!0), e || (s.endAddress = r.collapsed ? [].concat(s.startAddress) : n()), s }, moveToAddress: function(e, t) {
            function n(e, t) { for (var n, r, o, i = s.body, d = 0, a = e.length; a > d; d++)
                    if (o = e[d], n = i, i = i.childNodes[o], !i) { r = o; break }
                t ? i ? s.setStartBefore(i) : s.setStart(n, r) : i ? s.setEndBefore(i) : s.setEnd(n, r) } var s = this; return n(e.startAddress, !0), !t && e.endAddress && n(e.endAddress), s }, equals: function(e) { for (var t in this)
                if (this.hasOwnProperty(t) && this[t] !== e[t]) return !1; return !0 }, scrollIntoView: function() { var e = $('<span style="padding:0;margin:0;display:block;border:0">&nbsp;</span>');
            this.cloneRange().insertNode(e.get(0)); var t = $(window).scrollTop(),
                n = $(window).height(),
                s = e.offset().top;
            (t - n > s || s > t + n) && (s > t + n ? window.scrollTo(0, s - n + e.height()) : window.scrollTo(0, t - s)), e.remove() }, getOffset: function() { var e = this.createBookmark(),
                t = $(e.start).css("display", "inline-block").offset(); return this.moveToBookmark(e), t } } }();;
! function() {
    function t(t, e) { var n = domUtils.getNodeIndex;
        t = t.duplicate(), t.collapse(e); var a = t.parentElement(); if (!a.hasChildNodes()) return { container: a, offset: 0 }; for (var r, i, o = a.children, s = t.duplicate(), l = 0, c = o.length - 1, h = -1; c >= l;) { h = Math.floor((l + c) / 2), r = o[h], s.moveToElementText(r); var d = s.compareEndPoints("StartToStart", t); if (d > 0) c = h - 1;
            else { if (!(0 > d)) return { container: a, offset: n(r) };
                l = h + 1 } } if (-1 == h) { if (s.moveToElementText(a), s.setEndPoint("StartToStart", t), i = s.text.replace(/(\r\n|\r)/g, "\n").length, o = a.childNodes, !i) return r = o[o.length - 1], { container: r, offset: r.nodeValue.length }; for (var g = o.length; i > 0;) i -= o[--g].nodeValue.length; return { container: o[g], offset: -i } } if (s.collapse(d > 0), s.setEndPoint(d > 0 ? "StartToStart" : "EndToStart", t), i = s.text.replace(/(\r\n|\r)/g, "\n").length, !i) return dtd.$empty[r.tagName] || dtd.$nonChild[r.tagName] ? { container: a, offset: n(r) + (d > 0 ? 0 : 1) } : { container: r, offset: d > 0 ? 0 : r.childNodes.length }; for (; i > 0;) try { var f = r;
            r = r[d > 0 ? "previousSibling" : "nextSibling"], i -= r.nodeValue.length } catch (u) { return { container: a, offset: n(f) } }
        return { container: r, offset: d > 0 ? -i : r.nodeValue.length + i } }

    function e(e, n) { if (e.item) n.selectNode(e.item(0));
        else { var a = t(e, !0);
            n.setStart(a.container, a.offset), 0 != e.compareEndPoints("StartToEnd", e) && (a = t(e, !1), n.setEnd(a.container, a.offset)) } return n }

    function n(t, e) { var n; try { n = t.getNative(e).createRange() } catch (a) { return null } var r = n.item ? n.item(0) : n.parentElement(); return (r.ownerDocument || r) === t.document ? n : null } var a = dom.Selection = function(t, e) { var a = this;
        a.document = t, a.body = e, browser.ie9below && $(e).on("beforedeactivate", function() { a._bakIERange = a.getIERange() }).on("activate", function() { try { var t = n(a);
                t && a.rangeInBody(t) || !a._bakIERange || a._bakIERange.select() } catch (e) {} a._bakIERange = null }) };
    a.prototype = { hasNativeRange: function() { var t; if (!browser.ie || browser.ie9above) { var e = this.getNative(); if (!e.rangeCount) return !1;
                t = e.getRangeAt(0) } else t = n(this); return this.rangeInBody(t) }, getNative: function(t) { var e = this.document; try { return e ? browser.ie9below || t ? e.selection : domUtils.getWindow(e).getSelection() : null } catch (n) { return null } }, getIERange: function(t) { var e = n(this, t); return e && this.rangeInBody(e, t) || !this._bakIERange ? e : this._bakIERange }, rangeInBody: function(t, e) { var n = browser.ie9below || e ? t.item ? t.item() : t.parentElement() : t.startContainer; return n === this.body || domUtils.inDoc(n, this.body) }, cache: function() { this.clear(), this._cachedRange = this.getRange(), this._cachedStartElement = this.getStart(), this._cachedStartElementPath = this.getStartElementPath() }, getStartElementPath: function() { if (this._cachedStartElementPath) return this._cachedStartElementPath; var t = this.getStart(); return t ? domUtils.findParents(t, !0, null, !0) : [] }, clear: function() { this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null }, isFocus: function() { return this.hasNativeRange() }, getRange: function() {
            function t(t) { for (var e = n.body.firstChild, a = t.collapsed; e && e.firstChild;) t.setStart(e, 0), e = e.firstChild;
                t.startContainer || t.setStart(n.body, 0), a && t.collapse(!0) } var n = this; if (null != n._cachedRange) return this._cachedRange; var a = new dom.Range(n.document, n.body); if (browser.ie9below) { var r = n.getIERange(); if (r && this.rangeInBody(r)) try { e(r, a) } catch (i) { t(a) } else t(a) } else { var o = n.getNative(); if (o && o.rangeCount && n.rangeInBody(o.getRangeAt(0))) { var s = o.getRangeAt(0),
                        l = o.getRangeAt(o.rangeCount - 1);
                    a.setStart(s.startContainer, s.startOffset).setEnd(l.endContainer, l.endOffset), a.collapsed && domUtils.isBody(a.startContainer) && !a.startOffset && t(a) } else { if (this._bakRange && (this._bakRange.startContainer === this.body || domUtils.inDoc(this._bakRange.startContainer, this.body))) return this._bakRange;
                    t(a) } } return this._bakRange = a }, getStart: function() { if (this._cachedStartElement) return this._cachedStartElement; var t, e, n, a, r = browser.ie9below ? this.getIERange() : this.getRange(); if (browser.ie9below) { if (!r) return this.document.body.firstChild; if (r.item) return r.item(0); for (t = r.duplicate(), t.text.length > 0 && t.moveStart("character", 1), t.collapse(1), e = t.parentElement(), a = n = r.parentElement(); n = n.parentNode;)
                    if (n == e) { e = a; break } } else if (e = r.startContainer, 1 == e.nodeType && e.hasChildNodes() && (e = e.childNodes[Math.min(e.childNodes.length - 1, r.startOffset)]), 3 == e.nodeType) return e.parentNode; return e }, getText: function() { var t, e; return this.isFocus() && (t = this.getNative()) ? (e = browser.ie9below ? t.createRange() : t.getRangeAt(0), browser.ie9below ? e.text : e.toString()) : "" } } }();;
! function() {
    function e(e, t) { var n; if (t.textarea)
            if (utils.isString(t.textarea)) { for (var i, o = 0, a = domUtils.getElementsByTagName(e, "textarea"); i = a[o++];)
                    if (i.id == "umeditor_textarea_" + t.options.textarea) { n = i; break } } else n = t.textarea;
        n || (e.appendChild(n = domUtils.createElement(document, "textarea", { name: t.options.textarea, id: "umeditor_textarea_" + t.options.textarea, style: "display:none" })), t.textarea = n), n.value = t.hasContents() ? t.options.allHtmlEnabled ? t.getAllHtml() : t.getContent(null, null, !0) : "" }

    function t(e) { for (var t in UM.plugins) - 1 == e.options.excludePlugins.indexOf(t) && (UM.plugins[t].call(e), e.plugins[t] = 1);
        e.langIsReady = !0, e.fireEvent("langReady") }

    function n(e) { for (var t in e) return t } var i, o = 0,
        a = UM.Editor = function(e) { var i = this;
            i.uid = o++, EventBase.call(i), i.commands = {}, i.options = utils.extend(utils.clone(e || {}), UMEDITOR_CONFIG, !0), i.shortcutkeys = {}, i.inputRules = [], i.outputRules = [], i.setOpt({ isShow: !0, initialContent: "", initialStyle: "", autoClearinitialContent: !1, textarea: "editorValue", focus: !1, focusInEnd: !0, autoClearEmptyNode: !0, fullscreen: !1, readonly: !1, zIndex: 999, enterTag: "p", lang: "zh-cn", langPath: i.options.UMEDITOR_HOME_URL + "lang/", theme: "default", themePath: i.options.UMEDITOR_HOME_URL + "themes/", allHtmlEnabled: !1, autoSyncData: !0, autoHeightEnabled: !0, excludePlugins: "" }), i.plugins = {}, utils.isEmptyObject(UM.I18N) ? utils.loadFile(document, { src: i.options.langPath + i.options.lang + "/" + i.options.lang + ".js", tag: "script", type: "text/javascript", defer: "defer" }, function() { t(i) }) : (i.options.lang = n(UM.I18N), t(i)) };
    a.prototype = { ready: function(e) { var t = this;
            e && (t.isReady ? e.apply(t) : t.addListener("ready", e)) }, setOpt: function(e, t) { var n = {};
            utils.isString(e) ? n[e] = t : n = e, utils.extend(this.options, n, !0) }, getOpt: function(e) { return this.options[e] || "" }, destroy: function() { var e = this;
            e.fireEvent("destroy"); var t = e.container.parentNode;
            t === document.body && (t = e.container); var n = e.textarea;
            n ? n.style.display = "" : (n = document.createElement("textarea"), t.parentNode.insertBefore(n, t)), n.style.width = e.body.offsetWidth + "px", n.style.height = e.body.offsetHeight + "px", n.value = e.getContent(), n.id = e.key, t.contains(n) && $(n).insertBefore(t), t.innerHTML = "", domUtils.remove(t), UM.clearCache(e.id); for (var i in e) e.hasOwnProperty(i) && delete this[i] }, initialCont: function(e) { if (e) { if (e.getAttribute("name") && (this.options.textarea = e.getAttribute("name")), e && /script|textarea/gi.test(e.tagName)) { var t = document.createElement("div");
                    e.parentNode.insertBefore(t, e), this.options.initialContent = UM.htmlparser(e.value || e.innerHTML || this.options.initialContent).toHtml(), e.className && (t.className = e.className), e.style.cssText && (t.style.cssText = e.style.cssText), /textarea/i.test(e.tagName) ? (this.textarea = e, this.textarea.style.display = "none") : (e.parentNode.removeChild(e), e.id && (t.id = e.id)), e = t, e.innerHTML = "" } return e } return null }, render: function(e) { var t = this,
                n = t.options,
                i = function(t) { return parseInt($(e).css(t)) }; if (utils.isString(e) && (e = document.getElementById(e)), e) { this.id = e.getAttribute("id"), UM.setEditor(this), utils.cssRule("edui-style-body", t.options.initialStyle, document), e = this.initialCont(e), e.className += " edui-body-container", n.minFrameWidth = n.initialFrameWidth ? n.initialFrameWidth : n.initialFrameWidth = $(e).width() || UM.defaultWidth, n.initialFrameHeight ? n.minFrameHeight = n.initialFrameHeight : n.initialFrameHeight = n.minFrameHeight = $(e).height() || UM.defaultHeight, e.style.width = /%$/.test(n.initialFrameWidth) ? "100%" : n.initialFrameWidth - i("padding-left") - i("padding-right") + "px"; var o = /%$/.test(n.initialFrameHeight) ? "100%" : n.initialFrameHeight - i("padding-top") - i("padding-bottom");
                this.options.autoHeightEnabled ? (e.style.minHeight = o + "px", e.style.height = "", browser.ie && browser.version <= 6 && (e.style.height = o, e.style.setExpression("height", "this.scrollHeight <= " + o + ' ? "' + o + 'px" : "auto"'))) : $(e).height(o), e.style.zIndex = n.zIndex, this._setup(e) } }, _setup: function(t) { var n = this,
                i = n.options;
            t.contentEditable = !0, document.body.spellcheck = !1, n.document = document, n.window = document.defaultView || document.parentWindow, n.body = t, n.$body = $(t), n.selection = new dom.Selection(document, n.body), n._isEnabled = !1; var o;
            browser.gecko && (o = this.selection.getNative()) && o.removeAllRanges(), this._initEvents(); for (var a = t.parentNode; a && !domUtils.isBody(a); a = a.parentNode)
                if ("FORM" == a.tagName) { n.form = a, n.options.autoSyncData ? $(t).on("blur", function() { e(a, n) }) : $(a).on("submit", function() { e(this, n) }); break }
            if (i.initialContent)
                if (i.autoClearinitialContent) { var r = n.execCommand;
                    n.execCommand = function() { return n.fireEvent("firstBeforeExecCommand"), r.apply(n, arguments) }, this._setDefaultContent(i.initialContent) } else this.setContent(i.initialContent, !1, !0);
            domUtils.isEmptyNode(n.body) && (n.body.innerHTML = "<p>" + (browser.ie ? "" : "<br/>") + "</p>"), i.focus && setTimeout(function() { n.focus(n.options.focusInEnd), !n.options.autoClearinitialContent && n._selectionChange() }, 0), n.container || (n.container = t.parentNode), n._bindshortcutKeys(), n.isReady = 1, n.fireEvent("ready"), i.onready && i.onready.call(n), (!browser.ie || browser.ie9above) && $(n.body).on("blur focus", function(e) { var t = n.selection.getNative(); if ("blur" == e.type) t.rangeCount > 0 && (n._bakRange = t.getRangeAt(0));
                else { try { n._bakRange && t.addRange(n._bakRange) } catch (e) {} n._bakRange = null } }), !i.isShow && n.setHide(), i.readonly && n.setDisabled() }, sync: function(t) { var n = this,
                i = t ? document.getElementById(t) : domUtils.findParent(n.body.parentNode, function(e) { return "FORM" == e.tagName }, !0);
            i && e(i, n) }, setHeight: function(e, t) {!t && (this.options.initialFrameHeight = e), this.options.autoHeightEnabled ? ($(this.body).css({ "min-height": e + "px" }), browser.ie && browser.version <= 6 && this.container && (this.container.style.height = e, this.container.style.setExpression("height", "this.scrollHeight <= " + e + ' ? "' + e + 'px" : "auto"'))) : $(this.body).height(e), this.fireEvent("resize") }, setWidth: function(e) { this.$container && this.$container.width(e), $(this.body).width(e - 1 * $(this.body).css("padding-left").replace("px", "") - 1 * $(this.body).css("padding-right").replace("px", "")), this.fireEvent("resize") }, addshortcutkey: function(e, t) { var n = {};
            t ? n[e] = t : n = e, utils.extend(this.shortcutkeys, n) }, _bindshortcutKeys: function() { var e = this,
                t = this.shortcutkeys;
            e.addListener("keydown", function(n, i) { var o = i.keyCode || i.which; for (var a in t)
                    for (var r, s = t[a].split(","), l = 0; r = s[l++];) { r = r.split(":"); var c = r[0],
                            d = r[1];
                        (/^(ctrl)(\+shift)?\+(\d+)$/.test(c.toLowerCase()) || /^(\d+)$/.test(c)) && (("ctrl" == RegExp.$1 ? i.ctrlKey || i.metaKey : 0) && ("" != RegExp.$2 ? i[RegExp.$2.slice(1) + "Key"] : 1) && o == RegExp.$3 || o == RegExp.$1) && (-1 != e.queryCommandState(a, d) && e.execCommand(a, d), domUtils.preventDefault(i)) } }) }, getContent: function(e, t, n, i, o) { var a = this; if (e && utils.isFunction(e) && (t = e, e = ""), t ? !t() : !this.hasContents()) return "";
            a.fireEvent("beforegetcontent"); var r = UM.htmlparser(a.body.innerHTML, i); return a.filterOutputRule(r), a.fireEvent("aftergetcontent", r), r.toHtml(o) }, getAllHtml: function() { var e = this,
                t = []; if (e.fireEvent("getAllHtml", t), browser.ie && browser.version > 8) { var n = "";
                utils.each(e.document.styleSheets, function(e) { n += e.href ? '<link rel="stylesheet" type="text/css" href="' + e.href + '" />' : "<style>" + e.cssText + "</style>" }), utils.each(e.document.getElementsByTagName("script"), function(e) { n += e.outerHTML }) } return "<html><head>" + (e.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + e.options.charset + '"/>' : "") + (n || e.document.getElementsByTagName("head")[0].innerHTML) + t.join("\n") + "</head><body " + (ie && browser.version < 9 ? 'class="view"' : "") + ">" + e.getContent(null, null, !0) + "</body></html>" }, getPlainTxt: function() { var e = new RegExp(domUtils.fillChar, "g"),
                t = this.body.innerHTML.replace(/[\n\r]/g, ""); return t = t.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, "\n").replace(/<br\/?>/gi, "\n").replace(/<[^>/]+>/g, "").replace(/(\n)?<\/([^>]+)>/g, function(e, t, n) { return dtd.$block[n] ? "\n" : t ? t : "" }), t.replace(e, "").replace(/\u00a0/g, " ").replace(/&nbsp;/g, " ") }, getContentTxt: function() { var e = new RegExp(domUtils.fillChar, "g"); return this.body[browser.ie ? "innerText" : "textContent"].replace(e, "").replace(/\u00a0/g, " ") }, setContent: function(t, n, i) {
            function o(e) { return "DIV" == e.tagName && e.getAttribute("cdata_tag") } var a = this;
            a.fireEvent("beforesetcontent", t); var r = UM.htmlparser(t); if (a.filterInputRule(r), t = r.toHtml(), a.body.innerHTML = (n ? a.body.innerHTML : "") + t, "p" == a.options.enterTag) { var s, l = this.body.firstChild; if (!l || 1 == l.nodeType && (dtd.$cdata[l.tagName] || o(l) || domUtils.isCustomeNode(l)) && l === this.body.lastChild) this.body.innerHTML = "<p>" + (browser.ie ? "&nbsp;" : "<br/>") + "</p>" + this.body.innerHTML;
                else
                    for (var c = a.document.createElement("p"); l;) { for (; l && (3 == l.nodeType || 1 == l.nodeType && dtd.p[l.tagName] && !dtd.$cdata[l.tagName]);) s = l.nextSibling, c.appendChild(l), l = s; if (c.firstChild) { if (!l) { a.body.appendChild(c); break } l.parentNode.insertBefore(c, l), c = a.document.createElement("p") } l = l.nextSibling } } a.fireEvent("aftersetcontent"), a.fireEvent("contentchange"), !i && a._selectionChange(), a._bakRange = a._bakIERange = a._bakNativeRange = null; var d;
            browser.gecko && (d = this.selection.getNative()) && d.removeAllRanges(), a.options.autoSyncData && a.form && e(a.form, a) }, focus: function(e) { try { var t = this,
                    n = t.selection.getRange();
                e ? n.setStartAtLast(t.body.lastChild).setCursor(!1, !0) : n.select(!0), this.fireEvent("focus") } catch (i) {} }, blur: function() { var e = this.selection.getNative();
            e.empty ? e.empty() : e.removeAllRanges(), this.fireEvent("blur") }, isFocus: function() { return this.fireEvent("isfocus") === !0 ? !0 : this.selection.isFocus() }, _initEvents: function() { var e = this,
                t = e.body,
                n = function() { e._proxyDomEvent.apply(e, arguments) };
            $(t).on("click contextmenu mousedown keydown keyup keypress mouseup mouseover mouseout selectstart", n).on("focus blur", n).on("mouseup keydown", function(t) { "keydown" == t.type && (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) || 2 != t.button && e._selectionChange(250, t) }) }, _proxyDomEvent: function(e) { return this.fireEvent(e.type.replace(/^on/, ""), e) }, _selectionChange: function(e, t) { var n, o, a = this,
                r = !1; if (browser.ie && browser.version < 9 && t && "mouseup" == t.type) { var s = this.selection.getRange();
                s.collapsed || (r = !0, n = t.clientX, o = t.clientY) } clearTimeout(i), i = setTimeout(function() { if (a.selection.getNative()) { var e; if (r && "None" == a.selection.getNative().type) { e = a.document.body.createTextRange(); try { e.moveToPoint(n, o) } catch (i) { e = null } } var s;
                    e && (s = a.selection.getIERange, a.selection.getIERange = function() { return e }), a.selection.cache(), s && (a.selection.getIERange = s), a.selection._cachedRange && a.selection._cachedStartElement && (a.fireEvent("beforeselectionchange"), a.fireEvent("selectionchange", !!t), a.fireEvent("afterselectionchange"), a.selection.clear()) } }, e || 50) }, _callCmdFn: function(e, t) { t = Array.prototype.slice.call(t, 0); var n, i, o = t.shift().toLowerCase(); return n = this.commands[o] || UM.commands[o], i = n && n[e], n && i || "queryCommandState" != e ? i ? i.apply(this, [o].concat(t)) : void 0 : 0 }, execCommand: function(e) { if (!this.isFocus()) { var t = this.selection._bakRange;
                t ? t.select() : this.focus(!0) } e = e.toLowerCase(); var n, i = this,
                o = i.commands[e] || UM.commands[e]; return o && o.execCommand ? (o.notNeedUndo || i.__hasEnterExecCommand ? (n = this._callCmdFn("execCommand", arguments), !i.__hasEnterExecCommand && !o.ignoreContentChange && !i._ignoreContentChange && i.fireEvent("contentchange")) : (i.__hasEnterExecCommand = !0, -1 != i.queryCommandState.apply(i, arguments) && (i.fireEvent("saveScene"), i.fireEvent("beforeexeccommand", e), n = this._callCmdFn("execCommand", arguments), !o.ignoreContentChange && !i._ignoreContentChange && i.fireEvent("contentchange"), i.fireEvent("afterexeccommand", e), i.fireEvent("saveScene")), i.__hasEnterExecCommand = !1), !i.__hasEnterExecCommand && !o.ignoreContentChange && !i._ignoreContentChange && i._selectionChange(), n) : null }, queryCommandState: function() { try { return this._callCmdFn("queryCommandState", arguments) } catch (e) { return 0 } }, queryCommandValue: function() { try { return this._callCmdFn("queryCommandValue", arguments) } catch (e) { return null } }, hasContents: function(e) { if (e)
                for (var t, n = 0; t = e[n++];)
                    if (this.body.getElementsByTagName(t).length > 0) return !0; if (!domUtils.isEmptyBlock(this.body)) return !0; for (e = ["div"], n = 0; t = e[n++];)
                for (var i, o = domUtils.getElementsByTagName(this.body, t), a = 0; i = o[a++];)
                    if (domUtils.isCustomeNode(i)) return !0; return !1 }, reset: function() { this.fireEvent("reset") }, isEnabled: function() { return 1 != this._isEnabled }, setEnabled: function() { var e, t = this; if (t.body.contentEditable = !0, t.lastBk) { e = t.selection.getRange(); try { e.moveToBookmark(t.lastBk), delete t.lastBk } catch (n) { e.setStartAtFirst(t.body).collapse(!0) } e.select(!0) } t.bkqueryCommandState && (t.queryCommandState = t.bkqueryCommandState, delete t.bkqueryCommandState), t._bkproxyDomEvent && (t._proxyDomEvent = t._bkproxyDomEvent, delete t._bkproxyDomEvent), t.fireEvent("setEnabled") }, enable: function() { return this.setEnabled() }, setDisabled: function(e, t) { var n = this;
            n.body.contentEditable = !1, n._except = e ? utils.isArray(e) ? e : [e] : [], n.lastBk || (n.lastBk = n.selection.getRange().createBookmark(!0)), n.bkqueryCommandState || (n.bkqueryCommandState = n.queryCommandState, n.queryCommandState = function(e) { return -1 != utils.indexOf(n._except, e) ? n.bkqueryCommandState.apply(n, arguments) : -1 }), t || n._bkproxyDomEvent || (n._bkproxyDomEvent = n._proxyDomEvent, n._proxyDomEvent = function() { return !1 }), n.fireEvent("selectionchange"), n.fireEvent("setDisabled", n._except) }, disable: function(e) { return this.setDisabled(e) }, _setDefaultContent: function() {
            function e() { var t = this;
                t.document.getElementById("initContent") && (t.body.innerHTML = "<p>" + (ie ? "" : "<br/>") + "</p>", t.removeListener("firstBeforeExecCommand focus", e), setTimeout(function() { t.focus(), t._selectionChange() }, 0)) } return function(t) { var n = this;
                n.body.innerHTML = '<p id="initContent">' + t + "</p>", n.addListener("firstBeforeExecCommand focus", e) } }(), setShow: function() { var e = this,
                t = e.selection.getRange(); if ("none" == e.container.style.display) { try { t.moveToBookmark(e.lastBk), delete e.lastBk } catch (n) { t.setStartAtFirst(e.body).collapse(!0) } setTimeout(function() { t.select(!0) }, 100), e.container.style.display = "" } }, show: function() { return this.setShow() }, setHide: function() { var e = this;
            e.lastBk || (e.lastBk = e.selection.getRange().createBookmark(!0)), e.container.style.display = "none" }, hide: function() { return this.setHide() }, getLang: function(e) { var t = UM.I18N[this.options.lang]; if (!t) throw Error("not import language file");
            e = (e || "").split("."); for (var n, i = 0;
                (n = e[i++]) && (t = t[n], t);); return t }, getContentLength: function(e, t) { var n = this.getContent(!1, !1, !0).length; if (e) { t = (t || []).concat(["hr", "img", "iframe"]), n = this.getContentTxt().replace(/[\t\r\n]+/g, "").length; for (var i, o = 0; i = t[o++];) n += this.body.getElementsByTagName(i).length } return n }, addInputRule: function(e, t) { e.ignoreUndo = t, this.inputRules.push(e) }, filterInputRule: function(e, t) { for (var n, i = 0; n = this.inputRules[i++];) t && n.ignoreUndo || n.call(this, e) }, addOutputRule: function(e, t) { e.ignoreUndo = t, this.outputRules.push(e) }, filterOutputRule: function(e, t) { for (var n, i = 0; n = this.outputRules[i++];) t && n.ignoreUndo || n.call(this, e) } }, utils.inherits(a, EventBase) }();;
var filterWord = UM.filterWord = function() {
    function e(e) { return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/gi.test(e) }

    function t(e) { return e = e.replace(/[\d.]+\w+/g, function(e) { return utils.transUnitToPx(e) }) }

    function a(e) { return e.replace(/[\t\r\n]+/g, " ").replace(/<!--[\s\S]*?-->/gi, "").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi, function(e) { if (browser.opera) return ""; try { if (/Bitmap/i.test(e)) return ""; var a = e.match(/width:([ \d.]*p[tx])/i)[1],
                    n = e.match(/height:([ \d.]*p[tx])/i)[1],
                    s = e.match(/src=\s*"([^"]*)"/i)[1]; return '<img width="' + t(a) + '" height="' + t(n) + '" src="' + s + '" />' } catch (i) { return "" } }).replace(/<\/?div[^>]*>/g, "").replace(/v:\w+=(["']?)[^'"]+\1/g, "").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/gi, function(e, t, a, n) { return "class" == t && "MsoListParagraph" == n ? e : "" }).replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi, function(e, t, a) { return a.replace(/[\t\r\n ]+/g, " ") }).replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function(e, a, n, s) { for (var i, r = [], o = s.replace(/^\s+|\s+$/, "").replace(/&#39;/g, "'").replace(/&quot;/gi, "'").split(/;\s*/g), c = 0; i = o[c]; c++) { var l, g, u = i.split(":"); if (2 == u.length) { if (l = u[0].toLowerCase(), g = u[1].toLowerCase(), /^(background)\w*/.test(l) && 0 == g.replace(/(initial|\s)/g, "").length || /^(margin)\w*/.test(l) && /^0\w+$/.test(g)) continue; switch (l) {
                        case "mso-padding-alt":
                        case "mso-padding-top-alt":
                        case "mso-padding-right-alt":
                        case "mso-padding-bottom-alt":
                        case "mso-padding-left-alt":
                        case "mso-margin-alt":
                        case "mso-margin-top-alt":
                        case "mso-margin-right-alt":
                        case "mso-margin-bottom-alt":
                        case "mso-margin-left-alt":
                        case "mso-height":
                        case "mso-width":
                        case "mso-vertical-align-alt":
                            /<table/.test(a) || (r[c] = l.replace(/^mso-|-alt$/g, "") + ":" + t(g)); continue;
                        case "horiz-align":
                            r[c] = "text-align:" + g; continue;
                        case "vert-align":
                            r[c] = "vertical-align:" + g; continue;
                        case "font-color":
                        case "mso-foreground":
                            r[c] = "color:" + g; continue;
                        case "mso-background":
                        case "mso-highlight":
                            r[c] = "background:" + g; continue;
                        case "mso-default-height":
                            r[c] = "min-height:" + t(g); continue;
                        case "mso-default-width":
                            r[c] = "min-width:" + t(g); continue;
                        case "mso-padding-between-alt":
                            r[c] = "border-collapse:separate;border-spacing:" + t(g); continue;
                        case "text-line-through":
                            ("single" == g || "double" == g) && (r[c] = "text-decoration:line-through"); continue;
                        case "mso-zero-height":
                            "yes" == g && (r[c] = "display:none"); continue;
                        case "margin":
                            if (!/[1-9]/.test(g)) continue } if (/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(l) || /text\-indent|padding|margin/.test(l) && /\-[\d.]+/.test(g)) continue;
                    r[c] = l + ":" + u[1] } } return a + (r.length ? ' style="' + r.join(";").replace(/;{2,}/g, ";") + '"' : "") }).replace(/[\d.]+(cm|pt)/g, function(e) { return utils.transUnitToPx(e) }) } return function(t) { return e(t) ? a(t) : t } }();;
! function() {
    function t(t, e, i) { return t.push(f), e + (i ? 1 : -1) }

    function e(t, e) { for (var i = 0; e > i; i++) t.push(u) }

    function i(s, l, a, c) { switch (s.type) {
            case "root":
                for (var d, o = 0; d = s.children[o++];) a && "element" == d.type && !dtd.$inlineWithA[d.tagName] && o > 1 && (t(l, c, !0), e(l, c)), i(d, l, a, c); break;
            case "text":
                r(s, l); break;
            case "element":
                n(s, l, a, c); break;
            case "comment":
                h(s, l, a) } return l }

    function r(t, e) { e.push("pre" == t.parentNode.tagName ? t.data : o[t.parentNode.tagName] ? utils.html(t.data) : t.data.replace(/[ ]{2}/g, " &nbsp;")) }

    function n(r, n, h, s) { var l = ""; if (r.attrs) { l = []; var a = r.attrs; for (var c in a) l.push(c + (void 0 !== a[c] ? '="' + (d[c] ? utils.html(a[c]).replace(/["]/g, function() { return "&quot;" }) : utils.unhtml(a[c])) + '"' : ""));
            l = l.join(" ") } if (n.push("<" + r.tagName + (l ? " " + l : "") + (dtd.$empty[r.tagName] ? "/" : "") + ">"), h && !dtd.$inlineWithA[r.tagName] && "pre" != r.tagName && r.children && r.children.length && (s = t(n, s, !0), e(n, s)), r.children && r.children.length)
            for (var o, u = 0; o = r.children[u++];) h && "element" == o.type && !dtd.$inlineWithA[o.tagName] && u > 1 && (t(n, s), e(n, s)), i(o, n, h, s);
        dtd.$empty[r.tagName] || (h && !dtd.$inlineWithA[r.tagName] && "pre" != r.tagName && r.children && r.children.length && (s = t(n, s), e(n, s)), n.push("</" + r.tagName + ">")) }

    function h(t, e) { e.push("<!--" + t.data + "-->") }

    function s(t, e) { var i; if ("element" == t.type && t.getAttr("id") == e) return t; if (t.children && t.children.length)
            for (var r, n = 0; r = t.children[n++];)
                if (i = s(r, e)) return i }

    function l(t, e, i) { if ("element" == t.type && t.tagName == e && i.push(t), t.children && t.children.length)
            for (var r, n = 0; r = t.children[n++];) l(r, e, i) }

    function a(t, e) { if (t.children && t.children.length)
            for (var i, r = 0; i = t.children[r];) a(i, e), i.parentNode && (i.children && i.children.length && e(i), i.parentNode && r++);
        else e(t) } var c = UM.uNode = function(t) { this.type = t.type, this.data = t.data, this.tagName = t.tagName, this.parentNode = t.parentNode, this.attrs = t.attrs || {}, this.children = t.children },
        d = { href: 1, src: 1, _src: 1, _href: 1, cdata_data: 1 },
        o = { style: 1, script: 1 },
        u = "    ",
        f = "\n";
    c.createElement = function(t) { return /[<>]/.test(t) ? UM.htmlparser(t).children[0] : new c({ type: "element", children: [], tagName: t }) }, c.createText = function(t, e) { return new UM.uNode({ type: "text", data: e ? t : utils.unhtml(t || "") }) }, c.prototype = { toHtml: function(t) { var e = []; return i(this, e, t, 0), e.join("") }, innerHTML: function(t) { if ("element" != this.type || dtd.$empty[this.tagName]) return this; if (utils.isString(t)) { if (this.children)
                    for (var e, i = 0; e = this.children[i++];) e.parentNode = null;
                this.children = []; for (var e, r = UM.htmlparser(t), i = 0; e = r.children[i++];) this.children.push(e), e.parentNode = this; return this } var r = new UM.uNode({ type: "root", children: this.children }); return r.toHtml() }, innerText: function(t, e) { if ("element" != this.type || dtd.$empty[this.tagName]) return this; if (t) { if (this.children)
                    for (var i, r = 0; i = this.children[r++];) i.parentNode = null; return this.children = [], this.appendChild(c.createText(t, e)), this } return this.toHtml().replace(/<[^>]+>/g, "") }, getData: function() { return "element" == this.type ? "" : this.data }, firstChild: function() { return this.children ? this.children[0] : null }, lastChild: function() { return this.children ? this.children[this.children.length - 1] : null }, previousSibling: function() { for (var t, e = this.parentNode, i = 0; t = e.children[i]; i++)
                if (t === this) return 0 == i ? null : e.children[i - 1] }, nextSibling: function() { for (var t, e = this.parentNode, i = 0; t = e.children[i++];)
                if (t === this) return e.children[i] }, replaceChild: function(t, e) { if (this.children) { t.parentNode && t.parentNode.removeChild(t); for (var i, r = 0; i = this.children[r]; r++)
                    if (i === e) return this.children.splice(r, 1, t), e.parentNode = null, t.parentNode = this, t } }, appendChild: function(t) { if ("root" == this.type || "element" == this.type && !dtd.$empty[this.tagName]) { this.children || (this.children = []), t.parentNode && t.parentNode.removeChild(t); for (var e, i = 0; e = this.children[i]; i++)
                    if (e === t) { this.children.splice(i, 1); break }
                return this.children.push(t), t.parentNode = this, t } }, insertBefore: function(t, e) { if (this.children) { t.parentNode && t.parentNode.removeChild(t); for (var i, r = 0; i = this.children[r]; r++)
                    if (i === e) return this.children.splice(r, 0, t), t.parentNode = this, t } }, insertAfter: function(t, e) { if (this.children) { t.parentNode && t.parentNode.removeChild(t); for (var i, r = 0; i = this.children[r]; r++)
                    if (i === e) return this.children.splice(r + 1, 0, t), t.parentNode = this, t } }, removeChild: function(t, e) { if (this.children)
                for (var i, r = 0; i = this.children[r]; r++)
                    if (i === t) { if (this.children.splice(r, 1), i.parentNode = null, e && i.children && i.children.length)
                            for (var n, h = 0; n = i.children[h]; h++) this.children.splice(r + h, 0, n), n.parentNode = this; return i } }, getAttr: function(t) { return this.attrs && this.attrs[t.toLowerCase()] }, setAttr: function(t, e) { if (!t) return void delete this.attrs; if (this.attrs || (this.attrs = {}), utils.isObject(t))
                for (var i in t) t[i] ? this.attrs[i.toLowerCase()] = t[i] : delete this.attrs[i];
            else e ? this.attrs[t.toLowerCase()] = e : delete this.attrs[t] }, hasAttr: function(t) { var e = this.getAttr(t); return null !== e && void 0 !== e }, getIndex: function() { for (var t, e = this.parentNode, i = 0; t = e.children[i]; i++)
                if (t === this) return i; return -1 }, getNodeById: function(t) { var e; if (this.children && this.children.length)
                for (var i, r = 0; i = this.children[r++];)
                    if (e = s(i, t)) return e }, getNodesByTagName: function(t) { t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" "); var e = [],
                i = this; return utils.each(t, function(t) { if (i.children && i.children.length)
                    for (var r, n = 0; r = i.children[n++];) l(r, t, e) }), e }, getStyle: function(t) { var e = this.getAttr("style"); if (!e) return ""; var i = new RegExp("(^|;)\\s*" + t + ":([^;]+)", "i"),
                r = e.match(i); return r && r[0] ? r[2] : "" }, setStyle: function(t, e) {
            function i(t, e) { var i = new RegExp("(^|;)\\s*" + t + ":([^;]+;?)", "gi");
                r = r.replace(i, "$1"), e && (r = t + ":" + utils.unhtml(e) + ";" + r) } t || (this.setAttr("style", ""), this.setAttr("class", ""), this.setAttr("id", "")); var r = this.getAttr("style"); if (r || (r = ""), utils.isObject(t))
                for (var n in t) i(n, t[n]);
            else i(t, e);
            this.setAttr("style", utils.trim(r)) }, hasClass: function(t) { if (this.hasAttr("class")) { var e = this.getAttr("class").split(/\s+/),
                    i = !1; return $.each(e, function(e, r) { r === t && (i = !0) }), i } return !1 }, addClass: function(t) { var e = null,
                i = !1;
            this.hasAttr("class") ? (e = this.getAttr("class"), e = e.split(/\s+/), e.forEach(function(e) { return e === t ? void(i = !0) : void 0 }), !i && e.push(t), this.setAttr("class", e.join(" "))) : this.setAttr("class", t) }, removeClass: function(t) { if (this.hasAttr("class")) { var e = this.getAttr("class");
                e = e.replace(new RegExp("\\b" + t + "\\b", "g"), ""), this.setAttr("class", utils.trim(e).replace(/[ ]{2,}/g, " ")) } }, traversal: function(t) { return this.children && this.children.length && a(this, t), this } } }();;
var htmlparser = UM.htmlparser = function(e, t) {
    function a(e, t) { if (f[e.tagName]) { var a = p.createElement(f[e.tagName]);
            e.appendChild(a), a.appendChild(p.createText(t)), e = a } else e.appendChild(p.createText(t)) }

    function r(e, t, a) { var n; if (n = c[t]) { for (var o, d = e;
                "root" != d.type;) { if (utils.isArray(n) ? -1 != utils.indexOf(n, d.tagName) : n == d.tagName) { e = d, o = !0; break } d = d.parentNode } o || (e = r(e, utils.isArray(n) ? n[0] : n)) } var i = new p({ parentNode: e, type: "element", tagName: t.toLowerCase(), children: dtd.$empty[t] ? null : [] }); if (a) { for (var f, m = {}; f = l.exec(a);) m[f[1].toLowerCase()] = s[f[1].toLowerCase()] ? f[2] || f[3] || f[4] : utils.unhtml(f[2] || f[3] || f[4]);
            i.attrs = m } return e.children.push(i), dtd.$empty[t] ? e : i }

    function n(e, t) { e.children.push(new p({ type: "comment", data: t, parentNode: e })) } var o = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
        l = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
        d = { b: 1, code: 1, i: 1, u: 1, strike: 1, s: 1, tt: 1, strong: 1, q: 1, samp: 1, em: 1, span: 1, sub: 1, img: 1, sup: 1, font: 1, big: 1, small: 1, iframe: 1, a: 1, br: 1, pre: 1 };
    e = e.replace(new RegExp(domUtils.fillChar, "g"), ""), t || (e = e.replace(new RegExp("[\\r\\t\\n" + (t ? "" : " ") + "]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n" + (t ? "" : " ") + "]*", "g"), function(e, a) { return a && d[a.toLowerCase()] ? e.replace(/(^[\n\r]+)|([\n\r]+$)/g, "") : e.replace(new RegExp("^[\\r\\n" + (t ? "" : " ") + "]+"), "").replace(new RegExp("[\\r\\n" + (t ? "" : " ") + "]+$"), "") })); for (var i, s = { href: 1, src: 1 }, p = UM.uNode, c = { td: "tr", tr: ["tbody", "thead", "tfoot"], tbody: "table", th: "tr", thead: "table", tfoot: "table", caption: "table", li: ["ul", "ol"], dt: "dl", dd: "dl", option: "select" }, f = { ol: "li", ul: "li" }, m = 0, u = 0, g = new p({ type: "root", children: [] }), h = g; i = o.exec(e);) { m = i.index; try { if (m > u && a(h, e.slice(u, m)), i[3]) dtd.$cdata[h.tagName] ? a(h, i[0]) : h = r(h, i[3].toLowerCase(), i[4]);
            else if (i[1]) { if ("root" != h.type)
                    if (dtd.$cdata[h.tagName] && !dtd.$cdata[i[1]]) a(h, i[0]);
                    else { for (var w = h;
                            "element" == h.type && h.tagName != i[1].toLowerCase();)
                            if (h = h.parentNode, "root" == h.type) throw h = w, "break";
                        h = h.parentNode } } else i[2] && n(h, i[2]) } catch (y) {} u = o.lastIndex } return u < e.length && a(h, e.slice(u)), g };;
var filterNode = UM.filterNode = function() {
    function e(r, t) { switch (r.type) {
            case "text":
                break;
            case "element":
                var a; if (a = t[r.tagName])
                    if ("-" === a) r.parentNode.removeChild(r);
                    else if (utils.isFunction(a)) { var i = r.parentNode,
                        n = r.getIndex(); if (a(r), r.parentNode) { if (r.children)
                            for (var o, d = 0; o = r.children[d];) e(o, t), o.parentNode && d++ } else
                        for (var o, d = n; o = i.children[d];) e(o, t), o.parentNode && d++ } else { var l = a.$; if (l && r.attrs) { var f, c = {}; for (var s in l) { if (f = r.getAttr(s), "style" == s && utils.isArray(l[s])) { var v = [];
                                utils.each(l[s], function(e) { var t;
                                    (t = r.getStyle(e)) && v.push(e + ":" + t) }), f = v.join(";") } f && (c[s] = f) } r.attrs = c } if (r.children)
                        for (var o, d = 0; o = r.children[d];) e(o, t), o.parentNode && d++ } else if (dtd.$cdata[r.tagName]) r.parentNode.removeChild(r);
                else { var i = r.parentNode,
                        n = r.getIndex();
                    r.parentNode.removeChild(r, !0); for (var o, d = n; o = i.children[d];) e(o, t), o.parentNode && d++ } break;
            case "comment":
                r.parentNode.removeChild(r) } } return function(r, t) { if (utils.isEmptyObject(t)) return r; var a;
        (a = t["-"]) && utils.each(a.split(" "), function(e) { t[e] = "-" }); for (var i, n = 0; i = r.children[n];) e(i, t), i.parentNode && n++; return r } }();;
UM.commands.inserthtml = { execCommand: function(e, t, i) { var l, o, s = this; if (t && s.fireEvent("beforeinserthtml", t) !== !0) { if (l = s.selection.getRange(), o = l.document.createElement("div"), o.style.display = "inline", !i) { var r = UM.htmlparser(t);
                s.options.filterRules && UM.filterNode(r, s.options.filterRules), s.filterInputRule(r), t = r.toHtml() } if (o.innerHTML = utils.trim(t), !l.collapsed) { var n = l.startContainer; if (domUtils.isFillChar(n) && l.setStartBefore(n), n = l.endContainer, domUtils.isFillChar(n) && l.setEndAfter(n), l.txtToElmBoundary(), l.endContainer && 1 == l.endContainer.nodeType && (n = l.endContainer.childNodes[l.endOffset], n && domUtils.isBr(n) && l.setEndAfter(n)), 0 == l.startOffset && (n = l.startContainer, domUtils.isBoundaryNode(n, "firstChild") && (n = l.endContainer, l.endOffset == (3 == n.nodeType ? n.nodeValue.length : n.childNodes.length) && domUtils.isBoundaryNode(n, "lastChild") && (s.body.innerHTML = "<p>" + (browser.ie ? "" : "<br/>") + "</p>", l.setStart(s.body.firstChild, 0).collapse(!0)))), !l.collapsed && l.deleteContents(), 1 == l.startContainer.nodeType) { var d, a = l.startContainer.childNodes[l.startOffset]; if (a && domUtils.isBlockElm(a) && (d = a.previousSibling) && domUtils.isBlockElm(d)) { for (l.setEnd(d, d.childNodes.length).collapse(); a.firstChild;) d.appendChild(a.firstChild);
                        domUtils.remove(a) } } } var a, m, d, f, c, h = 0; for (l.inFillChar() && (a = l.startContainer, domUtils.isFillChar(a) ? (l.setStartBefore(a).collapse(!0), domUtils.remove(a)) : domUtils.isFillChar(a, !0) && (a.nodeValue = a.nodeValue.replace(fillCharReg, ""), l.startOffset--, l.collapsed && l.collapse(!0))); a = o.firstChild;) { if (h) { for (var p = s.document.createElement("p"); a && (3 == a.nodeType || !dtd.$block[a.tagName]);) c = a.nextSibling, p.appendChild(a), a = c;
                    p.firstChild && (a = p) } if (l.insertNode(a), c = a.nextSibling, !h && a.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm(a) && (m = domUtils.findParent(a, function(e) { return domUtils.isBlockElm(e) }), m && "body" != m.tagName.toLowerCase() && (!dtd[m.tagName][a.nodeName] || a.parentNode !== m))) { if (dtd[m.tagName][a.nodeName])
                        for (f = a.parentNode; f !== m;) d = f, f = f.parentNode;
                    else d = m;
                    domUtils.breakParent(a, d || f); var d = a.previousSibling;
                    domUtils.trimWhiteTextNode(d), d.childNodes.length || domUtils.remove(d), !browser.ie && (C = a.nextSibling) && domUtils.isBlockElm(C) && C.lastChild && !domUtils.isBr(C.lastChild) && C.appendChild(s.document.createElement("br")), h = 1 } var C = a.nextSibling; if (!o.firstChild && C && domUtils.isBlockElm(C)) { l.setStart(C, 0).collapse(!0); break } l.setEndAfter(a).collapse() } if (a = l.startContainer, c && domUtils.isBr(c) && domUtils.remove(c), domUtils.isBlockElm(a) && domUtils.isEmptyNode(a))
                if (c = a.nextSibling) domUtils.remove(a), 1 == c.nodeType && dtd.$block[c.tagName] && l.setStart(c, 0).collapse(!0).shrinkBoundary();
                else try { a.innerHTML = browser.ie ? domUtils.fillChar : "<br/>" } catch (U) { l.setStartBefore(a), domUtils.remove(a) }
            try { if (browser.ie9below && 1 == l.startContainer.nodeType && !l.startContainer.childNodes[l.startOffset]) { var N = l.startContainer,
                        d = N.childNodes[l.startOffset - 1]; if (d && 1 == d.nodeType && dtd.$empty[d.tagName]) { var u = this.document.createTextNode(domUtils.fillChar);
                        l.insertNode(u).setStart(u, 0).collapse(!0) } } setTimeout(function() { l.select(!0) }) } catch (U) {} setTimeout(function() { l = s.selection.getRange(), l.scrollIntoView(), s.fireEvent("afterinserthtml") }, 200) } } };;
UM.plugins.paste = function() {
    function e(e) { var t = this.document; if (!t.getElementById("baidu_pastebin")) { var o = this.selection.getRange(),
                i = o.createBookmark(),
                l = t.createElement("div");
            l.id = "baidu_pastebin", browser.webkit && l.appendChild(t.createTextNode(domUtils.fillChar + domUtils.fillChar)), r ? this.document.body.appendChild(l) && (l.contentEditable = !0) : this.body.appendChild(l), i.start.style.display = "", l.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" + $(i.start).position().top + "px;" + (r ? "left:" + $(i.start).position().left + "px;" : ""), r && l.focus(), o.selectNodeContents(l).select(!0), setTimeout(function() { if (browser.webkit)
                    for (var r, a = 0, s = t.querySelectorAll("#baidu_pastebin"); r = s[a++];) { if (!domUtils.isEmptyNode(r)) { l = r; break } domUtils.remove(r) }
                try { l.parentNode.removeChild(l) } catch (n) {} o.moveToBookmark(i).select(!0), e(l) }, 0) } }

    function t(e) { var t; if (e.firstChild) { for (var r, i = domUtils.getElementsByTagName(e, "span"), l = 0; r = i[l++];)("_baidu_cut_start" == r.id || "_baidu_cut_end" == r.id) && domUtils.remove(r); if (browser.webkit) { for (var a, s = e.querySelectorAll("div br"), l = 0; a = s[l++];) { var n = a.parentNode; "DIV" == n.tagName && 1 == n.childNodes.length && (n.innerHTML = "<p><br/></p>", domUtils.remove(n)) } for (var d, m = e.querySelectorAll("#baidu_pastebin"), l = 0; d = m[l++];) { var p = o.document.createElement("p"); for (d.parentNode.insertBefore(p, d); d.firstChild;) p.appendChild(d.firstChild);
                    domUtils.remove(d) } for (var f, c = e.querySelectorAll("meta"), l = 0; f = c[l++];) domUtils.remove(f); var s = e.querySelectorAll("br"); for (l = 0; f = s[l++];) /^apple-/i.test(f.className) && domUtils.remove(f) } if (browser.gecko) { var u = e.querySelectorAll("[_moz_dirty]"); for (l = 0; f = u[l++];) f.removeAttribute("_moz_dirty") } if (!browser.ie)
                for (var f, b = e.querySelectorAll("span.Apple-style-span"), l = 0; f = b[l++];) domUtils.remove(f, !0);
            t = e.innerHTML, t = UM.filterWord(t); var v = UM.htmlparser(t); if (o.options.filterRules && UM.filterNode(v, o.options.filterRules), o.filterInputRule(v), browser.webkit) { var h = v.lastChild();
                h && "element" == h.type && "br" == h.tagName && v.removeChild(h), utils.each(o.body.querySelectorAll("div"), function(e) { domUtils.isEmptyBlock(e) && domUtils.remove(e) }) } if (t = { html: v.toHtml() }, o.fireEvent("beforepaste", t, v), !t.html) return;
            o.execCommand("insertHtml", t.html, !0), o.fireEvent("afterpaste", t) } } var r = !!~navigator.userAgent.indexOf("Firefox"),
        o = this;
    o.addListener("ready", function() { $(o.body).on("cut", function() { var e = o.selection.getRange();!e.collapsed && o.undoManger && o.undoManger.save() }).on(browser.ie || browser.opera ? "keydown" : "paste", function(r) {
            (!browser.ie && !browser.opera || (r.ctrlKey || r.metaKey) && "86" == r.keyCode) && e.call(o, function(e) { t(e) }) }) }) };;
UM.plugins.enterkey = function() { var e, t = this,
        r = t.options.enterTag;
    t.addListener("keyup", function(r, o) { var n = o.keyCode || o.which; if (13 == n) { var a, i = t.selection.getRange(),
                d = i.startContainer; if (browser.ie) t.fireEvent("saveScene", !0, !0);
            else { if (/h\d/i.test(e)) { if (browser.gecko) { var s = domUtils.findParentByTagName(d, ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "caption", "table"], !0);
                        s || (t.document.execCommand("formatBlock", !1, "<p>"), a = 1) } else if (1 == d.nodeType) { var l, f = t.document.createTextNode(""); if (i.insertNode(f), l = domUtils.findParentByTagName(f, "div", !0)) { for (var m = t.document.createElement("p"); l.firstChild;) m.appendChild(l.firstChild);
                            l.parentNode.insertBefore(m, l), domUtils.remove(l), i.setStartBefore(f).setCursor(), a = 1 } domUtils.remove(f) } t.undoManger && a && t.undoManger.save() } browser.opera && i.select() } } }), t.addListener("keydown", function(o, n) { var a = n.keyCode || n.which; if (13 == a) { if (t.fireEvent("beforeenterkeydown")) return void domUtils.preventDefault(n);
            t.fireEvent("saveScene", !0, !0), e = ""; var i = t.selection.getRange(); if (!i.collapsed) { var d = i.startContainer,
                    s = i.endContainer,
                    l = domUtils.findParentByTagName(d, "td", !0),
                    f = domUtils.findParentByTagName(s, "td", !0); if (l && f && l !== f || !l && f || l && !f) return void(n.preventDefault ? n.preventDefault() : n.returnValue = !1) } "p" == r && (browser.ie || (d = domUtils.findParentByTagName(i.startContainer, ["ol", "ul", "p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "caption"], !0), d || browser.opera ? (e = d.tagName, "p" == d.tagName.toLowerCase() && browser.gecko && domUtils.removeDirtyAttr(d)) : (t.document.execCommand("formatBlock", !1, "<p>"), browser.gecko && (i = t.selection.getRange(), d = domUtils.findParentByTagName(i.startContainer, "p", !0), d && domUtils.removeDirtyAttr(d))))) } }), browser.ie && t.addListener("setDisabled", function() { $(t.body).find("p").each(function(e, t) { domUtils.isEmptyBlock(t) && (t.innerHTML = "&nbsp;") }) }) };;
UM.plugins.basestyle = function() { var e = ["bold", "underline", "superscript", "subscript", "italic", "strikethrough"],
        t = this;
    t.addshortcutkey({ Bold: "ctrl+66", Italic: "ctrl+73", Underline: "ctrl+shift+85", strikeThrough: "ctrl+shift+83" }), t.addOutputRule(function(e) { $.each(e.getNodesByTagName("b i u strike s"), function(e, t) { switch (t.tagName) {
                case "b":
                    t.tagName = "strong"; break;
                case "i":
                    t.tagName = "em"; break;
                case "u":
                    t.tagName = "span", t.setStyle("text-decoration", "underline"); break;
                case "s":
                case "strike":
                    t.tagName = "span", t.setStyle("text-decoration", "line-through") } }) }), $.each(e, function(e, r) { t.commands[r] = { execCommand: function(e) { var t = this.selection.getRange(); if (t.collapsed && 1 != this.queryCommandState(e)) { var r = this.document.createElement({ bold: "strong", underline: "u", superscript: "sup", subscript: "sub", italic: "em", strikethrough: "strike" }[e]); return t.insertNode(r).setStart(r, 0).setCursor(!1), !0 } return this.document.execCommand(e) }, queryCommandState: function(e) { if (browser.gecko) return this.document.queryCommandState(e); var t = this.selection.getStartElementPath(),
                    r = !1; return $.each(t, function(t, a) { switch (e) {
                        case "bold":
                            if ("STRONG" == a.nodeName || "B" == a.nodeName) return r = 1, !1; break;
                        case "underline":
                            if ("U" == a.nodeName || "SPAN" == a.nodeName && "underline" == $(a).css("text-decoration")) return r = 1, !1; break;
                        case "superscript":
                            if ("SUP" == a.nodeName) return r = 1, !1; break;
                        case "subscript":
                            if ("SUB" == a.nodeName) return r = 1, !1; break;
                        case "italic":
                            if ("EM" == a.nodeName || "I" == a.nodeName) return r = 1, !1; break;
                        case "strikethrough":
                            if ("S" == a.nodeName || "STRIKE" == a.nodeName || "SPAN" == a.nodeName && "line-through" == $(a).css("text-decoration")) return r = 1, !1 } }), r } } }) };;
UM.plugins.selectall = function() { var e = this;
    e.commands.selectall = { execCommand: function() { var e = this,
                t = e.body,
                l = e.selection.getRange();
            l.selectNodeContents(t), domUtils.isEmptyBlock(t) && (browser.opera && t.firstChild && 1 == t.firstChild.nodeType && l.setStartAtFirst(t.firstChild), l.collapse(!0)), l.select(!0) }, notNeedUndo: 1 }, e.addshortcutkey({ selectAll: "ctrl+65" }) };;
UM.plugins.removeformat = function() { var e = this;
    e.setOpt({ removeFormatTags: "b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var", removeFormatAttributes: "class,style,lang,width,height,align,hspace,valign" }), e.commands.removeformat = { execCommand: function(e, t, o, a, r) {
            function m(e) { if (3 == e.nodeType || "span" != e.tagName.toLowerCase()) return 0; if (browser.ie) { var t = e.attributes; if (t.length) { for (var o = 0, a = t.length; a > o; o++)
                            if (t[o].specified) return 0; return 1 } } return !e.attributes.length }

            function i(e) { var t = e.createBookmark(); if (e.collapsed && e.enlarge(!0), !r) { var a = domUtils.findParentByTagName(e.startContainer, "a", !0);
                    a && e.setStartBefore(a), a = domUtils.findParentByTagName(e.endContainer, "a", !0), a && e.setEndAfter(a) } for (s = e.createBookmark(), c = s.start;
                    (n = c.parentNode) && !domUtils.isBlockElm(n);) domUtils.breakParent(c, n), domUtils.clearEmptySibling(c); if (s.end) { for (c = s.end;
                        (n = c.parentNode) && !domUtils.isBlockElm(n);) domUtils.breakParent(c, n), domUtils.clearEmptySibling(c); for (var i, g = domUtils.getNextDomNode(s.start, !1, p); g && g != s.end;) i = domUtils.getNextDomNode(g, !0, p), dtd.$empty[g.tagName.toLowerCase()] || domUtils.isBookmarkNode(g) || (d.test(g.tagName) ? o ? (domUtils.removeStyle(g, o), m(g) && "text-decoration" != o && domUtils.remove(g, !0)) : domUtils.remove(g, !0) : dtd.$tableContent[g.tagName] || dtd.$list[g.tagName] || (domUtils.removeAttributes(g, l), m(g) && domUtils.remove(g, !0))), g = i } var f = s.start.parentNode;!domUtils.isBlockElm(f) || dtd.$tableContent[f.tagName] || dtd.$list[f.tagName] || domUtils.removeAttributes(f, l), f = s.end.parentNode, s.end && domUtils.isBlockElm(f) && !dtd.$tableContent[f.tagName] && !dtd.$list[f.tagName] && domUtils.removeAttributes(f, l), e.moveToBookmark(s).moveToBookmark(t); for (var v, c = e.startContainer, N = e.collapsed; 1 == c.nodeType && domUtils.isEmptyNode(c) && dtd.$removeEmpty[c.tagName];) v = c.parentNode, e.setStartBefore(c), e.startContainer === e.endContainer && e.endOffset--, domUtils.remove(c), c = v; if (!N)
                    for (c = e.endContainer; 1 == c.nodeType && domUtils.isEmptyNode(c) && dtd.$removeEmpty[c.tagName];) v = c.parentNode, e.setEndBefore(c), domUtils.remove(c), c = v } var s, n, d = new RegExp("^(?:" + (t || this.options.removeFormatTags).replace(/,/g, "|") + ")$", "i"),
                l = o ? [] : (a || this.options.removeFormatAttributes).split(","),
                g = new dom.Range(this.document),
                p = function(e) { return 1 == e.nodeType };
            g = this.selection.getRange(), g.collapsed || (i(g), g.select()) } } };;
UM.plugins.keystrokes = function() { var e = this,
        t = !0;
    e.addListener("keydown", function(r, o) { var s = o.keyCode || o.which,
            i = e.selection.getRange(); if (!i.collapsed && !(o.ctrlKey || o.shiftKey || o.altKey || o.metaKey) && (s >= 65 && 90 >= s || s >= 48 && 57 >= s || s >= 96 && 111 >= s || { 13: 1, 8: 1, 46: 1 }[s])) { var n = i.startContainer; if (domUtils.isFillChar(n) && i.setStartBefore(n), n = i.endContainer, domUtils.isFillChar(n) && i.setEndAfter(n), i.txtToElmBoundary(), i.endContainer && 1 == i.endContainer.nodeType && (n = i.endContainer.childNodes[i.endOffset], n && domUtils.isBr(n) && i.setEndAfter(n)), 0 == i.startOffset && (n = i.startContainer, domUtils.isBoundaryNode(n, "firstChild") && (n = i.endContainer, i.endOffset == (3 == n.nodeType ? n.nodeValue.length : n.childNodes.length) && domUtils.isBoundaryNode(n, "lastChild")))) return e.fireEvent("saveScene"), e.body.innerHTML = "<p>" + (browser.ie ? "" : "<br/>") + "</p>", i.setStart(e.body.firstChild, 0).setCursor(!1, !0), void e._selectionChange() } if (8 == s) { if (i = e.selection.getRange(), t = i.collapsed, e.fireEvent("delkeydown", o)) return; var a, l; if (i.collapsed && i.inFillChar() && (a = i.startContainer, domUtils.isFillChar(a) ? (i.setStartBefore(a).shrinkBoundary(!0).collapse(!0), domUtils.remove(a)) : (a.nodeValue = a.nodeValue.replace(new RegExp("^" + domUtils.fillChar), ""), i.startOffset--, i.collapse(!0).select(!0))), a = i.getClosedNode()) return e.fireEvent("saveScene"), i.setStartBefore(a), domUtils.remove(a), i.setCursor(), e.fireEvent("saveScene"), void domUtils.preventDefault(o); if (!browser.ie && (a = domUtils.findParentByTagName(i.startContainer, "table", !0), l = domUtils.findParentByTagName(i.endContainer, "table", !0), a && !l || !a && l || a !== l)) return void o.preventDefault(); if (a = i.startContainer, i.collapsed && 1 == a.nodeType) { var d = a.childNodes[i.startOffset - 1];
                d && 1 == d.nodeType && "BR" == d.tagName && (e.fireEvent("saveScene"), i.setStartBefore(d).collapse(!0), domUtils.remove(d), i.select(), e.fireEvent("saveScene")) } if (browser.chrome && i.collapsed) { for (; 0 == i.startOffset && !domUtils.isEmptyBlock(i.startContainer);) i.setStartBefore(i.startContainer); var f = i.startContainer.childNodes[i.startOffset - 1];
                f && "BR" == f.nodeName && (i.setStartBefore(f), e.fireEvent("saveScene"), $(f).remove(), i.setCursor(), e.fireEvent("saveScene")) } } if (browser.gecko && 46 == s) { var m = e.selection.getRange(); if (m.collapsed && (a = m.startContainer, domUtils.isEmptyBlock(a))) { for (var c = a.parentNode; 1 == domUtils.getChildCount(c) && !domUtils.isBody(c);) a = c, c = c.parentNode; return void(a === c.lastChild && o.preventDefault()) } } }), e.addListener("keyup", function(e, r) { var o, s = r.keyCode || r.which,
            i = this; if (8 == s) { if (i.fireEvent("delkeyup")) return; if (o = i.selection.getRange(), o.collapsed) { var n, a = ["h1", "h2", "h3", "h4", "h5", "h6"]; if ((n = domUtils.findParentByTagName(o.startContainer, a, !0)) && domUtils.isEmptyBlock(n)) { var l = n.previousSibling; if (l && "TABLE" != l.nodeName) return domUtils.remove(n), void o.setStartAtLast(l).setCursor(!1, !0); var d = n.nextSibling; if (d && "TABLE" != d.nodeName) return domUtils.remove(n), void o.setStartAtFirst(d).setCursor(!1, !0) } if (domUtils.isBody(o.startContainer)) { var n = domUtils.createElement(i.document, "p", { innerHTML: browser.ie ? domUtils.fillChar : "<br/>" });
                    o.insertNode(n).setStart(n, 0).setCursor(!1, !0) } } if (!t && (3 == o.startContainer.nodeType || 1 == o.startContainer.nodeType && domUtils.isEmptyBlock(o.startContainer)))
                if (browser.ie) { var f = o.document.createElement("span");
                    o.insertNode(f).setStartBefore(f).collapse(!0), o.select(), domUtils.remove(f) } else o.select() } }) };;
! function(t) {
    function e(e, n, r) { if (e.prototype = t.extend2(t.extend({}, n), (UM.ui[r] || o).prototype, !0), e.prototype.supper = (UM.ui[r] || o).prototype, UM.ui[r] && UM.ui[r].prototype.defaultOpt) { var i = UM.ui[r].prototype.defaultOpt,
                u = e.prototype.defaultOpt;
            e.prototype.defaultOpt = t.extend({}, i, u || {}) } return e }

    function n(e, n) { t[i + n] = e, t.fn[i + n] = function(n) { var r, o = Array.prototype.slice.call(arguments, 1); return this.each(function(i, u) { var a = t(u),
                    p = a.edui(); if (p || (e(n && t.isPlainObject(n) ? n : {}, a), a.edui(p)), "string" == t.type(n))
                    if ("this" == n) r = p;
                    else { if (r = p[n].apply(p, o), r !== p && void 0 !== r) return !1;
                        r = null } }), null !== r ? r : this } } t.parseTmpl = function(t, e) { var n = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g, function(t, e) { return "'," + e.replace(/\\'/g, "'") + ",'" }).replace(/<%([\s\S]+?)%>/g, function(t, e) { return "');" + e.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('" }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            r = new Function("obj", n); return e ? r(e) : r }, t.extend2 = function(e) { for (var n = arguments, r = "boolean" == t.type(n[n.length - 1]) ? n[n.length - 1] : !1, o = "boolean" == t.type(n[n.length - 1]) ? n.length - 1 : n.length, i = 1; o > i; i++) { var u = n[i]; for (var a in u) r && e.hasOwnProperty(a) || (e[a] = u[a]) } return e }, t.IE6 = !!window.ActiveXObject && 6 == parseFloat(navigator.userAgent.match(/msie (\d+)/i)[1]); var r = [],
        o = function() {},
        i = "edui";
    o.prototype = { on: function(e, n) { return this.root().on(e, t.proxy(n, this)), this }, off: function(e, n) { return this.root().off(e, t.proxy(n, this)), this }, trigger: function(t, e) { return this.root().trigger(t, e) === !1 ? !1 : this }, root: function(t) { return this._$el || (this._$el = t) }, destroy: function() {}, data: function(t, e) { return void 0 !== e ? (this.root().data(i + t, e), this) : this.root().data(i + t) }, register: function(e, n, o) { r.push({ evtname: e, $els: t.isArray(n) ? n : [n], handler: t.proxy(o, n) }) } }, t.fn.edui = function(t) { return t ? this.data("eduiwidget", t) : this.data("eduiwidget") }; var u = 1;
    UM.ui = { define: function(r, o, a) { var p = UM.ui[r] = e(function(e, n) { var o = function() {};
                t.extend(o.prototype, p.prototype, { guid: r + u++, widgetName: r }); var a = new o; if ("string" == t.type(e)) return a.init && a.init({}), a.root().edui(a), a.root().find("a").click(function(t) { t.preventDefault() }), a.root()[i + r].apply(a.root(), arguments);
                n && a.root(n), a.init && a.init(!e || t.isPlainObject(e) ? t.extend2(e || {}, a.defaultOpt || {}, !0) : e); try { a.root().find("a").click(function(t) { t.preventDefault() }) } catch (c) {} return a.root().edui(a) }, o, a);
            n(p, r) } }, t(function() { t(document).on("click mouseup mousedown dblclick mouseover", function(e) { t.each(r, function(n, r) { r.evtname == e.type && t.each(r.$els, function(n, o) { o[0] === e.target || t.contains(o[0], e.target) || r.handler(e) }) }) }) }) }(jQuery);;
UM.ui.define("button", { tpl: '<<%if(!texttype){%>div class="edui-btn edui-btn-<%=icon%> <%if(name){%>edui-btn-name-<%=name%><%}%>" unselectable="on" onmousedown="return false" <%}else{%>a class="edui-text-btn"<%}%><% if(title) {%> data-original-title="<%=title%>" <%};%>> <% if(icon) {%><div unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><% }; %><%if(text) {%><span unselectable="on" onmousedown="return false" class="edui-button-label"><%=text%></span><%}%><%if(caret && text){%><span class="edui-button-spacing"></span><%}%><% if(caret) {%><span unselectable="on" onmousedown="return false" class="edui-caret"></span><% };%></<%if(!texttype){%>div<%}else{%>a<%}%>>', defaultOpt: { text: "", title: "", icon: "", width: "", caret: !1, texttype: !1, click: function() {} }, init: function(t) { var e = this; return e.root($($.parseTmpl(e.tpl, t))).click(function(i) { e.wrapclick(t.click, i) }), e.root().hover(function() { e.root().hasClass("edui-disabled") || e.root().toggleClass("edui-hover") }), e }, wrapclick: function(t, e) { return this.disabled() || (this.root().trigger("wrapclick"), $.proxy(t, this, e)()), this }, label: function(t) { return void 0 === t ? this.root().find(".edui-button-label").text() : (this.root().find(".edui-button-label").text(t), this) }, disabled: function(t) { return void 0 === t ? this.root().hasClass("edui-disabled") : (this.root().toggleClass("edui-disabled", t), this.root().hasClass("edui-disabled") && this.root().removeClass("edui-hover"), this) }, active: function(t) { return void 0 === t ? this.root().hasClass("edui-active") : (this.root().toggleClass("edui-active", t), this) }, mergeWith: function(t) { var e = this;
        e.data("$mergeObj", t), t.edui().data("$mergeObj", e.root()), $.contains(document.body, t[0]) || t.appendTo(e.root()), e.on("click", function() { e.wrapclick(function() { t.edui().show() }) }).register("click", e.root(), function() { t.hide() }) } });;
! function() { UM.ui.define("toolbar", { tpl: '<div class="edui-toolbar"  ><div class="edui-btn-toolbar" unselectable="on" onmousedown="return false"  ></div></div>', init: function() { var t = this.root($(this.tpl));
            this.data("$btnToolbar", t.find(".edui-btn-toolbar")) }, appendToBtnmenu: function(t) { var n = this.data("$btnToolbar");
            t = $.isArray(t) ? t : [t], $.each(t, function(t, o) { n.append(o) }) } }) }();;
UM.ui.define("splitbutton", { tpl: '<div class="edui-splitbutton <%if (name){%>edui-splitbutton-<%= name %><%}%>"  unselectable="on" <%if(title){%>data-original-title="<%=title%>"<%}%>><div class="edui-btn"  unselectable="on" ><%if(icon){%><div  unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><%}%><%if(text){%><%=text%><%}%></div><div  unselectable="on" class="edui-btn edui-dropdown-toggle" ><div  unselectable="on" class="edui-caret"></div></div></div>', defaultOpt: { text: "", title: "", click: function() {} }, init: function(i) { var t = this; return t.root($($.parseTmpl(t.tpl, i))), t.root().find(".edui-btn:first").click(function() { t.disabled() || $.proxy(i.click, t)() }), t.root().find(".edui-dropdown-toggle").click(function() { t.disabled() || t.trigger("arrowclick") }), t.root().hover(function() { t.root().hasClass("edui-disabled") || t.root().toggleClass("edui-hover") }), t }, wrapclick: function(i, t) { return this.disabled() || $.proxy(i, this, t)(), this }, disabled: function(i) { return void 0 === i ? this.root().hasClass("edui-disabled") : (this.root().toggleClass("edui-disabled", i).find(".edui-btn").toggleClass("edui-disabled", i), this) }, active: function(i) { return void 0 === i ? this.root().hasClass("edui-active") : (this.root().toggleClass("edui-active", i).find(".edui-btn:first").toggleClass("edui-active", i), this) }, mergeWith: function(i) { var t = this;
        t.data("$mergeObj", i), i.edui().data("$mergeObj", t.root()), $.contains(document.body, i[0]) || i.appendTo(t.root()), t.root().delegate(".edui-dropdown-toggle", "click", function() { t.wrapclick(function() { i.edui().show() }) }), t.register("click", t.root().find(".edui-dropdown-toggle"), function() { i.hide() }) } });;
! function() { var t = {},
        e = {},
        i = [],
        n = null,
        r = {},
        a = {},
        o = {},
        d = null;
    utils.extend(UM, { defaultWidth: 500, defaultHeight: 500, registerUI: function(e, i) { utils.each(e.split(/\s+/), function(e) { t[e] = i }) }, setEditor: function(t) {!e[t.id] && (e[t.id] = t) }, registerWidget: function(t, e, i) { r[t] = $.extend2(e, { $root: "", _preventDefault: !1, root: function(t) { return this.$root || (this.$root = t) }, preventDefault: function() { this._preventDefault = !0 }, clear: !1 }), i && (a[t] = i) }, getWidgetData: function(t) { return r[t] }, setWidgetBody: function(t, e, i) { i._widgetData || utils.extend(i, { _widgetData: {}, getWidgetData: function(t) { return this._widgetData[t] }, getWidgetCallback: function(t) { var i = this; return function() { return a[t].apply(i, [i, e].concat(Array.prototype.slice.call(arguments, 0))) } } }); var n = r[t]; return n ? (n = i._widgetData[t], n || (n = r[t], n = i._widgetData[t] = "function" == $.type(n) ? n : utils.clone(n)), n.root(e.edui().getBodyContainer()), n.initContent(i, e), n._preventDefault || n.initEvent(i, e), void(n.width && e.width(n.width))) : null }, setActiveWidget: function(t) { n = t }, getEditor: function(t, i) { var n = e[t] || (e[t] = this.createEditor(t, i)); return d = d ? Math.max(n.getOpt("zIndex"), d) : n.getOpt("zIndex"), n }, setTopEditor: function(t) { $.each(e, function(e, i) { t == i ? t.$container && t.$container.css("zIndex", d + 1) : i.$container && i.$container.css("zIndex", i.getOpt("zIndex")) }) }, clearCache: function(t) { e[t] && delete e[t] }, delEditor: function(t) { var i;
            (i = e[t]) && i.destroy() }, ready: function(t) { i.push(t) }, createEditor: function(t, e) {
            function n() { var e = this.createUI("#" + t, r);
                r.key = t, r.ready(function() { $.each(i, function(t, e) { $.proxy(e, r)() }) }); var n = r.options;
                n.minFrameWidth = n.initialFrameWidth ? n.initialFrameWidth : n.initialFrameWidth = r.$body.width() || UM.defaultWidth, e.css({ width: n.initialFrameWidth, zIndex: r.getOpt("zIndex") }), UM.browser.ie && 6 === UM.browser.version && document.execCommand("BackgroundImageCache", !1, !0), r.render(t), $.eduitooltip && $.eduitooltip("attachTo", $("[data-original-title]", e)).css("z-index", r.getOpt("zIndex") + 1), e.find("a").click(function(t) { t.preventDefault() }), r.fireEvent("afteruiready") } var r = new UM.Editor(e),
                a = this; return r.langIsReady ? $.proxy(n, a)() : r.addListener("langReady", $.proxy(n, a)), r }, createUI: function(e, i) { var n = $(e),
                r = $('<div class="edui-container"><div class="edui-editor-body"></div></div>').insertBefore(n); if (i.$container = r, i.container = r[0], i.$body = n, browser.ie && browser.ie9above) { var a = $('<span style="padding:0;margin:0;height:0;width:0"></span>');
                a.insertAfter(r) } return $.each(t, function(t, e) { var n = e.call(i, t);
                n && (o[t] = n) }), r.find(".edui-editor-body").append(n).before(this.createToolbar(i.options, i)), r.find(".edui-toolbar").append($('<div class="edui-dialog-container"></div>')), r }, createToolbar: function(t) { var e = $.eduitoolbar(),
                i = e.edui(); if (t.toolbar && t.toolbar.length) { var n = [];
                $.each(t.toolbar, function(t, e) { $.each(e.split(/\s+/), function(t, e) { if ("|" == e) $.eduiseparator && n.push($.eduiseparator());
                        else { var i = o[e]; "fullscreen" == e ? i && n.unshift(i) : i && n.push(i) } }), n.length && i.appendToBtnmenu(n) }) } else e.find(".edui-btn-toolbar").remove(); return e } }) }();;
UM.registerUI("bold italic redo undo underline strikethrough superscript subscript insertorderedlist insertunorderedlist cleardoc selectall link unlink print preview justifyleft justifycenter justifyright justifyfull removeformat horizontal drafts", function(e) { var t = this,
        i = $.eduibutton({ icon: e, click: function() { t.execCommand(e) }, title: this.getLang("labelMap")[e] || "" }); return this.addListener("selectionchange", function() { var t = this.queryCommandState(e);
        i.edui().disabled(-1 == t).active(1 == t) }), i });