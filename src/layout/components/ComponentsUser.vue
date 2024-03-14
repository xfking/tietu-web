<template>
  <div>
    <div class="flex">
      <div class="user_logo"></div>
      <div class="user_name flex_1">
        <div class="f_w text_overflow">{{ userInfo.name || "-" }}</div>
        <div class="user_id">ID:{{ userInfo.id || "-" }}</div>
      </div>
    </div>
    <div class="user_button">开通会员</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "贴图",
        id: "14523654",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.user_logo {
  width: 40px;
  height: 40px;
  border-radius: 28px 28px 28px 28px;
  background: #333649;
  margin-right: 15px;
}

.user_name {
  width: calc(100% - 55px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user_id {
  font-size: 12px;
  color: #989ba4;
}

.user_button {
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #ed702d;
  border-radius: 3px 3px 3px 3px;
}
</style>
