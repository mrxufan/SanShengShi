<template>
  <div class="app-body">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app-body',
  data () {
    return {
      msg: 'Body component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
