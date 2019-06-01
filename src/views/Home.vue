<template>
  <div class="home-wrapper">
    <div class="filters">
      <span
        @click="saveFilter('UnPrecioFare')"
        :style="[selectedComponent == 'UnPrecioFare' ? {'color':'#000000'} : {'color':'#ffffff'}]"
      >Un Precio</span>
      <span
        @click="saveFilter('DosPreciosFare')"
        :style="[selectedComponent == 'DosPreciosFare' ? {'color':'#000000'} : {'color':'#ffffff'}]"
      >Dos Precios</span>
      <span
        @click="saveFilter('MultipleFare')"
        :style="[selectedComponent == 'MultipleFare' ? {'color':'#000000'} : {'color':'#ffffff'}]"
      >Multiples Precios</span>
    </div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import UnPrecioFare from "@/components/UnPrecioFare.vue";
import DosPreciosFare from "@/components/DosPreciosFare.vue";
import MultipleFare from "@/components/MultipleFare.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedComponent: "UnPrecioFare"
    };
  },
  methods: {
    saveFilter(filter) {
      this.selectedComponent = filter;
      this.$store.commit("saveSelectedFilter", filter);
    }
  },
  components: {
    UnPrecioFare,
    DosPreciosFare,
    MultipleFare
  }
};
</script>

<style scoped>
.filters {
  height: 9.3em;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, #f4b005, #e6027c);
}

.filters span {
  margin: 3em;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  color: white;
}

@media (max-width: 768px) {
  .filters span {
    font-size: 0.8em;
  }
}
</style>

