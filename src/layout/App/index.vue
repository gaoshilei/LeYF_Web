<template>
  <div class="app-wrapper">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import { AppHeader, AppMain, AppFooter } from './components'

export default {
  name: 'AppLayout',
  components: { AppHeader, AppMain, AppFooter },
  methods: {}
}
</script>

<style lang="scss">
  .app-wrapper {
    min-height: 100%;
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
  }

</style>
