<template>
  <div class="app-wrapper">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import {AppHeader, AppMain, AppFooter} from './components';

  export default {
    name: "AppLayout",
    components: {AppHeader, AppMain, AppFooter}
  }
</script>

<style lang="scss">

  a {
    color: #313131;
    outline: 0;
    word-break: break-all;
    text-decoration: none;
    text-overflow: ellipsis;
    &:hover {
      color: #eb5055;
      outline: 0
    }
  }

</style>
