//app.js
App({
    setConfig: {
        url: 'https://wx.sanshengshi.ltd',
        xcx: 59,
        appName: '猫和老鼠手游资讯',
        shareTitle: '猫和老鼠手游资讯'
    },
    ajax: function(url, callback = function() {}) {
        wx.request({
            url: url,
            success: function(res) {
                callback(res)
            },
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    onLaunch: function() {
        this.ajax(`${this.setConfig.url}/index/xcxsite/list.html?xcx=${this.setConfig.xcx}&type=2`, res => {
            console.log('启动跳转：', res)
            if (res.data.status != 0) {
                let param = {};
                let params = res.data[0].jump_parse.split("&");
                params.forEach((currentValue, index) => {
                    param[currentValue.split("=")[0]] = currentValue.split("=")[1];
                })
                param['appname'] = res.data[0].xcx_name;
                param['boxname'] = this.setConfig.appName;
                if (typeof(param.appid) != 'undefined') {
                    // console.log('去跳转', param, `《${param.boxname}》启动自跳转到<${param.appname}>`)
                    this.toMiniProgram(param)
                }
            } else {
                return false;
            }

        })
        var t = this;
        wx.request({
            url: `${t.setConfig.url}/index/xcxSite/index.html?xcx=${t.setConfig.xcx}`,
            success: res => {
                console.log(res)
                t.setConfig.adv = res.data.adv;
            }
        })
    },
    globalData: {
        userInfo: null
    },
    toMiniProgram(extraData) {
        console.log('extraDataextraDataextraData', extraData)
        if (extraData.appid) {
            wx.navigateToMiniProgram({
                appId: extraData.appid,
                extraData: extraData,
            })
        }
    }
})