<template>
  <div id="app">
    <vhead></vhead>
    <Hi></Hi>
  </div>
</template>

<script>
  import Hi from 'components/Hi/Hi'
  import vhead from 'components/public/vhead'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      Hi,vhead
    },
    methods: {
    }

  }
</script>

<style lang="less">
@import '../../assets/less/b_format.less';
#app {
    text-align: center;
    color: #2c3e50;
}
</style>
