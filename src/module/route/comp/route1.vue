<template>
  <div class="Route1">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Route1',
  data () {
    return {
      msg: 'Route1'
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
.Route1{
    text-align: center
}
</style>
