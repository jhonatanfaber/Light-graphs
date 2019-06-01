<template>
  <div class="navbar-wrapper">
    <div class="logo">
      <i class="fas fa-lightbulb fa-3x"></i>
      <span id="logo-text">HLSolutions</span>
    </div>
  </div>
</template>


<style scoped>
.navbar-wrapper {
  height: 6.25em;
  display: flex;
  align-items: center;
}

.logo {
  margin-left: 2.5em;
}

.fa-lightbulb {
  color: #e6027c;
}

#logo-text {
  font-weight: bold;
}

@media (max-width: 768px) {
  .navbar-wrapper {
    font-size: 11px;
  }
}
</style>
