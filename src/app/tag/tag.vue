<template>
  <div class="tag">
    <div class="tag-title">标签</div>
    <div class="tag-cloud-title">{{`目前共计 ${tagsList.length} 个标签`}}</div>
    <div class="tag-main clearfix">
      <router-link class="tag-item" v-for="(item, index) in tagsList" :key="index" :class="classObject(item)" :to="'/tag/'+item">
        {{item}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tag",
    data() {
      return {
        tagsList: ['AFNetworking', 'Vue', 'React', 'Angular', 'iOS', 'VPN', 'iOS','Shadowsocks', 'Mybatis','AFNetworking', 'Vue', 'React', 'Angular', 'iOS', 'OC', 'Java', 'NSTimer', 'VPN', 'Shadowsocks'],
      }
    },
    methods: {
      classObject(item) {
        return {
          'small-size': item.length > 5,
          'middle-size': item.length > 2 && item.length < 6,
          'large-size': item.length < 3
        };
      }
    }
  }
</script>

<style lang="scss">
  .tag {
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

    .tag-cloud-title {
      margin-left: 16px;
      font-size: 13px;
      color: #5f5f5f;
    }

    .tag-main {
      position: relative;
      padding: 24px 8px;

      .tag-item {
        display: inline-block;
        vertical-align: middle;
        margin: 24px 12px;
        padding: 0 5px;
        border-bottom: 1px solid #999;
        -webkit-transition: -webkit-transform .3s ease, filter .3s ease;
        -moz-transition: -moz-transform .3s ease, filter .3s ease;
        transition: transform .3s ease, filter .3s ease;

        &:hover {
          transform: scale(1.15);
          -webkit-transform: scale(1.15);
          -moz-transform: scale(1.15);
          border-bottom: 1px solid #eb5055;
          color: #eb5055;
        }
      }
      .small-size {
        font-size: 16px;
        color: #ccc;
      }

      .middle-size {
        font-size: 21px;
        color: #6f6f6f;
      }

      .large-size {
        font-size: 30px;
        color: #111;
      }
    }
  }
</style>
