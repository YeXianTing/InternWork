<template>
  <div class="test">
    <div class="content">登录成功</div>
    <el-button
      type="primary"
      @click="quit"
    >退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    quit () {
      this.$confirm('是否退出登录返回到首页?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.test {
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: white;
  .content {
    font-size: 40px;
  }
}
</style>
