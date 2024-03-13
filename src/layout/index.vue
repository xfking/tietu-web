<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 主体 -->
    <app-main />
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import { AppMain, Header, Footer } from "./components";

export default {
  name: "layout",
  components: { AppMain, Header, Footer },
};
</script>
