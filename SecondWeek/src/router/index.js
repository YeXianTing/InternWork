import Vue from 'vue'
import Router from 'vue-router'
import CompetitionTeacherHomepage from '@/components/CompetitionTeacherHomepage'
import AdminTeacherManagement from '@/components/AdminTeacherManagement'

Vue.use(Router)

export default new Router({
  routes: [
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
      redirect: '/CompetitionTeacherHomepage'
    }

    
  ]
})
