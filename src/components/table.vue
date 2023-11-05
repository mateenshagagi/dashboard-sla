<template>
  <v-app>
    <v-card>
        <v-card-title>
          Intel Cores
          <v-spacer></v-spacer>
          <v-text-field 
            v-model="search" 
            append-icon="mdi-magnify" 
            label="Search" 
            single-line 
            hide-details>
          </v-text-field>
          <v-switch @change="toggleTheme"  :label="`toggle ${switchLabel} mode`"></v-switch>

        </v-card-title>
        
      <v-data-table 
        v-model:items-per-page="itemsPerPage" 
        :headers="headers" 
        :items="data"
        class="elevation-1 secondary"
        :search="search"
        >
        <template v-slot:item.Status="{ item }">
          <v-chip :color="getStyle(item.Status)">{{ item.Status }}</v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import JSONdata from "../assets/data.json";
import { useTheme } from "vuetify/lib/framework.mjs";

export default {
  data() {
    return {
      theme : useTheme(),
      darkMode: true,
      search: '',
      itemsPerPage: 100,
      headers: [
        { title: 'Product', align: 'start', sortable: false, key: 'Product' },
        { title: 'Status', align: 'end', key: 'Status' },
        { title: 'Cores', align: 'end', key: 'Cores' },
        { title: 'Lithography', align: 'end', key: 'Lithography' },
        { title: 'Threads', align: 'end', key: 'Threads'},
        { title: 'Base Freq', align: 'end', key: 'Base_Freq' },
        { title: 'Max Turbo Freq', align: 'end', key: 'Max_Turbo_Freq' },
      ],
      data: JSONdata,
    };
  },
  methods: {
    getStyle(Status) {
      switch (Status) {
        case "Launched": return 'green font-weight-bold';
        case "Launched (with IPU)": return 'blue font-weight-bold';
        case "Announced": return 'yellow font-weight-bold';
        case "Discontinued": return 'red font-weight-bold';
        default: ''
      }
    },
    toggleTheme () {
      this.theme.global.name = this.darkMode ? "light" : "dark";
      this.darkMode = !this.darkMode;
    }
  },
  computed: {
    switchLabel: function () {
        return this.darkMode ? 'light' : 'dark';
    }
  }
};
</script>