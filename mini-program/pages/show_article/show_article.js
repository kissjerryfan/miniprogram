// pages/show_article/show_article.js
const App = getApp()
import {
  getSubjectList
} from '../../network/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: null,
    open : false,
    text: [],
    hiddenRecord: true,
    writing_tmp: `
    &nbsp;&nbsp;&nbsp;&nbsp;Not until you realize that life itself is a beautiful thing will you really start to live.Although living combines tragedy with splendor, life is beautiful and even tragedies reflect something engaging.If you were simply to live, do more than that; live beautifully.
    
    翻译：

    &nbsp;&nbsp;&nbsp;&nbsp;只有在你了解了人生的真谛后，才能真正地生活。虽然人生苦忧参半，但依旧美妙，而且即使在悲剧中也藏着迷人之处。也藏着迷人之处。如果你只是活着，那就再努力点吧，试着活得精彩。
    `
  },

  handlerGohomeClick() {
    wx.navigateTo({
      url: '/pages/categories/categories'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
        title: options.title
      }),
      wx.setNavigationBarTitle({
        title: "文章拾趣"
      }),
      this.split_writing()
      this.setData()
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

  },

  split_writing() {
    let tmp = this.data.writing_tmp.split(/[(\r\n)\r\n]+/);
    tmp=tmp.filter(i=>i && i.trim());
    tmp.forEach(function(tmp){
      tmp=tmp.trim()
    })
    this.setData({
      text:tmp.flatMap((x)=>x.trim())
    })
  }
})