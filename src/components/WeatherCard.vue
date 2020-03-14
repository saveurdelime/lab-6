<template>
<v-card style="min-width: 150px">
    <v-card-title>
        {{weather.dayOfTheWeek}}
    </v-card-title>
    <v-card-text>
        {{weather.max_temp}}
        {{weather.min_temp}}
    </v-card-text>
</v-card>
</template>

<script>

    import weatherData from "../object/WeatherData.js";

    export default {
        name: "WeatherCard",
        props: {
            weather: weatherData
        },
    }
</script>

<style scoped>

</style>
