import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Cart = () => import('views/cart/Cart.vue');
const Profile = () => import('views/profile/Profile.vue');

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }

  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// 实现上面title的变化
router.beforeEach((to, from, next) => {
  // 从from跳到to
  // 路由导航守卫
  document.title = to.meta.title;
  //document.title = to.matched[0].meta.title;
  next();
});

export default router;