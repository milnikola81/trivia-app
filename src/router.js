import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'
import Trivia from './components/Trivia.vue'
import Chuck from './components/Chuck.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TriviaApp
    },    
    {
      path: '/trivia',
      component: Trivia
    },
    {
      path: '/chuck',
      component: Chuck
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
