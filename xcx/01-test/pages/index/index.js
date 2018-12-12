//index.js
//获取应用实例
const app = getApp()


Page({
    data: {
        currentTab: 0,
        userInfo: {},
        userText: '',
        userImage: '',
        author: 'Mr xu',
        name: '蔡依林-love love love',
        imgUrl: '../../images/portrait.png',
        signText: '',
        swiperText: ['文字轮播1', '文字轮播2', '文字轮播3'],
        audioSrc: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        playText: '开始',
        playBol: !1,
        // testComponent:'我是组件'
        innerText: {
            title: '组件标题',
            content: '组件内容'
        },
        showBol: true,
        showText: '显示'
    },


    //滑动切换
    swiperTab: function(e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    //点击切换
    clickTab: function(e) {
        var that = this;
        that.setData({
            currentTab: e.target.dataset.current
        })
    },

    

    startPlayVideo: function(e) {
        // console.log('开始')

        this.videoContext.play()
    },
    stopPlayVideo: function(e) {
        // console.log('暂停')

        this.videoContext.pause()
    },
    tap1: function(e) {
        if (this.data.showBol) {
            this.setData({
                showText: '隐藏'
            })
        } else {
            this.setData({
                showText: '显示'
            })
        }

        this.setData({
            showBol: !this.data.showBol
        })
    },
    scrollEvent: function(e) {

    },



    onLoad: function() {

        if (wx.getStorageSync('userInfo')) {
            this.setData({
                userInfo: wx.getStorageSync('userInfo')
            })
        }



        if (wx.getStorageSync('lastDay') != this.getToday()) {
            this.setData({
                signText: '每日签到'
            })
        } else {
            this.setData({
                signText: '已签到'
            })
        }
    },
    onReady: function() {
        this.audioCtx = wx.createAudioContext('myMusic')
        wx.createAudioContext('myMusic', this);

        this.videoContext = wx.createVideoContext('myVideo');
    },
    /// 双击
    doubleClick: function(e) {
        var curTime = e.timeStamp
        var lastTime = e.currentTarget.dataset.time // 通过e.currentTarget.dataset.time 访问到绑定到该组件的自定义数据
        // console.log(lastTime)
        if (curTime - lastTime > 0) {
            if (curTime - lastTime < 300) {
                // console.log("挺快的双击，用了：" + (curTime - lastTime))
                console.log('双击事件')
            }
        }
        this.setData({
            lastTapTime: curTime
        })
    },


    getUser: function(e) {
        console.log(e)
        var _this = this;
        _this.setData({
            userInfo: e.detail.userInfo
        })
        wx.setStorageSync('userInfo', _this.data.userInfo)
    },
    onShareAppMessage: function(res) {


    },
    onShow: function() {

    },
    playMusic: function() {
        if (!this.data.playBol) {
            this.audioCtx.play();
            this.setData({
                playText: '暂停'
            })
        } else {
            this.audioCtx.pause();
            this.setData({
                playText: '开始'
            })
        }
        this.setData({
            playBol: !this.data.playBol
        })
    },

    // 每日签到
    qiandao: function() {
        var _this = this;
        var lastDay = wx.getStorageSync('lastDay') || '';
        var toDay = _this.getToday();

        if (lastDay != toDay) {
            // 新的一天

            lastDay = toDay;
            wx.setStorageSync('lastDay', lastDay)

            _this.setData({
                signText: '已签到'
            })

        } else {
            // 不是新的一天

            wx.showToast({
                title: '已经签到过啦',
                icon: 'none',
            })
        }

    },

    // 获取今天日期
    getToday: function() {
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    },
    preImage: function(e) {
        wx.previewImage({
            urls: ['https://xcxoss.sanshengshi.ltd/pub/static/xmylc/xmqr.jpg'],
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    }



})