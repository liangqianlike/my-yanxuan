<template>
  <div class="shopping main">
      <div class="shopping-header">
          <div class="shopping-header-left">购物车</div>
          <div class="shopping-header-right">领劵</div>
      </div>
      <ul class="shopping-classify">
          <li class="shopping-classify-item">30天无忧退货</li>
          <li class="shopping-classify-item">48小时快速退款</li>
          <li class="shopping-classify-item">满88元免邮费</li>
      </ul>
      <div class="shopping-content">
          <div class="shopping-content-text">去添加点什么吧</div>
          <button class="shopping-content-button">登录</button>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopping
  width 100%
  height 100%
  &.main
    display none
  .shopping-header
    width 100%
    height 44px
    font-size 20px
    line-height 44px
    background-color white
    //padding 0 25px
    .shopping-header-left
      float left
      padding-left 15px
    .shopping-header-right
      //position
      float right
      padding 0px 28px
      font-size 15px
      color #B4282D
  .shopping-classify
    width 100%
    display flex
    height 35px
    line-height 35px
    text-align center
    .shopping-classify-item
      color #666
      font-size 10px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
      background-repeat no-repeat
      background-size 5px 5px
      background-position 12px 16px
      width 33%
  .shopping-content
    width 100%
    height 539px
    background-color #f4f4f4
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
    background-size 124px 124px
    background-repeat no-repeat
    background-position 50% 50%
    text-align center
    .shopping-content-text
      padding-top 330px
      font-size 14px
      color #999
      margin-bottom 20px
    .shopping-content-button
      width 240px
      height 46px
      background #b4282d
      color white
      outline none
      border none
 
</style>
