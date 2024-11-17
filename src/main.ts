import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Quasar:
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
