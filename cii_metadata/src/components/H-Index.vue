<template>
  <div class="Index">
        <el-form :inline="true" :model="datalist">
          <el-form-item label="系统主数据:">
            <el-select v-model="datalist.region" placeholder="类别">
              <el-option v-for="(i,key) in datalist.detail" :label="i.name" :value="i.value" v-bind:key="key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">确定</el-button>
          </el-form-item>
        </el-form>
      <div class="Intro" v-if="curentChoose.isChoose">当前选择的系统主数据类别是"<span style="color:rgb(18, 102, 81);font-weight:bold;">{{curentChoose.name}}</span>"</div>
      <div class="Intro" v-if="!curentChoose.isChoose"><span style="color:#008B8B;font-weight:bold;">请在左侧选择系统主数据类别</span></div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      // 下拉选框和得到的选择和数据
      datalist: {
        region: '',
        detail: [
          {
            name: '区域一',
            value: 1
          },
          {
            name: '区域2',
            value: 2
          }
        ]
      },
      // 当前选择的区域
      curentChoose: {
        isChoose: false,
        name: '',
        id: ''
      }

    }
  },
  methods: {
    search: function () {
      if (this.datalist.region !== '') {
        this.$message(`点击了搜索 当前选择区域序列是 ${this.datalist.region}`)
        this.curentChoose.isChoose = true
        this.curentChoose.name = this.datalist.detail[this.datalist.region - 1].name
        this.curentChoose.id = this.datalist.detail[this.datalist.region - 1].value
      } else {
        this.$message.error('当前未选择区域，请重新选择')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Index {
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    text-align: left;
    height: 60px;
    margin-top: 1.5%;
    margin-left: 3%;
    width: 94%;
    border-bottom: 1px solid rgb(209, 205, 194);
    font-size: 18px;
    .Intro{
      position: relative;
      top:-10px;
      font-size: 20px;
    }

}
/deep/.el-select .el-input__inner:focus {
    border-color: rgb(11, 190, 146);
}
/deep/.el-button--primary {
    color: #FFF;
    background-color: rgba(3, 174, 132, 1);
    border-color: rgb(30, 133, 107);
}
/deep/.el-button--primary:hover {
    background-color: rgb(39, 131, 108);
}
/deep/.el-select-dropdown__item.selected {
    color: rgba(3, 174, 132, 1);
    font-weight: 700;
}
/deep/.el-select .el-input.is-focus .el-input__inner {
    border-color: rgba(3, 174, 132, 1);
}
</style>
