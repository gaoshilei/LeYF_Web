<template>
  <div class="tag-detail-list">
    <div class="tag-title">{{ `标签: ${$route.params.name}` }}</div>
    <div class="tag-detail-post clearfix">
      <post-mini-card v-for="(item, index) in tagsList" :key="index" />
    </div>
  </div>
</template>

<script>
import postMiniCard from '../components/postMiniCard'

export default {
  name: 'TagDetail',
  components: { postMiniCard },
  data() {
    return {
      tagsList: ['AFNetworking', 'Vue', 'React', 'Angular', 'iOS', 'VPN', 'iOS', 'Shadowsocks', 'Mybatis', 'AFNetworking', 'Vue', 'React', 'Angular', 'iOS', 'OC', 'Java', 'NSTimer', 'VPN', 'Shadowsocks']
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
  .tag-detail-list {
    margin: 0 auto;
    max-width: 800px;

    .tag-title {
      font-size: 15px;
      color: #5f5f5f;

      &:before {
        content: "#";
        font-size: 16px;
        color: #eb5055;
        margin-right: 8px;
      }
    }
  }
</style>
