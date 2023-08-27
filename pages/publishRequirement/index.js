// pages/publishRequirement/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    reqTypeList: ['设计服务', '修改bug', '新需求'],
    reqTypeIndex: 0
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带s值为', e.detail.value)
      this.setData({
        reqTypeIndex: e.detail.value
      })
    },
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
  }
})
