import { createApp } from 'vue';
import App from './App.vue'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from "vuetify/labs/VDataTable";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
  
  const vuetify =  createVuetify({
    components: {
      VDataTable
    },
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
  })


createApp(App).use(vuetify).mount('#app');
