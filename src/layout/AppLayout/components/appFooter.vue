<template>
  <footer class="app-footer">
    <div class="footer-inner">
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
  </footer>
</template>

<script>
  export default {
    name: "AppFooter"
  }
</script>

<style lang="scss" scoped>
  .app-footer {
    display: block;
    position: absolute;
    width: 100%;
    min-height: 50px;
    left: 0;
    bottom: 0;
    font-size: 20px;
    color: #2c3e50;


    .footer-inner {
      box-sizing: border-box;
      text-align: center;
      margin: 20px auto;
      width: 1000px;

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
