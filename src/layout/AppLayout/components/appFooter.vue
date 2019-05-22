<template>
  <div class="app-footer">
    <div class="content-wrapper">
      <div class="site-info">
        <span class="copyright">@2016-2019</span>
        <span class="divider">|</span>
        <span class="author">
          <i class="iconfont icon-profile"></i>
          <span>LeonLei</span>
        </span>
      </div>
      <div class="site-statistics">
        <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
        <span id="busuanzi_container_site_uv">你是本站第<span id="busuanzi_value_site_uv"></span>位访客</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppFooter"
  }
</script>

<style lang="scss" scoped>
  .app-footer {
    font-size: 20px;
    color: #2c3e50;

    .content-wrapper {
      margin: 20px auto;
      max-width: 780px;
      text-align: center;

      .divider {
        margin: 0 0.5rem;
      }

      .site-info {
        span {
          font-size: 14px;
          color: #999999;
        }

        .iconfont {
          font-size: 14px !important;
        }
      }

      .site-statistics {
        & > span {
          display: block !important;
          font-size: 14px;
          color: #999999;
        }
      }
    }
  }

</style>
