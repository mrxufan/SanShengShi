Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    // innerText: {
    //   type: String,
    //   value: '',
    // },
    innerText:Object  //简写形式
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    _tap1:function(){
      console.log('来自组件的事件')
    }
  }
})