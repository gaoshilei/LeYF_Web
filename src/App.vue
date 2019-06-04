<template>
  <div id="main" class="main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import '@/styles/index.scss'; // global css

  .main {
    min-height: 100%;
  }
</style>
