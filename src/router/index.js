import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home'
import SignIn from '@/page/SignIn'
import SignUp from '@/page/SignUp'
import Daily from '@/page/Daily'
import JoinUs from '@/page/JoinUs'
import Activity from '@/page/Activity'
import AboutUs from '@/page/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Content: home
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      components: {
        Content: SignIn
      }
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      components: {
        Content: SignUp
      }
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      components: {
        Content: AboutUs
      }
    },
    {
      path: '/JoinUs',
      name: 'JoinUs',
      components: {
        Content: JoinUs
      }
    },
    {
      path: '/Activity',
      name: 'Activity',
      components: {
        Content: Activity
      }
    },
    {
      path: '/Daily',
      name: 'Daily',
      components: {
        Content: Daily
      }
    }
  ]
})
