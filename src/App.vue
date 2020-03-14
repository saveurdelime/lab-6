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

  data: () => ({
    //
  }),
};
</script>
