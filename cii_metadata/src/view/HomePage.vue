<template>
  <div class="HomePage">
    <Header></Header>
    <div class="Body">
      <Index></Index>
      <Table></Table>
      <Page
      v-if="page.total!==0"
      class="Page"
      :page="page"
    ></Page>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Index from '@/components/H-Index.vue'
import Table from '@/components/H-Table.vue'
import Page from '@/components/Page.vue'
export default {
  name: 'HomePage',
  data () {
    return {
      page: {
        total: 20,
        current_page: 1,
        page_size: 8,
        total_page: 5
      }
    }
  },
  components: {
    Header,
    Index,
    Table,
    Page
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang='scss'>
.HomePage {
  width: 100%;
  .Body{
    margin: 1% auto;
    width: 1500px;
    height: 800px;
    border: 2px rgb(194, 179, 179) solid;
    border-radius: 20px;
    .Page {
    position: relative;
    top:30px;
    left: 100px;
  }
  }
}
</style>
