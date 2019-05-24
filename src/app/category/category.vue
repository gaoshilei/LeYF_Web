<template>
  <div class="post-category">
    <div class="category-container">
      <span class="title">分类</span>

      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category"
  }
</script>

<style lang="scss" scoped>
  .post-category {
    max-width: 800px;
    margin: 0 auto;
    .category-container {
      .title {
        font-size: 15px;
        color: #5f5f5f;
        &:before {
          content: "#";
          font-size: 16px;
          color: #eb5055;
          margin-right: 8px;
        }
      }
    }
  }
</style>
