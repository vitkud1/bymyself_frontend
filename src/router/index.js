import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Helper from '../views/Helper.vue'
import House from '../views/House.vue'
import Media from '../views/Media.vue'
import Skills from '../views/Skills.vue'
import Violations from '../views/Violations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/helper',
    name: 'Helper',
    component: Helper
  },
  {
    path: '/house',
    name: 'House',
    component: House
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/violations',
    name: 'Violations',
    component: Violations
  },

]

const router = new VueRouter({
  routes
})

export default router
