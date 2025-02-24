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
        :disabled="getCurrentShops().length === 0"
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

    <view class="tabs">
      <view
        v-for="(tab, index) in tabList"
        :key="index"
        class="tab-item"
        :class="{ active: currentTab === index }"
        @tap="tabChange(index)"
      >
        {{ tab.name }}
      </view>
    </view>

    <view class="shop-list">
      <view
        v-for="(shop, index) in getCurrentShops()"
        :key="index"
        class="shop-item"
      >
        <view class="shop-name">{{ shop }}</view>
        <view class="remove-btn" @tap="removeShop(index)">×</view>
      </view>
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
      tabList: [{ name: "美食餐饮" }, { name: "奶茶甜品" }],
      currentTab: 0,
      shops: {
        food: [],
        dessert: [],
      },
      newShop: "",
      selectedShop: "",
      shakeThreshold: 15, // 摇一摇阈值,可根据需要调整
      lastShakeTime: 0, // 上次摇一摇的时间戳
    };
  },
  onLoad() {
    const shops = uni.getStorageSync("shops");
    if (shops) {
      this.shops = JSON.parse(shops);
    }
  },
  onShow() {
    wx.onAccelerometerChange(this.onAccelerometerChange);
  },
  onHide() {
    wx.offAccelerometerChange(this.onAccelerometerChange);
  },
  // 移除 watch 选项
  methods: {
    getCurrentShops() {
      return this.currentTab === 0 ? this.shops.food : this.shops.dessert;
    },
    tabChange(index) {
      this.currentTab = index;
      console.log(index);
      console.log(this.shops.food);
      console.log(this.shops.dessert);
    },
    onAccelerometerChange(res) {
      const currentTime = Date.now();
      if (
        currentTime - this.lastShakeTime > 1000 &&
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
        this.getCurrentShops().push(this.newShop);
        this.newShop = "";
        this.saveShops();
      }
    },
    removeShop(index) {
      const currentShops = this.getCurrentShops();
      currentShops.splice(index, 1);
      this.saveShops();
    },
    pickShop() {
      const currentShops = this.getCurrentShops();
      if (currentShops.length > 0) {
        let randomIndex = Math.floor(Math.random() * currentShops.length);
        this.selectedShop = currentShops[randomIndex];
        wx.vibrateShort();
      }
    },
    saveShops() {
      uni.setStorageSync("shops", JSON.stringify(this.shops));
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

.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80rpx;
  background-color: #372963;
}

.tab-item {
  flex: 1;
  text-align: center;
  color: #ffffff;
  font-size: 28rpx;
  padding: 20rpx 0;
}

.tab-item.active {
  color: #22de9c;
  border-bottom: 4rpx solid #22de9c;
}

.shop-list {
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0rpx;
}

.shop-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rpx 20rpx;
  margin: 10rpx;
  border: 1px solid #22de9c;
  border-radius: 5rpx;
  background-color: transparent;
  flex-basis: 100rpx;
  box-sizing: border-box;
  max-width: 100%;
}

.shop-name {
  color: #22de9c;
  font-size: 28rpx;
  margin-right: 10rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.remove-btn {
  color: #ffffff;
  font-size: 24rpx;
  padding: 5rpx;
  border-radius: 50%;
  flex-shrink: 0;
}

.link-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
