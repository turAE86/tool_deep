import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

console.log('Vue app starting...')

try {
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  console.log('Vue instance created, mounting...')
  app.$mount('#app')
  console.log('Vue app mounted successfully!')
} catch (error) {
  console.error('Error mounting Vue app:', error)
}
