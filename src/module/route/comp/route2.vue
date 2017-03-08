<template>
  <div class="Route2">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Route2',
  data () {
    return {
      msg: 'Route2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.Route2{
    text-align: center
}
</style>
