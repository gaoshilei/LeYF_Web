<template>
  <div class="main-content">
    <div class="post-list">
      <div v-for="(item, index) in postList" :key="index">
        <post-card :item.sync="item"></post-card>
      </div>
    </div>
  </div>
</template>

<script>
  import postCard from './components/postCard';
  export default {
    name: "index",
    data() {
      return {
        cateIcoClsMap: {},
        postList: [{},{},{}]
      }
    },
    components: {postCard},
    methods: {},
    mounted() {
      // setInterval(()=>{
      //   console.log(this.postList);
      // },1000);
    }
  }
</script>

<style lang="scss" scoped>

  .main-content {
    position: relative;
    padding: 0 20px;
    margin: 0 auto;
    max-width: 940px;
    -webkit-animation: fade-in .5s;
    animation: fade-in;
    animation-duration: .5s;

    .post-list {
      position: relative;
      display: block;
      overflow: hidden;
    }
  }
</style>
