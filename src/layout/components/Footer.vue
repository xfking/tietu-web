<template>
  <div class="footer flex flex_center">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title:
        "苏ICP备2022024930号-2  Copyright @ 2023 贴图网  贴图网是网络服务平台方，若您的权益被侵犯，请联系微信客服",
    };
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 60px;
  color: #fff;
  text-align: center;
  background-color: #333649;
}
</style>
