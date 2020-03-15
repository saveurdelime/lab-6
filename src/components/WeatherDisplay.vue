<template>
    <div>
        <v-container class="display">
            <DisplayHeader :city="weatherForecast.city"/>
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
    import DisplayHeader from "./DisplayHeader";

    export default {
        name: "WeatherDisplay",
        components: {
            WeatherCard,
            DisplayHeader,
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
    .display {
        background: lightskyblue;
        margin-top: 20px;
    }
    .card-container {
        display: flex;
        flex-wrap: nowrap;
    }
</style>
