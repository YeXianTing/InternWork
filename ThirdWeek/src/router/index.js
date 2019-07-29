import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/view/enter.vue'
import mainPage from '@/view/mainPage.vue'
import CompetitionTeacherHomepage from '@/view/CompetitionTeacherHomepage'
import AdminTeacherManagement from '@/view/AdminTeacherManagement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/CompetitionTeacherHomepage',
      name: 'CompetitionTeacherHomepage',
      component: CompetitionTeacherHomepage
    },
    {
      path: '/AdminTeacherManagement',
      name: 'AdminTeacherManagement',
      component: AdminTeacherManagement
    },
    {
      path: '*',
      redirect: '/enter'
    },
  ]
})
