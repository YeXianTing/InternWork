<template>
  <div class="Table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ID" label="主数据ID" width="220" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" width="220" align="center"></el-table-column>
      <el-table-column prop="code" label="编码" width="220" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" width="220" align="center"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="220" align="center"></el-table-column>
      <el-table-column label="
                  操作" width="220" align="center">
        <template slot-scope="scope">
          <el-button type="success" class="tableInput"  @click="edit(scope.$index, scope.row)">配置</el-button>
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
          code: 'utf-8',
          type: 'haha',
          updateTime: '20190808'
        },
        {
          ID: 2,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        },
        {
          ID: 3,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        },
        {
          ID: 4,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        },
        {
          ID: 5,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        },
        {
          ID: 6,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        },
        {
          ID: 7,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        },
        {
          ID: 8,
          name: 'dsf',
          code: 'utf-8',
          type: 'zzzz',
          updateTime: '20190909'
        }
        // {
        //   ID: 9,
        //   name: 'dsf',
        //   code: 'utf-8',
        //   type: 'zzzz',
        //   updateTime: '20190909'
        // },
        // {
        //   ID: 10,
        //   name: 'dsf',
        //   code: 'utf-8',
        //   type: 'zzzz',
        //   updateTime: '20190909'
        // }
      ]
    }
  },
  methods: {
    edit: function (index, row) {
      // alert(`点击配置按钮，当前索引：${index} ,名称：${row.name}`)
      this.$router.push({path: '/Edit', query: {id: row.ID, name: row.name}})
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
/deep/.el-table th>.cell{
    color: #000;
    font-size: 17px;
}
/deep/.el-table .cell{
    color: rgb(5, 5, 5);
    font-size: 15px;
}
/deep/.el-table th.is-leaf {
     background-color: #cde4d3
}
</style>
