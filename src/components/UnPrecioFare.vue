<template>
  <div class="unprecio-wrapper">
    <highcharts :options="chartOptions" class="chart"></highcharts>
    {{prices.unprecio}}
  </div>
</template>

<script>
import { options } from "./chartOptions/options.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      chartOptions: options
    };
  },
  computed: {
    ...mapGetters(["prices"])
  },
  created() {
    let graph_data = {
      name: "Price(€)",
      data: [["0-23h", 0.123]]
    };

    let colors = "#b5aeae";
    this.chartOptions.plotOptions.pie.colors = [];
    this.chartOptions.series = [];
    this.chartOptions.series.push(graph_data);
    this.chartOptions.plotOptions.pie.colors.push(colors);
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
