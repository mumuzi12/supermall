<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="item"
      :class="{active:index === currentIndex}"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
</style>