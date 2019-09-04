<template>
  <div class="Index">
    <el-button type="success" class="Btn" @click="Return">返回首页</el-button>
    <div class="Title">主数据：{{this.$route.query.name}}</div>
    <el-button type="success" class="Btn" @click="AddFormVisible = true">添加属性规格</el-button>

    <el-dialog title="添加属性规格" :visible.sync="AddFormVisible" width="30%">
      <el-form :model="Addform" :rules="Addrules">
        <el-form-item label="属性名" :label-width="AddformLabelWidth" class="DialogInput"  prop="name">
          <el-input v-model="Addform.name" ></el-input>
        </el-form-item>
        <el-form-item label="属性值" :label-width="AddformLabelWidth" class="DialogInput"  prop="value">
          <el-input v-model="Addform.value"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="AddformLabelWidth" class="DialogInput">
          <el-input v-model="Addform.remark"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="Add">确 定</el-button>
        <el-button @click="AddFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      AddFormVisible: false,
      Addform: {
        name: '',
        value: '',
        remark: '',
        desc: ''
      },
      AddformLabelWidth: '70px',
      Addrules: {
        name: [
          { required: true, message: '请输入属性名称', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入属性值', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    Return: function () {
      this.$router.push({ path: '/HomePage' })
    },
    Add: function () {
      if (this.Addform.name && this.Addform.value !== '') {
        this.$message('添加成功')
        this.AddFormVisible = false
        this.Addform.name = ''
        this.Addform.value = ''
        this.Addform.remark = ''
      } else {
        this.$message.error('输入的数据不完整')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.Index {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  height: 60px;
  margin-top: 1.5%;
  margin-left: 3%;
  width: 94%;
  border-bottom: 1px solid rgb(209, 205, 194);
  font-size: 18px;
  .Title {
    position: relative;
    top: -10px;
    font-size: 20px;
    font-weight: bold;
  }
  .Btn {
    position: relative;
    top: -10px;
    background-color: rgba(3, 174, 132, 1);
  }
}

/deep/.DialogInput{
  margin: 30px 50px;
}

</style>
