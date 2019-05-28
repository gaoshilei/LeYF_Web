<template>
  <div class="post-mini-card">
    <div class="card-item"></div>

  </div>
</template>

<script>
  export default {
    name: "postMiniCard",
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

  .post-mini-card {
    position: relative;
    .card-item {
      float: left;
      width: 33.33%;
      background: #ff9800;
      padding: 15px;
    }
  }
</style>
