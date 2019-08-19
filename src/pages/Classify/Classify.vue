<template>
  <div class="classify">
    <div class="classify-header">
        <div class="classify-header-search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品，共14520件商品</span>
        </div>
    </div>
    <div class="classify-content">
        <ul class="classify-content-left">
            <li>
                <a href="javascript:;" class="active">推荐专区</a>
            </li>
            <li>
                <a href="javascript:;">夏凉专区</a>
            </li>
            <li>
                <a href="javascript:;">爆品专区</a>
            </li>
            <li>
                <a href="javascript:;">新品专区</a>
            </li>
            <li>
                <a href="javascript:;">居家生活</a>
            </li>
            <li>
                <a href="javascript:;">服饰鞋包</a>
            </li>
            <li>
                <a href="javascript:;">美食酒水</a>
            </li>
            <li>
                <a href="javascript:;">个护清洁</a>
            </li>
            <li>
                <a href="javascript:;">母婴亲子</a>
            </li>
            <li>
                <a href="javascript:;">运动旅行</a>
            </li>
            <li>
                <a href="javascript:;">数码家电</a>
            </li>
            <li>
                <a href="javascript:;">全球特色</a>
            </li>
        </ul>
        <div class="classify-content-right">
            <div class="classify-content-right-img">
                <a href="javascript:;">
                    <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
                </a>
            </div>
            <div class="classify-content-right-content">
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
                <a href="javascript:;" class="classify-content-right-content-item">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件85折</span>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .classify
    width 100%
    height 100%
    &.main
      display none
    // background red
    .classify-header
      padding 5px 8px 8px 15px
      bottom-border-1px(#666)
      .classify-header-search
        text-align center
        line-height 28px
        width 345px
        height 28px
        background-color #ededed
        border-radius 5px
        color #666
        outline none
        .icon-sousuo
          font-size 18px
        span
          font-size 14px
    .classify-content
      width 100%
      display flex
      // box-sizing border-box
      .classify-content-left
        width 25%
        li
          margin 28px 0
          a
            padding 4px 12px
            color #000
            font-size 15px
            border-left 3px solid #fff
            &.active
              border-left 3px solid #AB2B2B
              color #AB2B2B
      .classify-content-right
        width 75%
        .classify-content-right-img
          padding 20px 8px 0 0px
          a
            img
              width 266px
              height 100px
        .classify-content-right-content
          display flex
          flex-wrap wrap
          padding 10px 4px
          .classify-content-right-content-item
            // float left
            width 33%
            display flex
            flex-direction column
            justify-content center
            line-height 18px
            //align-items flex-start
            flex-wrap wrap
            color #000
            font-size 11px
            text-align center
            img
              width 72px
              height 72px
</style>
