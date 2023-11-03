import { createApp } from 'vue';
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from "vuetify/labs/VDataTable";
import { VChip } from 'vuetify/lib/components/index.mjs';
import { VCardTitle } from 'vuetify/lib/components/index.mjs';
import { VSpacer } from 'vuetify/lib/components/index.mjs';
import { VTextField } from 'vuetify/lib/components/index.mjs';
import { VCard } from 'vuetify/lib/components/index.mjs';
import { VApp } from 'vuetify/lib/components/index.mjs';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
  
  const vuetify =  createVuetify({
    components: {
      VDataTable,
      VChip,
      VCardTitle,
      VSpacer,
      VTextField,
      VCard,
      VApp
    },
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
  })


createApp(App).use(vuetify).mount('#app');
