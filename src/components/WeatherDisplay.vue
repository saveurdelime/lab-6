<template>
    <div>
        <template >
            <v-toolbar dark flat>
                <v-toolbar-title>Météo de la ville de {{weatherForecast.city}}</v-toolbar-title>
            </v-toolbar>
        </template>
        <v-container >
            <v-col  cols="12" style="min-width: 751px">
                <v-row  style="height: 100px;">
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
    import WeatherData from "../object/WeatherData.js";
    import GET_WEATHER from "../api/weatherApi";


    function getDayOfTheWeek(fullDate) {
        let date = new Date(fullDate).getDay() +1 ;
        if (date === 7) {
            return "Dimanche"
        } else if (date === 1) {
            return "Lundi"
        } else if (date === 2) {
            return "Mardi"
        } else if (date === 3) {
            return "Mercredi"
        } else if (date === 4) {
            return "Jeudi"
        } else if (date === 5) {
            return "Vendredi"
        } else if (date === 6) {
            return "Samedi"
        }
    }
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
            forecast: undefined
        }),
        methods: {
            async getWeather() {
                let fullForecast = await GET_WEATHER();
                console.log('fullForecast')
                console.log(fullForecast)
                for (let i = 0; i < 5; i++) {
                    let dayOfTheWeek = getDayOfTheWeek(fullForecast.data[i].valid_date.toString());
                    let min = fullForecast.data[i].min_temp.toString();
                    let max = fullForecast.data[i].max_temp.toString();
                    let icon = fullForecast.data[i].weather.icon.toString();
                    let weatherData = new WeatherData(dayOfTheWeek, max, min, icon);
                    this.weatherForecast.data.push(weatherData);
                    this.weatherForecast.city = fullForecast.city_name;
                    this.weatherForecast.state = fullForecast.state_code;
                }
            }
        }, async created() {
            this.getWeather();
        }
    }

</script>

<style scoped>

</style>
