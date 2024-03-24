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
      <div>排序</div>
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
    };
  },
  methods: {
    handSelect(index) {
      this.score = index;
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

.score_item {
  padding: 4px 12px;
  background: #fff;
  border-radius: 4px 4px 4px 4px;
  cursor: pointer;
}

.score_select {
  color: #fff;
  background: #ed702d;
}
</style>
