// pages/test02/test02.js
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    cl:"",
    suocun:0,
    src:"/pages/static/image/圆点-白.png"
  },
  test1(){
    wx.redirectTo({
      url: '/pages/test01/test01' 
    })
  },
  test2:function () {
    if(this.data.suocun){
      app.globalData.count += 1
    }
     
  },
  handinput(e){
    var val = e.detail.value;
      if(val != ''){
        this.setData({
            cl:"black",
            suocun:1
         })
      } 
      else{
        this.setData({
            cl:"#C5C5C7",
            suocun:0
         })
      } 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(app.globalData.count>0){
      this.setData({
        src:"/pages/static/image/圆点-橙.png"
      })
      
    }
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