<template>
  <div class="post-mini-card">
    <div class="card-item">
      <div class="content-wrapper">
        <span class="post-title">VPS+SSR+锐速（BBR魔改版）实现超级加速</span>
        <span class="publish-date">Jan 20, 2019</span>
      </div>
    </div>
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
    width: 100%;
    .card-item {
      float: left;
      width: 33.33%;
      padding: 15px;
      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #ffffff;
        height: 95px;
        padding: 25px 15px 15px;
        border-radius: 2px;
        cursor: pointer;
        -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, .05);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, .05);
        -webkit-transition: -webkit-transform .35s ease, filter .35s ease;
        -moz-transition: -moz-transform .35s ease, filter .35s ease;
        transition: transform .35s ease, filter .35s ease;
        &:hover {
          -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, .15);
          box-shadow: 2px 2px 4px rgba(0, 0, 0, .15);
          transform: scale(1.05);
          -webkit-transform: scale(1.05);
          -moz-transform: scale(1.05);
        }
        span {
          display: block;
        }
        .post-title {
          font-size: 14px;
          color: #313131;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .publish-date {
          font-size: 12px;
          color: #5f5f5f;
        }
      }
    }
  }
</style>
