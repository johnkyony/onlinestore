<template>
  <div id="app" class="container my-5">
    <navigation></navigation>
    <br>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    navigation
  }
  
}
</script>

<style>

</style>
