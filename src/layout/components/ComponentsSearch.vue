<template>
  <div>
    <el-input
      v-model="value"
      style="max-width: 600px"
      placeholder="请输入或粘贴图片的网址"
    >
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>

    <div class="box">
      <el-upload drag action="" :show-file-list="false">
        <img src="assets/uplaod_1.png" class="upload_img" alt="" />
        <div>拖放或粘贴图片在此区域的任何位置 或</div>
        <el-button class="upload_but">本地上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      value: "",
      Search,
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  margin: 16px 0;
  text-align: center;
  background: #f8f8f8;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid #d6d7db;

  .upload_img {
    width: 50px;
    margin-bottom: 18px;
  }

  .upload_but {
    margin-top: 20px;
  }
}
</style>
