<template>
  <div class="Header">
      <div class="Title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'cii元数据配置平台'
    }
  }
}
</script>

<style lang="scss" scoped>
  .Header{
     background-color:rgba(3, 174, 132, 1);
     width: 100%;
     height: 60px;
     .Title{
         color:white;
         font-size: 30px;
         position: absolute;
         margin: 10px 50px;
     }
  }
</style>
