<template>
  <div class="Edit">
    <Header></Header>
    <div class="Body">
        <Index></Index>
        <Table></Table>
      <Page class="Page" :page="page"></Page>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Index from '@/components/E-Index.vue'
import Table from '@/components/E-Table.vue'
import Page from '@/components/Page.vue'
export default {
  name: 'Edit',
  data () {
    return {
      page: {
        total: 50,
        current_page: 3,
        page_size: 8,
        total_page: 7
      }
    }
  },
  components: {
    Header,
    Page,
    Index,
    Table
  }
}
</script>

<style lang="scss" scoped>
.Edit {
  width: 100%;
  .Body {
    margin: 1% auto;
    width: 1500px;
    height: 800px;
    border: 2px rgb(194, 179, 179) solid;
    border-radius: 20px;
    .Page {
      position: relative;
      top: 30px;
      left: 100px;
    }
  }
}
</style>
