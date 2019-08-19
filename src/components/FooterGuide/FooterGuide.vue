<template>
    <div class="footer">
        <a href="javascript:;" class="footer-item" :class="{active:$route.path==='/home'}" @click="goTo('/home')">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
        </a>
        <a href="javascript:;" class="footer-item" :class="{active:$route.path==='/classify'}" @click="goTo('/classify')">
            <i class="iconfont icon-iconyihuifu-"></i>
            <span>分类</span>
        </a>
        <a href="javascript:;" class="footer-item" :class="{active:$route.path==='/kind'}" @click="goTo('/kind')">
            <i class="iconfont icon-tupian"></i>
            <span>实物</span>
        </a>
        <a href="javascript:;" class="footer-item" :class="{active:$route.path==='/shopping'}" @click="goTo('/shopping')">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </a>
        <a href="javascript:;" class="footer-item" :class="{active:$route.path==='/user'}" @click="goTo('/user')">
            <i class="iconfont icon-geren"></i>
            <span>个人</span>
        </a>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer
    display flex
    position fixed
    left 0
    bottom 0
    z-index 999
    width 100%
    height 49px
    background white
    .footer-item
      display flex
      flex-direction column
      align-items center
      justify-content center
      width 20%
      height 100%
      color #666
      &.active
        color #b4282d
      span
        margin 4px 0 2px
        font-size 12px
      .iconfont
        font-size 18px
      //.icon-home
      //  font-size 17px
      .icon-iconyihuifu-
        font-size 20px
        font-weight 700
</style>
