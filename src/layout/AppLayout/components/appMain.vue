<template>
    <div class="app-main">
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "AppMain",
    methods: {
      scrollBackToTop() {
        console.log('scrollBackToTop');
        window.scrollTo(0,0);
      }
    },
    mounted() {
      window.addEventListener("beforeunload", this.scrollBackToTop);
    },
    destroyed() {
      window.removeEventListener("beforeunload", this.scrollBackToTop);
    }
  }
</script>

<style lang="scss" scoped>
  .app-main {
    padding: 120px 0 0;
    margin: 0 auto;
  }
</style>
