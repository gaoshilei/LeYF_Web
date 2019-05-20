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
    &:active, &:focus, &:hover {
      color: #eb5055 !important;
      outline: 0
    }
  }

  @-webkit-keyframes unpinned {
    0% {
      -webkit-transform: translateY(0)
    }
    100% {
      -webkit-transform: translateY(50px)
    }
  }

  @keyframes unpinned {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
    100% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px)
    }
  }

  @-webkit-keyframes pinned {
    0% {
      -webkit-transform: translateY(50px)
    }
    100% {
      -webkit-transform: translateY(0)
    }
  }

  @keyframes pinned {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px)
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
  }

  @-webkit-keyframes slideDown {
    0% {
      -webkit-transform: translateY(-70px)
    }
    100% {
      -webkit-transform: translateY(0)
    }
  }

  @keyframes slideDown {
    0% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px)
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
  }

  @-webkit-keyframes slideUp {
    0% {
      -webkit-transform: translateY(0)
    }
    100% {
      -webkit-transform: translateY(-70px)
    }
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }
    100% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px)
    }
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

</style>
