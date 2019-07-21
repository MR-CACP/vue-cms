<template>
  <div class="goods-list">
    <div class="goods-item">
      <img
        src="https://m.360buyimg.com/babel/jfs/t1/26070/26/12789/383055/5c99ecb9Ecd4e6bb9/4494127f19776033.jpg!q70.jpg"
        alt
      />
      <div class="info">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://m.360buyimg.com/babel/jfs/t1/26070/26/12789/383055/5c99ecb9Ecd4e6bb9/4494127f19776033.jpg!q70.jpg"
        alt
      />
      <div class="info">
      <h1 class="title">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://m.360buyimg.com/babel/jfs/t1/26070/26/12789/383055/5c99ecb9Ecd4e6bb9/4494127f19776033.jpg!q70.jpg"
        alt
      />
      <div class="info">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
img {
  width: 100%;
}
.title {
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info {
  background-color: #eee;
  padding: 5px;
  min-height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info p {
  margin: 0;
}
.price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>
