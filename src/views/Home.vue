<template>
  <div class="home-wrapper">
    <div class="filters">
      <span @click="selectedComponent='UnPrecioFare'">Un Precio</span>
      <span @click="selectedComponent='DosPreciosFare'">Dos Precios</span>
      <span @click="selectedComponent='MultipleFare'">Multiples Precios</span>
    </div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import UnPrecioFare from "@/components/UnPrecioFare.vue";
import DosPreciosFare from "@/components/DosPreciosFare.vue";
import MultipleFare from "@/components/MultipleFare.vue";

export default {
  data() {
    return {
      selectedComponent: "UnPrecioFare"
    };
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

