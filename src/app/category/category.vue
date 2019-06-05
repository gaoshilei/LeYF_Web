<template>
  <div class="post-category">
    <div class="category-container">
      <span class="title">分类</span>
      <div class="content">
        <div v-for="(title,index) in categoryList" :key="index" style="display: inline-block">
          <category-card :title.sync="title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryCard from '../components/postCategoryCard'

export default {
  name: 'Category',
  components: { categoryCard },
  data() {
    return {
      categoryList: ['技术文档', '教程', '看电影', '杂谈', 'IT圈', '源码解析', '他山之石', '实用工具', '跳坑指南']
    }
  },
  methods: {}
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

      .content {
        padding: 12px 0;
      }
    }
  }
</style>
