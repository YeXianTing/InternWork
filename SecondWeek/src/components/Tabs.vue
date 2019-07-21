<!--小窗口组件 显示预览图等等-->
<template>
  <div class="g-tab">
    <img
      class="g-img"
      :src='content.img'
      alt="图片"
    />
    <div class="g-information">
      <router-link
        class="name"
        to="#"
      >{{content.name}}</router-link>
      <div class="score">试卷总分：{{content.score}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'g-tab',
  data () {
    return {

    }
  },
  props: ['content']
}
</script>

<style lang="scss" scoped>
.g-tab {
  width: 300px;
  height: 252px;
  border-radius: 5px 5px 5px 5px;
  .g-img {
    width: 300px;
    height: 180px;
    border-top: 1px solid rgba(221, 228, 232, 1);
    border-left: 1px solid rgba(221, 228, 232, 1);
    border-right: 1px solid rgba(221, 228, 232, 1);
  }
  .g-information {
    position: relative;
    width: 300px;
    height: 72px;
    border: 1px solid rgba(221, 228, 232, 1);
    font-family: MicrosoftYaHei;
    font-weight: 400;
    .name {
      color: #000;
      position: absolute;
      margin-left: 16px;
      top: 13px;
      font-size: 18px;
      line-height: 24px;
    }
    .score {
      position: absolute;
      left: 14px;
      top: 44px;
      font-size: 14px;
      line-height: 24px;
      color: rgba(115, 115, 115, 1);
    }
  }
}
</style>