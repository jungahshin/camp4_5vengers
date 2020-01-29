import Vue from 'vue'
import Router from 'vue-router'

import SignInRoutes from './signIn'
import SignUpRoutes from './signUp'
import HomeRoutes from './home'
import RoomRoutes from './room'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    SignInRoutes,
    SignUpRoutes,
    HomeRoutes,
    RoomRoutes
  ]
})
