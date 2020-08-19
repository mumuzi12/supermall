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
    <!-- tab control -->
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" />
    <!-- content -->
    <goods-list :goods="goods[currentType].list" />
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import GoodsList from 'components/content/goods/GoodsList'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import { getHomeMultidata, getHomeGoods } from 'network/home'


export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        }
      },
      currentType: 'pop'
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,

    NavBar,
    TabControl
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品的数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  methods: {
    /**
     *  事件监听 
     */
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    /**
     * 网络请求 
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        //console.log(this.goods[type].list);
      })
    }
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
.tab-control {
  /* 在正常未达到位置之前 默认是static 达到位置之后 浏览器自动改为fixed 移动端一般支持 */
  position: sticky;
  top: 44px;
}
</style>
