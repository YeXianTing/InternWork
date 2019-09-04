<template>
  <div class="Table">
    <el-table :data="tableData" stripe style="width: 100%" max-height="650">
      <el-table-column prop="ID" label="属性规格ID" width="170" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" width="170" align="center"></el-table-column>
      <el-table-column prop="value" label="属性值" width="200" align="center"></el-table-column>
      <el-table-column label="状态" width="150" align="center">
        <template slot-scope="scope">
          <el-switch
            class="switch"
            v-model="scope.row.status"
            active-color="#03AE84"
            inactive-color="#CCCCCC"
            active-text="开"
            inactive-text="关"
            @change="changeStatus($event,scope.$index,scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="200" align="center"></el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="200"
        align="center"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column label="操作" width="230" align="center">
        <template slot-scope="scope">
          <el-button
            type="warning"
            class="tableInput"
            @click="ClickModify(scope.$index,scope.row)"
          >修改</el-button>
          <el-dialog title="修改属性规格" :visible.sync="ModifyFormVisible" width="30%">
            <el-form :model="Modifyform" :rules="Modifyrules">
              <el-form-item
                label="属性名"
                :label-width="ModifyformLabelWidth"
                class="DialogInput"
                prop="name"
              >
                <el-input v-model="Modifyform.name"></el-input>
              </el-form-item>
              <el-form-item
                label="属性值"
                :label-width="ModifyformLabelWidth"
                class="DialogInput"
                prop="value"
              >
                <el-input v-model="Modifyform.value"></el-input>
              </el-form-item>
              <el-form-item label="备注" :label-width="ModifyformLabelWidth" class="DialogInput">
                <el-input v-model="Modifyform.remark"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="Modify">确 定</el-button>
              <el-button @click="ModifyFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>
          <el-button type="danger" class="tableInput" @click="DeleteFormVisible = true">删除</el-button>
          <el-dialog
            title="提示"
            :visible.sync="DeleteFormVisible"
            width="30%"
          >
            <span>是否删除数据:{{scope.row.name}}</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="Delete(scope.row)">确 定</el-button>
              <el-button @click="DeleteFormVisible = false">取 消</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      tableData: [
        {
          ID: 1,
          name: 'sa',
          value: 'utf-8',
          status: true,
          updateTime: '20190808',
          remark: '我是备注'
        },
        {
          ID: 2,
          name: 'dsf',
          value: '132',
          status: 0,
          updateTime: '20190809',
          remark: '我是备注111'
        },
        {
          ID: 3,
          name: 'qf',
          value: 'das',
          status: true,
          updateTime: '20190808',
          remark: '我是备注333333'
        },
        {
          ID: 4,
          name: 'er',
          value: '122',
          status: true,
          updateTime: '20190808',
          remark: '我是备注44'
        },
        {
          ID: 5,
          name: 'lk',
          value: 'eee',
          status: '1',
          updateTime: '20190800',
          remark: '我是备注555'
        },
        {
          ID: 6,
          name: 'bb',
          value: '998',
          status: true,
          updateTime: '20190608',
          remark: '我是备注666'
        },
        {
          ID: 7,
          name: '对2',
          value: '222',
          status: '1',
          updateTime: '20190008',
          remark:
            '我是备注77给对方付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付7'
        },
        {
          ID: 8,
          name: 'tt',
          value: '323',
          status: true,
          updateTime: '20190808',
          remark: '我是备注88888'
        }
      ],
      ModifyFormVisible: false,
      Modifyform: {
        name: '',
        value: '',
        remark: '',
        desc: '',
        ID: ''
      },
      ModifyformLabelWidth: '70px',
      Modifyrules: {
        name: [{ required: true, message: '请输入属性名称', trigger: 'blur' }],
        value: [{ required: true, message: '请输入属性值', trigger: 'blur' }]
      },
      DeleteFormVisible: false
    }
  },
  methods: {
    edit: function (index, row) {
      // alert(`点击配置按钮，当前索引：${index} ,名称：${row.name}`)
      this.$router.push({
        path: '/Edit',
        query: { id: row.ID, name: row.name }
      })
    },
    changeStatus: function ($event, index, row) {
      // console.log($event)
      //   var reflect
      //   if ($event === true) {
      //     reflect = false
      //   } else {
      //     reflect = true
      //   }
      //   this.$message.error('拒绝修改')
      //   console.log(index)
      //   console.log(row.name)
      //   this.tableData[index].status = reflect
    },
    ClickModify: function (index, row) {
      this.Modifyform.name = row.name
      this.Modifyform.value = row.value
      this.Modifyform.remark = row.remark
      this.Modifyform.ID = row.ID
      this.ModifyFormVisible = true
    },
    Modify: function () {
      if (this.Modifyform.name && this.Modifyform.value !== '') {
        this.$message('修改成功')
        this.ModifyFormVisible = false
        this.Modifyform.name = ''
        this.Modifyform.value = ''
        this.Modifyform.remark = ''
      } else {
        this.$message.error('输入的数据不完整')
      }
    },
    Delete: function (row) {
      this.DeleteFormVisible = false
      this.$message('点击了确认删除')
    }
  }
}
</script>

<style lang="scss" scoped>
.Table {
  font-size: 20px;
  color: black;
  margin: 20px 80px;
}
/deep/.el-table th > .cell {
  color: #000;
  font-size: 17px;
}
/deep/.el-table .cell {
  color: rgb(5, 5, 5);
  font-size: 15px;
}
/deep/.el-table th.is-leaf {
  background-color: #cde4d3;
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
  left: 0px;
}

/deep/ .el-switch__label * {
  font-size: 13px;
}

/deep/ .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 18px;
    word-break: break-all;
}
</style>
