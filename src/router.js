import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AboutPage from './views/AboutPage.vue'
import LoginPage from './views/LoginPage.vue'
import MainPage from './views/MainPage.vue'
import Mantra from './components/mainpage/Mantra.vue'
import Kidung from './components/mainpage/Kidung.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/main',
      component: MainPage,
      children:[
        {
          path: 'mantra',
          component: Mantra
        },
        {
          path: 'kidung',
          component: Kidung
        }
      ]
    },
  ]
})
