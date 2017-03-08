<template>
  <div id="app">
    <vhead></vhead>
    <img src="./images/logo.png">
    <hello></hello>
    <img src="../../assets/images/test.jpg">
  </div>
</template>

<script>

  import Hello from 'components/Hello/Hello'
  import vhead from 'components/public/vhead'

  export default {
    name: 'app',
    components: {
      Hello,vhead
    }
  }
</script>

<style lang="less">
    @import '../../assets/less/b_format.less';
  #app {
    text-align: center;
    color: #ccc;
    img{margin:0 auto;}
  }
</style>
