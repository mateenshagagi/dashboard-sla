<template>
    <div class="hideBar">
      <label class="hideLabel"> Hide: </label>
      <div class="checkbox">
        <!-- All status -->
        <input
          :id="productDataBystatus.status"
          type="checkbox"
          class="styled"
          :value="productDataBystatus.status"
          @change="hideShowALLstatus"
          :modelValue="hidestatus"
          @update:modelValue="hidestatus = $event"
        />
        <label :for="productDataBystatus.status">All statuses</label>
  
        <!-- Dynamic status -->
        <div v-for="status in productDataBystatus.status" :key="status">
          <input
            :id="status"
            type="checkbox"
            class="styled"
            :value="status"
            :modelValue="hidestatus"
            @update:modelValue="hidestatus = $event"
            @click="updateStatus(status)"
          />
          <label :for="status">{{ status }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      productDataBystatus: Object,
      hidestatus: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      hideShowALLstatus() {
        if (this.allCheck) {
          this.$emit('update:hidestatus', []);
          this.allCheck = false;
        } else {
          this.$emit('update:hidestatus', this.productDataBystatus.status);
          this.allCheck = true;
        }
      },
      updateStatus(status) {
        console.log(status);
        const index = this.hidestatus.indexOf(status);
        if (index === -1) {
          this.hidestatus.push(status);
        } else {
          this.hidestatus.splice(index, 1);
        }
        this.allCheck = false;
        this.$emit('update:hidestatus', this.hidestatus);
        
      },
    },
    data() {
      return {
        allCheck: false,
      };
    },
  };
  </script>
  
<style scoped>
@import './table.css';
/* Import the styles from table.css */
</style>