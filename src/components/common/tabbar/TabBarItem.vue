<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      //isActive: true
    }
  },
  computed: {
    isActive () {
      // 根据路由动态来决定 isActive 为 true false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle () {
      // 处于活跃时的样式
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick () {
      //console.log("wo bei ");
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* line-height: 49px; */
}

.tab-bar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
