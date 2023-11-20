import Main from './views/Main/index.vue'
import { createRouter, createWebHistory } from 'vue-router'
//  import store from '@/store/index'
//  import { computed } from 'vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { title: 'Main' },
    redirect: '/root',
    children: [
      {
        path: '/root',
        name: 'Home',
        meta: { title: 'Home'  },
        component: () => import('./views/Home/Home.vue')
      },
      {
        path: '/realbet',
        name: 'RealBet',
        meta: { title: 'Real Bet'  },
        component: () => import('./views/RealBet/index.vue')
      },
      {
        path: '/sport',
        name: 'Sports',
        meta: { title: 'Sports'  },
        component: () => import('./views/Sport/index.vue')
      },
      {
        path: '/gaming',
        name: 'Gaming',
        meta: { title: 'Gaming Section'  },
        component: () => import('./views/Gaming/index.vue')
      },
      {
        path: '/joker',
        name: 'Joker',
        meta: { title: 'Joker Section'  },
        component: () => import('./views/Joker/index.vue')
      },
      {
        path: '/concise',
        name: 'Concise',
        meta: { title: 'Concise Section'  },
        component: () => import('./views/ConciseGame/index.vue')
      },
      {
        path: '/lottery',
        name: 'Lottery',
       meta: { title: 'Lottery Section'  },
        component: () => import('./views/Lottery/index.vue')
      },
      {
        path: '/about-us',
        name: 'AboutUs',
       meta: { title: 'AboutUs Section'  },
        component: () => import('./views/AboutUs/index.vue')
      },

      {
        path: '/userCenter',
        name: 'User',
       meta: { title: 'User Section'  },
        component: () => import('./views/User/index.vue'),
        redirect: '/bankCard',
        children:[
          {
            path: '/bankCard',
            name: 'BankCard',
           meta: { title: 'User Bank Card Section'  },
            component: () => import('./views/User/BankCard/index.vue')
          },
          {
            path: '/recharge',
            name: 'Recharge',
           meta: { title: 'User Recharge Money Section'  },
            component: () => import('./views/User/Recharge/index.vue')
          },
          {
            path: '/transfer',
            name: 'Transfer',
           meta: { title: 'User Money Transfer Section'  },
            component: () => import('./views/User/Transfer/index.vue')
          },
          {
            path: '/withdraw',
            name: 'Withdraw',
           meta: { title: 'User Money Withdraw Section'  },
            component: () => import('./views/User/Withdraw/index.vue')
          },
          {
            path: '/transRecord',
            name: 'TransferRecord',
           meta: { title: 'User  TransferRecord Section'  },
            component: () => import('./views/User/TransferRecord/index.vue')
          },
          {
            path: '/betRecord',
            name: 'BetRecord',
           meta: { title: 'User  BetRecord Section'  },
            component: () => import('./views/User/BetRecord/index.vue')
          },
          {
            path: '/rebateRecord',
            name: 'RebateRecord',
           meta: { title: 'User  RebateRecord Section'  },
            component: () => import('./views/User/RebateRecord/index.vue')
          },
          {
            path: '/activityRecord',
            name: 'ActivityRecord',
           meta: { title: 'User  ActivityRecord Section'  },
            component: () => import('./views/User/ActivityRecord/index.vue')
          },
          {
            path: '/applyAgnet',
            name: 'ApplyAgent',
           meta: { title: 'User  ApplyAgent Section'  },
            component: () => import('./views/User/ApplyAgent/index.vue')
          },
          {
            path: '/center',
            name: 'UserCenter',
           meta: { title: 'UserCenter Section'  },
            component: () => import('./views/User/Center/index.vue')
          },
          {
            path: '/message',
            name: 'Message',
           meta: { title: 'Message Section'  },
            component: () => import('./views/User/Message/index.vue')
          },
          {
            path: '/welfare',
            name: 'Welfare',
           meta: { title: 'Welfare Section'  },
            component: () => import('./views/User/Welfare/index.vue')
          },
          {
            path: '/feeback',
            name: 'Feeback',
           meta: { title: 'Feeback Section'  },
            component: () => import('./views/User/Feeback/index.vue')
          },
        ]
      },
    ],

  },
  {
    path: '/register',
    name: 'Register',
   meta: { title: 'Register Section'  },
    component: () => import('./views/Auth/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
   meta: { title: 'Login Section'  },
    component: () => import('./views/Auth/Login.vue')
  },
  {
    path: '/football_blog',
    name: 'FootballNews',
   meta: { title: 'FootballNews Section'  },
    component: () => import('./views/FootballBlog/index.vue')
  },

//    { path: '/:path(.*)', component: () => import('./views/NotFound.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router