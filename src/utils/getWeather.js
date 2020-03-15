import GET_WEATHER from "../api/weatherApi";
import getDayOfTheWeek from "./getDayOfTheWeek";
import WeatherData from "../object/WeatherData.js";
import getIcon from "./getIcon";

export default async function getWeather(weatherForecast) {
    let fullForecast = await GET_WEATHER();
    for (let i = 0; i < 5; i++) {
        let dayOfTheWeek = getDayOfTheWeek(fullForecast.data[i].valid_date.toString());
        let min = Math.round(fullForecast.data[i].min_temp).toString();
        let max = Math.round(fullForecast.data[i].max_temp).toString();
        let icon = getIcon(fullForecast.data[i].weather.code);
        let weatherData = new WeatherData(dayOfTheWeek, max, min, icon);
        weatherForecast.data.push(weatherData);
    }
    weatherForecast.city = fullForecast.city_name;
    weatherForecast.state = fullForecast.state_code;
    return weatherForecast
}
