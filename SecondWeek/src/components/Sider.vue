<!--侧边栏导航组件-->
<template>
  <div id="g-sider">
    <div v-for="(i,key) in first">
      <div class="first_level">
        <img
          class="icon"
          :src="i.url"
        /><span class="title">{{i.name}}</span>
      </div>
      <div
        v-for="(j,key2) in i.second"
        class="second_level"
        :class="{'active':key==activeFirst&&key2==activeSecond}"
      >
        <router-link
          to="#"
          class="title"
          @click.native="change(key,key2)"
        >{{j.name}}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'g-sider',
  data () {
    return {
      activeFirst: 0,
      activeSecond: 0,
    }
  },
  methods: {
    change: function (key, key2) {
      this.activeFirst = key;
      this.activeSecond = key2;
    }
  },
  props: ['first'],
}
</script>

<style lang="scss" scoped>
.g-sider {
  background-color: #fff;
  width: 146px;
  padding-bottom: 15px;
  left: 323px;
  top: 81px;
  box-shadow: 2px 4px 4px rgba(207, 207, 207, 0.6);
  .first_level {
    width: 180px;
    height: 46px;
    position: relative;
    left: -8px;
    background: rgba(224, 240, 238, 1);
    border-radius: 4px 4px 4px 4px;
    background: linear-gradient(
          -45deg,
          transparent 15px,
          rgba(224, 240, 238, 1) 0
        )
        bottom right,
      linear-gradient(45deg, transparent 0, rgba(224, 240, 238, 1) 0) bottom
        left,
      linear-gradient(135deg, transparent 0, rgba(224, 240, 238, 1) 0) top left,
      linear-gradient(-135deg, transparent 15px, rgba(224, 240, 238, 1) 0) top
        right;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    .icon {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 21px;
      top: 12px;
      background-size: 100% 100%;
    }
    .title {
      position: absolute;
      font-size: 14px;
      left: 50px;
      top: 14px;
    }
  }
  .second_level {
    position: relative;
    width: 146px;
    height: 46px;
    .title {
      color: black;
      position: absolute;
      font-size: 14px;
      left: 42px;
      top: 14px;
    }
  }
  .active {
    width: 180px;
    height: 46px;
    position: relative;
    left: -8px;
    background: rgba(3, 174, 132, 1);
    border-radius: 5px 5px 5px 5px;
    background: linear-gradient(
          -45deg,
          transparent 15px,
          rgba(3, 174, 132, 1) 0
        )
        bottom right,
      linear-gradient(45deg, transparent 0, rgba(3, 174, 132, 1) 0) bottom left,
      linear-gradient(135deg, transparent 0, rgba(3, 174, 132, 1) 0) top left,
      linear-gradient(-135deg, transparent 15px, rgba(3, 174, 132, 1) 0) top
        right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    .title {
      color: #fff;
      position: absolute;
      font-size: 14px;
      left: 50px;
      top: 14px;
    }
  }
}
</style>