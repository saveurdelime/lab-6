<template>
    <div>
        <v-container class="display">
            <template>
                <div class="display-header" dark flat>
                    <h1 class='weatherJs'>
                        WEATHER.JS
                        <img class="icon" src="https://image.flaticon.com/icons/svg/565/565504.svg">
                    </h1>
                    <h2> Météo de la ville de {{weatherForecast.city}}</h2>
                </div>
            </template>
            <v-col cols="12">
                <v-row class="card-container">
                    <v-col v-bind:key="index" v-for="(dailyForecast,index) in weatherForecast.data">
                        <weather-card :weather="dailyForecast"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>

<script>
    import WeatherCard from "./WeatherCard";
    import getWeather from "../utils/getWeather";

    export default {
        name: "WeatherDisplay",
        components: {
            WeatherCard
        }, data: () => ({
            weatherForecast: {
                city: "",
                state: "",
                data: []
            },
            compass: "https://image.flaticon.com/icons/svg/565/565504.svg"
        }),
        async created() {
            this.weatherForecast = await getWeather(this.weatherForecast);
        }
    }
</script>

<style scoped>
    .weatherJs {
        color: aliceblue;
        font-family: sans-serif;
    }
    .display {
        background: lightskyblue;
        margin-top: 20px;
    }

    .display-header {
        border-radius: 10px;
        padding: 20px
    }

    .card-container {
        display: flex;
        flex-wrap: nowrap;
    }

    .icon {
        height: 35px;
        width: 35px
    }
</style>
