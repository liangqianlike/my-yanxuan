<template>
  <div class="home">
      <div class="header">
          <a href="javascript:;" class="header-a"></a>
          <div class="header-search" @click="$router.push('/search')">
              <i class="iconfont icon-sousuo"></i>
              <span>搜索商品，共14520件商品</span>
          </div>
          <button type="submit">登录</button>
      </div>
      <div class="navigation" ref="search">
            <div class="navigation-list">
                <div class="navigation-item" :class="{active: thisIndexItem===index}" @click="thisIndexItem=index" 
                v-for="(navigationItem, index) in this.navigationTitle" :key="index">
                  {{navigationItem}}
                </div>
            </div>
      </div>
      <div class="navigation-jiantou">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(slideshowItem, index) in this.slideshowImgs" :key="index">
                <img :src="slideshowItem">
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      </div>
      <ul class="pledge">
          <li class="pledge-item" :class="slideshowIcon[index]" v-for="(policyDescItem, index) in homeData.policyDescList" :key="index">
            {{policyDescItem.desc}}
          </li>
      </ul>
      <ul class="menu" v-if="homeData.kingKongModule">
          <li class="menu-item" v-for="(kingKongItem, index) in homeData.kingKongModule.kingKongList" :key="index">
              <a href="javascript:;" class="menu-a">
                  <img :src="kingKongItem.picUrl" alt="kingKongItem.text">
                  <span>{{kingKongItem.text}}</span>
              </a>
          </li>
      </ul>
      <div class="advertising">
          <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt="" class="advertising-img">
      </div>
      <div class="discount" v-if="homeData">
          <a href="javascript:;" class="discount-item" 
          v-for="(item, index) in homeData.sceneLightShoppingGuideModule" :key="index">
              <div class="discount-item-texta">{{item.styleItem.title}}</div>
              <div class="discount-item-textb">{{item.styleItem.desc}}</div>
              <div class="discount-item-img" v-for="(itemPicBeanItem, twoIndex) in item.styleItem.itemPicBeanList" :key='twoIndex'>
                  <img :src="itemPicBeanItem.picUrl" alt="">
              </div>
          </a>
      </div>
      <div class="customize">
          <div class="customize-title">私人订制</div>
          <div class="swiper-container">
              <div class="swiper-wrapper" v-if="homeData.personalShop">
                  <div class="swiper-slide" v-for="(personalShopItem, index) in homeData.personalShop" :key="index">
                      <a href="javascript:;">
                          <img :src="personalShopItem.primaryPicUrl" alt="">
                          {{personalShopItem.name}} <span>￥{{personalShopItem.retailPrice}}</span>
                      </a>
                      <a href="javascript:;">
                          <img :src="personalShopItem.primaryPicUrl" alt="">
                          {{personalShopItem.name}} <span>￥{{personalShopItem.retailPrice}}</span>
                      </a>
                      <a href="javascript:;">
                          <img :src="personalShopItem.primaryPicUrl" alt="">
                          {{personalShopItem.name}} <span>￥{{personalShopItem.retailPrice}}</span>
                      </a>
                  </div>
                  <!-- <div class="swiper-slide">
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                  </div>
                  <div class="swiper-slide">
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                  </div>
                  <div class="swiper-slide">
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                      <a href="javascript:;">
                          <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                          平凡的世界 300<span>￥129</span>
                      </a>
                  </div> -->
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        thisIndexItem: 0,
        navigationTitle: ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴清洁','运动旅行','数码家电','全球特色'],
        slideshowImgs: [
          'https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0'
          ],
        slideshowIcon: [
          'first',
          'two',
          'last'
        ]
      }
    },
    computed: {
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
    async mounted() {
      new Swiper('.swiper-container',{
        // loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }),
      new BScroll(this.$refs.search, {
          scrollX:true,
          scrollY:false
      }),
      await this.$store.dispatch('getHomeData')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    padding-top 75px
    padding-bottom 83px
    width 100%
    height 100%
    .header
      position fixed
      left 0
      top 0
      z-index 100
      display flex
      align-items center
      width 100%
      background white
      padding 8px 15px
      box-sizing border-box
      .header-a
        width 69px
        height 20px
        display inline-block
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-size 69px 20px
      .header-search
        text-align center
        line-height 28px
        width 221px
        height 28px
        background-color #ededed
        border-radius 5px
        color #666
        margin 0 9px
        outline none 
          font-size 18px
        span
          font-size 14px
      button
        background white
        font-size 12px
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        text-align center
        width 40px
        height 20px
    .navigation
      position fixed
      left 0
      top 44px
      z-index 100
      width 100%
      height 30px
      display flex
      align-items center
      background white
      //display none
      //justify-content center
      .navigation-list
        // width 100%
        padding 0px 8px
        display flex
        // overflow hidden
        white-space nowrap
        font-size 14px
        font-weight bold
        margin-right 30px
        .navigation-item
          padding 5px 9px
          margin-right 10px
          flex-shrink 0
          font-weight 600
          color #333
          &.active
            border-bottom 2px solid #b4282d
    .navigation-jiantou
      position fixed
      right -1px
      top 40px
      z-index 101
      width 60px
      height 30px
      background white
      text-align center
      line-height 32px
      color #666
      font-weight 400
      .icon-jiantou
        font-size 25px
    .swiper-container
      width 100%
      height 185px
      .swiper-wrapper
        .swiper-slide
          width 100%
          height 100%
          img
            width 100%
            height 100%
    .pledge
      display flex
      padding 0 15px
      //width 100%
      height 36px
      background white
      .pledge-item
        height 100%
        display flex
        align-items center
        //justify-content center
        font-size 10px
        padding 0 17px
        margin-left 3px
        //padding
        &.first
          background-image url("https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          background-repeat no-repeat
          background-size 16px 16px
          background-position -1px 11px
        &.two
          background-image url("https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
          background-repeat no-repeat
          background-size 16px 16px
          background-position -1px 11px
        &.last
          background-image url("https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
          background-repeat no-repeat
          background-size 16px 16px
          background-position -1px 11px
    .menu
      width 100%
      height 170px
      background-color white
      //padding 0 8px
      
      .menu-item
        text-align center
        .menu-a
          //margin 0 1px
          float left
          width 20%
          font-size 12px
          color #000
          img
            width 55px
            height 55px
          span
            display inline-flex
            line-height 30px
    .advertising
      width 100%
      height 63px
      .advertising-img
        display block
        width 100%
        height 100%
    .discount
      //display flex
      width 100%
      height 277px
      background white
      padding 7px 0 0 9px
      box-sizing border-box
      .discount-item
        box-sizing border-box
        float left
        width 48%
        height 48%
        padding 10px 5px 5px 8px
        margin 2px 1px
        background #F5F5F5
        .discount-item-texta
          font-size 17px
          color #000
        .discount-item-textb
          font-size 12px
          color #7F7F7F
          margin-top 5px
        .discount-item-img
          display inline-flex
          flex-wrap nowrap
          margin-top 5px
          img
            width 75px
            height 75px
    .customize
      margin-top 2px
      width 100%
      height 200px
      background white
      box-sizing border-box
      .customize-title
        padding 10px 0 0 14px
        font-size 20px
      .swiper-container
        width 100%
        height 100%
        background white
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            padding 15px 0px 0 5px
            line-height 20px
            a
              width 108px
              height 108px
              margin-right 8px
              background #f5f5f5
              font-size 12px
              font-weight 700
              color #000
              text-align center
              span
                color red
  
 
</style>
