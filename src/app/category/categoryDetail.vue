<template>
  <div class="post-category-detail">
    <div class="category-container">
      <span class="title">{{`技术文档`}}</span>
      <div class="content clearfix">
        <div style="display: inline-block" v-for="(title,index) in categoryList">
          <post-mini-card></post-mini-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import postMiniCard from '../components/postMiniCard';

  export default {
    name: "category",
    data() {
      return {
        categoryList: ['技术文档', '教程', '看电影', '杂谈', 'IT圈', '源码解析', '他山之石', '实用工具', '跳坑指南'],
      }
    },
    components: {postMiniCard},
    methods: {},
  }
</script>

<style lang="scss">
  .post-category-detail {
    max-width: 900px;
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

      .content {
        padding: 12px 0;
      }
    }
  }
</style>
