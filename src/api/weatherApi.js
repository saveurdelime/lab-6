import axios from "axios";

export default async function GET_WEATHER() {
    let coord = await GET_COORD();
    const Weather_API = 'https://api.weatherbit.io/v2.0/forecast/daily?&lat=' + coord.latitude + '&lon=' + coord.longitude + '&key=332d688887d1495a9a45a7fed3d87ff7';
    return axios
        .get(Weather_API)
        .then(response => {
            console.log("this is response.data for get weather")
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return undefined;
        });
}

function GET_IP() {
    return axios
        .get('http://api.ipify.org/?format=json')
        .then(response => {
            console.log("this is response.data for get ip")
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return undefined;
        });
}

async function GET_COORD() {
    let ip = await GET_IP();
    const Weather_API = 'http://api.ipstack.com/' + ip.ip + '?access_key=3d3876bc7520c1d30e0149c93ec607f4';
    return axios
        .get(Weather_API)
        .then(response => {
            console.log("this is response.data for get coord")
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return undefined;
        });
}
