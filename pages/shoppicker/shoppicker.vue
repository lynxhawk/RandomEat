<template>
	<view class="container">
		<!-- <u-navbar title="今天吃什么"></u-navbar> -->

		<view class="result">
			<text>{{selectedShop}}</text>
		</view>

		<u-button @click="pickShop" :disabled="shops.length === 0">随机选择店铺</u-button>

		<u-form>
			<u-form-item label="店铺名称">
				<u-input v-model="newShop" placeholder="请输入店铺名称"></u-input>
			</u-form-item>
			<u-button @click="addShop">添加店铺</u-button>
		</u-form>

		<view class="shop-list">
			<u-grid :border="false" col="2">
				<u-grid-item v-for="(shop, index) in shops" :key="index">
					<u-tag :text="shop" closable @close="removeShop(index)"></u-tag>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shops: [],
				newShop: '',
				selectedShop: '',
				shakeThreshold: 15, // 摇一摇阈值,可根据需要调整
				lastShakeTime: 0 // 上次摇一摇的时间戳
			}
		},
		onLoad() {
			// 页面加载时从本地存储读取店铺数据
			const shops = uni.getStorageSync('shops');
			if (shops) {
				this.shops = JSON.parse(shops);
			}
		},
		onShow() {
			// 在 onShow 生命周期函数中开启加速度监听
			wx.onAccelerometerChange(this.onAccelerometerChange)
		},
		onHide() {
			// 在 onHide 生命周期函数中关闭加速度监听
			wx.offAccelerometerChange(this.onAccelerometerChange)
		},
		methods: {
			onAccelerometerChange(res) {
				const currentTime = Date.now()
				if (currentTime - this.lastShakeTime > 1000 && // 限制1秒内只能触发一次
					(Math.abs(res.x) > this.shakeThreshold ||
						Math.abs(res.y) > this.shakeThreshold ||
						Math.abs(res.z) > this.shakeThreshold)) {
					this.lastShakeTime = currentTime
					this.pickShop()
				}
			},
			addShop() {
				if (this.newShop) {
					this.shops.push(this.newShop);
					this.newShop = '';
					// 将店铺数据存储到本地
					uni.setStorageSync('shops', JSON.stringify(this.shops));
				}
			},
			removeShop(index) {
				this.shops.splice(index, 1);
				// 更新本地存储的店铺数据
				uni.setStorageSync('shops', JSON.stringify(this.shops));
			},
			pickShop() {
				if (this.shops.length > 0) {
					let randomIndex = Math.floor(Math.random() * this.shops.length);
					this.selectedShop = this.shops[randomIndex];
					wx.vibrateShort() // 触发短震动
				}
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
	}

	.result {
		text-align: center;
		padding: 20px 0;
		font-size: 20px;
	}

	.shop-list {
		margin-top: 20px;
	}
</style>