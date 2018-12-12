// pages/article/article.js
const app = getApp()
let url = app.setConfig.url;
const R_htmlToWxml = require('../../utils/htmlToWxml.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        newsData: {},
        data: {},
        imgArr: [],
        id: '',
        adv: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        that.setData({
            adv: app.setConfig.adv
        })
        that.setData({
            id: options.id
        })
        wx.request({
            url: `${url}/index/article.html?id=${options.id}&xcx=${app.setConfig.xcx}`,
            success: function (res) {
                wx.setNavigationBarTitle({
                    title: res.data.title,

                })
                let re = res.data.content
                re = res.data.content.replace(/&nbsp;/ig, '');
                let content = R_htmlToWxml.html2json(re)
                that.setData({
                    ["data.content"]: content,
                    ["data.thum_img"]: res.data.thum_img,
                    ["data.title"]: res.data.title,
                    ["data.description"]: res.data.description
                })
                let imgArr = [];
                for (let o in content) {
                    if (content[o].type == 'img') {
                        imgArr.push(content[o].attr.src)
                    }

                }
                that.setData({
                    imgArr: imgArr
                })

            },
            fail: function (res) { },
            complete: function (res) { },
        })

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (res) {
        let that = this;
        return {
            title: that.data.data.title,
            path: `/pages/index/index?id=${that.data.id}&from=share`,
            success: function (res) {
                wx.showToast({
                    title: '转发成功',
                    icon: 'success'
                })
            },
            fail: function (res) {
            }
        }
    },

    navigateTo: function (e) {
        wx.navigateTo({
            url: `../article/article?xcx=1&id=${e.currentTarget.dataset.id}`,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    showImg: function (e) {
        let that = this;
        wx.previewImage({
            current: e.currentTarget.dataset.src,
            urls: that.data.imgArr 
        })
    }
})