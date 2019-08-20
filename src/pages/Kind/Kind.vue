<template>
  <div class="kind">
    <div class="user-header">
        <a href="javascript:;" class="user-header-home" @click="$router.push('/')">
            <i class="iconfont icon-home"></i>
        </a>
        <span  class="user-header-title">
          <a href="javascipt:;" class="onRed">发现</a>
          <a href="javascript:;">甄选家</a>
        </span>
        <!-- <a href="javascript:;">
            
        </a> -->
        <!--<div class="user-header-title"></div>-->
        <a href="javascript:;" class="user-header-search">
            <i class="iconfont icon-sousuo"  @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuche"  @click="$router.push('/shopping')"></i>
        </a>
    </div>
    <div class="navigation" ref="navigationScroll">
      <div class="navigation-list">
        <div class="navigation-item active">盛夏特别版</div>
        <div class="navigation-item">推荐</div>
        <div class="navigation-item">好货内部价</div>
        <div class="navigation-item">回购榜</div>
        <div class="navigation-item">晒单</div>
        <div class="navigation-item">开发者日记</div>
        <div class="navigation-item">达人</div>
        <div class="navigation-item">HOME</div>
      </div>
    </div>
    <div class="kind-img">
      <a href="javascript:;" class="kind-first">
        <img src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
      </a>
      <a href="javascript:;" class="kind-two">
        <img src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt="">
      </a>
      <a href="javascript:;" class="kind-last">
        <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
      </a>
    </div>
    <div class="kind-classify">
      <a href="javascript:;">
        <div class="kind-classify-title">
          玲珑柑普茶
        </div>
        <div>
          好评率<span>99.3% </span>
          累计购买<span>15</span>万
        </div>
        <div>
          勐海熟普邂逅新会鲜杆
        </div>
        <div class="kind-classify-shopping">
          <span class="red">￥</span> 
          80.7
          <span class="hui">￥86</span>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </a>
      <img src="https://yanxuan.nosdn.127.net/15656878289625347.jpg" alt="">
    </div>
    <div class="kind-minImg">
      <div class="kind-minImg-wrap">
        <div class="kind-minImg-list">
          <a href="javascript:;" class="sRed">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
          </a>
          <div class="bjt"></div>
        </div>
      </div>
    </div>
    <div class="kind-guanggao">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="">
      </a>
    </div>
    <div class="kind-chunk">
      <div class="kind-header">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
        </a>
        
      </div>
      <div class="kind-content">
        <a href="javascript:;">
          <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
          <div class="kind-content-text">
            <span class="kind-content-text-title">6包/提 古风一...</span>
            <span class="kind-content-text-xinren">新人专享价</span>
            <span class="kind-content-text-jiage">￥16
              <span>￥16.9</span>
            </span>
            <span class="kind-content-text-liji">立即抢购</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll(this.$refs.navigationScroll,{
        scrollX: true,
        scrollY: false
      }),
      new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .kind
    background #F0FAF9
    // padding-bottom -200px
    padding-top 78px
    height 100%
    .user-header
      // display flex
      position fixed
      left 0
      top 0
      z-index 100
      width 100%
      height 43px
      line-height 43px
      text-align center
      color black
      padding 0 12px
      background #FAFAFA
      box-sizing border-box
      border-bottom 2px solid #EEEEEE 
      // bottom-border-1px(#EEEEEE)
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
        a
          margin 4px
          font-size 17px
          &.onRed
            color #b4282d
            font-size 22px
            font-weight 700
      .user-header-search
        float right
        .iconfont
          font-size 28px
          color #b4282dz
    .navigation
      position fixed
      left 0
      top 43px
      z-index 100
      width 100%
      height 30px
      display flex
      align-items center
      background #FAFAFA
      //display none
      //justify-content center
      .navigation-list
        // width 100%
        padding 0px 7px
        display flex
        // overflow hidden
        white-space nowrap
        font-size 13px
        margin-right 30px
        .navigation-item
          padding 9px 9px
          margin-right 10px
          flex-shrink 0
          font-weight 600
          color #7F7F7F
          &.active
            margin-top -1px
            border-bottom 2px solid #b4282d 
            color #b4282d
    .kind-img
      width 100%
      position relative
      a
        margin 20px 0px
        // width 100%
        &.kind-first
          img
            width 375px
            // height 60px
        &.kind-two
          img 
            width 375px
        &.kind-last
          img
            width 375px
    .kind-classify
      width 182px
      height 112px
      a
        position absolute
        left 14px
        top 515px
        line-height 24px
        .kind-classify-title
          font-size 21px
          color #000
        .kind-classify-shopping
          position absolute
          left -2px
          top 85px
          font-size 20px
          color #c12121
          font-weight 700
          .red
            display inline
            margin-right -6px
            font-size 12px
            color #c12121
          .hui
            color #9b9b9b
            font-size 12px
      img
        padding 8px 5px
        width 364px
        height 224px
      // // background
    .kind-minImg  
      width 100%
      position absolute
      left 0px
      top 700px
      background white
      .kind-minImg-wrap
        .kind-minImg-list
          padding-left 2px
          display flex
          overflow hidden
          a
            background #F1F1F1
            margin 3px
            border-radius 3px
            &.sRed
              background #FD686E
            img 
              width 64px
              height 64px
          .bjt
            background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAAzklEQVQoU2NkwAH+ZOQmgaRYZkyeh00JIzbB/5l5xv/+MxwByTExMtgwTp90Fl0dhsb/2dnC//4yn2FgYFCAKn7IxPzXmHHq1LfImlE0/g8NZf4vLLH1PwOjO6qi/zsZ377wZly9+i9MHEXj34y8JgYGhloc3m5mnjGpDkPjn4x8H0aG/5sYGBiw+puBgeH/fwZGP5YZE7eANIMV/U/LVf7HyHiGgZFBAFcoQ8U/Mv37b8w4a/Jdxv9paVz/mDiOMTAw6BPQBJO+yPTvhxUAl+Y73n3zWuMAAAAASUVORK5CYII=")
            background-size 200px 200px
            z-index 200






    .kind-guanggao
      width 100%
      position absolute
      left 0
      top 752px
      a
        width 100%
        img 
          margin 20px 0px
          width 375px
          border-bottom 1px solid #ccc
    .kind-chunk
      position absolute
      left 0
      top 860px
      // background deepskyblue
      .kind-header
        background #F4FEFF
        a
          img
            width 375px
            height 89px
            display block
      .kind-content
        position absolute
        left 0px
        top 89px
        width 100%
        background #95d0a2
        a
          display block
          margin 7px 4px
          display flex
          // justify-content column
          img
            width 100px
            height 100px
            display block
          .kind-content-text
            padding-bottom 100px
            background white
            .kind-content-text-title 
              font-size 12px
              
            .kind-content-text-xinren
              font-size 14px
              border 1px solid #e36843
              color #e36843
            .kind-content-text-jiage
              font-size 16px
              color #d83535
              span 
                font-size 14px
            .kind-content-text-liji
              font-size 18px
              background-color #dc4516
              border-radius 45%
  </style>

