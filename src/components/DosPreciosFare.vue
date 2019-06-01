<template>
  <div class="dosprecios-wrapper">
    <highcharts :options="chartOptions" class="chart"></highcharts>
  </div>
</template>

<script>
import { options } from "./chartOptions/options.js";

export default {
  data() {
    return {
      chartOptions: options
    };
  },
  created() {
    let graph_data = {
      name: "Price(€)",
      data: [["0-13h", 0.079], ["14-23h", 0.155]]
    };
    let cheaperColor = "#95ff5f";
    let moreExpensiveColor = "#287113";

    this.chartOptions.plotOptions.pie.colors = [];
    this.chartOptions.series = [];
    this.chartOptions.series.push(graph_data);
    this.chartOptions.plotOptions.pie.colors.push(cheaperColor);
    this.chartOptions.plotOptions.pie.colors.push(moreExpensiveColor);
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

