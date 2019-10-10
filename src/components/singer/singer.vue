<!--歌手-->
<template>
    <div class="singer">
      <scroll class="wrapper"
              :style="{height: h+'px'}"
              :data="singerData"
              :pulldown="pulldown"
              :probeType="probeType"
              @pulldown="loadData"
              @scroll="scroll"
              :listenScroll="listenScroll"
              ref="listView">
          <div class="singer-list">
            <div class="singer-box" :key="item.title" ref="listGroup" v-for="(item) in singerData">
              <h2 class="singer-title"
                  :id="item.title"
                  :name="item.title"
                  >
                {{item.title}}
              </h2>
              <div class="singer-info" v-for="singer in item.items" :key="singer.singer_id">
                <div class="singer-img">
                  <img v-lazy="singer.singer_img" alt="">
                </div>
                <span class="singer-name">{{singer.singer_name}}</span>
              </div>
            </div>
            <p>--------</p>
          </div>
          <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
            <ul>
              <li class="shortcut-item" v-for="(shortcut,index) in shortcutList"  :key="index">
                <!--<a :href="'#'+shortcut.name">-->
                <a :data-index="index" :class="{'current': currentIndex==index}">
                  {{shortcut.name.length>1?shortcut.name.substring(0,1):shortcut.name}}
                </a>
              </li>
            </ul>
          </div>
      </scroll>
  </div>

</template>

<script>
  import axios from 'axios'
  import args from './tags_data'
  import Scroll from 'base/scroll/scroll'
  import {getData} from '../../common/js/dom'
  import BScroll from 'better-scroll'
  const h = 'http://mockjs.com/api/'
  const {tags: {index: bb}} = args
  const AHCHOR_HEIGHT = 18
  export default {
    name: 'singer',
    components:{Scroll},
    data() {
      return {
        pulldown: true,
        listenScroll: true,
        scrollY: -1,
        currentIndex: 0,
        singerData: [],
        shortcutList: bb,
        h: window.innerHeight-'86'
      };
    },
    watch: {
      singerData(){
        setTimeout(()=>{
          console.log(1)
          this._calculateHeight()
        },20)
      },
      scrollY(newY){
        const listHeight = this.listHeight
        console.log('newY:'+newY)
        for(let i=0; i<listHeight.length; i++){
          let height1 = listHeight[i],height2=listHeight[i+1]
          if(!height2 || (-newY >height1 && -newY<height2)){
            this.currentIndex = i
            // console.log(-newY,height1,height2)
            // console.log(this.currentIndex)
            return
          }
        }
        this.currentIndex = 0
      }
    },
    created(){
      this.touch = {}
      this.listenScroll = true
      this.listHeight = []
      this.probeType=3
    },
    mounted(){
      this.loadData()
    },
    methods:{
      loadData(){
        axios.get(h+'singerData').then(({data:res})=>{
          // console.log(res)
          if(res.code === 0){
            // this.singerData = res.data
            this.singerData = this._normalizeSinger(res.data)
            // console.log(this.singerData)
          }
        }).catch(()=>{
        })
      },
      _normalizeSinger(list){
        let map = {}
        bb.forEach((bitem)=>{
          if(!map[bitem.name]) {
            map[bitem.name] = {
              title: bitem.name,
              id: bitem.id,
              items: []
            }
          }
        })
        list.forEach((item)=>{
          bb.forEach((b)=>{
            if(item.index == map[b.name].id ){
              map[b.name].items.push(item)
            }
          })
        })
        // console.log(map)
        // 有序列表
        let hot = [],ret = [];
        for(let key in map){
          let val = map[key]
          if(val.title.match(/[a-zA-Z]/)){
            ret.push(val)
          }else if(val.title === '热门'){
            hot.push(val)
          }
        }
        ret.sort((a,b)=>{
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
      scroll(pos){
        this.scrollY = pos.y;
        console.log(this.scrollY)
      },
      _calculateHeight(){
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0;
        this.listHeight.push(height)
        for(let i=0; i<list.length; i++){
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        console.log(this.listHeight)
      },
      onShortcutTouchStart(e){
        // console.log(e.target.getAttribute('data-index'))
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex
        console.log(this.touch.anchorIndex)
        this.$refs.listView.scrollToElement(this.$refs.listGroup[anchorIndex],0)
      },
      onShortcutTouchMove(e){
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / AHCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + parseInt(delta);
        console.log(anchorIndex)
        this.$refs.listView.scrollToElement(this.$refs.listGroup[anchorIndex],600)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~common/stylus/variable.styl'
  .singer


  .singer-list
    .singer-box
      .singer-title
        height 32px
        line-height 32px
        padding-left 5%
        font-size $font-size-medium
        color $color-dialog-background
        background-color $color-highlight-background
      .singer-info
        height 70px
        margin-bottom 12px
        margin-top 12px
        padding-left 20px
        display flex
        align-items center
        .singer-img
          height 100%
          width 70px
          margin-right 20px
          img
            width 100%
            height 100%
            border-radius 50%
        span.singer-name
          color $color-dialog-background
          font-size $font-size-medium-x

  .list-shortcut
    position fixed
    right 10px
    top 90px
    ul
      .shortcut-item
        a
          display inline-block
          width 18px
          height 18px
          line-height 18px
          text-align center

  a.current
    color: $color-theme
</style>
