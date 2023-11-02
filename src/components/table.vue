<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="data"
    item-value="name"
    class="elevation-1 secondary"
  ></v-data-table>
</template>

<script>
import JSONdata from "../assets/data.json";

  export default {

    mounted(){
      //process data here
      console.log("mounted");
    },
    
    data () {
      console.log("data");
      return {
        itemsPerPage: 10,
        headers: [
          {
            title: 'Product',
            align: 'start',
            sortable: false,
            key: 'Product',
          },
          { title: 'Status', align: 'end', key: 'Status' },
          { title: 'Cores', align: 'end', key: 'Cores' },
          { title: 'Lithography', align: 'end', key: 'Lithography' },
          { title: 'Threads', align: 'end', key: 'Threads' },
          { title: 'Base Freq', align: 'end', key: 'Base_Freq' },
          { title: 'Max Turbo Freq', align: 'end', key: 'Max_Turbo_Freq' },
        ],
        data: JSONdata
      }
    },
  }
</script>