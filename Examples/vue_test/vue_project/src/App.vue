<template>
  <div id="app">
    <!-- <test msg="这是新的属性值"></test> -->
    <users></users>
  </div>
</template>

<script>

import Test from './components/Test.vue'
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Test,Users
  },
 
}
</script>

<style>

</style>
