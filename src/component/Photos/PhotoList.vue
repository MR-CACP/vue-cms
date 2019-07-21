<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in PhotoList"
            :key="item.id"
            @tap="getPhotoListByCateId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link
        v-for="item in PhotosList"
        :key="item.id"
        :to="'/home/PhotoInfo/' + item.id"
        tag="li"
      >
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {
      PhotoList: [],
      PhotosList: []
    };
  },
  created() {
    this.getList();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getList() {
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status === 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.PhotoList = res.body.message;
        }
      });
    },
    getPhotoListByCateId(listId) {
      this.$http.get("api/getimages/" + listId).then(result => {
        if (result.body.status === 0) {
          this.PhotosList = result.body.message;
        }
      });
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.photo-list li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.photo-list img {
  width: 100%;
  vertical-align: middle;
}
.photo-list img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.photo-list .info {
  width: 100%;
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  padding: 0 5px;
  background-color: rgba(0, 0, 0, 0.4);
  /* max-height: 90px; */
}
.photo-list .info-title {
  height: 15px;
  line-height: 15px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.photo-list .info-body {
  font-size: 13px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
