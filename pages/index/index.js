// pages/index/index.js
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    tabs: ['需求', '案例'],
    tabIndex: 0,
    requirementList: [],
    caseList: [],
  },

  init(){
    // 云数据初始化
    wx.cloud.init()

    // TODO: 轮播图需要写活
    const swiperList = [
      {
        'id': 1,
        'swiperPic':'1.jpg'
      },
      {
        'id': 2,
        'swiperPic':'2.jpg'
      }
    ]
    const caseList = [
      {
        'id': 1,
        'name': '用户姓名-title',
        'title': '这是一个例子',
      },
      {
        'id': 2,
        'name': 'nam用户姓名-titlee2',
        'title': '这是一个例子',
      }
    ]
    this.setData({
      swiperList,
      caseList
    })
    let that = this
    const db = wx.cloud.database()
    db.collection('requirement').get({
      success: function(res) {
        // res.data 是包含以上定义的两条记录的数组
        that.setData({
          requirementList: res.data
        })
      }
    })
  },

  // 处理点击tab
  onTabClick(e) {
    let id = e.currentTarget.id;
    this.setData({
      tabIndex: id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})