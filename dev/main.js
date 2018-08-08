// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { UAjaxBar } from 'uloc'
import { createApp } from './app'

const bar = new Vue(UAjaxBar).$mount()
document.body.appendChild(bar.$el)

const { app, router } = createApp()

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    bar.start()
    next()
  })
  router.afterEach((to, from, next) => {
    bar.stop()
  })
  app.$mount('#app')
})
