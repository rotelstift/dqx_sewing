import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Items from '@/components/layout/Items'
import Arm from '@/components/Arm'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/arm/:slug',
      component: Arm
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ]
})
