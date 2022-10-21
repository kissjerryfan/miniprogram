// pages/writing/writing.js
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
    text: [],
    hiddenRecord: true,
    writing_tmp: `Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life.

    Youth means a temperamental predominance of courage over timidity, of the appetite for adventure over the love of ease. This often exists in a man of 60 more than a boy of 20. Nobody grows old merely by a number of years. We grow old by deserting our ideals.
    
    Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul. Worry, fear, self-distrust bows the heart and turns the spirit back to dust.
    
    Whether 60 or 16, there is in every human being’s heart the lure of wonders, the unfailing appetite for what’s next and the joy of the game of living. In the center of your heart and my heart, there is a wireless station; so long as it receives messages of beauty, hope, courage and power from man and from the infinite, so long as you are young.
    
    When your aerials are down, and your spirit is covered with snows of cynicism and the ice of pessimism, then you’ve grown old, even at 20; but as long as your aerials are up, to catch waves of optimism, there’s hope you may die young at 80.`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
        title: options.title
      }),
      wx.setNavigationBarTitle({
        title: "文章跟读"
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
  },
  down(e){
      wx.setStorageSync('ise', e.currentTarget.dataset.text)
      console.log(e.currentTarget.dataset.text)
      wx.navigateTo({
        url: '/pages/ise/ise?type='+ "ocr"
    })
  }
})