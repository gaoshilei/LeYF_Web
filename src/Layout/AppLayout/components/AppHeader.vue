<template>
  <header>
    <div class="app-header clearfix" :class="headerClass">
      <span class="site-title">LeonLei的博客</span>
      <div class="navbar-menu">
        <router-link to="/archive">归档</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/about">关于</router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        offsetTop: 0,
        headerClass: ''
      }
    },
    methods: {
      // 滚动监听  滚动触发的效果写在这里
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let scroll = scrollTop - this.offsetTop;
        this.offsetTop = scrollTop;
        if (scroll < 0) {
          this.headerClass = ' animated headroom--not-bottom slideDown headroom--top';
        } else {
          this.headerClass = ' animated headroom--not-bottom headroom--not-top slideUp';
        }
      }
    },
    mounted() {
      // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
      this.offsetTop = document.querySelector('#header').offsetHeight;
      // 开启滚动监听
      window.addEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="scss" scoped>

  header {
    z-index: 999;
    display: block;
    position: fixed;
    width: 100%;
    line-height: 70px;
    background: #ffffff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .1);

    .app-header {
      font-size: 22px;
      color: #000;
      width: 1040px;
      max-width: 100%;
      height: 70px;
      margin: 0 auto;

      .animated {
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both
      }

      .site-title {
        float: left;
      }

      .navbar-menu {
        float: right;
        display: inline-block;
        width: auto;
        text-align: right;

        a {
          font-size: 14px;
          padding: 0 15px;
          text-decoration: none;
          color: #313131;
          outline: 0
        }

        a:active, a:focus, a:hover {
          color: #eb5055;
          outline: 0
        }
      }
    }
  }


</style>
