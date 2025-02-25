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
        <u-textarea
          class="shop-textarea"
          v-model="newShop"
          placeholder="多个店铺可用空格、换行分隔"
          placeholderStyle="color: #22de9c"
          border="bottom"
          :maxlength="-1"
          borderColor="#22de9c"
          style="background-color: #372963;max-height: 120px; overflow-y: auto;"
          :autoHeight="true"
          :maxHeight="120"
        ></u-textarea>
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

    // 从文件系统加载数据
    this.loadShopsFromFile();

    // 明确启用加速度计
    wx.startAccelerometer({
      interval: "game", // 使用游戏级别的更新频率
      success: () => {
        console.log("加速度计启用成功");
      },
      fail: (err) => {
        console.error("加速度计启用失败", err);
        uni.showToast({
          title: "摇一摇功能启用失败",
          icon: "none",
        });
      },
    });
  },
  onShow() {
    // 在onShow里再次确保加速度计处于启用状态
    wx.startAccelerometer({
      interval: "game",
    });
    wx.onAccelerometerChange(this.onAccelerometerChange);
  },
  onHide() {
    wx.offAccelerometerChange(this.onAccelerometerChange);
    // 停止加速度计
    wx.stopAccelerometer();
  },
  // 在组件销毁时确保清理资源
  onUnload() {
    wx.offAccelerometerChange(this.onAccelerometerChange);
    wx.stopAccelerometer();
  },
  // 移除 watch 选项
  methods: {
    // 从文件系统加载数据
    loadShopsFromFile() {
      const fs = wx.getFileSystemManager();
      // 获取用户文件目录路径
      const filePath = `${wx.env.USER_DATA_PATH}/shops_data.json`;

      try {
        // 尝试读取文件
        const fileData = fs.readFileSync(filePath, "utf8");
        console.log("从文件读取成功", fileData);
        this.shops = JSON.parse(fileData);
        // 同时更新缓存
        uni.setStorageSync("shops", fileData);
      } catch (error) {
        console.log("文件不存在或读取失败", error);
        // 如果文件不存在或读取失败，使用当前的数据
      }
    },

    // 保存到文件系统
    saveShopsToFile() {
      const fs = wx.getFileSystemManager();
      const filePath = `${wx.env.USER_DATA_PATH}/shops_data.json`;
      const fileData = JSON.stringify(this.shops);

      try {
        fs.writeFileSync(filePath, fileData, "utf8");
        console.log("保存到文件成功");
      } catch (error) {
        console.error("保存到文件失败", error);
      }

      // 同时更新缓存
      uni.setStorageSync("shops", fileData);
    },

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
      // 调试日志，可在发布前删除
      // console.log('加速度数据:', res.x, res.y, res.z);

      const currentTime = Date.now();
      // 计算加速度矢量的模
      const acceleration = Math.sqrt(
        res.x * res.x + res.y * res.y + res.z * res.z
      );
      const lastAcceleration = this.lastAcceleration || 0;
      const delta = Math.abs(acceleration - lastAcceleration);

      // 调整阈值为较小的值
      const shakeThreshold = 10; // 从15降低到10

      if (currentTime - this.lastShakeTime > 1000 && delta > shakeThreshold) {
        console.log("检测到摇动，delta:", delta);
        this.lastShakeTime = currentTime;
        this.lastAcceleration = acceleration;

        // 震动反馈
        wx.vibrateShort({
          success: () => {
            console.log("震动成功");
          },
          fail: (err) => {
            console.error("震动失败", err);
          },
        });

        this.pickShop();
      }

      this.lastAcceleration = acceleration;
    },
    addShop() {
      if (this.newShop) {
        // 分割输入文本，支持空格、换行、逗号等常见分隔符
        const shopNames = this.newShop
          .split(/[\n\r,，、\s]+/) // 使用正则表达式匹配多种分隔符
          .filter((name) => name.trim() !== ""); // 过滤空字符串

        // 检查是否有有效输入
        if (shopNames.length === 0) {
          return;
        }

        // 获取当前分类的店铺列表
        const currentShops = this.getCurrentShops();

        // 批量添加店铺
        let addedCount = 0;
        shopNames.forEach((name) => {
          const trimmedName = name.trim();
          if (trimmedName) {
            // 可选：检查是否已存在相同名称的店铺
            if (!currentShops.includes(trimmedName)) {
              currentShops.push(trimmedName);
              addedCount++;
            }
          }
        });

        // 清空输入框
        this.newShop = "";

        // 保存到存储
        this.saveShops();

        // 提示添加成功
        if (addedCount > 0) {
          uni.showToast({
            title: `已添加${addedCount}个店铺`,
            icon: "success",
            duration: 1500,
          });
        } else {
          uni.showToast({
            title: "店铺已存在",
            icon: "error",
            duration: 1500,
          });
        }
      }
    },
    removeShop(index) {
      const currentShops = this.getCurrentShops();
      currentShops.splice(index, 1);
      this.saveShops();
    },
    // 修改 pickShop 方法，添加随机数字动画效果
    pickShop() {
      const currentShops = this.getCurrentShops();
      if (currentShops.length > 0) {
        // 先将选中店铺设为空
        this.selectedShop = "";

        // 获取最终结果的索引
        const finalIndex = Math.floor(Math.random() * currentShops.length);
        const finalResult = currentShops[finalIndex];

        // 设置动画参数
        const duration = 500; // 动画持续时间（毫秒）
        const baseInterval = 20; // 初始数字变化间隔（毫秒）
        const maxSlowdown = 40; // 最大减速幅度（毫秒）
        const startTime = Date.now();
        let animationCount = 0; // 记录动画执行次数

        // 创建动画函数
        const animate = () => {
          // 计算已经过去的时间
          const elapsedTime = Date.now() - startTime;
          animationCount++;

          // 如果动画时间未结束，继续随机变换
          if (elapsedTime < duration) {
            // 计算当前应该使用的间隔
            // 使用更温和的减速公式
            const progress = elapsedTime / duration; // 0到1之间的值
            const currentInterval =
              baseInterval + progress * progress * maxSlowdown;

            // 随机选择一个店铺显示
            const randomIndex = Math.floor(Math.random() * currentShops.length);
            this.selectedShop = currentShops[randomIndex];

            // 在控制台记录一下（调试用）
            console.log(
              `动画第${animationCount}帧, 间隔: ${currentInterval.toFixed(2)}ms`
            );

            // 继续下一帧动画
            setTimeout(animate, currentInterval);
          } else {
            // 动画结束，显示最终结果
            this.selectedShop = finalResult;
            console.log(`动画结束，共执行${animationCount}帧`);
            // 触发震动
            wx.vibrateLong();
          }
        };

        // 开始动画
        animate();
      }
    },
    // 修改原来的保存方法
    saveShops() {
      // 保存到缓存
      uni.setStorageSync("shops", JSON.stringify(this.shops));
      // 同时保存到文件系统
      this.saveShopsToFile();
    },
  },
};
</script>

<style>
.container {
  padding: 0px 20px 20px 20px;
  background-color: #372963;
  min-height: 100vh;
  height: 100%;
  position: relative;
  padding-bottom: 40px;
}

.result-block {
  height: 50vh;
  display: flex;
  flex-direction: column;
}

.result {
  text-align: center;
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

.shop-textarea {
  width: 90%;
}

/* 也可以尝试 >>> 选择器 (Vue 2) */
.u-textarea >>> textarea,
.u-textarea >>> .uni-textarea-textarea {
  color: #22de9c !important;
  caret-color: #22de9c !important;
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
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0rpx;
  margin-bottom: 20px;
  /* 设置最大高度并添加滚动 */
  max-height: calc(50vh - 40px);
  min-height: 100rpx;
  overflow-y: auto;
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
  max-width: 98%;
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
  font-size: 40rpx;
  padding: 5rpx;
  flex-shrink: 0;
}

.link-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  /* 确保在其他内容之上 */
  z-index: 1;
}
</style>
