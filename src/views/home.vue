<template>
  <div class="content_box">
    <!-- 热门搜索 -->
    <div class="flex">
      <img src="assets/fire.png" style="width: 20px" alt="" />
      <span class="f_w top_title">热门搜索</span>
      <span
        v-for="(item, index) in hotTitle"
        :key="index"
        class="top_hot_item"
        >{{ item.title }}</span
      >
    </div>
    <!-- 排序 -->
    <div class="score flex">
      <div class="score_item">排序</div>
      <div
        v-for="(item, index) in scoreList"
        :key="index"
        :class="score === index ? 'score_select' : ''"
        class="score_item"
        @click="handSelect(index)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- 贴图主体 -->
    <div class="content flex">
      <!-- 骨架屏 -->
      <el-space :size="10" wrap alignment="flex-start">
        <el-skeleton
          :loading="loading"
          animated
          :throttle="200"
          v-for="(item, index) in 8"
          :key="index"
        >
          <template #template>
            <div class="card">
              <el-skeleton-item variant="image" class="image" />
              <div style="padding: 14px">
                <el-skeleton-item variant="h3" style="width: 100%" />
              </div>
            </div>
          </template>
          <template #default>
            <el-card shadow="hover" :body-style="{ padding: '5px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px; width: 220px" class="text_overflow">
                无缝浅橡饰面板材木纹无缝浅橡饰面板材木纹无缝浅橡饰面板材木纹
              </div>
            </el-card>
          </template>
        </el-skeleton>
      </el-space>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotTitle: [
        {
          title: "山",
        },
        {
          title: "框",
        },
        {
          title: "云朵",
        },
        {
          title: "中国风",
        },
        {
          title: "炫酷科技",
        },
      ],
      score: 0,
      scoreList: [
        {
          name: "综合",
        },
        {
          name: "热门",
        },
        {
          name: "最新",
        },
      ],
      loading: true,
      list: [],
    };
  },
  created() {
    // 初始化
    this.handLoading();
  },
  methods: {
    // 选择排序
    handSelect(index) {
      this.score = index;
      this.handLoading();
    },

    // 加载动画
    handLoading() {
      this.loading = true;
      const timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
        }
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.top_title {
  padding: 0 12px;
}

.top_hot_item {
  margin: 0 6px;
  padding: 4px 8px;
  background: #f3f4f7;
  border-radius: 3px 3px 3px 3px;
}

.score {
  width: 100%;
  padding: 14px 36px;
  margin: 30px 0;
  background: #ffffff;
  box-shadow: 0px 5px 20px 1px rgba(51, 54, 73, 0.15);
  border-radius: 6px 6px 6px 6px;
  box-sizing: border-box;
}

.score_item {
  padding: 4px 12px;
  margin-right: 24px;
  background: #fff;
  border-radius: 4px 4px 4px 4px;
  cursor: pointer;
  font-size: 16px;
}

.score_select {
  color: #fff;
  background: #ed702d;
}

.content {
  width: 100%;

  .image {
    width: 220px;
    height: 220px;
    border-radius: 8px;
  }

  .card {
    border: none;
    padding: 6px !important;
  }
}
</style>
