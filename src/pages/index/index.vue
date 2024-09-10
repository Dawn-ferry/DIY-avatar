<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <button @click="onCheckFn">检查更新</button>
    <button>赞赏支持</button>
    <!--  -->
    <button open-type="contact">联系客服</button>
    <button open-type="feedback">意见反馈</button>

    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    };
  },
  onLoad() {},
  onShow() {},
  methods: {
    onCheckFn() {
      const updateManager = uni.getUpdateManager();

      /**
       *
       * 如何测试
       * -微信开发工具
       * --添加编译模式中
       * ---点击编译设置 设置为成功状态（代表有版本更新）
       *
       *
       * **/
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate);
      });

      updateManager.onUpdateReady(function (res) {
        console.log('res------------', res);
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });

      updateManager.onUpdateFailed(function (res) {
        // 新的版本下载失败
        console.log('download error');
        uni.showModal({
          title: '提示',
          content: '新版小程序下载失败\n请自行退出程序，手动卸载本程序，再运行',
          confirmText: '知道了'
        });
      });
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
