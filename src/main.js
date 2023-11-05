import { createApp } from 'vue';
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from "vuetify/labs/VDataTable";
import { VCardTitle, VSpacer, VTextField, VChip, VCard, VApp, VSwitch } from 'vuetify/lib/components/index.mjs';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

  
  const vuetify =  createVuetify({
    components: {
      VDataTable,
      VChip,
      VCardTitle,
      VSpacer,
      VTextField,
      VCard,
      VApp,
      VSwitch,
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: true,
        light: false,
      }
    }
  })


createApp(App).use(vuetify).mount('#app');
