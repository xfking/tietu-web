<template>
  <div class="content_box">
    <div class="box_left">
      <div class="left_top">
        <div class="left_top_box">
          <div class="left_name">MIZYH8bF2</div>
          <div class="left_id flex">ID:14523654</div>
          <el-button type="primary" class="left_but">会员续费</el-button>
          <div class="left_time">到期时间：2024-12-19</div>
        </div>
      </div>
      <div class="left_bottom">
        <template v-for="(item, index) in menuList" :key="index">
          <div
            class="left_list"
            :class="select === index ? 'select' : ''"
            @click="handeSelect(index)"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="box_right"></div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      select: 0,
      menuList: [
        {
          name: "我的收益",
        },
        {
          name: "我的收藏",
        },
        {
          name: "我的上传",
        },
      ],
    };
  },

  methods: {
    handeSelect(index) {
      this.select = index;
    },
  },
};
</script>
  
<style lang="less" scoped>
.content_box {
  display: flex;
}
.box_left {
  width: 230px;
  height: 100%;

  .left_top {
    width: 230px;
    height: 154px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    border: 1px solid #f8f8f8;
    background-image: url("../assets/user (1).png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;

    .left_top_box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
      line-height: 2;
    }

    .left_name {
      font-size: 16px;
      font-weight: 700;
      color: #333649;
    }
    .left_id {
      color: #989ba4;
    }
    .left_time {
      font-size: 12px;
      color: #e60012;
    }
    .left_but {
      width: 100%;
      margin-top: 17px;
    }
  }

  .left_bottom {
    width: 100%;
    height: calc(100% - 250px);
    margin-top: 20px;
    background: #f8f8f8;
    border-radius: 3px 3px 0px 0px;

    .left_list {
      padding: 15px 24px;
      box-sizing: border-box;
      border-left: 3px solid #f8f8f8;
      cursor: pointer;
    }

    .select {
      border-color: #ed702d;
      background: linear-gradient(
        91deg,
        rgba(237, 112, 45, 0.5) 0%,
        #ffffff 20%
      );
      border-radius: 1px 0px 0px 1px;
    }
  }
}
.box_right {
  flex: 1;
}
</style>