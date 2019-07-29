<!--小窗口组件 显示预览图等等-->
<template>
  <div class="g-tab">
    <div class="g-content">
      <img class="g-img" :src="content.titlePageUrl" alt="图片" onerror="this.src='/static/skillTraining_default_img.jpg'"/>
    </div>
    <div class="g-information">
      <router-link class="name" to="#">{{content.name}}</router-link>
      <div class="score">试卷总分：{{content.totalScore}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-tab",
  data() {
    return {};
  },
  props: ["content"]
};
</script>

<style lang="scss" scoped>
.g-tab {
  width: 300px;
  height: 252px;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid rgba(221, 228, 232, 1);
  margin-top: 20px;
  &:hover {
    border: 1px solid #03ae84;
  }
  .g-content {
    position: relative;
    padding-bottom: 60%;
    .g-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
    }
  }
  .g-information {
    position: relative;
    width: 300px;
    height: 72px;
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