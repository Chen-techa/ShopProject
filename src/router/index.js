import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/views/Home.vue' //主页
import login from '../components/views/Login.vue' //登录
import sginup from '../components/views/SginUp.vue' //注册
import classification from '../components/views/Classification.vue'  //分类
import car from '../components/views/Car.vue'  //购物车

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/login',
    component: login
  }, 
  {
    path:'/sginup',
    component:sginup
  },
  {
    path:'/classification',
    component:classification
  },
  {
    path:'/car',
    component:car
  }
]

const router = new VueRouter({
  routes,
})

export default router
