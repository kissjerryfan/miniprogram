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
    title1:"Youth",
    title2:"Literature",
    title3:"War",
    title4:"Technology",
    title5:"Inspiration",
    title6:"Psychology",
    title7:"Society",
    title:"Strength"
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