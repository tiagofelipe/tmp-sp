import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import beforeEach from './beforeEach'

Vue.use(VueRouter)

export function createRouter () {
  return new VueRouter({
    // mode: 'history',
    routes
  })
}
