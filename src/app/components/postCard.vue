<template>
  <div class="post-card">
    <div class="post-item">
      <div class="post-item-wrapper">
        <div class="item-thumb" :style="'background-image: url('+ item.cover +')'" />
        <router-link :to="'/article?id='+889">
          <div class="item-desc">
            <p>{{ item.desc }}</p>
          </div>
        </router-link>
        <div class="item-incline block-translucent" />
        <div class="item-incline block-white" />
        <div class="item-text">
          <div class="text-title">
            <router-link :to="'/article?id='+99">{{ item.title }}</router-link>
          </div>
          <div class="item-meta">
            <div class="meta-cat">
              <router-link :to="'/category?id='+99">{{ '技术笔记' }}</router-link>
            </div>
            <div class="meta-ico" :class="{'meta-ico-note': true}" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['item'],
  data() {
    return {}
  },
  created() {
  },
  mounted() {
    this.item = {
      title: 'VPS+SSR+锐速（BBR魔改版）实现超级加速',
      desc: '谷歌2016年出了一个基于Linux内核的 BBR 拥塞控制算法，虽然咱不懂咋回事，还是大概知道它...',
      cover: 'http://leonlei.top/1128559477749972992.jpeg'
    }
  }
}
</script>

<style lang="scss" scoped>

  .post-card {
    .post-item {
      float: left;
      width: 33.33%;
      height: auto;
      padding: 15px;
      align-items: center;
    }

    .post-item-wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding: 0;
      border-radius: 3px;
      background-color: #fff;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
      box-shadow: 0 1px 4px rgba(0, 0, 0, .04);

      .item-thumb {
        min-height: 250px;
        -webkit-transition: -webkit-transform .5s ease, filter .5s ease;
        -moz-transition: -moz-transform .5s ease, filter .5s ease;
        transition: transform .5s ease, filter .5s ease;
        background-position: 50% 50%;
        background-size: cover;
      }

      .item-desc {
        position: absolute;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        padding: 40px 28px;

        p {
          display: block;
          font-size: 14px;
          margin: 0;
          word-break: break-all;
          opacity: 0;
          color: #fff
        }
      }

      &:hover {
        -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);

        .item-thumb {
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          filter: blur(3px);
          -webkit-filter: blur(3px);
        }

        .item-desc {
          background-color: rgba(0, 0, 0, .5);

          p {
            animation: fade-in;
            animation-duration: .5s;
            -webkit-animation: fade-in .5s;
            opacity: 1
          }

          @keyframes fade-in {
            0% {
              transform: translateY(20px);
              opacity: 0
            }
            100% {
              transform: translateY(0);
              opacity: 1
            }
          }

          @-webkit-keyframes fade-in {
            0% {
              -webkit-transform: translateY(20px);
              opacity: 0
            }
            100% {
              -webkit-transform: translateY(0);
              opacity: 1
            }
          }
        }
      }

      .item-incline {
        position: absolute;
        left: 0;
        bottom: 50px;
        width: 110%;
        min-height: 100px;
        -webkit-box-shadow: none;
        box-shadow: none
      }

      .block-translucent {
        background: rgba(0, 0, 0, 0.35);
        -webkit-transform: rotate(-10deg) translate(10px, -10px);
        -ms-transform: rotate(-10deg) translate(10px, -10px);
      }

      .block-white {
        background: #ffffff;
        -webkit-transform: rotate(7deg) translate(-10px, 0);
        -ms-transform: rotate(7deg) translate(-10px, 0);
        transform: rotate(7deg) translate(-10px, 0);
      }

      .item-text {
        position: relative;
        background: #ffffff;
        height: 130px;
        padding: 10px 20px 40px;

        a {
          font-size: 17px;
          line-height: 17px;
        }

        .item-meta {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          padding: 0 15px 15px;
          text-align: right;

          a {
            font-size: 13px;
            color: #5f5f5f;
          }

          .meta-cat {
            display: inline-block;
            padding: 10px 15px 0;
          }

          .meta-ico {
            float: right;
            display: inline-block;
            background: url('http://leonlei.top/category-icon.png') no-repeat;
            background-size: 40px auto;
            width: 42px;
            height: 42px;
            border-radius: 42px;
            border: 1px solid #eaeaea;
          }

          .meta-ico-note {
            background-position: 0 0 !important;
          }
        }
      }
    }
  }

</style>
