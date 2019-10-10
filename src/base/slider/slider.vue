<template>
  <swiper class="g-slider" ref="sliderImg" :options="sliderOption">
      <swiper-slide  :key="datas.id" v-for="item in datas">
        <a :href="item.linkUrl" class="slider-btn">
          <img :src="item.picUrl" alt="" class="slider-img">
        </a>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper , Autoplay,swiperSlide,Pagination,NavigationButtons} from 'vue-awesome-swiper'
  import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css"
  export default {
    name: 'slider',
    components:{swiper , Autoplay,swiperSlide,Pagination,NavigationButtons},
    props:{
      datas: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        sliderOption: {
          loop: true,
          loopAdditionalSlides: 1,
          // autoplay: {
          //   delay: 4000
          // },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      };
    },
    computed:{
      swiper(){
        return this.$refs.sliderImg.swiper;
      }
    },
    mounted() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .g-slider
    height 144px
    a.slider-btn
      display block
      height 144px
      img.slider-img
        height 100%
        width 100%

</style>
