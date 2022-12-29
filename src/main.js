// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import router from '@/router'
import moment from 'moment'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$filters = {
    timeAgo(date) {
      return moment(date).fromNow()
    },
}
app.use(BootstrapVue3)
app.mount('#app')
