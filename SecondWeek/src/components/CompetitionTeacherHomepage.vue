<!-- 竞赛平台教师首页主界面 包含页头 侧边栏导航 内容 页脚 
http://localhost:8080/#/CompetitionTeacherHomepage#
-->
<template>
  <div class="g-competition">
    <Header
      :username="username"
      class="header"
    ></Header>
    <Sider
      class="g-sider"
      :first="first"
    ></Sider>
    <div class="mainContent">
      <div class="search">
        <el-form
          :inline="true"
          ref="form"
          :model="form"
        >
          <el-form-item label="试卷名称：">
            <el-input
              v-model="form.name"
              placeholder="请输入试卷名称"
              class="input"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="success"
              class="btn1"
              @click="search"
            >查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="success"
              class="btn2"
              @click="output"
            >发布训练技能</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="tabs">
        <Tabs
          class="g-tabs"
          v-for="(i, key) in content"
          :content="i"
          :key="key"
        ></Tabs>
      </div>
    </div>
    <Page
      class="g-page"
      :page="page"
    ></Page>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Sider from "@/components/Sider.vue"
import Tabs from "@/components/Tabs.vue"
import Page from "@/components/Page.vue"
export default {
  name: 'Competition',
  data () {
    return {
      form: {
        name: "",
      },
      username: "林佳琪 老师",
      content: [
        {
          name: '分布式数据库Hbase',
          img: require('../assets/tabs_one.png'),
          score: 100,
        },
        {
          name: "分布式计算编程",
          img: require('../assets/tabs_tow.png'),
          score: 100,
        },
        {
          name: "网络对抗课程",
          img: require('../assets/tabs_three.png'),
          score: 100,
        },
        {
          name: "防火墙进阶篇",
          img: require('../assets/tabs_four.png'),
          score: 100,
        },
        {
          name: "防火墙高阶篇",
          img: require('../assets/tabs_five.png'),
          score: 100,
        },
        {
          name: "19网络安全篇",
          img: require('../assets/tabs_six.png'),
          score: 100,
        }
      ],

      first: [
        {
          name: "赛事训练",
          url: require('../assets/sider_one.png'),
          second: [
            { name: "训练资源" },
            { name: "训练管理" },
            { name: "训练评分" },
            { name: "查看成绩" },
          ]
        },
        {
          name: "教学管理",
          url: require('../assets/sider_tow.png'),
          second: [
            { name: "我的学生" }
          ]
        },
        {
          name: "代办事项",
          url: require('../assets/sider_three.png'),
          second: [
            {
              name: "待评分训练",
              messageNum: 55
            }
          ]
        }
      ],
      page: {
        value: true,
        list_num: 50,
        current_page: 1,
        page_size: 6,
        total_page: 9,
      }

    }
  },
  components: {
    Header,
    Sider,
    Tabs,
    Page,
  },
  methods: {
    search: function () {
      this.$message("搜索了'" + this.form.name + "'");
    },
    output: function () {
      this.$message("点击了发布按钮");
    }
  }
}
</script>

<style lang="scss" scoped>
//主容器
.g-competition {
  width: 100%;
  //头部
  .header {
    position: fixed;
    z-index: 1;
  }
  //侧边栏
  .g-sider {
    position: absolute;
    left: 323px;
    top: 81px;
  }
  .mainContent {
    position: absolute;
    left: 515px;
    top: 85px;
    width: 1100px;
    height: 650px;
    //搜索框和发布按钮
    .search {
      position: absolute;
      height: 36px;
      .input {
        position: relative;
        width: 220px;
      }
      .btn1 {
        background: linear-gradient(
          to right,
          rgba(28, 208, 164, 1),
          rgba(3, 174, 132, 1)
        );
        height: 36px;
        width: 70px;
        padding-left: 18px;
        padding-top: 11px;
        border-color: #fff;
      }
      .btn2 {
        background: linear-gradient(
          to right,
          rgba(28, 208, 164, 1),
          rgba(3, 174, 132, 1)
        );
        height: 36px;
        width: 110px;
        border-color: #fff;
        margin-left: 590px;
        padding-left: 12px;
        padding-top: 11px;
      }
    }
    //页面主题内容 六个小框
    .tabs {
      position: absolute;
      top: 70px;
      width: 1090px;
      height: 535px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: space-between;
    }
  }
  //翻页
  .g-page {
    position: absolute;
    margin-top: 776px;
    margin-left: 516px;
  }
}
//element ui 样式的修改
/deep/.el-form-item {
  .el-form-item__label {
    padding: 0;
  }
}
/deep/ .el-input__inner:focus {
  border-color: rgba(3, 174, 132, 1);
  outline: 0;
}
</style>
