<template>
  <main class="app-main">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'AppMain',
  mounted() {
    window.addEventListener('beforeunload', this.scrollBackToTop)
  },
  destroyed() {
    window.removeEventListener('beforeunload', this.scrollBackToTop)
  },
  methods: {
    scrollBackToTop() {
      console.log('scrollBackToTop')
      window.scrollTo(0, 0)
    }
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
