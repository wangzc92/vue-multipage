<template>
  <div id="app">
    <vhead></vhead>
    <ul>
        <li><a href="./route.html#/">Route1</a></li>
        <li><a href="./route.html#/route2/">Route2</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import vhead from 'components/public/vhead'
  export default {
    name: 'app',
    components: {
      vhead
    },
  }
</script>

<style lang="less">
@import '../../assets/less/b_format.less';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
