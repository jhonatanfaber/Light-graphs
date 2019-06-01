<template>
  <div class="multiple-wrapper">
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
      data: [
        ["0-7h", 0.055],
        ["8-12h", 0.082],
        ["13-16h", 0.19],
        ["17-20h", 0.078],
        ["21-23h", 0.045]
      ]
    };
    let cheaperColor = "#95ff5f";
    let color2 = "#287113";
    let color3 = "#f5f913";
    let color4 = "#f3a421";
    let moreExpensiveColor = "#d41212";

    this.chartOptions.plotOptions.pie.colors = [];
    this.chartOptions.series = [];

    this.chartOptions.series.push(graph_data);
    this.chartOptions.plotOptions.pie.colors = [];
    this.chartOptions.plotOptions.pie.colors.push(color2);
    this.chartOptions.plotOptions.pie.colors.push(color4);
    this.chartOptions.plotOptions.pie.colors.push(moreExpensiveColor);
    this.chartOptions.plotOptions.pie.colors.push(color3);
    this.chartOptions.plotOptions.pie.colors.push(cheaperColor);
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
