<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="less">
.app-main {
  /*60 = navbar  */
  min-height: calc(100vh - 120px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
