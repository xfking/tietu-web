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
    <div class="list_box">
      <div v-for="(item, index) in list" :key="index" class="list_item">
        {{ item.title }}
      </div>
    </div>
    <div class="layout_but">退出登录</div>
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
      list: [
        {
          title: "我的收益",
          url: "",
        },
        {
          title: "我的收藏",
          url: "",
        },
        {
          title: "我的上传",
          url: "",
        },
      ],
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
  color: #fff;
  background: #ed702d;
  border-radius: 3px 3px 3px 3px;
  margin: 18px 0;
  cursor: pointer;
}

.list_box {
  padding: 18px 0 10px 0;
  margin-bottom: 18px;
  border-top: 1px solid #d6d7db;
  border-bottom: 1px solid #d6d7db;
}

.list_item {
  padding: 7px 12px;
  cursor: pointer;
}
.list_item:hover {
  color: #ed702d;
  background: rgba(237, 112, 45, 0.1);
}
.layout_but {
  width: 100%;
  cursor: pointer;
}
</style>
