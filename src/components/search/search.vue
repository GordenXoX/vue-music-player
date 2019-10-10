<!--搜索-->
<template>
    <div class="search">
      <scroll >
        <div class="content">
          <div class="aaa" style=""></div>
        </div>
      </scroll>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Scroll from 'base/scroll/scroll'
  export default {
    name: 'search',
    components:{Scroll},
    data(){
      return{
        s:true
      }
    }

  }
</script>

<style scoped>
  .aaa{
    height: 9999px;
    background-color: red;
  }
</style>
