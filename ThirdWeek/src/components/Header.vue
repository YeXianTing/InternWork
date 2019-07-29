<template>
  <!-- 页面头部组件 包含平台名称 用户信息 返回门户 退出登录 -->
  <div class="g-header">
    <div class="title">锐智竞赛平台</div>
    <img alt="图片" class="img" :src="imgurl" />
    <div class="username">{{username}}</div>
    <div class="returnImg">
      <img :src="returnImg" />
    </div>
    <router-link to="#" class="return" @click.native="myreturn">返回门户</router-link>
    <div class="logoutImg">
      <img :src="logoutImg" />
    </div>
    <router-link to="#" class="logout" @click.native="logout">退出登录</router-link>
  </div>
</template>
<script>
export default {
  name: "g-header",
  data() {
    return {
      imgurl: require("../assets/header_one.png"),
      returnImg: require("../assets/header_tow.png"),
      logoutImg: require("../assets/header_three.png")
    };
  },
  props: ["username"],
  methods: {
    myreturn: function() {
      this.$router.push("/mainPage");
    },
    logout: function() {
      this.$router.push("/enter");
    },
    getList() {
      const model = filterModel(this.searchModel);
      const pageInfo = {
        pageNum: this.pageInfo.page,
        pageSize: this.pageInfo.limit
      };
      this.listLoading = true;
      list(model, pageInfo, 2)
        .then(response => {
          const data = response.data;
          this.teacherList = data.list;
          this.pageInfo = {
            total: data.total,
            page: data.pageNum,
            pageCount: data.pages,
            limit: data.pageSize
          };
          this.listLoading = false;
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="scss" scoped>
//整体
.g-header {
  // width: 1920px;
  // height: 60px;
  background: rgba(3, 174, 132, 1);
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;

  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  // line-height: 60px;
  //平台名称
  .title {
    width: 145px;
    height: 25px;
    font-size: 24px;
    position: absolute;
    left: 315px;
    top: 18px;
  }
  //用户信息
  .img {
    width: 34px;
    height: 34px;
    background-color: azure;
    border-radius: 50%;
    position: absolute;
    left: 1260px;
    top: 13px;
    background-size: 100% 100%;
  }
  .username {
    width: 75px;
    height: 15px;
    font-size: 14px;
    position: absolute;
    left: 1305px;
    top: 23px;
  }
  //返回门户
  .returnImg {
    width: 17px;
    height: 17px;
    border-radius: 2px;
    position: absolute;
    left: 1414px;
    top: 20px;
    background-size: 100% 100%;
  }
  .return {
    width: 56px;
    height: 14px;
    font-size: 14px;
    position: absolute;
    left: 1438px;
    top: 23px;
    color: white;
    &:hover {
      color: rgb(119, 245, 186);
    }
  }
  //退出登录
  .logoutImg {
    width: 19px;
    height: 20px;
    border-radius: 2px;
    position: absolute;
    left: 1524px;
    top: 20px;
    background-size: 100% 100%;
  }
  .logout {
    width: 56px;
    height: 14px;
    font-size: 14px;
    position: absolute;
    left: 1548px;
    top: 23px;
    color: white;
    &:hover {
      color: rgb(119, 245, 186);
    }
  }
}
</style>