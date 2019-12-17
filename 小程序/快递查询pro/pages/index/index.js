//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
        index:0,
      array: ['自动识别', '百世汇通', 'EMS', '申通快递', '天天快递', '韵达快递', '圆通快递','中通快递'],  
        numbers:''  ,
      loading:false,
      result:false,
      dataArr:[],
      kdName:'自动识别',
      aniImage: '',
      jumpAppid: '',
      shareSjNum: 0,
      shareInfo: ''
  },
  //事件处理函数
 
  onLoad: function () {
      var n = this;

      // 跳转配置
      wx.request({
          url: 'https://wx.sanshengshi.ltd//index/xcxsite/list.html?xcx=228&type=3',
          success: function (res) {
              // console.log(res)
              n.setData({
                  aniImage: res.data[0].icon_image,
                  jumpAppid: res.data[0].jump_appid
              })
              // console.log(n.data.jumpAppid)

              wx.setStorageSync('stor_icon', n.data.aniImage);
              wx.setStorageSync('stor_jump_appid', n.data.jumpAppid)
          }
      })


      // 分享配置
      wx.request({
          url: 'https://wx.sanshengshi.ltd/event/xcxsite/config.html?xcx=228',
          success: function (res) {
              // console.log(res)
              n.setData({
                  shareInfo: res.data.xcx_config.share_info
              })

              // console.log(n.data.shareInfo)

              wx.setStorageSync('stor_share_info', n.data.shareInfo)
          }
      })


      // 广告
      wx.request({
          url: 'https://wx.sanshengshi.ltd/index/xcxSite/index.html?xcx=228',
          success: function (res) {
              n.setData({
                  adv: res.data.adv
              })
              wx.setStorageSync('stor_adv', n.data.adv)
          }
      })
  },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e)
        this.setData({
            index: e.detail.value
        })
    },
    searchBtn:function(){
        this.setData({
            result: false,
            dataArr: [],
            kdName:'自动识别'
        })
        if(this.data.numbers==''){
            wx.showToast({
                title: '请输入正确的快递单号',
                icon: 'none',
            })
            return;
        }

        this.setData({
            loading: true,
        })
   

        var _this=this;

        wx.request({
            url: `https://wx.sanshengshi.ltd/event/deliver/select.html?num=${_this.data.numbers}`,
            data: '',
            method: 'GET',
            success: function(res) {
                console.log(res)
                if (res.data.message=='ok'){
                    _this.setData({
                        dataArr: res.data.data,
                        result:false,
                        kdName:res.data.name
                    })
                    console.log(_this.data.dataArr)
                }else{
                    _this.setData({
                        result: true
                    })
                }
               
            },
            fail:function(res){
                _this.setData({
                    result:true
                })
            },
            complete:function(){
                _this.setData({
                    loading: false
                })
            }
        })
    },
    bindInput:function(e){
        // console.log(e.detail.value)
        this.setData({
            numbers: e.detail.value
        })
    },
    onShareAppMessage:function(){
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
