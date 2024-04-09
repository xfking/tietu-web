// 引入需要的模块
import { createRouter, createWebHistory } from "vue-router";
import layout from '../layout/index.vue'

const routes = [
  {
    //默认展示，这是主页面路由必须加斜杠 /
    path: "/",
    component: layout,
    redirect: '/home',
    children: [
      // 首页
      {
        path: '/home',
        name: 'home',
        component: () => import("../views/home.vue"),
      },
      // 我的收益
      {
        path: '/myEarnings',
        name: 'myEarnings',
        component: () => import("../views/myEarnings.vue"),
      }
    ]
  },
];

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导出路由
export default router;