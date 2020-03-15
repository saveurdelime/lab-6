<template>
    <v-card class="card">
        <v-col  cols="12"  >
            <v-row >
                <v-col >
                    <span class="day-of-the-week">{{weather.dayOfTheWeek}}</span>
                </v-col>
                <v-col>
                    <span ><v-img class="icon" :src='weather.icon'></v-img></span>
                </v-col>
            </v-row>
        </v-col>


        <v-col >
            <span style="font-size: 35px;">Max : </span><span class="max-temp">{{weather.max_temp}}</span>
        </v-col>
        <v-col>
            Min : <span class="min-temp">{{weather.min_temp}}</span>
        </v-col>
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
    .max-temp {
        color: #072cd2;
        font-family:Gill Sans, sans-serif ;
        font-size: 35px;
    }

    .min-temp {
        color: #0070ff;
        font-family:Gill Sans, sans-serif ;
        font-size: 15px;
    }
    .day-of-the-week{
        font-family:Gill Sans, sans-serif ;
        font-size: 15px;
    }
    .card{
        min-width: 150px;
        border-radius: 10px
    }
    .icon{
        height: 75px;
        width: 75px
    }
</style>
