<template>
  <header :class="headerClass">
    <div class="app-header clearfix">
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
        headerClass: '',
        lastScrollPoint: 0,
      }
    },
    methods: {
      handleScroll() {
        const animatedOffset = 65;
        //Safari、Firefox、Chrome获取当前页面滚动高度方法
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //scrollDiff  <0向下滚动 >0向上滚动
        let scrollDirection = scrollTop - this.lastScrollPoint;
        this.lastScrollPoint = scrollTop;
        if (scrollDirection > 0 && scrollTop > animatedOffset) {
          this.headerClass = 'header-slideUp';
        }
        if (scrollDirection < 0 && scrollTop < animatedOffset) {
          this.headerClass = 'header-slideDown';
        }
      }
    },
    mounted() {
      // 开启滚动监听
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss" scoped>

  header {
    z-index: 999;
    display: block;
    position: fixed;
    width: 100%;
    height: 70px;
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

  @keyframes slideDown-animation {
    0% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px)
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
  }

  @keyframes slideUp-animation {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
    100% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px)
    }
  }

  header.header-slideUp {
    animation: slideUp-animation;
    animation-duration: .35s;
    -webkit-animation: slideUp-animation .35s;
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px)
  }

  header.header-slideDown {
    animation: slideDown-animation;
    animation-duration: .35s;
    -webkit-animation: slideDown-animation .35s;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }


</style>
