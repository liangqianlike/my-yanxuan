<template>
  <div class="search">
    <div class="header">
      <div class="header-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="中秋月饼上新热卖" v-model="keyWord"/>
        <div class="xx" @click="keyWord=''" v-if="keyWord"></div>
      </div>
      <span class="header-text" @click="$router.push('/')">取消</span>
    </div>
    <div class="content">
      <div class="content-title">
        热门搜索
      </div>
      <div class="content-prop">
        <ul class="content-search" v-if="hotSearchData">
          <li class="hot" v-for="(item, index) in hotSearchData.hotKeywordVOList" :key="index">{{item.keyword}}</li>
        </ul>
      </div>
      
    </div>
    <div class="search-content" v-if="keyWord">
      <!-- <a href="javasctipt:;" class="search-item">ssss</a> -->
      <a href="javascript:;" class="search-item" v-for="(item, index) in searchKeyWord" :key="index">{{item}}</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        keyWord: '',
      }
    },
    computed: {
      
      ...mapState({
        searchKeyWord: state=>state.search.searchKeyWord,
        hotSearchData: state=>state.search.hotSearchData
      })
    },
    watch: {
      keyWord(){
        clearTimeout(this.setTimoutId)
        this.setTimoutId = setTimeout(()=>{
          this.$store.dispatch('getSearchKeyWord', this.keyWord)
        },300)
      }
    },
    async mounted(){
      await this.$store.dispatch('getHotSearch')
      // console.log(this.$store.dispatch('getHotSearch'))

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
    .search
      width 100%
      height 667px
      background #EEEEEE
      .header
        display flex
        // align-content center
        // justify-content center
        background white
        padding 8px 10px
        line-height 26px
        .header-input
          background #EEEEEE
          .icon-sousuo
            padding 0 10px
          input
            background #EEEEEE
            width 260px
            height 30px
            outline none
          .xx
            position fixed
            left 280px
            top 10px
            width 30px
            height 30px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-0821f71561.png)
            background-repeat no-repeat
            background-size 26px
            // background-position-x 228px
            // z-index 1000
        .header-text
          // margin 20px 20px
          color black 
          background white
          font-size 13px
          text-indent 20px
      .content
        padding 10px 10px
        height 250px
        background white
        box-sizing border-box
        .content-title
          font-size 13px
          color #999
        .content-prop
          width 100%
          background-color white
          .content-search
            li
              float left 
              // display flex
              white-space wrap
              margin 10px 18px 10px 0
              border 1px solid #999
              padding 4px 4px
              &.hot
                border 1px solid #b4282d
                color #b4282d
      .search-content
        position fixed
        left 0
        top 50px 
        width 100%
        // height 100%
        background #fff
        padding-left 10px
        // display none
        .search-item
          display block
          font-size 13px
          color black
          font-weight 400
          padding 14px 0 10px 0
          bottom-border-1px(#F7F7F7)
</style>
