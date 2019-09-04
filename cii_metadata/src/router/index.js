import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/HomePage'
import Edit from '@/view/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '*',
      redirect: '/HomePage'
    }
  ]
})
