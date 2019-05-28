<template>
  <div class="post-category">
    <div class="category-container">
      <span class="title">分类</span>
      <div class="content">
        <div class="category-item-wrapper" v-for="(item,index) in categoryList">
          <div class="category-item" :style="randomColorClass(index)">
            <span class="cat-item-title">{{item}}</span>
            <div class="corner-cover"></div>
            <div class="count-title">{{`${index+1}篇`}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        categoryList: ['技术文档','教程','看电影','杂谈','IT圈','源码解析','他山之石','实用工具','跳坑指南'],
        hslColorList: [],
      }
    },
    methods: {
      randomColorClass(index) {
        let rgb = this.hslToRgb.apply(this,this.hslColorList[index]);
        return { background: 'rgb(' + rgb.toString() + ',0.15)' };
      },
      /**
       * HSL颜色值转换为RGB
       * H，S，L 设定在 [0, 1] 之间
       * R，G，B 返回在 [0, 255] 之间
       *
       * @param H 色相
       * @param S 饱和度
       * @param L 亮度
       * @returns Array RGB色值
       */
      hslToRgb(H, S, L) {
        let R, G, B;
        if (+S === 0) {
          R = G = B = L; // 饱和度为0 为灰色
        } else {
          let hue2Rgb = function (p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          };
          let Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
          let P = 2 * L - Q;
          R = hue2Rgb(P, Q, H + 1/3);
          G = hue2Rgb(P, Q, H);
          B = hue2Rgb(P, Q, H - 1/3);
        }
        return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
      },

      // 获取随机HSL
      randomHsl() {
        let H = Math.random();
        let S = Math.random();
        let L = Math.random();
        return [H, S, L];
      },

      // 获取HSL数组
      getHslArray() {
        let HSL = [];
        for (let i = 0; i < this.categoryList.length; i++) {
          let ret = this.randomHsl();

          // 颜色相邻颜色差异须大于 0.15
          if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.15) {
            i--;
            continue; // 重新获取随机色
          }
          ret[1] = 0.7 + (ret[1] * 0.2); // [0.7 - 0.9] 排除过灰颜色
          ret[2] = 0.4 + (ret[2] * 0.4); // [0.4 - 0.8] 排除过亮过暗色

          // 数据转化到小数点后两位
          ret = ret.map(function (item) {
            return parseFloat(item.toFixed(2));
          });

          HSL.push(ret);
        }
        return HSL;
      }
    },
    created() {
      this.hslColorList = this.getHslArray();
    }
  }
</script>

<style lang="scss" scoped>
  .post-category {
    max-width: 800px;
    margin: 0 auto;
    .category-container {
      .title {
        font-size: 15px;
        color: #5f5f5f;
        &:before {
          content: "#";
          font-size: 16px;
          color: #eb5055;
          margin-right: 8px;
        }
      }
      .content {
        padding: 12px 0;
        .category-item-wrapper {
          position: relative;
          display: inline-block;
          margin: 12px;
          border-radius: 4px;
          overflow: hidden;
          -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
          box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
          cursor: pointer;
          -webkit-transition: -webkit-transform .35s ease, filter .35s ease;
          -moz-transition: -moz-transform .35s ease, filter .35s ease;
          transition: transform .35s ease, filter .35s ease;
          &:hover {
            -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
            box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
          }
          .category-item {
            position: relative;
            text-align: center;
            background: rgba(0,0,0,0.05);
            min-width: 160px;
            padding: 0 16px;
            .cat-item-title {
              font-size: 18px;
              font-weight: 500;
              color: #5f5f5f;
              height: 100px;
              line-height: 100px;
            }
            .corner-cover {
              position: absolute;
              right: -30px;
              bottom: 0;
              width: 100px;
              height: 50px;
              background: #42b983;
              -moz-transform: rotate(-30deg);
              -ms-transform: rotate(-30deg);
              -o-transform: rotate(-30deg);
              -webkit-transform: rotate(-30deg);
              transform: rotate(-30deg);
              transform-origin: bottom right;
            }
            .count-title {
              position: absolute;
              bottom: 0;
              right: 12px;
              font-size: 12px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
</style>
