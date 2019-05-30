<template>
  <div class="post-archive">
    <div class="archive-timeline">
      <span class="timeline-begin-dot"></span>
      <div class="post-counter">目前一共18篇文章</div>
      <div class="archive-year" v-for="(item, index) in postList" :key="index">
        <div class="year-title">{{item.year}}</div>
        <div class="post-item" v-for="(postItem, postIndex) in item.posts" :key="postIndex">
          <div class="post-header">
            <div class="post-date">{{`01-09`}}</div>
            <div class="post-title">{{postItem}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "archiveComponent",
    data() {
      return {
        postList: [
          {year: 2019, posts: ['VPS+SSR+锐速（BBR魔改版）实现超级加速', 'VPS+SSR+锐速（BBR魔改版）实现超级加速', 'VPS+SSR+锐速（BBR魔改版）实现超级加速']},
          {year: 2018, posts: ['VPS+SSR+锐速（BBR魔改版）实现超级加速', 'VPS+SSR+锐速（BBR魔改版）实现超级加速', 'VPS+SSR+锐速（BBR魔改版）实现超级加速']},
          {year: 2017, posts: ['VPS+SSR+锐速（BBR魔改版）实现超级加速', 'VPS+SSR+锐速（BBR魔改版）实现超级加速', 'VPS+SSR+锐速（BBR魔改版）实现超级加速']},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .post-archive {
    max-width: 800px;
    margin: 0 auto;

    .archive-timeline {
      position: relative;

      &:before {
        content: " ";
        position: absolute;
        top: 5px;
        left: -2px;
        width: 4px;
        height: 100%;
        background: #f1f1f1;
        z-index: -1;
      }

      .timeline-begin-dot {
        position: absolute;
        left: -5px;
        top: 0;
        width: 10px;
        height: 10px;
        background: #AAAAAA;
        border-radius: 50%;
      }

      .post-counter {
        font-size: 14px;
        color: #555555;
        margin: 0 0 32px 32px;
      }

      .archive-year {
        .year-title {
          position: relative;
          font-size: 20px;
          line-height: 32px;
          font-weight: bold;
          padding: 30px 32px;

          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: -4px;
            margin-top: -4px;
            width: 8px;
            height: 8px;
            background: #bbbbbb;
            border-radius: 50%;
          }
        }

        .post-item {
          margin: 30px 0;
          padding: 10px;
          width: 100%;
          background: #ffffff;
          -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
          box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
          &:hover {
            -webkit-box-shadow: 0 0 14px rgba(202,203,203,0.75);
            -moz-box-shadow: 0 0 14px rgba(202,203,204,0.75);
          }
          .post-header {
            position: relative;
            display: flex;
            align-items: center;
            padding: 20px 0 15px 16px;
            border-bottom: 1px dashed #ccc;
            cursor: pointer;
            &:before {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              width: 6px;
              height: 6px;
              margin-top: -1px;
              background: #bbbbbb;
              border-radius: 50%;
            }
            .post-date {
              display: inline-block;
              font-size: 12px;
              color: #555555;
            }

            .post-title {
              display: inline-block;
              font-size: 16px;
              color: #666666;
              margin-left: 12px;
            }
          }

        }
      }
    }
  }

</style>
