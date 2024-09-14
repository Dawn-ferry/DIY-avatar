<template>
  <view class="my-content">
    <view class="my-header">
      <view class="info">
        <view class="image">
          <image src="https://image.ijobway.com/27_sxgl/icon/head_portrait_01.png" />
        </view>
        <view class="user">
          <view class="jobs">{{ userInfo.jobTitle }}-{{ userInfo.nickName }}</view>
          <view class="company">{{ userInfo.entName }}</view>
        </view>
      </view>
    </view>
    <view class="functional-layer"> </view>

    <view class="my-footer">
      <view class="item">
        <view class="instruction">
          <uni-icons type="loop" size="24" color="#BEC0F2" />
          <!-- <image src="https://image.ijobway.com/27_sxgl/icon/icon_04.png" style="width: 24px; height: 24px" /> -->
          <view class="tips">检查更新</view>
        </view>
        <view class="icon">
          <image src="https://image.ijobway.com/27_sxgl/icon/icon_06.png" style="width: 24px; height: 24px" />
        </view>
      </view>

      <view class="item">
        <view class="instruction">
          <uni-icons type="hand-up-filled" size="24" color="#D65D5D" />
          <!-- <image src="https://image.ijobway.com/27_sxgl/icon/icon_05.png" style="width: 24px; height: 24px" /> -->
          <view class="tips">赞赏支持</view>
        </view>
        <view class="icon">
          <image src="https://image.ijobway.com/27_sxgl/icon/icon_06.png" style="width: 24px; height: 24px" />
        </view>
      </view>
      <view class="item">
        <view class="instruction">
          <uni-icons type="chatbubble-filled" size="24" color="#E8744F" />
          <!-- <image src="https://image.ijobway.com/27_sxgl/icon/icon_03.png" style="width: 24px; height: 24px" /> -->
          <button type="default" class="tips" open-type="contact">联系客服</button>
        </view>
        <view class="icon">
          <image src="https://image.ijobway.com/27_sxgl/icon/icon_06.png" style="width: 24px; height: 24px" />
        </view>
      </view>
      <view class="item">
        <view class="instruction">
          <uni-icons type="chatboxes-filled" size="24" color="#6874FD" />
          <button type="default" class="tips" open-type="feedback">意见反馈</button>
        </view>
        <view class="icon">
          <image src="https://image.ijobway.com/27_sxgl/icon/icon_06.png" style="width: 24px; height: 24px" />
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'my',
  data() {
    return {
      practicePlanPath: '', //实习
      internshipSystemPath: '', //实习制度
      userInfo: {
        avatar: '',
        jobTitle: '',
        entName: '',
        nickName: ''
      }
    };
  },
  async onShow() {
    // uni.setStorageSync
    // 设置缓存数据
    uni.setStorageSync('userInfo', { name: 'user', id: 1, points: 0 });
    // 获取缓存数据
    let a = uni.getStorageSync('userInfo');
    console.log('a ', a);
    // this.getUser();
  },
  methods: {
    async getUser() {}
  }
};
</script>
<style lang="scss" scoped>
.my-content {
  height: 100vh;
  background: #f4f6f8;
}

.my-header {
  background: url('https://image.ijobway.com/27_sxgl/icon/background_01.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 125 * 2rpx;
  // border: 1px solid red;
  overflow: hidden;
  .info {
    margin: 20 * 2rpx 28 * 2rpx;
    display: flex;
    .user {
      color: #fff;
      margin-left: 12 * 2rpx;
      .jobs {
        width: 500rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 20 * 2rpx;
      }
      .company {
        margin-top: 8 * 2rpx;
        font-size: 14 * 2rpx;
      }
    }
    image {
      width: 56 * 2rpx;
      height: 56 * 2rpx;
      border-radius: 50%;
    }
  }
}
.functional-layer {
  height: 110 * 2rpx;
  width: 327 * 2rpx;
  margin: 0px 28 * 2rpx;
  background: #ffffff;
  border-radius: 16 * 2rpx 16 * 2rpx 16 * 2rpx 16 * 2rpx;
  opacity: 1;
  position: relative;
  top: -40px;
}
.integral {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 86 * 2rpx 16 * 2rpx 10 * 2rpx 16 * 2rpx;
  height: 82 * 2rpx;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 16 * 2rpx;
  border-radius: 12 * 2rpx 12 * 2rpx 12 * 2rpx 12 * 2rpx;
}
.my-footer {
  border: 1px solid;
  width: 90%;
  margin: 0 auto;
  background: #fff;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48 * 2rpx;
    padding: 0 20 * 2rpx;
    .instruction {
      display: flex;
      align-items: center;
      padding: none;
      padding-left: 0;
      margin: 0;
      button {
        background-color: #fff;
        color: #000;
        border-radius: 0;
        display: block;
        padding-left: 0;
        padding-right: 0;
        &::after {
          border: none;
        }
      }

      .tips {
        margin-left: 12 * 2rpx;
        font-size: 14 * 2rpx;
      }
    }
  }
}
</style>
