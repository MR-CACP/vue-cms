<template>
  <div>
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="说点有用的，不要当喷子" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postPinlun">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in PinLun" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': (item.content === '' ? '此用户很懒，嘛都没说' : item.content) }}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      PinLun: [],
      pageIndex: 1,
      msg: ''
    };
  },
  created() {
    this.getPinlun();
  },
  methods: {
    getPinlun() {
      this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(res => {
        if (res.body.status === 0) {
          // 成功了
          this.PinLun = this.PinLun.concat(res.body.message);
        } else {
          // 失败的
          Toast("加载评论失败。。。");
        }
      })
    },
    getMore() {
      this.pageIndex++;
      this.getPinlun();
    },
    postPinlun() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      this.$http.post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        }).then(res => {
          if (res.body.status === 0 ) {
            let newPin = { user_name: "匿名用户", add_time: Date.now(), content: this.msg.trim()};
            this.PinLun.unshift(newPin);
            this.msg = '';
          } else {
            Toast("评论失败！");
          }
      })
    }
  },
  props: ["id"],
};
</script>

<style scoped>
h3 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-item {
  font-size: 13px;
}
.cmt-title {
  line-height: 30px;
  background-color: #ccc;
}
.cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>
