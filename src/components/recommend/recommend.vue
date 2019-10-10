<!--推荐-->
<template>
    <scroll :data="discList" :style="{height: h+'px'}">
      <div class="recommend">
        <slider :datas="sliderData"></slider>
        <h3 class="recommend-title">歌曲推荐</h3>
        <div class="recommend-list">
          <template v-for="(item, i) in discList">
            <div class="recommend-song-item" :key="i">
              <div class="song-item-box">
                <img v-lazy="item.cover_url_small" alt="">
              </div>
              <div class="song-item-info">
                <p class="song-title">{{item.title}}</p>
                <p class="song-text">播放量：{{item.access_num>9999? (item.access_num/10000).toFixed(2) : item.access_num}}万</p>
              </div>
            </div>
          </template>

        </div>
      </div>
    </scroll>
</template>

<script>
  import axios from 'axios'
  import Slider from '@/base/slider/slider'
  import Scroll from 'base/scroll/scroll'
  import { getRecommend ,getDiscList } from 'api/recommend.js'
  import { param } from 'common/js/jsonp.js'
  import { qqsRecommend } from 'api/config.js'
  export default {
    name: 'recommend',
    components: {Slider,Scroll},
    data(){
      return {
        sliderData: [],
        discList: [],
        h: window.innerHeight-'86'
      }
    },
    mounted(){
      this._getRecommend();
      this._getDistList();



    },
    methods: {
      _getRecommend(){
        getRecommend().then((res)=>{
          if(res.code === 0){
            // console.log(res.data)
            this.sliderData = res.data.slider
          }
        })
      },
      _getDistList(){
        let urlhs = param(qqsRecommend);
        axios.get(`http://mockjs.com/api/recommendData`).then((res)=>{
          console.log(res.data.datajsons)
          let datas = res.data.datajsons.playlist;
          if(datas.code === 0){
            this.discList = datas.data.v_playlist
          }
        }).catch(()=>{

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~common/stylus/variable.styl'

  h3.recommend-title
    line-height 60px
    height 60px
    color $color-theme
    font-size $font-size-medium-x
    text-align center

  .recommend-list
    .recommend-song-item
      height 80px;
      display flex
      align-items: center;
      .song-item-box
        height 100%
        width 80px
        padding 6px
        img
          width calc(100% - 12px)
          height calc(100% - 12px)
      .song-item-info
        display flex
        flex-direction column
        justify-content center
        padding-left 8px
        p
          line-height 30px
          height 30px
        .song-title
          color $color-text
        .song-text
          color $color-dialog-background
</style>
