// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      aniImage: '',
      jumpAppid: '',
      shareSjNum: 0,
      shareInfo: ''
  },

  // 百世汇通
  bshtCall:function(){
    wx.makePhoneCall({
      phoneNumber: '95320'
    })
  },
  // ems
  emsCall: function () {
    wx.makePhoneCall({
      phoneNumber: '11183'
    })
  },
  // 顺丰快递
  sfkdCall: function () {
    wx.makePhoneCall({
      phoneNumber: '95338'
    })
  },
  // 申通快递
  stkdCall: function () {
    wx.makePhoneCall({
      phoneNumber: '95543'
    })
  },
  // 天天快递
  ttkdCall: function () {
    wx.makePhoneCall({
      phoneNumber: '400-188-8888'
    })
  },
  // 韵达快递
  ydkdCall: function () {
    wx.makePhoneCall({
      phoneNumber: '95546'
    })
  },
  // 圆通快递
  ytkdCall: function () {
    wx.makePhoneCall({
      phoneNumber: '95554'
    })
  },
  // 邮政小包
  yzxbCall: function () {
    wx.makePhoneCall({
      phoneNumber: '11183'
    })
  },
  // 宅急送
  zjsCall: function () {
    wx.makePhoneCall({
      phoneNumber: '400-6789-000'
    })
  },
  // 中通快递
  ztkdCall: function () {
    wx.makePhoneCall({
      phoneNumber: '95311'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      this.setData({
          aniImage: wx.getStorageSync('stor_icon'),
          jumpAppid: wx.getStorageSync('stor_jump_appid'),
          shareInfo: wx.getStorageSync('stor_share_info')
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      var _this = this;

      _this.setData({
          shareSjNum: Math.round(Math.random() * (_this.data.shareInfo.length - 1))
      })

      console.log(_this.data.shareSjNum)

      return {
          title: _this.data.shareInfo[_this.data.shareSjNum].share_word,
          imageUrl: _this.data.shareInfo[_this.data.shareSjNum].share_image,

      }
  }
})