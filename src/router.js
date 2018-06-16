import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AboutPage from './views/AboutPage.vue'
import LoginPage from './views/LoginPage.vue'
import MainPage from './views/MainPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import Mantra from './components/mainpage/Mantra.vue'
import Kidung from './components/mainpage/Kidung.vue'

import AcceptedPage from './views/AcceptedPage.vue'
import AcceptedKidung from './components/acceptedpage/Kidung.vue'
import AcceptedMantra from './components/acceptedpage/Mantra.vue'

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
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/login',
      component: LoginPage
    }, {
      path: '/doa',
      component: AcceptedPage,
      children:[
        {
          path: 'mantra',
          component: AcceptedMantra
        },
        {
          path: 'kidung',
          component: AcceptedKidung
        }
      ]
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
