<template>
  <div class="word">
    <h1>{{ msg }}</h1>
    <h2>list demo</h2>
  </div>
</template>

<script>
export default {
  name: 'word',
  data () {
    return {
      msg: 'Welcome to Your mgt App'
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
</style>
