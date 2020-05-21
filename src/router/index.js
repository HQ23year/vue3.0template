import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Layout from '@/layout';
Vue.use(VueRouter);

/*
  1.系统分配(默认登录角色自动分配)
  2.角色分配(管理员进入手动分配)
*/
/*
  1.默认路由
  2.动态路由
*/
export const defaultRouter = [
  {
    path: "/",
    redirect: '/login',
    hidden: true,
  },
  {
    path: '/login',
    name: "login",
    hidden: true,
    component: Login
  }
]

export const asyncRouter = [
  {
    path: '/home',
    name: "home",
    hidden: false,
    redirect: "/home/index",
    meta: { title: '首页', icon: 'user', roles: 'admin' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: "index",
        component: () => import('@/views/home'),
        meta: { title: '首页下的分支' },
      }
    ]
  },
  {
    path: '/user',
    name: "user",
    hidden: false,
    meta: { title: '用户管理', icon: 'user', roles: 'user' },
    component: Layout,
    children: [
      {
        path: '/userIndex',
        name: "userIndex",
        component: () => import('@/views/user'),
        meta: { title: '用户管理下的分支' },
      }
    ]
  }
]


const router = new VueRouter({
  routes: defaultRouter.concat(asyncRouter)
});

export default router;