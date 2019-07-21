<!--admin 管理教师
http://localhost:8080/#/AdminTeacherManagement#
-->
<template>
  <div class="admin">
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
          <el-form-item label="院系：">
            <el-input
              v-model="form.department"
              placeholder="请输入院系"
              class="input"
            ></el-input>
          </el-form-item>
          <el-form-item label="工号：">
            <el-input
              v-model="form.jobNumber"
              placeholder="请输入工号"
              class="input"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input
              v-model="form.name"
              placeholder="请输入姓名"
              class="input"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="success"
              class="btn1"
              @click="search"
            >查 询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="success"
              class="btn2"
              @click="addTeacher"
            >添加教师</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="g-table">
        <div class="g-oprater">
          <el-button
            size="small"
            class="btn"
            @click="deleted"
          ><img :src="img1"></img> 批量删除</el-button>
          <el-button
            size="small"
            class="btn"
            @click="imported"
          ><img :src="img2"></img> 批量导入</el-button>
          <el-button
            size="small"
            class="btn"
            @click="downloaded"
          ><img :src="img3"></img> 下载模板</el-button>
        </div>
        <div class="g-information">
          <el-table
            :header-cell-style="{
            'line-height':'35px',
            'background-color': '#EDF7F5',
            'color': 'black',
            }"
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            stripe
            style="width: 1080px"
            empty-text="未查询到数据"
          >
            <el-table-column
              type="selection"
              width="90"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="jobNumber"
              label="工号"
              width="110"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="110"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别"
              width="70"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="department"
              label="院系"
              width="130"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机号"
              width="150"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              width="150"
              align="center"
            >
            </el-table-column>

            <el-table-column
              label="状态"
              width="70"
              align="center"
            >
              <template slot-scope="scope">
                <el-switch
                  class="switch"
                  v-model="scope.row.status"
                  active-color="#03AE84"
                  inactive-color="#CCCCCC"
                  active-text="开"
                  inactive-text="关"
                >
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              label="
                  操作"
              width="200"
              align="center"
            >
              <template slot-scope="scope">
                <router-link
                  to="#"
                  @click.native="handleEdit(scope.$index, scope.row)"
                > 编辑&nbsp;&nbsp;&nbsp;</router-link>
                <router-link
                  to="#"
                  @click.native="handleDelete(scope.$index, scope.row)"
                > 删除&nbsp;&nbsp;&nbsp;</router-link>
                <router-link
                  to="#"
                  @click.native="handleReset(scope.$index, scope.row)"
                > 重置密码&nbsp;&nbsp;&nbsp;</router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
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
import Page from "@/components/Page.vue"
export default {
  name: 'admin',
  data () {
    return {
      username: "admin",
      first: [
        {
          name: "平台管理",
          url: require('../assets/sider_four.png'),
          second: [
            { name: "教师管理" },
            { name: "虚拟机管理" },
            { name: "更新授权" },
          ]
        },
      ],
      tableData: [{
        jobNumber: '00001',
        name: '王大虎',
        sex: '女',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: true
      }, {
        jobNumber: '00002',
        name: '王二虎',
        sex: '男',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: false
      }, {
        jobNumber: '00003',
        name: '王三虎',
        sex: '男',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: false
      }, {
        jobNumber: '00004',
        name: '王小虎',
        sex: '女',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: true
      }, {
        jobNumber: '12331',
        name: '张丽丽',
        sex: '女',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: false
      }, {
        jobNumber: '45114',
        name: '萨克',
        sex: '男',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: false
      }, {
        jobNumber: '87811',
        name: '企鹅',
        sex: '男',
        department: '电子学院',
        phone: '-',
        email: '-',
        status: false
      }],
      page: {
        value: true,
        list_num: 50,
        current_page: 1,
        page_size: 8,
        total_page: 7,
      },
      form: {
        department: "",
        jobNumber: "",
        name: ""
      },
      img1: require('../assets/operate_one.png'),
      img2: require('../assets/operate_tow.png'),
      img3: require('../assets/operate_three.png'),
    }
  },
  components: {
    Header,
    Sider,
    Page,
  },
  methods: {
    deleted: function () {
      if (this.$refs.multipleTable.selection == '') {
        alert("未选择要删除的名单")
      }
      else {
        let list = "选中的名单为："
        this.$refs.multipleTable.selection.forEach(x =>
          list = list + x.name + '.'
        )
        alert(list);
      }
    },
    imported: function () {
      alert("点击了批量导入")
    },
    downloaded: function () {
      alert("点击了下载模板按钮")
    },
    search: function () {
      let string = "要搜的值是 院系：'" + this.form.department + "' 工号：'" + this.form.jobNumber + "' 姓名：'" + this.form.name + "'"
      alert(string)
    },
    handleEdit: function (index, row) {
      alert("点击编辑按钮，当前索引：" + index + " 工号" + row.jobNumber);
    },
    handleDelete:function  (index, row) {
      alert("点击删除按钮，当前索引：" + index + " 工号" + row.jobNumber);
    },
    handleReset:function (index, row) {
      alert("点击重置密码按钮，当前索引：" + index + " 工号" + row.jobNumber);
    },
    addTeacher: function(){
      this.$message('点击了添加教师按钮');
    }
  }
}
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;
  //头部
  .header {
    position: fixed;
    z-index: 1;
  }
  //侧边
  .g-sider {
    position: absolute;
    left: 323px;
    top: 81px;
  }
  //主要内容
  .mainContent {
    position: relative;
    left: 515px;
    top: 85px;
    width: 1100px;
    height: 650px;
    //form表单
    .search {
      position: relative;
      width: 1090px;
      height: 40px;
      .input {
        position: relative;
        width: 140px;
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
        width: 80px;
        border-color: #fff;
        padding-left: 11px;
        padding-top: 11px;
        margin-left: 325px;
      }
    }
    .g-table {
      .g-oprater {
        background-color: rgba(245, 246, 249, 1);
        width: 1080px;
        height: 40px;
        position: relative;
        top: 30px;
        border: 1px solid rgba(224, 230, 235, 1);
        .btn {
          position: relative;
          top: 2px;
          left: 10px;
          &:hover {
            background-color: #03ae84;
            color: white;
          }
          &:focus {
            background-color: #03ae84;
            color: white;
          }
        }
      }
      .g-information {
        position: relative;
        top: 30px;
      }
    }
  }
  //翻页
  .g-page {
    position: relative;
    top: 150px;
    left: 516px;
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
/deep/ .el-table {
  td {
    height: 60px;
    color: #757575;
  }
  th > .cell {
    color: black;
  }
}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #03ae84;
  border-color: #03ae84;
}
/deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #03ae84;
  border-color: #03ae84;
}
/deep/ .el-checkbox__inner:hover {
  border-color: #03ae84;
}
/deep/ a {
  color: #03ae84;
}

/deep/ .el-switch__label--left {
  position: relative;
  left: 43px;
  color: #fff;
  z-index: -1111;
}
/deep/ .el-switch__label--right {
  position: relative;
  right: 43px;
  color: #fff;
  z-index: -1111;
}
/deep/ .el-switch__label.is-active {
  z-index: 1111;
  color: #fff;
}
/deep/ .switch {
  left: -18px;
}

/deep/ .el-switch__label * {
  font-size: 12px;
}
</style>
