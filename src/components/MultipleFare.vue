<template>
  <div class="multiple-wrapper">
    <highcharts :options="chartOptions" class="chart"></highcharts>
  </div>
</template>

<script>
import { options } from "./chartOptions/multiple.js";

export default {
  data() {
    return {
      chartOptions: options
    };
  }
};
</script>

<style scoped>
.chart {
  margin-top: 50px;
}

@media (max-width: 768px) {
  .chart {
    margin-top: 0;
  }
}
</style>
