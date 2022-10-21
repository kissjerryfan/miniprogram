// pages/sentence/sentence.js
import {baseURL,everyday} from '../../network/config.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordList: []
  },
  //将毫秒的时间转换成美式英语的时间格式,eg:3rd May 2018
  formatDate: function (millinSeconds){
    const date = new Date(millinSeconds);
    const monthArr = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec");
    // const suffix = new Array("st","nd","rd","th");
    const year = date.getFullYear(); //年
    const month = monthArr[date.getMonth()]; //月
    const ddate = date.getDate(); //日
    // if(ddate % 10 < 1 || ddate % 10 > 3) {
    //   ddate = ddate + suffix[3];
    // }else if(ddate % 10 == 1) {
    //   ddate = ddate + suffix[0];
    // } else if(ddate % 10 == 2) {
    //   ddate = ddate + suffix[1];
    // }else {
    //   ddate = ddate + suffix[2];
    // }
    // return ddate + " "+ month + " " + year;
    //console.log(ddate+month + " " + year)
    return {
      day: ddate,
      date: month + " " + year
    }
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    var _this=this
    let nowDate = new Date().getTime()
    let dayInfo = _this.formatDate( nowDate - 24*60*60*1000*0).day+_this.formatDate(nowDate - 24*60*60*1000*0).date
    console.log(dayInfo+"本地");
    let ens7
    let zh7
    let author7
    
    // //test
    // everyday(dayInfo).then(res =>{
    //   //console.log("test111111111111111");
    //   var _this=this
    //   wx.request({
    //     url: 'http://120.24.60.90:3000/everyday',
    //     data: {
    //       dayInfo: this.formatDate( nowDate - 24*60*60*1000*0).day+this.formatDate(nowDate - 24*60*60*1000*0).date
    //     },
    //     method: 'GET', 
    //     header: {
    //       'content-type': 'application/json' // 默认值
    //     },
    //     success: function (res) {
    //       // 一般在这一打印下看看是否拿到数据
    //       console.log('kkkkk'+zh7)
    //       console.log('kkkkk'+ens7)
    //       console.log('kkkkk'+author7)
    //       console.log(dayInfo)
    //       }
    //     })
    // })
      

    //总
    everyday(dayInfo).then(res =>{
      //console.log("test111111111111111");
      console.log(dayInfo+" 传入的")
      if(res.status == 0) {
        console.log("testerror");
      }
      else if (res.status == 1) {
        console.log(res)
        ens7=res.data.en
        console.log(ens7+" 找到的")
        zh7=res.data.zh
        author7=res.data.author
        this.setData({
          wordList: [
            {
              img: baseURL + '/public/img/daily/01.jpg',
              en: 'A man can be destoryed but not defeated. ',
              zh: '一个人可以被毁灭，却不能被打败。',
              author: '《老人与海》',
              day:this.formatDate( nowDate - 24*60*60*1000*6).day,
              date: this.formatDate( nowDate - 24*60*60*1000*6).date
            },
            {
              img: baseURL + '/public/img/daily/02.jpg',
              en: 'Get busy living or get busy dying.',
              zh: '忙着去生，忙着去死。',
              author: '《肖申克的救赎》',
              day:this.formatDate( nowDate - 24*60*60*1000*5).day,
              date: this.formatDate(nowDate - 24*60*60*1000*5).date
            },
            {
              img: baseURL + '/public/img/daily/03.jpg',
              en: "Some of us get dipped in flat, some in satin, some in gloss. But every once in a while you find someone who's iridescent, and when you do, nothing will ever compare.",
              zh: '有人住高楼，有人在深沟，有人光万丈，有人一身锈，世人万千种，浮云莫去求，斯人若彩虹，遇上方知有。',
              author: '《怦然心动》',
              day:this.formatDate( nowDate - 24*60*60*1000*4).day,
              date: this.formatDate(nowDate - 24*60*60*1000*4).date
            },
            {
              img: baseURL + '/public/img/daily/04.jpg',
              en: 'Love is the one thing that transcends time and space. ',
              zh: '只有爱可以穿越时空。',
              author: '《星际穿越》',
              day:this.formatDate( nowDate - 24*60*60*1000*3).day,
              date: this.formatDate(nowDate - 24*60*60*1000*3).date
            },
            {
              img: baseURL + '/public/img/daily/05.jpg',
              en: 'There is only so much fortune a man really needs, and the rest is just for showing off.',
              zh: '人真正需要的财富只有那么一些，剩下的只不过是用来炫耀罢了。',
              author: '《阿甘正传》',
              day:this.formatDate( nowDate - 24*60*60*1000*2).day,
              date: this.formatDate(nowDate - 24*60*60*1000*2).date
            },
            {
              img: baseURL + '/public/img/daily/06.jpg',
              en: 'It was an age of miracles, it was an age of art, it was an age of excess, and it was an age of satire.',
              zh: '这是一个奇迹的时代，一个艺术的时代，一个挥金如土的时代，也是一个充满嘲讽的时代。',
              author: '《了不起的盖茨比》',
              day:this.formatDate( nowDate - 24*60*60*1000*1).day,
              date: this.formatDate(nowDate - 24*60*60*1000*1).date
            },
            {
              img: baseURL + '/public/img/daily/07.jpg',
              //en: 'Later, respectively, wander and suffer sorrow.',
              //en: 'Later, respectively, wander and suffer sorrow.',
              //en: ens7,
              en: 'Later, respectively, wander and suffer sorrow.',
              zh: '今后各自曲折，各自悲哀。',
              author: '《Gone with the wind》',
              day:this.formatDate( nowDate - 24*60*60*1000*0).day,
              date: this.formatDate(nowDate - 24*60*60*1000*0).date
            }
            //this.getPaper(dayInfo)
          ]
        })
      }
      else{
        console.log(res);
      }

    })
    //console.log(this.getPaper(dayInfo))
    


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

  }
})


// wordList: [
//   {
//     img: baseURL + '/public/img/daily/01.jpg',
//     en: 'A man can be destoryed but not defeated. ',
//     zh: '一个人可以被毁灭，却不能被打败。',
//     author: '《老人与海》',
//     day:this.formatDate( nowDate - 24*60*60*1000*6).day,
//     date: this.formatDate( nowDate - 24*60*60*1000*6).date
//   },
//   {
//     img: baseURL + '/public/img/daily/02.jpg',
//     en: 'Get busy living or get busy dying.',
//     zh: '忙着去生，忙着去死。',
//     author: '《肖申克的救赎》',
//     day:this.formatDate( nowDate - 24*60*60*1000*5).day,
//     date: this.formatDate(nowDate - 24*60*60*1000*5).date
//   },
//   {
//     img: baseURL + '/public/img/daily/03.jpg',
//     en: "Some of us get dipped in flat, some in satin, some in gloss. But every once in a while you find someone who's iridescent, and when you do, nothing will ever compare.",
//     zh: '有人住高楼，有人在深沟，有人光万丈，有人一身锈，世人万千种，浮云莫去求，斯人若彩虹，遇上方知有。',
//     author: '《怦然心动》',
//     day:this.formatDate( nowDate - 24*60*60*1000*4).day,
//     date: this.formatDate(nowDate - 24*60*60*1000*4).date
//   },
//   {
//     img: baseURL + '/public/img/daily/04.jpg',
//     en: 'Love is the one thing that transcends time and space. ',
//     zh: '只有爱可以穿越时空。',
//     author: '《星际穿越》',
//     day:this.formatDate( nowDate - 24*60*60*1000*3).day,
//     date: this.formatDate(nowDate - 24*60*60*1000*3).date
//   },
//   {
//     img: baseURL + '/public/img/daily/05.jpg',
//     en: 'There is only so much fortune a man really needs, and the rest is just for showing off.',
//     zh: '人真正需要的财富只有那么一些，剩下的只不过是用来炫耀罢了。',
//     author: '《阿甘正传》',
//     day:this.formatDate( nowDate - 24*60*60*1000*2).day,
//     date: this.formatDate(nowDate - 24*60*60*1000*2).date
//   },
//   {
//     img: baseURL + '/public/img/daily/06.jpg',
//     en: 'It was an age of miracles, it was an age of art, it was an age of excess, and it was an age of satire.',
//     zh: '这是一个奇迹的时代，一个艺术的时代，一个挥金如土的时代，也是一个充满嘲讽的时代。',
//     author: '《了不起的盖茨比》',
//     day:this.formatDate( nowDate - 24*60*60*1000*1).day,
//     date: this.formatDate(nowDate - 24*60*60*1000*1).date
//   },
//   {
//     img: baseURL + '/public/img/daily/07.jpg',
//     //en: 'Later, respectively, wander and suffer sorrow.',
//     //en: 'Later, respectively, wander and suffer sorrow.',
//     en: ens7,
//     zh: '1111111',
//     author: '《Gone with the wind》',
//     day:this.formatDate( nowDate - 24*60*60*1000*0).day,
//     date: this.formatDate(nowDate - 24*60*60*1000*0).date
//   }
// ]