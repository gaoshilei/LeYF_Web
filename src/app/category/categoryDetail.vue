<template>
  <div class="post-category-detail">
    <div class="category-container">
      <div class="title">
        <span>{{ `技术文档` }}</span>
        <span>分类</span>
      </div>
      <div class="content clearfix">
        <div v-for="(title,index) in categoryList" :key="index">
          <post-mini-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postMiniCard from '../components/postMiniCard'

export default {
  name: 'Category',
  components: { postMiniCard },
  data() {
    return {
      categoryList: ['技术文档', '教程', '看电影', '杂谈', 'IT圈', '源码解析', '他山之石', '实用工具', '跳坑指南']
    }
  },
  methods: {}
}
</script>

<style lang="scss">
  .post-category-detail {
    max-width: 900px;
    margin: 0 auto;

    .category-container {
      .title {
        font-size: 20px;
        font-weight: bold;
        color: #5f5f5f;

        span:nth-child(2) {
          font-size: 16px;
          color: #bbbbbb;
        }

        &:before {
          content: "#";
          font-size: 15px;
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
