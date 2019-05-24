<template>
    <main class="app-main">
      <router-view></router-view>
    </main>
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
    position: relative;
    padding: 120px 0 150px;
    margin: 0 auto;
    min-height: 100%;
  }
</style>
