<!--导航-->
<template>
    <div class="g-nav">
      <router-link tag="div" class="nav-item" to="/recommend">
        <span class="nav-link">推荐</span>
      </router-link>
      <router-link tag="div" class="nav-item" to="/singer">
        <span class="nav-link">歌手</span>
      </router-link>
      <router-link tag="div" class="nav-item" to="/ranking">
        <span class="nav-link">排行</span>
      </router-link>
      <router-link tag="div" class="nav-item" to="/search">
        <span class="nav-link">搜索</span>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'g-nav'
  }
</script>





<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~common/stylus/variable.styl'

  .g-nav
    display flex
    height 44px
    line-height 44px
    .nav-item
      flex 1
      display inline-block
      text-align center
      color $color-text-d
      .nav-link

        padding-bottom 5px
  &.router-link-active
    .nav-link
      color $color-theme
      border-bottom 3px solid $color-theme

</style>
