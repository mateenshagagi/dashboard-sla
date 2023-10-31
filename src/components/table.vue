<template>
  <div>
    <!-- Hide By status Bar -->
    <div class="hideBar">
      <label class="hideLabel"> Hide: </label>
      <div class="checkbox">
        <!-- All status -->
        <input
          :id="productDataBystatus.status"
          type="checkbox"
          class="styled"
          :value="productDataBystatus.status"
          @click="hideShowALLstatus"
          v-model="hidestatus"
        />
        <label :for="productDataBystatus.status">All statuses</label>

        <!-- Dynamic status -->
        <div v-for="status in productDataBystatus.status" :key="`${status}`">
          <input
            :id="`${status}`"
            type="checkbox"
            class="styled"
            :value="status"
            v-model="hidestatus"
          />
          <label :for="`${status}`">
            {{ status }}
          </label>
        </div>
      </div>
    </div>

    <!-- Main Table Design -->
    <table>
      <thead>
        <tr>
          <td :colspan="12">Dashboard SLA</td>
        </tr>
        <tr>
          <th colspan="3">{{ wwData }}</th>
          <th colspan="8">Product Info</th>
        </tr>
        <tr>
          <th>Status</th>
          <th>Cores</th>
          <th class="width1">Product</th>
          <th class="width1">Lithography</th>
          <th>Threads</th>
          <th>Base Freq</th>
          <th>Max Turbo Freq</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(data, status, index) in productDataBystatus.data">
          <!-- status -->
          <tr>
            <td class="width1" :rowspan="calstatusRowspan(data)">
              {{ status }}
            </td>
          </tr>

          <template v-for="cores in Object.keys(data)">
            <!-- cores -->
            <tr>
              <td class="width1" :rowspan="Object.keys(data[cores]).length + 1">
                {{ cores }}
              </td>
            </tr>

            <tr v-for="(v, k) in data[cores]">
              <!-- product -->
              <td class="productColumn">{{ v.Product }}</td>

              <!-- Lithography -->
              <td>{{ v.Lithography }}</td>

              <!-- Threads -->
              <td>
                <div class="innerCells">
                  <input :value="v.Threads" :disabled="true" type="text" />
                </div>
              </td>

              <!-- Base Freq -->
              <td>
                <div class="innerCells">
                  <input :value="v.Base_Freq" :disabled="true" type="text" />
                </div>
              </td>

              <!-- Max Turbo Freq -->
              <td>
                <div class="innerCells">
                  <input :value="v.Max_Turbo_Freq" type="text" :disabled="true" />
                </div>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
    <!-- End of Table Design -->
  </div>
</template>


<script>
import Table from './table.js'; // Import the JavaScript code

export default Table;
</script>


<style scoped>
@import './table.css'; /* Import the styles from table.css */
</style>