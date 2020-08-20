<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      Type: Number,
      default: 0
    },
    pullUpLoad: {
      Type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null,
    }
  },
  mounted () {
    // 创建scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      scrollY: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动的位置
    this.scroll.on('scroll', position => {
      //console.log(position);
      this.$emit('scroll', position);
    });
    // 监听上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp () {
      this.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>
</style>