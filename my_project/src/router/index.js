import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/components/enter'
import mainPage from '@/components/mainPage'
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
      path: '*',
      redirect: '/enter'
    }
  ]
})
