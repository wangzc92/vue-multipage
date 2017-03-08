<template>
  <div class="head">
    <h1>{{title}}</h1>
    <ul>
      <li><a href="./">index</a></li>
      <li><a href="./list.html">list</a></li>
      <li><a href="./route.html">route</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vhead',
  data () {
    return {
      title: 'vue-multipage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/b_var.less';
.head{background:@c;.clearfix;height:60px;line-height:60px;
    h1{width:20%;float:left;color:#fff}
    ul{width:80%;float:left;
        li{display:inline-block;color:#fff;font-size:20px;margin-left:40px;
            a{color:#ccc;}
            a:hover{color:@c02;}
        }
    }
}
</style>
