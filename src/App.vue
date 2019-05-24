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
  @import "style.scss";
  .main {
    min-height: 100%;
  }
</style>
