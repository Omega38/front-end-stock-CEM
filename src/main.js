// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpload, faAdd, faDeleteLeft, faDatabase, faSearch, faFileContract} from '@fortawesome/free-solid-svg-icons'
library.add(faUpload, faAdd, faDeleteLeft, faDatabase, faSearch, faFileContract)

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

