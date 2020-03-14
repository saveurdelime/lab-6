import axios from "axios";

const Weather_API = "https://api.weatherbit.io/v2.0/forecast/daily?city=donnacona&country=CA&key=332d688887d1495a9a45a7fed3d87ff7";

export function GET_WEATHER() {
    return axios
        .get(Weather_API)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return undefined;
        });
}
