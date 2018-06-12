import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import Users from '@/components/Users'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Users,meta:{title:'Users'}},
    {path: '/body',component: Body,meta:{title:'Body'}},
    {path: '/footer',component: Footer,meta:{title:'Footer'}},
  ],
  mode:'history'
})


