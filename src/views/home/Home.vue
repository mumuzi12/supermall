<template>
  <div id="home">
    <!-- title -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- carousel -->
    <home-swiper :banners="banners" />
    <!-- recommend -->
    <recommend-view :recommends="recommends" />
    <!-- feature -->
    <feature-view />
    <!--  -->
    <tab-control :titles="titles" />
    <ul>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选']
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl
  },
  created () {
    // 请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
