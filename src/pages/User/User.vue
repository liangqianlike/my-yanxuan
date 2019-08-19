<template>
  <div class="user">
    <div class="user-header">
        <a href="javascript:;" class="user-header-home">
            <i class="iconfont icon-home"></i>
        </a>
        <a href="javascript:;" class="user-header-title">
            网易严选
        </a>
        <!--<div class="user-header-title"></div>-->
        <a href="javascript:;" class="user-header-search">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-gouwuche"></i>
        </a>
    </div>
    <div class="user-content">
        <div class="user-content-img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="user-content-phone">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快速登录</span>
        </div>
        <div class="user-content-email">
            <i class="iconfont icon-duanxin"></i>
            <span>邮箱账号登录</span>
        </div>
        <div class="user-content-else">
            <a href="javascript:;" class="user-content-else-item">
                <i class="iconfont icon-weixin"></i>
                <span>微信</span>
            </a>
            <a href="javascript:;" class="user-content-else-item">
                <i class="iconfont icon-web-icon-"></i>
                <span>QQ</span>
            </a>
            <a href="javascript:;" class="user-content-else-item no">
                <i class="iconfont icon-weibo"></i>
                <span>微博</span>
            </a>
        </div>
    </div>

</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user
    width 100%
    //height 200px
    .user-header
      height 43px
      line-height 43px
      text-align center
      color black
      padding 0 15px
      background #FAFAFA
      bottom-border-1px(#EEEEEE)
      .user-header-home
        float left
        color black
        .icon-home
          font-size 24px
      .user-header-title
        height 43px
        font-family STKaiti
        font-size 23px
        color black
        font-weight 700
      .user-header-search
        float right
        .iconfont
          font-size 28px
          color black
    .user-content
      position relative
      width 100%
      background #F2F5F4
      height 625px
      font-size 14px
      //text-align center
      line-height 220px
      .user-content-img
        text-align center
        width 100%
        img
          margin-left 39px
          width 133px
          height 45px
      .user-content-phone
        position absolute
        left 50%
        top 240px
        margin-left -169px
        text-align center
        line-height 47px
        width 335px
        height 47px
        background-color #DD1A21
        border 1px solid #DD1A21
        border-radius 2px
        color white
        .icon-shouji
          font-size 18px
        //margin-top 100px
      .user-content-email
        position absolute
        left 50%
        bottom 270px
        margin-left -169px
        text-align center
        line-height 47px
        width 335px
        height 47px
        background-color transparent
        border 1px solid #DD1A21
        border-radius 2px
        color #DD1A21
        .icon-duanxin
          font-size 18px
      .user-content-else
        position fixed
        left 0px
        top 510px
        width 100%
        text-align center

        font-size 14px
        .user-content-else-item

          width 33%
          border-right 2px solid #CBCDCC
          padding 0 20px
          &.no
            border none
 
</style>
