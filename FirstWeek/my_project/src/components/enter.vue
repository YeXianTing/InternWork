<template>
  <div id='app'>
    <p class="title">锐智一体化平台</p>
    <div class="login_box">
      <el-tabs
        v-model="activeName"
        style="padding:5% 22%"
        stretch
      >
        <el-tab-pane
          label="学生"
          name="student"
        >
          <el-form
            ref="form"
            :model="student"
          >
            <el-form-item label>
              <el-input
                v-model="student.username"
                class="input"
                placeholder="请输入账号"
              ></el-input>
              <i class="el-icon-user"></i>
              <el-input
                v-model="student.password"
                class="input"
                placeholder="请输入密码"
                type="password"
              ></el-input>
              <i class="el-icon-unlock"></i>
              <drag-verify
                class="drag"
                :width="width"
                :height="height"
                :text="text"
                :success-text="successText"
                :background="background"
                :progress-bar-bg="progressBarBg"
                :completed-bg="completedBg"
                :handler-bg="handlerBg"
                :handler-icon="handlerIcon"
                :text-size="textSize"
                :success-icon="successIcon"
                :circle="false"
                ref="Verify"
              >
              </drag-verify>
              <el-button
                type="success"
                class="enter_button"
                @click="stu_enter"
              >登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="教师"
          name="teacher"
        >
          <el-form
            ref="form"
            :model="teacher"
          >
            <el-form-item label>
              <el-input
                v-model="teacher.username"
                class="input"
                placeholder="请输入账号"
              ></el-input>
              <i class="el-icon-user"></i>
              <el-input
                v-model="teacher.password"
                class="input"
                placeholder="请输入密码"
                type="password"
              ></el-input>
              <i class="el-icon-unlock"></i>
              <drag-verify
                class="drag"
                :width="width"
                :height="height"
                :text="text"
                :success-text="successText"
                :background="background"
                :progress-bar-bg="progressBarBg"
                :completed-bg="completedBg"
                :handler-bg="handlerBg"
                :handler-icon="handlerIcon"
                :text-size="textSize"
                :success-icon="successIcon"
                :circle="false"
                ref="Verify2"
              >
              </drag-verify>
              <el-button
                type="success"
                class="enter_button"
                @click="tea_enter"
              >登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <p class="information">Copyright C 2016 Zhongrui Networks All Rights Reserved </p>
  </div>
</template>
<script>
import dragVerify from 'vue-drag-verify'
import 'font-awesome/css/font-awesome.min.css'
export default {
  data () {
    return {
      activeName: 'student',
      student: {
        username: '',
        password: ''
      },
      teacher: {
        username: '',
        password: ''
      },
      value1: 0,
      handlerIcon: 'fa fa-angle-double-right',
      successIcon: 'fa fa-check',
      background: '#cccccc',
      progressBarBg: '#4b0',
      completedBg: '#66cc66',
      handlerBg: '#fff',
      text: '拖动滑块验证',
      successText: '验证成功',
      width: 190,
      height: 30,
      textSize: '14px'
    }
  },
  components: {
    dragVerify
  },
  methods: {
    stu_enter: function () {
      if (this.student.username === '' || this.student.password === '') {
        this.$message.warning('输入的数据不完整')
      } else if (
        !this.$refs.Verify.isPassing
      ) {
        this.$message.warning('请拖动滑块完成验证')
      } else if (
        this.student.username === 'stu' &&
        this.student.password === '123'
      ) {
        this.$router.push('/mainPage')
      } else {
        this.$message.error('用户名或密码错误')
        this.student.password = ''
      }
    },
    tea_enter: function () {
      if (this.teacher.username === '' || this.teacher.password === '') {
        this.$message.warning('输入的数据不完整')
      } else if (
        !this.$refs.Verify2.isPassing
      ) {
        this.$message.warning('请拖动滑块完成验证')
      } else if (
        this.teacher.username === 'tea' &&
        this.teacher.password === '123'
      ) {
        this.$router.push('/mainPage')
      } else {
        this.$message.error('用户名或密码错误')
        this.teacher.password = ''
      }
    }
  }
}
</script>
<style lang="scss">
// scss预处理

$color: white;
$mycolor: rgb(4, 174, 132);
$btn_color: rgb(52, 143, 120);

//页面整体
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../assets/login.png");
  background-size: 100% 100%;
  .title {
    position: absolute;
    left: 10%;
    top: 10%;
    font-size: 25px;
    color: white;
  }
  // 登录框整体布局
  .login_box {
    width: 355px;
    height: 400px;
    background-color: $color;
    position: absolute;
    top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);

    //学生、教师tabs标题
    .el-tabs__item.is-active {
      color: $mycolor;
    }

    .el-tabs__item:hover {
      color: $mycolor;
      cursor: pointer;
    }
    .el-tabs__active-bar.is-top {
      width: 100px;
      background-color: $mycolor;
    }
    //账号密码输入框
    .el-input__inner {
      position: relative;
      border-radius: 0px;
      padding-left: 40px;
    }
    .el-icon-user {
      position: absolute;
      color: $mycolor;
      font-size: 30px;
      left: 5px;
      top: 22px;
    }
    .el-icon-unlock {
      position: absolute;
      color: $mycolor;
      font-size: 30px;
      left: 5px;
      top: 84px;
    }
    .el-input__inner:focus {
      border-color: $mycolor;
      outline: 0;
    }
    .el-input__inner {
      border-width: 0 0 2px 0;
    }
    .input {
      position: relative;
      margin-top: 20px;
    }
    //滑动验证
    .drag_verify {
      margin: 28px auto 33px;
    }
    //登录按钮
    .el-button--success:hover,
    .el-button--success:focus {
      background: $btn_color;
      border-color: $btn_color;
      color: #fff;
    }
    .enter_button {
      background-color: $mycolor;
      width: 100%;
    }
  }
  .information {
    position: relative;
    color: gray;
    top: 90%;
  }
}
</style>
