// pages/index/index.js

//获取应用实例
// var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent:0,
    indicatorDots:true,//轮播图小点
    vertical:false,//滑动方向是否纵向
    autoplay:true,//是否自动播放
    interval:3000,//自动播放间隔时间
    duration:800,//滑动动画时间
    circular:true,

    bannerUrls: [
      '../images/banner_1.jpg',
      '../images/banner_2.jpg',
      '../images/banner_3.jpg',
      '../images/banner_4.jpg'
    ],
    
    links:[//点击banner图片 进入地址
      '../user/user',
      '../user/user',
      '../user/user',
      '../user/user'
    ]
  },

  //轮播图的切换事件
  swiperChange:function(e){
    this.setData({
      swiperCurrent:e.detail.current
    })
  },

  //点击指示点切换
  chuangEvent:function(e){
    this.setData({
      swiperCurrent:e.currentTarget.id
    })
  },

  //点击图片触发事件
  swipclick:function(e){
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url:this.data.links[this.data.swiperCurrent]
    })
  },

//事件处理函数
bindViewTap:function(){
  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option){
    
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