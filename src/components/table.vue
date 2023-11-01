<template>
  <div>
    <!-- Hide By status Bar -->
    <HideStatusBar
      :productDataBystatus="productDataBystatus"
      :hidestatus="hidestatus"
      @update:hidestatus="hidestatus = $event"
    />

    <!-- Main Table Design -->
    <ProductTable
      :productDataBystatus="productDataBystatus"
      :wwInfo="wwInfo"
    />
  </div>
</template>

<script>
import HideStatusBar from './HideStatusBar.vue';
import ProductTable from './ProductTable.vue';

import data from "../assets/data.json";

export default {
  components: {
    HideStatusBar,
    ProductTable,
  },
  data: function () {
    return {
      hidestatus: [],
      UIData: data,
      wwInfo: {},
    };
  },
  computed: {
    productDataBystatus() {
      let tmp = {};
      let data = this.UIData;
      let statusSet = new Set();

      data.forEach((element) => {
        let status = element.Status;
        let cores = element.Cores;

        // push status to set
        statusSet.add(status);

        if(this.hidestatus !== null && Array.isArray(this.hidestatus)){
          if (this.hidestatus.includes(status)) return; // Hide by status
        }
        if (!tmp[status]) tmp[status] = {};
        if (!tmp[status][cores]) tmp[status][cores] = [];

        tmp[status][cores].push(element);
      });

      // sort status in order
      const strings = new Set(statusSet);
      const sortedStringsArray = [...strings].sort();
      statusSet = new Set(sortedStringsArray);

      return {
        status: [...statusSet],
        data: tmp,
      };
    },
  },
  mounted() {
    this.wwInfo = this.getWWFromDate();
  },
  methods: {
    getWWFromDate(date = null) {
      let currentDate = date || new Date();
      let startDate = new Date(currentDate.getFullYear(), 0, 1);
      let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

      return {
        year: currentDate.getFullYear(),
        workweek: Math.ceil(days / 7),
        numofday: currentDate.getDay(),
      };
    },
  },
};
</script>

<style scoped>
@import './table.css';
/* Import the styles from table.css */
</style>
  