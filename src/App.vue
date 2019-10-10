<template>
  <div id="app">
    <m-header></m-header>
    <g-nav></g-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import GNav from 'components/nav/g-nav'
export default {
  name: 'App',
  components: {
    MHeader,
    GNav
  },
  data () {
    return {

    };
  }
}
</script>

<style lang="stylus" rel="stylesheer/stylus">
#app {

}
</style>
