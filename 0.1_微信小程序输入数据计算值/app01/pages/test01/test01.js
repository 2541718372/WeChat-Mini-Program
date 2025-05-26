// pages/test01/test01.js
var count=1,yuwen,shuxue;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    display:"none",
    name:"",
    yuwen:"",
    shuxue:"",
    avg:""
  },

  test(options) {
    count++;
    if(count%2==0){
      this.setData({
        display:'block'
      })
    }else{
      this.setData({
        display:'none'
      })
    }
  },
  text1(e1){
    console.log(e1.detail.value);
    this.setData({
      name:e1.detail.value
    })
  },
  text2(e2){
    console.log(e2.detail.value);
    this.setData({
      yuwen:e2.detail.value
    })
  },
  text3(e3){
    console.log(e3.detail.value);
    this.setData({
      shuxue:e3.detail.value
    })
  },
  text4(e4){
    console.log(e4.detail.value);
    this.setData({
      yuwen:e2.detail.value,
      shuxue:e3.detail.value,
       avg:(yuwen+shuxue)/2, 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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