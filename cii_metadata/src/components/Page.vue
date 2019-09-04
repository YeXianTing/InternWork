<!--翻页组件-->
<template>
  <div class="g-page">
    <div class="g-font">共<span style="color:rgba(3, 174, 132, 1)">{{page.total}}</span>条 &nbsp;每页{{page.page_size}}条 &nbsp;{{page.current_page}}/{{page.total_page}}页</div>
    <div class="page_list">
      <el-pagination
        :current-page.sync="page.current_page"
        :page-size="page.page_size"
        :hide-on-single-page=false
        :total="page.total"
        :pager-count="5"
        layout="prev, pager, next,jumper"
        @current-change='changePage()'
      >
      </el-pagination>

      <!-- current-page 当前页数，支持 .sync 修饰符
      page-sizes 每页显示个数选择器的选项设置
      hide-on-single-page 只有一页时是否隐藏
      total 总条目数
      pager-count 页码按钮的数量，当总页数超过该值时会折叠 -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'g-page',
  data () {
    return {

    }
  },
  methods: {
    changePage: function () {
      this.$message(`当前页数是${this.page.current_page}`)
    }
  },
  props: ['page']
}
</script>

<style lang="scss" scoped>
/deep/ .el-pager {
  li.active {
    background-color: rgba(3, 174, 132, 1);
    color: #fff;
    border-radius: 10%;
  }
  li:hover {
    color: rgba(3, 174, 132, 1);
  }
}
/deep/ .el-pagination button:hover {
  color: rgba(3, 174, 132, 1);
}
/deep/ .el-pagination__editor.el-input {
  width: 35px;
  .el-input__inner {
    height: 28px;
    width: 28px;
  }
}

/deep/ .el-input__inner:focus {
  border-color: rgba(3, 174, 132, 1);
  outline: 0;
}
.g-page {
  width: 1300px;
  height: 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .g-font {
    margin-top: 4px;
  }
  .page_list {
    li.active {
      color: #3d914f;
      cursor: default;
    }
  }
}
</style>
