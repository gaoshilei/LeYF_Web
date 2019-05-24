<template>
  <div class="post-category">
    <div class="category-container">
      <span class="title">分类</span>
      <div class="content">
        <div class="category-item-wrapper" v-for="(item,index) in categoryList">
          <div class="category-item" :style="randomColorClass">
            <span class="cat-item-title">{{item}}</span>
            <div class="corner-cover"></div>
            <div class="count-title">{{`${index+1}篇`}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        categoryList: ['技术文档','教程','看电影','杂谈','IT圈','源码解析','他山之石','实用工具','跳坑指南']
      }
    },
    methods: {
      randomColorClass() {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        return { background: 'rgb(' + R + ',' + G + ',' + B + ',0.5)' };
      }
    }
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
        .category-item-wrapper {
          position: relative;
          display: inline-block;
          margin: 12px;
          -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
          box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
          cursor: pointer;
          -webkit-transition: -webkit-transform .5s ease, filter .5s ease;
          -moz-transition: -moz-transform .5s ease, filter .5s ease;
          transition: transform .5s ease, filter .5s ease;
          &:hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
          }
          .category-item {
            position: relative;
            text-align: center;
            background: rgba(0,0,0,0.05);
            min-width: 160px;
            padding: 0 16px;
            border-radius: 4px;
            overflow: hidden;
            .cat-item-title {
              font-size: 18px;
              font-weight: 500;
              color: #5f5f5f;
              height: 100px;
              line-height: 100px;
            }
            .corner-cover {
              position: absolute;
              right: -30px;
              bottom: 0;
              width: 100px;
              height: 50px;
              background: #42b983;
              -moz-transform: rotate(-30deg);
              -ms-transform: rotate(-30deg);
              -o-transform: rotate(-30deg);
              -webkit-transform: rotate(-30deg);
              transform: rotate(-30deg);
              transform-origin: bottom right;
            }
            .count-title {
              position: absolute;
              bottom: 0;
              right: 12px;
              font-size: 12px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
</style>
