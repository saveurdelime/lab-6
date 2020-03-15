<template>
    <div class="display-header" dark flat>
        <h1 class='weatherJs'>
            WEATHER.JS
            <img class="icon" src="https://image.flaticon.com/icons/svg/565/565504.svg">
        </h1>
        <h2> Météo de la ville de {{city}}</h2>
    </div>
</template>

<script>
    export default {
        name: "DisplayHeader",
        props: {
            city: String
        }
    }
</script>

<style scoped>
    .weatherJs {
        color: aliceblue;
        font-family: sans-serif;
    }

    .display-header {
        border-radius: 10px;
        padding: 20px
    }

    .icon {
        height: 35px;
        width: 35px
    }
</style>
