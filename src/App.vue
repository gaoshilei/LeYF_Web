<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @charset 'UTF-8';
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }

  html {
    overflow-x: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  ::-moz-selection {
    color: #fff;
    background-color: #eb5055
  }

  ::selection {
    color: #fff;
    background-color: #eb5055;
  }

  body {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 14px;
    line-height: 1.8;
    margin: 0 auto;
    color: #313131;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body > :first-child {
    margin-top: 0 !important
  }

  body > :last-child {
    margin-bottom: 0 !important
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

</style>
