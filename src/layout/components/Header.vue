<template>
  <div class="header">
    <div class="main-box flex flex_between">
      <div class="header_left">贴图网</div>
      <div class="flex">
        <el-popover placement="bottom" :width="600" trigger="click">
          <template #reference>
            <div class="search_box">
              <span>请输入你想搜索的内容</span>
              <el-tooltip
                effect="dark"
                content="以图搜图"
                placement="left-start"
              >
                <img src="assets/cut.png" alt="" class="cut_icon" />
              </el-tooltip>

              <img src="assets/search.png" alt="" class="search_icon" />
            </div>
          </template>
          <ComponentsSearch />
        </el-popover>

        <el-popover placement="bottom" :width="180" trigger="click">
          <template #reference>
            <div class="header_user"></div>
          </template>
          <ComponentsUser />
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentsUser from "./ComponentsUser.vue";
import ComponentsSearch from "./ComponentsSearch.vue";
export default {
  components: { ComponentsUser, ComponentsSearch },
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-04",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-01",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-03",
          name: "Jack",
          address: "New York City",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 5px 20px 1px rgba(51, 54, 73, 0.15);
  border-radius: 3px 3px 3px 3px;

  .search_box {
    width: 580px;
    height: 32px;
    background: #ffffff;
    border-radius: 3px 3px 3px 3px;
    border: 1px solid #d6d7db;
    position: relative;
    line-height: 32px;
    padding-left: 12px;
    color: #989ba4;
    cursor: pointer;

    img {
      width: 16px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .search_icon {
      right: 16px;
    }
    .cut_icon {
      right: 52px;
    }
  }

  .header_user {
    width: 32px;
    height: 32px;
    background: #333649;
    border-radius: 20px 20px 20px 20px;
    margin-left: 26px;
  }
}
</style>
