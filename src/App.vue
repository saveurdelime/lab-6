<template>
 <weather-display></weather-display>
</template>

<script>

import WeatherDisplay from "./components/WeatherDisplay";

export default {
  name: 'App',
  components: {
    WeatherDisplay
  },
};
</script>
<style scoped>
 body{
  min-width: 450px;
 }
</style>
