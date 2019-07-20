<template>
  <div class="newsinfo">
    <h3 class="title">{{ NewsInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ NewsInfo.add_time | dateFormat }}</span>
      <span>点击：{{ NewsInfo.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="NewsInfo.content"></div>
    <pinlun-box :id="this.id"></pinlun-box>
  </div>
</template>

<script>
// 1. 导入 评论子组件
import pinlun from "../pinlun.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      NewsInfo: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        if (res.body.status === 0) {
          // 成功了
          this.NewsInfo = res.body.message[0];
        } else {
          // 失败的
          Toast("加载新闻详情失败。。。");
        }
      });
    }
  },
  components: {
    "pinlun-box": pinlun
  }
};
</script>

<style scoped>
.newsinfo {
  padding: 0 4px;
}
.title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.content img {
    width: 100%;
}
</style>
