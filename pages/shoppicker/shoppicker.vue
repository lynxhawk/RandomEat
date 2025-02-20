<template>
  <view class="container">
    <view class="result-block">
      <view class="result">
        <u-divider
          text="结果"
          textColor="#22de9c"
          lineColor="#22de9c"
          textSize="25"
        ></u-divider>
        <view class="result-text">{{ selectedShop }}</view>
      </view>

      <u-button
        size="large"
        @click="pickShop"
        :disabled="shops.length === 0"
        color="linear-gradient(to right, #003366, #663399, #ff66cc, #ff9933)"
        text="随机选择店铺/摇一摇"
        class="random-button"
      ></u-button>
    </view>

    <u-form class="form-row">
      <u-form-item>
        <u-input
          style="width: 70%"
          v-model="newShop"
          placeholder="请输入店铺名称"
          placeholderStyle="color: #22de9c"
          border="bottom"
          color="#22de9c"
		  borderColor="#22de9c"
        ></u-input>
      </u-form-item>
      <u-button
        text="添加店铺"
        @click="addShop"
        style="
          width: 30%;
          color: #22de9c;
          background-color: #372963;
          border-color: #22de9c;
        "
      ></u-button>
    </u-form>

    <view class="shop-list">
      <u-grid :border="false" col="2">
        <u-grid-item v-for="(shop, index) in shops" :key="index">
          <u-tag
            color="#61AFEF"
            size="large"
            closeColor="#000000"
            :text="shop"
            closable
            @close="removeShop(index)"
            plain
            class="shoptag"
          ></u-tag>
        </u-grid-item>
      </u-grid>
    </view>
    <view class="link-container">
      <u-link
        href="https://github.com/lynxhawk/RandomEat"
        text="lynxhawk's github"
        color="#22de9c"
        line-color="#22de9c"
      ></u-link>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      shops: [],
      newShop: "",
      selectedShop: "",
      shakeThreshold: 15, // 摇一摇阈值,可根据需要调整
      lastShakeTime: 0, // 上次摇一摇的时间戳
    };
  },
  onLoad() {
    // 页面加载时从本地存储读取店铺数据
    const shops = uni.getStorageSync("shops");
    if (shops) {
      this.shops = JSON.parse(shops);
    }
  },
  onShow() {
    // 在 onShow 生命周期函数中开启加速度监听
    wx.onAccelerometerChange(this.onAccelerometerChange);
  },
  onHide() {
    // 在 onHide 生命周期函数中关闭加速度监听
    wx.offAccelerometerChange(this.onAccelerometerChange);
  },
  methods: {
    onAccelerometerChange(res) {
      const currentTime = Date.now();
      if (
        currentTime - this.lastShakeTime > 1000 && // 限制1秒内只能触发一次
        (Math.abs(res.x) > this.shakeThreshold ||
          Math.abs(res.y) > this.shakeThreshold ||
          Math.abs(res.z) > this.shakeThreshold)
      ) {
        this.lastShakeTime = currentTime;
        this.pickShop();
      }
    },
    addShop() {
      if (this.newShop) {
        this.shops.push(this.newShop);
        this.newShop = "";
        // 将店铺数据存储到本地
        uni.setStorageSync("shops", JSON.stringify(this.shops));
      }
    },
    removeShop(index) {
      this.shops.splice(index, 1);
      // 更新本地存储的店铺数据
      uni.setStorageSync("shops", JSON.stringify(this.shops));
    },
    pickShop() {
      if (this.shops.length > 0) {
        let randomIndex = Math.floor(Math.random() * this.shops.length);
        this.selectedShop = this.shops[randomIndex];
        wx.vibrateShort(); // 触发短震动
      }
    },
  },
};
</script>

<style>
.container {
  padding: 0px 20px;
  background-color: #372963;
  height: 100vh;
}

.result-block {
  height: 50vh;
  display: flex;
  flex-direction: column;
}

.result {
  text-align: center;
  padding: 20px 0;
  font-size: 20px;
  height: 200px;
  flex: 1;
}

.random-button {
  margin-top: auto;
}

.result-text {
  color: #22de9c;
  font-size: 40px;
  margin-top: 100px;
}

.form-row {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.form-row .u-form-item {
  flex: 1;
  margin-right: 10px;
}

.shoptag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.link-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
